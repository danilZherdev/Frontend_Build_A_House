import styles from "./index.module.css";
import { useState } from "react";
import { getSaleHouseImages } from "../../utils/salesConfig";

const DiscountBanner = () => {
  const saleHouseImages = getSaleHouseImages();

  const [backgroundImage, setBackgroundImage] = useState(
    "url('/images/discount-banner-background.jpg')",
  );
  const [imagesDrawing, setImagesDrawing] = useState("");

  const [imageTextContent, setImageTextContent] = useState("");

  const [textPrefix, setTextPrefix] = useState("");

  const [ImageTextTitle, setImageTextTitle] = useState("");

  const [isDisplayText, setIsDisplayText] = useState(true);

  const changeBackground = (imageSrc) => {
    setBackgroundImage(
      `linear-gradient(rgba(0, 0, 0, 0.3)), url('${imageSrc}')`,
    );
  };
  const changeImagesDrawing = (url) => {
    setImagesDrawing(url);
  };
  const changeTextPrefix = (str) => {
    setTextPrefix(str);
  };
  const changeTextTitle = (str) => {
    setImageTextTitle(str);
  };
  const changeTextContent = (str) => {
    setImageTextContent(str);
  };
  return (
    <div className={styles.globalContainer} style={{ backgroundImage }}>
      <div className={styles.houseDescription}>
        <div>
          {isDisplayText && (
            <h1>
               Дома в продаже!
            </h1>
          )}
          <h2 className={styles.houseTitle}>
            <span marginRight={"10px"} className={styles.houseContent}>
              {textPrefix}
            </span>{" "}
            {ImageTextTitle}
          </h2>
          <span className={styles.houseContent}>{imageTextContent}</span>
        </div>
        {!isDisplayText && (
          <img
            // color="white"
            // width={"600px"}
            // height={"60px"}
            alt="изображение чертежа"
            src={imagesDrawing}
          />
        )}
      </div>

      <div className={styles.portfolioHouses}>
        <div className={styles.scrollContainer}>
          {saleHouseImages.map((house) => (
            <div
              key={`house-${house.id}`}
              className={styles.imageCard}
              onClick={() => {
                changeBackground(house.src);
                setIsDisplayText(false);
                changeTextContent(house.textContent);
                changeTextTitle(house.title);
                changeTextPrefix(house.prefix);
                changeImagesDrawing(house.drawing);
              }}
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
export default DiscountBanner;
