import cls from './Navbar.module.scss';
import { NavbarMenu } from '@/entities/Navbar/Menu';
import { NavbarLogo } from '@/entities/Navbar/Logo';
import { Header } from 'antd/es/layout/layout';

export const Navbar = () => {
    return (
        <Header className={cls.navbar}>
            <NavbarLogo />
            <NavbarMenu />
        </Header>
    );
};
