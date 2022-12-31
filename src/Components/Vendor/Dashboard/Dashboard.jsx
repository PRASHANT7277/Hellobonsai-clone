import React, { useState, useEffect } from "react";
import {
  Box,
  Stack,
  Flex,
  Text,
  Link,
  Image,
  Button,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";
import axios from "axios";
import { FiAlertCircle } from "react-icons/fi";
import { GiPauseButton } from "react-icons/gi";
import "./Dashboard.module.css";
import ProjectTimeline from "./ProjectTimeline";
import IncomeExp from "./IncomeExp";
import Tasks from "./Task";
import { getTasksdata } from "../../Redux/TaskReducer.jsx/Task.action";
const Dashboard = () => {
  let [name, setname] = useState("XYZ");
  const [showdetail, setshowdetail] = useState(true);
  const [projects, setproject] = useState([]);
  const [tasks, settasks] = useState([]);
  let token = localStorage.getItem("token");
  let id = token.split(":");

  const userDetail = async () => {
    axios
      .get(`https://backend-hello-bonsai.onrender.com/users/${id[0]}`)
      .then((res) => {
        setname(res.data.user.name);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    userDetail();
    getTasksdata({ clientId: id[0] }).then((res) => {
      let data = res.data;

      data = data.filter((e) => e.status === "Active");

      settasks(data);
    });
    getProjects();
  }, []);

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  let day = weekday[d.getDay()];
  let monthname = month[d.getMonth()];

  let date = d.getDate();
  let datetop =
    date % 10 === 1
      ? "st"
      : date % 10 === 2
      ? "nd"
      : date % 10 === 3
      ? "rd"
      : "th";

  let hrs = d.getHours();

  let greet =
    hrs < 12
      ? "Good morning"
      : hrs >= 12 && hrs < 17
      ? "Good afternoon"
      : "Good evening";

  async function getProjects() {
    await axios
      .get(`https://backend-hello-bonsai.onrender.com/projects/userId/${id[0]}`)
      .then((res) => {
        setproject(res.data);
      });
  }

  return (
    <div>
      <Stack p="5%" pt="2%" spacing={8}>
        <Box
          bg="#f2faff"
          border="1px solid #e2f3ff"
          borderLeft="5px solid #e2f3ff"
          p={4}
        >
          <Flex gap={2} align="top">
            <FiAlertCircle
              color="#3a88c2"
              fontSize="20px"
              fontWeight="normal"
            />
            <Box>
              <Text fontSize="14px" color="#3a88c2">
                Start 7 Day Free Trial
              </Text>
              <Flex fontSize="12px">
                <Text>You currently don’t have an active subscription.</Text>
                <Link color="#3a88c2" textDecoration="underline">
                  Start Your Free Trial now!
                </Link>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex
            justify="space-between"
            align="center"
            borderBottom="1px solid #d5d6d6"
          >
            <Flex gap={4} align="center" pb={4}>
              <Image
                src="data:image/png;base64,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"
                alt="day"
                w="70px"
              />
              <Box>
                <Text fontSize="15px" color="#6d6d6d">
                  {`${day}, ${monthname} ${date}${datetop}`}
                </Text>
                <Text color="#4d4d4d" fontSize="3xl" fontWeight="450" mt="1px">
                  {`${greet}, ${name}!`}
                </Text>
              </Box>
            </Flex>
            <Flex
              align="center"
              gap={5}
              visibility={!showdetail ? "visible" : "hidden"}
            >
              <Text fontSize="14px" color="#6d6d6d">
                Let's get you set up with Bonsai.
              </Text>
              <Button
                border="1px solid #50b289"
                color="#50b289"
                bg="none"
                size="xs"
                p={4}
                borderRadius="3px"
                _hover={{ bg: "none" }}
                onClick={() => setshowdetail(true)}
              >
                {`Get Started >`}
              </Button>
            </Flex>
          </Flex>
        </Box>
        <Flex
          border="1px solid #d5d6d6"
          borderRadius="5px"
          display={showdetail ? "flex" : "none"}
        >
          <Box w="35%" borderRight="1px solid #d5d6d6" p={7} pb={10}>
            <Flex>
              <Box>
                <li>1</li>
                <li></li>
                <li>2</li>
                <li></li>
                <li>3</li>
                <li></li>
                <li>4</li>
                <li></li>
                <li>5</li>
              </Box>
              <SimpleGrid
                fontSize="14px"
                color="#6a5a57"
                justify="center"
                align="center"
                fontWeight="550"
              >
                <Text m="auto" ml={3}>
                  Create your first Project
                </Text>
                <Text></Text>
                <Text m="auto" ml={3}>
                  Add company details
                </Text>
                <Text></Text>
                <Text m="auto" ml={3}>
                  Setup your branding
                </Text>
                <Text></Text>
                <Text m="auto" ml={3}>
                  Connect your calendar
                </Text>
                <Text></Text>
                <Text m="auto" ml={3}>
                  Connect a bank account
                </Text>
              </SimpleGrid>
            </Flex>
          </Box>{" "}
          <Flex
            backgroundImage="https://app.hellobonsai.com/assets/dashboard/step2-bg-d13aa936e296e852246ccc8644f2161e1e177ccae201a48f2974911cbd444e19.png"
            backgroundSize="100%"
            backgroundRepeat="no-repeat"
          >
            <Box p={10}>
              <Image
                src="https://app.hellobonsai.com/assets/dashboard/details-ddd6affca47f2f9bf95d730b041f7d8ba662d38d7745e87946e61872e84e4d25.svg"
                alt="pencil"
              />
              <Text fontSize="20px" fontWeight="300" mt={5}>
                Add company details
              </Text>
              <Text fontSize="15px" fontWeight="300" mt={3} color="#6d6d6d">
                Add your basic info, logo, and branding. They'll be
                automatically added to your future proposals and invoices.
              </Text>
              <Flex gap={3} mt={8}>
                <Button
                  h="32px"
                  borderRadius="3px"
                  w="27%"
                  bg="#50b289"
                  _hover={{ bg: "#50b289" }}
                  fontSize="12px"
                  border="1px solid #50b289"
                  color="white"
                >
                  Add Details
                </Button>
                <Button
                  h="32px"
                  borderRadius="3px"
                  w="27%"
                  bg="none"
                  _hover={{ bg: "none" }}
                  fontSize="12px"
                  border="1px solid #50b289"
                  color="#50b289"
                >{`Next Step >`}</Button>
              </Flex>
            </Box>
            <Text
              position="sticky"
              mt={2}
              mr={3}
              fontSize="15px"
              color="#aaa"
              _hover={{ color: "#50b289", cursor: "pointer" }}
              onClick={() => setshowdetail(false)}
            >
              Hide
            </Text>
          </Flex>
        </Flex>
        <Flex gap={12}>
          <Stack w="80%" spacing={9}>
            <ProjectTimeline projects={projects} />
            <Tasks tasks={tasks} projects={projects} />
            <IncomeExp />
          </Stack>
          <Stack>
            <Stack fontSize="13px" fontWeight="bold" color="#292a2d">
              <Flex
                align="center"
                gap={4}
                p={2}
                border="1px solid #d5d6d6"
                borderRadius="3px"
              >
                <Image
                  src="https://app.hellobonsai.com/assets/getting_started/onboarding-action-proposals@2x-ed592bf1486af20351f25fbadd7d3acd88906933562cb6dea9ed5d204207f7dd.png"
                  alt="draft"
                  w="13%"
                />
                <Text>Draft a proposals</Text>
              </Flex>
              <Flex
                align="center"
                gap={4}
                p={2}
                border="1px solid #d5d6d6"
                borderRadius="3px"
              >
                <Image
                  src="https://app.hellobonsai.com/assets/getting_started/onboarding-action-contracts-73ad171597d2eb387ff77e01a6b375fd33bda9ff5618712825ea39058eda2210.png"
                  alt="proposals"
                  w="13%"
                />
                <Text>Create a contract</Text>
              </Flex>
              <Flex
                align="center"
                gap={4}
                p={2}
                border="1px solid #d5d6d6"
                borderRadius="3px"
              >
                <Image
                  src="https://app.hellobonsai.com/assets/getting_started/onboarding-action-invoicing-edd01e1b61c356a46cbdc5165e8213bffadc20151208d2029456cb492a3d8764.png"
                  alt="invoicing"
                  w="13%"
                />
                <Text>Send an Invoice</Text>
              </Flex>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    </div>
  );
};

export default Dashboard;
