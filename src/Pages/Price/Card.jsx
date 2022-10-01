import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { TiTick } from "react-icons/ti";

const Card = ({ head, headP, rateM, rateY, ym, lists }) => {
  return (
    <Box
      color="#4c525a"
      borderColor="lightGrey"
      p="20px 20px"
      h="100%"
      boxShadow="rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px"
    >
      <Text fontSize="24px" fontWeight="600" lineHeight="34px">
        {head}
      </Text>
      <Text fontSize="14px" fontWeight="400" lineHeight="20px">
        {headP}
      </Text>

      <Box borderBottom="2px solid #00b289 ">
        <Text fontSize="30px" fontWeight="400" lineHeight="49px">
          $
          <span
            style={{
              marginLeft: "10px",
              fontSize: "70px",
              fontWeight: "600",
              lineHeight: "80px",
            }}
          >
            {ym ? rateY : rateM}
          </span>
          <span
            style={{
              marginLeft: "10px",
              fontSize: "24px",
              fontWeight: "400",
              lineHeight: "34px",
            }}
          >
            /MONTH
          </span>
        </Text>
        {ym ? <Text textAlign="right">Billed Yearly</Text> : ""}
      </Box>
      <br />
      {lists.map((k) => (
        <Box display="flex" padding="10px" gap="5px">
          <TiTick color="#00b289" />
          <Text>{k}</Text>
        </Box>
      ))}
      <br />
      <Button
        w="100%"
        bgColor="#00b289"
        color="white"
        p="30px 30px"
        _hover={{ bgColor: "none" }}
      >
        Go to Dashboard
      </Button>
    </Box>
  );
};

export default Card;
