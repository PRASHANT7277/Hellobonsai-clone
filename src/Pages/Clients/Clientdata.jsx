import { Button } from '@chakra-ui/button';
import { SettingsIcon } from '@chakra-ui/icons';
import { Grid, GridItem, Heading } from '@chakra-ui/layout';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styles from "./Clientdata.module.css";

const getclient = (id)=>{
    return axios.get(`https://hellobonsaibackend.herokuapp.com/clients/${id}`).then((res)=>res.data);
}
export const Clientdata = () => {
    const params = useParams();
    const [client,setClient] = useState({});
    useEffect(()=>{
        getclient(params.id).then((res)=>{setClient({...res})})
    },[])
  return (
    <>
    <div className={styles.main}>
    <div className={styles.topbar}></div>
    <div className={styles.infotab}>
        <div className={styles.infotabpart1}>
            <Grid templateColumns='20% 50% 30%'>
                <GridItem>
                <div className={styles.tp1}>Add An Image</div>
                </GridItem>
                <GridItem>
                <div className={styles.tp2}>
                <Heading as='h2' size='lg' style={{fontWeight:500}}>{client.name}</Heading>
                <p style={{color:"green"}}>{client.email}</p>
            </div>
                </GridItem>
                <GridItem>
                <div className={styles.tp3}>
                <Button colorScheme='gray' variant='outline'>
                    <SettingsIcon />
                </Button>
                <Button colorScheme='green' variant='outline'>
                    Create New Project
                </Button>
            </div>
                </GridItem>
            </Grid>
            
            
            
        </div>
        <div className={styles.infotabpart2}></div>
    </div>

    </div>
    </>
  )
}
