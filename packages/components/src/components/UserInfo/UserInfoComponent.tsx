import classes from './UserInfoComponent.module.scss';
import clsx from 'clsx';

interface UserInfoComponentProps {
  imgUrl?: string;
  user?: {
    userId: string;
    userName: string;
  };
}

export default function UserInfoComponent({ imgUrl, user = { userId: '', userName: '' } }: UserInfoComponentProps) {
  return (
    <div className={clsx(classes.userInfo)}>
      <div className={clsx(classes.avatar)}>
        <img alt="user-avatar" src={imgUrl} />
      </div>
      <div className={clsx(classes.info)}>
        <p className={clsx(classes.id)}>{user.userId}</p>
        <p className={clsx(classes.name)}>{user.userName}</p>
      </div>
    </div>
  );
}
