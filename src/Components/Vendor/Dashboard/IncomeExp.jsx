import React from "react";
import { Stack, Box, Text, Divider } from "@chakra-ui/react";

const IncomeExp = () => {
  return (
    <Stack border="1px solid #d5d6d6" borderRadius="5px" fontSize="14px">
      <Text color="#292a2d" p={4} fontWeight="bold">
        Income & Expenses
      </Text>
      <Divider />
      <Stack textAlign="center" h="150px">
        <Text m="auto" color="#aaa">
          No Currunt Activity in Time frame
        </Text>
      </Stack>
    </Stack>
  );
};

export default IncomeExp;
