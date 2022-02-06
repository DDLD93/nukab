import Image from 'next/image';
import React from 'react';
import styles from '../styles/navbar.module.css'
import Typography from "@mui/material/Typography";

function Navbar() {
  return (
      <div className={styles.navbar}>
      <nav className={styles.nav} >
          <div className="logo">
              <svg height="19" viewBox="0 0 27 19" width="27" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="#8B98AD" strokeLinecap="square" strokeWidth="2"><path d="M1.5 1.5h24M1.5 9.5h24M1.5 17.5h24"></path></g></svg>
              <h3>Nukaab</h3>
          </div>
          <div style={{display:"flex",gap:"20px",alignItems: "center"}}>
              <div className="notification">
              <svg height="23" viewBox="0 0 20 23" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="#8B98AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.64"><path d="M8 19.75a2.087 2.087 0 0 0 4.005 0M10 1a7.5 7.5 0 0 1 7.5 7.5c0 7.046 1.5 8.25 1.5 8.25H1s1.5-1.916 1.5-8.25A7.5 7.5 0 0 1 10 1z"></path></g></svg>
              </div>
              
                <div style={{width:45,height:45,borderRadius:"50%",backgroundColor:"#F39220",color:"white",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold"}}>
                  UA
                </div>
                <Typography variant="P" component="p">
                Umar Adamu
              </Typography>
      
          </div>
        </nav>
      </div>
  )
}

export default Navbar;
