import * as React from 'react';

interface DrawerItemComponentProps {
  label?: string;
  path?: string;
}

export default function DrawerItemComponent({ label, path }: DrawerItemComponentProps) {
  console.log('zzzz');
  return <li data-path={path}>{label}</li>;
}
