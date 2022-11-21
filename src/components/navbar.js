import React, { useState } from 'react'

import FavoritesDrawer from './favorites'
import { Heart } from 'react-feather'
import { Flex, Text } from '@chakra-ui/core'

function NavBar() {
	const [showFavorites, toggleFavorites] = useState(false)
	return (
		<>
			<Flex
				as='nav'
				align='center'
				justify='space-between'
				wrap='wrap'
				padding='6'
				bg='gray.800'
				color='white'
			>
				<Text
					fontFamily='mono'
					letterSpacing='2px'
					fontWeight='bold'
					fontSize='lg'
				>
					¡SPACE·R0CKETS!
				</Text>
				<Heart onClick={() => toggleFavorites(true)} />
			</Flex>
			<FavoritesDrawer
				isOpen={showFavorites}
				onClose={() => toggleFavorites(false)}
			/>
		</>
	)
}

export default NavBar