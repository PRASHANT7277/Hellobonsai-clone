import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  Flex,
  AccordionPanel,
  Text,
  Box,
  AccordionIcon,
  Spacer
  
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { Link } from "react-router-dom";

const Hamburgur = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  
  

  return (
    <>
      <Box
        bg={"white"}
        zIndex={10}
        position={"fixed"}
        top={0}
        
        pt={{
          base: "12px",
          sm: "10px",
        }}
        pb={{
          base: "12px",
          sm: "10px",
        }}
        m={"auto"}
        w={"100%"}
      >
        <Flex
          alignItems={"center"}
          m={"auto"}
          w={{
            sm: "700px",
            md: "900px",
            lg: "1050px",
            base: "85%",
          }}
         
          height={{
            sm: "50px",
            lg: "45px",
          }}
          ovewrflow={"auto"}
        >
          <Flex>
            <Link to="/">
              <Image
                w={{
                  lg: "110px",
                  sm: "108px",
                  base: "90px",
                }}
                src={`https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg`}
              />
            </Link>
          </Flex>
          <Spacer />
          <Spacer />
          <HamburgerIcon
            ref={btnRef}
            w={6}
            h={6}
            colorscheme="teal"
            onClick={onOpen}
          />
          <Drawer
            size={"lg"}
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent p={4} w={"100px"}>
              <DrawerHeader>
                <Image
                  src={
                    "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7caaf7feb674_logo%20copy.svg"
                  }
                />
                <DrawerCloseButton mt={"20px"} mr={"20px"} />
              </DrawerHeader>

              <DrawerBody
                display={"flex"}
                justifyContent={"center"}
                padding={"0px"}
              >
                <Accordion allowToggle p={4} mt={"60px"} w={"110%"}>
                  <AccordionItem marginTop={"none"} w={"100%"} m={"auto"}>
                    <h2>
                      <AccordionButton
                        display={"flex"}
                        justifyContent={"space-between"}
                        fontSize={{
                          sm: "21px",
                        }}
                        lineHeight={{
                          sm: "34px",
                        }}
                        alignItems={"center"}
                        color={"#4c525a"}
                        fontWeight={500}
                        letterSpacing={"0.9px"}
                        fontFamily={"sans-serif"}
                      >
                        <Box flex="1" textAlign="left">
                          Product
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Link to="/">
                        <Text>Bonsai Workflow</Text>
                      </Link>
                      <Link to="/">
                        <Text mt="8px">Bonsai Tax</Text>
                      </Link>
                      <Link to="/">
                        <Text mt="8px">Bonsai Cash</Text>
                      </Link>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem marginTop={"none"} w={"100%"} m={"auto"}>
                    <h2>
                      <AccordionButton
                        display={"flex"}
                        justifyContent={"space-between"}
                        fontSize={{
                          sm: "21px",
                        }}
                        lineHeight={{
                          sm: "34px",
                        }}
                        alignItems={"center"}
                        color={"#4c525a"}
                        fontWeight={500}
                        letterSpacing={"0.9px"}
                        fontFamily={"sans-serif"}
                      >
                        <Box flex="1" textAlign="left">
                          Templates
                        </Box>

                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
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
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem marginTop={"none"} w={"100%"} m={"auto"}>
                    <h2>
                      <AccordionButton
                        display={"flex"}
                        justifyContent={"space-between"}
                        fontSize={{
                          sm: "21px",
                        }}
                        lineHeight={{
                          sm: "34px",
                        }}
                        alignItems={"center"}
                        color={"#4c525a"}
                        fontWeight={500}
                        letterSpacing={"0.9px"}
                        fontFamily={"sans-serif"}
                      >
                        <Link to="/pricing">
                          <Box flex="1" textAlign="left">
                            Pricing
                          </Box>
                        </Link>
                      </AccordionButton>
                    </h2>
                  </AccordionItem>

                  <AccordionItem marginTop={"none"} w={"100%"} m={"auto"}>
                    <h2>
                      <AccordionButton
                        display={"flex"}
                        justifyContent={"space-between"}
                        fontSize={{
                          sm: "21px",
                        }}
                        lineHeight={{
                          sm: "34px",
                        }}
                        alignItems={"center"}
                        color={"#4c525a"}
                        fontWeight={500}
                        letterSpacing={"0.9px"}
                        fontFamily={"sans-serif"}
                      >
                        <Link to="/reviews">
                          {" "}
                          <Box flex="1" textAlign="left">
                            Reviews
                          </Box>
                        </Link>
                      </AccordionButton>
                    </h2>
                  </AccordionItem>
                </Accordion>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Box>
    </>
  );
};

export default Hamburgur;
