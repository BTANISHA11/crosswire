import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import Viewproject from './Viewproject';
const Projectssection = () => {
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

      <Text
        textAlign="left"
        color="whiteAlpha.700"
        mt="20px" // Adjusted margin-top value
        lineHeight="1"
      >
        <span style={{ fontSize: "100px", fontWeight: "" , marginLeft: "80px"}}>PROJECTS/</span>
        <br/>
        <span style={{ fontSize: "100px", fontWeight: "", marginLeft: "80px" }}>CROSSWIRE</span>
      </Text>
      <Text
        textAlign="right"
        color="whiteAlpha.700"
        mt="30px" // Adjusted margin-top value
        lineHeight="1"
      >
        <span style={{ fontSize: "100px", fontWeight: "", marginRight: "80px" }}>IMMERSIVE</span>
        <br/>
        <span style={{ fontSize: "100px", fontWeight: "" , marginRight: "230px"}}>DIGITAL</span>
      </Text>
      <Text
  textAlign="left"
  color="whiteAlpha.700"
  mt="20px" // Adjusted margin-top value
  lineHeight="1"
>
  <span style={{ fontSize: "20px", fontWeight: "", marginLeft: "80px" }}>PROJECT OVERVIEW</span>
  <br />
  <span style={{ fontSize: "30px", fontWeight: "", marginLeft: "80px" }}>
    We created an identity for Crosswire{" "}
  </span>
  <br />
  <span style={{ fontSize: "30px", fontWeight: "", marginLeft: "80px" }}>
    {" "}
    and developed a website that truly sets{" "}
  </span>
  <br />
  <span style={{ fontSize: "30px", fontWeight: "", marginLeft: "80px" }}>
    {" "}
    them apart from their competitors.
  </span>

  {/* Services, Date, Client, Location */}
  <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px", marginRight: "80px" }}>
    {/* Services */}
    <div style={{ marginLeft: "40px", marginRight: "40px" }}>
      <span style={{ fontSize: "20px", fontWeight: "" }}>SERVICES</span>
      <br/>
      <br />
      <span style={{ fontSize: "20px", fontWeight: "" }}>Branding</span>
      <br />
      <span style={{ fontSize: "20px", fontWeight: "" }}>Digital</span>
      <br />
      <span style={{ fontSize: "20px", fontWeight: "" }}>WebGL</span>
      <Link to="./Viewproject">
      <div style={{ marginTop: "20px", backgroundColor: "black", width: "120px", height: "40px", color: "white", textAlign: "center", lineHeight: "40px" }}>
        View Project
      </div>
    </Link>
    </div>

    {/* Date */}
    <div style={{ marginLeft: "40px", marginRight: "40px" }}>
      <span style={{ fontSize: "20px", fontWeight: "" }}>DATE</span>
      <br />
      <span style={{ fontSize: "20px", fontWeight: "" }}>January, 2020</span>
      <br/>
    <br/>
      <span style={{ fontSize: "20px", fontWeight: "" }}>CLIENT</span>
      <br />
      <span style={{ fontSize: "20px", fontWeight: "" }}>Crosswire</span>
      <br />
      <br />
      <span style={{ fontSize: "20px", fontWeight: "" }}>LOCATION</span>
      <br />
      <span style={{ fontSize: "20px", fontWeight: "" }}>New York, USA</span>
    </div>
  </div>
</Text>;


    </Box>
  );
}

export default Projectssection;
