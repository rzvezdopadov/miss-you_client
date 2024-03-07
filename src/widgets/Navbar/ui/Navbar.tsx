'use client';
import cls from './Navbar.module.scss';
import themes from '@/shared/themes/themes.module.scss';
import { Header } from 'antd/es/layout/layout';
import { classNames } from '@/shared/lib/className/className';
import { NavbarLogo } from '@/entities/NavbarLogo';
import { NavbarMenu } from '@/features/NavbarMenu';
import { useEffect } from 'react';
import { fetchTowns } from '@/entities/Towns';
import { useAppDispatch } from '@/app/providers/StoreProvider';

export const Navbar = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTowns({}));
    }, []);

    return (
        <Header className={classNames(cls.navbar, {}, [themes.bg_color])}>
            <NavbarLogo />
            <NavbarMenu />
        </Header>
    );
};
