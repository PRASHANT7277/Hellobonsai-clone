import {
  Checkbox,
  PopoverArrow,
  Td,
  Tr,
  Text,
  Stack,
  PopoverTrigger,
  Popover,
  PopoverContent,
  PopoverBody,
  Flex,
  Divider,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
  ModalOverlay,
  ModalFooter,
  Heading,
  Input,
  Box,
  Select,
  ModalCloseButton,
} from "@chakra-ui/react";
import React from "react";
import { TbDots, TbSubtask } from "react-icons/tb";

import { FiLink } from "react-icons/fi";
import { BsArchive, BsFolder2, BsCheckLg } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdCalendarToday } from "react-icons/md";
const TaskCard = (e) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Tr
      key={new Date().getSeconds() + Math.random()}
      border="1px solid #e2f3ff"
      borderRadius="5px"
      fontSize="13px"
      onClick={onOpen}
    >
      <Td w="30%">
        <Checkbox>{e.title}</Checkbox>
      </Td>
      <Td>{e.project ? e.project : "No project"}</Td>
      <Td>{e.client ? e.client : "--"}</Td>
      <Td>{e.duedate ? e.duedate : "No due date"}</Td>
      <Td>{e.time}</Td>
      <Td>
        <Popover>
          {" "}
          <PopoverTrigger>
            <Text>
              {" "}
              <TbDots />
            </Text>
            {/* <Button
              bg="#502ca7"
              _hover={{ bg: "#502ca7" }}
              color="white"
              size="sm"
              fontSize="18px"
              fontWeight="500"
            ></Button> */}
          </PopoverTrigger>
          {/* <Portal> */}
          <PopoverContent w="100%">
            {" "}
            <PopoverBody>
              <Stack
                fontSize="13px"
                bg="white"
                fontWeight="bold"
                color="#7c7777"
              >
                <PopoverArrow />

                <Text _hover={{ color: "black", bg: "#ececec" }} p={1}>
                  Mark Complete
                </Text>

                <Text _hover={{ color: "black", bg: "#ececec" }} p={1}>
                  Archive Task
                </Text>
                <Text _hover={{ color: "black", bg: "#ececec" }} p={1}>
                  Delete Task
                </Text>
              </Stack>
            </PopoverBody>
          </PopoverContent>
          {/* </Portal> */}
        </Popover>

        {/* ............................Modall ...................................*/}
        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset="slideInBottom"
          size="lg"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalBody>
              <Flex p={5} align="center" justify="space-between">
                <Flex align="center" gap={2} color="#aaa">
                  <Text fontSize="13px">UNFOLLOW</Text>
                  <TbSubtask fontSize="18px" />
                  <FiLink fontSize="18px" />
                  <BsArchive fontSize="18px" />
                  <RiDeleteBin5Line fontSize="18px" />
                </Flex>
                <Button
                  fontSize="12px"
                  border="1px solid #50b289"
                  color="#50b289"
                  bg="none"
                  _hover={{ border: "1px solid #50b289" }}
                >
                  <Flex align="center" gap={2}>
                    <BsCheckLg /> <Text>Mark Complete</Text>
                  </Flex>
                </Button>
              </Flex>
              <ModalCloseButton />
              <Divider />
              <Stack spacing={9} p={3} fontSize="12px">
                <Box>
                  <Input
                    placeholder={e.title ? e.title : "No Title added"}
                    _placeholder={{
                      color: "#aaa",
                      fontWeight: "bold",

                      fontSize: "18px",
                    }}
                    border="none"
                  />
                </Box>
                <Box>
                  <Input
                    placeholder="Add a description"
                    _placeholder={{
                      color: "#aaa",
                      fontWeight: "normal",
                      fontSize: "15px",
                    }}
                    h="150px"
                    border="none"
                  />
                </Box>
                <Flex justify="space-between" align="center" gap={5}>
                  <Flex align="center">
                    <Text color="#a292a2" fontSize="15px">
                      <BsFolder2 />
                    </Text>
                    <Select
                      _placeholder={{
                        color: "#aaa",
                        fontWeight: "normal",
                        fontSize: "15px",
                      }}
                      fontSize="13px"
                      border="none"
                    >
                      <option>PROJECT</option>
                    </Select>
                  </Flex>
                  <Flex>
                    <Input
                      placeholder="Due Date"
                      type="date"
                      _placeholder={{
                        color: "#aaa",
                        fontWeight: "normal",
                        fontSize: "15px",
                      }}
                      fontSize="13px"
                      border="none"
                    />
                  </Flex>
                </Flex>
              </Stack>
              <Flex justify="space-between" align="center" mt={12} mb={5}>
                <Button colorScheme="blue" onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  bg="#50b289"
                  color="white"
                  _hover={{ backgroundColor: "#50b289" }}
                >
                  Save Task
                </Button>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Td>
    </Tr>
  );
};

export default TaskCard;
