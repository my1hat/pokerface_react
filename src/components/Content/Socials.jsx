import styles from './Socials.module.scss';
import { FaVk, FaTelegramPlane } from 'react-icons/fa';
import { RiWhatsappFill, RiYoutubeFill } from 'react-icons/ri';
import { AiFillInstagram } from 'react-icons/ai';

function Socials() {
  return (
    <div className={styles.socialsWrapper}>
      <a
        className={styles.socialsItem}
        href="https://vk.com/pokerfacecoverband"
      >
        <FaVk className={styles.socialsIcon} />
      </a>
      <a
        className={styles.socialsItem}
        href="https://www.youtube.com/@pokerfacecoverband"
      >
        <RiYoutubeFill className={styles.socialsIcon} />
      </a>
      <a className={styles.socialsItem} href="https://t.me/pokerfacecoverband">
        <FaTelegramPlane className={styles.socialsIcon} />
      </a>
      <a
        className={styles.socialsItem}
        href="https://www.instagram.com/pokerfacecoverband/"
      >
        <AiFillInstagram className={styles.socialsIcon} />
      </a>
      <a
        className={styles.socialsItem}
        href="https://api.whatsapp.com/send?phone=79264610236"
      >
        <RiWhatsappFill className={styles.socialsIcon} />
      </a>
    </div>
  );
}
export default Socials;
