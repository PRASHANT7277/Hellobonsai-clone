import {
  Box,
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import React from "react";
import { FaCircle, FaInfoCircle } from "react-icons/fa";

function Overview({ title }) {
  return (
    <SimpleGrid columns={[1, 1, 2, 2]} spacing={[5, 5, 10, 10]}>
      <Box border="1px solid #bfc0c4" p={[5]} borderRadius="10px">
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
      {/* 2 */}
      <Box border="1px solid #bfc0c4" p={[5]} borderRadius="10px">
        <Flex alignItems="center" gap={1}>
          <Text
            mb={5}
            display="flex"
            alignItems="center"
            gap={1}
            fontWeight={500}
          >
            Project Collaborators
          </Text>
          <Box
            borderRadius="10px"
            bg="#e8d78c"
            fontSize="2xs"
            p="4px 10px"
            mt={-4}
            color="white"
          >
            NEW
          </Box>
        </Flex>

        <hr />
        <Box mt={[10, 20, 30]} textAlign="center">
          <Text align="center" color="grey">
            Add collaborators for free. They only see tasks, time tracking and
            chat on specific projects. Learn more
          </Text>
          <Button
            w={[100, 200, 300]}
            variant="outline"
            backgroundColor="#00b289"
            mt={3}
          >
            <Text fontSize="xs" color="black">
              Add Collaborator
            </Text>
          </Button>
        </Box>
      </Box>
      {/* 3 */}
      <Box border="1px solid #bfc0c4" p={[5]} borderRadius="10px">
        <Flex justifyContent="space-between" mb={2}>
          <Text display="flex" alignItems="center" gap={1} fontWeight={500}>
            Recent Activity
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
                  View project activity and client emails.
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Text>
          <Button>
            <Text fontSize="2xs">Send Email and Attachments</Text>
          </Button>
        </Flex>
        <hr />
        <Text mt={5} display="flex" alignItems="center" gap={2}>
          <FaCircle size="10px" />
          User have created project{" "}
          <Text as="b" _hover={{ textDecoration: "underline" }}>
            {title}
          </Text>
        </Text>
      </Box>

      {/* 4 */}
      <Box border="1px solid #bfc0c4" p={[5]} borderRadius="10px">
        <Flex justifyContent="space-between" mb={2}>
          <Text display="flex" alignItems="center" gap={1} fontWeight={500}>
            Your Notes
          </Text>
          <Button>
            <Text fontSize="xs">
              Edit
            </Text>
          </Button>
        </Flex>
        <hr />
        <Text align="center" mt={5} color="grey">
          Add notes only visible to your company.
        </Text>
      </Box>
    </SimpleGrid>
  );
}

export default Overview;
