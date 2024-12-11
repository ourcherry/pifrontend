import { ReactElement } from 'react';

import { Button, Separator } from '@/components';
import { captureImage, SERVER_URL, VIDEO_URL } from '@/apis';
import { useCaptureStore } from '@/store/client';
import { toastHandler } from '@/hooks';

export const Camera = (): ReactElement => {
    const { capturedImages, setCapturedImages } = useCaptureStore();

    const handleCapture = async () => {
        captureImage().then((res) => {
            const recentImage = SERVER_URL + res.imagePath;
            const imagesArrSize4 = [...capturedImages, recentImage].slice(-4);
            setCapturedImages(imagesArrSize4);
            toastHandler({
                description: '📸 The capture has taken successfully!',
            });
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
                    <Button
                        variant="outline"
                        className="mb-2 h-8 p-2"
                        onClick={handleCapture}
                    >
                        capture 📷
                    </Button>
                    <img
                        src={VIDEO_URL}
                        alt="Live Stream"
                        width="640"
                        height="480"
                        style={{ border: '1px solid lightgray' }}
                    />
                </div>
            </div>
        </div>
    );
};
