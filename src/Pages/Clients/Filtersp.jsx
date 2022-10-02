import { ChevronDownIcon } from '@chakra-ui/icons';
import React from 'react';
import styles from "./Clients.module.css";

export const Filtersp = () => {
  return (
    <div className={styles.filtersp}>Filter  <ChevronDownIcon style={{marginLeft:"10px",marginRight:"-10px"}} /></div>
  )
}
