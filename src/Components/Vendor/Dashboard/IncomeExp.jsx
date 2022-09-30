import React from "react";
import {
  Stack,
  Box,
  Text,
  Divider,
  Flex,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";

const IncomeExp = () => {
  return (
    <Stack border="1px solid #d5d6d6" borderRadius="5px" fontSize="14px">
      <Flex justify="space-between" align="center">
        <Text color="#292a2d" p={4} fontWeight="bold">
          Income & Expenses
        </Text>
        <Flex w="50%">
          <Select fontSize="14px" w="60%" border="none">
            <option>INR</option>
          </Select>
          <Select fontSize="14px" border="none">
            {" "}
            <option>Last 6 Months</option>
          </Select>
        </Flex>
      </Flex>
      <Divider />
      <Stack textAlign="center">
        <SimpleGrid columns={7} rows={2} justify="space-between" color="#aaa">
          <Box
            h="90px"
            borderBottom="1px solid #ececec"
            borderRight="1px solid #ececec"
          >
            MAR
          </Box>
          <Box
            h="90px"
            borderRight="1px solid #ececec"
            borderBottom="1px solid #ececec"
          >
            APR
          </Box>
          <Box
            h="90px"
            borderRight="1px solid #ececec"
            borderBottom="1px solid #ececec"
          >
            MAY
          </Box>
          <Box
            h="90px"
            borderRight="1px solid #ececec"
            borderBottom="1px solid #ececec"
          >
            JUN
          </Box>
          <Box
            h="90px"
            borderRight="1px solid #ececec"
            borderBottom="1px solid #ececec"
          >
            JUL
          </Box>
          <Box
            h="90px"
            borderRight="1px solid #ececec"
            borderBottom="1px solid #ececec"
          >
            AUG
          </Box>
          <Box h="90px" borderBottom="1px solid #ececec">
            SEP
          </Box>
          <Box
            h="90px"
            borderRight="1px solid #ececec"
            borderBottom="1px solid #ececec"
          ></Box>
          <Box
            h="90px"
            borderRight="1px solid #ececec"
            borderBottom="1px solid #ececec"
          ></Box>
          <Box
            h="90px"
            borderRight="1px solid #ececec"
            borderBottom="1px solid #ececec"
          ></Box>
          <Box
            h="90px"
            borderRight="1px solid #ececec"
            borderBottom="1px solid #ececec"
          ></Box>
          <Box
            h="90px"
            borderRight="1px solid #ececec"
            borderBottom="1px solid #ececec"
          ></Box>
          <Box
            h="90px"
            borderRight="1px solid #ececec"
            borderBottom="1px solid #ececec"
          ></Box>
          <Box h="90px" borderBottom="1px solid #ececec"></Box>
        </SimpleGrid>
        <Flex justify="space-between" align="center" p={3} color="#aaa">
          <Box h="90px">
            <Text>Outstanding</Text>
            <Text fontSize="18px">₹0.00</Text>
          </Box>
          <Box h="90px">
            <Text>Overdue</Text>
            <Text fontSize="18px">₹0.00</Text>
          </Box>
          <Box h="90px">
            <Text>Paid & Pending</Text>
            <Text fontSize="18px">₹0.00</Text>
          </Box>
          <Box h="90px">
            <Text>Other Income</Text>
            <Text fontSize="18px">₹0.00</Text>
          </Box>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default IncomeExp;
