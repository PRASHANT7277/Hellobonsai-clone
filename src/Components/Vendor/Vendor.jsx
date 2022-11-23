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
  Img,
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
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Show,
  Hide,
  SimpleGrid,
} from "@chakra-ui/react";
import axios from "axios";
import { MdOutlineSearch } from "react-icons/md";
import { FaChessQueen, FaPlay } from "react-icons/fa";
import { ImMobile } from "react-icons/im";
import { CgLaptop } from "react-icons/cg";
import Timer from "./Sidebar/Timer";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosAdd } from "react-icons/io";
import { AiOutlineHome, AiFillGift } from "react-icons/ai";
import {
  HiOutlineFolderOpen,
  HiOutlineNewspaper,
  HiOutlineUserGroup,
  HiOutlineClock,
} from "react-icons/hi";
import { TbFileDollar } from "react-icons/tb";
import { BsFileText, BsClock } from "react-icons/bs";
import { BiTask } from "react-icons/bi";
import { FaWpforms } from "react-icons/fa";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { GoCreditCard } from "react-icons/go";
import { TbReceipt2, TbReceiptTax } from "react-icons/tb";
// import styles from "./Sidebar.module.css";
import { NavLink as RouterLink } from "react-router-dom";
const Vendor = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const navigate = useNavigate();
  let [name, setname] = useState("XYZ");
  let token = localStorage.getItem("token");
  let id = token.split(":");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
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
        <Hide below="md">
          <Stack
            w={["25%", "25%", "20%", "15%"]}
            h="100vh"
            borderRight="1px solid #d5d6d6"
          >
            <Sidebar />
          </Stack>
        </Hide>
        <Show below="md">
          <>
            <Button ref={btnRef} onClick={onOpen} bg="none" position="fixed">
              <GiHamburgerMenu />
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
              finalFocusRef={btnRef}
              size="xs"
            >
              <DrawerOverlay />
              <DrawerContent>
                <SimpleGrid
                  w="100%"
                  h="100%"
                  justify="space-between"
                  pl={4}
                  pr={4}
                  pt={1}
                  pb={1}
                >
                  <Flex justify="space-between" align="center">
                    <Img
                      src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg"
                      w="60%"
                    />
                    <Stack
                      fontSize="26px"
                      border="1px solid"
                      color="#00ba8f"
                      borderRadius={3}
                    >
                      <IoIosAdd />
                    </Stack>
                  </Flex>
                  <Stack color="#7c7777" justify="space-between">
                    <SimpleGrid gap={2}>
                      <Link
                        to="/vendor/dashboard"
                        _hover={{ textdecoration: "none" }}
                        as={RouterLink}
                        // isActive={{ fontWeight: "bold" }}
                        _activeLink={{ fontWeight: "bold", color: "#292a2d" }}
                        // activeClassName="active"
                      >
                        <Flex align="center" gap={3} fontSize="14px">
                          <AiOutlineHome fontSize="18px" fontWeight="300" />
                          <Text>Dashboard</Text>
                        </Flex>
                      </Link>
                      <Link
                        to="/vendor/clients"
                        _hover={{ textdecoration: "none" }}
                        as={RouterLink}
                        _activeLink={{ fontWeight: "bold", color: "#292a2d" }}
                      >
                        <Flex align="center" gap={3} fontSize="14px">
                          <Box>
                            <HiOutlineUserGroup
                              fontSize="15px"
                              fontWeight="300"
                            />
                          </Box>
                          <Text>Clients</Text>
                        </Flex>
                      </Link>
                      <Link
                        to="/vendor/projects"
                        _hover={{ textdecoration: "none" }}
                        as={RouterLink}
                        _activeLink={{ fontWeight: "bold", color: "#292a2d" }}
                      >
                        <Flex align="center" gap={3} fontSize="14px">
                          <HiOutlineFolderOpen
                            fontSize="18px"
                            fontWeight="300"
                          />
                          <Text>Projects</Text>
                        </Flex>
                      </Link>
                      <Link
                        to="/vendor/tasks"
                        _hover={{ textdecoration: "none" }}
                        as={RouterLink}
                        _activeLink={{ fontWeight: "bold", color: "#292a2d" }}
                      >
                        <Flex align="center" gap={3} fontSize="14px">
                          <BiTask fontSize="18px" fontWeight="300" />
                          <Text>Tasks</Text>
                        </Flex>
                      </Link>
                    </SimpleGrid>
                    <SimpleGrid gap={2}>
                      <Link
                        to="/vendor"
                        _hover={{ textdecoration: "none" }}
                        as={RouterLink}
                      >
                        <Flex align="center" gap={3} fontSize="14px">
                          <HiOutlineNewspaper
                            fontSize="18px"
                            fontWeight="300"
                          />
                          <Text>Proposals</Text>
                        </Flex>
                      </Link>
                      <Link
                        to="/vendor"
                        _hover={{ textdecoration: "none" }}
                        as={RouterLink}
                      >
                        <Flex align="center" gap={3} fontSize="14px">
                          <BsFileText fontSize="18px" fontWeight="300" />
                          <Text>Contracts</Text>
                        </Flex>
                      </Link>
                      <Link
                        to="/vendor"
                        _hover={{ textdecoration: "none" }}
                        as={RouterLink}
                      >
                        <Flex align="center" gap={3} fontSize="14px">
                          <TbFileDollar fontSize="18px" fontWeight="300" />
                          <Text>Invoices</Text>
                        </Flex>
                      </Link>
                    </SimpleGrid>
                    <SimpleGrid gap={2}>
                      <Link
                        to="/vendor"
                        _hover={{ textdecoration: "none" }}
                        as={RouterLink}
                      >
                        <Flex align="center" gap={3} fontSize="14px">
                          <HiOutlineClock fontSize="18px" fontWeight="300" />
                          <Text>Time Tracking</Text>
                        </Flex>
                      </Link>

                      <Link
                        to="/vendor"
                        _hover={{ textdecoration: "none" }}
                        as={RouterLink}
                      >
                        <Flex align="center" gap={3} fontSize="14px">
                          <FaWpforms fontSize="18px" fontWeight="300" />
                          <Text>Forms</Text>
                        </Flex>
                      </Link>

                      <Link
                        to="/vendor"
                        _hover={{ textdecoration: "none" }}
                        as={RouterLink}
                      >
                        <Flex align="center" gap={3} fontSize="14px">
                          <MdOutlineHomeRepairService
                            fontSize="18px"
                            fontWeight="300"
                          />
                          <Text>Services</Text>
                        </Flex>
                      </Link>
                    </SimpleGrid>
                    <SimpleGrid gap={2}>
                      <Link
                        to="/vendor"
                        _hover={{ textdecoration: "none" }}
                        as={RouterLink}
                      >
                        <Flex align="center" gap={3} fontSize="14px">
                          <GoCreditCard fontSize="18px" fontWeight="300" />
                          <Text>Cash</Text>
                        </Flex>
                      </Link>
                      <Link
                        to="/vendor"
                        _hover={{ textdecoration: "none" }}
                        as={RouterLink}
                      >
                        <Flex align="center" gap={3} fontSize="14px">
                          <TbReceipt2 fontSize="18px" fontWeight="300" />
                          <Text>Accounting</Text>
                        </Flex>
                      </Link>
                      <Link
                        to="/vendor"
                        _hover={{ textdecoration: "none" }}
                        as={RouterLink}
                      >
                        <Flex align="center" gap={3} fontSize="14px">
                          <TbReceiptTax fontSize="18px" fontWeight="300" />
                          <Text>Taxes</Text>
                        </Flex>
                      </Link>
                    </SimpleGrid>
                  </Stack>
                  <Flex
                    border="1px solid #e6f3f0"
                    bg="#f2fbf9"
                    align="center"
                    justify="center"
                    borderRadius="5px"
                    h="75%"
                    mt="10%"
                  >
                    <Flex
                      align="center"
                      fontSize="10px"
                      gap={2}
                      border="1px solid"
                      color="#00ba8f"
                      justify="center"
                      p={2}
                      borderRadius="4px"
                    >
                      <AiFillGift fontSize="12px" />
                      <Text>Get One Month Free</Text>
                    </Flex>
                  </Flex>
                </SimpleGrid>
              </DrawerContent>
            </Drawer>
          </>
        </Show>
        <Stack w={["100%", "100%", "85%", "85%"]} h="100vh" overflow="scroll">
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
