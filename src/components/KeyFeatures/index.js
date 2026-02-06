/* eslint-disable react-hooks/rules-of-hooks */
import styles from "./index.module.css";
import { useState } from "react";

const KeyFeatures = () => {
  const leaveRequest = () => {
    document.getElementById("ProjectStatus").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.globalContainer}>
      <div className={styles.conteinerTitle}>
        <h1>
          Индивидуальные дома в Ессентуках для тех,
          <br />
          кто ценит контроль и качество.
        </h1>
        <p>Берем на себя весь процесс - от участка до готового дома.</p>
      </div>
      <div className={styles.conteinerPeculiarities}>
        <p>
          - Проектируем дом под ваши задачи, участок и образ жизни.
          <br />
          - Берем на себя все разрешения и согласования.
          <br />
          - Цена,сроки и ответственность за результат зафиксированы договором.
          <br />- Дом реализуется строго по проекту, без упрощений.
        </p>
      </div>
      <div className={styles.containerConsultation}>
        <p>
          Запланируйте консультацию с руководителем компании
          <br />и получите предварительную оценку сроков и бюджета.
        </p>
        <button className={styles.ConsultationButton} onClick={leaveRequest}>
          {" "}
          обсудить строительство дома{" "}
        </button>
      </div>
    </div>
  );
};
export default KeyFeatures;
