import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

function Invoices() {
  return (
    <Box>
      <Box border="1px solid #bfc0c4" w={["75%"]} p={[5]} borderRadius="10px">
        <Flex justifyContent="space-between" mb={2}>
          <Text display="flex" alignItems="center" gap={1} fontWeight={500}>
            Invoices
          </Text>
          <Button variant="outline" borderColor="#00b289">
            <Text fontSize="2xl" color="#00b289">
              +
            </Text>
          </Button>
        </Flex>
        <hr />
        <Text align="center" mt={5} color="grey">
          No invoices for this project yet.
        </Text>
      </Box>
    </Box>
  );
}

export default Invoices;
