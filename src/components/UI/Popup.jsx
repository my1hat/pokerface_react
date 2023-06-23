import { useState, memo } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Tooltip from '@mui/material/Tooltip';
import DialogTitle from '@mui/material/DialogTitle';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import CopyToClipboard from 'react-copy-to-clipboard';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import Box from '@mui/material/Box';
import CartIcon from './CartIcon';
import useMediaQuery from '@mui/material/useMediaQuery';
import songStyles from '../Song_page/SongList.module.scss';
import popupStyles from './Popup.module.scss';

const Popup = ({ count, tracks, setTracks }) => {
  const [open, setOpen] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  // const { tracks, setTracks } = useContext(TracksContext);
  // const [copied, setCopied] = useState(false);

  // const handleCopy = () => {
  //   setCopied(true);
  //   setTimeout(() => setCopied(false), 2000);
  // };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpenSnack = () => {
    setOpenSnack(true);
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCleanTracks = () => {
    setTracks(tracks.filter((track) => !track));
    setOpen(false);
  };

  const deleteSongHandler = (song) => {
    const updatedTracks = tracks.map((track) =>
      track.song === song ? { ...track, hidden: true } : track
    );
    setTracks(updatedTracks);
    setTimeout(() => {
      setTracks(updatedTracks.filter((track) => track.song !== song));
    }, 200);
    if (tracks.length === 1) {
      handleClose();
    }
  };

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 450,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    palette: {
      primary: {
        main: '#a4a4a4',
      },
      secondary: {
        main: '#202020',
      },
      green: {
        main: '#25d366',
      },
    },
  });
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const totalLength = tracks
    .reduce((acc, curr) => acc + parseFloat(curr.length), 0)
    .toFixed(2);

  const arraySongs = tracks.map((track) => {
    return `${track.author} - ${track.song} (${track.length})\n`;
  });

  const text = `${arraySongs.join(
    ''
  )}\nКол-во песен: ${count}\nОбщее время выступления: ${totalLength}`;
  return (
    <div>
      <CartIcon count={count} onClick={handleClickOpen} />
      <ThemeProvider theme={theme}>
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="md"
          fullScreen={matches}
        >
          <DialogTitle
            className={popupStyles.popupHeader}
            sx={{ fontFamily: 'unset' }}
          >
            Ваш сет-лист
            <IconButton
              aria-label="close"
              color="inherit"
              sx={{ p: 0.5, float: 'right' }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <ul className={popupStyles.titles}>
              <li className="popup-titles__row">
                <span className={popupStyles.titleSong}>Композиция</span>
                {/* <span className="popup__title-length ">Длительность</span> */}
              </li>
            </ul>
            <ul>
              {tracks.map((track) => {
                return (
                  <li
                    key={track.song}
                    className={`${popupStyles.trackItem} ${
                      track.hidden ? popupStyles.hidden : ''
                    }`}
                  >
                    <div
                      className={`${songStyles.author} ${popupStyles.author}`}
                    >
                      {track.author}&nbsp;
                    </div>
                    <div className={`${songStyles.song} ${popupStyles.song}`}>
                      &mdash;&nbsp;{track.song}
                    </div>
                    <Tooltip title="удалить">
                      <div
                        className={`${songStyles.playButton} ${popupStyles.deleteButton}`}
                      >
                        <IconButton
                          color="inherit"
                          onClick={() => {
                            deleteSongHandler(track.song);
                            setTracks(
                              tracks.map((t) => {
                                if (t.song === track.song) {
                                  return { ...t, hidden: true };
                                }
                                return t;
                              })
                            );
                          }}
                        >
                          <DeleteForeverRoundedIcon />
                        </IconButton>
                      </div>
                    </Tooltip>
                    <div
                      className={`${songStyles.length} ${popupStyles.length}`}
                    >
                      {track.length.replace('.', ':')}
                    </div>
                  </li>
                );
              })}
            </ul>
            {tracks.length === 0 && <div className="noTracks">Список пуст</div>}
            <div className={popupStyles.total}>
              <div className={popupStyles.totalTitle}>Итого:</div>
              <div className={popupStyles.totalSongs}>
                Песен:&nbsp;
                <span className={popupStyles.totalCount}>{count}</span>
              </div>
              <div className={popupStyles.totalLength}>
                Общее время:&nbsp;
                <span className={popupStyles.totalCount}>{totalLength}</span>
              </div>
            </div>
            <p className={`paragraph ${popupStyles.conditions}`}>
              &lowast;&nbsp;Минимальная длительность выступления - 90 минут.
              Программу можно разделить на блоки как Вам удобно. Например: 3 по
              30 минут или 2 по 45 минут.
            </p>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                margin: '1rem 0 0 0 ',
              }}
            >
              <p className={`paragraph ${popupStyles.copyInstructions}`}>
                Скопируйте сет-лист и отправьте его нам прямо сейчас!
              </p>
              <CopyToClipboard text={text}>
                <Button
                  variant="contained"
                  color="error"
                  endIcon={<ContentPasteIcon />}
                  onClick={handleClickOpenSnack}
                >
                  Скопировать сет-лист
                </Button>
              </CopyToClipboard>
              <Box
                sx={{
                  boxShadow: '1px 1px 3px #00000035',
                  borderRadius: '0.5rem',
                  padding: '0.3rem',
                  margin: '1rem 0 0 0 ',
                }}
              >
                <IconButton
                  href="https://api.whatsapp.com/send?phone=79264610236"
                  target="_blank"
                  color="green"
                  size="large"
                >
                  <WhatsAppIcon fontSize="large" />
                </IconButton>
                <IconButton
                  href="https://t.me/pokerface_coverband"
                  target="_blank"
                  color="info"
                  size="large"
                >
                  <TelegramIcon fontSize="large" />
                </IconButton>
              </Box>
            </Box>
            <Snackbar
              anchorOrigin={
                matches
                  ? { vertical: 'bottom', horizontal: 'center' }
                  : { vertical: 'top', horizontal: 'center' }
              }
              open={openSnack}
              autoHideDuration={3000}
              onClose={handleCloseSnack}
              sx={matches ? { marginBottom: '3.4rem' } : null}
            >
              <MuiAlert
                elevation={2}
                variant="filled"
                onClose={handleCloseSnack}
                severity="success"
                sx={{ width: '100%' }}
              >
                Сет-лист скопирован
              </MuiAlert>
            </Snackbar>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleCleanTracks}
              size="large"
            >
              Очистить
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleClose}
              size="large"
            >
              Закрыть
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </div>
  );
};
export default memo(Popup);
