'use client';
import { Theme } from '@/shared/const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '../context/LocalStorageKey';
import { useEffect, useMemo, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: React.ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(props.initialTheme || Theme.LIGHT);

    useEffect(() => {
        if (localStorage) {
            const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

            if (fallbackTheme !== theme) setTheme(fallbackTheme);
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }, [theme]);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    return <ThemeContext.Provider value={defaultProps}>{props.children}</ThemeContext.Provider>;
};
