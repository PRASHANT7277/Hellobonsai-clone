import { Box, Text } from "@chakra-ui/react";
import React from "react";

export const FooterLogin = () => {
  return (
    <Box w="70%" m="auto">
        <ul style={{display: "flex", gap:"25px",justifyContent:"center", fontSize:"14px",color:"#999999"}}>
            <li>Contact Us </li> 
            <li >Help Center</li>
            <li>About Us</li>
            <li> Plans & Pricing</li>
            <li> Privacy policy</li>
        </ul>
      <Text fontSize="12px" color="#ccd0d2">
        ©2022 Bonsai Technologies Inc — Payments, banking, and issuing services
        are provided by Stripe Payments Company, Evolve Bank & Trust (Member
        FDIC), and Celtic Bank (Member FDIC), respectively. Bonsai is not a law
        firm, and does not provide legal services, advice, or representation.
        Terms Credits
      </Text>
      <br/>
      <br/>
    </Box>
  );
};
