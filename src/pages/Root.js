import { Outlet } from 'react-router-dom';
import MainNavigation from '../component/MainNavigation';

export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
