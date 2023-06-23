import Logo from '../UI/Logo';
import Socials from '../UI/Socials';
import footerStyles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className={`container`}>
        <div className={footerStyles.inner}>
          <div className={footerStyles.copyright}>
            <span className={footerStyles.copyrightName}>
              Кавер группа Pokerface
            </span>
            <span className={footerStyles.copyrightYear}>2023</span>
          </div>
          <Logo section={footerStyles.footerLogo} />
          <Socials />
        </div>
      </div>
    </footer>
  );
}
export default Footer;
