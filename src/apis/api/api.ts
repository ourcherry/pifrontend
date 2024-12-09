import { axiosInstance } from '@/apis/utils';

export const captureImage = async (): Promise<string | null> => {
  try {
      const response = await axiosInstance.post('/capture', null, {
          responseType: "blob",
      });
      const imageUrl = URL.createObjectURL(new Blob([response.data]));
      console.log("capture Image", response, imageUrl)
      return imageUrl;
  } catch (error) {
      console.error("ERROR - captureImage", error);
      return null;
  }
};
