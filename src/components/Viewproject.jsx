import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Projects from './Projects';
import Projectssection from './Projectssection';

const Viewproject = () => {
  return (
    <Box bgColor="" w="full" h="100vh" display="flex" flexDirection="column" justifyContent="flex-start" alignItems="">
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
        mt="20px" // Adjusted margin-top value
        lineHeight="1"
      >
        <span style={{ fontSize: "20px", fontWeight: "" , marginRight:"500px" }}>We're building the next generation of</span>
        <br/>
        <span style={{ fontSize: "20px", fontWeight: "", marginRight:"500px" }}>information security through</span>
        <br/>
        <span style={{ fontSize: "20px", fontWeight: "", marginRight:"500px" }}>identity-first access management</span>
      </Text
      >
      <Text
      textAlign="marginLeft"
      color="whiteAlpha.700"
        mt="200px" // Adjusted margin-top value
        lineHeight="1"
      >
      <span style={{ fontSize: "100px", fontWeight: "" , marginLeft:"70px" }}>THE NEXT</span>
        <br/>
        <span style={{ fontSize: "100px", fontWeight: "", marginLeft:"70px"  }}>GENERATION</span>
        <br/>
        <span style={{ fontSize: "100px", fontWeight: "",  marginLeft:"70px"  }}>IDENTITY OS.</span>
      </Text>
    </Box>
  );
};

export default Viewproject;
