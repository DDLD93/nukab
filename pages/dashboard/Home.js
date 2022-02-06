import React from "react";
import Navbar from "../../component/Navbar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import styles from "../../styles/dashboard.module.css";
import { style } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Home() {
  return (
    <div>
      <Navbar />
      <div className={styles.main}>
        <div style={{maxWidth:"300px"}} className={styles.app_bar}>
          <div className={styles.app_card}>Home</div>
          <div className={styles.app_card}>Bill Payment</div>
          <div className={styles.app_card}>Airtime</div>
          <div className={styles.app_card}>Transaction</div>
          <div className={styles.app_card}>Settings</div>
          <div className={styles.app_card}>Log Out</div>
        </div>
        <div className={styles.main_content}>
          <div className={styles.welcome_banner}>
            <span>
              <Typography variant="h4" component="p">
                Home
              </Typography>
              <Typography variant="h6" component="p">
                Welcom back, Umar
              </Typography>
            </span>
            <Button
              className={styles.fund_button}
              variant="contained"
              disableElevation
            >
              Fund Wallet
            </Button>
          </div>
          <div className={styles.main_content_container}>
            <div className={styles.transaction}>
              <Card sx={{ minHeight: 600 }}>
                transaction
              </Card>
            </div>

            <div className={styles.balance}>
              <Card sx={{ height: 150 }}>balance</Card>
              <Card sx={{ height: 150 }}>spend</Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
