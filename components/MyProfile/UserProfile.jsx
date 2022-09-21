import { useContext, useState, useRef } from 'react'
import Select from 'react-select'
import Image from 'next/image'

import { OffChainContext } from '../../context/offchainContext'
import { ContractContext } from '../../context/contractContext'
import { OffChainModifyUserData } from '../../pages/api/offChain/post.js'
import { truncAddress } from '../../utils/truncAddress'

const mockedData = {
	name: 'lookingForGroup',
	cover: 'https://ethereum.org/static/28214bb68eb5445dcb063a72535bc90c/9019e/hero.webp',
	avatar: 'logo.png',
	roles: ['Frontend & Dapp developer'],
	tags: [
		'DeFi',
		'Web3 Social',
		'On-chain reputation',
		'Zero Knowledge Proofs',
		'Soulbound tokens',
	],
	level: 'Intermediate',
	socialLinks: 'twitter.com/lookingforgroup',
	timezone: 'GMT-3',
	idea: 'I want to build a decentralized and interoperable social network for builders  where you can find and create teams, build, win rewards and grow together while pushing the ethereum ecosystem forward.',
}

const customStyles = {
	option: (provided, state) => ({
		...provided,
		color: 'black',
		padding: '6px',
	}),
	control: (provided, state) => ({
		...provided,
		padding: 0,
		marginTop: '0.25rem',
		borderRadius: '2px',
		fontSize: '0.875rem',
		maxHeight: '5rem',
		maxWidth: '22rem',
		overflowY: 'scroll',
		border: '1px solid white/80%',
		backgroundColor: 'rgba(10,60,0,0.8)',
		borderRadius: '0.375rem',

		'::-webkit-scrollbar': {
			display: 'none',
		},
	}),
	placeholder: (provided, state) => ({
		...provided,
		padding: 0,
		margin: 0,
	}),
	menuList: (provided, state) => ({
		...provided,
		maxHeight: '200px',
		maxWidth: '22rem',
		overflowY: 'scroll',
	}),
}

const timezones = [
	{ value: 'GMT-3', label: 'GMT-3' },
	{ value: 'GMT-2', label: 'GMT-2' },
	{ value: 'GMT-1', label: 'GMT-1' },
]

const UserProfile = () => {
	const { userWallet } = useContext(ContractContext)
	const {
		userData,
		userTeams,
		tagOptions,
		roleOptions,
		getAppData,
		loadingAppData,
	} = useContext(OffChainContext)

	const [editMode, setEditMode] = useState(false)
	const [selectedTags, setSelectedTags] = useState([])
	const [selectedRoles, setSelectedRoles] = useState([])
	const [selectedTimezone, setSelectedTimezone] = useState('')

	const coverInput = useRef()
	const avatarInput = useRef()
	const nicknameInput = useRef()

	const formHandler = (e) => {
		e.preventDefault()

		const payload = {
			nickname: nicknameInput.current.value,
			avatar: avatarInput.current.files[0],
			cover: coverInput.current.files[0],
			socialLinks: [
				e.target.discord.value,
				e.target.twitter.value,
				e.target.github.value,
				e.target.linkedin.value,
			],
			level: e.target.level.value,
			timezone: selectedTimezone,
			idea: e.target.idea.value,
			roles: selectedRoles,
			tags: selectedTags,
		}

		// OffChainModifyUserData(userWallet.address, payload).then((response) => {
		// 	console.log(response)
		//
		// })
		console.log(payload)
	}

	return (
		<>
			{loadingAppData ? (
				<p className="text-4xl">Loading...</p>
			) : (
				<div className="relative">
					{userData.cover ? (
						<div className="h-60 w-full">
							<Image
								layout="fill"
								objectFit="cover"
								src={userData.cover}
								alt="profile cover picture"
							/>
						</div>
					) : (
						<div className="h-60 w-full bg-neutral-900" />
					)}

					{userData.avatar ? (
						<div className="absolute h-24 w-24 translate-y-[-60%] translate-x-[20%] rounded-full border-[2px] border-black bg-neutral-900">
							<Image
								layout="fill"
								objectFit="cover"
								src={userData.avatar}
								alt="profile avatar"
							/>
						</div>
					) : (
						<div className="absolute h-24 w-24 translate-y-[-60%] translate-x-[20%] rounded-full border-[2px] border-black bg-neutral-900" />
					)}

					<div className="mt-11 flex flex-col gap-5 mb-14 border-red-500 px-2 text-base 2xl:text-lg">
						<div className="flex flex-row gap-5 items-center border-b-[1px] border-white/10 pb-4">
							<div className="flex items-center gap-4 border-blue-500 mt-1">
								{editMode ? (
									<input
										type="text"
										placeholder="Nickname"
										className="inputStandard"
										ref={nicknameInput}
									/>
								) : (
									<h3 className="text-xl">
										{userData.name
											? userData.name +
											  ' - ' +
											  truncAddress(userData.address)
											: 'No nickname - ' +
											  truncAddress(userData.address)}
									</h3>
								)}
							</div>

							<button
								className="hover:-translate-y-1 duration-300"
								onClick={() => setEditMode(!editMode)}
							>
								🖋
							</button>
						</div>

						<form
							onSubmit={formHandler}
							className="flex flex-col gap-4 my-4"
						>
							<div className="flex">
								<span className="flex flex-col mb-2 w-full">
									<p className="text-lg text-secondary">
										Roles
									</p>
									{editMode ? (
										<Select
											onChange={(options) => {
												setSelectedRoles(options)
											}}
											styles={customStyles}
											options={roleOptions}
											closeMenuOnSelect={false}
											isMulti
											isSearchable={false}
										/>
									) : (
										<p className>
											{userData?.length > 0
												? userData.map(
														(item, index) =>
															item + ' '
												  )
												: 'No role setted'}
										</p>
									)}
								</span>

								<span className="flex flex-col mb-2 w-full">
									<p className="text-lg text-secondary">
										Expertise
									</p>
									{editMode ? (
										<select
											id="level"
											className="inputStandard"
										>
											<option value="junior">
												Junior
											</option>
											<option value="intermediate">
												Intermediate
											</option>
											<option value="advanced">
												advanced
											</option>
										</select>
									) : (
										<p className>
											{userData.level
												? userData.level
												: 'Expertise not setted'}
										</p>
									)}
								</span>

								<span className="flex flex-col mb-2 w-full">
									<p className="text-lg text-secondary">
										Timezone
									</p>
									{editMode ? (
										<Select
											onChange={(options) => {
												setSelectedTimezone(options)
											}}
											styles={customStyles}
											options={timezones}
											closeMenuOnSelect={false}
											isMulti
											isSearchable={false}
										/>
									) : (
										<p className>
											{userData.timezone
												? userData.timezone
												: 'Timezone not setted'}
										</p>
									)}
								</span>
							</div>

							<div className="flex">
								<span className="flex flex-col mb-2 w-1/3 pr-2">
									<p className="text-lg text-secondary">
										Interests
									</p>

									{editMode ? (
										<Select
											onChange={(options) => {
												setSelectedTags(options)
											}}
											styles={customStyles}
											options={tagOptions}
											closeMenuOnSelect={false}
											isMulti
											isSearchable={false}
										/>
									) : (
										<p className>
											{userData.tags?.length > 0
												? userData.tags?.map(
														(tag, index) =>
															tag.toString() +
															(index ==
															userData.tags
																.length -
																1
																? ' '
																: ', ')
												  )
												: 'No interests setted'}
										</p>
									)}
								</span>

								<span className="flex flex-col mb-2 w-2/3">
									<p className="text-lg text-secondary">
										Idea
									</p>

									{editMode ? (
										<textarea
											id="idea"
											className="inputStandard"
										/>
									) : (
										<p className>
											{userData.idea
												? userData.idea
												: 'No idea setted'}
										</p>
									)}
								</span>
							</div>

							<span className=" flex flex-col mb-2 w-full">
								<p className="text-lg text-secondary">Teams:</p>

								<p>
									{userData.teams?.length > 0
										? userData?.teams?.map(
												(item, index) => item.name
										  )
										: 'No team'}
								</p>
							</span>

							<span className="flex flex-col mb-2">
								<p className="text-lg text-secondary">
									Social networks
								</p>

								{editMode ? (
									<div className="flex flex-col gap-3 mt-2">
										<span className="flex gap-3 items-center">
											<Image
												src="/icons/discord.svg"
												width="30"
												height="30"
												alt="Discord Icon"
											/>
											<input
												id="discord"
												className="inputStandard"
											/>
										</span>

										<span className="flex gap-3 items-center">
											<Image
												src="/icons/github.svg"
												width="30"
												height="30"
												alt="Github Icon"
											/>
											<input
												id="github"
												className="inputStandard"
											/>
										</span>

										<span className="flex gap-3 items-center">
											<Image
												src="/icons/linkedin.svg"
												width="30"
												height="30"
												alt="Linkedin Icon"
											/>
											<input
												id="linkedin"
												className="inputStandard"
											/>
										</span>

										<span className="flex gap-3 items-center">
											<Image
												src="/icons/twitter.svg"
												width="30"
												height="30"
												alt="Twitter Icon"
											/>
											<input
												id="twitter"
												className="inputStandard"
											/>
										</span>
									</div>
								) : (
									<p className="">
										{userData.socialLinks
											? userData.socialLinks
											: 'Social links not setted'}
									</p>
								)}
							</span>
						</form>
					</div>
				</div>
			)}
		</>
	)
}

export default UserProfile
