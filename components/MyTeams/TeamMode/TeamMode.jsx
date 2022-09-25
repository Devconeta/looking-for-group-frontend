import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Tooltip } from '@nextui-org/react'

import { truncAddress } from '../../../utils/truncAddress'

const TeamMode = ({ team, setTreasuryMode, setEditMode }) => {
	useEffect(() => {
		console.log(team)
	}, [team])

	const copyDiscord = (member) => {
		if (member.socialLinks.length > 0 && member.socialLinks[0].link != '') {
			navigator.clipboard.writeText(member.socialLinks[0].link)
		}
	}

	return (
		<div className="flex flex-row gap-7 w-full h-full items-center">
			{/* AVATAR-NAME-SLOGAN BLOCK */}

			<div className="flex flex-col max-w-[230px] text-center">
				<div className="flex w-full items-center justify-center rounded-full border-[1px] border-white/50 bg-white/15">
					{team.avatar?.length > 10 ? (
						<span className="flex items-start w-full h-full">
							<Image
								width={200}
								height={200}
								objectFit="cover"
								src={team.avatar}
								alt="team image"
								objectPosition="center"
								style={{
									borderRadius: '100%',
								}}
							/>
						</span>
					) : (
						'🦄'
					)}
				</div>

				<div className="flex flex-col gap-1 mt-3">
					<h2 className="text-center text-2xl text-primary">
						{team.name}
					</h2>

					<p className="italic">{team.slogan}</p>
				</div>
			</div>

			{/* MEMBERS-IDEA BLOCK */}
			<div className="flex flex-col gap-7">
				<div className="flex flex-col">
					<div className="flex items-center justify-between">
						<h3 className="mb-1 text-xl text-amber-300">Members</h3>
						<Tooltip
							contentColor="invert"
							color="invert"
							onClick={() => {
								navigator.clipboard.writeText(team.code)
							}}
							content={
								<p className="!font-Lusitana text-base tracking-wide text-primaryLight 2xl:text-lg ">
									Click here to copy the code to invite a new
									member!
								</p>
							}
							placement="top"
						>
							<img
								src="invite.png"
								className="relative left-[3px] h-7 w-7 invert"
								alt="Invite icon"
							/>
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
											: truncAddress(member.address)}
									</p>
								</Link>
							</div>
							<p className="w-1/2">
								{member.roles?.length > 0 && member.roles[0]}
							</p>

							<Tooltip
								color="invert"
								onClick={() => {
									copyDiscord(member)
								}}
								content={
									<p className="!font-Lusitana text-base tracking-wide text-primaryLight 2xl:text-lg ">
										Click here to copy the code to invite a
										new member!
									</p>
								}
								placement="top"
							>
								<img
									src={`/discord.svg`}
									className="h-12 w-12 invert"
									alt="discord icon"
								/>
							</Tooltip>
						</div>
					))}
				</div>

				<div className="h-full w-full">
					<h3 className="mb-1 text-xl text-amber-300">Idea</h3>
					<p>
						{team?.idea
							? team.idea
							: 'The team has not selected an idea yet'}
					</p>
				</div>
			</div>

			{/* PARTY TREASURE-BUTTONS BLOCK */}
			<div className="flex flex-col w-6/12 p-2 h-[90%] gap-3 border border-white/40 rounded-sm self-center">
				<div className="flex flex-col h-full justify-between ">
					<div>
						<h3 className="mb-1 text-lg text-amber-300">
							Party Treasure
						</h3>

						{team.isContractDeployed ? (
							<p>
								The party treasure is already deployed and
								working.
							</p>
						) : (
							<p>No party treasure has not yet been deployed.</p>
						)}
					</div>

					<button
						className="btn--golden self-center w-[75%] mb-2"
						onClick={() => {
							setTreasuryMode(true)
						}}
					>
						{team.isContractDeployed
							? 'View party treasure'
							: 'Create party treasure'}
					</button>
				</div>

				<div className="flex flex-row justify-center gap-2">
					<button
						className="btn--golden flex items-center justify-center gap-2 !px-6"
						onClick={() =>
							setEditMode({
								display: true,
								team: team,
							})
						}
					>
						<p>Edit team</p>
						<Image
							width={15}
							height={15}
							src="/edit.png"
							alt="edit button icon"
						/>
					</button>

					<a
						src={team.discordURL}
						target="_blank"
						rel="noreferrer"
						className="btn--golden flex items-center justify-center gap-2 !px-6"
					>
						<p>View channel</p>
						<Image
							width={15}
							height={15}
							src="/discord.svg"
							alt="Discord channel button icon"
						/>
					</a>
				</div>
			</div>
		</div>
	)
}

// <>
// 	<div className="flex h-full w-full flex-col justify-between gap-7 2xl:p-2 2xl:text-lg">
// 		{/* HIGHER BLOCK */}
// <div className="flex flex-row h-full gap-16 2xl:gap-20">
// 	{/* PHOTO BLOCK (LEFT) */}
// 	<div className="flex flex-col w-[20%] max-w-[230px] gap-[3%] items-center justify-center">
// 		{team.avatar?.length > 10 ? (
// 			<span className="flex justify-center items-center w-full h-full">
// 				<Image
// 					width={200}
// 					height={200}
// 					src={team.avatar}
// 					alt="team image"
// 					objectFit="cover"
// 					objectPosition="center"
// 					style={{
// 						borderRadius: '100%',
// 					}}
// 				/>
// 			</span>
// 		) : (
// 			<div className="mb-3 w-full h-full items-center justify-center flex rounded-full border-[1px] border-white/50 bg-white/15">
// 				🦄
// 			</div>
// 		)}

// 		<div>
// 			<h2 className="mb-1 text-center text-2xl text-primary">
// 				{team.name}
// 			</h2>

// 			<p className="italic">{team.slogan}</p>
// 		</div>
// 	</div>

// {/* DESCRIPTION BLOCK (RIGHT) */}
// <div className="flex flex-col w-10/12 justify-between">
// 	{/* TEAM DISTRIBUTION BLOCK (TOP)*/}
// 	<div className="mb-6 flex justify-between gap-24">
// 		{/* MEMBERS BLOCK (LEFT)*/}
// 		<div className="flex flex-col w-7/12 max-w-[500px] ">
// 			<div className="flex items-center justify-between">
// 				<h3 className="mb-1 text-xl text-amber-300">
// 					Members
// 				</h3>
// 				<Tooltip
// 					contentColor=""
// 					color="invert"
// 					onClick={() => {
// 						setCodeIsCopied(true)
// 						navigator.clipboard.writeText(
// 							team.code
// 						)
// 					}}
// 					content={
// 						<p className="!font-Lusitana text-base tracking-wide text-primaryLight 2xl:text-lg ">
// 							Click here to copy the code to
// 							invite a new member!
// 						</p>
// 					}
// 					placement="top"
// 				>
// 					{codeIsCopied ? (
// 						<Image
// 							src="/icons/check.png"
// 							height={10}
// 							width={10}
// 							alt="Invite icon"
// 						/>
// 					) : (
// 						<Image
// 							src="/invite.png"
// 							height={10}
// 							width={10}
// 							alt="Invite icon"
// 						/>
// 					)}
// 				</Tooltip>
// 			</div>

// 			{team.members.map((member, index) => (
// 				<div
// 					key={index}
// 					className="flex flex-row items-center justify-between gap-10 text-lg"
// 				>
// 					<div className="w-1/3">
// 						<Link href={`#`} className="">
// 							<p className="cursor-pointer">
// 								{member.name
// 									? member.name
// 									: truncAddress(
// 											member.address
// 									  )}
// 							</p>
// 						</Link>
// 					</div>
// 					<p className="w-1/2">{member.role}</p>

// 					<Tooltip
// 						color="invert"
// 						onClick={() => {
// 							copyDiscord(member)
// 						}}
// 						content={
// 							<p className="!font-Lusitana text-base tracking-wide text-primaryLight 2xl:text-lg ">
// 								Click here to copy the code
// 								to invite a new member!
// 							</p>
// 						}
// 						placement="top"
// 					>
// 						<Image
// 							src="/discord.svg"
// 							height={10}
// 							width={10}
// 							alt="Discord copy code user icon"
// 						/>
// 					</Tooltip>
// 				</div>
// 			))}

// 			{/* IDEA BLOCK (BOTTOM)*/}
// 			<div className="h-full w-full">
// 				<h3 className="mb-1 text-xl text-amber-300">
// 					Idea
// 				</h3>
// 				<p>
// 					{team?.idea
// 						? team.idea
// 						: 'The team has not selected an idea yet'}
// 				</p>
// 			</div>
// 		</div>

// 					{/* TREASURE BLOCK (RIGHT)*/}
// 					<div className="flex flex-col w-6/12 h-full gap-3 justify-between">
// 						<div className="flex flex-col h-full p-2 border border-white/40 rounded-sm">
// 							<h3 className="mb-1 text-lg text-amber-300">
// 								Party Treasure
// 							</h3>

// 							{team.isContractDeployed ? (
// 								<p>
// 									The party treasure is already
// 									deployed and working.
// 								</p>
// 							) : (
// 								<p>
// 									No party treasure has not yet been
// 									deployed.
// 								</p>
// 							)}

// 							<button
// 								className="btn--golden self-center w-[75%] mt-3"
// 								onClick={() => {
// 									setTreasuryMode(true)
// 								}}
// 							>
// 								{team.isContractDeployed
// 									? 'View party treasure'
// 									: 'Create party treasure'}
// 							</button>
// 						</div>

// 						<div className="flex flex-row justify-center gap-2">
// 							<button
// 								className="btn--golden flex items-center justify-center gap-2 !px-6"
// 								onClick={() =>
// 									setEditMode({
// 										display: true,
// 										team: team,
// 									})
// 								}
// 							>
// 								<p>Edit team</p>
// 								<Image
// 									width={15}
// 									height={15}
// 									src="/edit.png"
// 									alt="edit button icon"
// 								/>
// 							</button>

// 							<a
// 								src={team.discordURL}
// 								target="_blank"
// 								rel="noreferrer"
// 								className="btn--golden flex items-center justify-center gap-2 !px-6"
// 							>
// 								<p>View channel</p>
// 								<Image
// 									width={15}
// 									height={15}
// 									src="/discord.svg"
// 									alt="Discord channel button icon"
// 								/>
// 							</a>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </>

export default TeamMode
