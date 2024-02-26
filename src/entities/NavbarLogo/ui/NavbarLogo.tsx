import cls from './NavbarLogo.module.scss';
import logoNavBar from '../../../assets/img/logoNavBar.png';
import logoNameNavBar from '../../../assets/img/logoNameNavBar.svg';
import Link from 'next/link';
import { ImageBasic } from '@/shared/ui/Images';

export const NavbarLogo = () => {
    return (
        <div className={cls.wrapper}>
            <Link className={cls.logoNavBar} href={'https://miss-you.ru'}>
                <ImageBasic className={cls.logoNavBar} src={logoNavBar.src} alt="logo" preview={false} height={40}></ImageBasic>
            </Link>
            <ImageBasic className={cls.logoNameNavBar} src={logoNameNavBar.src} alt="miss-you" preview={false} height={30}></ImageBasic>
        </div>
    );
};
