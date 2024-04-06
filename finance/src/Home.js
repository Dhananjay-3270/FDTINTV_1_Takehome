import React from "react";
import styles from "./Home.module.css";
import Vector from "./assets/Vector.png";
import Igstudio from "./assets/Igstudio.png";

function Home() {
  return (
    <>
      <div className={styles.box1}>
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
      </div>
    </>
  );
}

export default Home;
