import { message } from 'antd';
import { ArgsProps } from 'antd/es/message';

interface messageBasicProps extends ArgsProps {
    content: string | string[];
    timeout?: number;
}

export const messageBasic = (props: messageBasicProps) => {
    const newProps = { ...props };
    newProps.content = newProps.content || '';
    const timeout = newProps.timeout || 1;

    const modalSend = (payload: ArgsProps) => setTimeout(() => message.open(payload), timeout * 1000);

    if (typeof newProps.content === 'string') {
        modalSend(newProps);
        return;
    }

    const content = [...newProps.content];

    content.forEach((value) => {
        newProps.content = value;
        modalSend({ ...newProps });
    });
};
