import { Button, useColorMode } from '@chakra-ui/react'

const Toggle = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	return (
			<header>
				<Button onClick={toggleColorMode}>
					Toggle {colorMode === 'light'||'Light' ? 'Dark' : 'Light'}
				</Button>
			</header>
	)
}

export default Toggle