import { Box } from '@chakra-ui/react'
import HomePage from '../components/homePage'
import Nav from '../components/nav'

const App = () => {
  return (
    <Box height='100vh' width='100vw'>
      <Box>
        <Nav />
      </Box>
      <Box height='calc(100vh - 100px)' >
        <HomePage />
      </Box>
    </Box>
  )
}

export default App;