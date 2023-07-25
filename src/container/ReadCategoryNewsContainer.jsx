import React, { useState, useEffect, useMemo } from "react";
import NewsCard from "../components/newsCard/NewsCard";
import CateEmoji from "../assets/emojis/categoryEmojis";
import NavBar from "../layout/NavBar/NavBar";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Button from "../components/common/button/Button";
import { PageTitle, ButtonBox } from "../components/newsPage/NewsPageStyle";
import { useQuery, useQueryClient } from "react-query";

// import useNewsData from '../hooks/useNewsData';
import { getCategoryNews } from "../api/news";
const mockDate = [
  {
    title: "우리가 알던 중국 경제가 아냐",
    img: "/imgs/img1.jpeg",
    category: "경제",
    date: "2023.07.21",
  },
  {
    title: "우리가 알던 중국 경제가 아냐",
    img: "/imgs/img1.jpeg",
    category: "경제",
    date: "2023.07.21",
  },
];

const categorys = [
  { link: "politics", tag: "정치", emoji: "Politics", idx: 0 },
  { link: "money", tag: "경제", emoji: "Money", idx: 1 },
  { link: "world", tag: "국제", emoji: "World", idx: 2 },
  { link: "tech", tag: "증권", emoji: "Tech", idx: 3 },
  { link: "work", tag: "산업", emoji: "Work", idx: 4 },
  { link: "echo", tag: "부동산", emoji: "Echo", idx: 5 },
  { link: "human", tag: "오피니언", emoji: "Human", idx: 6 },
  { link: "social", tag: "사회", emoji: "Social", idx: 7 },
  { link: "culture", tag: "문화", emoji: "Culture", idx: 8 },
  { link: "life", tag: "연예", emoji: "Life", idx: 9 },
];

//TODO : 카테고리 페이지 작업중이었음
const CategoryReadContainer = () => {
  const { category } = useParams();
  const cate = categorys.find((cate) => cate.tag === category);
  const cateEmojiname = cate.emoji;
  const Emoji = CateEmoji[cateEmojiname];

  const [currentPage, setCurrentPage] = useState(1);
  const [newsData, setNewsData] = useState(null);
  const [totalPage, setTotalPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  const { isLoading, isError, refetch } = useQuery(
    ["cateNews", currentPage],
    () => getCategoryNews({ currentPage, category }),
    {
      onSuccess: (response) => {
        setCurrentPage(1);
        setNewsData([]);
        setNewsData((prevData) => (prevData ? [...prevData, ...response.newsList] : response.newsList));
        setTotalPage(response.totalPages);
        setIsFetching(false);
      },
    }
  );

  useEffect(() => {
    refetch();
  }, [category]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <NavBar categoryIdx={cate.idx} />
      <div className="center">
        <PageTitle>
          {Emoji && <Emoji $size={"2rem"} />}
          {cate.tag}
        </PageTitle>
        <NewsCard newsData={newsData} $borderTop />
        {currentPage !== totalPage && (
          <ButtonBox>
            <Button size="md" theme="moreBtn" onClickEvent={handleLoadMore} disabled={isFetching}>
              더보기
            </Button>
          </ButtonBox>
        )}
      </div>
    </>
  );
};

export default CategoryReadContainer;
