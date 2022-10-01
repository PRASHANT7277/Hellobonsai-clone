import {
  Checkbox,
  PopoverArrow,
  Td,
  Tr,
  Text,
  Stack,
  PopoverTrigger,
  Popover,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";
import React from "react";
import { TbDots } from "react-icons/tb";

const TaskCard = (e) => {
  return (
    <Tr
      key={e._id}
      border="1px solid #e2f3ff"
      borderRadius="5px"
      fontSize="13px"
    >
      <Td w="30%">
        <Checkbox>{e.title}</Checkbox>
      </Td>
      <Td>{e.project ? e.project : "No project"}</Td>
      <Td>{e.client ? e.client : "--"}</Td>
      <Td>{e.duedate ? e.duedate : "No due date"}</Td>
      <Td>{e.time}</Td>
      <Td>
        <Popover>
          {" "}
          <PopoverTrigger>
            <Text>
              {" "}
              <TbDots />
            </Text>
            {/* <Button
              bg="#502ca7"
              _hover={{ bg: "#502ca7" }}
              color="white"
              size="sm"
              fontSize="18px"
              fontWeight="500"
            ></Button> */}
          </PopoverTrigger>
          {/* <Portal> */}
          <PopoverContent w="100%">
            {" "}
            <PopoverBody>
              <Stack
                fontSize="13px"
                bg="white"
                fontWeight="bold"
                color="#7c7777"
              >
                <PopoverArrow />

                <Text _hover={{ color: "black", bg: "#ececec" }} p={1}>
                  Mark Complete
                </Text>

                <Text _hover={{ color: "black", bg: "#ececec" }} p={1}>
                  Archive Task
                </Text>
                <Text _hover={{ color: "black", bg: "#ececec" }} p={1}>
                  Delete Task
                </Text>
              </Stack>
            </PopoverBody>
          </PopoverContent>
          {/* </Portal> */}
        </Popover>

        {/* ............................Modall ...................................*/}
      </Td>
    </Tr>
  );
};

export default TaskCard;
