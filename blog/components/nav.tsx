import { Navbar, Button, Link } from "@nextui-org/react";
import { Layout } from "./Layout";

export default function Nav() {
  
  return (
    <Layout>
      <Navbar isBordered variant='floating'>
        <Navbar.Content hideIn="xs" >
          <Navbar.Link isActive href="/">Home</Navbar.Link>
          <Navbar.Link isActive href="/authors">Authors</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="/login">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="/signup">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>     
    </Layout>
  )
}
