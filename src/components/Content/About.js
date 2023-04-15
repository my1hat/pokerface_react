import './About.scss';
import { Link } from 'react-scroll';
import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
const Photo = lazy(() => import('./Photo'));
// import Photo from './Photo';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';

function About() {
  return (
    <>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        POKERFACE
      </motion.h2>
      <motion.p
        className="paragraph"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        Уникальная, яркая и стильная кавер-группа мирового уровня! Коллектив
        имеет огромный профессиональный опыт и успешно зарекомендовал себя на
        многих площадках.
      </motion.p>

      <motion.p
        className="paragraph"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        Pokerface подходит для любой публики с разными музыкальными вкусами.
        Музыканты чувствуют настроение зрителей и всегда удачно выбирают
        следующую песню. Выступления проходят на любых праздничных мероприятиях:
        корпоративный вечер, день рождения, свадьба и многие другие.
      </motion.p>
      <motion.p
        className="paragraph"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        В{' '}
        <Link
          to="songs"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="paragraph__link paragraph__link_red"
        >
          репертуар
        </Link>{' '}
        включены лучшие песни из дискотеки 80-х, 90-х, зарубежного и
        отечественного рока, современных поп-хитов и не только.
      </motion.p>
      <Suspense fallback={<div>Loading...</div>}>
        <Photo />
      </Suspense>
    </>
  );
}

export default About;
