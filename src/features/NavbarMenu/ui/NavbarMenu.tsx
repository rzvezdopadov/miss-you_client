import { Menu, MenuProps } from 'antd';
import cls from './NavbarMenu.module.scss';
import themes from '@/shared/themes/themes.module.scss';
import Link, { LinkProps } from 'next/link';
import { classNames } from '@/shared/lib/className/className';

interface ILocalLinkProps extends LinkProps {
    title?: React.ReactNode;
    icon?: string;
}

const LocalLink = (props: ILocalLinkProps) => {
    const { href, title } = props;

    return (
        <Link className={classNames(cls.link, {}, [themes.text_color])} href={href}>
            {title}
        </Link>
    );
};

const itemsNoAuth: MenuProps['items'] = [
    {
        label: LocalLink({ title: 'Главная', href: '/' }),
        key: '1',
    },
    {
        label: LocalLink({ title: 'О нас', href: '/about' }),
        key: '2',
    },
    {
        label: LocalLink({ title: 'Войти', href: '/login' }),
        key: '3',
    },
];

export const NavbarMenu = () => {
    return (
        <Menu
            // defaultSelectedKeys={['1']}
            className={classNames('', {}, [themes.bg_color])}
            style={{ minWidth: 300, justifyContent: 'center' }}
            mode="horizontal"
            theme="dark"
            triggerSubMenuAction="click"
            items={itemsNoAuth}
        ></Menu>
    );
};
