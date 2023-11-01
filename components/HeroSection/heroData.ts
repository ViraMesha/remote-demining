import heroBg1 from "@/public/images/hero/slide_1.png";
import heroBg2 from "@/public/images/hero/slide_2.jpg";
import heroBg3 from "@/public/images/hero/slide_3.jpg";

export interface HeroData {
  id: string;
  img?: string;
  title: string;
  text: string;
}

export const heroData: HeroData[] = [
  {
    id: "3",
    title: "Напрямки роботи ДП",
    text: "Отримайте всі переваги членства в нашій організації - від інформації про заходи до швидкого рецензування наукових робіт",
    img: heroBg1.src,
  },
  {
    id: "2",
    title: "Напрямки роботи ДП",
    text: "Отримайте всі переваги членства в нашій організації - від інформації про заходи до швидкого рецензування наукових робіт",
    img: heroBg2.src,
  },
  {
    id: "3",
    title: "Напрямки роботи ДП",
    text: "Отримайте всі переваги членства в нашій організації - від інформації про заходи до швидкого рецензування наукових робіт",
    img: heroBg3.src,
  },
];
