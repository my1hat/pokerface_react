// import Form from './Form';
import contactsStyles from './Contacts.module.scss';
import avatar from '../../images/avatar.jpg';
import TiltParalax from '../UI/TiltParalax';
import Button from '@mui/material/Button';
import PhoneIcon from '@mui/icons-material/Phone';
import { motion } from 'framer-motion';

function Contacts() {
  return (
    <section className={contactsStyles.contacts} id="contacts">
      <div className={`container`}>
        <div className={contactsStyles.wrapper}>
          <TiltParalax classEnter={contactsStyles.contactsCard}>
            {/* <ul className="manager"> */}
            <motion.li
              className={contactsStyles.managerItem}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                className={contactsStyles.managerImg}
                src={avatar}
                alt="Аватарка"
              />
              <h3 className={contactsStyles.managerTitle}>Вячеслав</h3>
              <p className={contactsStyles.managerDesc}>Руководитель проекта</p>
            </motion.li>
            <motion.li
              className={contactsStyles.managerItem}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className={contactsStyles.managerTitle}>Телефон</h3>
              {/* <p className="manager__desc manager__phone"></p> */}
              <Button
                className="contacts__button"
                variant="contained"
                href="tel:+79264610236"
                color="error"
                startIcon={<PhoneIcon />}
                // sx={{ transform: 'translateY(-10px) translateZ(80px)' }}
              >
                +7 (926) 461-02-36
              </Button>
            </motion.li>
            {/* </ul> */}
          </TiltParalax>
        </div>
      </div>
    </section>
  );
}
export default Contacts;
