import { useState } from "react";
import styles from "./index.module.css";

const ConstructionHero = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalName) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);

  const modalContent = {
    materials: {
      title: "Экологические материалы",
      content: [
        {
          title: "Древесина FSC",
          description:
            "Сертифицированная древесина из ответственных источников",
          icon: "🌳",
        },
        {
          title: "Натуральные утеплители",
          description: "Эковата, минеральная вата, пробковые плиты",
          icon: "🧱",
        },
        {
          title: "Безопасные краски",
          description: "Краски без летучих органических соединений (ЛОС)",
          icon: "🎨",
        },
        {
          title: "Переработанные материалы",
          description: "Используем вторичное сырье где это возможно",
          icon: "♻️",
        },
      ],
    },
    projects: {
      title: "Сложные проекты",
      content: [
        {
          title: "Индивидуальное проектирование",
          description: "Создаем уникальные проекты под ваши потребности",
          icon: "📐",
        },
        {
          title: "Сложный рельеф",
          description: "Строим на участках с любым уклоном и особенностями",
          icon: "⛰️",
        },
        {
          title: "Нестандартные решения",
          description:
            "Реализуем архитектурные и инженерные задачи любой сложности",
          icon: "💡",
        },
      ],
    },
    communications: {
      title: "Коммуникации",
      content: [
        {
          title: "Автономные системы",
          description: "Солнечные панели, септики, скважины",
          icon: "⚡",
        },
        {
          title: "Умный дом",
          description: "Интеграция современных систем управления",
          icon: "🏠",
        },
        {
          title: "Энергоэффективность",
          description: "Системы рекуперации и энергосбережения",
          icon: "🔋",
        },
      ],
    },
  };

  return (
    <>
      <div className={styles.global}>
        <div className={styles.blockText}>
          <h1>
            построим дом
            <br />
            <span>вашей мечты!</span>
          </h1>
          <div className={styles.blockInfo}>
            <div
              className={styles.blockAco}
              onClick={() => openModal("materials")}
              style={{ cursor: "pointer" }}
            >
              <img
                color={"white"}
                width={"40px"}
                height={"40px"}
                src="/images/iconBook.png"
                alt="Иконка книги"
              />
              <p>
                экологические <br />
                материалы
              </p>
            </div>

            <div
              className={styles.blockProjects}
              onClick={() => openModal("projects")}
              style={{ cursor: "pointer" }}
            >
              <img
                color={"white"}
                width={"40px"}
                height={"40px"}
                src="/images/iconHouse.png"
                alt="Иконка дома"
              />
              <p>
                реализуем самые <br />
                сложные проекты
              </p>
            </div>

            <div
              className={styles.blockComunications}
              onClick={() => openModal("communications")}
              style={{ cursor: "pointer" }}
            >
              <img
                color={"white"}
                width={"40px"}
                height={"40px"}
                src="/images/iconsCommunications.png"
                alt="Иконка лампочки"
              />
              <p>
                установка <br />
                коммуникаций
              </p>
            </div>
          </div>
        </div>
        <a
          href="https://www.instagram.com/doma_top_essentuki?igsh=MWw4bWNjbnV5YjE2Nw%3D%3D&utm_source=qr"
          className={styles.directLink}
        >
          Пишите в Direct!
        </a>
      </div>

      {/* Общее модальное окно */}
      {activeModal && modalContent[activeModal] && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.modalClose} onClick={closeModal}>
              ×
            </button>
            <h2>{modalContent[activeModal].title}</h2>

            <div className={styles.featuresGrid}>
              {modalContent[activeModal].content.map((item, index) => (
                <div key={index} className={styles.featureItem}>
                  <div className={styles.featureIcon}>{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>

            <button className={styles.modalButton} onClick={closeModal}>
              Закрыть
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ConstructionHero;
