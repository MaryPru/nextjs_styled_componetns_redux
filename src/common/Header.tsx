import {useRouter} from "next/router";
import styled from "styled-components";
import React from "react";

const HeaderWrapper = styled.div`
  box-shadow: rgb(0 0 0 / 4%) 0px 2px 1px -1px, rgb(0 0 0 / 6%) 0px 1px 1px 0px, rgb(0 0 0 / 3%) 0px 1px 3px 0px;
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
`

const Button = styled.button`
  margin-right: 20px;
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-color: transparent;
  outline: 0px;
  border: 0px;
  margin-right: 20px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  font-family: Roboto, Helvetica, Arial, sans-serif;
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

const Header = () => {
    const router = useRouter()

    return (
        <HeaderWrapper>
            <Button onClick={() => router.push('/')}>
                Список постов
            </Button>
            <Button onClick={() => router.push('/posts/new')}>
                Создать пост
            </Button>
        </HeaderWrapper>
    )
}

export default Header