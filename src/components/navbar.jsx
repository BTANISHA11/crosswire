import { Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const unseenStudioStyles = {
    color: "black",
    fontSize: "30px",
    fontWeight: "bold",
    marginRight: "30px", // Adjusted margin for spacing between "Unseen Studio" and navigation links
  };

  const navLinksStyles = {
    marginRight: "35px", // Adjust margin between navigation links
  };

  return (
    <Flex
      p={4}
      backgroundColor="transparent"
      justifyContent="space-between"
      alignItems="center" // Vertically align items
      position="fixed"
      width="100%"
      top="0" // Position Navbar at the top of the page
      zIndex="1" // Ensure Navbar appears above other content
      paddingX="20px" // Add horizontal padding for the Navbar
      boxShadow="0px 2px 5px rgba(0, 0, 0, 0.1)" // Add a subtle shadow for separation
      background="white" // Set a white background
    >
      {/* Unseen Studio */}
      <Text as="span" style={unseenStudioStyles}>
        Unseen Studio
      </Text>

      {/* Navigation Links */}
      <Flex alignItems="center" style={navLinksStyles}>
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
