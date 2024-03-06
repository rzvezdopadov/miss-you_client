import { Random } from '@/shared/utils/Random';
import { Flex, FlexProps, FloatButton } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { UpCircleFilled } from '@ant-design/icons';

interface FlexWrapperWithScrollProps extends FlexProps {
    onScrollEnd?: () => void;
}

const OVERFLOW_SCROLL = 200;

export const FlexWrapperWithScroll = (props: FlexWrapperWithScrollProps) => {
    const newProps = { ...props };
    const [floatButton, setFloatButton] = useState(false);
    const observer = useRef<IntersectionObserver>();
    const wrapper = useRef<HTMLElement>(null);
    const randomPostfix = useRef<string>();

    const onScrollCaptureWrapper = (e: React.UIEvent<HTMLDivElement>) => {
        if (e.currentTarget.scrollTop > OVERFLOW_SCROLL && !floatButton) {
            setFloatButton(true);
        } else if (e.currentTarget.scrollTop < OVERFLOW_SCROLL && floatButton) {
            setFloatButton(false);
        }

        if (newProps.onScrollCapture) newProps.onScrollCapture(e);
    };

    useEffect(() => {
        randomPostfix.current = Random.getRandomString(8);

        const options = {
            root: null,
            threshold: 1.0,
        };

        const watch = document.querySelector(`.FlexWrapperWithScrollArea${randomPostfix.current}`);

        observer.current = new IntersectionObserver((mutation) => {
            if (mutation[0].intersectionRatio && props.onScrollEnd) props.onScrollEnd();
        }, options);

        if (watch) observer.current.observe(watch);

        return () => {
            observer.current?.disconnect();
        };
    }, []);

    return (
        <Flex {...newProps} ref={wrapper} onScrollCapture={onScrollCaptureWrapper}>
            {props.children}
            <span className={`FlexWrapperWithScrollArea${randomPostfix.current}`}></span>
            {!floatButton || (
                <FloatButton
                    style={{ marginBottom: '3rem' }}
                    icon={<UpCircleFilled />}
                    type="primary"
                    onClick={() => {
                        wrapper.current?.scrollTo({ top: 0 });
                    }}
                />
            )}
        </Flex>
    );
};
