import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Launches from './launches'
import Launch from './launch'
import Home from './home'
import LaunchPads from './launch-pads'
import LaunchPad from './launch-pad'
import NavBar from './navbar'
import { useFavorites } from '../contexts/favorite'

export default function App() {
	const [{ pads }] = useFavorites()
	console.log('pads', pads)

	return (
		<div>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/launches' element={<Launches />} />
				<Route path='/launches/:launchId' element={<Launch />} />
				<Route path='/launch-pads' element={<LaunchPads />} />
				<Route
					path='/launch-pads/:launchPadId'
					element={<LaunchPad />}
				/>
			</Routes>
		</div>
	)
}