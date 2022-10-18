import {
  Flex, Input, Box, Text
} from '@chakra-ui/react';

const BlogTemplate = () => {
  return (
    <form>
      <Flex 
        justifyContent='center'
        alignItems='center'
        height='100%'
        width='100%'
      >
        <Box
          margin='20px 20px 20px 20px'
        >
          <Text
            fontSize='x-large'
            fontWeight='bold'
          >Title</Text>
          <Input
            placeholder='Title' 
            type='text'
            margin='20px 20px 20px 0'
            borderRadius='10px'
            borderColor='black'
            width='1000px'
            // onChange={(e) => setTitle(e.target.value)}
          />
        </Box>

        <Box
          margin='20px 20px 20px 20px'
        >
          <Text
            fontSize='x-large'
            fontWeight='bold'
          >Description</Text>
          <Input
            placeholder='Description' 
            type='text'
            margin='20px 20px 20px 0'
            borderRadius='10px'
            borderColor='black'
            width='1000px'
            // onChange={(e) => setDesc(e.target.value)}
          />
        </Box>

      </Flex>
    </form>
  )
}

export default BlogTemplate;