import { Task_Error, Task_Loading, Task_Success } from "./Task.action.type";
import axios from "axios";

export const getTasksdata = async (clientId) => {
  try {
    let res = await axios.get(
      "https://backend-hello-bonsai.onrender.com/tasks",
      {
        headers: {
          clientid: clientId.clientId,
        },
      }
    );

    return res;
  } catch (e) {
    return e;
  }
};

export const postTask = async (data) => {
  try {
    let res = await axios.post(
      "https://backend-hello-bonsai.onrender.com/tasks",
      // { Cookie: token }
      data
    );
    return res;
  } catch (e) {
    return e;
  }
};
export const deleteTask = async (id) => {
  try {
    let res = await axios.delete(
      `https://backend-hello-bonsai.onrender.com/tasks/${id}`
    );
    return res;
  } catch (e) {
    return e;
  }
};

export const updateTask = async (id, data) => {
  try {
    let res = await axios.patch(
      `https://backend-hello-bonsai.onrender.com/tasks/${id}`,
      data
    );
    return res;
  } catch (e) {
    return e;
  }
};
