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
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Authors() {
  return (
    <Flex padding='10px 10px'>
        <Avatar src='https://bit.ly/sage-adebayo' />
        <Box ml='3'>
        
        <Text fontWeight='bold' fontSize='xl'>
            Segun Adebayo
            <Badge ml='1' colorScheme='green'>
            New
            </Badge>
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, nam? Optio, at earum nihil rem deleniti quasi aut! Hic esse soluta itaque aliquam quibusdam fuga doloribus delectus impedit cum ipsum?
        </Text>
        <Text fontSize='sm'>UI Engineer</Text>
        </Box>
    </Flex>

  );
}