import React from 'react';
import type { FC } from 'react';

const Layout: FC = ({ children }) => {
  return (
    <div>
      <h4>layout</h4>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
