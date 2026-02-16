import { useState } from "react";
import MailService from "../../services/mailService";
import styles from "./index.module.css";

const ProjectStatus = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "", // изменил fullName на name для соответствия API
    phone: "",
    message: "", // изменил question на message
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Сбрасываем ошибки при изменении полей
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Валидация
    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.message.trim()
    ) {
      setError("Все поля обязательны для заполнения");
      return;
    }

    // Валидация телефона (простой вариант)
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]+$/;
    if (!phoneRegex.test(formData.phone)) {
      setError("Введите корректный номер телефона");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Отправка данных через сервис
      const response = await MailService.sendMail({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim(),
      });

      console.log("Ответ сервера:", response);

      // Успешная отправка
      setSuccess(true);

      // Сброс формы через 3 секунды
      setTimeout(() => {
        setFormData({ name: "", phone: "", message: "" });
        setShowForm(false);
        setSuccess(false);
      }, 3000);
    } catch (err) {
      console.error("Ошибка отправки:", err);
      setError(err.message || "Ошибка при отправке заявки. Попробуйте позже.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({ name: "", phone: "", message: "" });
    setShowForm(false);
    setError(null);
    setSuccess(false);
  };

  return (
    <div className={styles.globalContainer} id="ProjectStatus">
      <div className={styles.ContaynerText}>
        <h1>Новые локации</h1>
        <h2>
          <a href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9F%D1%8F%D1%82%D0%B8%D0%B3%D0%BE%D1%80%D1%81%D0%BA%D0%B0%D1%8F,+187,+%D0%95%D1%81%D1%81%D0%B5%D0%BD%D1%82%D1%83%D0%BA%D0%B8,+%D0%A1%D1%82%D0%B0%D0%B2%D1%80%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9+%D0%BA%D1%80%D0%B0%D0%B9,+357361/@44.0552562,42.9418932,350m/data=!3m1!1e3!4m15!1m8!3m7!1s0x40579cc75f307717:0x590e3eb706fe11b!2z0YPQuy4g0J_Rj9GC0LjQs9C-0YDRgdC60LDRjywgMTg3LCDQldGB0YHQtdC90YLRg9C60LgsINCh0YLQsNCy0YDQvtC_0L7Qu9GM0YHQutC40Lkg0LrRgNCw0LksIDM1NzM2MQ!3b1!8m2!3d44.0555122!4d42.9415218!16s%2Fg%2F11fssyzz9z!3m5!1s0x40579cc75f307717:0x590e3eb706fe11b!8m2!3d44.0555122!4d42.9415218!16s%2Fg%2F11fssyzz9z?entry=ttu&g_ep=EgoyMDI2MDIxMC4wIKXMDSoASAFQAw%3D%3D">
            <img
              alt={"новые локации"}
              src="\images\free-icon-location.png"
              width={"40px"}
              height={"40px"}
              color="white"
            />
          </a>
          Калина парк,
        </h2>
        <h2>
          <a href="https://www.google.com/maps/@44.0555006,42.8386739,134m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI2MDIxMC4wIKXMDSoASAFQAw%3D%3D">
            <img
              alt={"новые локации"}
              src="\images\free-icon-location.png"
              width={"40px"}
              height={"40px"}
            />{" "}
          </a>
          Вилла парк,
        </h2>
        <h2>
          <a href="https://www.google.com/maps/place/%D0%A1%D1%83%D0%B2%D0%BE%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B5+%D1%88.,+1,+%D0%95%D1%81%D1%81%D0%B5%D0%BD%D1%82%D1%83%D0%BA%D0%B8,+%D0%A1%D1%82%D0%B0%D0%B2%D1%80%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9+%D0%BA%D1%80%D0%B0%D0%B9,+357601/@44.0572742,42.8301281,485m/data=!3m1!1e3!4m6!3m5!1s0x405784facb6b005b:0xd2ab642915884e!8m2!3d44.0570342!4d42.8323819!16s%2Fg%2F11j8sfpttv?entry=ttu&g_ep=EgoyMDI2MDIxMC4wIKXMDSoASAFQAw%3D%3D">
            <img
              alt={"новые локации"}
              src="\images\free-icon-location.png"
              width={"40px"}
              height={"40px"}
            />{" "}
          </a>
          Поселок Новый
        </h2>
        <p>
          Земельные участки <br />
          в собстевенность
          <br />
          от 4 сот. до 20 сот.
          <span>от 2 млн.рублей в рассрочку</span>
        </p>
        {/* <img
          width={"30%"}
          height={"30%"}
          alt="планировка квартиры"
          src="/images/iconApartment.png"
        /> */}
      </div>

      {showForm ? (
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <h3>Оставить заявку</h3>

          {success && (
            <div className={styles.successMessage}>
              ✅ Заявка успешно отправлена! Мы свяжемся с вами в ближайшее
              время.
            </div>
          )}

          {error && <div className={styles.errorMessage}>❌ {error}</div>}

          <div className={styles.formGroup}>
            <label htmlFor="name">ФИО:</label>
            <input
              style={{ color: "black" }}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              disabled={isLoading || success}
              placeholder="Иванов Иван Иванович"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Номер телефона:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              disabled={isLoading || success}
              placeholder="+7 (999) 123-45-67"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Ваш вопрос:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              disabled={isLoading || success}
              placeholder="Задайте свой вопрос..."
              rows="3"
            />
          </div>

          <div className={styles.formButtons}>
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={isLoading || success}
            >
              {isLoading ? "Отправка..." : "Отправить заявку"}
            </button>
            <button
              type="button"
              className={styles.cancelBtn}
              onClick={handleCancel}
              disabled={isLoading}
            >
              Отмена
            </button>
          </div>
        </form>
      ) : (
        <button
          className={styles.showFormBtn}
          onClick={() => setShowForm(true)}
        >
          Оставить заявку
          <br /> на подбор дома
        </button>
      )}
    </div>
  );
};

export default ProjectStatus;
