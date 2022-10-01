import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Spacer,
  Switch,
  Text,
} from "@chakra-ui/react";
import React from "react";
import styles from "./Pricing.module.css";
import { questions, pricingDetails } from "./priceConstants";
import { useState } from "react";
import Card from "./Card";
import Cards2 from "./Cards2";
import Navbar from "../Homepage/Navbar/navbar.jsx";
import  Footer  from "../Homepage/Footer/Footer.jsx";
const Pricing = () => {
  const [ym, setym] = useState(false);

  const handleym = (e) => {
    setym(e.target.checked);
  };
  return (
    <>
    <Box><Navbar/></Box>
      <div className={styles.bg_shape}>
        {/* plans and pricing top */}
        <Box p="10px 10px" w={{ lg: "60%", sm: "110%" }} margin="auto" mt="10%">
          <Grid
            p="20px 20px"
            templateColumns="repeat(2, 1fr)"
            gap={10}
            color="#4c525a"
          >
            <Box textAlign="center" h="fit-content">
              <Text
                fontWeight="400"
                fontSize={{ sm: "24px", md: "40px" }}
                lineHeight="29px"
              >
                Plans & Pricing
              </Text>
            </Box>
            <Box display="flex" textAlign="center" ml={{ lg: "20%" }}>
              <Box
                display="flex"
                gap="10px"
                mt={{ sm: "20%" }}
                ml={{ sm: "-25%" }}
              >
                <Text fontWeight="600" fontSize="17px" lineHeight="20px">
                  MONTHLY
                </Text>
                <Switch color="" onChange={handleym} size="lg"></Switch>
                <Text color={ym ? "grey" : ""}>YEARLY</Text>
              </Box>
              <Box
                mt={{ lg: "10%", md: "-10%" }}
                ml={{ lg: "-20%", sm: "-40%" }}
              >
                <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e9d7255d3886a6103fb12a9_FREE-text.svg"></Image>
              </Box>
            </Box>
          </Grid>
        </Box>

        {/* Cards part */}
        <Box
          display="grid"
          gridTemplateColumns={{ lg: "repeat(3, 1fr)", md: "repeat(1, 1fr)" }}
          gap={5}
        >
          {pricingDetails.map((e) => (
            <Card
              head={e.header}
              headP={e.headerP}
              rateM={e.rateM}
              rateY={e.rateY}
              ym={ym}
              lists={e.lists}
            />
          ))}
        </Box>
        <br />
        <br />
        <br />
        <br />
        {/* straight cards */}

        <Box w={{ lg: "80%", sm: "100%" }} m="auto">
          <Text
            textAlign="center"
            fontWeight="400"
            fontSize={{ lg: "32px", sm: "24px" }}
            lineHeight={{ lg: "45px", sm: "34px" }}
          >
            Super charge your work with add-ons
          </Text>
          <br />
          <br />
          <Cards2 />
        </Box>

        {/* kachra box */}
        <Box w={{ sm: "100%" }}>
          <Flex
            flexDirection={{ lg: "row", sm: "column" }}
            flexWrap={{ sm: "wrap" }}
            w={{
              lg: "70%",
              sm: "100%",
            }}
            bg={"#f2faff"}
            m={"auto"}
            mt={{
              base: "60px",
              sm: "90px",
            }}
            p={"40px"}
            alignItems={"center"}
            justifyContent={{
              base: "center",
            }}
          >
            <Box
              w={{
                sm: "70%",
                base: "90%",
              }}
            >
              <Heading
                textAlign={"left"}
                fontSize={{
                  base: "40px",
                  sm: "44px",
                }}
                lineHeight={{
                  sm: "57px",
                }}
                color={"#4c525a"}
                fontWeight={400}
              >
                It’s{" "}
                <span
                  style={{
                    color: "#01b289",
                  }}
                >
                  your{" "}
                </span>{" "}
                business.
              </Heading>
              <Heading
                textAlign={"left"}
                fontSize={{
                  base: "40px",
                  sm: "44px",
                }}
                lineHeight={{
                  sm: "57px",
                }}
                color={"#4c525a"}
                fontWeight={400}
              >
                We’re here to help it grow.
              </Heading>
            </Box>
            <Spacer />
            <Link to="/dashboard">
              <Button
                bg={"#00b289"}
                p={4}
                m={"auto"}
                color={"white"}
                mt={{ base: "20px" }}
                mr={{ sm: "20px" }}
              >
                GO TO DASHBOARD
              </Button>
            </Link>
          </Flex>

          {/* Frequenly asked questions */}
          <br />
          <br />
          <br />
          <Box w={{ lg: "50%", sm: "100" }} m="auto" p="10px 10px">
            <Text
              textAlign="center"
              fontSize="24px"
              lineHeight="36px"
              fontWeight="700"
              color="#00b289"
            >
              Frequently Asked Questions
            </Text>
            <br />
            <br />
            <Accordion allowMultiple>
              {questions.map((e) => (
                <AccordionItem>
                  <Box>
                    <AccordionButton
                      _hover={{ background: "white" }}
                      display="flex"
                      justifyContent="space-between"
                    >
                      <Text
                        fontSize={{ lg: "24px", sm: "20px" }}
                        lineHeight="30px"
                        fontWeight="700"
                        _hover={{ color: "#00b289" }}
                      >
                        {e.que}
                      </Text>
                      <AccordionIcon />
                    </AccordionButton>
                  </Box>
                  <AccordionPanel>
                    <Text
                      _hover={{
                        color: "black.500",
                        textDecoration: "underline",
                      }}
                      fontWeight="300"
                      fontSize="16px"
                      lineHeight="30px"
                    >
                      {e.ans}
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
        </Box>
      </div>
      <Box><Footer/></Box>
    </>
  );
};

export default Pricing;
