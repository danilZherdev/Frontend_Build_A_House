import React from "react";
import ConstructionHero from "../ConstructionHero";
import DiscountBanner from "../DiscountBanner";
import KeyframeEffect from "../KeyFeatures";
import BlockEstateCard from "../BlockEstateCard";
import ProjectStatus from "../ProjectsStatus";
import styles from "./index.module.css";
import FooterMap from "../FooterMap";

const Main = () => {
  return (
    <div className={styles.ContainerMain}>
      <ConstructionHero />
      <DiscountBanner />
      <KeyframeEffect />
      <BlockEstateCard />
      <ProjectStatus />
      <FooterMap />
    </div>
  );
};

export default Main;
