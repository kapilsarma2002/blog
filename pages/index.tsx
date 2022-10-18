const sampleBlogs = [
  {
    BlogId : 1,
    title : 'A',
    desc : 'a',
    content : 'skjhgdfwfuerver',
    author : 'Z',
  },
  {
    BlogId : 1,
    title : 'A',
    desc : 'a',
    content : 'skjhgdfwfuerver',
    author : 'Z',
  },
  {
    BlogId : 1,
    title : 'A',
    desc : 'a',
    content : 'skjhgdfwfuerver',
    author : 'Z',
  },

]

// const blogs = prisma.blogs

import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack
} from '@chakra-ui/react';
import prisma from '../lib/prisma';
import { validateToken } from '../lib/auth';

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const ArticleList = ({data}: any) => {
  console.log('data is ' + data)
  return (
    <Container maxW={'8xl'} p="12">
      <Heading as="h1">Your Blogs!</Heading>
      
      {sampleBlogs.map((blog) => {
        return (
          <Box
            marginTop={{ base: '1', sm: '5' }}
            paddingBottom='30px'
            marginRight='20px'
            borderRadius='20px'
            display="flex"
            flexDirection={{ base: 'column', sm: 'row' }}
            justifyContent="space-between"
            sx={{
              '&:hover' : {
                bg:'#eae4eb'
              }
            }}
            // onClick={}
            >
            <Box
              display="flex"
              flex="1"
              marginRight="3"
              position="relative"
              alignItems="center">
              <Box
                width={{ base: '100%', sm: '85%' }}
                zIndex="2"
                marginLeft={{ base: '0', sm: '5%' }}
                marginTop="5%">
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                  <Image
                    borderRadius="lg"
                    src={
                      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                    }
                    alt="some good alt text"
                    objectFit="contain"
                  />
                </Link>
              </Box>
              <Box zIndex="1" width="100%" position="absolute" height="100%">
              <Box
                bgGradient={useColorModeValue(
                  'radial(orange.600 1px, transparent 1px)',
                  'radial(orange.300 1px, transparent 1px)'
                )}
                backgroundSize="20px 20px"
                opacity="0.4"
                height="100%"
              />
            </Box>
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: '3', sm: '0' }}>
            <BlogTags tags={['Engineering', 'Product']} />
            <Heading marginTop="1">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                {blog.title}
              </Link>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue('gray.800', 'gray.800')}
              fontSize='xl'
              fontFamily='amiri'
            >
              {blog.desc}
            </Text>
            <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} />
          </Box>
        </Box>
        )})}
        <Divider />
      
    </Container>
  );
};


const Home = ({data}: any) => {
  return (
    <Box
      height='100%'
      overflowY='auto'
    >
      <ArticleList data={data} />
    </Box>
  )
}

export const getServerSideProps =  async ({ req }: any) => {

  let user : any

  try { 
    user = validateToken(req.cookies.PASS)
  } catch(e) {
    return {
      redirect: {
        permanent: false,
        destination: '/signin',
      }
    }
  }

  const data = await prisma.blog.findMany({
    where: {
      authorId: user.userId,
    }
  })

  return {
    props: {data},
  }
}

export default Home;