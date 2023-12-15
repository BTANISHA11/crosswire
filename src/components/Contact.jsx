import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <Box bgColor="" w="full" h="60vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
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
      
      <Text textAlign="center" color="whiteAlpha.700" mt="10" lineHeight="1">
        {/* Text Content */}
        <Box textAlign="right" mr="20px" mt="50px"> {/* Adjust margin-top for text */}
          <Text lineHeight="1">
            <span style={{ fontSize: "40px", fontWeight: "" }}>Say Hello</span>
            <br />
            <span style={{ fontSize: "20px", fontWeight: "thin" }}>WE LOOK FORWARD </span>
            <br />
            <span style={{ fontSize: "20px", fontWeight: "thin" }}>TO HEARING FROM YOU</span>
          </Text>
        </Box>

        {/* Box 1 */}
        <Box
          w="80px"
          h="20px"
          bg="black"
          color="white"
          fontSize="10px"
          fontWeight="bold"
          mr="20px" // Adjust margin-right between boxes
          mt="50px" // Adjust margin-top for box
        >
          Box 1
        </Box>

        {/* Box 2 */}
        <Box
          w="80px"
          h="20px"
          bg="black"
          color="white"
          fontSize="10px"
          fontWeight="bold"
          mt="50px" // Adjust margin-top for box
        >
          Box 2
        </Box>
      </Text>
    </Box>
  );
};

export default Contact;
