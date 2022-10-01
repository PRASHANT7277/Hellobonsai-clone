import {
  Box,
  Flex,
  Heading,
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
import dbData from "./db.json";
import Overview from "./Tabs/Overview";
import Invoices from "./Tabs/Invoices";
import Collaborators from "./Tabs/Collaborators";
import TimeTracking from "./Tabs/TimeTracking";
import Settings from "./Tabs/Settings";

function IndividualProject() {
  // const { id } = useParams();
  const [individual, setIndividual] = useState({});

  useEffect(() => {
    setIndividual(dbData.Projects[0]);
  }, []);

  // console.log(individual)

  return (
    <Box w={["95%"]} m="auto" p={[10]}>
      {/* <Heading textAlign="center">IndividualProject ID : {id}</Heading> */}
      <Box p={5}>
        <Heading fontWeight={500}>{individual.title}</Heading>

        <Flex gap={5} mt={[3]}>
          <Text display="flex" alignItems="center" gap={2} color="grey">
            <FaUser />
            {individual.client}
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
            <Overview title={individual.title}/>
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
            <Settings title={individual.title}/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default IndividualProject;
