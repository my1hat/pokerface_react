import logo from '../../images/PokerFace_logo_1.png';
// import navStyles from '../Navbar/Navbar.module.scss';
function Logo({ section }) {
  return (
    <>
      <img className={section} src={logo} alt="pokerface logo" />
    </>
  );
}
export default Logo;
