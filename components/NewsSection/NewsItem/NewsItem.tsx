import Link from "next/link";

import Card from "@/components/Card/Card";
import NavLink from "@/components/NavLink/NavLink";

import styles from "./NewsItem.module.css";

interface NewsItem {
  id: string;
  text: string;
  image: string;
  title: string;
  link: string;
  date: string;
  img_description: string;
  defaultNewsData?: boolean;
}

const NewsItem: React.FC<NewsItem> = ({
  id,
  image,
  text,
  title,
  link,
  date,
  img_description,
  defaultNewsData,
}) => {
  return (
    <div key={id} className={styles.item}>
      <Card
        img={
          defaultNewsData
            ? image
            : `https://remote-demining.onrender.com/images/${image}`
        }
        alt={img_description}
      >
        <div className={styles.content}>
          <div className={styles.text_content}>
            <Link
              href={link}
              className={styles.title}
              target="_blank"
              rel="noreferrer noopener"
            >
              {title}
            </Link>
            <p className={styles.text}>{text}</p>
          </div>
          <div className={styles.buttonWrapper}>
            <NavLink
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              isFullWidth
              isMoreInfo
            >
              Детальніше
            </NavLink>
            <div className={styles.date}>
              <p>{date}</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default NewsItem;
