import React, { useEffect, useState } from 'react'
import { OffChainGetAllTeamsFiltered } from '../../pages/api/offChain/get'

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const [filters, setFilters] = useState(null)
	const [openFilters, setOpenFilters] = useState(false)

	const handleSwitchFilters = (event) => {
		setOpenFilters((prevState) => !prevState)
	}

	return (
		<div className={`relative w-1/2 transition-all duration-200`}>
			<div className="h-10 relative w-full">
				<input
					className="w-full h-full bg-white/15 rounded-xl px-3.5"
					type="text"
				/>
				<div className="absolute right-[0.3rem] top-[50%] translate-y-[-50%] flex items-center justify-center gap-1">
					<button
						className=" text-xl bg-white/20 rounded-xl py-0.5 px-1 hover:bg-amber-200/20"
						onClick={handleSwitchFilters}
					>
						🕵️‍♀️
					</button>
					<button className=" text-xl bg-white/20 rounded-xl py-0.5 px-1 hover:bg-amber-200/20">
						🔎
					</button>
				</div>

				<button className=""></button>
			</div>

			<div
				className={`border-xl bg-white/15 transition-all duration-300 rounded-xl mt-1 ${
					openFilters ? 'h-60' : 'h-0'
                    }`}
                
			></div>
		</div>
	)
}

export default SearchBar
