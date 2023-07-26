import React, { useState } from 'react';
import HeaderBanner from '../components/headerBanner/HeaderBanner';
import { postSub } from '../api/sub';
import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';
import { subscriber } from '../redux/modules/subscriberSlice';
const CreateSubscriberContainer = () => {
    const [email, setEmail] = useState('');
    const [nickName, setNickName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [checkbox2, setCheckbox2] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [nickNameError, setNickNameError] = useState('');
    const [checkboxError, setCheckboxError] = useState('');
    const [checkboxError2, setCheckboxError2] = useState('');

    const { subscriber } = useSelector((state) => {
        return state.subscriber;
    });

    const mutation = useMutation((subData) => postSub(subData));

    const onChangeEmailHandler = (e) => {
        setEmail(e.target.value);
        setEmailError('');
    };

    const onChangeNickNameHandler = (e) => {
        setNickName(e.target.value);
        setNickNameError('');
    };

    const onChangeCheckBoxHandler = (e) => {
        setCheckbox(e.target.checked);
        setCheckboxError('');
    };

    const onChangeCheckBoxHandler2 = (e) => {
        setCheckbox2(e.target.checked);
        setCheckboxError2('');
    };

    const onSubmitSubscribeHandler = async (e) => {
        e.preventDefault();
        if (email === '') {
            setEmailError('이메일 주소를 입력해주세요.');
            return;
        }
        if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) === false) {
            setEmailError('이메일 형식이 아니에요!');
            return;
        }
        if (nickName === '') {
            setNickNameError('닉네임을 입력해주세요.');
            return;
        }
        if (!checkbox) {
            setCheckboxError('약관에 동의해주세요.');
            return;
        }
        if (!checkbox2) {
            setCheckboxError2('약관에 동의해주세요.');
            return;
        }
        const subData = { email, nickName };
        try {
            await mutation.mutateAsync(subData);
            alert('구독 신청이 완료되었습니다.');
            setEmail('');
            setNickName('');
            setCheckbox(false);
            setCheckbox2(false);
        } catch (error) {
            alert('구독 신청에 실패했습니다. 다시 시도해주세요.');
            console.error(error);
        }
    };

    return (
        <HeaderBanner
            onSubmitEvent={onSubmitSubscribeHandler}
            email={email}
            nickName={nickName}
            checkbox={checkbox}
            checkbox2={checkbox2}
            emailError={emailError}
            nickNameError={nickNameError}
            checkboxError={checkboxError}
            checkboxError2={checkboxError2}
            onChangeEmailHandler={onChangeEmailHandler}
            onChangeNickNameHandler={onChangeNickNameHandler}
            onChangeCheckBoxHandler={onChangeCheckBoxHandler}
            onChangeCheckBoxHandler2={onChangeCheckBoxHandler2}
        />
    );
};

export default CreateSubscriberContainer;
