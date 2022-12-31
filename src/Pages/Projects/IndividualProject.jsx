import {
  Box,
  Flex,
  Heading,
  Skeleton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaCodeBranch, FaUser } from "react-icons/fa";
import Overview from "./Tabs/Overview";
import Invoices from "./Tabs/Invoices";
import Collaborators from "./Tabs/Collaborators";
import TimeTracking from "./Tabs/TimeTracking";
import Settings from "./Tabs/Settings";
import { useParams } from "react-router-dom";
import axios from "axios";

function IndividualProject() {
  const { id } = useParams();
  const [individual, setIndividual] = useState({});
  const [client, setClient] = useState({});
  const [clientId, setClientId] = useState("");
  const [l, setL] = useState(false);

  async function handleGetProject(id) {
    setL(true);
    await axios
      .get(`https://backend-hello-bonsai.onrender.com/projects/${id}`)
      .then((res) => {
        setL(false);
        setIndividual(res.data);
        setClientId(res.data.clientId);
      });
    // .then((res)=> console.log(res.data))
  }
  // console.log(individual);
  async function handleGetClient(id) {
    await axios
      .get(`https://backend-hello-bonsai.onrender.com/clients/c/${id}`)
      .then((res) => {
        setClient(res.data);
      });
    // .then((res)=> console.log(res.data.name))
  }
  handleGetClient(clientId);

  useEffect(() => {
    handleGetProject(id);
  }, [id]);

  return (
    <Box w={["95%"]} m="auto" p={[10]}>
      <Box p={5}>
        <Heading fontWeight={500}>
          {l ? <Skeleton height={"40px"} w="20%" /> : individual.name}
        </Heading>

        <Flex gap={5} mt={[3]}>
          <Text display="flex" alignItems="center" gap={2} color="grey">
            <FaUser />
            {client.name}
          </Text>
          <Text display="flex" alignItems="center" gap={2} color="grey">
            <FaCodeBranch />
            Edit Automation
          </Text>
        </Flex>
      </Box>

      <Tabs>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Invoices</Tab>
          <Tab>Time Tracking</Tab>
          <Tab>Collaborators</Tab>
          <Tab>Settings</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Overview title={individual.name} />
          </TabPanel>
          <TabPanel>
            <Invoices />
          </TabPanel>
          <TabPanel>
            <TimeTracking />
          </TabPanel>
          <TabPanel>
            <Collaborators />
          </TabPanel>
          <TabPanel>
            <Settings id={individual._id} title={individual.name} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default IndividualProject;
