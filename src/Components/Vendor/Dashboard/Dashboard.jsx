import React from "react";
import {
  Box,
  Stack,
  Flex,
  Text,
  Link,
  Image,
  Button,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";

import { FiAlertCircle } from "react-icons/fi";
import { GiPauseButton } from "react-icons/gi";
import "./Dashboard.module.css";
const Dashboard = () => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  let day = weekday[d.getDay()];
  let monthname = month[d.getMonth()];

  let date = d.getDate();
  let datetop =
    date % 10 === 1
      ? "st"
      : date % 10 === 2
      ? "nd"
      : date % 10 === 3
      ? "rd"
      : "th";

  let hrs = d.getHours();

  let greet =
    hrs < 12
      ? "Good morning"
      : hrs > 12 && hrs < 17
      ? "Good afternoon"
      : "Good Evening";
  let name = "abc";
  return (
    <div>
      <Stack p="5%" pt="2%" spacing={8}>
        <Box
          bg="#f2faff"
          border="1px solid #e2f3ff"
          borderLeft="5px solid #e2f3ff"
          p={4}
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
              <Flex fontSize="12px">
                <Text>You currently don’t have an active subscription.</Text>
                <Link>Start Your Free Trial now!</Link>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex
            justify="space-between"
            align="center"
            borderBottom="1px solid #d5d6d6"
          >
            <Flex gap={4} align="center" pb={4}>
              <Image
                src="https://app.hellobonsai.com/packs/static/good-morning-66f0f5841376d77563ac.svg"
                alt="day"
                w="70px"
              />
              <Box>
                <Text fontSize="15px" color="#6d6d6d">
                  {`${day}, ${monthname} ${date}${datetop}`}
                </Text>
                <Text color="#4d4d4d" fontSize="3xl" fontWeight="450" mt="1px">
                  {`${greet}, ${name}!`}
                </Text>
              </Box>
            </Flex>
            <Flex align="center" gap={5}>
              <Text fontSize="14px" color="#6d6d6d">
                Let's get you set up with Bonsai.
              </Text>
              <Button
                border="1px solid #50b289"
                color="#50b289"
                bg="none"
                size="xs"
                p={4}
                borderRadius="3px"
                _hover={{ bg: "none" }}
              >
                {`Get Started >`}
              </Button>
            </Flex>
          </Flex>
        </Box>
        <Flex border="1px solid #d5d6d6" borderRadius="5px">
          <Box w="35%" borderRight="1px solid #d5d6d6" p={7} pb={10}>
            <Flex>
              <Box>
                <li>1</li>
                <li></li>
                <li>2</li>
                <li></li>
                <li>3</li>
                <li></li>
                <li>4</li>
                <li></li>
                <li>5</li>
              </Box>
              <SimpleGrid
                fontSize="14px"
                color="#6a5a57"
                justify="center"
                align="center"
                fontWeight="550"
              >
                <Text m="auto" ml={3}>
                  Create your first Project
                </Text>
                <Text></Text>
                <Text m="auto" ml={3}>
                  Add company details
                </Text>
                <Text></Text>
                <Text m="auto" ml={3}>
                  Setup your branding
                </Text>
                <Text></Text>
                <Text m="auto" ml={3}>
                  Connect your calendar
                </Text>
                <Text></Text>
                <Text m="auto" ml={3}>
                  Connect a bank account
                </Text>
              </SimpleGrid>
            </Flex>
          </Box>{" "}
          <Flex
            backgroundImage="https://app.hellobonsai.com/assets/dashboard/step2-bg-d13aa936e296e852246ccc8644f2161e1e177ccae201a48f2974911cbd444e19.png"
            backgroundSize="100%"
            backgroundRepeat="no-repeat"
          >
            <Box p={10}>
              <Image
                src="https://app.hellobonsai.com/assets/dashboard/details-ddd6affca47f2f9bf95d730b041f7d8ba662d38d7745e87946e61872e84e4d25.svg"
                alt="pencil"
              />
              <Text fontSize="20px" fontWeight="300" mt={5}>
                Add company details
              </Text>
              <Text fontSize="15px" fontWeight="300" mt={3} color="#6d6d6d">
                Add your basic info, logo, and branding. They'll be
                automatically added to your future proposals and invoices.
              </Text>
              <Flex gap={3} mt={8}>
                <Button
                  h="32px"
                  borderRadius="3px"
                  w="27%"
                  bg="#50b289"
                  _hover={{ bg: "#50b289" }}
                  fontSize="12px"
                  border="1px solid #50b289"
                  color="white"
                >
                  Add Details
                </Button>
                <Button
                  h="32px"
                  borderRadius="3px"
                  w="27%"
                  bg="none"
                  _hover={{ bg: "none" }}
                  fontSize="12px"
                  border="1px solid #50b289"
                  color="#50b289"
                >{`Next Step >`}</Button>
              </Flex>
            </Box>
            <Text
              position="sticky"
              mt={2}
              mr={3}
              fontSize="15px"
              color="#aaa"
              _hover={{ color: "#50b289", cursor: "pointer" }}
            >
              Hide
            </Text>
          </Flex>
          {/*  */}
        </Flex>
      </Stack>
    </div>
  );
};

export default Dashboard;
