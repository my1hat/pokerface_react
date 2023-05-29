import './Features.scss';
import Section from './Section';
import Container from './Container';
import { GiTrophyCup, GiDrumKit, GiSpeaker } from 'react-icons/gi';
import { TfiWorld } from 'react-icons/tfi';
import { MdMoneyOff, MdEventAvailable } from 'react-icons/md';
import TiltParalax from '../settings/TiltParalax';
import { motion } from 'framer-motion';

function Features() {
  return (
    <Section addClass="features" id="features">
      <Container>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Наши приемущества
        </motion.h2>
        <div className="features-wrap">
          <TiltParalax classEnter="features__card">
            <motion.section
              className="features-wrap__item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="features-wrap__icon-container">
                <GiTrophyCup className="features-wrap__icon" />
              </div>
              <h3 className="features-wrap__title">Большой опыт</h3>
              <p className="features-wrap__desc ">
                За нашими плечами более 15-ти лет профессиональной музыкальной
                деятельности.
              </p>
            </motion.section>
          </TiltParalax>
          <TiltParalax classEnter="features__card">
            <motion.section
              className="features-wrap__item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <div className="features-wrap__icon-container">
                <TfiWorld className="features-wrap__icon" />
              </div>
              <h3 className="features-wrap__title">Являемся участниками</h3>
              <p className="features-wrap__desc">
                Международной Ассоциации Музыкальных Коллективов.
              </p>
            </motion.section>
          </TiltParalax>
          <TiltParalax classEnter="features__card">
            <motion.section
              className="features-wrap__item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="features-wrap__icon-container">
                <GiDrumKit className="features-wrap__icon" />
              </div>
              <h3 className="features-wrap__title">Свое оборудование</h3>
              <p className="features-wrap__desc">
                У нас минимальные требования по техническим вопросам. Можем
                привести все свое. Мы не привязаны к географии.
              </p>
            </motion.section>
          </TiltParalax>
          <TiltParalax classEnter="features__card">
            <motion.section
              className="features-wrap__item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="features-wrap__icon-container">
                <GiSpeaker className="features-wrap__icon" />
              </div>
              <h3 className="features-wrap__title">Звук</h3>
              <p className="features-wrap__desc">
                Звучание и аранжировка максимально приближено к оригиналу.
              </p>
            </motion.section>
          </TiltParalax>
          <TiltParalax classEnter="features__card">
            <motion.section
              className="features-wrap__item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <div className="features-wrap__icon-container">
                <MdMoneyOff className="features-wrap__icon" />
              </div>
              <h3 className="features-wrap__title">Без переплат</h3>
              <p className="features-wrap__desc">
                Нас всего четверо. Вы не будете платить дополнительно за работу
                звукорежиссёра, директора и т.д.
              </p>
            </motion.section>
          </TiltParalax>
          <TiltParalax classEnter="features__card">
            <motion.section
              className="features-wrap__item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="features-wrap__icon-container">
                <MdEventAvailable className="features-wrap__icon" />
              </div>
              <h3 className="features-wrap__title">Любое мероприятие</h3>
              <p className="features-wrap__desc">
                Свадьбы, корпоративы, рестораны, дни рождения, концерты и т.д.
              </p>
            </motion.section>
          </TiltParalax>
        </div>
      </Container>
    </Section>
  );
}
export default Features;
