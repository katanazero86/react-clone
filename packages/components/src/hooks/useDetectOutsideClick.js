import { useState, useEffect, useRef } from 'react';
// dropdown component 를 위한 커스텀 훅
export default function useDetectOutsideClick() {
  const dropdownRef = useRef(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const outsideClick = e => {
      const targetEl = e.target;
      const dropdownRefEl = dropdownRef?.current;
      if (dropdownRef !== null && !dropdownRefEl.contains(targetEl)) {
        setOpen(false);
      }
    };
    if (open) {
      window.addEventListener('click', outsideClick);
    }
    return () => {
      window.removeEventListener('click', outsideClick);
    };
  }, [open, dropdownRef]);
  return [open, setOpen, dropdownRef];
}
