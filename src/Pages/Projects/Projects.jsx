import {
  Box,
  Button,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
  Stack
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  FaChevronDown,
  FaEllipsisH,
  FaFolder,
  FaInfoCircle,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import countryData from "./db.json";
import axios from "axios";
import GetClientName from "./GetClientName";

import { FiAlertCircle } from "react-icons/fi";
function Projects() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [country, setCountry] = useState([]);
  const [clientData, setClientData] = useState([]);
  const [usersData, setUsersData] = useState("");
  const [project, setProject] = useState([]);
  const [client, setClient] = useState({});
  const [clientId, setClientId] = useState("");
  const [loading, setLoading] = useState(false);

  let arr = new Date().toDateString();
  let dateArr = arr.trim().split(" ");
  let [day, month, date, year] = dateArr;

  const [data, setData] = useState({
    userId: "",
    clientId: "",
    name: "",
    currency: "",
    status: false,
    startDate: `${date}-${month}-${year}`,
  });

  async function handleAddProject(e) {
    e.preventDefault();

    await axios.post("https://hellobonsaibackend.herokuapp.com/projects", {
      userId: usersData,
      clientId: data.clientId,
      name: data.name,
      currency: data.currency,
      startDate: data.startDate,
      status: data.status,
    });
    getProjects();
  }

  async function getClient() {
    await axios
      .get(`https://hellobonsaibackend.herokuapp.com/clients/${usersData}`)
      .then((res) => setClientData(res.data));
  }

  async function getProjects() {
    setLoading(true);
    await axios
      .get(
        `https://hellobonsaibackend.herokuapp.com/projects/userId/${usersData}`
      )
      .then((res) => {
        setProject(res.data);
        setLoading(false);
      });
  }

  function handleData(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  async function handleDeleteProject(id) {
    await axios
      .delete(`https://hellobonsaibackend.herokuapp.com/projects/${id}`)
      .then(() => getProjects());
  }

  async function toggleStatus(id, status) {
    await axios.patch(
      `https://hellobonsaibackend.herokuapp.com/projects/${id}`,
      {
        status: !status,
      }
    );
    getProjects();
  }

  useEffect(() => {
    setCountry(countryData.Country);
    let username = localStorage.getItem("token");
    let user = username.split(":");
    setUsersData(user[0]);
  }, []);

  useEffect(() => {
    getProjects();
  }, [usersData]);

  useEffect(() => {
    getClient();
  }, [clientData]);

  return (
    <Stack p={["0", "1%", "5%", "5%"]} pt="2%" spacing={8}>
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

      <Box w={["90%"]} m="auto" mt={10}>
        <Flex justifyContent="space-between">
          <Box display="flex" alignItems="center" gap={3}>
            <FaSearch />

            <Menu>
              <MenuButton as={Button}>
                <Box display="flex" alignItems="center" gap={2}>
                  Filter <FaChevronDown style={{ marginTop: "5px" }} />
                </Box>
              </MenuButton>
              <MenuList>
                <MenuItem>Active</MenuItem>
                <MenuItem>Completed</MenuItem>
                <MenuItem>Archived</MenuItem>
              </MenuList>
            </Menu>
          </Box>

          <Button
            variant="blackAlpha"
            bg={"#00b289"}
            color="white"
            onClick={onOpen}
            _hover={{ backgroundColor: "#00CF9F" }}
          >
            New Project
          </Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                <Text align="center">Create New Project</Text>
              </ModalHeader>
              <ModalCloseButton />
              <hr></hr>
              <ModalBody p={10}>
                <form onSubmit={handleAddProject}>
                  <Text fontWeight={500} color="grey">
                    CLIENT
                  </Text>

                  <Select
                    mt={3}
                    color="grey"
                    placeholder="Select option"
                    id="clientId"
                    value={data.clientId}
                    onChange={handleData}
                  >
                    {/* <option value="Sample Client">Sample Client</option> */}
                    {clientData?.map((el) => (
                      <option key={el._id} value={el._id}>
                        {el.name}
                      </option>
                    ))}
                  </Select>
                  <br />
                  <Text fontWeight={500} color="grey">
                    PROJECT NAME
                  </Text>

                  <Input
                    mt={3}
                    placeholder="Homepage Redesign"
                    id="name"
                    value={data.name}
                    onChange={handleData}
                  />
                  <br />
                  <br />
                  <Text fontWeight={500} color="grey">
                    CURRENCY
                  </Text>

                  <Select
                    placeholder="Select"
                    mt={3}
                    w="40%"
                    id="currency"
                    value={data.currency}
                    onChange={handleData}
                  >
                    {country?.map((el) => (
                      <option key={el.name} value={el.name}>
                        {el.name}
                      </option>
                    ))}
                  </Select>

                  <Input
                    type="submit"
                    bg={"#00b289"}
                    color="white"
                    _hover={{ backgroundColor: "#00CF9F" }}
                    mt={5}
                    value="Create New Project"
                    onClick={onClose}
                  />
                </form>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Flex>
      </Box>

      <Box w={["90%"]} m="auto" mt={10}>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>TITLE</Th>
                <Th>CLIENT</Th>
                <Th>START DATE</Th>
                <Th>DUE</Th>
                <Th>PAID</Th>
                <Th></Th>
              </Tr>
            </Thead>

            {loading ? (
              <Tbody>
                <Tr>
                  <Td></Td>
                  <Td></Td>
                  <Td>
                    <Flex alignItems="center" gap={2}>
                      ...Loading
                      <Spinner color="#00b289" size="sm" thickness="3px" />
                    </Flex>
                  </Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                </Tr>
              </Tbody>
            ) : (
              <Tbody>
                {project?.map((el) => (
                  <Tr key={el._id}>
                    <Td fontWeight={500}>
                      <Link to={`/vendor/projects/${el._id}`}>
                        <Flex alignItems="center" gap={2}>
                          <FaFolder />
                          <Text>{el.name}</Text>
                        </Flex>
                      </Link>
                    </Td>
                    <Td color="grey">
                      <GetClientName id={el.clientId} />
                    </Td>
                    <Td>{el.startDate}</Td>
                    <Td color="grey">₹0.00</Td>
                    <Td color="grey">₹0.00</Td>
                    <Td>
                      <Menu>
                        <MenuButton as={Button} bg="white">
                          <FaEllipsisH color="grey" />
                        </MenuButton>
                        <MenuList>
                          <Link to={`/vendor/projects/${el._id}`}>
                            <MenuItem>View Project</MenuItem>
                          </Link>
                          <MenuItem
                            onClick={() => toggleStatus(el._id, el.status)}
                          >
                            {el.status
                              ? "Mark Uncompleted"
                              : "Mark as Completed"}
                          </MenuItem>
                          <MenuItem onClick={() => handleDeleteProject(el._id)}>
                            Delete Project
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            )}
          </Table>
        </TableContainer>
      </Box>
    </Stack>
  );
}

export default Projects;
