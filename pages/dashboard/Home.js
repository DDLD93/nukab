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
      <Container
        sx={{ pt: 15, bgcolor: "red", display: "flex",height: "100vh" }}
        maxWidth="xxlg"
      >
        <Grid
          item
          sx={{ pt: 15, bgcolor: "green", height: "500px" }}
          xs={4}
          md={4}
        ></Grid>
        <Grid sx={{ bgcolor: "blue", pt: 6 }} xs={8} md={8}>
          <div className={styles.welcome_banner}>
            <div>
              <Typography variant="h3" component="p">
                Home
              </Typography>
              <Typography variant="h6" component="p">
                Welcome Back,Umar
              </Typography>
            </div>
            <Button
              sx={{ height: 45, fontWeight: "bold" }}
              variant="contained"
              disableElevation
            >
              Disable elevation
            </Button>
          </div>
          <Grid sx={{ bgcolor: "white", pt: 6,height:"fit" }} container spacing={0}>
            <Grid container sx={{flexDirection:"column"}} item xs={5}>
              <Card sx={{flex:1,bgcolor: "green"}}>fund</Card>
              <Card sx={{flex:1,bgcolor: "pink"}}>spend</Card>
            </Grid>
            <Grid container item xs={7}>
              <Card sx={{flex:1}} >transaction</Card>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
