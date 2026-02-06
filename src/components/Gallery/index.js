import styles from "./index.module.css";
import { useState, useEffect } from "react";
import { getHouseImages } from "../../utils/galleryConfig";

const Gallery = () => {
  const houseImages = getHouseImages();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Автоматическое слайд-шоу
  useEffect(() => {
    if (houseImages.length <= 1) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, houseImages.length]);

  const currentImage = houseImages[currentIndex] || {};

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === houseImages.length - 1 ? 0 : prev + 1,
      );
      setFade(true);
    }, 300);
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? houseImages.length - 1 : prev - 1,
      );
      setFade(true);
    }, 300);
  };

  return (
    <div
      className={`${styles.globalContainer} ${fade ? styles.fadeIn : styles.fadeOut}`}
      style={{
        backgroundImage:
          houseImages.length > 0
            ? `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${currentImage.src}')`
            : "url('/images/block-estate-card.jpg')",
      }}
    >
      <div className={styles.ContainerText}>
        <h1>
          СОБСТВЕНАЯ <br />
          СТУДИЯ ДИЗАЙНА
          <br />
          <span>____________</span>
          <p>
            Создай дом с уникальным
            <br />
            интерером
          </p>
        </h1>
      </div>
      {houseImages.length > 1 && (
        <>
          <button
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={prevSlide}
            aria-label="Предыдущее фото"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={nextSlide}
            aria-label="Следующее фото"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18L15 12L9 6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </>
      )}

      {/* Информация о текущем слайде */}
      {currentImage.title && houseImages.length > 1 && (
        <div className={styles.slideInfo}>
          <span>
            {currentImage.title} • {currentIndex + 1}/{houseImages.length}
          </span>
        </div>
      )}
    </div>
  );
};
export default Gallery;
