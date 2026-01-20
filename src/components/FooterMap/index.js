import styles from "./index.module.css";

const FooterMap = () => {
  return (
    <div className={styles.globalContainer}>
      <div className={styles.mapSection}>
        <h2>Мы находимся здесь!</h2>
        <div className={styles.mapСontainer}>
          {/* <iframe
            title="Фортуна на карте"
            src="https://yandex.ru/maps/11057/essentuky/house/ulitsa_imeni_rybnikova_80/YEsYfwdpTEcGQFpufXx1dXlgZg==/?ll=42.908958%2C44.044014&z=18.25"
            width="100%"
            height="450"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> */}

          <iframe
            title="Адрес: улица имени Рыбникова, 80, Ессентуки"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.036129098849!2d42.90734507624823!3d44.04401357192089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406021e95e15fb8b%3A0xcb45e0ab890a1a56!2z0KPRgdC_0LXQudC60LAg0LjQvNC10L3QuCDRgNCx0LXQutC90L7QstCwLCA4MCwg0K3QtdGB0LXQvdC00YPRgNCz0LgsINCh0YLQsNGC0YDRi9C60L7Qs9C-IDM1NzYwMA!5e0!3m2!1sru!2sru!4v1742059275197!5m2!1sru!2sru"
            allowfullscreen
            width={"100%"}
            height={300}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className={styles.containerContact}>
        <h2> Как с нами связаться</h2>
        <div className={styles.contacts}>
          <div className={styles.containerTelephone}>
            <a href="tel:+79283277778">
              {" "}
              <img alt="Телефон" src="/images/iconTelephone.png" />
              8-928-327-77-78
            </a>{" "}
          </div>
          <div className={styles.containerInstogram}>
            <a
              href="https://www.instagram.com/doma_top_essentuki?igsh=MWw4bWNjbnV5YjE2Nw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagramLink}
              aria-label="Наш Instagram"
            >
              <img
                width={"40px"}
                height={"40px"}
                src="/images/iconInstagram.png"
                alt="Instagram"
                className={styles.instagramIcon}
              />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterMap;
