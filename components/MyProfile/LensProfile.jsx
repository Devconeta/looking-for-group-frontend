// mocked data
const lensProfile = {
	handle: 'lookingForGroup.lens',
	bio: '🐲 Decentralized platform for finding and creating teams of builders 🌱',
	coverPicture: {
		original: {
			url: 'https://ethereum.org/static/28214bb68eb5445dcb063a72535bc90c/9019e/hero.webp',
		},
	},
	picture: {
		original: {
			url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8fN3y2q2aRKnRwlalcg8INxOJwCdDc1x1uaoT_y84W6dSxeVKahaFnRrSEXvbHpWCfgw&usqp=CAU',
		},
	},
	stats: {
		totalPosts: 5,
		totalFollowers: 10,
		totalFollowing: 20,
	},
}

const LensProfile = () => {
	return <div></div>
}

export default LensProfile

// {
// 	loadingAppData ? (
// 		<p className="text-4xl">Loading...</p>
// 	) : (
// 		<div className="relative">
// 			{formattedUserData.lensMode &&
// 			lensProfile.coverPicture?.original?.url ? (
// 				<img
// 					className="h-60 w-full object-cover bg-bottom "
// 					src={lensProfile.coverPicture?.original?.url}
// 					alt="profile cover picture"
// 				/>
// 			) : !formattedUserData.lensMode && formattedUserData.cover ? (
// 				<img
// 					className="h-60 w-full object-cover"
// 					src={formattedUserData.cover}
// 					alt="profile cover picture"
// 				/>
// 			) : (
// 				<div className="h-60 w-full bg-neutral-900" />
// 			)}

// 			{formattedUserData.lensMode &&
// 			lensProfile.picture?.original?.url ? (
// 				<img
// 					className="absolute h-24 w-24 translate-y-[-60%] translate-x-[20%] rounded-full border-[2px] border-black"
// 					src={lensProfile.picture?.original?.url}
// 					alt={'profile picture'}
// 				/>
// 			) : !formattedUserData.lensMode && formattedUserData.avatar ? (
// 	<img
// 		className="absolute h-24 w-24 translate-y-[-60%] translate-x-[20%] rounded-full border-[2px] border-black bg-neutral-900"
// 		src={formattedUserData.avatar}
// 		alt={'profile picture'}
// 	/>
// ) : (
// 	<div className="absolute h-24 w-24 translate-y-[-60%] translate-x-[20%] rounded-full border-[2px] border-black bg-neutral-900" />
// )}
// 			<div className="mt-11 flex flex-col gap-5 mb-14 border-red-500 px-2 text-base 2xl:text-lg">
// 				<div className="flex items-center justify-between  border-b-[1px] border-white/10 pb-4">
// 					<div className="flex items-center gap-4 border-blue-500 ml-2">
// 						<h3 className="text-xl">
// 							{formattedUserData.lensMode && lensProfile.handle
// 								? lensProfile.handle
// 								: !formattedUserData.lensMode &&
// 								  formattedUserData.name
// 								? formattedUserData.name +
// 								  ' - ' +
// 								  truncAddress(formattedUserData.address)
// 								: 'No nickname - ' +
// 								  truncAddress(formattedUserData.address)}
// 						</h3>
// 						{/* FOLLOW ON LENS */}
// 						{formattedUserData.lensMode && (
// 							<button className="btn--thin !h-[2rem] !w-[5rem] !bg-primary">
// 								Follow
// 							</button>
// 						)}
// 					</div>

// 					{formattedUserData.lensMode && (
// 						<div className="flex">
// 							<p className="mx-1">
// 								Posts: {lensProfile.stats?.totalPosts}
// 							</p>
// 							<p className="mx-1">
// 								Followers: {lensProfile.stats?.totalFollowers}
// 							</p>
// 							<p className="mx-1">
// 								Following: {lensProfile.stats?.totalFollowing}
// 							</p>
// 						</div>
// 					)}
// 				</div>
// 				{formattedUserData.lensMode && (
// 					<p className="text-lg italic mb-2">
// 						{lensProfile.bio ? lensProfile.bio : ''}
// 					</p>
// 				)}

// 				<form className="flex flex-col gap-4 my-4">
// 					<div className="flex ">
// 						<span className="flex flex-col mb-2 w-full">
// 							<p className="text-lg text-secondary">Role</p>
// 							<p className>
// 								{formattedUserData.roles?.length > 0
// 									? formattedUserData.roles.map(
// 											(item, index) => item + ' '
// 									  )
// 									: 'No role setted'}
// 							</p>
// 						</span>
// 						<span className="flex flex-col mb-2 w-full">
// 							<p className="text-lg text-secondary">Expertise </p>
// 							<p className>
// 								{formattedUserData.level
// 									? formattedUserData.level
// 									: 'Expertise not setted'}
// 							</p>
// 						</span>
// 						<span className="flex flex-col mb-2 w-full">
// 							<p className="text-lg text-secondary">Timezone </p>
// 							<p className>
// 								{formattedUserData.timezone
// 									? formattedUserData.timezone
// 									: 'Timezone not setted'}
// 							</p>
// 						</span>
// 					</div>
// 					<div className="flex">
// 						<span className="flex flex-col mb-2 w-1/3 pr-2">
// 							<p className="text-lg text-secondary">Interests</p>
// 							<p className>
// 								{formattedUserData.tags?.length > 0
// 									? formattedUserData.tags?.map(
// 											(tag, index) =>
// 												tag.toString() +
// 												(index ==
// 												formattedUserData.tags.length -
// 													1
// 													? ' '
// 													: ', ')
// 									  )
// 									: 'No interests setted'}
// 							</p>
// 						</span>
// 						<span className="flex flex-col mb-2 w-2/3">
// 							<p className="text-lg text-secondary">Ideas</p>
// 							<p className>
// 								{formattedUserData.idea
// 									? formattedUserData.idea
// 									: 'No idea setted'}
// 							</p>
// 						</span>
// 					</div>

// 					<span className=" flex flex-col mb-2 w-full">
// 						<p className="text-lg text-secondary">Teams:</p>
// 						<p>
// 							{formattedUserData.teams?.length > 0
// 								? formattedUserData?.teams?.map(
// 										(item, index) => item.name
// 								  )
// 								: 'No team'}
// 						</p>
// 					</span>
// 					<span className="flex flex-col mb-2">
// 						<p className="text-lg text-secondary">
// 							Social networks
// 						</p>
// 						<p className="">
// 							{formattedUserData.socialLinks
// 								? formattedUserData.socialLinks
// 								: 'Social links not setted'}
// 						</p>
// 					</span>
// 				</form>

// 				{formattedUserData.lensMode && (
// 					<form className="w-full flex flex-col">
// 						<h3 className="text-2xl text-primary mb-5">
// 							Share a post on Lens
// 						</h3>
// 						<div className="bg-neutral-900 rounded-lg w-full h-full flex flex-col p-4 gap-4">
// 							<textarea
// 								type="text"
// 								name="teamIdea"
// 								id="teamIdea"
// 								className=" text-white/80 resize-none bg-transparent border-[1px] border-white/10 h-full rounded-lg p-3 min-h-[6rem] focus:outline-none"
// 								placeholder={
// 									'My lfg team, The Infinite Garden is looking for a Solidity Engineer and a UI designer!, come and join us!. https://lookingforgroup/team/theinfinitegarden'
// 								}
// 							/>
// 							<div className="h-10 flex justify-between">
// 								<div className="flex gap-2">
// 									<button className="btn--thin !bg-primary/80">
// 										Add your team
// 									</button>
// 									<img
// 										src="picture.png"
// 										className="orangeFilter w-10 h-10"
// 										alt=""
// 									/>
// 								</div>

// 								<button className="btn--thin !bg-primary/80">
// 									Post
// 								</button>
// 							</div>
// 						</div>
// 					</form>
// 				)}
// 			</div>
// 		</div>
// 	)
// }
