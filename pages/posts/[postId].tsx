import React from "react";
import DetailPost from "../../src/components/pages/DetailPage/components/DetailPost";

// Свойства страницы
type PageProps = {
    postId: string
}

// Сторона сервера NEXT JS Предварительное получение свойства postID
export default class extends React.Component<PageProps> {
    static async getInitialProps(props: any): Promise<PageProps> {
        const postId = props.query.postId as string;

        return {
            postId: postId,
        }
    }

    render() {
        const {postId} = this.props;

        return (
            <DetailPost id={postId}/>
        )
    }
}