import { jsx as _jsx } from 'react/jsx-runtime';
export default function ChevronUp({ width = 16, height = 16, color = '#6b7280' }) {
  return _jsx('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: width,
    height: height,
    fill: color,
    viewBox: '0 0 16 16',
    children: _jsx('path', {
      fillRule: 'evenodd',
      d: 'M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z',
    }),
  });
}
