'use client';
import { Input, Button, Row, Col, Select, DatePicker } from 'antd';
import { FormBasic, FormItemBasic } from '@/shared/ui/Forms';
import { TitleBasic } from '@/shared/ui/Titles';
import { ImageBasic } from '@/shared/ui/Images';
import React, { ChangeEvent, useCallback, useEffect } from 'react';
import {
    getSignupFormCaptcha,
    getSignupFormDayOfBirth,
    getSignupFormEmail,
    getSignupFormError,
    getSignupFormGender,
    getSignupFormGenderVapor,
    getSignupFormIsLoading,
    getSignupFormLocation,
    getSignupFormMonthOfBirth,
    getSignupFormPassword,
    getSignupFormYearOfBirth,
} from '../model/selectors/signupSelectors';
import { signupFormActions } from '../model/slices/signupSlice';
import { fetchSignup } from '../model/services/signup';
import { Random } from '@/shared/utils/Random';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider';
import { API_URL } from '@/shared/const/api';
import { ModalLoading, messageBasic } from '@/shared/ui/Modals';
import { getToken } from '@/entities/Token/model/selectors/modelSelectors';
import { useRouter } from 'next/navigation';
import { fetchTowns, getTowns } from '@/entities/Towns';
import { Gender, GenderVapor } from '@/shared/const/profile';
import dayjs from 'dayjs';
import { SYSTEM_CONST } from '@/app/const';

const getRandomCaptchaLink = () => `${API_URL}captcha/${Random.getRandomString(8)}.png`;
const dateFormat = 'YYYY-MM-DD';

const date = new Date();
date.setFullYear(date.getFullYear() - SYSTEM_CONST.minAge);
const minDateBirth = date.toISOString().split('T')[0];

export const SignupForm = () => {
    const [captchaLink, setCaptchaLink] = React.useState('');
    const dispatch = useAppDispatch();
    const email = useAppSelector(getSignupFormEmail);
    const password = useAppSelector(getSignupFormPassword);
    const location = useAppSelector(getSignupFormLocation);
    const dayOfBirth = useAppSelector(getSignupFormDayOfBirth);
    const monthOfBirth = useAppSelector(getSignupFormMonthOfBirth);
    const yearOfBirth = useAppSelector(getSignupFormYearOfBirth);
    const gender = useAppSelector(getSignupFormGender);
    const genderVapor = useAppSelector(getSignupFormGenderVapor);
    const captcha = useAppSelector(getSignupFormCaptcha);
    const isLoading = useAppSelector(getSignupFormIsLoading);
    const error = useAppSelector(getSignupFormError);
    const token = useAppSelector(getToken);
    const towns = useAppSelector(getTowns);
    const router = useRouter();

    const onChangeEmail = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(signupFormActions.setEmail(e.target.value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(signupFormActions.setPassword(e.target.value));
        },
        [dispatch],
    );

    const onChangeTown = useCallback(
        (e: string) => {
            dispatch(signupFormActions.setLocation(e));
        },
        [dispatch],
    );

    const onChangeGender = useCallback(
        (e: number) => {
            dispatch(signupFormActions.setGender(e));
        },
        [dispatch],
    );

    const onChangeGenderVapor = useCallback(
        (e: number) => {
            dispatch(signupFormActions.setGenderVapor(e));
        },
        [dispatch],
    );

    const onChangeDate = useCallback(
        (e: { $D: number; $M: number; $y: number }) => {
            const dayOfBirth = Number(e?.$D);
            const monthOfBirth = Number(e?.$M);
            const yearOfBirth = Number(e?.$y);

            dispatch(signupFormActions.setDayOfBirth(dayOfBirth));
            dispatch(signupFormActions.setMonthOfBirth(monthOfBirth));
            dispatch(signupFormActions.setYearOfBirth(yearOfBirth));
        },
        [dispatch],
    );

    const onChangeCaptcha = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(signupFormActions.setCaptcha(e.target.value));
        },
        [dispatch],
    );

    const onSignupFormClick = useCallback(async () => {
        await dispatch(
            fetchSignup({
                email,
                password,
                location,
                dayOfBirth,
                monthOfBirth,
                yearOfBirth,
                gender,
                genderVapor,
                captcha,
            }),
        );
        setCaptchaLink(getRandomCaptchaLink());
    }, [dispatch, email, password, location, dayOfBirth, monthOfBirth, yearOfBirth, gender, genderVapor, captcha]);

    useEffect(() => {
        if (!error) return;

        messageBasic({
            type: 'error',
            content: error,
            timeout: 1,
            duration: 5,
        });
    }, [error]);

    useEffect(() => {
        if (!token) return;

        router.push('/user/likes', { scroll: false });
        dispatch(signupFormActions.setEmail(''));
        dispatch(signupFormActions.setPassword(''));
        dispatch(signupFormActions.setLocation(''));
        dispatch(signupFormActions.setGender(Gender.length));
        dispatch(signupFormActions.setGenderVapor(GenderVapor.length));
        dispatch(signupFormActions.setDayOfBirth(32));
        dispatch(signupFormActions.setMonthOfBirth(12));
        dispatch(signupFormActions.setYearOfBirth(2000));
        dispatch(signupFormActions.setCaptcha(''));
    }, [token]);

    useEffect(() => {
        dispatch(fetchTowns({}));
        setCaptchaLink(getRandomCaptchaLink());
    }, []);

    return (
        <>
            <FormBasic size="small" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} style={{ width: 300 }}>
                <TitleBasic level={3} title="Регистрация">
                    Регистрация
                </TitleBasic>
                <FormItemBasic
                    name="email"
                    label="Email"
                    rules={[
                        {
                            type: 'email',
                            message: 'Это невалидный E-mail!',
                        },
                        {
                            required: true,
                            message: 'Пожалуйста введите свой E-mail!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input autoFocus={true} placeholder="Введите Email" value={email} onChange={onChangeEmail} disabled={isLoading} />
                </FormItemBasic>
                <FormItemBasic
                    name="password"
                    label="Пароль"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста введите свой пароль!',
                        },
                        {
                            min: 8,
                            max: 30,
                            message: 'Пароль должен быть от 8 до 30 символов!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input type="password" placeholder="Введите пароль" value={password} onChange={onChangePassword} disabled={isLoading} />
                </FormItemBasic>
                <FormItemBasic
                    name="location"
                    label="Локация"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста укажите локацию',
                        },
                    ]}
                    hasFeedback
                >
                    <Select
                        placeholder="Укажите локацию"
                        onChange={onChangeTown}
                        disabled={isLoading}
                        options={towns.map((town) => ({ value: town, label: town }))}
                    ></Select>
                </FormItemBasic>
                <FormItemBasic
                    name="gender"
                    label="Кто я?"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста укажите ваш пол',
                        },
                    ]}
                    hasFeedback
                >
                    <Select placeholder="Ваш пол" onChange={onChangeGender} disabled={isLoading} options={Gender}></Select>
                </FormItemBasic>
                <FormItemBasic
                    name="genderVapor"
                    label="Кого ищу?"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста укажите кого ищете',
                        },
                    ]}
                    hasFeedback
                >
                    <Select placeholder="Кого ищете" onChange={onChangeGenderVapor} disabled={isLoading} options={GenderVapor}></Select>
                </FormItemBasic>
                <FormItemBasic
                    name="date"
                    label="Дата рождения"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста укажите дату рождения',
                        },
                    ]}
                    hasFeedback
                >
                    <DatePicker disabled={isLoading} onChange={onChangeDate} maxDate={dayjs(minDateBirth, dateFormat)} />
                </FormItemBasic>
                <FormItemBasic label="Код с картинки">
                    <Row gutter={8}>
                        <Col span={12}>
                            <FormItemBasic name="captcha" noStyle rules={[{ required: true, message: 'Пожалуйста введите код с картинки!' }]}>
                                <Input placeholder="Код с картинки" value={captcha} onChange={onChangeCaptcha} disabled={isLoading} />
                            </FormItemBasic>
                        </Col>
                        <Col span={12}>
                            <Button type="primary" onClick={() => setCaptchaLink(getRandomCaptchaLink())}>
                                Обновить
                            </Button>
                        </Col>
                    </Row>
                </FormItemBasic>
                <ImageBasic width={160} height={40} rounded="s" src={captchaLink} preview={false} alt="Код с картинки" />
                <FormItemBasic>
                    <Button type="primary" shape="round" onClick={onSignupFormClick} disabled={isLoading}>
                        Зарегистрироваться
                    </Button>
                </FormItemBasic>
            </FormBasic>
            <ModalLoading enabled={isLoading}></ModalLoading>
        </>
    );
};
