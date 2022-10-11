import { Children, ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  List,
  ListItem,
  LinkBox,
  LinkOverlay
} from '@chakra-ui/layout';
import NextLink from 'next/link';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';

const navMenu = [
	{
		name : "Home",
		route : "/"
	},
	{
		name : "Authors",
		route : "/authors"
	},
	{
		name : "Blogs",
		route : "/blogs"
	}
];

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box height='100%' bg={useColorModeValue('black', 'black')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Box width='60px'>Logo</Box>
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}>
            <List>
              <Flex gap='4'>
                {navMenu.map(menuItem => {
                    return (
                      <ListItem>
                        <LinkBox>
                          <NextLink href={menuItem.route} passHref>
                            <LinkOverlay
                              px={2}
                              py={1.5}
                              rounded={'md'}
                              key={menuItem.name}
                              fontSize='lg'
                              _hover={{
                                textDecoration: 'none',
                                bg: useColorModeValue('black', 'black'),
                                color: 'gray'
                              }}                            
                            >
                              {menuItem.name}
                            </LinkOverlay>
                          </NextLink>
                        </LinkBox>
                      </ListItem>
                    )
                  })}
              </Flex>
            </List>
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          <Button
            variant={'solid'}
            colorScheme={'teal'}
            size={'sm'}
            mr={4}
            leftIcon={<AddIcon />}>
            Add Blog
          </Button>
          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}
              >
              
              <Avatar
                size={'sm'}
                src={'https://avatars.dicebear.com/api/male/username.svg'}
              />
            </MenuButton>
            <MenuList bg='black'>
              <MenuItem               
              sx={{
                '&:hover' : {
                  textDecoration: 'none',
                  color: 'gray'
                }
              }}>Profile</MenuItem>
              <MenuDivider />
              <MenuItem
               sx={{
                '&:hover' : {
                  textDecoration: 'none',
                  color: 'gray'
                }
              }}
              >Logout</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
}
