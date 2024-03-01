'use client';
import { Menu, MenuProps } from 'antd';
import cls from './NavbarMenu.module.scss';
import themes from '@/shared/themes/themes.module.scss';
import Link, { LinkProps } from 'next/link';
import { classNames } from '@/shared/lib/className/className';
import { useAppSelector } from '@/app/providers/StoreProvider';
import { getToken } from '@/entities/Token';
import React from 'react';
import { ImageBasic } from '@/shared/ui/Images';
import heart from './../../../assets/img/heart.png';
import star from './../../../assets/img/star.png';
import glass from './../../../assets/img/glass.png';
import message from './../../../assets/img/message.png';
import basket from './../../../assets/img/basket.png';
import gear from './../../../assets/img/gear.png';
import exit from './../../../assets/img/exit.png';
import { ItemType } from 'antd/es/menu/hooks/useItems';

interface ILocalLinkProps extends LinkProps {
    title?: string;
    icon?: string;
    key: string;
}

const createMenuItem = (props: ILocalLinkProps): ItemType => {
    return {
        style: { padding: '0px 8px' },
        label: (
            <Link className={classNames(cls.link, {}, [themes.text_color])} href={props.href}>
                {props.icon ? <ImageBasic src={props.icon} width={30} preview={false} title={props.title} /> : props.title}
            </Link>
        ),
        key: props.key,
    };
};

const itemsNoAuth: MenuProps['items'] = [
    createMenuItem({ key: '1', title: 'Главная', href: '/' }),
    createMenuItem({ key: '2', title: 'О нас', href: '/about' }),
    createMenuItem({ key: '3', title: 'Войти', href: '/login' }),
];

const itemsAuthUser: MenuProps['items'] = [
    createMenuItem({ key: '1', title: 'Кто лайкнул', href: '/user/likes', icon: heart.src }),
    createMenuItem({ key: '2', title: 'Избранные пользователи', href: '/user/favorite', icon: star.src }),
    createMenuItem({ key: '3', title: 'Поиск пользователей', href: '/user/search', icon: glass.src }),
    createMenuItem({ key: '4', title: 'Диалоги', href: '/user/dialogs', icon: message.src }),
    createMenuItem({ key: '5', title: 'Магазин', href: '/user/shop', icon: basket.src }),
    createMenuItem({ key: '6', title: 'Настройки', href: '/user/settings', icon: gear.src }),
    createMenuItem({ key: '7', title: 'Выход', href: '/exit', icon: exit.src }),
];

export const NavbarMenu = () => {
    const token = useAppSelector(getToken);
    const [hydrated, setHydrated] = React.useState(false);
    React.useEffect(() => {
        setHydrated(true);
    }, []);

    return hydrated ? (
        <Menu
            defaultSelectedKeys={['1']}
            className={classNames('', {}, [themes.bg_color])}
            style={{ minWidth: 380, justifyContent: 'center', alignItems: 'center' }}
            mode="horizontal"
            theme="dark"
            triggerSubMenuAction="click"
            items={token ? itemsAuthUser : itemsNoAuth}
        ></Menu>
    ) : (
        <></>
    );
};
