import styles from "./index.module.css";

const DiscountBanner = () => {
  return (
    <div className={styles.globalContainer}>
      <img alt="" src="/images/BannerLogo.png" width={"600px"} height={"200px"} />
      <div className={styles.ContainerText}>
        <h2 className={styles.textMonth}>
          ГОРЯЧИЙ <span>НОЯБРЬ!</span>
        </h2>

        <h1 className={styles.discount}>СКИДКА 40%</h1>
        <h3>
          НА ПРОЕКТИРОВАНИЕ ДОМА
        </h3>
      </div>
      <div className={styles.dream}>
        <p>
          Начните путь к дому мечты,
          <br />
          пока действует скидка
        </p>
        <img width={"40px"} height={"40px"} src="./images/iconKey.png" alt="" />
      </div>
    </div>
  );
};
export default DiscountBanner;
