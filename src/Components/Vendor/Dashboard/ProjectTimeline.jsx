import React from "react";
import { Stack, Box, Text, Divider, Flex } from "@chakra-ui/react";
import Clients from "../../../Pages/Clients/Clients";
const ProjectTimeline = ({ projects }) => {
  return (
    <Stack border="1px solid #d5d6d6" borderRadius="5px" fontSize="14px">
      <Text color="#292a2d" p={4} fontWeight="bold">
        Project Timeline
      </Text>
      <Divider />
      <Stack
        backgroundImage="https://app.hellobonsai.com/assets/welcome_states/timeline-empty-9fe40097073a8aaf03846cd62e6c4004f91256a0367d3c37a47bff7e6761af27.png"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        textAlign="center"
        h="150px"
        p={5}
      >
        {projects.length === 0 && (
          <Text m="auto" color="#aaa">
            No Currunt Activity in Time frame
          </Text>
        )}

        {projects.length > 0 && (
          <>
            <Flex align="center" justify="space-between" fontWeight="bold">
              <Text>Name</Text>
              <Text>From</Text>
            </Flex>
            {projects.map((e) => {
              return (
                <Flex align="center" justify="space-between">
                  <Text>{e.name}</Text>
                  <Text>{e.startDate}</Text>
                </Flex>
              );
            })}
          </>
        )}
      </Stack>
    </Stack>
  );
};

export default ProjectTimeline;
