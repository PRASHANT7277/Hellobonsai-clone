import React from "react";
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
    Th,
    Thead,
} from "@chakra-ui/react";
import { TiMediaRecordOutline } from "react-icons/ti";
import styles from "./Setting.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const DeletePage = ({ id }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();

    const deleteuser = async (id) => {
        let projects = await axios.get(
            `https://backend-hello-bonsai.onrender.com/projects`
        );
        let clients = await axios.get(
            "https://backend-hello-bonsai.onrender.com/clients"
        );

        console.log(projects.data);
        console.log(clients.data);

        for (let i = 0; i < projects.data.length; i++) {
            if (projects.data[i].userId === id) {
                // console.log(projects.data[i]);
                await axios
                    .delete(
                        `https://backend-hello-bonsai.onrender.com/projects/${projects.data[i]._id}`
                    )
                    .then((res) => {
                        return res;
                    })
                    .catch((e) => {
                        alert("something went wrong. please try again.");
                    });
            }
        }
        for (let i = 0; i < clients.data.length; i++) {
            if (clients.data[i].userId === id) {
                await axios
                    .delete(
                        `https://backend-hello-bonsai.onrender.com/clients/${clients.data[i]._id}`
                    )
                    .then((res) => {
                        return res;
                    })
                    .catch((e) => {
                        alert("something went wrong. please try again.");
                    });
            }
        }
        axios
            .delete(`https://backend-hello-bonsai.onrender.com/users/${id}`)
            .then((res) => {
                alert("delete successfully");
                localStorage.removeItem("token");
                navigate("/");
            })
            .catch((e) => {
                alert("something went wrong. please try again.");
            });
    };
    return (
        <div className={styles.deleteSec}>
            <hr />

            <p className={styles.missYou}>We will Miss You.</p>
            <Button colorScheme="red" onClick={onOpen}>
                Delete Account
            </Button>
            <br />
            <br />
            <hr />

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Are You Sure ?</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Table size="sm">
                            <Thead>
                                <Tr>
                                    <Th>This action will delete</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>
                                        <TiMediaRecordOutline />
                                    </Td>
                                    <Td>Your Account</Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <TiMediaRecordOutline />
                                    </Td>
                                    <Td>Your saved Clients</Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <TiMediaRecordOutline />
                                    </Td>
                                    <Td>Your Projects</Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <TiMediaRecordOutline />
                                    </Td>
                                    <Td>Your Progress</Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <TiMediaRecordOutline />
                                    </Td>
                                    <Td>Your payment Details</Td>
                                </Tr>
                            </Tbody>
                        </Table>

                        <Heading size="sm">Think Again!</Heading>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button
                            variant="outline"
                            colorScheme="red"
                            onClick={() => {
                                deleteuser(id);
                            }}
                        >
                            Delete
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default DeletePage;
