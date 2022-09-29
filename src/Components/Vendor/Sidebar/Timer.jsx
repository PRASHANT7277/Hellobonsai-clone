import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
  Button,
  Stack,
  Flex,
  Box,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { FaChessQueen, FaPlay } from "react-icons/fa";
import { IoIosPlay } from "react-icons/io";
import { GiPauseButton } from "react-icons/gi";
import { Form } from "react-router-dom";
const Timer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const pausestyle = {
    backgroundImage: "linear-gradient(to bottom,#00b289 0%,#009975 100%)",
    border: "1px solid #007f62",
    boxShadow: "0 0 4px rgba(0,0,0,.14)",
  };
  const playStyle = {
    backgroundImage: " linear-gradient(to bottom,#dc5151 0%,#d73c3c 100%)",
    border: "1px solid #ba2626",
    boxShadow: " 0 0 4px rgba(0,0,0,.14)",
  };

  const [play, setplay] = useState(true);
  const handleTimer = () => {
    setplay(!play);
  };
  return (
    <>
      <Flex align="center" justify="center" gap={2}>
        <Flex
          border="1px Solid #b1e6da"
          w="30px"
          h="30px"
          p="1px"
          borderRadius="50%"
          align="center"
          justify="center"
          _hover={{ padding: "2px" }}
        >
          <Flex
            p="5px"
            border="1px Solid #00ba8f"
            justify="center"
            align="center"
            _hover={{ padding: "6px", transition: "0.3s" }}
            borderRadius="50%"
          >
            <FaPlay textalign="center" color="#009975" fontSize="12px" />
          </Flex>
        </Flex>
        <Text
          color="#7c7777"
          fontSize="14px"
          onClick={onOpen}
          _hover={{ color: "black" }}
        >
          Start Timer
        </Text>
      </Flex>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalContent
          border="1px solid #d5d6d6"
          ml="60%"
          h="90vh"
          mt="5%"
          w="28%"
        >
          <ModalBody p="0px">
            <Stack borderBottom="1px solid  #d5d6d6" h="22%">
              <Text
                fontSize="11px"
                fontWeight="normal"
                color="#c7c7c7"
                textAlign="center"
              >
                {play ? " START NEW TIMER" : "RESUME TIMER"}
              </Text>
            </Stack>
            <Stack borderBottom="1px solid  #d5d6d6">
              <Box
                borderRadius="50%"
                p="5px"
                border="1px solid #d5d6d6"
                w="60px"
                h="60px"
                style={play ? pausestyle : playStyle}
                m="auto"
                mt="-10%"
                mb="4%"
              >
                <Button
                  borderRadius="50%"
                  h="100%"
                  w="100%"
                  style={play ? pausestyle : playStyle}
                  onClick={handleTimer}
                  fontSize="30px"
                  color="white"
                >
                  {play ? <FaPlay /> : <GiPauseButton />}
                </Button>
              </Box>
            </Stack>
            <Stack p={8} fontSize="13px" color="#aaa">
              <Stack>
                <Text>PROJECT</Text>
                <Select variant="outline" placeholder="Select">
                  <option>hello</option>
                </Select>
              </Stack>
              <Stack>
                <Text>TASK</Text>
                <Select
                  variant="outline"
                  placeholder="Select a task or type a new one..."
                >
                  <option>hello</option>
                </Select>
              </Stack>
              <Flex align="center" gap={5}>
                <Box>
                  <Text>DATE</Text>
                  <Input type="date" />
                </Box>
                <Box>
                  <Text>RATE</Text>
                  <Input type="number" placeholder="50.00" />
                </Box>
              </Flex>
              <Input
                type="text"
                placeholder="What are you working on?"
                fontSize="12px"
                h="100px"
              />
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Timer;
