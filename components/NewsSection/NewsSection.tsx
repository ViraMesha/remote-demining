"use client";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { useMyMedia } from "@/hooks/useMedia";
import { getNews } from "@/lib/admin/content";

import { AdminNewsValues } from "../AdminNewsPage/AdminNewsPage";
import Loader from "../Loader/Loader";
import SectionContainer from "../SectionContainer/SectionContainer";
import Slider from "../Slider/Slider";

import NewsItem from "./NewsItem/NewsItem";

const NewsSection: React.FC = () => {
  const [perPage, setPerPage] = useState<number>(1);
  const { isMobile, isTablet, isDesktop } = useMyMedia();
  const [newsData, setNewsData] = useState<AdminNewsValues[]>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchNewsData = async () => {
    try {
      setIsLoading(true);
      const data = await getNews();
      setIsLoading(false);
      const newsData = data?.map((news): AdminNewsValues => {
        return {
          id: news._id,
          image: news.images[0],
          title: news.data.title,
          img_description: news.data.img_description,
          text: news.data.text,
          link: news.data.link,
          date: news.data.date,
        };
      });
      setNewsData(newsData);
    } catch (e) {
      setIsLoading(false);
      console.error(e);
      toast.error("Упс..., щось пішло не так!");
    }
  };

  useEffect(() => {
    isMobile && setPerPage(1);
    isTablet && setPerPage(2);
    isDesktop && setPerPage(3);
    fetchNewsData();
  }, [isMobile, isTablet, isDesktop]);

  return (
    <>
      {isLoading && <Loader />}
      {newsData && (
        <SectionContainer
          titleMargin
          title="Наші новини"
          description="Науковці НАН України є постійними учасниками конференцій і форумів в сфері високотехнологічних розробок і найсучасніших методів галузі інженерії"
        >
          <Slider
            slidesPerPage={perPage}
            slides={newsData?.map((elem) => (
              <NewsItem key={elem.id} {...elem} />
            ))}
          />
        </SectionContainer>
      )}
    </>
  );
};

export default NewsSection;
