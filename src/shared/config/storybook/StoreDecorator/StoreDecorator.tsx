import { StoreProvider } from '@/app/providers/StoreProvider';

import { Story } from '@storybook/react';

export const StoreDecorator = (StoryComponent: Story) => (
    <StoreProvider>
        <StoryComponent />
    </StoreProvider>
);
