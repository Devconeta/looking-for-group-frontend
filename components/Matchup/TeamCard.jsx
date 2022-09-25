import { Tooltip } from '@nextui-org/react'
import Image from 'next/image'
import { truncAddress } from '../../utils/truncAddress'

const TeamCard = ({ team, userData }) => {
	const teamMembers = team.members.map(
		(member, index) =>
			(member.name ? member.name : truncAddress(member.address)) +
			' ' +
			(member.role ? member.role : 'Dapp developer')
	)
	const teamRoles = team.members.map((member, index) => member.role)

	// MATCH REFERENCE:
	// 0 -> NONE,
	// 1 -> SOME
	// 2 -> GOOD
	// 3 -> BAD

	const applyTeamHandler = () => {
		// DO SOMETHING
	}

	const orbs = [
		{
			icon: '⚡',
			title: 'Porject idea',
			content: team.idea
				? team.idea
				: 'The team has not a defined an idea yet',
			match:
				userData?.idea?.length > 0 && team.idea.length == 0
					? 2
					: userData?.idea?.length == 0 && team.idea.length > 0
					? 2
					: 0,
			position: 'translate-x-[-37%] translate-y-[-221%]', // -50% - 50% = -100%
		},
		{
			icon: '🔍',
			title: 'Looking for',
			content:
				team.lookingFor?.length > 0
					? team.lookingFor.join(', ')
					: 'The team has not set what is looking for.',
			match: team.lookingFor?.includes(userData?.role) ? 2 : 0,
			position: 'translate-x-[0] translate-y-[-100%]', // -50% - 50% = -100%
		},
		// {
		//   icon: "🦾",
		//   title: "Expertise",
		//   content: team.level ? team.level : "Not setted",
		//   match:
		//     team.level && team.level == userData?.level
		//       ? 2
		//       : Math.abs(team.level - userData?.level) == 1
		//       ? 1
		//       : 0,
		//   position: "translate-x-[-4%] translate-y-[25%]", // -50% is centered.
		// },
		{
			icon: '🔥',
			title: 'Interests',
			content: team.level ? team.level : 'Not setted',
			match:
				team.level && team.level == userData?.level
					? 2
					: Math.abs(team.level - userData?.level) == 1
					? 1
					: 0,
			position: 'translate-x-[-4%] translate-y-[25%]', // -50% is centered.
		},

		{
			icon: '⌛',
			title: 'Timezone',
			content: team.timezone
				? 'GMT ' +
				  team.timezone +
				  ' , ' +
				  Math.abs(team.timezone - userData.timezone) +
				  'hs away from you.'
				: 'GMT (-4)',
			match: !team.timezone
				? 0
				: Math.abs(team.timezone - userData.timezone) <= 2
				? 2
				: Math.abs(team.timezone - userData.timezone) <= 4
				? 1
				: Math.abs(team.timezone - userData.timezone) <= 6
				? 0
				: -1,

			position: 'translate-x-[-50%] translate-y-[143%]', // -50% + 150% = 100%
		},
		{
			icon: '👤',
			title: 'Members',
			content: teamMembers.join(', '),
			match: '',
			position: 'translate-x-[-142%] translate-y-[230%]', // original: translate-x-[-136%] translate-y-[236%]
		},
	]

	return (
		<div className="relative mx-5 flex flex-col items-center p-8 2xl:mx-7 ">
			<h3 className="absolute top-[1.4rem] text-xl text-white">
				{team.name}
			</h3>

			{/* MEDIA QUERYES */}
			<div className="flex 2xl:hidden">
				<Image
					className="relative"
					width="185%"
					height="185%"
					src="/orb.png"
					alt="Team Orb"
				/>
			</div>
			<div className="hidden 2xl:flex">
				<Image
					className="relative"
					width="210%"
					height="210%"
					src="/orb.png"
					alt="Team Orb"
				/>
			</div>
			<div className="absolute bottom-[0.6rem] text-[1.4rem]">
				{team.members.length + '/' + team.maxMembers}
			</div>
			{/* MEDIA QUERYES */}

			{orbs.map((orb, index) => (
				<div
					key={index}
					className={`absolute top-[50%] right-[0] ${orb.position}`}
				>
					<Tooltip
						contentColor=""
						color="invert"
						content={
							<div className="flex flex-col">
								<h3 className="text-lg text-primary">
									{orb.title}
								</h3>
								<p className="!font-Lusitana tracking-wide text-primaryLight text-[1rem]  2xl:text-lg">
									{orb.content}
								</p>
							</div>
						}
						placement="right"
					>
						<span
							className={`h-8 w-8 rounded-full border-[2px] 2xl:h-10 2xl:w-10  ${
								orb.match == 2
									? 'border-green-500/50'
									: orb.match == 1
									? 'border-yellow-500/50'
									: orb.match == 0
									? 'border-white/20'
									: 'border-red-500/50'
							} flex items-center justify-center text-lg `}
						>
							{orb.icon}
						</span>
					</Tooltip>
				</div>
			))}

			<button onClick={applyTeamHandler} className="btn--golden">
				APPLY TEAM
			</button>
		</div>
	)
}

export default TeamCard