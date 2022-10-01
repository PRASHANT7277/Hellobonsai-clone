import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Cards2 = () => {
  return (
    <Box>
      {/* box 1 */}

      <Box
        boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
        p="40px 40px"
        display="flex"
        mb="1%"
        flexDirection={{ lg: "row-reverse" , sm: "column" }}
        justifyContent={{ lg: "space-between" }}
      >
        <Box>
          <Text
            fontWeight={{ sm: "400", lg: "700" }}
            fontSize={{ lg: "32px", sm: "40px" }}
            lineHeight={{ lg: "45px", sm: "52px" }}
          >
            Free
          </Text>
        </Box>
        <Box>
          <Text
            fontWeight="600"
            fontSize={{ lg: "22px", sm: "16px" }}
            lineHeight={{ lg: "31px", sm: "22px" }}
          >
            Collaborators
          </Text>
          <Text fontWeight="300" fontSize="16px" lineHeight="20px">
            Invite other users to specific projects for limited access and
            functionality.
          </Text>
        </Box>
      </Box>

      {/* box 2 */}

      <Box
        boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
        p="40px 40px"
        display="flex"
        mb="1%"
        flexDirection={{ lg: "row-reverse" , sm: "column" }}
        justifyContent={{ lg: "space-between" }}
      >
        <Box>
          <Text
            fontWeight={{ sm: "400", lg: "700" }}
            fontSize={{ lg: "32px", sm: "40px" }}
            lineHeight={{ lg: "45px", sm: "52px" }}
          >
            $9 <span style={{ fontSize: "14px" }}>/MONTH</span>
          </Text>
        </Box>
        <Box>
          <Text
            fontWeight="600"
            fontSize={{ lg: "22px", sm: "16px" }}
            lineHeight={{ lg: "31px", sm: "22px" }}
          >
            Partners
          </Text>
          <Text fontWeight="300" fontSize="16px" lineHeight="20px">
            Invite other users for full account access and company management.
          </Text>
        </Box>
      </Box>

      {/* box 3 */}

      <Box
        boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
        p="40px 40px"
        display="flex"
        mb="1%"
        flexDirection={{ lg: "row-reverse" , sm: "column" }}
        justifyContent={{ lg: "space-between" }}
      >
        <Box>
          <Text
            fontWeight={{ sm: "400", lg: "700" }}
            fontSize={{ lg: "32px", sm: "40px" }}
            lineHeight={{ lg: "45px", sm: "52px" }}
          >
            $10 <span style={{ fontSize: "14px" }}>/MONTH</span>
          </Text>
        </Box>
        <Box>
          <Text
            fontWeight="600"
            fontSize={{ lg: "22px", sm: "16px" }}
            lineHeight={{ lg: "31px", sm: "22px" }}
          >
            Bonsai Tax
          </Text>
          <Text fontWeight="300" fontSize="16px" lineHeight="20px">
            Track expenses, identify write-offs, and estimate quarterly taxes
            easily.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Cards2;
