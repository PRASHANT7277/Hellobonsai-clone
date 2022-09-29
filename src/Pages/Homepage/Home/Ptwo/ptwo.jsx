import { Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";

const Ptwo = () => {
  return (
    <Grid
      w={{
        sm: "700px",
        md: "900px",
        lg: "1000px",
        base: "90%",
      }}
      m={"auto"}
      gridTemplateAreas={{
        sm: `  "red blue"`,
        base: `"red" "blue"`,
      }}
      gridTemplateColumns={{
        base: "repeat(1,1fr)",
        sm: "repeat(2,1fr)",
      }}
      gridTemplateRows={{
        sm: "repeat(1,1fr)",
        base: "repeat(2,1fr)",
      }}
    >
      <GridItem
        display={"flex"}
        flexDir={"column"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        area={"red"}
      >
        <Text
          fontSize={{
            sm: "29px",
            base: "18px",
          }}
          lineHeight={{
            sm: "127px",
            base: "80px",
          }}
          sx={{
            fontFamily: "'amerigo-bt-roman', sans-serif",
            fontWeight: 400,
            color: "#4c525a",
          }}
        >
          Without Bonsai
        </Text>
        <Image
          w={{
            base: "335px",
            sm: "423px",
          }}
          src={
            "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c6c51feb665_ill_before_2n%20block.svg"
          }
        />
      </GridItem>
      <GridItem
        display={"flex"}
        flexDir={"column"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        area={"blue"}
      >
        <Text
          fontSize={{
            sm: "29px",
            base: "18px",
          }}
          lineHeight={{
            sm: "127px",
            base: "80px",
          }}
          sx={{
            fontFamily: "'amerigo-bt-roman', sans-serif",
            fontWeight: 400,
            color: "#4c525a",
          }}
        >
          With Bonsai
        </Text>
        <Image
          w={{
            base: "335px",
            sm: "423px",
          }}
          src={
            "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c6c51feb665_ill_before_2n%20block.svg"
          }
        />
      </GridItem>
    </Grid>
  );
};

export default Ptwo;
