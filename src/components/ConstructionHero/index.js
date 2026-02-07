import { useState } from "react";
import styles from "./index.module.css";

const ConstructionHero = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [showDesignGallery, setShowDesignGallery] = useState(false);

  const openModal = (modalName) => setActiveModal(modalName);
  const closeModal = () => {
    setActiveModal(null);
  };

  const leaveRequest = () => {
    closeModal();
    document.getElementById("ProjectStatus").scrollIntoView({
      behavior: "smooth",
    });
  };

  const modalOnClickContent = {
    //дизайн
    design: {
      title: "Дизайн",
      leftSubtitle: `Проектирование \n
                     интерьера \n
                     по индивидуальным \n
                     пожеланиям `,
      rightSubtitle: `— Планировка\n
                      — Проработка стилистики\n
                      — 3D визуализация проекта\n
                      — Полный комплект рабочих чертежей\n
                      — Разработка инженерных проектов\n
                      — Ведомости\n
                       `,
      leftImage: "/images/imagesDrawing/picture-design-Second.jpg",
      rightImage: "images/imagesDrawing/picture-design.jpg",
    },
    //строительство
    buildings: {
      title: "Строительство",
      leftSubtitle: `Разработка полностью,\n
                     под ключ от А до Я `,
      rightSubtitle: `— Дизайн и проектирование\n
                      — Инженерное проектирование\n
                      — Строительство и отделка\n
                      — Ввод в эксплуатацию\n
                      — Комплектация\n
                      — Обслуживание объектов`,
      leftImage: "/images/imagesDrawing/construction image one.jpg",
      rightImage: "/images/imagesDrawing/construction image Second.jpg",
    },
    //ремонт
    repair: {
      title: "Ремонт",
      leftSubtitle: `Строительство,\n
                     отделочные работы \n
                     и тех надзор`,
      rightSubtitle: `— Организация всех работ по проекту\n
                      — Соблюдение графика работ и сроков\n
                      — Гарантия на строительные работы\n
                      — Фиксированная сметная стоимость\n
                      — Своя команда инженеров и строителей`,
      leftImage: "/images/imagesDrawing/repair-one.jpg",
      rightImage: "/images/imagesDrawing/repair-second.jpg",
    },
  };

  return (
    <>
      <div className={styles.global}>
        <div className={styles.blockText}>
          <h1>
            Cтроим дома
            <br />
            на курорте
          </h1>
          <div className={styles.blockInfo}>
            <div
              className={styles.blockAco}
              onClick={() => openModal("design")}
              style={{ cursor: "pointer" }}
            >
              <p>Дизайн</p>
            </div>

            <div
              className={styles.blockProjects}
              onClick={() => openModal("buildings")}
              style={{ cursor: "pointer" }}
            >
              <p>Строительство</p>
            </div>

            <div
              className={styles.blockComunications}
              onClick={() => openModal("repair")}
              style={{ cursor: "pointer" }}
            >
              <p>Ремонт</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            document.getElementById("footer").scrollIntoView({
              behavior: "smooth",
            });
          }}
          className={styles.directLink}
        >
          Пишите в Direct!
        </button>
      </div>

      {activeModal && modalOnClickContent[activeModal] && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.modalClose} onClick={closeModal}>
              ×
            </button>
            <h2>{modalOnClickContent[activeModal].title}</h2>
            <div className={styles.modalDescription}>
              <p className={styles.paragrafOne}>
                {modalOnClickContent[activeModal].leftSubtitle}
              </p>
              <p className={styles.paragrafSecond}>
                {modalOnClickContent[activeModal].rightSubtitle}
              </p>
            </div>
            <div className={styles.modalImages}>
              <img
                alt=" "
                src={modalOnClickContent[activeModal].leftImage}
              />
              <img
                alt=" "
                src={modalOnClickContent[activeModal].rightImage}
              />
            </div>
            <button className={styles.modalButton} onClick={leaveRequest}>
              Оставить заявку
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ConstructionHero;
