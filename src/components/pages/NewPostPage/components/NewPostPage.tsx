import React, {useState} from "react";
import styled, {css} from "styled-components";
import axios from "axios";
import Modal from "./Modal";
import {ADD_NEW_POST} from "../../../../redux/redusers/postsReducers/actionsTypes";
import {useDispatch} from "react-redux";

const BgCard = styled.div`
  background-image: url('/images/post.jpg');
  width: 100%;
  height: 200px;
  border: none;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 10px;
`

const Input = styled.input`
  width: 100%;
  border-radius: 4px;
  border: 1px solid transparent;
  padding: 10px 5px;
  margin-bottom: 8px;
  background-color: aliceblue;
  transition: 400ms;

  &:focus {
    border: 1px solid #98ceff;
    outline: none;
  }

  &::placeholder {
    font-family: Calibri;
  }
`

const TextArea = styled.textarea`
  width: 100%;
  border-radius: 4px;
  border: 1px solid transparent;
  resize: none;
  height: 100px;
  margin-bottom: 8px;
  background-color: aliceblue;
  transition: 400ms;

  &::placeholder {
    font-family: Calibri;
  }

  &:focus {
    border: 1px solid #98ceff;
    outline: none;
  }
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
  margin: 0;
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

  ${props => props.primary && css`
    margin: 0 10px 10px 0;
  `}
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(255, 255, 255);
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
  overflow: hidden;
  width: 100%;
  margin: 20px 0;
  padding: 20px;
`

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  margin-right: 20px;
`

const WrapperPage = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  margin: 10px 10px;
`

const Title = styled.div`
  align-self: flex-start;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.334;
  letter-spacing: 0em;
  margin: 10px 0 5px;
  width: 100%;
`

const Description = styled.div`
  height: 60px;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  align-self: flex-start;
`

const NewPostPage = () => {

    const [title, setTitle] = useState<string>('')
    const [body, setBody] = useState<string>("")
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const dispatch = useDispatch()

    const submit = () => {
        if ((title === '') || (body === '')) {
            alert('поля не должны быть пустыми')
            return
        }

        const newPostToServer = {
            title: title,
            body: body
        };
        axios.post('https://simple-blog-api.crew.red/posts', newPostToServer)
            .then(response => dispatch({type: ADD_NEW_POST, payload: response.data}));
        setIsOpen(true)
    }

    return (
        <WrapperPage>
            <CardWrapper>
                <Card>
                    <Title>Заголовок поста:</Title>
                    <Input
                        type="text"
                        placeholder={"Введите "}
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                    />
                    <Title>Описание поста:</Title>
                    <TextArea
                        placeholder={"Ваш тект..."}
                        value={body} onChange={event => setBody(event.target.value)}
                    />
                </Card>
                <Button onClick={submit}>
                    Записать пост
                </Button>
            </CardWrapper>
            <CardWrapper>
                <Card>
                    <BgCard/>
                    <Title>{title}</Title>
                    <Description>{body.substr(0, 140)}{body.length > 140 && `...`}</Description>
                    <Button>Смотреть детальнее</Button>
                </Card>
            </CardWrapper>
            {isOpen && <Modal setIsOpen={setIsOpen}/>}
        </WrapperPage>
    )
}

export default NewPostPage