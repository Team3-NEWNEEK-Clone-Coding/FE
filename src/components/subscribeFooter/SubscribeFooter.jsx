import { PostSubscribe } from "./SubscribeFooterStyle";

export const subscribeFooter = () => {
    return (
        <PostSubscribe>
            <fieldset className="post-subscribe-group">
                <div className="textfield post-subscribe-field ">
                    <input type="text" name="email" className="textfield-input" placeholder="이메일 주소" value="" />
                </div>
                <button type="submit" className="post-subscribe-submit">뉴스레터 구독하기</button>
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

