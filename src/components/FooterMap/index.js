import styles from "./index.module.css";

const FooterMap = () => {
  return (
    <div className={styles.globalContainer} id="footer">
      <div className={styles.mapSection}>
        <h2>Мы находимся здесь!</h2>
        <div className={styles.mapСontainer}>
          <iframe
            title="Адрес: улица Буачидзе, д1, Ессентуки"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d485.45912286082756!2d42.84963311739602!3d44.0471169751858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4057848e61aeef2b%3A0x2836681e4c3d378e!2z0JHRg9Cw0YfQuNC00LfQtSDRg9C7LiwgMSwg0JXRgdGB0LXQvdGC0YPQutC4LCDQodGC0LDQstGA0L7Qv9C-0LvRjNGB0LrQuNC5INC60YDQsNC5LCAzNTc2MDE!5e0!3m2!1sru!2sru!4v1769168151127!5m2!1sru!2sru"
            width={"100%"}
            height={300}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className={styles.containerContact}>
        <h2> Как с нами связаться</h2>
        <div className={styles.contacts}>
          <div className={styles.containerTelephone}>
            <a href="tel:+79283277778">
              {" "}
              <img alt="Whatsapp" src="/images/icon-whatsapp.png" />
              <img alt="Телефон" src="/images/icon-telephone.png" />
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
                src="/images/icon-instagram.png"
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
