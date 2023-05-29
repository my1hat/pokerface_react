// import Form from './Form';
import './Contacts.scss';
import Section from './Section';
import Container from './Container';
import avatar from '../../images/avatar.jpg';
import TiltParalax from '../settings/TiltParalax';
import Button from '@mui/material/Button';
import PhoneIcon from '@mui/icons-material/Phone';
import { motion } from 'framer-motion';

function Contacts() {
  return (
    <Section addClass="contacts" id="contacts">
      <Container>
        {/* <motion.h2
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Контакты
        </motion.h2> */}
        {/* <motion.p
          className="paragraph"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Свяжитесь с нами, чтобы получить полную информацию о цене, свободна ли
          дата и прочие условия.
        </motion.p> */}
        <div className="contacts__wrapper">
          {/* <Form /> */}
          <TiltParalax classEnter="contacts__card">
            {/* <ul className="manager"> */}
            <motion.li
              className="manager-item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img className="manager__img" src={avatar} alt="Аватарка" />
              <h3 className="manager__title">Вячеслав</h3>
              <p className="manager__desc">Руководитель проекта</p>
            </motion.li>
            <motion.li
              className="manager-item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="manager__title">Телефон</h3>
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
      </Container>
    </Section>
  );
}
export default Contacts;
