import { useState, useEffect, useRef } from 'react';

// dropdown component 를 위한 커스텀 훅
export default function useDetectOutsideClick() {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const outsideClick = (e: Event) => {
      const targetEl = e.target as HTMLElement;
      const dropdownRefEl = dropdownRef?.current as HTMLElement;

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

  return [open, setOpen, dropdownRef] as const;
}
