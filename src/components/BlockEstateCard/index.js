import { useState } from "react";
import styles from "./index.module.css";

const BlockEstateCard = () => {
  // Начальный фон
  const [backgroundImage, setBackgroundImage] = useState(
    "url('/images/blockEstateCardOne.jpg')"
  );

  // Массив картинок для скролла
  const houseImages = [
    {
      id: 1,
      src: "/images/gallery/galleryImagesOne.jpg",
      title: "Дом 1",
    },
    {
      id: 2,
      src: "/images/gallery/galleryImagesSecond.jpg",
      title: "Дом 2",
    },
    {
      id: 3,
      src: "/images/gallery/galleryImagesThird.jpg",
      title: "Дом 3",
    },
    {
      id: 4,
      src: "/images/gallery/galleryImagesFourth.jpg",
      title: "Дом 4",
    },
    {
      id: 5,
      src: "/images/gallery/galleryImagesFifth.jpg",
      title: "Дом 5",
    },
    {
      id: 6,
      src: "/images/gallery/galleryImagesSixth.jpg",
      title: "Дом 6",
    },
    {
      id: 7,
      src: "/images/gallery/galleryImagesSeventh.jpg",
      title: "Дом 7",
    },
    {
      id: 8,
      src: "/images/gallery/galleryImagesEighth.jpg",
      title: "Дом 8",
    },
  ];

  // Функция для смены фона
  const changeBackground = (imageSrc) => {
    setBackgroundImage(
      `linear-gradient(rgba(0, 0, 0, 0.3)), url('${imageSrc}')`
    );
  };

  return (
    <div className={styles.globalContainer} style={{ backgroundImage }}>
      <div className={styles.ContainerText}>
        <h1>
          Каменый дом <br />
          <span>в Ессентуках</span>
        </h1>
        <div className={styles.infoArea}>
          <img alt="иконка квадратный метр" src="/images/iconSquareMeter.png" />
          <p>
            60 м2 в предчистовой отделке <br />
            <span>от 2,6 млн.руб.</span>
          </p>
        </div>
      </div>

      {/* Горизонтальный скролл с картинками */}
      <div className={styles.portfolioHouses}>
        <div className={styles.scrollContainer}>
          {houseImages.map((house) => (
            <div
              key={house.id}
              className={styles.imageCard}
              onClick={() => changeBackground(house.src)}
            >
              <img src={house.src} alt={house.title} loading="lazy" />
              <div className={styles.imageOverlay}>
                <span>{house.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlockEstateCard;
