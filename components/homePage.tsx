import {
  Box,
  Text
} from '@chakra-ui/react'
import Nav from './nav'

const HomePage = ({children}: any) => {
  return (
    <Box height='100vh' width='100vw' color='white' bg='rgb(0,0,25)'>

      {/* navbar */}
      <Box height='70px'>
        <Nav /> 
      </Box>

      {/* main page */}
      <Box 
        height='calc(100vh - 70px)'
        borderRadius='20px' bg='#F8F8FF' color='black'
      >

        {children}

      </Box>

    </Box>
  )
}

export default HomePage