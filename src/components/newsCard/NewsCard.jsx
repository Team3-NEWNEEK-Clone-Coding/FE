import React, { useState, useRef, useEffect } from 'react';
import CateEmoji from '../../assets/emojis/categoryEmojis';
import categorys from '../../assets/categoryInfo';
import { NewsList, NewsCardStyle, NewsCardImgWrap, NewsCardBody } from './NewsStyle';
import { Link } from 'react-router-dom';
const NewsCard = ({ newsData, $borderTop }) => {
    return (
        <NewsList>
            {newsData &&
                newsData.map((news, idx) => {
                    const cate = categorys.find((cate) => cate.tag === news.category);
                    const cateEmojiname = cate.emoji;
                    const Emoji = CateEmoji[cateEmojiname];
                    return news.img ? (
                        <NewsCardStyle
                            key={`news${idx}`}
                            className={$borderTop ? 'border-top-style' : ''}
                        >
                            <Link to={`/detail/${news.id}`}>
                                <NewsCardImgWrap>
                                    <img src={news.img} alt="" />
                                </NewsCardImgWrap>
                                <NewsCardBody>
                                    <h2 className="news-title">{news.title}</h2>
                                    <div className="new-info">
                                        <time>{news.date}</time>
                                        <i className="category-tag">{news.category}</i>
                                    </div>
                                </NewsCardBody>
                            </Link>
                        </NewsCardStyle>
                    ) : (
                        <NewsCardStyle
                            key={`news${idx}`}
                            className={$borderTop ? 'border-top-style' : ''}
                        >
                            <Link to={`/detail/${news.id}`}>
                                <NewsCardBody>
                                    <Emoji
                                        $size={'3rem'}
                                        $margin={'0 0 1.5rem'}
                                        $display={'block'}
                                    />
                                    <h2 className="news-title">{news.title}</h2>
                                    <p className="news-content">어서와요 뉴니커 매주 피자를</p>
                                    <div className="new-info">
                                        <time>{news.date}</time>
                                        <i className="category-tag">{news.category}</i>
                                    </div>
                                </NewsCardBody>
                            </Link>
                        </NewsCardStyle>
                    );
                })}
        </NewsList>
    );
};

export default NewsCard;
