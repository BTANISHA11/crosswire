import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Projectssection from './Projectssection';

const ViewProject = () => {
  return (
    <Box bgColor="" w="full" h="35vh" display="flex" flexDirection="column" justifyContent="flex-start" alignItems="">
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
        lineHeight="10"
      >
        <span style={{ fontSize: "20px", fontWeight: "" }}>CROSSWIRE AND US</span>
      </Text>
      
     
      <Projectssection />
    
    </Box>
  );
};

export default ViewProject;
