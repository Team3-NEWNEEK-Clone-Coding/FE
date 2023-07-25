import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getNewsDetail, postUpdateLike } from '../../api/newsDetail';
import { PostHead, ProgressBar, PostContainer, PostHashtag } from './DetailPageStyle';
import LoadingPage from '../../components/loadingPage/LoadingPage';
import DetailPageLike from '../../components/detailPageLike/DetailPageLike';
import DetailPageSubscribe from '../../components/detailPageSubscribe/DetailPageSubscribe';
import HomeBanner from '../../components/homeBanner/HomeBanner';

const DetailPage = () => {
    const { id } = useParams();
    const { data: post, isLoading, isError } = useQuery(['post', id], () => getNewsDetail(id));

    const queryClient = useQueryClient();
    const mutation = useMutation(postUpdateLike, {
        onSuccess: (data) => {
            queryClient.setQueriesData(['post', id], (old) => ({
                ...old,
                heart: data.heart,
            }));
        },
    });
    const likeButtonHandler = () => {
        mutation.mutate(id);
    }

    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    useEffect(() => {
        const scrollListener = () => {
            const element = document.documentElement;
            const totalHeight = element.scrollHeight - element.clientHeight;
            const scrollPosition = window.scrollY;
            const percentageScrolled = (scrollPosition / totalHeight) * 100;

            setScrollPercentage(percentageScrolled);

            if (window.scrollY > 0) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }
        };

        window.addEventListener('scroll', scrollListener);

        return () => window.removeEventListener('scroll', scrollListener);
    }, []);

    if (isLoading) {
        return <LoadingPage />;
    }

    if (isError) {
        return <div>An error occurred</div>;
    }

    return (
        <section className="post is-sticky">
            <div className="post-scrollwrap">
                <PostHead className="post-head">
                    {isScrolling && (
                        <ProgressBar>
                            <div className="post-head-progress" role="progressbar" aria-valuenow={scrollPercentage} style={{ width: `${scrollPercentage}%` }}></div>
                            <span className='progress-title'>{post.title}</span>
                        </ProgressBar>
                    )}
                    <a className="post-head-runninghead" href="/tag/domestic-issue">{post.category}</a>
                    <h2 className="post-head-headline">{post.title}</h2>
                    <time className="post-head-date">{post.date}</time>
                    <i className="icon-bullet"></i>
                </PostHead>
                <PostContainer className="post-container">
                    <div className="post-featured">
                        <img src={post.img} alt="" />
                    </div>
                    <div className="post-body" dangerouslySetInnerHTML={{ __html: post.content }} />
                </PostContainer>
            </div>
            <PostHashtag className="post-hashtag">
                <a className="post-hashtag-item" href={`/search/posts?keyword=${post.category}`}>#{post.category}</a>
            </PostHashtag>
            <DetailPageLike post={post} likeButtonHandler={likeButtonHandler} />
            <DetailPageSubscribe />
            <HomeBanner />
        </section >
    );
};

export default DetailPage;
