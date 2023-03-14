import styles from './Socials.module.scss';
import { FaVk, FaTelegramPlane } from 'react-icons/fa';
import { RiWhatsappFill, RiYoutubeFill } from 'react-icons/ri';
import { AiFillInstagram } from 'react-icons/ai';
import Tooltip from '@mui/material/Tooltip';

function Socials() {
  return (
    <div className={styles.socialsWrapper}>
      <Tooltip title="Вконтакте">
        <a
          className={`${styles.socialsItem} `}
          href="https://vk.com/pokerfacecoverband"
          target="_blank"
          rel="noreferrer"
        >
          <FaVk className={`${styles.socialsIcon} ${styles.vkIcon}`} />
        </a>
      </Tooltip>
      <Tooltip title="Youtube">
        <a
          className={styles.socialsItem}
          href="https://www.youtube.com/@pokerfacecoverband"
          target="_blank"
          rel="noreferrer"
        >
          <RiYoutubeFill className={`${styles.socialsIcon} ${styles.ytIcon}`} />
        </a>
      </Tooltip>
      <Tooltip title="Telegram">
        <a
          className={styles.socialsItem}
          href="https://t.me/pokerfacecoverband"
          target="_blank"
          rel="noreferrer"
        >
          <FaTelegramPlane
            className={`${styles.socialsIcon} ${styles.tgIcon}`}
          />
        </a>
      </Tooltip>
      <Tooltip title="Instargram">
        <a
          className={styles.socialsItem}
          href="https://www.instagram.com/pokerfacecoverband/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram
            className={`${styles.socialsIcon} ${styles.igIcon}`}
          />
        </a>
      </Tooltip>
      <Tooltip title="WhatsApp">
        <a
          className={styles.socialsItem}
          href="https://api.whatsapp.com/send?phone=79264610236"
          target="_blank"
          rel="noreferrer"
        >
          <RiWhatsappFill
            className={`${styles.socialsIcon} ${styles.waIcon}`}
          />
        </a>
      </Tooltip>
    </div>
  );
}
export default Socials;
