import Button from "../common/button/Button";
import { PostSubscribe } from "./DetailPageSubscribeStyle";

export const subscribeFooter = () => {
    return (
        <PostSubscribe>
            <fieldset className="post-subscribe-group">
                <div className="textfield post-subscribe-field email">
                    <input type="text" name="email" className="textfield-input" placeholder="이메일 주소" value="" />
                </div>
                <div className="inline-group">
                    <div className="textfield post-subscribe-field nickname">
                        <input type="text" name="nickname" className="textfield-input" placeholder="닉네임" value="" />
                    </div>
                    <Button size="sm" theme="DetailPageNewsBtn" type="submit" className="post-subscribe-submit">뉴스레터 구독하기</Button>
                </div>
            </fieldset>
            <p className="post-subscribe-terms">구독할 경우
                <a rel="noopener noreferrer">개인정보 수집·이용</a>
                과
                <a rel="noopener noreferrer">광고성 정보 수신</a>
                에 동의하게 됩니다.
            </p>
        </PostSubscribe>
    )
}

export default subscribeFooter;

