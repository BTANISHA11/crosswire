import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import Projectssection from "./Projectssection";
import ViewProject from "./Viewproject";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <Box bgColor="" w="full" h="55vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <motion.div
        style={{
          height: "100vh", 
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>

      <Text
      textAlign="center"
      color="whiteAlpha.700"
      mt="100" // Set a positive margin-top to properly position the text
      lineHeight="1" // Set line height for better spacing
    >
      <span style={{ fontSize: "20px", fontWeight: "" }}>Selected Projects</span>
      <br />
      <span style={{ fontSize: "50px", fontWeight: "bold" }}>CROSSWIRE</span>
      <br />
      <span style={{ fontSize: "30px", fontWeight: "bold" }}>Brand, Promotional Website, WebGL</span>
      <Link to="./Projectssection">
      <Box
        as="button" // Render as a button
        w="150px"
        h="20px"
        bg="black"
        mt="60px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="white"
        fontSize="10px"
        fontWeight="bold"
        cursor="pointer" // Change cursor to pointer to indicate interactivity
      >
        View Project
      </Box>
    </Link>
      
    </Text>
    
    
    </Box>
  );
};

export default Projects;
