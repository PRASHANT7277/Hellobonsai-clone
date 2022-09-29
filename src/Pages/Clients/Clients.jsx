import React from 'react'
import { Link } from 'react-router-dom/dist';
import styles from "./Clients.module.css";
import { IconButton,Button, Table, Tr, Th,Td } from '@chakra-ui/react';

const SearchIcon = ()=>{
    return (<img width="22px" src="/images/search.png" alt="search"/>)
}

const Clients = () => {

  return (
    <>
    <div >
        <div className={styles.freeTrial}>
            <div style={{marginLeft:"10px"}}>
                <img src="/images/info.png" alt="info" width="22px" />
            </div>
            <div>
                <h3 style={{color:"#3a88c2",fontSize:"16px"}}>Start 7 Day Free Trial</h3>
                <p style={{fontSize:"14px"}}>You currently don’t have an active subscription.<Link to="#" style={{color:"#3a88c2",textDecoration:"underline"}}>Start your Free Trial now!</Link></p>
            </div>
        </div>
        <div className={styles.optionbar}>
            <div style={{display:"flex"}}>
            {/* <IconButton aria-label='Search database' colorScheme='white' variant='solid' className={styles.searchi} icon={<SearchIcon />} /><Button colorScheme='white' variant='solid' className={styles.filtersp} >Filters</Button> */}
            <div className={styles.searchi}><SearchIcon /></div><div className={styles.filtersp}>Filter  v</div>
            </div>
            <div className={styles.optionbar1}>
                <div style={{color:"green",marginTop:"5px",fontWeight:"600",fontSize:"14px"}}>import CSV</div>
                <div className={styles.cportal}> Client Portal </div>
                <div className={styles.nclient}> New Client </div>
            </div>
        </div>
        <div style={{width:"90%",margin:"auto",marginTop:"20px"}}>
            <Table>
                <Tr>
                    <Th>CLIENT</Th>
                    <Th>CONTACT NAME</Th>
                    <Th>CONTACT EMAIL</Th>
                    <Th>TAGS</Th>
                    <Th> </Th>
                </Tr>
                <Tr style={{fontSize:"14px",border:"1px solid white",backgroundColor:"white",padding:"10px"}}>
                    <Td><img src="client" alt="client" width="40px" height="40px" style={{border:"1px solid"}}/>Sample Client</Td>
                    <Td>Sample Client</Td>
                    <Td>sampleclient@hellobonsai.com</Td>
                    <Td> - </Td>
                    <Td style={{fontSize:"20px"}}>...</Td>
                </Tr>
            </Table>
        </div>
    </div>
    </>
  )
}

export default Clients