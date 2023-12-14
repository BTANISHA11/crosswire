import { HStack, Link } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack
      p={4}
      backgroundColor="transparent"
      justifyContent="flex-end"
      position="absolute"
      width="100%"
      right="10px"
    >
      <Link as={NavLink} to="/" color="white" textDecoration="none" _hover={{ textDecoration: 'underline' }}>
        Home
      </Link>
      <Link as={NavLink} to="/projects" color="white" textDecoration="none" _hover={{ textDecoration: 'underline' }}>
        Projects
      </Link>
      <Link as={NavLink} to="/contact" color="white" textDecoration="none" _hover={{ textDecoration: 'underline' }}>
        Contact
      </Link>
    </HStack>
  );
};

export default Navbar;
