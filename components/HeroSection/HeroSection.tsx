"use client";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useToggle } from "usehooks-ts";

import { getSliders } from "@/lib/admin/slider";

import { AdminSliderData } from "../AdminSlider/AdminSlider";
import Donate from "../Donate/Donate";
import Modal from "../Modal/Modal";
import Slider from "../Slider/Slider";

import HeroSlide from "./HeroSlide/HeroSlide";
import { heroData } from "./heroData";

import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const [isModalOpen, toggleModal] = useToggle(false);
  const [slidesData, setSlidesData] = useState<AdminSliderData[] | undefined>();

  const slides =
    slidesData &&
    slidesData.map((item) => (
      <HeroSlide item={item} key={item.id} toggleModal={toggleModal} />
    ));

  const defaultSlides = heroData.map((item) => (
    <HeroSlide
      item={item}
      key={item.id}
      toggleModal={toggleModal}
      defaultData
    />
  ));

  const fetchData = async () => {
    try {
      const data = await getSliders();
      const slides = data?.map((slide): AdminSliderData => {
        return {
          id: slide._id,
          img: slide.images[0],
          title: slide.data.title,
          text: slide.data.text,
        };
      });
      setSlidesData(slides);
    } catch (error) {
      console.log(error);
      toast.error("Упс..., щось пішло не так!");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section id="hero" className={styles.container}>
        {!slides ? (
          <Slider
            slidesPerPage={1}
            slides={defaultSlides}
            dots
            infinite
            autoplay
          />
        ) : (
          <Slider slidesPerPage={1} slides={slides} dots infinite autoplay />
        )}

        {isModalOpen && (
          <Modal isBigModal toggleModal={toggleModal} isModalOpen={isModalOpen}>
            <Donate />
          </Modal>
        )}
      </section>
    </>
  );
};

export default HeroSection;
