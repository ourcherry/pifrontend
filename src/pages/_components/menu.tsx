import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from '@/components';

export const Menu = () => {
    return (
        <Menubar className="rounded-none border-b border-none px-2 lg:px-4">
            <MenubarMenu>
                <MenubarTrigger className="font-bold">
                    cherry cam 🍒
                </MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>Made by Heera 🙋🏻‍♀️</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>임베디드 시스템 설계(2024)</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    );
};
