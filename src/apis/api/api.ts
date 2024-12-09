import { axiosInstance } from '@/apis/utils';

// constants
const BASE_URL = 'http://192.168.0.27:5000';
export const SERVER_URL = BASE_URL + '/';
export const VIDEO_URL = BASE_URL + '/video_feed';

export const captureImage = async () => {
    try {
        const { data } = await axiosInstance.post('/capture');
        return data;
    } catch (error) {
        console.error('ERROR - captureImage', error);
        return null;
    }
};

export const createCollage = async () => {
    try {
        const { data } = await axiosInstance.post('/collage');
        return data;
    } catch (error) {
        console.error('ERROR - createCollage', error);
        return null;
    }
};
