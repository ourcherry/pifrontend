import { ReactElement } from 'react';

import { ScrollArea, ScrollBar, Separator } from '@/components';
import { useCaptureStore } from '@/store/client';
import { cn } from '@/lib/utils';

export const Captures = (): ReactElement => {
    const { capturedImages } = useCaptureStore();

    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight">
                        Captures
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Check recent 4 pictures 🌉
                    </p>
                </div>
            </div>
            <Separator className="my-4" />
            <div className="relative">
                <ScrollArea>
                    <div className="flex space-x-4 pb-4">
                        {capturedImages.map((image, index) => (
                            <div
                                key={index}
                                className={cn('space-y-3', 'w-[240px]')}
                            >
                                <div className="overflow-hidden rounded-md">
                                    <img
                                        src={image}
                                        alt={index.toString()}
                                        width={240}
                                        height={320}
                                        className={cn(
                                            'h-auto w-auto object-cover transition-all hover:scale-105',
                                            'portrait' === 'portrait'
                                                ? 'aspect-[3/4]'
                                                : 'aspect-square',
                                        )}
                                    />
                                </div>
                                <div className="space-y-1 text-sm">
                                    <h3 className="font-medium leading-none">
                                        {index + 1}
                                    </h3>
                                    <p className="text-xs text-muted-foreground">
                                        {image.split('/').pop()}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>
        </div>
    );
};
