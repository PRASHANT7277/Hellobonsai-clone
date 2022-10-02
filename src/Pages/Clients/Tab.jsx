import { TriangleDownIcon } from '@chakra-ui/icons';
import React from 'react'
import styles from "./Tabs.module.css";
const Tab = (props) => {
    const {up,down}=props;
  return (
    <div className={styles.main}>
        <div>
            {up?
            <div className={styles.upim}>
                <div>{up}</div>
                <div>
                <p style={{color:"green",border:"1px solid green",borderRadius:"5px",padding:"5px 10px",width:"fit-content"}}>+</p>
                </div>
                </div>
            :<div className={styles.upop}>
                    <p>INR <TriangleDownIcon boxSize="5px" /></p>
                </div>}
        </div>
        <div>
            {down==="static"?
            <div className={styles.downop}>
                <div>
                    <p>OutStanding</p>
                    <p style={{fontWeight:"700"}}>&#8377;0.00</p>
                </div>
                <div>
                <p>Overdue</p>
                <p style={{fontWeight:"700"}}>&#8377;0.00</p>
                </div>
                <div>
                <p>Pending</p>
                <p style={{fontWeight:"700"}}>&#8377;0.00</p>
                </div>
                <div>
                <p>Paid</p>
                <p style={{fontWeight:"700"}}>&#8377;0.00</p>
                </div>
            </div>
            :<div className={styles.downim}>
                <div style={{textAlign:"center",minHeight:"70px",paddingTop:"20px"}}>
        <p style={{color:"gray"}}>{down}</p>
        </div>
                
                </div>
            
            }
        </div>
    </div>
  )
}

export default Tab