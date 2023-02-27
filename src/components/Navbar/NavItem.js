import NavLink from './NavLink.js';
function NavItem({ name, link }) {
  return (
    <li className="nav__item">
      <NavLink name={name} link={link} />
    </li>
  );
}
export default NavItem;
