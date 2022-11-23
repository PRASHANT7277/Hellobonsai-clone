import {
  Flex,
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import "./pone.css";

const Pone = () => {
  return (
    <Box>
      <Box className="first2"></Box>
      <Grid
        w={{
          sm: "700px",
          md: "900px",
          lg: "1100px",
          base: "80%",
        }}
        m={"auto"}
        gridTemplateAreas={{
          sm: `  " text image"  `,
          base: ` " image" "text"`,
        }}
        gridTemplateColumns={{
          sm: `repeat(2, 1fr)`,
          base: `repeat(1, 1fr)`,
        }}
        gridTemplateRows={{
          sm: `repeat(1,1fr)`,
          base: `repeat(2,1fr)`,
        }}
      >
        <GridItem
          area={"text"}
          textAlign={"left"}
          display={"flex"}
          flexDir={"column"}
          justifyContent={"center"}
          pl={{
            base: "0px",
            sm: "30px",
          }}
        >
          <Heading
            fontSize={{
              sm: "39px",
              base: "30px",
            }}
            lineHeight={{
              sm: "57px",
              base: "40px",
            }}
            sx={{
              fontFamily: "'amerigo-bt-roman', sans-serif",
              fontWeight: 400,
              color: "#4c525a",
            }}
          >
            Everything you need to run your business.
          </Heading>
          <Text
            mt={"10px"}
            fontSize={{
              sm: "17px",
              base: "15px",
            }}
            lineHeight={{
              sm: "30px",
              base: "24px",
            }}
            fontWeight={600}
            color={"#4c525a"}
            w={{ base: "100%", sm: "80%" }}
          >
            Bonsai’s all-in-one product suite with smart automation lets you
            focus on your passion, not your paperwork.
          </Text>

          <InputGroup
            mt={{
              sm: "50px",
              base: "30px",
            }}
            w={{
              sm: "80%",
              base: "100%",
            }}
            height={{
              base: "40px",
              sm: "60px",
            }}
          >
            <Input h={"100%"} w={"80%"} placeholder="Enter your email" />
            <InputRightElement
              letterSpacing={"2px"}
              cursor={"pointer"}
              fontWeight={500}
              h={"100%"}
              w={"35%"}
              bg={"#00b289"}
              color={"white"}
            >
              START FREE
            </InputRightElement>
          </InputGroup>
        </GridItem>
        <GridItem area={"image"}>
          <Image
            w={{
              sm: " 557px",
            }}
            src={`https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/60dc499268d597166db997aa_bonsai_hero-opt-2.png`}
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Pone;
