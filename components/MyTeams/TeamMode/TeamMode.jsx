import Link from 'next/link'
import Image from 'next/image'

import { Tooltip } from '@nextui-org/react'

import { truncAddress } from '../../../utils/truncAddress'

const TeamMode = ({ team, setTreasuryMode, setEditMode }) => {
	return (
		<>
			<div className="flex h-full w-full flex-col justify-between gap-7 2xl:p-2 2xl:text-lg">
				{/* HIGHER BLOCK */}
				<div className="flex h-full gap-16 border-yellow-500 2xl:gap-20 ">
					{/* PHOTO BLOCK (LEFT) */}
					<div className="flex w-[20%] max-w-[230px] flex-col items-center justify-center gap-[3%] ">
						{team.avatar && team.avatar.length > 10 ? (
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
					<div className="flex min-h-[315px] w-10/12 flex-col justify-between  border-blue-500">
						{/* TEAM DISTRIBUTION BLOCK (TOP)*/}
						<div className="mb-6 flex justify-between gap-24 border-orange-500">
							{/* MEMBERS BLOCK (LEFT)*/}
							<div className="flex min-h-[170px] w-7/12 max-w-[500px] flex-col ">
								<div className="flex items-center justify-between">
									<h3 className="mb-1 text-xl text-amber-300">
										Members
									</h3>
									<Tooltip
										contentColor=""
										color="invert"
										onClick={() => {
											alert(
												'Invite for team ' +
													team.code +
													' copied!'
											)
											navigator.clipboard.writeText(
												'localhost:3000/' + team.code
											)
										}}
										content={
											<p className="!font-Lusitana text-base tracking-wide text-primaryLight 2xl:text-lg ">
												Click here to copy an invite for
												a new member
											</p>
										}
										placement="top"
									>
										<img
											src="invite.png"
											className="relative left-[3px] h-7 w-7 invert"
											alt=""
										/>
									</Tooltip>
								</div>
								{team.members.map((member, index) => (
									<div
										key={index}
										className="flex items-center justify-between gap-10 text-lg"
									>
										<div className="w-1/3">
											<Link
												href={`/user/${member.address}`}
												className=""
											>
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
										<div className="">
											<img
												src={`/discord.svg`}
												className="h-6 w-6 invert"
												alt="discord icon"
											/>
										</div>
									</div>
								))}
								{/* <button className="btn--blue">invite + </button> */}
							</div>

							{/* TREASURE BLOCK (RIGHT)*/}
							<div className="flex w-6/12 flex-col justify-between">
								<div className="flex flex-col ">
									<h3 className="mb-1 text-lg text-amber-300">
										Party Treasure
									</h3>
									{team.isContractDeployed ? (
										<p>
											The party treasure is deployed an
											working.
										</p>
									) : (
										<p>
											No party treasure has not yet been
											deployed.
										</p>
									)}
								</div>
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
						</div>
						{/* IDEA BLOCK (BOTTOM)*/}
						<div className="h-full ">
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
				</div>

				{/* BOTTOM BLOCK */}
				<div className="flex w-full justify-between ">
					<button
						className="btn--golden flex items-center gap-2 !px-6 "
						onClick={() =>
							setEditMode({ display: true, team: team })
						}
					>
						edit team
						<img
							src="edit.png"
							className="w-6 h-6 mr-[-0.4rem] "
							alt=""
						/>
					</button>
				</div>
			</div>
		</>
	)
}

export default TeamMode
