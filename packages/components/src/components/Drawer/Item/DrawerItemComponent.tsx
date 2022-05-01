import * as React from 'react';

interface DrawerItemComponentProps {
  children?: string | React.ReactElement;
}

export default function DrawerItemComponent({ children }: DrawerItemComponentProps) {
  return <li>{children}</li>;
}
