import { Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const unseenStudioStyles = {
    color: "black",
    fontSize: "30px",
    fontWeight: "bold",
    marginRight: "0px", // Example margin for spacing between "Unseen Studio" and navigation links
  };

  return (
    <Flex
      p={4}
      backgroundColor="transparent"
      justifyContent="space-between"
      alignItems="center" // Vertically align items
      position="absolute"
      width="100%"
      right="-20px" // Adjusted the right positioning
    >
      {/* Unseen Studio */}
      <Text as="span" style={unseenStudioStyles}>
        Unseen Studio
      </Text>

      {/* Navigation Links */}
      <Flex alignItems="center">
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
