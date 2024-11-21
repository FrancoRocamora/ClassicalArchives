//import { useSelector } from "react-redux";
//import { useState } from "react";;

import styles from "./Landing.module.css";
import { useNavigate } from "react-router-dom";

export default function Landing({ handleLoginClick }) {
  const navigate = useNavigate();

  return (
    <div className={styles.Container}>
      <div className={styles.EmbraceYourBeauty}>
        <div className={styles.containerText}>
          <h2>
            <strong className={styles.strong}>Classical</strong>
          </h2>
          <h2 className={styles.beauty}>Archives</h2>
        </div>
        <div className={styles.containerButton}>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleLoginClick();
              /*  navigate("/home"); */
            }}
            className={styles.Login}
          >
            <p>Login</p>
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/home");
            }}
            className={styles.guest}
          >
            <p>Guest</p>
          </button>
        </div>
      </div>
    </div>
  );
}