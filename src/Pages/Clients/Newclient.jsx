import React, { useEffect, useState } from 'react';
import styles from "./Clients.module.css";

import { Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,Input,Text, ModalFooter, Button} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const Newclient = ({user}) => {
  const navigate = useNavigate();
    if(user.length===0){
      user=[{name:"xyz",_id:"0"}];
    }
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [cname,setCname]=useState("");
    const [cemail,setCemail]=useState("");

    const addClient = async ()=>{
      if(cname.length!==0&&cemail.length!==0){
        let userid = document.querySelector('#cData>.u1').id;
      let data={
        userId:userid,
        name:cname,
        email:cemail
      }
      let a= await axios({
        method: 'post',
        url: 'https://backend-hello-bonsai.onrender.com/clients',
        data: data
      });
      if(a.status===200){
        alert("client added successfully");
        navigate(0);
      }else{
        alert("something went Wrong. please try again");
      }
      }else{
        alert("please enter correct details");
      }
    }
  return (
    <div className={styles.nclient} onClick={onOpen}>Newclient


        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create New Client</ModalHeader>
                <ModalCloseButton />
                <ModalBody p={10}>
                  <form id="cData">
                <Text fontWeight={500} color="grey">
                  User
                </Text>

                <Input className='u1' mt={3} value={user[0].name} id={user[0]._id} readOnly style={{pointerEvents:"none"}} />
                <br />
                <br />
                <Text fontWeight={500} color="grey">
                  Client Name
                </Text>

                <Input mt={3} placeholder="Enter Client Name" onChange={(e)=>{setCname(e.target.value)}} />
                <br />
                <br />
                <Text fontWeight={500} color="grey">
                  Email
                </Text>
                <Input mt={3} type="email" placeholder="Enter Client Email" onChange={(e)=>{setCemail(e.target.value)}} />
                </form>
                </ModalBody>
                <ModalFooter>
                <Button
                  w={"95%"}
                  m="auto"
                  variant="blackAlpha"
                  bg={"#00b289"}
                  color="white"
                  onClick={addClient}
                  _hover={{ backgroundColor: "#00CF9F" }}
                >
                  Create New Client
                </Button>
              </ModalFooter>
            </ModalContent>
        </Modal>
    </div>
  )
}
