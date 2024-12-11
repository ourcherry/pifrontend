import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components';
import { Camera, Captures, Collage, Edit, Menu } from './_components';

export const HomePage = (): JSX.Element => {
    return (
        <>
            <div>
                <Menu />
                <div className="border-t">
                    <div className="bg-background">
                        <div className="grid lg:grid-cols-4">
                            <div className="col-span-3 lg:col-span-4 lg:border-l">
                                <div className="h-full px-4 py-6 lg:px-8">
                                    <Tabs
                                        defaultValue="camera"
                                        className="h-full space-y-6"
                                    >
                                        <div className="space-between flex items-center">
                                            <TabsList>
                                                <TabsTrigger value="camera">
                                                    Camera
                                                </TabsTrigger>
                                                <TabsTrigger
                                                    value="captures"
                                                    className="relative"
                                                >
                                                    Captures
                                                </TabsTrigger>
                                                <TabsTrigger value="collage">
                                                    Collage
                                                </TabsTrigger>
                                                <TabsTrigger
                                                    value="edit"
                                                    className="relative"
                                                >
                                                    Edit
                                                </TabsTrigger>
                                            </TabsList>
                                        </div>

                                        <TabsContent
                                            value="camera"
                                            className="h-full flex-col border-none p-0 data-[state=active]:flex"
                                        >
                                            <Camera />
                                        </TabsContent>
                                        <TabsContent
                                            value="captures"
                                            className="border-none p-0 outline-none"
                                        >
                                            <Captures />
                                        </TabsContent>
                                        <TabsContent
                                            value="collage"
                                            className="h-full flex-col border-none p-0 data-[state=active]:flex"
                                        >
                                            <Collage />
                                        </TabsContent>
                                        <TabsContent
                                            value="edit"
                                            className="border-none p-0 outline-none"
                                        >
                                            <Edit />
                                        </TabsContent>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
