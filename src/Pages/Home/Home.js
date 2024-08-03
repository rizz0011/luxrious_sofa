import React from "react";
import "./Home.css";
import image from "../../../src/Assest/homeBac.jpg";
import {  Grid } from "@mui/material";

const root = {
  backgroundImage: `url(${image})`,
  height: "95vh",
  backgroundSize: "cover",
  backgroundPosition: "top 70% right 0",
  padding: "0px 30px",
};

function Home() {
  return (
    <div className="about-us" style={root}>
    <Grid container spacing={1}>
        <Grid
        className="brand_name"
          item
          sm={12}
          xs={12}
        >
          <span >Luxurious Sofa Furniture</span>
        </Grid>
        <Grid item sm={12} xs={12} className="homeService">
        <span>Morden Sofa, Head Boards Manufactured and Repair Service</span>
        </Grid>
        <Grid item sm={12} xs={12} className="homeAbout">
          <span> Over 1000 customers have chosen our luxurious sofa furniture and headboards for manufacturing and repairs since 2020.</span>
        </Grid>
        {/* <Grid item sm={12} xs={12} className="buttonLmore">
          <button>Learn More</button>
        </Grid> */}
      </Grid>
    </div>
  );
}

export default Home;
