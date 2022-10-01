import React from 'react';
import styles from "./Clients.module.css";

import { Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,} from '@chakra-ui/react';

export const Newclient = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className={styles.nclient} onClick={onOpen}>Newclient
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    new client <br/>hello world!
                </ModalBody>
            </ModalContent>
        </Modal>
    </div>
  )
}
