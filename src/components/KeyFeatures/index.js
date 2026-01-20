import styles from "./index.module.css";

const KeyFeatures = () => {
  return (
    <div className={styles.globalContainer}>
      <h4>современные</h4>
      <div className={styles.ContainerTitle}>
        <h1>ДОМА</h1>
        <p>строим под ключ</p>
      </div>
      <div className={styles.benefitsContainer}>
        <div className={styles.Advantage}>
          <img alt="качественые материалы" src="./images/iconPlus.png" />
          <p>
            Используем только
            <br />
            качественые
            <br />
            материалы
          </p>
        </div>
        <div className={styles.Advantage}>
          <img alt="качественые материалы" src="./images/iconPlus.png" />
          <p>
            Адаптируем проект <br />
            под ваш бюджет
          </p>
        </div>
        <div>
          <p></p>
        </div>
        <div className={styles.Advantage}>
          <img alt="качественые материалы" src="./images/iconPlus.png" />
          <p>
            Реализуем самые <br />
            сложные пректы
          </p>
        </div>
      </div>
      <div className={styles.projectsReady}>
        <h1>307</h1>
        <p>
          проектов
          <br />
          сделано
        </p>
      </div>
    </div>
  );
};
export default KeyFeatures;
