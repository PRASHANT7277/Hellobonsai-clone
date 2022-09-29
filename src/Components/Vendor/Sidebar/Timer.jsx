import React, { useState } from "react";
import useStopwatchHook from "../Hooks/useStopwatch";
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
  Heading,
} from "@chakra-ui/react";
import { FaChessQueen, FaPlay } from "react-icons/fa";
import { IoIosPlay } from "react-icons/io";
import { GiPauseButton } from "react-icons/gi";
import { Form } from "react-router-dom";
const Timer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { time, start, pause, reset } = useStopwatchHook(0);
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
    if (play) {
      setplay(!play);
      onOpen();
      start();
    } else {
      setplay(!play);
      pause();
    }
  };

  const pausebtn = {
    border: "1px solid #cbebe3",
  };
  const playbtn = {
    border: "1px solid #f3dfe0",
  };
  const innerpausebtn = {
    border: "1px solid #50b38a",
    boxShadow: "0 0 4px rgba(0,0,0,.14)",
  };
  const innerplaybtn = {
    backgroundImage: " linear-gradient(to bottom,#dc5151 0%,#d73c3c 100%)",
    border: "1px solid #ba2626",
    boxShadow: " 0 0 4px rgba(0,0,0,.14)",
  };
  return (
    <>
      <Flex align="center" justify="center" gap={2}>
        <Flex align="center" justify="center">
          <Box
            borderRadius="50%"
            p="2px"
            border="1px solid #d5d6d6"
            w="35px"
            h="35px"
            style={play ? pausebtn : playbtn}
            m="auto"
            mt="-10%"
            mb="4%"
            _hover={{ padding: "1px" }}
          >
            <Flex
              borderRadius="50%"
              h="100%"
              w="100%"
              style={play ? innerpausebtn : innerplaybtn}
              align="center"
              justify="center"
              onClick={handleTimer}
              fontSize="12px"
              color={play ? "#50b38a" : "white"}
            >
              {play ? <FaPlay /> : <GiPauseButton />}
            </Flex>
          </Box>
        </Flex>
        <Text
          color={time === "00 : 00 : 00" ? "#7c7777" : "black"}
          fontSize={time === "00 : 00 : 00" ? "14px" : "16px"}
          onClick={onOpen}
          _hover={{ color: "black", transition: "0.3s" }}
        >
          {time === "00 : 00 : 00" ? "Start Timer" : time}
        </Text>
      </Flex>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalContent
          border="1px solid #d5d6d6"
          ml="65%"
          h="90vh"
          mt="5%"
          w="28%"
        >
          <ModalBody p="0px">
            <Stack borderBottom="1px solid  #d5d6d6" h="22%" p={3}>
              <Text
                fontSize="11px"
                fontWeight="normal"
                color="#c7c7c7"
                textAlign="center"
              >
                {play ? " START NEW TIMER" : "RESUME TIMER"}
              </Text>
              <Heading
                fontWeight="normal"
                textAlign="center"
                color={play ? "black" : "#c2c2c2"}
              >
                {time}
              </Heading>
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
