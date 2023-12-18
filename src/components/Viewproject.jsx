import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Viewproject = () => {
  return (
    <div style={{ height: '100vh', overflowY: 'scroll' }}>
      <Box
        bgColor=""
        w="full"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        p="20px"
      >
        {/* Content 1 */}
        <motion.div
          style={{
            height: '60vh',
            margin: '20px',
          }}
          animate={{
            translateY: '20px',
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        ></motion.div>

        {/* Text 1 */}
        <Text
          textAlign="center"
          color="whiteAlpha.700"
          lineHeight="1"
          mt="-250px"
        >
          <span style={{ fontSize: '20px', fontWeight: '', marginRight: '500px' }}>
            We're building the next generation of
          </span>
          <br />
          <span style={{ fontSize: '20px', fontWeight: '', marginRight: '500px' }}>
            information security through
          </span>
          <br />
          <span style={{ fontSize: '20px', fontWeight: '', marginRight: '500px' }}>
            identity-first access management
          </span>
        </Text>

        {/* Text 2 */}
        <Text
          textAlign="left"
          color="whiteAlpha.700"
          lineHeight="1"
          mt="200px"
          marginRight="700px"
        >
          <span style={{ fontSize: '100px', fontWeight: '' }}>THE NEXT</span>
          <br />
          <span style={{ fontSize: '100px', fontWeight: '' }}>GENERATION</span>
          <br />
          <span style={{ fontSize: '100px', fontWeight: '' }}>IDENTITY OS.</span>
        </Text>

        {/* Content 2 */}
        <motion.div
          style={{
            height: '60vh',
            margin: '20px',
          }}
          animate={{
            translateY: '20px',
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        ></motion.div>

        {/* Text 3 */}
        <Text
          textAlign="left"
          color="whiteAlpha.700"
          lineHeight="1"
          mt="20px"
        >
        <span style={{ fontSize: '40px', fontWeight: '', marginRight: '1000px' }}>
        Sign up to harness the
      </span>
      <br />
      <span style={{ fontSize: '40px', fontWeight: '', marginRight: '1000px' }}>
        power of Crosswire.
      </span>
      <br/>
      <br/>
      <br/>
      <span style={{ fontSize: '20px', fontWeight: '', marginRight: '1000px' }}>
      Get early access and become part of the
</span>
    <br />
    <span style={{ fontSize: '20px', fontWeight: '', marginRight: '1000px' }}>
    new generation of data security.

    </span>
    <br/>
    <br/>
    {/* Signup Button */}
    <Button
    bg="blue.500"
    color="black"
    fontSize="16px"
    fontWeight="bold"
    borderRadius="0"
    p="12px"
    mt="20px"
    _hover={{
      bg: 'blue.600',
    }}
  >
    Sign Up
  </Button>
        </Text>
        

       {/* Content 3 */}
       <motion.div
       style={{
         height: '60vh',
         margin: '20px',
       }}
       animate={{
         translateY: '20px',
       }}
       transition={{
         duration: 2,
         repeat: Infinity,
         repeatType: 'reverse',
       }}
     ></motion.div>

     {/* Text 3 */}
     <Text
     textAlign="left"
     color="whiteAlpha.700"
     lineHeight="1"
     mt="20px"
   >
   <span style={{ fontSize: '20px', fontWeight: '', marginRight: '1000px' }}>
   AUTOMATED ONBOARDING
     </span>
     <br/>
     <span style={{ fontSize: '35px', fontWeight: '', marginRight: '1000px' }}>
     We give new employees
     
     </span>
     <br />
     <span style={{ fontSize: '35px', fontWeight: '', marginRight: '1000px' }}>
     permissions so they can be
     
     </span>

     <br />
     <span style={{ fontSize: '35px', fontWeight: '', marginRight: '1000px' }}>
     productive from day one.
     
     </span>
     
     
   </Text>
   {/* Content 4*/}
   <motion.div
   style={{
     height: '60vh',
     margin: '20px',
   }}
   animate={{
     translateY: '20px',
   }}
   transition={{
     duration: 2,
     repeat: Infinity,
     repeatType: 'reverse',
   }}
 ></motion.div>

 {/* Text 4 */}
 <Text
 textAlign="left"
 color="whiteAlpha.700"
 lineHeight="1"
 mt="20px"
>
<span style={{ fontSize: '20px', fontWeight: '', marginRight: '1000px' }}>
ACCESS AT A GLANCE
 </span>
 <br/>
 <span style={{ fontSize: '35px', fontWeight: '', marginRight: '1000px' }}>
 We show you all of your

 </span>
 <br />
 <span style={{ fontSize: '35px', fontWeight: '', marginRight: '1000px' }}>
 organization’s access in

 </span>

 <br />
 <span style={{ fontSize: '35px', fontWeight: '', marginRight: '1000px' }}>
 one place.
 </span>
 
 
</Text>
{/* Content 5*/}
<motion.div
style={{
  height: '60vh',
  margin: '20px',
}}
animate={{
  translateY: '20px',
}}
transition={{
  duration: 2,
  repeat: Infinity,
  repeatType: 'reverse',
}}
></motion.div>

{/* Text 5 */}
<Text
textAlign="left"
color="whiteAlpha.700"
lineHeight="1"
mt="20px"
>
<span style={{ fontSize: '20px', fontWeight: '', marginRight: '1000px' }}>
RULE‑BASED ACCESS
</span>
<br/>
<span style={{ fontSize: '35px', fontWeight: '', marginRight: '1000px' }}>
Have everyone in your



</span>
<br />
<span style={{ fontSize: '35px', fontWeight: '', marginRight: '1000px' }}>
organization get access



</span>

<br />
<span style={{ fontSize: '35px', fontWeight: '', marginRight: '1000px' }}>
automatically. No human
</span>
<br />
<span style={{ fontSize: '35px', fontWeight: '', marginRight: '1000px' }}>
intervention required.
</span>


</Text>
{/* Content 6*/}
<motion.div
style={{
  height: '60vh',
  margin: '20px',
}}
animate={{
  translateY: '20px',
}}
transition={{
  duration: 2,
  repeat: Infinity,
  repeatType: 'reverse',
}}
></motion.div>

{/* Text 6*/}
<Text
textAlign="left"
color="whiteAlpha.700"
lineHeight="1"
mt="20px"
>
<span style={{ fontSize: '20px', fontWeight: '', marginRight: '1000px' }}>
FLEXIBLE POLICY ENGINE
</span>
<br/>
<span style={{ fontSize: '35px', fontWeight: '', marginRight: '1000px' }}>
Define customized approval

</span>
<br />
<span style={{ fontSize: '35px', fontWeight: '', marginRight: '1000px' }}>
flows that meet your

</span>

<br />
<span style={{ fontSize: '35px', fontWeight: '', marginRight: '1000px' }}>
organization’s needs.
</span>


</Text>
{/* Content 7*/}
<motion.div
style={{
  height: '60vh',
  margin: '20px',
}}
animate={{
  translateY: '20px',
}}
transition={{
  duration: 2,
  repeat: Infinity,
  repeatType: 'reverse',
}}
></motion.div>

{/* Text 7 */}
<Text
textAlign="center"
color="whiteAlpha.700"
lineHeight="1"
mt="20px"
>

<span style={{ fontSize: '30px', fontWeight: '', marginRight: '800px' }}>
Crosswire provides a scalable way to

</span>
<br />
<span style={{ fontSize: '30px', fontWeight: '', marginRight: '800px' }}>
manage access for our org. We love

</span>

<br />
<span style={{ fontSize: '30px', fontWeight: '', marginRight: '800px' }}>
their team’s customer focus and
</span>
<br/>
<span style={{ fontSize: '30px', fontWeight: '', marginRight: '800px' }}>
responsiveness to our requests.
</span>
<br/>
<br/>
<br/>
<span style={{ fontSize: '15px', fontWeight: '', marginRight: '800px' }}>
VP OF ENGINEERING

</span>
<span style={{ fontSize: '15px', fontWeight: '', marginRight: '800px' }}>

@ Snackpass
</span>



</Text>
   
      </Box>
    </div>
  );
};

export default Viewproject;
