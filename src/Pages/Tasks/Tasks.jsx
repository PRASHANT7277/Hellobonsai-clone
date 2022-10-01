import React from "react";
import {
  Text,
  Flex,
  Link,
  Box,
  Stack,
  Select,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
  ModalOverlay,
  Input,
  Divider,
  ModalCloseButton,
  useToast,
  Td,
} from "@chakra-ui/react";
import { FiAlertCircle } from "react-icons/fi";
import { TbSubtask } from "react-icons/tb";
import { FiLink } from "react-icons/fi";
import { BsArchive, BsFolder2, BsCheckLg } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";

import TaskCard from "./TaskCard";
import {
  getTasksdata,
  postTask,
  deleteTask,
  updateTask,
} from "../../Components/Redux/TaskReducer.jsx/Task.action";

const Tasks = () => {
  const toast = useToast();

  const [task, settask] = React.useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const token = localStorage.getItem("token") || [];
  let id = token.split(":");

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
    postTask(obj)
      .then((res) => {
        getTasksdata().then((res) => {
          let data = res.data;
          data = data.filter((e) => e.status === "Active");

          settask(data);
        });
        onClose();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleDelete = (ele) => {
    let status = ele.status;

    deleteTask(ele._id).then((res) => {
      getTasksdata().then((res) => {
        let data = res.data;
        data = data.filter((e) => e.status === status);
        settask(data);
      });
      toast({
        title: "Task Deleted Successfully",
        variant: "top-accent",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "bottom-right",
      });
    });
  };
  const handlePatch = (id, data) => {
    updateTask(id, data).then((res) => {
      getTasksdata().then((res) => {
        let data = res.data;
        data = data.filter((e) => e.status === "Active");

        settask(data);
        toast({
          title: `Task Updated Successfully`,
          variant: "top-accent",
          status: "success",
          isClosable: true,
          position: "bottom-right",
        });
      });
    });
  };

  const handleStatus = (e) => {
    let type = e.target.value;
    getTasksdata().then((res) => {
      let data = res.data;
      data = data.filter((e) => e.status === type);
      settask(data);
    });
  };
  React.useEffect(() => {
    getTasksdata().then((res) => {
      let data = res.data;

      data = data.filter((e) => e.status === "Active");

      settask(data);
    });
  }, []);

  return (
    <Stack p="5%" pt="2%" spacing={8}>
      <Box
        bg="#f2faff"
        border="1px solid #e2f3ff"
        borderLeft="5px solid #e2f3ff"
        p={4}
      >
        <Flex gap={2} align="top">
          <FiAlertCircle color="#3a88c2" fontSize="20px" fontWeight="normal" />
          <Box>
            <Text fontSize="14px" color="#3a88c2">
              Start 7 Day Free Trial
            </Text>
            <Flex fontSize="12px">
              <Text>You currently don’t have an active subscription.</Text>
              <Link color="#3a88c2" textDecoration="underline">
                Start Your Free Trial now!
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Flex justify="space-between" align="center">
        <Flex gap={2}>
          <Select
            fontSize="13px"
            fontWeight="bold"
            focusBorderColor="none"
            borderRadius="0px"
            _focus={{ border: "1px solid #48a791" }}
            onChange={handleStatus}
          >
            <option style={{ fontSize: "14px" }} value="Active">
              Active
            </option>
            <option style={{ fontSize: "14px" }} value="Archived">
              Archived
            </option>
            <option style={{ fontSize: "14px" }} value="Completed">
              Completed
            </option>
          </Select>

          <Select
            fontSize="13px"
            fontWeight="bold"
            focusBorderColor="none"
            borderRadius="0px"
            _focus={{ border: "1px solid #48a791" }}
          >
            <option>All Tasks</option>
            <option>My Tasks</option>
          </Select>
          <Select
            fontSize="13px"
            fontWeight="bold"
            focusBorderColor="none"
            borderRadius="0px"
            _focus={{ border: "1px solid #48a791" }}
          >
            <option>All Projects</option>
          </Select>
        </Flex>
        <Flex gap={2}>
          <Button
            fontSize="13px"
            fontWeight="bold"
            focusBorderColor="none"
            borderRadius="0px"
            _focus={{ border: "1px solid #48a791", bg: "none" }}
            bg="none"
            border="1px solid #e2f3ff"
            _hover={{ bg: "none" }}
          >
            Add From Template
          </Button>
          <Button
            fontSize="13px"
            fontWeight="bold"
            focusBorderColor="none"
            borderRadius="0px"
            bg="#50b389"
            color="white"
            _hover={{ bg: "#50b389" }}
            onClick={onOpen}
          >
            New Task
          </Button>
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
                      placeholder={"No Title added"}
                      _placeholder={{
                        color: "#aaa",
                        fontWeight: "bold",

                        fontSize: "18px",
                      }}
                      onChange={handleChange}
                      name="title"
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
                      onChange={handleChange}
                      name="description"
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
                        onChange={handleChange}
                        name="project"
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
                        onChange={handleChange}
                        name="duedate "
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
                    onClick={handleAdd}
                  >
                    Save Task
                  </Button>
                </Flex>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Flex>
      </Flex>
      <Box>
        {task.length === 0 && (
          <Box h="250px" color="gray" textAlign="center" p={10}>
            <Text>Does Not have Any task</Text>
          </Box>
        )}
        {task.length > 0 && (
          <Table
            style={{
              borderSpacing: "0 1em",
            }}
          >
            <Thead>
              <Tr border="none">
                <Th>TASK</Th>
                <Th>PROJECT</Th>
                <Th>CLIENT</Th>
                <Th>DUE DATE</Th>
                <Th></Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody gap={2}>
              {task &&
                task.map((e) => {
                  return (
                    <TaskCard
                      {...e}
                      handleDelete={handleDelete}
                      handlePatch={handlePatch}
                      handleAdd={handleAdd}
                      key={e._id}
                    />
                  );
                })}
            </Tbody>
          </Table>
        )}
      </Box>
    </Stack>
  );
};

export default Tasks;
