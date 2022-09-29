import React from "react";
import { Box, Stack, Flex, Text, Link } from "@chakra-ui/react";

import { FiAlertCircle } from "react-icons/fi";
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
  let mname = month[d.getMonth()];

  let date = d.getDate();

  console.log(day, mname, date);

  return (
    <div>
      <Stack p="4%" pt="2%">
        <Box
          bg="#f2faff"
          border="1px solid #e2f3ff"
          borderLeft="5px solid #e2f3ff"
          p={4}
        >
          <Flex gap={2} align="top">
            <FiAlertCircle color="#3a88c2" />
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
      </Stack>
    </div>
  );
};

export default Dashboard;
