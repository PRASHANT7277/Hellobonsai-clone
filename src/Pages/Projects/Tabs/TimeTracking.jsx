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

function TimeTracking() {
  return (
    <Box>
      <Box border="1px solid #bfc0c4" w={["75%"]} p={[5]} borderRadius="10px">
        <Flex justifyContent="space-between" mb={2}>
          <Text display="flex" alignItems="center" gap={1} fontWeight={500}>
            Unbilled Hours
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
          <Button fontSize="xs">ADD HOURS</Button>
        </Flex>
        <hr />
        <Text align="center" mt={5} color="grey">
          There are no unbilled hours for this project yet.
        </Text>
      </Box>

      <Box border="1px solid #bfc0c4" w={["75%"]} p={[5]} borderRadius="10px" mt={10}>
          <Text display="flex" alignItems="center" gap={1} fontWeight={500}>
            Timesheets
          </Text>
        <hr />
        <Text align="center" mt={5} color="grey">
          No timesheets have been invoiced yet.
        </Text>
      </Box>
    </Box>
  );
}

export default TimeTracking;
