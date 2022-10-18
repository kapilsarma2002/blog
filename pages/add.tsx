import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { auth } from '../lib/mutations'

const BlogForm = () => {

  const router = useRouter()

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [content, setContent] = useState('')

  async function onSubmit(e: any) {
    e.preventDefault()
    await auth('add',{title,desc,content})
    router.push('/')
  }


  return (
      <FormControl isRequired borderColor='black'>
        <FormLabel>Title</FormLabel>
        <Input placeholder='Title' onChange = {(e) => setTitle(e.target.value)}/>
        <FormLabel>Description</FormLabel>
        <Input placeholder='Description' onChange = {(e) => setDesc(e.target.value)} />
        <FormLabel>Content</FormLabel>
        <Textarea placeholder='Content' onChange = {(e) => setContent(e.target.value)} />
        <Button
          bg='green.400'
          sx= {{
            '&:hover' : {
              bg : 'green.600'
            }
          }}
          onClick={onSubmit}
        >
          submit
        </Button>
      </FormControl>
  )
}

export default BlogForm