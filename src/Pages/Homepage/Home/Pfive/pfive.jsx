import React from "react";
import Carousel from "react-bootstrap/Carousel";
import './pfive.css'
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
const Pfive = () => {
  const carousel = [
    {
      leftdes: `"Anyone doing #freelance work should use @bonsaiinc for contracts/payment. It's amazing and saves boatloads of time."`,
      lefttitle: "David Mihm",
      leftquote:
        "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c29a9feb660_quote-icon.svg",
      leftposition: "Founder of TidingsCo",
      leftimage: "3.png",
      rightdes: `"@bonsaiinc is probably my all time favorite freelance tool. hands down. the team is super responsive and accessible when i have questions."`,
      righttitle: "David Urbinati",
      rightquote:
        "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c29a9feb660_quote-icon.svg",
      rightposition: "Motion design / animation",
      rightimage: "4.png",
    },
    {
      leftdes: `"Anyone doing #freelance work should use @bonsaiinc for contracts/payment. It's amazing and saves boatloads of time.`,
      lefttitle: "Nathanael Smith",
      leftquote:
        "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c29a9feb660_quote-icon.svg",
      leftposition: "Product Design",
      leftimage: "1.png",
      rightdes: `"Wow, @bonsaiinc's contracts are completely wonderful. If you freelance you have to check it out. Really lovely experience. h/t @hemeon`,
      righttitle: "Jon Gold",
      rightquote:
        "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c29a9feb660_quote-icon.svg",
      rightposition: "Designer and engineer",
      rightimage: "2.png",
    },
  ];

  return (
    <>
    <Box className='first3'></Box>
      <Box
        m={"auto"}
        w={{
          sm: "700px",
          md: "900px",
          lg: "800px",
          base: "90%",
        }}
      >
        <Carousel indicators={true}>
          <Carousel.Item>
            <Grid
              m={"auto"}
              gridTemplateAreas={{
                base: `  "left" "right" `,
                sm: ` "left right " `,
              }}
              gridTemplateColumns={{
                base: "repeat(1,1fr)",
                sm: `repeat(2,1fr) `,
              }}
              gridTemplateRows={{
                base: "repeat(2,1fr)",
                sm: `repeat(1,1fr) `,
              }}
            >
              <GridItem area={"left"} h={"400px"}>
                <VStack overflow={"visible"}>
                  <Flex h={"150px"}>
                    <Image src={`./images/${carousel[0].leftimage}`} />
                    <Image src={carousel[0].leftquote} />
                  </Flex>
                  <Heading
                    m={"auto"}
                    w={"80%"}
                    fontSize={{
                      sm: "21px",
                      base: "18px",
                    }}
                    lineHeight={{
                      sm: "33px",
                      base: "24px",
                    }}
                    color={"#4c525a"}
                    fontWeight={400}
                    textAlign={"left"}
                  >
                    {carousel[0].leftdes}
                  </Heading>

                  <Text
                    m={"auto"}
                    w={"80%"}
                    fontSize={{
                      sm: "20px",
                      base: "16px",
                    }}
                    mt={{ base: "31px", sm: "31px" }}
                    lineHeight={{
                      sm: "32px",
                      base: "22px",
                    }}
                    color={"#4c4d5f"}
                    fontWeight={600}
                    textAlign={"left"}
                  >
                    {carousel[0].lefttitle}
                  </Text>
                  <Text
                    m={"auto"}
                    w={"80%"}
                    fontSize={{
                      sm: "18px",
                      base: "18px",
                    }}
                    lineHeight={{
                      sm: "30px",
                      base: "30px",
                    }}
                    color={"#4c4d5f"}
                    fontWeight={400}
                    textAlign={"left"}
                  >
                    {carousel[0].leftposition}
                  </Text>
                </VStack>
              </GridItem>
              <GridItem area={"right"} h={"400px"}>
                <VStack overflow={"visible"}>
                  <Flex h={"150px"}>
                    <Image src={`./images/${carousel[0].rightimage}`} />
                    <Image src={carousel[0].rightquote} />
                  </Flex>
                  <Heading
                    m={"auto"}
                    w={"80%"}
                    fontSize={{
                      sm: "21px",
                      base: "18px",
                    }}
                    lineHeight={{
                      sm: "33px",
                      base: "24px",
                    }}
                    color={"#4c525a"}
                    fontWeight={400}
                    textAlign={"left"}
                  >
                    {carousel[0].rightdes}
                  </Heading>

                  <Text
                    m={"auto"}
                    w={"80%"}
                    fontSize={{
                      sm: "20px",
                      base: "16px",
                    }}
                    mt={{ base: "31px", sm: "31px" }}
                    lineHeight={{
                      sm: "32px",
                      base: "22px",
                    }}
                    color={"#4c4d5f"}
                    fontWeight={600}
                    textAlign={"left"}
                  >
                    {carousel[0].righttitle}
                  </Text>
                  <Text
                    m={"auto"}
                    w={"80%"}
                    fontSize={{
                      sm: "18px",
                      base: "18px",
                    }}
                    lineHeight={{
                      sm: "30px",
                      base: "30px",
                    }}
                    color={"#4c4d5f"}
                    fontWeight={400}
                    textAlign={"left"}
                  >
                    {carousel[0].rightposition}
                  </Text>
                </VStack>
              </GridItem>
            </Grid>
          </Carousel.Item>

          <Carousel.Item>
            <Grid
              m={"auto"}
              gridTemplateAreas={{
                base: `  "left" "right" `,
                sm: ` "left right " `,
              }}
              gridTemplateColumns={{
                base: "repeat(1,1fr)",
                sm: `repeat(2,1fr) `,
              }}
              gridTemplateRows={{
                base: "repeat(2,1fr)",
                sm: `repeat(1,1fr) `,
              }}
            >
              <GridItem area={"left"} h={"400px"}>
                <VStack overflow={"visible"}>
                  <Flex h={"150px"}>
                    <Image src={`./images/${carousel[1].leftimage}`} />
                    <Image src={carousel[1].leftquote} />
                  </Flex>
                  <Heading
                    m={"auto"}
                    w={"80%"}
                    fontSize={{
                      sm: "21px",
                      base: "18px",
                    }}
                    lineHeight={{
                      sm: "33px",
                      base: "24px",
                    }}
                    color={"#4c525a"}
                    fontWeight={400}
                    textAlign={"left"}
                  >
                    {carousel[1].leftdes}
                  </Heading>

                  <Text
                    m={"auto"}
                    w={"80%"}
                    fontSize={{
                      sm: "20px",
                      base: "16px",
                    }}
                    mt={{ base: "31px", sm: "31px" }}
                    lineHeight={{
                      sm: "32px",
                      base: "22px",
                    }}
                    color={"#4c4d5f"}
                    fontWeight={600}
                    textAlign={"left"}
                  >
                    {carousel[1].lefttitle}
                  </Text>
                  <Text
                    m={"auto"}
                    w={"80%"}
                    fontSize={{
                      sm: "18px",
                      base: "18px",
                    }}
                    lineHeight={{
                      sm: "30px",
                      base: "30px",
                    }}
                    color={"#4c4d5f"}
                    fontWeight={400}
                    textAlign={"left"}
                  >
                    {carousel[1].leftposition}
                  </Text>
                </VStack>
              </GridItem>
              <GridItem area={"right"} h={"400px"}>
                <VStack overflow={"visible"}>
                  <Flex h={"150px"}>
                    <Image src={`./images/${carousel[1].rightimage}`} />
                    <Image src={carousel[1].rightquote} />
                  </Flex>
                  <Heading
                    m={"auto"}
                    w={"80%"}
                    fontSize={{
                      sm: "21px",
                      base: "18px",
                    }}
                    lineHeight={{
                      sm: "33px",
                      base: "24px",
                    }}
                    color={"#4c525a"}
                    fontWeight={400}
                    textAlign={"left"}
                  >
                    {carousel[1].rightdes}
                  </Heading>

                  <Text
                    m={"auto"}
                    w={"80%"}
                    fontSize={{
                      sm: "20px",
                      base: "16px",
                    }}
                    mt={{ base: "31px", sm: "31px" }}
                    lineHeight={{
                      sm: "32px",
                      base: "22px",
                    }}
                    color={"#4c4d5f"}
                    fontWeight={600}
                    textAlign={"left"}
                  >
                    {carousel[1].righttitle}
                  </Text>
                  <Text
                    m={"auto"}
                    w={"80%"}
                    fontSize={{
                      sm: "18px",
                      base: "18px",
                    }}
                    lineHeight={{
                      sm: "30px",
                      base: "30px",
                    }}
                    color={"#4c4d5f"}
                    fontWeight={400}
                    textAlign={"left"}
                  >
                    {carousel[1].rightposition}
                  </Text>
                </VStack>
              </GridItem>
            </Grid>
          </Carousel.Item>
        </Carousel>
      </Box>
    </>
  );
};

export default Pfive;
