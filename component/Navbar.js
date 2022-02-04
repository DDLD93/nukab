import Image from 'next/image';
import React from 'react';
import styles from '../styles/navbar.module.css'

function Navbar() {
  return (
      <div className={styles.navbar}>
      <nav className={styles.nav} >
          <div className="logo">
              <div className="burger"></div>
              <h3>Nukaab</h3>
          </div>
          <div className="profile">
              <div className="notification">N
              </div>
              <div className="user">user</div>
          </div>
        </nav>
      </div>
  )
}

export default Navbar;
