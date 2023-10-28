"use client";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useToggle } from "usehooks-ts";

import { getSliders } from "@/lib/admin/slider";
import { ProjectsSlidersData } from "@/lib/types/ProjectsSlidersData";

import { AdminSliderData } from "../AdminSlider/AdminSlider";
import Donate from "../Donate/Donate";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";
import Slider from "../Slider/Slider";

import HeroSlide from "./HeroSlide/HeroSlide";

import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const [isModalOpen, toggleModal] = useToggle(false);
  const [slidesData, setSlidesData] = useState<AdminSliderData[] | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const slides =
    slidesData &&
    slidesData.map((item) => (
      <HeroSlide item={item} key={item.id} toggleModal={toggleModal} />
    ));
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await getSliders();
      setIsLoading(false);
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
      setIsLoading(false);
      toast.error("Упс..., щось пішло не так!");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {slides && (
        <section id="hero" className={styles.container}>
          <Slider slidesPerPage={1} slides={slides} dots />
          {isModalOpen && (
            <Modal
              isBigModal
              toggleModal={toggleModal}
              isModalOpen={isModalOpen}
            >
              <Donate />
            </Modal>
          )}
        </section>
      )}
    </>
  );
};

export default HeroSection;
