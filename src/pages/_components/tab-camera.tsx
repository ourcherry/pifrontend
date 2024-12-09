import { ReactElement } from 'react';

import { Button, Separator } from '@/components';
import { captureImage, SERVER_URL, VIDEO_URL } from '@/apis';
import { useCaptureStore } from '@/store/client';

export const Camera = (): ReactElement => {
    const { capturedImages, setCapturedImages } = useCaptureStore();

    const handleCapture = async () => {
        captureImage().then((res) => {
            const recentImage = SERVER_URL + res.imagePath;
            const imagesArrSize4 = [...capturedImages, recentImage].slice(-4);
            setCapturedImages(imagesArrSize4);
        });
    };

    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight">
                        Take Captures
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Take 4 captures for 인생네컷 ver.cherry!
                    </p>
                </div>
            </div>
            <Separator className="my-4" />

            <div className="flex h-[400px] shrink-0 items-center justify-center rounded-md border border-dashed">
                <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
                    <p className="pl-1 mb-2 mt-2 text-sm text-muted-foreground font-semibold">
                        Smile 😋
                        <Button
                            variant="outline"
                            className="ml-[90px] h-8 p-2"
                            onClick={handleCapture}
                        >
                            capture 📷
                        </Button>
                    </p>
                    <img
                        src="" //{VIDEO_URL}
                        alt="Live Stream"
                        width="240"
                        height="320"
                        style={{ border: '1px solid lightgray' }}
                    />
                </div>
            </div>
        </div>
    );
};
