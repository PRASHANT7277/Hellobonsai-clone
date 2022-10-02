import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import Pone from '../Home/Pone/pone'
import Ptwo from '../Home/Ptwo/ptwo'
import Pthree from "../Home/Pthree/pthree";
import Pfour from "../Home/Pfour/pfour";
import Pfive from "../Home/Pfive/pfive";
const Home = () => {
  

  return (
    <Box
      mt={{
        sm: "180px",
        base: "60px",
      }}
    >
      <Pone />
      <Spacer />

      <VStack
        mt={{
          base: "150px",
        }}
      >
        <Heading
          letterSpacing={"1.16px"}
          fontSize={{
            sm: "32px",
            base: "24px",
          }}
          lineHeight={{
            sm: "45px",
            base: "34px",
          }}
          sx={{
            fontFamily: "'amerigo-bt-roman', sans-serif",
            fontWeight: 400,
            color: "#4c525a",
          }}
          m={"auto"}
        >
          Make more,manage less
        </Heading>
        <Text
          fontSize={{
            sm: "22px",
            base: "16px",
          }}
          lineHeight={{
            sm: "31px",
            base: "22px",
          }}
          fontWeight={{ sm: 300, base: 300 }}
          color={"#4c525a"}
          w={{ sm: "56%",lg:"40%" }}
          textAlign='centre'
        >
          Bonsai integrates and automates every step of your business so it runs
          seamlessly - from proposal to tax season.
        </Text>
      </VStack>

      <Spacer />
      <Ptwo />

      <Spacer />

      <Pthree />

      <Spacer />
      <VStack
        mt={{
          sm: "90px",
          base: "60px",
        }}
      >
        <Heading
          fontSize={{
            sm: "32px",
            base: "24px",
          }}
          lineHeight={{
            sm: "45px",
            base: "34px",
          }}
          color={"#4c525a"}
          fontWeight={400}
          w={{
            sm: "60%",
            lg: "40%",
          }}
          m={"auto"}
          textAlign={"centre"}
        >
          Trusted by 500K+ self-employed workers and small businesses
        </Heading>
        <Heading
          fontSize={{
            sm: "24px",
            base: "20px",
          }}
          lineHeight={{
            sm: "29px",
            base: "24px",
          }}
          color={"#4c525a"}
          fontWeight={300}
          w={{
            sm: "60%",
            lg: "40%",
          }}
          m={"auto"}
          textAlign={"center"}
        >
          Whether you’re just getting started or your business is booming,
          Bonsai has you covered.
        </Heading>
      </VStack>
      <Pfour />
      <Text textAlign={'center'} fontSize='30px' fontWeight={'semibold'} mb='50px' color={'grey'} fontFamily='Amerigo-bt roman opt,sans-serif' >Don't just take it from us.</Text>
      <Spacer />
      <Pfive />

      <Flex
        flexWrap={"wrap"}
        w={{
          base: "100%",
          sm: "80%",
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
            lg: "50%",
            
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
              sm: "52px",
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
              sm: "52px",
            }}
            color={"#4c525a"}
            fontWeight={400}
          >
            We’re here to help it grow.
          </Heading>
        </Box>
        <Spacer />
        <Link to="/sign-up">
          <Button
            bg={"#00b289"}
            p={4}
            m={"auto"}
            color={"white"}
            mt={{ base: "20px" }}
            mr={{ sm: "20px" }}
          >
           START FREE
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Home;
