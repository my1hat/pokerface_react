import NavLink from './NavLink';
import navStyles from './Navbar.module.scss';

function NavItem({ name, link }) {
  return (
    <li className={navStyles.navItem}>
      <NavLink name={name} link={link} />
    </li>
  );
}
export default NavItem;
