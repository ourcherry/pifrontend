import { ReactElement, useEffect, useState } from 'react';

import { Button, ScrollArea, ScrollBar, Separator } from '@/components';
import { useCollageStore } from '@/store/client';
import { cn } from '@/lib/utils';
import { toastHandler } from '@/hooks';
import { downloadCollage, generateCollage, SERVER_URL } from '@/apis';

export const Edit = (): ReactElement => {
    const { collagePath, setCollagePath } = useCollageStore();
    const [framedCollage, setFramedCollage] = useState<string>(collagePath);

    const handleDownload = async () => {
        try {
            const requestURL = framedCollage.substring(
                collagePath.indexOf('/collage'),
            );

            const blob = await downloadCollage(requestURL);
            if (!blob) {
                console.error('Failed to download blob');
                return;
            }

            const downLoadURL = URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.href = downLoadURL;
            a.download = framedCollage.split('/').pop() || 'collage';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            URL.revokeObjectURL(downLoadURL);
        } catch (error) {
            console.error('ERROR - handleDownload', error);
        }
    };

    const handleFrameImageChange = async (frameName: string) => {
        if (!collagePath) {
            toastHandler({
                description: 'Both collage image and frame image are required!',
            });
            return;
        }

        const collageName: string = collagePath.split('/').pop() || '';
        generateCollage(collageName, frameName).then((res) => {
            setFramedCollage(SERVER_URL + res.framedCollageUrl);
            toastHandler({
                description: '🎞 Applied the selected frame',
            });
        });
    };

    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight">
                        Edit
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Select frames for collage!
                    </p>
                </div>
            </div>
            <Separator className="my-4" />

            <div className="flex h-[380px] shrink-0 items-center justify-center rounded-md border border-dashed">
                <div className="mx-auto flex max-w-[400px] flex-col items-center justify-center text-center">
                    <Button
                        variant="outline"
                        className="h-8 p-2 ml-3 mb-2"
                        onClick={handleDownload}
                    >
                        Download 💾
                    </Button>
                    {collagePath && (
                        <img
                            src={framedCollage || collagePath}
                            alt="Collage"
                            width="400"
                            height="300"
                            style={{ border: '1px solid lightgray' }}
                        />
                    )}
                </div>
            </div>

            <Separator className="my-6" />
            <div className="relative">
                <ScrollArea>
                    <div className="flex space-x-4 pb-4">
                        <div className={cn('space-y-3', 'w-[240px]')}>
                            <div className="overflow-hidden rounded-md">
                                <img
                                    src="http://192.168.0.27:5000/frames/frame1.png"
                                    alt="frame1.png"
                                    width={240}
                                    height={160}
                                    className={cn(
                                        'h-auto w-auto object-cover transition-all hover:scale-105',
                                        'aspect-[4/3]',
                                    )}
                                    onClick={() =>
                                        handleFrameImageChange('frame1.png')
                                    }
                                />
                            </div>
                            <div className="space-y-1 text-sm">
                                <h3 className="font-medium leading-none">
                                    frame 1
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                    default black frame
                                </p>
                            </div>
                        </div>
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>
        </div>
    );
};
