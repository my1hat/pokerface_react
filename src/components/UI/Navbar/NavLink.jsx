import { Link } from 'react-scroll';
import navStyles from './Navbar.module.scss';
function NavLink({ name, link }) {
  return (
    <>
      <Link
        className={navStyles.navLink}
        activeClass={navStyles.active}
        to={link}
        spy={true}
        smooth={true}
        offset={-75}
        duration={500}
      >
        {name}
      </Link>
    </>
  );
}
export default NavLink;
