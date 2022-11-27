import { Button } from '@chakra-ui/button';
import { SettingsIcon } from '@chakra-ui/icons';
import { Grid, GridItem, Heading } from '@chakra-ui/layout';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from "./Clientdata.module.css";
import Tab from './Tab';

const getclient = async (id)=>{
    return await axios.get(`https://backend-hello-bonsai.onrender.com/clients/c/${id}`).then((res)=>res.data);
}
const getProjects = async (id)=>{
    return await axios.get(`https://backend-hello-bonsai.onrender.com/projects/userId/${id}`).then((res)=>res.data);
}
const Contact = ({c})=>{
    return(
        <>
        <Heading as="h3" size='lg'>{c.name}</Heading>
        <p style={{color:"green"}}>{c.email}</p>
        </>
    )
}
const Projects = ({cid,uid})=>{
    console.log("uid",uid);
    console.log("cid",cid);
    const [projects,setprojects]=useState([]);
    const [project,setproject]=useState([]);
    useEffect(()=>{
        getProjects(uid).then((res)=>{setprojects([...res])});
    },[]);
    useEffect(()=>{
        let pro=projects.filter((e)=>{
            return e.clientId==cid;
        })
        setproject([...pro]);
    },[projects]);
    useEffect(()=>{
        console.log(projects);
        console.log(project);
    })
    return (<>
    {project.length?project.map((e)=>{
        return (
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <p style={{fontWeight:"500"}}>{e.name}</p>
                <p>active</p>
            </div>
        )
    }):<div style={{textAlign:"center",minHeight:"70px",paddingTop:"20px"}}>
        <p style={{color:"gray"}}>There is no project going on.</p>
        </div>}
    </>)
}

export const Clientdata = () => {
    const {id} = useParams();
    const [client,setClient] = useState({});
    useEffect(()=>{
        getclient(id).then((res)=>{setClient({...res})})
    },[id])
  return (
    <>
    <div className={styles.main}>
    <div className={styles.topbar}></div>
    <div className={styles.infotab}>
        <div className={styles.infotabpart1}>
            <Grid templateColumns='20% 50% 30%'>
                <GridItem>
                <div className={styles.tp1}>
                <img
                        src="/images/user.png"
                        alt="c"
                        width="64px"
                        height="64px"
                      />
                </div>
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
                    <Link to="/vendor/projects">
                    Create New Project
                    </Link>
                </Button>
            </div>
                </GridItem>
            </Grid>
            
            
            
        </div>
        <div className={styles.infotabpart2}>
            Add tags
        </div>
    </div>
    <div className={styles.clienttabs}>
        <Grid templateColumns="60% 40%" gap="20px">
            <GridItem>
                <Tab down="static"/>
                <br/>
                <Tab up="Project" down={<Projects cid={client._id} uid={client.userId} />}/>
                <br/>
                <Tab up="Forms" down="No forms sent yet."/>
                <br/>
                <Tab up="Notes" down="No notes added yet."/>
                <br/>
            </GridItem>
            <GridItem>
                <Tab up="Contacts" down={<Contact c={client}/>}/>
                <br/>
            </GridItem>
        </Grid>
    </div>
    </div>
    </>
  )
}
