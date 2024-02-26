import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/index.scss';
import { Navbar } from '@/widgets/Navbar';
import { ThemeProvider } from '@/shared/lib/providers/ThemeProvider';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'miss-you.ru',
    description: 'Meeting site',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider>
                    <Navbar></Navbar>
                    <main className="main">{children}</main>
                    <ThemeSwitcher />
                </ThemeProvider>
            </body>
        </html>
    );
}
