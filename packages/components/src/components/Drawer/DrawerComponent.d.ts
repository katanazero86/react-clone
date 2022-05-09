/// <reference types="react" />
interface IItem {
    label?: string;
    isExpend?: boolean;
    expendItems?: {
        label?: string;
    }[];
}
interface DrawerComponentProps {
    open?: boolean;
    close?(): void;
    items?: IItem[];
}
export default function DrawerComponent({ open, close, items }: DrawerComponentProps): JSX.Element;
export {};
