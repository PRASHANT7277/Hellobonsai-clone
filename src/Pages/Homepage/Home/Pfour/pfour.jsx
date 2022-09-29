import { Grid, GridItem, Heading, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";

const Pfour = () => {
  return (
    <Grid
      gridTemplateColumns={{
        base: "repeat(1,1fr)",
        sm: "repeat(2,1fr)",
      }}
      gridTemplateRows={{
        base: "repeat(2,1fr)",
        sm: "repeat(1,1fr)",
      }}
      gridTemplateAreas={{
        base: ` "left" "right" `,
        sm: `"left right"`,
      }}
      w={{
        sm: "700px",
        md: "50%",
        lg: "60%",
        base: "80%",
      }}
      gap={"90px"}
      m={"auto"}
      mt={{
        base: "110px",
        sm: "90px",
      }}
    >
      <GridItem
        area={"left"}
        textAlign={"left"}
        w={{ base: "80%", sm: "280px" }}
      >
        <Image
          src={
            "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7ca8ebfeb662_ill_Built%20for_4%20block.svg"
          }
        />
        <Heading
          fontSize={{
            sm: "22px",
            base: "16px",
          }}
          lineHeight={{
            sm: "75px",
            base: "52px",
          }}
          color={"#4c525a"}
          fontWeight={700}
        >
          Built for All Work Types
        </Heading>
        <Text
          fontSize={"16px"}
          lineHeight={"20px"}
          fontWeight={300}
          color={"#4c525a"}
        >
          We proudly back people with wide-ranging businesses—from design and
          marketing to development, writing, and photography.
        </Text>
      </GridItem>
      <Spacer />
      <GridItem
        textAlign={"left"}
        w={{ base: "80%", sm: "280px" }}
        area={"right"}
      >
        <Image
          src={
            "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c967efeb661_ill_Global%20Support_4%20block.svg"
          }
        />
        <Heading
          fontSize={{
            sm: "22px",
            base: "16px",
          }}
          lineHeight={{
            sm: "75px",
            base: "52px",
          }}
          color={"#4c525a"}
          fontWeight={700}
        >
          Built for Global Businesses
        </Heading>
        <Text
          fontSize={"16px"}
          lineHeight={"20px"}
          fontWeight={300}
          color={"#4c525a"}
        >
          Bonsai has international coverage across the United States, Canada,
          UK, Australia and more, with 180 currencies supported.
        </Text>
      </GridItem>
    </Grid>
  );
};

export default Pfour;
