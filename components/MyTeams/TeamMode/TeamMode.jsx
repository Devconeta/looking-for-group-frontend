import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Tooltip } from '@nextui-org/react'

import { truncAddress } from '../../../utils/truncAddress'

const TeamMode = ({ team, setTreasuryMode, setEditMode }) => {
	const [codeIsCopied, setCodeIsCopied] = useState(false)

	useEffect(() => {
		console.log(team)
	}, [team])

	const copyDiscord = (member) => {
		if (member.socialLinks.length > 0 && member.socialLinks[0].link != '') {
			navigator.clipboard.writeText(member.socialLinks[0].link)
		}
	}

	return (
		<>
			<div className="flex h-full w-full flex-col justify-between gap-7 2xl:p-2 2xl:text-lg">
				{/* HIGHER BLOCK */}
				<div className="flex flex-row h-full gap-16 2xl:gap-20">
					{/* PHOTO BLOCK (LEFT) */}
					<div className="flex flex-col w-[20%] max-w-[230px] gap-[3%] items-center justify-center">
						{team.avatar?.length > 10 ? (
							<span className="flex justify-center items-center w-full h-full">
								<Image
									width={200}
									height={200}
									src={team.avatar}
									alt="team image"
									objectFit="cover"
									objectPosition="center"
									style={{
										borderRadius: '100%',
									}}
								/>
							</span>
						) : (
							<div className="mb-3 w-full h-full items-center justify-center flex rounded-full border-[1px] border-white/50 bg-white/15">
								🦄
							</div>
						)}

						<div>
							<h2 className="mb-1 text-center text-2xl text-primary">
								{team.name}
							</h2>

							<p className="italic">{team.slogan}</p>
						</div>
					</div>

					{/* DESCRIPTION BLOCK (RIGHT) */}
					<div className="flex flex-col min-h-[315px] w-10/12 justify-between">
						{/* TEAM DISTRIBUTION BLOCK (TOP)*/}
						<div className="mb-6 flex justify-between gap-24">
							{/* MEMBERS BLOCK (LEFT)*/}
							<div className="flex flex-col min-h-[170px] w-7/12 max-w-[500px] ">
								<div className="flex items-center justify-between">
									<h3 className="mb-1 text-xl text-amber-300">
										Members
									</h3>
									<Tooltip
										contentColor=""
										color="invert"
										onClick={() => {
											setCodeIsCopied(true)
											navigator.clipboard.writeText(
												team.code
											)
										}}
										content={
											<p className="!font-Lusitana text-base tracking-wide text-primaryLight 2xl:text-lg ">
												Click here to copy the code to
												invite a new member!
											</p>
										}
										placement="top"
									>
										{codeIsCopied ? (
											<Image
												src="/icons/check.png"
												height={10}
												width={10}
												alt="Invite icon"
											/>
										) : (
											<Image
												src="/invite.png"
												height={10}
												width={10}
												alt="Invite icon"
											/>
										)}
									</Tooltip>
								</div>

								{team.members.map((member, index) => (
									<div
										key={index}
										className="flex flex-row items-center justify-between gap-10 text-lg"
									>
										<div className="w-1/3">
											<Link href={`#`} className="">
												<p className="cursor-pointer">
													{member.name
														? member.name
														: truncAddress(
																member.address
														  )}
												</p>
											</Link>
										</div>
										<p className="w-1/2">{member.role}</p>

										<Tooltip
											color="invert"
											onClick={() => {
												copyDiscord(member)
											}}
											content={
												<p className="!font-Lusitana text-base tracking-wide text-primaryLight 2xl:text-lg ">
													Click here to copy the code
													to invite a new member!
												</p>
											}
											placement="top"
										>
											<Image
												src="/discord.svg"
												height={10}
												width={10}
												alt="Discord copy code user icon"
											/>
										</Tooltip>
									</div>
								))}

								{/* IDEA BLOCK (BOTTOM)*/}
								<div className="h-full w-full">
									<h3 className="mb-1 text-xl text-amber-300">
										Idea
									</h3>
									<p>
										{team?.idea
											? team.idea
											: 'The team has not selected an idea yet'}
									</p>
								</div>
							</div>

							{/* TREASURE BLOCK (RIGHT)*/}
							<div className="flex flex-col w-6/12 h-full gap-3 justify-between">
								<div className="flex flex-col border border-white/80 rounded-sm">
									<h3 className="mb-1 text-lg text-amber-300">
										Party Treasure
									</h3>

									{team.isContractDeployed ? (
										<p>
											The party treasure is already
											deployed and working.
										</p>
									) : (
										<p>
											No party treasure has not yet been
											deployed.
										</p>
									)}

									<button
										className="btn--golden max-w-[340px]"
										onClick={() => {
											setTreasuryMode(true)
										}}
									>
										{team.isContractDeployed
											? 'View party treasure'
											: 'Create party treasure'}
									</button>
								</div>

								<div className="flex flex-row gap-2">
									<button
										className="btn--golden flex items-center gap-2 !px-6"
										onClick={() =>
											setEditMode({
												display: true,
												team: team,
											})
										}
									>
										<p>Edit team</p>
										<Image
											width={10}
											height={10}
											src="/edit.png"
											alt="edit button icon"
										/>
									</button>

									<a
										src={team.discordURL}
										target="_blank"
										rel="noreferrer"
										className="btn--golden flex items-center gap-2 !px-6"
									>
										<p>View channel</p>
										<Image
											width={10}
											height={10}
											src="/discord svg"
											alt="Discord channel button icon"
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default TeamMode
