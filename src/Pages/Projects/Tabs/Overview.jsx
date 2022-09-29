import {
  Box,
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaInfoCircle } from "react-icons/fa";

function Overview() {
  return (
    <Box>
      <Box border="1px solid #bfc0c4" w={["55%"]} p={[5]} borderRadius="10px">
        <Flex justifyContent="space-between" mb={2}>
          <Text display="flex" alignItems="center" gap={1} fontWeight={500}>
            Active Tasks
            <Popover trigger="hover" w={100}>
              <PopoverTrigger>
                <Button bg="white" size="xs">
                  <FaInfoCircle color="grey" />
                </Button>
              </PopoverTrigger>
              <PopoverContent w={150} opacity={1}>
                <PopoverArrow bgColor="black" />

                <PopoverBody
                  fontSize={"xs"}
                  bgColor="black"
                  color="white"
                  textAlign="center"
                >
                  Manage project tasks. Only visible to your company and project
                  collaborators.
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Text>
          <Button variant="outline" borderColor="#00b289">
            <Text fontSize="2xl" color="#00b289">
              +
            </Text>
          </Button>
        </Flex>
        <hr />
        <Text align="center" mt={5} color="grey">
          No tasks created yet.
          <br />
          Create a new task or create tasks from a template.
        </Text>
      </Box>

      <Box w={["40%"]} border="1px solid #bfc0c4" p={[5]}>

      </Box>
    </Box>
  );
}

export default Overview;
