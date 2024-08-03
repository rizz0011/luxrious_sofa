import React, { useState, useEffect } from "react";
import "./Home.css";
import image from "../../../src/Assest/homeBac.jpg";
import { Grid } from "@mui/material";

const placeholderStyle = {
  height: "95vh",
  backgroundSize: "cover",
  backgroundPosition: "top 70% right 0",
  padding: "0px 30px",
  backgroundColor: "#f0f0f0", // Placeholder background color
};

function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => setImageLoaded(true);
  }, []);

  const root = {
    ...placeholderStyle,
    backgroundImage: imageLoaded ? `url(${image})` : 'none',
  };

  return (
    <div className="about-us" style={root}>
      <Grid container spacing={1}>
        <Grid className="brand_name" item sm={12} xs={12}>
          <span>Luxurious Sofa Furniture</span>
        </Grid>
        <Grid item sm={12} xs={12} className="homeService">
          <span>Modern Sofa, Head Boards Manufactured and Repair Service</span>
        </Grid>
        <Grid item sm={12} xs={12} className="homeAbout">
          <span>
            Over 1000 customers have chosen our luxurious sofa furniture and headboards for manufacturing and repairs since 2020.
          </span>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
