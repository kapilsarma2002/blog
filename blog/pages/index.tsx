import { Box } from '@chakra-ui/react'
import Nav from '../components/nav'
import HomePage from '../components/homePage'

const App = () => {
  return (
    <Box height='100vh' width='100vw'>
      <Box height='100px'>
        <Nav />
      </Box>
      <Box height='calc(100vh - 100px)' >
        <HomePage />
      </Box>
    </Box>
  )
}

export default App;