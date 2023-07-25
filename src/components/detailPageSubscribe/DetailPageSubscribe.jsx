import { useState } from "react";
import Button from "../common/button/Button";
import { PostSubscribe } from "./DetailPageSubscribeStyle";
import { postSub } from "../../api/sub";

export const DetailPageSubscribe = () => {
    const [email, setEmail] = useState("");
    const [nickName, setNickName] = useState("");
    const [emailError, setEmailError] = useState("");
    const [nickNameError, setNickNameError] = useState("");

    const emailOnchangeHadler = (event) => {
        setEmail(event.target.value);
        setEmailError("");
    }

    const nickNameOnchangeHadler = (event) => {
        setNickName(event.target.value);
        setNickNameError("");
    }

    const subscribeClickHandler = async (event) => {
        event.preventDefault();
        if (email === '') {
            setEmailError("이메일 주소를 입력해주세요.");
            return;
        }
        if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) === false) {
            setEmailError("이메일 형식이 아니에요!");
            return;
        }
        if (nickName === '') {
            setNickNameError("닉네임을 입력해주세요.");
            return;
        }

        const subData = { email, nickName };
        try {
            await postSub(subData);
            alert("구독 신청이 완료되었습니다.");
            setEmail("");
            setNickName("");
        } catch (error) {
            alert("구독 신청에 실패했습니다. 다시 시도해주세요.");
            console.error(error);
        }
    }

    return (
        <PostSubscribe>
            <fieldset className="post-subscribe-group">
                <div className="textfield post-subscribe-field email">
                    <input type="text" name="email" placeholder="이메일 주소" value={email} onChange={emailOnchangeHadler} />
                    {emailError && <small className="textfield-helper">{emailError}</small>}
                </div>
                <div className="inline-group">
                    <div className="textfield post-subscribe-field nickName">
                        <input type="text" name="nickName" placeholder="닉네임" value={nickName} onChange={nickNameOnchangeHadler} />
                        {nickNameError && <small className="textfield-helper">{nickNameError}</small>}
                    </div>
                    <Button size="sm" theme="DetailPageNewsBtn" type="submit" onClickEvent={subscribeClickHandler}>뉴스레터 구독하기</Button>
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

export default DetailPageSubscribe;

