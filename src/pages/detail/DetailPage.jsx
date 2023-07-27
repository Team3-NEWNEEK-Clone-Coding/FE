import React from 'react';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import { getNewsDetail } from '../../api/newsDetail';
import { PostHead, PostContainer, PostHashtag } from './DetailPageStyle';
import LoadingPage from '../../components/loadingPage/LoadingPage';
import ProgressBar from '../../components/progressBar/ProgressBar';
import DetailPageLike from '../../components/detailPageLike/DetailPageLike';
import DetailPageSubscribe from '../../components/detailPageSubscribe/DetailPageSubscribe';
import HomeBanner from '../../components/homeBanner/HomeBanner';
import useDelay from '../../hooks/useDelay';

const DetailPage = () => {
    const { id } = useParams();
    const { data: post, isLoading, isError } = useQuery(['post', id], () => getNewsDetail(id));

    const { isDelayOver } = useDelay();

    if (!isDelayOver || isLoading) {
        return <LoadingPage />;
    }

    if (isError) {
        return <div>An error occurred</div>;
    }

    const tags = post.tag.split(' ');

    return (
        <section className="post is-sticky">
            <div className="post-scrollwrap">
                <PostHead className="post-head">
                    <ProgressBar title={post.title} />
                    <a className="post-head-runninghead" href={`/tag/${post.category}`}>
                        {post.category}
                    </a>
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
                {tags.map((tag, index) => (
                    <a key={index} className="post-hashtag-item" href={`/search/${tag}`}>
                        #{tag}
                    </a>
                ))}
            </PostHashtag>
            <DetailPageLike post={post} id={id} />
            <DetailPageSubscribe />
            <HomeBanner />
        </section>
    );
};

export default DetailPage;
