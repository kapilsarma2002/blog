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
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import prisma from '../../lib/prisma';
import { validateToken } from '../../lib/auth';

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

const ArticleList = () => {

  const router = useRouter()
  const { id } = router.query

  return (
    <Container maxW={'7xl'} p="12">
      <Heading as="h1">Stories by Chakra Templates</Heading>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
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
              Blog article title
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            Description
          </Text>
          <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} />
        </Box>
      </Box>
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2">What we write about</Heading>
        <Text as="p" fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat modi dolore quidem, illo provident perspiciatis sint quas neque unde assumenda possimus perferendis veniam sapiente aspernatur fugit inventore praesentium aut ea ducimus mollitia. Suscipit iure similique tempora corrupti nisi explicabo maiores nemo tenetur quisquam voluptatum quo unde dolorem aspernatur, possimus alias doloremque cumque odit voluptatem, minima consequuntur quaerat at! Sed quod ea eaque officia, excepturi dolorem repudiandae cumque similique quae iste incidunt corrupti commodi, voluptatum voluptatibus quisquam repellat beatae! Rem maiores illum odit nostrum assumenda mollitia! Qui, voluptas maxime? Velit quisquam reiciendis, ratione maxime corrupti asperiores dolorum alias inventore incidunt, minus sequi? Veritatis dolore ea odio libero! Doloremque tempora magnam eligendi sunt voluptate ratione, id alias fuga explicabo quas illum nam fugiat doloribus aperiam cum obcaecati deserunt voluptatum delectus aliquid! Adipisci ratione ad corporis reprehenderit, natus officiis cupiditate tempora, earum molestiae labore nisi vel temporibus quis ipsam quo omnis quisquam culpa possimus voluptatem deleniti itaque non inventore quae alias? Illum ab deleniti placeat repudiandae temporibus in iure enim quisquam, necessitatibus dicta! Illo ullam quo repellat, sint nesciunt voluptatibus qui explicabo sed odio quae omnis ipsum minima quas tenetur voluptate. Expedita aperiam repellat maiores laborum nostrum eligendi excepturi deserunt incidunt velit obcaecati hic enim quis libero, porro cumque doloremque unde! Commodi similique veniam ipsam hic aut, quis dolorem ipsum animi aspernatur est quas sunt voluptas error quidem debitis. Tempora delectus ullam sequi, quidem labore tenetur voluptatem earum tempore distinctio molestias sed eaque nesciunt neque possimus necessitatibus animi, suscipit laudantium pariatur nam? Libero maxime ipsam, non cupiditate deserunt debitis cumque reiciendis facilis labore temporibus velit numquam consequuntur quae sunt! Quis nobis cumque id fuga sed nam aliquid nemo assumenda quo eveniet, eaque quae fugit culpa enim. Optio vel, accusamus neque officia iusto corporis a assumenda repudiandae, repellendus, deserunt natus qui magnam velit fugit? Voluptatibus harum quasi temporibus quisquam sed, aspernatur odit sequi optio ipsam beatae molestias fugiat, quae molestiae sapiente voluptate autem? Officiis vitae aliquam eveniet quasi, impedit debitis, consequatur rem necessitatibus animi expedita velit molestias explicabo libero distinctio blanditiis. Qui placeat iste reprehenderit voluptate eveniet perspiciatis, in excepturi dicta nam dolorem culpa tempora consequatur sapiente commodi eligendi omnis officiis quisquam ipsa cum corrupti labore? Quisquam consectetur excepturi, aut culpa maiores aliquid, ut sapiente eius minima odit ea architecto corrupti dolor, animi commodi assumenda praesentium? Nulla iusto inventore, accusantium ad, harum, perferendis odit eligendi fuga accusamus nesciunt non. Quam, quasi commodi laudantium asperiores voluptatibus placeat quia eveniet! Fugit adipisci distinctio magni saepe vitae ut accusantium atque quo quae sed placeat illo necessitatibus perspiciatis aliquam, harum maiores error soluta dignissimos suscipit dolorem unde doloremque praesentium molestiae! Quod enim sunt qui, aut, corporis repudiandae quas odit, hic ipsa officia quo ad sit maxime aliquid reiciendis ratione ullam nobis minima perferendis! Quas atque hic nostrum officia, veritatis nisi in, illo quos quidem cum itaque magnam soluta tenetur? Iusto accusamus atque quae? Repudiandae, molestiae enim. Vel deserunt fugiat id, alias beatae asperiores, cum consequatur necessitatibus aut expedita illum officia dolore, quia error neque libero numquam nostrum distinctio!
        </Text>
      </VStack>
    </Container>
  );
};

const Blog = () => {
  return (
    <Box
      height='100%'
      overflowY='auto'
    >
      <ArticleList />
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

  const data = await prisma.blog.findMany({})

  return {
    props: {
      data : JSON.parse(JSON.stringify(data)),
    },
  }
}

export default Blog;