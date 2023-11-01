"use client";

import { FC } from "react";
import { useWindowSize } from "usehooks-ts";

import Button from "@/components/Button/Button";

import type { HeroData } from "../heroData";

import styles from "./HeroSlide.module.css";

interface HeroSlideProps {
  item: HeroData;
  toggleModal: () => void;
  defaultData?: boolean;
}

const HeroSlide: FC<HeroSlideProps> = ({ item, toggleModal, defaultData }) => {
  const { width } = useWindowSize();
  return (
    <div>
      <div
        className={styles["slide"]}
        style={{
          background: defaultData
            ? `lightgray url(https://remote-demining.onrender.com/images/${item.img})`
            : `lightgray url(https://remote-demining.onrender.com/images/${item.img})`,
        }}
      >
        <div className={styles.text_container}>
          <h2 className={styles["title"]}>{item.title}</h2>
          <p className={styles["caption"]}>{item.text}</p>
          <Button
            className={styles.slideBtn}
            onClick={toggleModal}
            isFullWidth={width < 768}
          >
            Підтримати
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
