import React from "react";
import styled from "styled-components";
import PostItem from "./PostItem";
import {Post} from "../../../../../pages";

interface NewPostPageProps {
    posts: Post[]
}

const PostsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
  grid-gap: 20px;
  padding: 0 20px;
`

const ListingPosts = (props: NewPostPageProps) => {
    const {posts} = props

    return (
        <PostsWrapper>
            {posts.map((post) => (
                <PostItem post={post}/>
            ))}
        </PostsWrapper>
    )
}

export default ListingPosts