import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar/AppBar';

export default function Layout() {
  return (
    <div>
      <header><AppBar/></header>
      <Suspense>
      <Outlet />
      </Suspense>
    </div>
  );
}