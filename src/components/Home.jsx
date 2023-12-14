import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor="black" w="full" h="85vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <motion.div
        style={{
          height: "60vh", // Adjusted height to give space for the text
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
        fontSize="8xl"
        textAlign="center"
        fontWeight="thin"
        color="whiteAlpha.700"
        mt="4" // Adjusted margin-top to position the text correctly
      >
        Creating the Unexpected
      </Text>
    </Box>
  );
};

export default Home;
