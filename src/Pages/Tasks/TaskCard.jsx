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
  Box,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
  ModalOverlay,
  Input,
  Button,
  Select,
  Divider,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FiAlertCircle } from "react-icons/fi";
import { TbSubtask } from "react-icons/tb";
import { FiLink } from "react-icons/fi";
import { BsArchive, BsFolder2, BsCheckLg } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import React from "react";
import { TbDots, TbCheckbox } from "react-icons/tb";
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineRestorePage,
} from "react-icons/md";
const TaskCard = (e) => {
  const token = localStorage.getItem("token") || [];
  let id = token.split(":");
  let obj = {
    clientId: id[0],
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleChange = (e) => {
    obj[e.target.name] = e.target.value;
  };

  const handleupdate = () => {
    console.log({ ...e, ...obj });
    e.handlePatch(e._id, { ...e, ...obj });
    // onClose();
  };

  return (
    <Tr
      key={e._id}
      border="1px solid #e2f3ff"
      borderRadius="5px"
      fontSize="13px"
    >
      <Td w="30%" onClick={onOpen}>
        <Flex align="center" gap={3}>
          <Box
            color="#aaa"
            _hover={{ color: "gray" }}
            fontSize="16px"
            // onClick={handleStatus}
          >
            {e.status === "Completed" ? (
              <TbCheckbox />
            ) : e.status === "Archived" ? (
              <MdOutlineRestorePage fontSize="17px" />
            ) : (
              <MdOutlineCheckBoxOutlineBlank />
            )}
          </Box>
          <Text> {e.title}</Text>
        </Flex>
        {/* <Checkbox
          isChecked={e.status === "Completed" ? true : false}
          onChange={handlecompleted}
          colorScheme={e.status === "Completed" ? true : false}
        >
         
        </Checkbox> */}
      </Td>
      <Td>{e.project ? e.project : "No project"}</Td>
      <Td>{e.client ? e.client : "--"}</Td>
      <Td color={e.status === "Completed" ? "#e47d7c" : "gray"}>
        {e.duedate ? e.duedate : "No due date"}
      </Td>
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
                {(e.status === "Active" || e.status === "Archived") && (
                  <Text
                    _hover={{ color: "black", bg: "#ececec" }}
                    p={1}
                    onClick={() =>
                      e.handlePatch(e._id, { ...e, status: "Completed" })
                    }
                  >
                    Mark Complete
                  </Text>
                )}
                {(e.status === "Completed" || e.status === "Archived") && (
                  <Text
                    _hover={{ color: "black", bg: "#ececec" }}
                    p={1}
                    onClick={() =>
                      e.handlePatch(e._id, { ...e, status: "Active" })
                    }
                  >
                    Mark Incomplete
                  </Text>
                )}
                {e.status !== "Archived" && (
                  <Text
                    _hover={{ color: "black", bg: "#ececec" }}
                    p={1}
                    onClick={() =>
                      e.handlePatch(e._id, { ...e, status: "Archived" })
                    }
                  >
                    Archive Task
                  </Text>
                )}

                <Text
                  _hover={{ color: "black", bg: "#ececec" }}
                  p={1}
                  onClick={() => {
                    e.handleDelete(e);
                  }}
                >
                  Delete Task
                </Text>
              </Stack>
            </PopoverBody>
          </PopoverContent>
          {/* </Portal> */}
        </Popover>
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
                  <BsArchive
                    fontSize="18px"
                    onClick={() =>
                      e.handlePatch(e._id, { ...e, status: "Archived" })
                    }
                  />
                  <RiDeleteBin5Line
                    fontSize="18px"
                    onClick={() => {
                      e.handleDelete(e);
                    }}
                  />
                </Flex>
                <Button
                  fontSize="12px"
                  border="1px solid #50b289"
                  color="#50b289"
                  bg="none"
                  _hover={{ border: "1px solid #50b289" }}
                  onClick={() =>
                    e.handlePatch(e._id, {
                      ...e,
                      status: e.status === "Completed" ? "Active" : "Completed",
                    })
                  }
                >
                  <Flex align="center" gap={2}>
                    <BsCheckLg />{" "}
                    <Text>
                      {e.status === "Active"
                        ? "Mark Complete"
                        : "Mark Incomplete"}
                    </Text>
                  </Flex>
                </Button>
              </Flex>
              <ModalCloseButton />
              <Divider />
              <Stack spacing={9} p={3} fontSize="12px">
                <Box>
                  <Input
                    placeholder={e.title ? e.title : "Add Title"}
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
                    placeholder={
                      e.description ? e.description : "Add Description"
                    }
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
                  onClick={handleupdate}
                >
                  Save Task
                </Button>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
        {/* ............................Modall ...................................*/}
      </Td>
    </Tr>
  );
};

export default TaskCard;
