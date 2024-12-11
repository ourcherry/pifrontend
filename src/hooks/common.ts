import { toast as showToast } from '@/components';

// toast 추상화 -  axios intercepter 에서 바로 호출시 react hook call error 방지
export const toastHandler = (message: {
    title?: string;
    description: string | JSX.Element;
}) => {
    showToast(message);
};
