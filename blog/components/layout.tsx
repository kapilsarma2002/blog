import { Box } from "@chakra-ui/react";

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
  </Box>
);
