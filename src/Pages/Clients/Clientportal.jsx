import React from 'react';
import styles from "./Clients.module.css";

import { Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    useDisclosure,Heading,Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { CloseIconm } from './CloseIconm';

export const Clientportal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className={styles.cportal} onClick={onOpen}>
        Client Portal
        <Modal isOpen={isOpen} size='4xl' onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalBody className={styles.cpmodal}>
                        <div className={styles.cpmodalc1}>
                        <Heading as='h3' size='lg' style={{fontWeight:"500"}}>Client Portal</Heading>
                            {/* <h1>Client Portal</h1> */}
                            <br/>
                            <p>The Client Portal gives each of your clients the ability to log into their own custom-branded area where they can easily access the proposals, contracts or invoices you send them. <Link style={{color:"green"}}>More information.</Link></p>
                            <br/>
                            <p>To enable/disable your client portal or change the branding, go to <Link style={{color:"green"}}>Settings.</Link></p>
                            <div className={styles.line}></div>
                            <div className={styles.freeTrial} style={{width:"95%",padding:"10px 10px 10px 5px"}}>
                            <div style={{marginLeft:"10px"}}>
                <img src="/images/info.png" alt="info" width="22px" />
            </div><div style={{width:"50%",marginLeft:"10px"}}>You must be on the Professional plan to use the Client Portal feature.</div><Button style={{marginTop:"10px"}} colorScheme='blue' variant='outline'>Upgrade Now</Button>
                            </div>
                        </div>
                        <div className={styles.cpmodalc2}>
                            <img src="https://app.hellobonsai.com//assets/clients/client-portal-promo-bg-8ed2a311579695d2f7a42ca02309f311c948f3ec9e8d6f99909a0187abffa5e8.png" alt="client-portal-promo"/>
                        </div>
                        <button onClick={onClose} className={styles.closeB}>
                        <CloseIconm /></button>
                </ModalBody>
            </ModalContent>
        </Modal>
    </div>
  )
}
