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
  ModalFooter,
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

function Projects() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [country, setCountry] = useState([]);
  const [project, setProject] = useState(countryData.Projects);

  useEffect(()=>{
    setCountry(countryData.Country)
    setProject(countryData.Projects)
  },[])

  return (
    <div style={{ marginTop: "30px" }}>
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
                <Text fontWeight={500} color="grey">
                  CLIENT
                </Text>

                <Select mt={3} color="grey" placeholder="Select option">
                  <option value="Sample Client">Sample Client</option>
                </Select>
                <br />
                <Text fontWeight={500} color="grey">
                  PROJECT NAME
                </Text>

                <Input mt={3} placeholder="Homepage Redesign" />
                <br />
                <br />
                <Text fontWeight={500} color="grey">
                  CURRENCY
                </Text>

                <Select mt={3} w="40%">
                  {country?.map((el) => (
                    <option key={el.name} value={el.name}>
                      {el.name}
                    </option>
                  ))}
                </Select>
              </ModalBody>
              <hr></hr>
              <ModalFooter>
                <Button
                  w={"95%"}
                  m="auto"
                  variant="blackAlpha"
                  bg={"#00b289"}
                  color="white"
                  onClick={onClose}
                  _hover={{ backgroundColor: "#00CF9F" }}
                >
                  Create New Project
                </Button>
              </ModalFooter>
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

            <Tbody>
              {project?.map((el) => (
                <Tr key={el.id}>
                  <Link to={`/vendor/projects/${el.id}`}>
                    <Td
                      fontWeight={500}
                      display="flex"
                      alignItems="center"
                      gap={2}
                    >
                      <FaFolder />

                      <Text>{el.title}</Text>
                    </Td>
                  </Link>
                  <Td color="grey">{el.client}</Td>
                  <Td>{el.start}</Td>
                  <Td color="grey">₹0.00</Td>
                  <Td color="grey">₹0.00</Td>
                  <Td>
                    <Menu>
                      <MenuButton as={Button} bg="white">
                        <FaEllipsisH color="grey" />
                      </MenuButton>
                      <MenuList>
                        <Link to={`/vendor/projects/${el.id}`}>
                          <MenuItem>View Project</MenuItem>
                        </Link>
                        <MenuItem>Mark Completed</MenuItem>
                        <MenuItem>Delete Project</MenuItem>
                      </MenuList>
                    </Menu>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}

export default Projects;
