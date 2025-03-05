import Logo from '../components/Logo';

const Nav = () => {
  return (
    <header className="nav">
      <Logo/>

      <nav>
        <ul className='nav__linksContainer'>
          <li>About Us</li>
          <li>Courses</li>
          <li>Workshop</li>
          <li>Shop</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav