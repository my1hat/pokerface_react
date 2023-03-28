import logo from '../../images/PokerFace_logo_1.png';

function Logo({ section }) {
  return (
    <>
      <img className={`${section}__logo`} src={logo} alt="pokerface logo" />
    </>
  );
}
export default Logo;
