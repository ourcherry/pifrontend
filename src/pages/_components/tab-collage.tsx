import { ReactElement } from 'react';

import { Button, Separator } from '@/components';
import { createCollage, SERVER_URL } from '@/apis';
import { useCollageStore } from '@/store/client';
import { toastHandler } from '@/hooks';

export const Collage = (): ReactElement => {
    const { collagePath, setCollagePath } = useCollageStore();

    const handleCreateCollage = async () => {
        createCollage().then((res) => {
            setCollagePath(SERVER_URL + res.collagePath);
            toastHandler({
                description: '🎆 Created collage',
            });
        });
    };

    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight">
                        Collage
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Check your 인생네컷 pictures 💗
                    </p>
                </div>
            </div>
            <Separator className="my-4" />

            <div className="flex h-[380px] shrink-0 items-center justify-center rounded-md border border-dashed">
                <div className="mx-auto flex max-w-[400px] flex-col items-center justify-center text-center">
                    <div className="mb-2">
                        <Button
                            variant="outline"
                            className="h-8 p-2"
                            onClick={handleCreateCollage}
                        >
                            {collagePath
                                ? 'Recreate collage 🛠'
                                : 'Create collage 🔧'}
                        </Button>
                    </div>
                    {collagePath && (
                        <img
                            src={collagePath}
                            alt="Collage"
                            width="400"
                            height="300"
                            style={{ border: '1px solid lightgray' }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};
