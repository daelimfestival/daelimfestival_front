import React from 'react';
import Header from "../common/header.js";
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "./Contest.css";

class Con extends React.Component {

    render() {
        return (
            <div className="conWrap">
                <div className="conWrap_header">
                    <Header />
                </div>
                <div className="contest_content_wrap">
                    <p>코로나 시국, 내가 격은 온갖 에피소드를 공유해보자, 코풀기 대회!</p>
                    <h1>코풀기 대회 우승자를 뽑아주세요!</h1>
                    <ol>
                        <li>구글 연동된 Daelim 계정만 투표에 반영됩니다.</li>
                        <li>각 분야 별로 한 작품에만 투표할 수 있습니다.</li>
                        <li>제출하기를 누르면 선택한 작품에 대해 투표가 완료됩니다.</li>
                    </ol>
                    <ul>
                        <li>사진을 누르면 해당 작품을 볼 수 있습니다.</li>
                        <li>제출하기를 누르면 스탬프 1개 지급!</li>
                    </ul>
                    <ListGroup horizontal>
                        <ListGroup.Item><Link to='/Contest/cartoon'>만화</Link></ListGroup.Item>
                        <ListGroup.Item><Link to='/Contest/literature'>문학</Link></ListGroup.Item>
                        <ListGroup.Item><Link to='/Contest/video'>영상</Link></ListGroup.Item>
                    </ListGroup>
                    <div>
                        {/* <cartoon1 /> */}

                    </div>
                </div>
            </div>
        );
    }
}
export default Con;