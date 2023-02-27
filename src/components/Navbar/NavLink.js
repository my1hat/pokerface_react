import { Link } from 'react-scroll';
function NavLink({ name, link }) {
  return (
    <>
      <Link
        className="nav__link"
        activeClass="active"
        to={link}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        {name}
      </Link>
    </>
  );
}
export default NavLink;
