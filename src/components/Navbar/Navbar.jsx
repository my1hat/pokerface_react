import NavItem from './NavItem';

import './Navbar.scss';

import Logo from '../Content/Logo';
import Socials from '../Content/Socials';

function Navbar() {
  return (
    <div className="navbar mui-fixed">
      <div className="navbar__container">
        <Logo section="navbar" />
        <nav className="nav">
          <ul className="nav__list">
            <NavItem name="Начальная" link="intro" />
            <NavItem name="О нас" link="about" />
            <NavItem name="Услуги" link="features" />
            <NavItem name="Контент" link="media" />
            <NavItem name="Репертуар" link="songs" />
            <NavItem name="Контакты" link="contacts" />
          </ul>
        </nav>
        <Socials />
        <a className="navbar__tel" href="tel:+79264610236">
          +7(926)461-02-36
        </a>
      </div>
    </div>
  );
}
export default Navbar;
