import styled from "styled-components";
import React from "react";

const ModalWindow = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  background-color: aliceblue;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
  padding: 10px;
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

const ModalWrapper = styled.div`
  background-color: #005aff1a;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export interface ModalProps {
    setIsOpen: (value: boolean) => void
}

const Modal = (props: ModalProps) => {

    const {setIsOpen} = props

    return (
        <ModalWrapper>
            <ModalWindow>
                <Title>Ваш пост был добавлен</Title>
                <Button onClick={() => setIsOpen(false)}>
                    OK
                </Button>
            </ModalWindow>
        </ModalWrapper>
    )
}

export default Modal