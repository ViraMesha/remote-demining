import News_one from "@/public/images/news/news1.png";
import News_two from "@/public/images/news/news2.png";
import News_three from "@/public/images/news/news3.png";
export interface News {
  id: string;
  text: string;
  image: string;
  title: string;
  link: string;
  date: string;
  img_description: string;
}
const defaultNewsData: News[] = [
  {
    id: "1",
    image: News_one.src,
    img_description: "Огорожений шматок землі, на якому лежать міни",
    text: "In a year and a half of conflict, land mines — along with unexploded bombs, artillery shells and other deadly byproducts of war — have contaminated a swath of Ukraine ...",
    title:
      "Ukraine is now the most mined country. It will take decades to make safe. — The Washington Post.",
    link: "https://www.washingtonpost.com/world/2023/07/22/ukraine-is-now-most-mined-country-it-will-take-decades-make-safe/",
    date: "22 липня 2023",
  },
  {
    id: "2",
    image: News_two.src,
    img_description: "група людей, що стоять у кімнаті",
    text: "Захід відбувся 17 травня 2023 року в Києві...",
    title:
      "Науковці НАН України представили свої розробки на форумі «Безпека критичної інфраструктури та гуманітарна протимінна діяльність»",
    link: "https://www.nas.gov.ua/UA/Messages/Pages/View.aspx?MessageID=10151",
    date: "25 травня 2023",
  },
  {
    id: "3",
    image: News_three.src,
    img_description: "жовто-чорний знак",
    text: "Науковці Академії продемонструють свої розр...",
    title:
      "Установи НАН України візьмуть участь у форумі «Безпека критичної інфраструктури та гуманітарна протимінна діяльність»",
    link: "https://www.nas.gov.ua/UA/Messages/Pages/View.aspx?MessageID=10076",
    date: "12 травня 2023",
  },
];

export default defaultNewsData;
