import React, { useMemo, useEffect } from 'react'

import {
	Heading,
	Stack,
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
} from '@chakra-ui/core'

import { useFavorites } from '../contexts/favorite'
import { LaunchItem } from './launches'
import { LaunchPadItem } from './launch-pads'

function FavoritesDrawer({ isOpen, onClose }) {
	const [{ launches, pads }] = useFavorites()

	const favoriteLaunches = useMemo(() =>
	Array.from(launches.values()), [launches])
	
	const favoritePads = useMemo(() => Array.from(pads.values()), [pads])

	return (
		<>
			<Drawer isOpen={isOpen} placement='right' onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Favorites</DrawerHeader>
					<hr />

					<DrawerBody>
						<Stack>
							{favoriteLaunches.length && (
								<Heading
									color='gray.900'
									display='inline'
									fontSize={['md', 'lg']}
									borderRadius='lg'
								>
									Launches
								</Heading>
							)}
							{favoriteLaunches.map(launch => (
								<LaunchItem
									launch={launch}
									key={launch.flight_number}
								/>
							))}
							{favoritePads.length && (
								<Heading
									color='gray.900'
									display='inline'
									my='2'
									fontSize={['md', 'lg']}
									borderRadius='lg'
								>
									Launch Pads
								</Heading>
							)}
							{favoritePads.map(pad => (
								<LaunchPadItem
									launchPad={pad}
									key={pad.site_id}
								/>
							))}
							{!favoriteLaunches.length && !favoritePads.length && (
								<Heading
									fontWeight='normal'
									fontSize='lg'
									color='gray.400'
								>
									No favorites yet
								</Heading>
							)}
						</Stack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default FavoritesDrawer
