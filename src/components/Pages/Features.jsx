import featuresStyles from './Features.module.scss';
import { GiTrophyCup, GiDrumKit, GiSpeaker } from 'react-icons/gi';
import { TfiWorld } from 'react-icons/tfi';
import { MdMoneyOff, MdEventAvailable } from 'react-icons/md';
import TiltParalax from '../UI/TiltParalax';
import { motion } from 'framer-motion';

function Features() {
  return (
    <section className={featuresStyles.features} id="features">
      <div className={`${featuresStyles.container} container`}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Наши приемущества
        </motion.h2>
        <div className={featuresStyles.featuresWrap}>
          <TiltParalax classEnter={featuresStyles.featuresCard}>
            <motion.section
              className="features-wrap__item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className={featuresStyles.featuresWrapIconContainer}>
                <GiTrophyCup className={featuresStyles.featuresWrapIcon} />
              </div>
              <h3 className={featuresStyles.featuresWrapTitle}>Большой опыт</h3>
              <p className={featuresStyles.featuresWrapDesc}>
                За нашими плечами более 15-ти лет профессиональной музыкальной
                деятельности.
              </p>
            </motion.section>
          </TiltParalax>
          <TiltParalax classEnter={featuresStyles.featuresCard}>
            <motion.section
              className="features-wrap__item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <div className={featuresStyles.featuresWrapIconContainer}>
                <TfiWorld className={featuresStyles.featuresWrapIcon} />
              </div>
              <h3 className={featuresStyles.featuresWrapTitle}>
                Являемся участниками
              </h3>
              <p className={featuresStyles.featuresWrapDesc}>
                Международной Ассоциации Музыкальных Коллективов.
              </p>
            </motion.section>
          </TiltParalax>
          <TiltParalax classEnter={featuresStyles.featuresCard}>
            <motion.section
              className="features-wrap__item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className={featuresStyles.featuresWrapIconContainer}>
                <GiDrumKit className={featuresStyles.featuresWrapIcon} />
              </div>
              <h3 className={featuresStyles.featuresWrapTitle}>
                Свое оборудование
              </h3>
              <p className={featuresStyles.featuresWrapDesc}>
                У нас минимальные требования по техническим вопросам. Можем
                привести все свое. Мы не привязаны к географии.
              </p>
            </motion.section>
          </TiltParalax>
          <TiltParalax classEnter={featuresStyles.featuresCard}>
            <motion.section
              className="features-wrap__item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className={featuresStyles.featuresWrapIconContainer}>
                <GiSpeaker className={featuresStyles.featuresWrapIcon} />
              </div>
              <h3 className={featuresStyles.featuresWrapTitle}>Звук</h3>
              <p className={featuresStyles.featuresWrapDesc}>
                Звучание и аранжировка максимально приближено к оригиналу.
              </p>
            </motion.section>
          </TiltParalax>
          <TiltParalax classEnter={featuresStyles.featuresCard}>
            <motion.section
              className="features-wrap__item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <div className={featuresStyles.featuresWrapIconContainer}>
                <MdMoneyOff className={featuresStyles.featuresWrapIcon} />
              </div>
              <h3 className={featuresStyles.featuresWrapTitle}>Без переплат</h3>
              <p className={featuresStyles.featuresWrapDesc}>
                Нас всего четверо. Вы не будете платить дополнительно за работу
                звукорежиссёра, директора и т.д.
              </p>
            </motion.section>
          </TiltParalax>
          <TiltParalax classEnter={featuresStyles.featuresCard}>
            <motion.section
              className="features-wrap__item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className={featuresStyles.featuresWrapIconContainer}>
                <MdEventAvailable className={featuresStyles.featuresWrapIcon} />
              </div>
              <h3 className={featuresStyles.featuresWrapTitle}>
                Любое мероприятие
              </h3>
              <p className={featuresStyles.featuresWrapDesc}>
                Свадьбы, корпоративы, рестораны, дни рождения, концерты и т.д.
              </p>
            </motion.section>
          </TiltParalax>
        </div>
      </div>
    </section>
  );
}
export default Features;
