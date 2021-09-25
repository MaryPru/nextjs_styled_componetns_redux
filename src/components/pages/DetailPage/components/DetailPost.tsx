import React, {useEffect, useState} from "react";
import axios from "axios";
import CommentPost, {CommentProps} from "./Comment";
import styled from "styled-components";

interface DetailPostProps {
    id: string
}

interface DetailPost {
    id: number,
    title: string,
    body: string,
    comments: CommentProps[],
}

const BgCard = styled.div`
  background-image: url('/images/post.jpg');
  width: 100%;
  height: 300px;
  border: none;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const Description = styled.div`
  height: 60px;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
`

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  line-height: 1.334;
  letter-spacing: 0em;
  margin: 20px 0;
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
  width: 95%;
  margin: 20px auto;
`

const DetailPostItem = (props: DetailPostProps) => {

    const [detailPost, setDetailPost] = useState<DetailPost | undefined>(undefined)
    const {id} = props

    useEffect(() => {
        axios.get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`)
            .then(response => {
                setDetailPost(response.data)
                console.log("response.data", response.data)
            });
    }, [])

    if (detailPost === undefined) {
        return (
            <Card>
                loading...
            </Card>
        )
    }

    return (
        <Card>
            <BgCard/>
            <Title>{detailPost.title}</Title>
            <Description>{detailPost.body}</Description>
            <Title>Comments:</Title>
            {detailPost.comments.map((comment) => <CommentPost body={comment.body}/>)}
        </Card>
    )
}

export default DetailPostItem