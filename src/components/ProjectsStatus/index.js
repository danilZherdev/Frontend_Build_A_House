// import styles from "./index.module.css";

// const ProjectStatus = () => {
//   return (
//     <div className={styles.globalContainer}>
//       <div className={styles.ContaynerText}>
//         <h1>ЖК Спортивный парк </h1>
//         <p>
//           Квартиры в Краснодаре <br />
//           с выездом к морю без пробок <br />
//           <span>от 1.5 млн.рублей в рассрочку </span>
//         </p>
//         <img
//           width={"30%"}
//           height={"30%"}
//           alt="планировка квартиры"
//           src="/images/iconApartment.png"
//         />
//       </div>
//       <a href=" ">
//         Оставить заявку
//         <br /> на подбор квартиры
//       </a>
//     </div>
//   );
// };
// export default ProjectStatus;

import { useState } from "react";
import styles from "./index.module.css";

const ProjectStatus = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    question: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь обычно отправка данных на сервер
    console.log("Данные формы:", formData);
    alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    // Сброс формы и закрытие
    setFormData({ fullName: "", phone: "", question: "" });
    setShowForm(false);
  };

  return (
    <div className={styles.globalContainer}>
      <div className={styles.ContaynerText}>
        <h1>
          Калина парк,
          <br />
          Вила парк,
          <br />
          Поселок Новый
        </h1>
        <p>
          Дома в Ессентуках <br />
          <br />
          <span>от 1.5 млн.рублей в рассрочку</span>
        </p>
        <img
          width={"30%"}
          height={"30%"}
          alt="планировка квартиры"
          src="/images/iconApartment.png"
        />
      </div>

      {showForm ? (
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <h3>Оставить заявку</h3>

          <div className={styles.formGroup}>
            <label htmlFor="fullName">ФИО:</label>
            <input
              style={{ color: "black" }}
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
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
              placeholder="+7 (999) 123-45-67"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="question">Ваш вопрос:</label>
            <textarea
              id="question"
              name="question"
              value={formData.question}
              onChange={handleInputChange}
              required
              placeholder="Задайте свой вопрос..."
              rows="3"
            />
          </div>

          <div className={styles.formButtons}>
            <button type="submit" className={styles.submitBtn}>
              Отправить заявку
            </button>
            <button
              type="button"
              className={styles.cancelBtn}
              onClick={() => {
                setFormData({ fullName: "", phone: "", question: "" });
                setShowForm(false);
              }}
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
          <br /> на подбор квартиры
        </button>
      )}
    </div>
  );
};

export default ProjectStatus;
