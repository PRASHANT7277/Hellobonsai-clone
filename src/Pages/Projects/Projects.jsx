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
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
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

function Projects() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [country, setCountry] = useState([]);
  const [clientData, setClientData] = useState([]);
  const [project, setProject] = useState([]);
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(false);

  let arr = new Date().toDateString();
  let dateArr = arr.trim().split(" ");
  let [day, month, date, year] = dateArr;
  let str = `${date}-${month}-${year}`;
  const [data, setData] = useState({
    clientId: "",
    name: "",
    currency: "",
    startDate: `${str}`,
    status: false,
  });

  async function handleAddProject(e) {
    e.preventDefault();
    await axios.post("https://hellobonsaibackend.herokuapp.com/projects", {
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
      .get("https://hellobonsaibackend.herokuapp.com/clients")
      .then((res) => setClientData(res.data));
  }
  async function getProjects() {
    setLoading(true);
    await axios
      .get("https://hellobonsaibackend.herokuapp.com/projects")
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

  async function handleGetClient(id) {
    await axios
      .get(`https://hellobonsaibackend.herokuapp.com/clients/${id}`)
      .then((res) => setClient(res.data[0]));
  }

  
  useEffect(() => {
    setCountry(countryData.Country);
    getProjects();
    getClient();
    handleGetClient(data.clientId);
  }, []);

  console.log(data);

  return (
    <div style={{ marginTop: "30px", marginBottom: "100px" }}>
      <Box
        borderLeft="2px solid #3a88c2"
        w={["90%"]}
        m="auto"
        p={[5]}
        backgroundColor="#f2faff"
        borderRadius="5px"
      >
        <Flex justifyContent="left" gap="10px">
          <Box>
            <FaInfoCircle
              style={{ marginTop: "7px", color: "#3a88c2" }}
              size="20px"
            />
          </Box>

          <Box>
            <Text color="#3a88c2">Start 7 Day Free Trial</Text>
            <Text display="flex" gap={1}>
              You currently don't have an active subscription.{" "}
              <Text
                color="#3a88c2"
                textDecoration="underline"
                cursor={"pointer"}
              >
                Start your Free Trial now!
              </Text>
            </Text>
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
                  <Td>...loading</Td>
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
                    <Td color="grey">{client.name}</Td>
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
                          <MenuItem>Mark Completed</MenuItem>
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
    </div>
  );
}

export default Projects;
