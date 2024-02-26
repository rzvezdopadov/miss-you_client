import { Input, Button, Row, Col } from 'antd';
import { FormBasic, FormItemBasic } from '@/shared/ui/Forms';
import { TitleBasic } from '@/shared/ui/Titles';
import { ImageBasic } from '@/shared/ui/Images';
import React from 'react';

export const LoginForm = () => {
    // const [captchaLink, setfirst] = React.useState('http://localhost:5000/api/v1/captcha/captcha.jpg');

    return (
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
                <Input />
            </FormItemBasic>
            <FormItemBasic
                name="password"
                label="Пароль"
                rules={[
                    {
                        required: true,
                        message: 'Пожалуйста введите свой пароль!',
                    },
                ]}
                hasFeedback
            >
                <Input type="password" />
            </FormItemBasic>
            <FormItemBasic label="Код с картинки">
                <Row gutter={8}>
                    <Col span={12}>
                        <FormItemBasic name="captcha" noStyle rules={[{ required: true, message: 'Пожалуйста введите код с картинки!' }]}>
                            <Input />
                        </FormItemBasic>
                    </Col>
                    <Col span={12}>
                        <Button type="primary">Обновить</Button>
                    </Col>
                </Row>
            </FormItemBasic>
            <ImageBasic
                width={160}
                height={40}
                rounded="s"
                src={'http://localhost:5000/api/v1/captcha/captcha.png'}
                preview={false}
                alt="Код с картинки"
            />
            <FormItemBasic>
                <Button type="primary" shape="round">
                    Войти
                </Button>
            </FormItemBasic>
        </FormBasic>
    );
};
