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
          <img
          
            alt={"новые локации"}
            src="\images\free-icon-location.png"
            width={"40px"}
            height={"40px"}
            color="white"
          />
          Калина парк,
        </h2>
        <h2>
          {" "}
          <img
            alt={"новые локации"}
            src="\images\free-icon-location.png"
            width={"40px"}
            height={"40px"}
          />{" "}
          Вилла парк,
        </h2>
        <h2>
          {" "}
          <img
            alt={"новые локации"}
            src="\images\free-icon-location.png"
            width={"40px"}
            height={"40px"}
          />{" "}
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
