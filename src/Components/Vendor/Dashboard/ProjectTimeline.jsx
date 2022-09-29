import React from "react";
import { Stack, Box, Text, Divider } from "@chakra-ui/react";
const ProjectTimeline = () => {
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
      >
        <Text m="auto" color="#aaa">
          No Currunt Activity in Time frame
        </Text>
      </Stack>
    </Stack>
  );
};

export default ProjectTimeline;
