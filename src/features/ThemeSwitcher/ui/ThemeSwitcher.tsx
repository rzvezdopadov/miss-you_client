'use client';
import { Theme } from '@/shared/const/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { FloatButton } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import { classNames } from '@/shared/lib/className/className';
import themes from '@/shared/themes/themes.module.scss';

export const ThemeSwitcher = () => {
    const theme = useTheme();

    return (
        <FloatButton
            onClick={() => {
                if (theme && theme.setTheme) {
                    const newTheme = theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

                    theme.setTheme(newTheme);
                }
            }}
            className={classNames('', {}, [themes.bg_color])}
            icon={<SyncOutlined />}
            type="primary"
        />
    );
};
