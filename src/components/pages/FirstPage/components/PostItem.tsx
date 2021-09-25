import styled from "styled-components";
import {useRouter} from "next/router";
import React from "react";
import {Post} from "../../../../../pages";

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  line-height: 1.334;
  letter-spacing: 0em;
  margin: 20px 0;
`

const Button = styled.button`
  align-self: flex-end;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-color: transparent;
  outline: 0px;
  border: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.8125rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
  padding: 4px 5px;
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: rgb(25, 118, 210);
    &:hover {
    text-decoration: none;
    background-color: rgba(25, 118, 210, 0.04);
  }
`

const Description = styled.div`
  height: 60px;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px;
  background-color: rgb(255, 255, 255);
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
  overflow: hidden;
  width: 100%;
  margin-bottom: 20px;
`

const BgCard = styled.div`
  background-image: url('/images/post.jpg');
  width: 100%;
  height: 200px;
  border: none;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

interface PostProps {
    post: Post
}

const PostItem = (props: PostProps) => {
    const {post} = props
    const router = useRouter()

    return (
        <Card>
            <BgCard />
            <Title>{post.title}</Title>
            <Description>{post.body.substr(0,140)}{post.body.length > 140 && `...`}</Description>
            <Button onClick={() =>  router.push(`/posts/${post.id}`)}>Смотреть детальнее</Button>
        </Card>
    )
}

export default PostItem