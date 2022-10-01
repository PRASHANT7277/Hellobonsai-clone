import React, { useEffect } from 'react';
import styles from "./Clients.module.css";

import { Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,Input,Text, ModalFooter, Button} from '@chakra-ui/react';


export const Newclient = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className={styles.nclient} onClick={onOpen}>Newclient
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create New Client</ModalHeader>
                <ModalCloseButton />
                <ModalBody p={10}>
                <Text fontWeight={500} color="grey">
                  Users
                </Text>

                <Input mt={3} value="user 1"/>                
                <br />
                <br />
                <Text fontWeight={500} color="grey">
                  Client Name
                </Text>

                <Input mt={3} placeholder="Enter Client Name" />
                <br />
                <br />
                <Text fontWeight={500} color="grey">
                  Email
                </Text>
                <Input mt={3} placeholder="Enter Client Email" />
                
                </ModalBody>
                <ModalFooter>
                <Button
                  w={"95%"}
                  m="auto"
                  variant="blackAlpha"
                  bg={"#00b289"}
                  color="white"
                  onClick={onClose}
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
