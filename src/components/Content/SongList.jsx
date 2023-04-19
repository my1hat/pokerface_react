import { lazy, Suspense, useState } from 'react';
import Section from './Section';
import Container from './Container';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PdfSongsRender from '../UI/PdfSongsRender';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import TiltParalax from '../settings/TiltParalax';
import { motion } from 'framer-motion';
const Songs = lazy(() => import('../Songs/Songs'));

const SongList = () => {
  const [ruSongs, setRuSongs] = useState([]);
  const [engSongs, setEngSongs] = useState([]);
  return (
    <Section addClass="songs" id="songs-list">
      <Container>
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

        <Suspense fallback={<p>Загрузка...</p>}>
          <Songs
            lang="Отечественные"
            {...{
              ruSongs,
              setRuSongs,
              engSongs,
              setEngSongs,
            }}
          />
        </Suspense>
        <Suspense fallback={<p>Загрузка...</p>}>
          <Songs
            lang="Зарубежные"
            {...{
              ruSongs,
              setRuSongs,
              engSongs,
              setEngSongs,
            }}
          />
        </Suspense>
        <Box
          className="button-wrapper-songs"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '2rem',
          }}
        >
          {/* <PdfSongsRender ruSongs={ruSongs} engSongs={engSongs} /> */}
          <TiltParalax>
            <PDFDownloadLink
              style={{ textDecoration: 'none' }}
              document={<PdfSongsRender {...{ ruSongs, engSongs }} />}
              fileName="Pokerface_songs.pdf"
            >
              <Button
                variant="contained"
                color="error"
                size="large"
                endIcon={<DownloadIcon />}
                // href="/Pokerface_songs.pdf"
                // download="Pokerface_songs.pdf"
              >
                Скачать весь репертуар
              </Button>
            </PDFDownloadLink>
          </TiltParalax>
        </Box>
        <Box
          className="raider-wrapper raiders"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '2rem',
            gap: 2,
          }}
        >
          <TiltParalax>
            <Button
              className="raider-button"
              variant="contained"
              endIcon={<DownloadIcon />}
              size="large"
              color="error"
              href="/Pokerface_Bytovoi_Rider.pdf"
              download="Pokerface_Bytovoi_Rider.pdf"
            >
              Бытовой райдер
            </Button>
          </TiltParalax>
          <TiltParalax>
            <Button
              className="raider-button"
              variant="contained"
              endIcon={<DownloadIcon />}
              color="error"
              size="large"
              href="/Pokerface_Tech_Rider.pdf"
              download="Pokerface_Tech_Rider.pdf"
            >
              Технический райдер
            </Button>
          </TiltParalax>
        </Box>
      </Container>
    </Section>
  );
};

export default SongList;
