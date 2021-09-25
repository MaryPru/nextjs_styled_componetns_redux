import React from "react";
import styled from "styled-components";

export interface CommentProps {
    body: string
}

const Image = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 5px;
`

const CommentWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  width: 50%;
  background: aliceblue;
  border-radius: 8px;
`

const Body = styled.div`
  font-size: 14px;
`

const CommentPost = (props: CommentProps) => {
    const {body} = props

    return (
        <CommentWrapper>
            <Image src="/images/comment.png"/>
            <Body>{body}</Body>
        </CommentWrapper>
    )
}

export default CommentPost