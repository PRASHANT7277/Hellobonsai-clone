import React from "react";
import VendorRoutes from "./Routes/VendorRoutes";
import Sidebar from "./Sidebar/Sidebar";
import {
  Stack,
  Box,
  Flex,
  Button,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { MdOutlineSearch } from "react-icons/md";
import { FaChessQueen, FaPlay } from "react-icons/fa";
import Timer from "./Sidebar/Timer";
const Vendor = () => {
  return (
    <Stack w="100%">
      <Flex>
        <Stack
          w={["25%", "25%", "20%", "15%"]}
          h="100vh"
          borderRight="1px solid #d5d6d6"
        >
          <Sidebar />
        </Stack>
        <Stack w="85%" h="100vh" overflow="scroll">
          <Flex
            p={4}
            w="100%"
            borderBottom="1px solid #d5d6d6"
            justify="space-between"
            align="center"
          >
            <Box>
              <InputGroup size="sm" w="115%">
                <InputLeftElement
                  pointerEvents="none"
                  fontWeight="bold"
                  children={<MdOutlineSearch color="#7c7777" fontSize="20px" />}
                />
                <Input
                  type="text"
                  fontSize="14px"
                  placeholder="Search"
                  border="none"
                  _placeholder={{
                    opacity: 1,
                    color: "#d5d6d6",
                  }}
                />
              </InputGroup>
            </Box>
            <Flex align="center" gap={5}>
              <Button
                fontWeight="normal"
                backgroundImage="linear-gradient(to bottom,#00b289 0%,#00b289 100%)"
                borderRadius="3px"
                _hover={{
                  backgroundImage:
                    "linear-gradient(to bottom,#00ba8f 0%,#00ba8f 100%)",
                }}
                fontSize="11px"
                size="sm"
              >
                <Flex gap={2} align="center">
                  <FaChessQueen color="#a6e5d7" />
                  <Text color="white" fontWeight="bold">
                    Start Free Trial
                  </Text>
                </Flex>
              </Button>

              <Timer />
              <Button
                bg="#502ca7"
                _hover={{ bg: "#502ca7" }}
                color="white"
                size="sm"
                fontSize="18px"
                fontWeight="500"
              >
                U
              </Button>
            </Flex>
          </Flex>
          <VendorRoutes />
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Vendor;
