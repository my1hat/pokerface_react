import Container from './Container';
import Logo from './Logo';
import Socials from './Socials';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="inner">
          <div className="copyright">
            <span className="copyright__text">Кавер группа Pokerface</span>
            <span className="copyright__text-year">2023</span>
          </div>
          <Logo section="inner" />
          <Socials />
        </div>
      </Container>
    </footer>
  );
}
export default Footer;
