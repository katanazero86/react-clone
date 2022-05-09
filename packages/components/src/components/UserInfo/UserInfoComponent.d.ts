/// <reference types="react" />
interface UserInfoComponentProps {
    imgUrl?: string;
    user?: {
        userId: string;
        userName: string;
    };
}
export default function UserInfoComponent({ imgUrl, user }: UserInfoComponentProps): JSX.Element;
export {};
