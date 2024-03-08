'use client';
import { ProfileCard } from '@/entities/ProfileCard';
import { ModalBasic } from '@/shared/ui/Modals';

interface ProfileModalProps {
    userId: string;
    open: boolean;
    onCancel: () => void;
}

export const ProfileModal = (props: ProfileModalProps) => {
    const { userId, open, onCancel } = props;

    return (
        <ModalBasic open={open} centered={true} onCancel={onCancel} footer={null} width={'60rem'}>
            <ProfileCard userId={userId}></ProfileCard>
        </ModalBasic>
    );
};
