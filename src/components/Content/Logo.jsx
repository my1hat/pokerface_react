import logo from '../../images/PokerFace_logo_1.png';

function Logo({ section }) {
  return (
    <>
      <img className={`${section}__logo`} src={logo} alt="Лого Pokerface" />
    </>
  );
}
export default Logo;
