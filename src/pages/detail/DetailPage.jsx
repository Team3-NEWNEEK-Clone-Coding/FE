import React from 'react';
import { PostHead, PostContainer, PostHashtag } from './DetailPageStyle';
import DetailPageLike from '../../components/detailPageLike/DetailPageLike';
import DetailPageSubscribe from '../../components/detailPageSubscribe/DetailPageSubscribe';
import HomeBanner from '../../components/homeBanner/HomeBanner';
import { useParams } from 'react-router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getNewsDetail, postUpdateLike } from '../../api/newsDetail';
import LoadingPage from '../../components/loadingPage/LoadingPage';

const DetailPage = () => {
    const { id } = useParams();
    const { data: post, isLoading, isError } = useQuery(['post', id], () => getNewsDetail(id));
    console.log(post);

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

    if (isLoading) {
        <LoadingPage />
    }

    if (isError) {
        return <div>An error occurred</div>;
    }

    return (
        <section className="post is-sticky">
            <div className="post-scrollwrap">
                <PostHead className="post-head">
                    <a className="post-head-runninghead" href="/tag/domestic-issue">{post.category}</a>
                    <h2 className="post-head-headline">{post.title}</h2>
                    <time className="post-head-date">{post.date}</time>
                    <i className="icon-bullet"></i>
                    <div className="post-head-progress" role="progressbar" aria-valuenow="" style={{ width: '33.2779%' }}></div>
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
