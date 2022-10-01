import { Box, Button, Flex, Input, Select, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import countryData from "../db.json";

function Settings({ title }) {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    setCountry(countryData.Country);
  }, []);
  return (
    <Flex gap={[5,5,10]}>
    <Box w={["60%"]} border="1px solid #bfc0c4" p={[10]} borderRadius="10px">
      <Text fontWeight={500} fontSize={["sm", "md", "md"]} color="grey">
        PROJECT TITLE
      </Text>
      <Input placeholder={title} mt={[1, 1, 2]} w={500} />

      <Text
        fontWeight={500}
        fontSize={["sm", "md", "md"]}
        mt={[1, 1, 2]}
        color="grey"
      >
        CURRENCY
      </Text>
      <Select w="20%" mt={[1, 1, 2]}>
        {country?.map((el) => (
          <option key={el.name} value={el.name}>
            {el.name}
          </option>
        ))}
      </Select>

      <Flex gap={5}>
        <Box>
          <Text
            fontWeight={500}
            fontSize={["sm", "md", "md"]}
            mt={[1, 1, 2]}
            color="grey"
          >
            START DATE
          </Text>
          <Input type="date" mt={[1, 1, 2]} w={200} />
        </Box>
        <Box>
          <Text
            fontWeight={500}
            fontSize={["sm", "md", "md"]}
            mt={[1, 1, 2]}
            color="grey"
          >
            END DATE
          </Text>
          <Input type="date" mt={[1, 1, 2]} w={200} />
        </Box>
      </Flex>

      <Button
        bg="#00b289"
        color="white"
        mt={[2, 3, 5]}
        _hover={{ backgroundColor: "#00b298" }}
      >
        Save Changes
      </Button>
    </Box>
    <Box border="1px solid #bfc0c4" p={[10]} borderRadius="10px">
          <Text fontWeight={500}>Reminder Settings</Text>
          <Flex gap={2} mt={10} alignItems="center">
             <input type="checkbox" />
             <Box>
              <Text as="b">Send my clients auto-reminders.</Text>
              <Text fontSize="xs" color="grey">For outstanding invoices, expiring proposals and contract awaiting signature.</Text>
             </Box>
          </Flex>
    </Box>
    </Flex>
  );
}

export default Settings;
