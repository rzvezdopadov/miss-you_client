import { Image } from 'antd';
import cls from './NavbarLogo.module.scss';
import logoNavBar from '../../../../assets/img/logoNavBar.png';
import logoNameNavBar from '../../../../assets/img/logoNameNavBar.png';
import Link from 'next/link';

export const NavbarLogo = () => {
    return (
        <div className={cls.wrapper}>
            <Link className={cls.logoNavBar} href={'https://miss-you.ru'}>
                <Image src={logoNavBar.src} alt="logo" preview={false} height={40}></Image>
            </Link>
            <Image className={cls.logoNameNavBar} src={logoNameNavBar.src} alt="miss-you" preview={false} height={30}></Image>
        </div>
    );
};
