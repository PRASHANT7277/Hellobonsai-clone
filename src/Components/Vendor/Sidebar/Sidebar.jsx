import React from "react";
import {
  Box,
  Button,
  Flex,
  Img,
  Stack,
  Link,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { IoIosAdd } from "react-icons/io";
import { AiOutlineHome, AiFillGift } from "react-icons/ai";
import { GrGroup } from "react-icons/gr";

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
import styles from "./Sidebar.module.css";
import { NavLink as RouterLink } from "react-router-dom";
const Sidebar = () => {
  return (
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
                <HiOutlineUserGroup fontSize="15px" fontWeight="300" />
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
              <HiOutlineFolderOpen fontSize="18px" fontWeight="300" />
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
              <HiOutlineNewspaper fontSize="18px" fontWeight="300" />
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
              <MdOutlineHomeRepairService fontSize="18px" fontWeight="300" />
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
  );
};

export default Sidebar;
