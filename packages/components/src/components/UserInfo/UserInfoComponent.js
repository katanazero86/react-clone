import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import classes from './UserInfoComponent.module.scss';
import clsx from 'clsx';
export default function UserInfoComponent({ imgUrl, user = { userId: '', userName: '' } }) {
  return _jsxs('div', {
    className: clsx(classes.userInfo),
    children: [
      _jsx('div', { className: clsx(classes.avatar), children: _jsx('img', { alt: 'user-avatar', src: imgUrl }) }),
      _jsxs('div', {
        className: clsx(classes.info),
        children: [
          _jsx('p', { className: clsx(classes.id), children: user.userId }),
          _jsx('p', { className: clsx(classes.name), children: user.userName }),
        ],
      }),
    ],
  });
}
