'use client';
import { Input, Button, Row, Col } from 'antd';
import { FormBasic, FormItemBasic } from '@/shared/ui/Forms';
import { TitleBasic } from '@/shared/ui/Titles';
import { ImageBasic } from '@/shared/ui/Images';
import React, { ChangeEvent, useCallback, useEffect } from 'react';
import {
    getLoginFormCaptcha,
    getLoginFormEmail,
    getLoginFormError,
    getLoginFormIsLoading,
    getLoginFormPassword,
} from '../model/selectors/loginSelectors';
import { loginFormActions } from '../model/slices/loginSlice';
import { fetchLoginByEmail } from '../model/services/loginByEmail';
import { Random } from '@/shared/utils/Random';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider';
import { API_URL } from '@/shared/const/api';
import { ModalLoading, messageBasic } from '@/shared/ui/Modals';
import { getToken } from '@/entities/Token/model/selectors/modelSelectors';
import { useRouter } from 'next/navigation';

const getRandomCaptchaLink = () => `${API_URL}captcha/${Random.getRandomString(8)}.png`;

export const LoginForm = () => {
    const [captchaLink, setCaptchaLink] = React.useState('');
    const dispatch = useAppDispatch();
    const email = useAppSelector(getLoginFormEmail);
    const password = useAppSelector(getLoginFormPassword);
    const captcha = useAppSelector(getLoginFormCaptcha);
    const isLoading = useAppSelector(getLoginFormIsLoading);
    const error = useAppSelector(getLoginFormError);
    const token = useAppSelector(getToken);
    const router = useRouter();

    const onChangeEmail = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(loginFormActions.setEmail(e.target.value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(loginFormActions.setPassword(e.target.value));
        },
        [dispatch],
    );

    const onChangeCaptcha = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(loginFormActions.setCaptcha(e.target.value));
        },
        [dispatch],
    );

    const onLoginFormClick = useCallback(async () => {
        setCaptchaLink(getRandomCaptchaLink());
        await dispatch(
            fetchLoginByEmail({
                email,
                password,
                captcha,
            }),
        );
    }, [dispatch, email, password, captcha]);

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
    }, [token]);

    useEffect(() => {
        setCaptchaLink(getRandomCaptchaLink());

        return () => {
            dispatch(loginFormActions.setEmail(''));
            dispatch(loginFormActions.setPassword(''));
            dispatch(loginFormActions.setCaptcha(''));
        };
    }, []);

    return (
        <>
            <FormBasic size="small" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} style={{ width: 300 }}>
                <TitleBasic level={3} title="Вход">
                    Вход
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
                    <Button type="primary" shape="round" onClick={onLoginFormClick} disabled={isLoading}>
                        Войти
                    </Button>
                </FormItemBasic>
            </FormBasic>
            <ModalLoading enabled={isLoading}></ModalLoading>
        </>
    );
};
