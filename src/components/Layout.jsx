import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar';

export default function Layout() {
  return (
    <div>
      <header><AppBar/></header>
      <Suspense fallback={'Loading...'}>
      <Outlet />
      </Suspense>
    </div>
  );
}