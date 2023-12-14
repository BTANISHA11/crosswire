import { Flex, Link, Text, Image } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex
      p={4}
      backgroundColor="transparent"
      justifyContent="space-between" // To place logo and components at the edges
      alignItems="center" // Vertically align items
      position="absolute"
      width="100%"
      right="10px"
    >
      {/* Unseen Studio text or logo */}
      <Text as="span" color="black" fontSize="xl" fontWeight="bold">
        Unseen Studio
      </Text>

      {/* Links */}
      <Flex>
        <Link as={NavLink} to="/" color="black" textDecoration="none" _hover={{ textDecoration: 'underline' }} mr={4}>
          Home
        </Link>
        <Link as={NavLink} to="/projects" color="black" textDecoration="none" _hover={{ textDecoration: 'underline' }} mr={4}>
          Projects
        </Link>
        <Link as={NavLink} to="/contact" color="black" textDecoration="none" _hover={{ textDecoration: 'underline' }}>
          Contact
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
