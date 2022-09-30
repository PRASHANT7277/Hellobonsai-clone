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
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Checkbox,
} from "@chakra-ui/react";
import { FiAlertCircle } from "react-icons/fi";
import TaskCard from "./TaskCard";
const Tasks = () => {
  const [task, settask] = React.useState([]);

  const handleAdd = () => {
    let obj = {
      title: "",
      project: "",
      client: "",
      duedate: "",
      time: "",
      status: "",
    };
    settask([...task, obj]);
  };
  React.useEffect(() => {
    console.log(task);
  }, [task]);

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
          >
            <option style={{ fontSize: "14px" }}>Active</option>
            <option style={{ fontSize: "14px" }}>Archived</option>
            <option style={{ fontSize: "14px" }}>Completed</option>
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
            onClick={handleAdd}
          >
            New Task
          </Button>
        </Flex>
      </Flex>
      <Box>
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
                  // <Tr key={new Date().getSeconds() + Math.random()}>
                  //   <Td>
                  //     <Checkbox>{e.title}</Checkbox>
                  //   </Td>
                  //   <Td>{e.project ? e.project : "No project"}</Td>
                  //   <Td>{e.client ? e.client : "--"}</Td>
                  //   <Td>{e.duedate ? e.duedate : "No due date"}</Td>
                  //   <Td>{e.time}</Td>
                  //   <Td>...</Td>
                  // </Tr>
                  <TaskCard detail={e} />
                );
              })}
          </Tbody>
        </Table>
      </Box>
    </Stack>
  );
};

export default Tasks;
