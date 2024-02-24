import { Menu, MenuProps } from 'antd';
import cls from './NavbarMenu.module.scss';
import Link, { LinkProps } from 'next/link';

interface ILocalLinkProps extends LinkProps {
    title?: React.ReactNode;
    icon?: string;
}

const LocalLink = (props: ILocalLinkProps) => {
    const { href, title } = props;

    return (
        <Link className={cls.link} href={href}>
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
        <Menu defaultSelectedKeys={['1']} style={{ width: 300 }} mode="vertical" theme="dark" triggerSubMenuAction="click" items={itemsNoAuth}></Menu>
    );
};
