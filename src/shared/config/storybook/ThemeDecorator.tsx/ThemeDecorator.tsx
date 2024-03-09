import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';
import { Story } from '@storybook/react';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
};
