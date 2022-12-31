import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom/dist";
import styles from "./Clients.module.css";
import {
  Table,
  Tr,
  Th,
  Td,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
  Flex,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { Clientportal } from "./Clientportal";
import { Newclient } from "./Newclient";
import { SearchI } from "./SearchI";
import { Filtersp } from "./Filtersp";
import axios from "axios";
import { FiAlertCircle } from "react-icons/fi";

const getClients = (id) => {
  return axios
    .get(`https://backend-hello-bonsai.onrender.com/clients/${id}`)
    .then((res) => res.data);
};
const getUsers = () => {
  return axios
    .get("https://backend-hello-bonsai.onrender.com/users")
    .then((res) => res.data);
};

const Clients = () => {
  let [data, setdata] = useState([]);
  let [userdata, setUserdata] = useState([]);
  let [user, setUser] = useState([]);
  let token = localStorage.getItem("token");
  let navigate = useNavigate();
  const [l, setL] = useState(false);

  const deleteclient = async (id) => {
    return await axios
      .delete(`https://backend-hello-bonsai.onrender.com/clients/${id}`)
      .then((res) => {
        alert("delete successfully");
        navigate(0);
      })
      .catch((e) => {
        alert("something went wrong. please try again.");
      });
  };
  // console.log(token);
  token = token.split(":");
  let id = token[0];
  // console.log(id);
  useEffect(() => {
    setL(true);
    getClients(id).then((res) => {
      // console.log(res);
      setL(false);
      setdata([...res]);
      return res;
    });
    getUsers().then((res) => {
      // console.log(res);
      setUserdata([...res]);
      return res;
    });
  }, [id]);
  useEffect(() => {
    let u = userdata.filter((e) => {
      return e._id === id;
    });
    setUser(u);
  }, [userdata]);
  return (
    <>
      <div className={styles.main}>
        <Box
          w="90%"
          m="auto"
          bg="#f2faff"
          border="1px solid #e2f3ff"
          borderLeft="5px solid #e2f3ff"
          p={4}
          mt={6}
        >
          <Flex gap={2} align="top">
            <FiAlertCircle
              color="#3a88c2"
              fontSize="20px"
              fontWeight="normal"
            />
            <Box>
              <Text fontSize="14px" color="#3a88c2">
                Start 7 Day Free Trial
              </Text>
              <Flex fontSize="12px" gap="2px">
                <Text>You currently don’t have an active subscription. </Text>
                <Text color="#3a88c2" textDecor={"underline"}>
                  Start Your Free Trial now!
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Box>

        <div className={styles.optionbar}>
          <div style={{ display: "flex" }}>
            <SearchI />
            <Filtersp />
          </div>
          <div className={styles.optionbar1}>
            <div
              style={{
                color: "#00a881",
                marginTop: "5px",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              import CSV
            </div>
            <Clientportal />
            <Newclient user={user} />
          </div>
        </div>
        <div style={{ width: "90%", margin: "auto", marginTop: "20px" }}>
          {l ? (
            <Text
              w="20%"
              m="auto"
              mt={20}
              display="flex"
              gap="5px"
              alignItems={"center"}
            >
              Loading
              <Spinner color="#00a881" size="md" thickness="4px" />
            </Text>
          ) : data.length == 0 ? (
            <Text w="200px" m="auto" mt={10}>
              No Clients Added Yet!
            </Text>
          ) : (
            <Table>
              <Tr>
                <Th>CLIENT</Th>
                <Th>CONTACT NAME</Th>
                <Th>CONTACT EMAIL</Th>
                <Th>TAGS</Th>
                <Th> </Th>
              </Tr>
              {data.map((c) => {
                let link = `/vendor/clients/${c._id}`;
                return (
                  <Tr
                    key={c._id}
                    style={{
                      fontSize: "14px",
                      border: "1px solid white",
                      backgroundColor: "white",
                      padding: "10px",
                    }}
                  >
                    <Link to={link}>
                      <Td>
                        <img
                          src="/images/user.png"
                          alt="c"
                          width="40px"
                          height="40px"
                          style={{ border: "1px solid gray" }}
                        />
                        {c.name}
                      </Td>
                    </Link>
                    <Td>{c.name}</Td>
                    <Td>{c.email}</Td>
                    <Td> - </Td>
                    <Td style={{ fontSize: "20px" }}>
                      <Menu>
                        {({ isOpen }) => (
                          <>
                            <MenuButton
                              isActive={isOpen}
                              as={Button}
                              style={{ backgroundColor: "transparent" }}
                            >
                              ...
                            </MenuButton>
                            <MenuList>
                              <MenuItem onClick={() => deleteclient(c._id)}>
                                <Text fontSize={"sm"} as="b">
                                  Delete Client
                                </Text>
                              </MenuItem>
                            </MenuList>
                          </>
                        )}
                      </Menu>
                    </Td>
                  </Tr>
                );
              })}
            </Table>
          )}
        </div>
      </div>
    </>
  );
};

export default Clients;
