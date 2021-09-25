import App from 'next/app'
import React from "react";
import {Provider} from 'react-redux';
import {createWrapper} from 'next-redux-wrapper'
import store from '../src/redux/store'
import BasicLayout from "../layout/Basic";

class MyApp extends App {
    render(): JSX.Element {
        const {Component, pageProps} = this.props

        return (
            <Provider store={store}>
                <BasicLayout>
                    <Component{...pageProps}></Component>
                </BasicLayout>
            </Provider>
        )
    }
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(MyApp)
