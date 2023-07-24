import React from 'react';
import SubscribeFooter from '../../components/subscribeFooter/SubscribeFooter';
import HomeBanner from '../../components/homeBanner/HomeBanner';
import { PostHashtag, PostFoot, PostFootReaction, PostShare } from './DetailPageStyle';

const DetailPage = () => {
    return (
        <section className="post is-sticky">
            <div className="post-scrollwrap">
                <header className="post-head">
                    <a className="post-head-runninghead" href="/tag/domestic-issue">사회</a>
                    <h2 className="post-head-headline">'신종 펫숍' 사기 행각</h2>
                    <time className="post-head-date">2023/07/21</time>
                    <i className="icon-bullet"></i>
                    <div className="post-head-progress" role="progressbar" aria-valuenow="" style={{ width: '33.2779%' }}></div>
                </header>
                <div className="post-container">
                    <div className="post-featured">
                        <img src="https://d2phebdq64jyfk.cloudfront.net/media/image/article/thumbnail/%E1%84%83%E1%85%A1%E1%86%AB%E1%84%89%E1%85%B5%E1%86%AB_2_2O2teop.jpg" alt="" />

                    </div>
                    <div className="post-body"><p>몇 달 전 경기도 여주시의 한 야산에서 동물 118마리가 죽은 채 발견됐어요. 옷을 입고 목걸이·하네스까지 한 채 싸늘히 식어 있었다고. 이는 ‘신종 펫숍’으로 불리는&nbsp;
                        <a className="outer-link" href="https://www.hani.co.kr/arti/society/society_general/1099964.html" target="_blank">업체가 벌인 짓</a>으로 드러났어요.</p>
                        <h2>신종 펫숍? 어떻게 된 거야? 😰</h2>
                        <p>동물을 파양하는 반려인을 대상으로 벌어진 사기 행각이에요. 이 업체들은 ‘안락사 없는 보호소’라는 이름을 내걸고 활동했는데요. 동물을 파양하는 반려인에게 "새로운 곳에 입양 갈 때까지 보호하겠다"고 약속하며 수백에서 수천만 원에 이르는 돈을 받았어요. 이후 동물처리업자에 동물을 넘겨 새 반려인인 척 사진을 찍어 보내기도 하고, 결국 죽이게 한 것. 이번 사건을 파헤친 단체는 엄벌을 내려달라며&nbsp;
                            <a className="outer-link" href="https://docs.google.com/forms/d/e/1FAIpQLSdqunTzcgTUBnb4TBz2zEdZlJNtn564Jdor1kLNihsOTkapTw/viewform" target="_blank">탄원서를 받고 있어요</a>.
                        </p>
                        <h2>이게 무슨 일이래...</h2>
                        <p>처음 있는 일은 아니에요. 파양동물을 다루는 신종 펫숍은 2020년부터&nbsp;<a className="outer-link" href="https://www.hani.co.kr/arti/animalpeople/human_animal/948092.html" target="_blank">쭉 논란이었지만</a>, 계속 법의 사각지대에 놓여있었어요. 펫숍에서 동물을 파는 것은 ‘동물판매업‘으로, 반려동물 호텔이 잠시 동물을 맡아주는 건 ‘동물위탁관리업‘으로 분류되어 법으로 관리되는데요. 이와 달리 유료로 파양동물을 받는 업체에 대한 법적 규정은 아예 없었던 것. 얼마 전까지만 해도 반려인이 마음을 바꿔도 동물을 되찾거나 돈을 돌려받을 수 없는 등 부당한 일도 많았다고.</p>
                        <p>이에 2021년에 파양 과정까지 법으로 관리하도록 ‘동물입양중개업’ 법을 바꾸려는 움직임도 있었는데요. ‘오히려 마음 놓고 파양할 수 있다’는 이유 때문에 이뤄지지 않았어요. 그러는 동안 경기도 양평군에서 돈을 받고 유기견 등을 데려온 후, 1200여 마리의 동물을&nbsp;
                            <a className="outer-link" href="https://news.jtbc.co.kr/article/article.aspx?news_id=NB12135819" target="_blank">굶어 죽게 한 사건</a>&nbsp;등이 계속 일어났고요.</p>
                        <h2>대체 어떻게 해결할 수 있을까 😔</h2>
                        <p>(1) 파양업체가 파양동물에 대해서 이력을 남기도록 하고 지방자치단체가 이를 확인할 수 있게 해야 한다는 목소리가 나와요. 데려가서 잘 관리하고 있는지, 입양은 잘 보냈는지 지켜보자는 것. (2) 결국 동물을 인위적으로 번식시키고&nbsp;
                            <a className="orange_link inner-link" href="/post/yD84G6">동물을 물건처럼</a>&nbsp;사고팔지 못하게 해야 한다는 의견도 있어요. (3) 개인도 돈과 시간, 마음의 여유가 있는지 냉정하게 판단해서 반려동물 입양을 결정해야 해요. 반려인 5명 중 1명이&nbsp;
                            <a className="outer-link" href="https://www.dailyvet.co.kr/news/policy/180517" target="_blank">파양을 고민</a>한 적 있고, 2022년에 집계된 유기동물 수만&nbsp;<a className="outer-link" href="https://www.dailyvet.co.kr/news/animalwelfare/184474" target="_blank">11만여 마리</a>에 달한다고.
                        </p>
                    </div>
                </div>
            </div>
            <PostHashtag className="post-hashtag">
                <a className="post-hashtag-item" href="/search/posts?keyword=사회">#사회</a>
                <a className="post-hashtag-item" href="/search/posts?keyword=동물">#동물</a>
                <a className="post-hashtag-item" href="/search/posts?keyword=사건사고">#사건사고</a>
            </PostHashtag>
            <PostFoot className="post-foot">
                <PostFootReaction className="post-foot-reaction">
                    <button className="post-foot-reaction-button ">
                        <span role="img" aria-label="">🧡</span>
                        좋았슴 <b className="post-foot-reaction-button-count">5</b>
                    </button>
                </PostFootReaction>
                <PostShare className="post-share">
                    <div className="post-share-button">
                        <button aria-label="facebook" className="react-share__ShareButton">
                            <svg viewBox="0 0 64 64" width="32" height="32">
                                <rect width="64" height="64" rx="0" ry="0" fill="#3b5998"></rect>
                                <path d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z" fill="white">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div className="post-share-button">
                        <button aria-label="twitter" className="react-share__ShareButton">
                            <svg viewBox="0 0 64 64" width="32" height="32">
                                <rect width="64" height="64" rx="0" ry="0" fill="#00aced"></rect>
                                <path d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z" fill="white">
                                </path>
                            </svg>
                        </button>
                    </div>
                </PostShare>
            </PostFoot>
            <SubscribeFooter />
            <HomeBanner />
        </section >
    );
};

export default DetailPage;
