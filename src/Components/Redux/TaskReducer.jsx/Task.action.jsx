import { Task_Error, Task_Loading, Task_Success } from "./Task.action.type";
import axios from "axios";

export const getTasksdata = async () => {
  try {
    let res = await axios.get("https://hellobonsaibackend.herokuapp.com/tasks");
    return res;
  } catch (e) {
    return e;
  }
};

export const postTask = async (data) => {
  try {
    let res = await axios.post(
      "https://hellobonsaibackend.herokuapp.com/tasks",
      // { Cookie: token }
      data
    );
    return res;
    console.log(res);
  } catch (e) {
    return e;
  }
};
