import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

const PerReview = ({ para, name, work }) => {
  return (
    <Box p="20px 20px" boxShadow="lg" h="100%" textAlign="left">
      <Image
        mt="15%"
        src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c29a9feb660_quote-icon.svg"
      ></Image>
      <br />
      <Text fontSize="20px" fontWeight="400" lineHeight="25px" color="#4c525a">
        {para}
      </Text>
      <br />
      <Heading fontSize="20px">{name}</Heading>
      <Text>{work}</Text>
    </Box>
  );
};

export default PerReview;
