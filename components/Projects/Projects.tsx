"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useWindowSize } from "usehooks-ts";

import { fetchProjectsCards } from "@/lib/projects/projectsData";

import { AdminCardsData } from "../AdminCards/AdminCards";
import Loader from "../Loader/Loader";
import SectionContainer from "../SectionContainer/SectionContainer";
import Slider from "../Slider/Slider";

import styles from "./Projects.module.css";

const Projects = () => {
  const [projectsData, setProjectsData] = useState<
    AdminCardsData[] | undefined
  >();
  const [isLoading, setIsLoading] = useState(false);
  const { width } = useWindowSize();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await fetchProjectsCards();
      setIsLoading(false);
      const cardData = data?.map((card): AdminCardsData => {
        return {
          id: card._id,
          img: card.images[0],
          title: card.data.title,
          text: card.data.text,
          img_description: card.data.img_description,
        };
      });
      setProjectsData(cardData);
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
      <SectionContainer
        title="Переваги проєкту "
        description="Територія може бути забруднена мінами, встановленими вручну, або розтяжками з вибуховими предметами. В такому випадку їх виявляють і знешкоджують вручну. Ми пропонуємо метод дистанційного розмінування без участі сапера і для будь-якого виду забруднення."
        titleMargin
      >
        {width >= 1280 && projectsData ? (
          <Slider
            slidesPerPage={3}
            slides={projectsData.map(({ id, img, title, text }) => (
              <li key={id} className={styles.card}>
                <div className={styles.image}>
                  <Image
                    src={`https://remote-demining.onrender.com/images/${img}`}
                    fill
                    alt={title}
                    sizes="437px"
                  />
                </div>
                <div className={styles.body}>
                  <h3 className={styles.title}>{title}</h3>
                  <p className={styles.text}>{text}</p>
                </div>
              </li>
            ))}
          />
        ) : (
          <ul className={styles.list}>
            {projectsData &&
              projectsData.map(({ id, img, title, text }) => (
                <li key={id} className={styles.card}>
                  <div className={styles.image}>
                    <Image
                      src={`https://remote-demining.onrender.com/images/${img}`}
                      fill
                      alt={title}
                      sizes="(min-width: 768px) 340px,
                    100vw"
                      quality={100}
                    />
                  </div>
                  <div className={styles.body}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.text}>{text}</p>
                  </div>
                </li>
              ))}
          </ul>
        )}
      </SectionContainer>
    </>
  );
};

export default Projects;
