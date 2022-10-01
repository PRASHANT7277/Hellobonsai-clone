import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom/dist';
import styles from "./Clients.module.css";
import { Table, Tr, Th,Td} from '@chakra-ui/react';
import { Clientportal } from './Clientportal';
import { Newclient } from './Newclient';
import { SearchI } from './SearchI';
import { Filtersp } from './Filtersp';
import axios from 'axios';

const getClients = (id)=>{
    return axios.get("https://hellobonsaibackend.herokuapp.com/clients")
    .then((res)=>res.data);
}
const getUsers = ()=>{
    return axios.get("https://hellobonsaibackend.herokuapp.com/users").then((res)=>res.data);
}

const Clients = () => {
    let [data,setdata]=useState([]);
    let [userdata,setUserdata]=useState([]);
    let [user,setUser]=useState([]);
    useEffect(()=>{
        getClients().then((res)=>{console.log(res);setdata([...res])});
        getUsers().then((res)=>{console.log(res);setUserdata([...res])});
    },[]);
    useEffect(()=>{
        let token =localStorage.getItem("token");
        token=token.split(":");
        let id = token[0];
        console.log(id);
        let u=userdata.filter((e)=>{
            return e._id===id;
        })
        setUser(u);
    },[userdata]);
    useEffect(()=>{
        console.log(user);
    })
  return (
    <>
    <div className={styles.main}>
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
            <SearchI /><Filtersp />
            </div>
            <div className={styles.optionbar1}>
                <div style={{color:"green",marginTop:"5px",fontWeight:"600",fontSize:"14px"}}>import CSV</div>     
                <Clientportal />
                <Newclient />
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
                {data.map((c)=>{
                    let link=`/vendor/clients/${c._id}`
                    return (
                    
                    <Tr key={c._id} style={{fontSize:"14px",border:"1px solid white",backgroundColor:"white",padding:"10px"}}>
                        <Link  to={link}>
                    <Td><img src="client" alt="c" width="40px" height="40px" style={{border:"1px solid"}}/>{c.name}</Td>
                    </Link>
                    <Td>{c.name}</Td>
                    <Td>{c.email}</Td>
                    <Td> - </Td>
                    <Td style={{fontSize:"20px"}}>...</Td>
                    
                </Tr>)
                })}
            </Table>
        </div>

    </div>
    </>
  )
}

export default Clients