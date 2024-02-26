import cls from './Navbar.module.scss';
import themes from '@/shared/themes/themes.module.scss';
import { Header } from 'antd/es/layout/layout';
import { classNames } from '@/shared/lib/className/className';
import { NavbarLogo } from '@/entities/NavbarLogo';
import { NavbarMenu } from '@/features/NavbarMenu';

export const Navbar = () => {
    return (
        <Header className={classNames(cls.navbar, {}, [themes.bg_color])}>
            <NavbarLogo />
            <NavbarMenu />
        </Header>
    );
};
