// import {
//   FormControl,
//   FormLabel,
//   Input,
//   Textarea,
//   Button
// } from '@chakra-ui/react'
// import { useRouter } from 'next/router'
// import { useState } from 'react'
// import { auth } from '../lib/mutations'

// const BlogForm = () => {

//   const router = useRouter()

//   const [title, setTitle] = useState('')
//   const [desc, setDesc] = useState('')
//   const [content, setContent] = useState('')

//   async function onSubmit(e: any) {
//     e.preventDefault()
//     await auth('add',{title,desc,content})
//     router.push('/')
//   }


//   return (
//       <FormControl isRequired borderColor='black'>
//         <FormLabel>Title</FormLabel>
//         <Input placeholder='Title' onChange = {(e) => setTitle(e.target.value)}/>
//         <FormLabel>Description</FormLabel>
//         <Input placeholder='Description' onChange = {(e) => setDesc(e.target.value)} />
//         <FormLabel>Content</FormLabel>
//         <Textarea placeholder='Content' onChange = {(e) => setContent(e.target.value)} />
//         <Button
//           bg='green.400'
//           sx= {{
//             '&:hover' : {
//               bg : 'green.600'
//             }
//           }}
//           onClick={onSubmit}
//         >
//           submit
//         </Button>
//       </FormControl>
//   )
// }

// export default BlogForm
import { Box, Flex, Input, Button, Text } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import { useState } from 'react'
import NextImage from 'next/image'
import Link from 'next/link'
import { auth } from '../lib/mutations'
// import { auth } from '../lib/mutations'

const AuthForm = ({ mode } : any) => {

  const router = useRouter()

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [content, setContent] = useState('')

  async function handleSubmit(e: any) {
    e.preventDefault()
    await auth('add',{title,desc,content})
    router.push('/')
  }

  return (
    <Box height='calc(100vh-70px)' width='100vw' color='black' bg='#F8F8FF' borderRadius='25px'>
        <Box bg='#F8F8FF' borderRadius='20px'>
          <form>

            <Box paddingTop={2} px={6} >
              <Text fontSize='xx-large' fontWeight='bold'>Title</Text>
              <Input 
                placeholder='Title' 
                type='Text'
                margin='10px 0 10px 0'
                borderRadius='10px'
                borderColor='gray.500'
                onChange={(e) => setTitle(e.target.value)}
              />
            </Box>

            <Box paddingTop={2} px={6}>
              <Text fontSize='xx-large' fontWeight='bold'>Description</Text>
              <Input 
                placeholder='Description' 
                type='Text'
                margin='10px 0 10px 0'
                borderRadius='10px'
                borderColor='gray.500'
                onChange={(e) => setDesc(e.target.value)}
              />
            </Box>

            <Box paddingTop={2} px={6} >
              <Text fontSize='xx-large' fontWeight='bold'>Content</Text>
              <Input 
                height='400px'
                placeholder='Content' 
                type='text'
                margin='10px 0 10px 0'
                borderRadius='10px'
                borderColor='gray.500'
                onChange={(e) => setContent(e.target.value)}
                sx={{
                  '&:hover':{
                    color:'black'
                  }
                }}
              />
            </Box>
            
            <Button 
              type='submit' 
              bg='green.400'
              marginTop='20px' 
              marginLeft='45%' 
              justifyContent='center'
              rightIcon={<ArrowForwardIcon />}
              sx={{
                '&:hover': {
                  color: 'gray.800',
                  bg: 'green.500'
                }
              }}
              onClick={handleSubmit}
            >
              Submit
            </Button>            
          <Box/>
        </form>
      </Box>
    </Box>
  )
}

export default AuthForm