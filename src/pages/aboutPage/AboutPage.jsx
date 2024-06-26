import React from "react";
import styles from "./aboutPage.module.css";

import aboutWhite from "./../../assets/about/aboutWhite.png";
import aboutblack from "./../../assets/about/aboutBlack.png";

import mission from "./../../assets/about/mission.svg";
import vision from "./../../assets/about/vision.svg";

export default function AboutPage({ isDarkTheme }) {
  const missionVisionArr = [
    {
      title: "Mission",
      des: "Our mission is to comprehensive support, we believe we can equip students with the knowledge, skills, and confidence needed to make informed decisions about their futures.",
      img: mission,
    },
    {
      title: "Vision",
      des: "Our vision is to revolutionize the way college students navigate their career paths by providing them with a powerful platform to connect with experienced expert professionals",
      img: vision,
    },
  ];
  return (
    <div className={styles.AboutPage}>
      <div className={styles.topContainer}>
        <div data-aos="fade-up" className={styles.left}>
          <h1 data-aos="fade-up">About</h1>
          <p data-aos="fade-up" className={`normalText `}>
            Global Techify is a startup that provides mentorship to students. We
            empower students to stay up-to-date with the latest advancements in
            technology and connect them with experts from leading companies. Our
            goal is to help students explore their interests and pave their way
            towards a successful career in technology. At Global Techify, we
            believe in the power of mentorship and the potential of the next
            generation of tech leaders.
          </p>
        </div>
        <div data-aos="fade-left" className={styles.imgContainer}>
          <img src={isDarkTheme ? aboutWhite : aboutblack} alt="about" />
        </div>
      </div>
      {/* data-aos="zoom-out" */}
      <div className={styles.bottomContainer}>
        {missionVisionArr?.map((item, index) => (
          <div className={styles.singleContainer} key={index}>
            <h2 className={styles.title}>{item.title}</h2>
            <div className={styles.bottom}>
              <div className={styles.imgContainer}>
                <img src={item.img} alt={item.title} className={styles.img} />
              </div>
              <p className={styles.des}>{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
