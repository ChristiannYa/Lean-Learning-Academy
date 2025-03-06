import { Outlet } from "react-router-dom"
import Nav from "./Nav"

import '../styles/Logo.scss';
import '../styles/Nav.scss';
import '../App.css';

const Layout = () => {
  return (
    <div className="bg-tertiary min-h-screen">
      <Nav />
      <main className="pt-8">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout