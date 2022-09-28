import React from "react";
import { Box, Text } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import {
  footProduct,
  footFreeResources1,
  footFreeResources2,
  footTemplates,
  footBonsai,
} from "./Footer";

const Footer = () => {
  return (
    <Box
    
      color="#595568"
      p="10px 10px"
      cursor="pointer"
      w={{ lg: "80%" }}
      margin="auto"
      display={{ md: "flex" }}
      justifyContent={{ md: "space-evenly" }}
      textAlign="left"
    >
      {/* Product Box */}
      <Box p="10px 10px" w={{ lg: "20%" }}>
        <Text fontSize="17px" lineHeight="24px" fontWeight="600">
          PRODUCT
        </Text>
        <br />
        {footProduct.map((e,i) => (
          <Text key={i}
            _hover={{ color: "black.500", textDecoration: "underline" }}
            fontWeight="300"
            fontSize="16px"
            lineHeight="30px"
            mb="2%"
          >
            {e}
          </Text>
        ))}
      </Box>
      <br />

      {/* Free Resources Box */}
      <Box p="10px 10px" w={{ lg: "25%" }}>
        <Box>
          <Text fontSize="17px" lineHeight="24px" fontWeight="600">
            FREE RESOURCES
          </Text>
          <br />
          {footFreeResources1.map((e,i) => (
            <Text key={i}
              _hover={{ color: "black.500", textDecoration: "underline" }}
              fontWeight="300"
              fontSize="16px"
              lineHeight="30px"
            >
              {e}
            </Text>
          ))}
          <br />
          {footFreeResources2.map((e,i) => (
            <Text key={i}
              _hover={{ color: "black.500", textDecoration: "underline" }}
              fontWeight="300"
              fontSize="16px"
              lineHeight="30px"
            >
              {e}
            </Text>
          ))}
        </Box>
        <br />
        {/* Templates box */}

        <Box w={{ sm: "50%", lg: "100%", base: "100%" }}>
          <Text fontSize="17px" lineHeight="24px" fontWeight="600">
            Templates
          </Text>
          <br />
          <Accordion allowMultiple>
            {footTemplates.map((e,i) => (
              <AccordionItem key={i}>
                <h2>
                  <AccordionButton _hover={{ background: "white" }}>
                    <Box textAlign="left">{e.head}</Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                  {e.someElse.map((k,i) => (
                    <Text key={i}
                      _hover={{
                        color: "black.500",
                        textDecoration: "underline",
                      }}
                      fontWeight="300"
                      fontSize="16px"
                      lineHeight="30px"
                    >
                      {k}
                    </Text>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
          <br />
        </Box>
      </Box>
      {/* BONSAI Box */}

      <Box  p="10px 10px"w={{ lg: "20%" }}>
        <Text fontSize="17px" lineHeight="24px" fontWeight="600">
          BONSAI
        </Text>
        <br />

        {footBonsai.map((e,i) => (
          <Text key={i}
            _hover={{ color: "black.500", textDecoration: "underline" }}
            fontWeight="300"
            fontSize="16px"
            lineHeight="30px"
          >
            {e}
          </Text>
        ))}
      </Box>
    </Box>
  );
};

export default Footer;