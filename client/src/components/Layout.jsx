import { Outlet } from "react-router-dom"
import Nav from "./Nav"

import '../styles/Logo.scss';
import '../styles/Nav.scss';
import '../App.css';

const Layout = () => {
  return (
    <div>
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout