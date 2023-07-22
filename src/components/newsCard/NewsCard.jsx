import React from 'react';
import CateEmoji from '../../assets/emojis/categoryEmojis';
import { NewsList, NewsCardStyle, NewsCardImgWrap, NewsCardBody } from './NewsStyle';

const NewsCard = ({ newsData }) => {
    return (
        <NewsList>
            {newsData &&
                newsData.map((news, idx) => {
                    return news.img ? (
                        <NewsCardStyle to={'/'} key={`news${idx}`}>
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
                        </NewsCardStyle>
                    ) : (
                        <NewsCardStyle to={'/'} key={`news${idx}`}>
                            <NewsCardBody>
                                <CateEmoji.Culture
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
                        </NewsCardStyle>
                    );
                })}
        </NewsList>
    );
};

export default NewsCard;
