import React from "react";
import styles from "./hero.module.css";
import heroIcon from "./../../../assets/home/hero/heroIcon.png";
import { Link } from "react-router-dom";

import { SwitchTheme } from "../../switchTheme/SwitchTheme";

export default function Hero({ setIsDarkTheme }) {
  return (
    <div className={styles.Hero}>
      <div className={styles.switchTheme}>
        <SwitchTheme setIsDarkTheme={setIsDarkTheme} />
      </div>

      <div className={styles.leftContainer}>
        <div className={styles.top}>
          <h1 data-aos="fade-up">
            Crack Your College Journey <br /> With{" "}
            <span className={styles.animatedText}>Global Techify</span>
          </h1>
          <p data-aos="fade-up" className="bigText">
            Over 1 million users trust us
          </p>
        </div>
        <Link to={"/mentor"}>
          <button data-aos="fade-up" className={`bigOutlineBtn ${styles.btn}`}>
            Get Mentorship
          </button>
        </Link>
      </div>
      <div className={styles.rightContainer}>
        <div data-aos="fade-left" className={styles.imgContainer}>
          <img src={heroIcon} alt="hero-icon" />
        </div>
      </div>
    </div>
  );
}
