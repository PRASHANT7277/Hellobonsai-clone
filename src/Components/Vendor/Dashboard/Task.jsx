import {
  Flex,
  Text,
  Stack,
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
import { AiFillInfoCircle } from "react-icons/ai";
import { RiAddFill } from "react-icons/ri";
import { Form } from "react-router-dom";
import { postTask } from "../../Redux/TaskReducer.jsx/Task.action";
const Tasks = () => {
  return (
    <Stack border="1px solid #d5d6d6" borderRadius="5px" fontSize="14px">
      <Flex align="center" justify="space-between">
        <Flex align="center">
          <Text color="#292a2d" p={4} fontWeight="bold">
            My Upcoming & Overdue Tasks
          </Text>
          <AiFillInfoCircle fontSize="16px" color="#e5e5e5" />
        </Flex>

        <AddtaskModal />
      </Flex>
      <Divider />
      <Stack textAlign="center" h="150px">
        <Text m="auto" color="#aaa">
          No Task yet
        </Text>
      </Stack>
    </Stack>
  );
};

function AddtaskModal() {
  const token = localStorage.getItem("token") || [];
  let id = token.split(":");

  const { isOpen, onOpen, onClose } = useDisclosure();
  let obj = {
    clientId: id[0],
    title: "",
    project: "",
    client: "",
    duedate: "",
    time: "",
    status: "Active",
    description: "",
  };
  const handleChange = (e) => {
    obj[e.target.name] = e.target.value;
  };

  const handleAdd = () => {
    postTask(obj);
    onClose();
  };
  return (
    <>
      <Button
        onClick={onOpen}
        bg="none"
        _hover={{ bg: "none" }}
        border="1px solid #50b289"
        color="#50b289"
        borderRadius="3px"
        borderRight="none"
        fontWeight="bold"
      >
        {" "}
        <RiAddFill />
      </Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Heading fontWeight="500" fontSize="23px" textAlign="center" p={5}>
              New Task
            </Heading>
            <ModalCloseButton />
            <Divider />
            <Stack spacing={9} p={3} fontSize="12px">
              <Box>
                <Text color="#a292a2">TITLE</Text>
                <Input
                  placeholder="Update company branding and style guide"
                  _placeholder={{
                    color: "#aaa",
                    fontWeight: "normal",
                    fontSize: "15px",
                  }}
                  onChange={handleChange}
                  name="title"
                />
              </Box>
              <Box>
                <Text color="#a292a2">DESCRIPTION</Text>
                <Input
                  placeholder="Add a description"
                  _placeholder={{
                    color: "#aaa",
                    fontWeight: "normal",
                    fontSize: "15px",
                  }}
                  onChange={handleChange}
                  name="description"
                />
              </Box>
              <Flex justify="space-between" align="center" gap={5}>
                <Box w="70%">
                  <Text color="#a292a2">PROJECT</Text>
                  <Select
                    placeholder="Select..."
                    _placeholder={{
                      color: "#aaa",
                      fontWeight: "normal",
                      fontSize: "15px",
                    }}
                    onChange={handleChange}
                    name="project"
                  >
                    <option>newone</option>
                  </Select>
                </Box>
                <Box>
                  <Text>DUE DATE</Text>
                  <Input
                    placeholder="Due Date"
                    type="date"
                    _placeholder={{
                      color: "#aaa",
                      fontWeight: "normal",
                      fontSize: "15px",
                    }}
                    name="duedate"
                    onChange={handleChange}
                  />
                </Box>
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
                onClick={handleAdd}
              >
                Save Task
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default Tasks;
