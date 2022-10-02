import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom/dist";
import styles from "./Clients.module.css";
import { Table, Tr, Th, Td, Menu, MenuButton, MenuList, MenuItem,Button } from "@chakra-ui/react";
import { Clientportal } from "./Clientportal";
import { Newclient } from "./Newclient";
import { SearchI } from "./SearchI";
import { Filtersp } from "./Filtersp";
import axios from "axios";


const getClients = (id) => {
  return axios
    .get(`https://hellobonsaibackend.herokuapp.com/clients/${id}`)
    .then((res) => res.data);
};
const getUsers = () => {
  return axios
    .get("https://hellobonsaibackend.herokuapp.com/users")
    .then((res) => res.data);
};

const Clients = () => {
  let [data, setdata] = useState([]);
  let [userdata, setUserdata] = useState([]);
  let [user, setUser] = useState([]);
  let token = localStorage.getItem("token");
  let navigate = useNavigate()

  const deleteclient = async(id)=>{
    return await axios.delete(`https://hellobonsaibackend.herokuapp.com/clients/${id}`).then((res)=>{alert("delete successfully");navigate(0)}).catch((e)=>{alert("something went wrong. please try again.")});
}
  console.log(token);
  token = token.split(":");
  let id = token[0];
  console.log(id);
  useEffect(() => {
    getClients(id).then((res) => {
      console.log(res);
      setdata([...res]);
      return res;
    });
    getUsers().then((res) => {
      console.log(res);
      setUserdata([...res]);
      return res;
    });
  }, [id]);
  useEffect(() => {
    let u = userdata.filter((e) => {
      return e._id === id;
    });
    setUser(u);
  }, [userdata]);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.freeTrial}>
          <div style={{ marginLeft: "10px" }}>
            <img src="/images/info.png" alt="info" width="22px" />
          </div>
          <div>
            <h3 style={{ color: "#3a88c2", fontSize: "16px" }}>
              Start 7 Day Free Trial
            </h3>
            <p style={{ fontSize: "14px" }}>
              You currently don’t have an active subscription.
              <Link
                to="#"
                style={{ color: "#3a88c2", textDecoration: "underline" }}
              >
                Start your Free Trial now!
              </Link>
            </p>
          </div>
        </div>
        <div className={styles.optionbar}>
          <div style={{ display: "flex" }}>
            <SearchI />
            <Filtersp />
          </div>
          <div className={styles.optionbar1}>
            <div
              style={{
                color: "green",
                marginTop: "5px",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              import CSV
            </div>
            <Clientportal />
            <Newclient user={user} />
          </div>
        </div>
        <div style={{ width: "90%", margin: "auto", marginTop: "20px" }}>
          <Table>
            <Tr>
              <Th>CLIENT</Th>
              <Th>CONTACT NAME</Th>
              <Th>CONTACT EMAIL</Th>
              <Th>TAGS</Th>
              <Th> </Th>
            </Tr>
            {data.map((c) => {
              let link = `/vendor/clients/${c._id}`;
              return (
                <Tr
                  key={c._id}
                  style={{
                    fontSize: "14px",
                    border: "1px solid white",
                    backgroundColor: "white",
                    padding: "10px",
                  }}
                >
                  <Link to={link}>
                    <Td>
                      <img
                        src="/images/user.png"
                        alt="c"
                        width="40px"
                        height="40px"
                        style={{ border: "1px solid gray" }}
                      />
                      {c.name}
                    </Td>
                  </Link>
                  <Td>{c.name}</Td>
                  <Td>{c.email}</Td>
                  <Td> - </Td>
                  <Td style={{ fontSize: "20px" }}>
                    <Menu>
                      {({ isOpen }) => (
                        <>
                          <MenuButton
                            isActive={isOpen}
                            as={Button}
                            style={{backgroundColor:"transparent"}}
                          >
                            ...
                          </MenuButton>
                          <MenuList>
                            <MenuItem onClick={()=>deleteclient(c._id)}>Delete Client</MenuItem>
                          </MenuList>
                        </>
                      )}
                    </Menu>
                    
                  </Td>
                </Tr>
              );
            }) || <p>Waiting for data</p>}
          </Table>
        </div>
      </div>
    </>
  );
};

export default Clients;
