import { useContext, useState } from 'react';
import TracksContext from '../context/TracksContext';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Tooltip from '@mui/material/Tooltip';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CartIcon from './CartIcon';
import './Popup.scss';

export default function Popup({ count }) {
  const [open, setOpen] = useState(false);
  const { tracks, setTracks } = useContext(TracksContext);

  const handleClickOpen = () => {
    setOpen(true);
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

  return (
    <div>
      <CartIcon count={count} onClick={handleClickOpen} />
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogTitle>Ваш сет-лист</DialogTitle>
        <DialogContent>
          <ul className="popup-titles">
            <li>
              <span className="popup__title-song">Композиция</span>
              <span className="popup-length">Длительность</span>
            </li>
          </ul>
          <ul>
            {tracks.map((track) => {
              return (
                <li
                  key={track.song}
                  className={`trackItem ${track.hidden ? 'hidden' : ''}`}
                >
                  <span className="songs-list__author popup-author">
                    {track.author}
                  </span>{' '}
                  -{' '}
                  <span className="popup-song" style={{ paddingRight: '1rem' }}>
                    {track.song}
                  </span>{' '}
                  <Tooltip title="удалить">
                    <DeleteForeverIcon
                      sx={{ float: 'right' }}
                      // titleAccess="удалить"
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
                    />
                  </Tooltip>
                  <span className="popup-length">{track.length}</span>
                </li>
              );
            })}
          </ul>
          {tracks.length === 0 && <div className="noTracks">Список пуст</div>}
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleCleanTracks}>
            Очистить
          </Button>
          <Button variant="outlined" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="contained" onClick={handleClose}>
            Далее
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
