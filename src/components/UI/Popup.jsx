import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CartIcon from './CartIcon';

export default function Popup({ count, tracks, deleteSong }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deleteSongHandler = () => {
    tracks.map((track) => {
      deleteSong(track.author, track.song, track.length, !track.isActive);
    });
  };

  return (
    <div>
      <CartIcon count={count} onClick={handleClickOpen} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ваш сет-лист</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <span>Композиция</span>
            <span style={{ float: 'right' }}>Длительность</span>
          </DialogContentText>
          <ul>
            {/* <DialogContentText> */}
            {tracks.map((track) => {
              return (
                <li key={track.song}>
                  <span>{track.author}</span> -{' '}
                  <span style={{ paddingRight: '1rem' }}>{track.song}</span>{' '}
                  <DeleteForeverIcon
                    sx={{ float: 'right' }}
                    onClick={deleteSongHandler}
                  />
                  <span style={{ float: 'right' }}>{track.length}</span>
                </li>
              );
            })}
            {/* </DialogContentText> */}
          </ul>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
