'use client';
import { getToken, tokenActions } from '@/entities/Token';
import { useAppDispatch, useAppSelector } from '../providers/StoreProvider';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
    const dispatch = useAppDispatch();
    const token = useAppSelector(getToken);
    const router = useRouter();

    useEffect(() => {
        dispatch(tokenActions.setToken(''));
    }, []);

    useEffect(() => {
        if (token) return;

        router.push('/', { scroll: false });
    }, [token]);

    return <></>;
}
