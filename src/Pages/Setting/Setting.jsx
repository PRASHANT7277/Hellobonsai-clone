import {
    Heading,
    Table,
    Tbody,
    Td,
    Tr,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Checkbox,
} from "@chakra-ui/react";

import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Setting.module.css";
import DeletePage from "./DeletePage";
import { useRef } from "react";

const getUser = (id) => {
    return axios
        .get(`https://backend-hello-bonsai.onrender.com/users/${id}`)
        .then((res) => res.data);
};
const updateUser = (id, data1) => {
    // console.log(id);
    return axios
        .patch(`https://backend-hello-bonsai.onrender.com/users/${id}`, {
            ...data1,
        })
        .then((res) => {
            alert("update successfully!");
            console.log(res);
        });
};
const Setting = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    const [userdata, setUserdata] = useState({});
    const [uname, setName] = useState("");
    const [country, setCountry] = useState("");
    const [showPass,setShowPass] =useState(false);
    const oldPass = useRef(null);
    const newPass = useRef(null);
    const newConfPass = useRef(null);
    let token = localStorage.getItem("token");
    token = token.split(":");
    let id = token[0];

    const saveData = () => {
        let data = {
            name: uname,
            country: country,
        };
        console.log(data);
        updateUser(id, data);
    };
    const changePass=()=>{
      let pass = userdata.password;
      if(pass!==oldPass.current.value){
        alert("old password isn't match please check!");
      }else{
        if(newPass.current.value!==newConfPass.current.value){
          alert("confirm password is not macth please check.");
        }else{
          let data={password:newPass.current.value};
          updateUser(id,data);
          alert("password changed successfully!");
          navigate(0);
        }
      }
    }

    useEffect(() => {
        getUser(id).then((res) => {
            setUserdata(res.user);
        });
    }, []);
    useEffect(() => {
        setName(userdata.name);
        setCountry(userdata.country);
    }, [userdata]);
    return (
        <div className={styles.main}>
            <div className={styles.header1}>
                <Heading size="lg">Users Page</Heading>
                <div className={styles.line5}></div>
            </div>
            <div className={styles.mainForm}>
                <Table>
                    <Tbody>
                        <Tr>
                            <Td>Email</Td>
                            <Td>
                                <input
                                    type="email"
                                    className={styles.inputForm}
                                    value={userdata.email}
                                    readOnly
                                />
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Name</Td>
                            <Td>
                                <input
                                    type="text"
                                    className={styles.inputForm}
                                    value={uname}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                />
                            </Td>
                        </Tr>

                        <Tr>
                            <Td>Country</Td>
                            <Td>
                                <input
                                    type="text"
                                    className={styles.inputForm}
                                    value={country}
                                    onChange={(e) => {
                                        setCountry(e.target.value);
                                    }}
                                />
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Update User Details</Td>
                            <Td>
                                <Button colorScheme="green" onClick={saveData}>
                                    Save
                                </Button>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Password</Td>
                            <Td>
                                <Button colorScheme="green" onClick={onOpen}>
                                    Change Password
                                </Button>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </div>
            <br />
            <br />

            <DeletePage id={id} />

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Change Password</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}></ModalBody>
                    <div className={styles.passwordForm}>
                          <p>Old Password</p>
                          <input type={showPass?"text":"password"} ref={oldPass}/>
                          <p>New Password</p>
                          <input type={showPass?"text":"password"} ref={newPass}/>
                          <p>Confirm Password</p>
                          <input type={showPass?"text":"password"} ref={newConfPass}/>
                          <br/><br/>
                          <Checkbox onChange={(e)=>{setShowPass(e.target.checked);}}>Show Password</Checkbox>
                          </div>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={changePass}>
                            Change Password
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default Setting;
