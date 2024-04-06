import Box from "@mui/material/Box";

import React from "react";
import styles from "./Home.module.css";
import Vector from "./assets/Vector.png";
import Igstudio from "./assets/Igstudio.png";
function Home() {
  return (
    <>
      {/* <div className={styles.box1}>
        <nav>
          <div className={styles.main_navbox}>
            <div className={styles.logobox}>
              <img alt="vectorlogo" src={Vector} />
              <img alt="Studio" src={Igstudio} />
            </div>
            <div className={styles.navbox1}>
              <h3>Home</h3>
              <h3>Attorneys</h3>
              <h3>Practice Areas</h3>
              <h3>About Us</h3>
            </div>
            <div className={styles.contactbox}>
              <h2>Contact Now</h2>
            </div>
          </div>
        </nav>
      </div> */}

      <Box
        height={990}
        width="100%"
        display="flex"
        flexDirection="row"
        justifyContent="space-evenly"
      >
        <Box width={143} height={30.3} position="relative" alignItems='center' top={10}>
          <img alt="logo" src={Vector} />
          <img alt="logo" src={Igstudio} />
        </Box>

        <Box display='flex'
         flexDirection="row"
         justifyContent='space-evenly'
         width={431}
      height={26}
      color= '#FFFFFF'
         >
            <h4>Home</h4>
            <h4>Attorneys</h4>
            <h4>Practice Areas</h4>
            <h4>About Us</h4>
        </Box>
        <Box width={172}
        height={47}
        color= '#FFFFFF'
        >
<h3>Contact Now</h3>
        </Box>
      </Box>
    </>
  );
}

export default Home;
