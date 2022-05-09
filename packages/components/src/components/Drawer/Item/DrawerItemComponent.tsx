import * as React from 'react';

interface DrawerItemComponentProps {
  label?: string;
  path?: string;
}

export default function DrawerItemComponent({ label, path }: DrawerItemComponentProps) {
  return <li data-path={path}>{label}</li>;
}
