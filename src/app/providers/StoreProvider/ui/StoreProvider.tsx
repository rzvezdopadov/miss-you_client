'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '../lib/store';
import { StateSchema } from '../lib/StateSchema';
import { ReducersMapObject } from '@reduxjs/toolkit';

interface StoreProviderProps {
    children?: React.ReactNode;
    initialState?: Partial<StateSchema>;
    asyncReducers?: Partial<ReducersMapObject<StateSchema>>;
}

export function StoreProvider(props: StoreProviderProps) {
    const { children } = props;
    const storeRef = useRef<AppStore | null>(null);

    if (!storeRef.current) {
        storeRef.current = makeStore();
    }

    return <Provider store={storeRef.current}>{children}</Provider>;
}
