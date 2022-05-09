/// <reference types="react" />
interface DrawerExpendItemComponentProps {
  handleExpend?(property: string): void;
  isExpend?: boolean;
  label?: string;
  expendItems?: {
    label?: string;
  }[];
}
export default function DrawerExpendItemComponent({
  handleExpend,
  isExpend,
  label,
  expendItems,
}: DrawerExpendItemComponentProps): JSX.Element;
export {};
