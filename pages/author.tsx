import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { gray } from '@nextui-org/react';
import prisma from '../lib/prisma';

export default function authors({data}: any) {
  return (
    <Flex p={6} alignItems='center'>
      {data.map((author : any) => {
        return (
          <Box
            maxW={'270px'}
            w={'full'}
            bg='gray.100'
            boxShadow={'2xl'}
            rounded={'xl'}
            m={8}
            overflow={'hidden'}>
            
            <Image
              h={'120px'}
              w={'full'}
              src={
                'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
              }
              objectFit={'cover'}
            />
            <Flex justify={'center'} mt={-12}>
              <Avatar
                size={'xl'}
                // src={
                  // 'https://www.murrayglass.com/wp-content/uploads/2020/10/avatar-scaled.jpeg'
                // }
                // alt={'Author'}
                css={{
                  border: '2px solid white',
                }}
              />
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={'center'} mb={5}>
                <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                  {author.name}
                </Heading>
                <Text color={'gray.500'}>Frontend Developer</Text>
              </Stack>

              <Stack direction={'column'} justify={'center'} spacing={6}>
                <Stack spacing={0} align={'center'}>
                  <Text fontWeight={600}>{author.email}</Text>
                </Stack>
                <Stack spacing={0} align={'center'}>
                  <Text fontWeight={600}>23k</Text>
                  <Text fontSize={'sm'} color={'gray.500'}>
                    Followers
                  </Text>
                </Stack>
              </Stack>

              <Button
                w={'full'}
                mt={8}
                bg={useColorModeValue('#151f21', 'gray.900')}
                color={'white'}
                rounded={'md'}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}>
                View Blogs
              </Button>
            </Box>
          </Box>
        )
      })}
    </Flex>
  );
}

export const getServerSideProps =  async (req: any) => {

  const data = await prisma.user.findMany({
    select : {
      email : true,
      name : true
    }
  })

  return {
    props: { data },
  }
}
