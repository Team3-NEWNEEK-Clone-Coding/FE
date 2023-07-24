import React from 'react';
import HeaderBanner from '../components/headerBanner/HeaderBanner';
import useInput from '../hooks/useInput';
import useCheckBox from '../hooks/useCheckBox';
import { postSub } from '../api/sub';
import { useMutation } from 'react-query';
const CreateSubscriberContainer = () => {
    const [email, onChangeEmailHandler] = useInput();
    const [nickname, onChangeNicknameHandler] = useInput();
    const [checkBox, onChangeCheckBoxHandler] = useCheckBox();
    const [checkBox2, onChangeCheckBoxHandler2] = useCheckBox();

    const mutation = useMutation((subData) => postSub(subData));

    const onSubmitSubscribeHandler = async (e) => {
        e.preventDefault();
        if (!email || !nickname) {
            alert('이메일과 닉네임을 확인해주세요');
            return;
        }
        if (!checkBox || !checkBox2) {
            alert('개인정보 수집, 이용에 동의해주세요');
            return;
        }
        const subData = {
            email,
            nickname,
        };
        await mutation.mutateAsync(subData);
    };
    return (
        <HeaderBanner
            onSubmitEvent={onSubmitSubscribeHandler}
            email={email}
            nickname={nickname}
            // checkBox={checkBox}
            // checkBox2={checkBox2}
            onChangeEmailHandler={onChangeEmailHandler}
            onChangeNicknameHandler={onChangeNicknameHandler}
            onChangeCheckBoxHandler={onChangeCheckBoxHandler}
            onChangeCheckBoxHandler2={onChangeCheckBoxHandler2}
        />
    );
};

export default CreateSubscriberContainer;
