import React from 'react';
import { useParams } from 'react-router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getNewsDetail, postUpdateLike } from '../../api/newsDetail';
import { PostHead, PostContainer, PostHashtag } from './DetailPageStyle';
import LoadingPage from '../../components/loadingPage/LoadingPage';
import ProgressBar from '../../components/progressBar/ProgressBar';
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
                heart: data.newsHeart,
            }));
        },
    });
    const likeButtonHandler = () => {
        mutation.mutate(id);
    };

    if (isLoading) {
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
            <DetailPageLike post={post} likeButtonHandler={likeButtonHandler} />
            <DetailPageSubscribe />
            <HomeBanner />
        </section>
    );
};

export default DetailPage;
