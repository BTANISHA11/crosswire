import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";


const Home = () => {
  return (
    <Box bgColor="" w="full" h="85vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <motion.div
        style={{
          height: "60vh", 
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
      mt="10" // Set a positive margin-top to properly position the text
      lineHeight="1" // Set line height for better spacing
    >
      <span style={{ fontSize: "40px", fontWeight: "" }}>A BRAND , DIGITAL & MOTION STUDIO</span>
      <br />
      <span style={{ fontSize: "90px", fontWeight: "bold" }}>Creating the</span>
      <br />
      <span style={{ fontSize: "120px", fontWeight: "bold" }}>Unexpected</span>
      <Box
        w="150px"
        h="20px"
        bg="black"
        boxAlign="center"
        mt="60px" // Add margin-top to create space between the box and text
        display="flex"
        transform="translate(150%, -50%)"
        top="50%"
        left="50%"
        justifyContent="center"
        alignItems="center"
        color="white"
        fontSize="10px"
        fontWeight="bold"
      >
      View your Work
      </Box>
      <Box
        w="200px"
        h="20px"
        bg="black"
        position="absolute"
        bottom="10px"
        left="10px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="white"
        fontSize="10px"
        fontWeight="bold"
      >
        Read about our rebrand
      </Box>
    </Text>
    
    
    </Box>
    
  );
};

export default Home;
