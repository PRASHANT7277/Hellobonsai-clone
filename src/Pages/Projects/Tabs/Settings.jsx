import { Box, Button, Flex, Input, Select, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import countryData from "../db.json";

function Settings({ id, title }) {
  const [country, setCountry] = useState([]);
  const [creds, setCreds] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "startDate") {
      let day = e.target.value;
      let [year, month, date] = day.trim().split("-");
      if (month === 1) {
        month = "Jan";
      } else if (month === 2) {
        month = "Feb";
      } else if (month === 3) {
        month = "Mar";
      } else if (month === 4) {
        month = "Apr";
      } else if (month === 5) {
        month = "May";
      } else if (month === 6) {
        month = "Jun";
      } else if (month === 7) {
        month = "Jul";
      } else if (month === 8) {
        month = "Aug";
      } else if (month === 9) {
        month = "Sept";
      } else if (month === 10) {
        month = "Oct";
      } else if (month === 11) {
        month = "Nov";
      } else {
        month = "Dec";
      }
      let data = `${date}-${month}-${year}`;
      console.log(data);
      setCreds({
        ...creds,
        [name]: data,
      });
    } else {
      setCreds({
        ...creds,
        [name]: value,
      });
    }
  }
  console.log(creds);
  async function handleClick() {
    await axios
      .patch(`https://backend-hello-bonsai.onrender.com/projects/${id}`, creds)
      .then(alert("changes saved!"));
    window.location.reload();
  }
  useEffect(() => {
    setCountry(countryData.Country);
  }, []);
  return (
    <Flex gap={[5, 5, 10]}>
      <Box w={["60%"]} border="1px solid #bfc0c4" p={[10]} borderRadius="10px">
        <Text fontWeight={500} fontSize={["sm", "md", "md"]} color="grey">
          PROJECT TITLE
        </Text>
        <Input
          onChange={handleChange}
          name="name"
          placeholder={title}
          mt={[1, 1, 2]}
          w={500}
        />

        <Text
          fontWeight={500}
          fontSize={["sm", "md", "md"]}
          mt={[1, 1, 2]}
          color="grey"
        >
          CURRENCY
        </Text>
        <Select w="20%" mt={[1, 1, 2]} onChange={handleChange} name="currency">
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
            <Input
              type="date"
              mt={[1, 1, 2]}
              w={200}
              onChange={handleChange}
              name="startDate"
            />
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
            <Input
              type="date"
              mt={[1, 1, 2]}
              w={200}
              onChange={handleChange}
              name="endDate"
            />
          </Box>
        </Flex>

        <Button
          bg="#00b289"
          color="white"
          mt={[2, 3, 5]}
          _hover={{ backgroundColor: "#00b298" }}
          onClick={handleClick}
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
            <Text fontSize="xs" color="grey">
              For outstanding invoices, expiring proposals and contract awaiting
              signature.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Settings;
