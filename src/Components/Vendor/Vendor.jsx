import React, { useState, useEffect } from "react";
import VendorRoutes from "./Routes/VendorRoutes";
import Sidebar from "./Sidebar/Sidebar";
import {
  Stack,
  Box,
  Flex,
  Button,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  ListItem,
  Link,
  Image,
  Divider,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import axios from "axios";
import { MdOutlineSearch } from "react-icons/md";
import { FaChessQueen, FaPlay } from "react-icons/fa";
import { ImMobile } from "react-icons/im";
import { CgLaptop } from "react-icons/cg";
import Timer from "./Sidebar/Timer";
import { useNavigate } from "react-router-dom";
const Vendor = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const navigate = useNavigate();
  let [name, setname] = useState("XYZ");
  let token = localStorage.getItem("token");
  let id = token.split(":");

  const userDetail = async () => {
    axios
      .get(`https://hellobonsaibackend.herokuapp.com/users/${id[0]}`)
      .then((res) => {
        setname(res.data.user.name);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    userDetail();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Stack w="100%">
      {/* ........Top Bar........ */}

      <Flex>
        <Stack
          w={["25%", "25%", "20%", "15%"]}
          h="100vh"
          borderRight="1px solid #d5d6d6"
        >
          <Sidebar />
        </Stack>
        <Stack w="85%" h="100vh" overflow="scroll">
          <Flex
            p={4}
            w="100%"
            borderBottom="1px solid #d5d6d6"
            justify="space-between"
            align="center"
          >
            <Box>
              <InputGroup size="sm" w="115%">
                <InputLeftElement
                  pointerEvents="none"
                  fontWeight="bold"
                  children={<MdOutlineSearch color="#7c7777" fontSize="20px" />}
                />
                <Input
                  type="text"
                  fontSize="14px"
                  placeholder="Search"
                  border="none"
                  _placeholder={{
                    opacity: 1,
                    color: "#d5d6d6",
                  }}
                />
              </InputGroup>
            </Box>
            <Flex align="center" gap={5}>
              <Button
                fontWeight="normal"
                backgroundImage="linear-gradient(to bottom,#00b289 0%,#00b289 100%)"
                borderRadius="3px"
                _hover={{
                  backgroundImage:
                    "linear-gradient(to bottom,#00ba8f 0%,#00ba8f 100%)",
                }}
                fontSize="11px"
                size="sm"
              >
                <Flex gap={2} align="center">
                  <FaChessQueen color="#a6e5d7" />
                  <Text color="white" fontWeight="bold">
                    Start Free Trial
                  </Text>
                </Flex>
              </Button>

              <Timer />
              <Popover>
                {" "}
                <PopoverTrigger>
                  <Button
                    bg="#502ca7"
                    _hover={{ bg: "#502ca7" }}
                    color="white"
                    size="sm"
                    fontSize="18px"
                    fontWeight="500"
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    {name[0]}
                  </Button>
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
                        Get Bonsai Free
                      </Text>
                      <Divider />
                      <Text _hover={{ color: "black", bg: "#ececec" }} p={1}>
                        Help Center
                      </Text>
                      <Text _hover={{ color: "black", bg: "#ececec" }} p={1}>
                        What's New
                      </Text>
                      <Divider />
                      <Text _hover={{ color: "black", bg: "#ececec" }} p={1}>
                        My Subscription
                      </Text>
                      <Text _hover={{ color: "black", bg: "#ececec" }} p={1}>
                        Apps & Integration
                      </Text>
                      <Text _hover={{ color: "black", bg: "#ececec" }} p={1}>
                        Payments
                      </Text>
                      <Text _hover={{ color: "black", bg: "#ececec" }} p={1}>
                        Settings
                      </Text>
                      <Text
                        _hover={{ color: "black", bg: "#ececec" }}
                        p={1}
                        onClick={handleLogout}
                      >
                        Logout
                      </Text>
                    </Stack>
                  </PopoverBody>
                </PopoverContent>
                {/* </Portal> */}
              </Popover>
            </Flex>
          </Flex>

          {/*................................... Routes  for different Componants ..................... */}
          <VendorRoutes />
          {/*...................................Footer..................... */}
          <Stack color="#aaa" mt={5}>
            <Flex
              fontSize="11px"
              fontWeight="600"
              align="center"
              justify="center"
              gap={3}
            >
              <Link>Feature Requests </Link>
              <Text>●</Text>
              <Link>Help Center </Link>
              <Text>●</Text>
              <Link>Blog & Resources </Link>

              <Text>●</Text>
              <Link>Pricing </Link>
              <Text>●</Text>
              <Link>Privacy Policy</Link>
            </Flex>
            <Flex
              fontSize="13px"
              fontWeight="600"
              align="center"
              justify="center"
              gap={3}
            >
              <Link fontWeight="normal">Bonsai Apps: </Link>
              <Text>
                <ImMobile />
              </Text>
              <Link>IPhone</Link>
              <Text>
                <CgLaptop />
              </Text>
              <Link>MacOS</Link>

              <Text>
                <ImMobile />
              </Text>
              <Link>Android </Link>
              <Image
                src="https://cdn.iconscout.com/icon/free/png-64/chrome-2489187-2082906.png"
                alt="icon"
                w="11px"
              />
              <Link>Chrome</Link>
            </Flex>

            <Box w="100%">
              <Text
                fontWeight="normal"
                fontSize="12px"
                textAlign="center"
                w="80%"
                m="auto"
                color="#ccd0d2"
              >
                ©2022 Bonsai Technologies Inc — Payments, banking, and issuing
                services are provided by Stripe Payments Company, Evolve Bank &
                Trust (Member FDIC), and Celtic Bank (Member FDIC),
                respectively. Bonsai is not a law firm, and does not provide
                legal services, advice, or representation. Terms Credits
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Vendor;
