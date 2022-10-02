import './navar.css'
import React from 'react'
import { Link } from 'react-router-dom';

import {
  Box,
  Image,
  Flex,
  Text,
  Spacer,Button
} from "@chakra-ui/react";

import logo from '../../../Assests/logo.jpeg'
const Navbar = () => {
  return (
    <>
      <Box
        w={{ sm: "95%", md: "100%", lg: "100%" }}
        m="auto"
        
        top="0"
        position="sticky"
        zIndex="2000"
        bgColor={"white"}
        
      >
        <Box w={{ sm: "95%", md: "100%", lg: "75%" }} m="auto">
          <Flex flexWrap={"wrap"}>
            <Box>
              <Link to="/">
                <Image w="180px" mt="15px" src={logo} alt=".." />
              </Link>
            </Box>
            <Spacer />

            <Box p="2">
              <div class="dropdown">
                <button class="dropbtn">Product ⌵</button>
                <div class="dropdown-content">
                  <Link to="/">
                    <Text fontSize={"22px"}>Bonsai Workflow</Text>
                    <Text mt="15px" color="grey">
                      Look professional, win more clients and manage your
                      business from one place
                    </Text>
                    <Box mt="40px">
                      <hr />
                    </Box>
                  </Link>
                  <Link to="/">
                    <Text fontSize={"22px"}>Bonsai Tax</Text>
                    <Text mt="15px" color="grey">
                      Track expenses,maximize tax write-off,and estimate tax
                      without headche
                    </Text>
                    <Box mt="40px">
                      <hr />
                    </Box>
                  </Link>
                  <Link to="/">
                    <Text fontSize={"22px"}>Bonsai cash</Text>
                    <Text mt="15px" color="grey">
                      Bonsai's all in one financial hub: No fees and lighting
                      fast payouts
                    </Text>
                    <Box mt="40px"></Box>
                  </Link>
                </div>
              </div>
            </Box>
            <Box p="2">
              <div class="dropdown">
                <button class="dropbtn">Templates ⌵</button>
                <div class="dropdown-content">
                  <Link to="/">
                    <Text>☲ Contract Templates</Text>
                  </Link>
                  <Link to="/">
                    <Text mt="8px">☲ Proposal Templates</Text>
                  </Link>
                  <Link to="/">
                    <Text mt="8px">☲ Invoice Templates</Text>
                  </Link>
                  <Link to="/">
                    <Text mt="8px">☲ Agreements Templates</Text>
                  </Link>
                  <Link to="/">
                    <Text mt="8px">☲ Quote Templates</Text>
                  </Link>
                  <Link to="/">
                    <Text mt="8px">🕗 Scope of works Templates</Text>
                  </Link>
                  <Link to="/">
                    <Text mt="8px">☲ Brief Templates</Text>
                  </Link>
                </div>
              </div>
            </Box>
            <Box p="1.5">
              <div class="dropdown">
                <button class="dropbtn">
                  <Link to="/pricing">Pricing</Link>
                </button>
              </div>
            </Box>
            <Box p="1.5">
              <div class="dropdown">
                <button class="dropbtn">
                  <Link to="/reviews">Reviews</Link>
                </button>
              </div>
            </Box>
            <Spacer />
            <Box p="3">
              <Link to="/login">
                <Button
                  colorScheme="white"
                  color="#06B48B"
                  size="md"
                  border={"1px solid teal"}
                >
                  LOG IN
                </Button>
              </Link>
            </Box>

            <Box p="3">
              <Link to="/sign-up">
                <Button bg="#06B48B" color={"white"} size="md">
                  START FREE
                </Button>
              </Link>
            </Box>
          </Flex>
        </Box>

        
      </Box>
    </>
  );
}

export default Navbar