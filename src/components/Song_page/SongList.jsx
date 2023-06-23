import songStyles from './SongList.module.scss';

import { motion } from 'framer-motion';
import Inner from './Inner';

const SongList = () => {
  return (
    <section className={songStyles.songs} id="songlist">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Репертуар
        </motion.h2>
        <motion.p
          className="paragraph"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Вы можете собрать сет-лист на своё мероприятие и отправить нам!
        </motion.p>
        <Inner />
      </div>
    </section>
  );
};

export default SongList;
