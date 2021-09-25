import styled from "styled-components";
import React, {useEffect} from "react";
import ListingPosts from "../src/components/pages/FirstPage/components/ListingPosts";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {SAVE_POSTS} from "../src/redux/redusers/postsReducers/actionsTypes";

const Title = styled.h1`
  padding: 0 20px;
`

export interface Post {
    id: number,
    title: string,
    body: string
}

const Posts = () => {

    const dispatch = useDispatch()
    const posts = useSelector((store: any) => store.postsReducer.posts)

    useEffect(() => {
        axios.get('https://simple-blog-api.crew.red/posts')
            .then(response => {
                dispatch({type: SAVE_POSTS, payload: response.data})
            });
        // Делаем запрос на сервер что бы получить все посты
    }, [])

    return (
        <>
            <Title>Все посты</Title>
            <ListingPosts posts={posts}/>
        </>
    );
};

export default Posts;
