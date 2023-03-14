import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import InputMask from 'react-input-mask';

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [nameError, setNameError] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState(' ');
  const [phoneError, setPhoneError] = useState(false);
  const [phoneErrorMessage, setPhoneErrorMessage] = useState(' ');

  const handleNameChange = (event) => {
    setName(event.target.value);
    if (!event.target.value) {
      setNameError(true);
      setNameErrorMessage('Введите имя');
    } else {
      setNameError(false);
      setNameErrorMessage(' ');
    }
  };

  const handlePhoneChange = (event) => {
    let inputPhone = event.target.value.replace(/\D/g, '');
    if (inputPhone.startsWith('7')) {
      inputPhone = inputPhone.slice(1);
    }
    setPhone(inputPhone);
    // if (!inputPhone.match(/^\d{0,10}$/)) {
    //   setPhoneError(true);
    //   setPhoneErrorMessage('Введите корректный номер телефона');
    // } else {
    //   setPhoneError(false);
    //   setPhoneErrorMessage('');
    if (inputPhone.length < 10) {
      setPhoneError(true);
      setPhoneErrorMessage('Введите корректный телефон');
    } else {
      setPhoneError(false);
      setPhoneErrorMessage(' ');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !phone) {
      alert('Please fill in all required fields');
    } else {
      alert(`Submitting form with name: ${name} and phone: +7${phone}`);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      autoComplete="off"
      sx={{
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        justifyItems: 'center',
        gap: 2,
      }}
    >
      <TextField
        label="Name"
        variant="filled"
        value={name}
        onChange={handleNameChange}
        helperText={nameErrorMessage}
        error={nameError}
        // sx={{ mb: 2 }}
      />

      <InputMask
        mask="+7 (999) 999-99-99"
        value={phone}
        onChange={handlePhoneChange}
        maskChar="_"
      >
        {() => (
          <TextField
            label="Телефон"
            variant="filled"
            error={phoneError}
            // inputProps={{ minLength: 5 }}
            helperText={phoneErrorMessage}
            // sx={{ m: '0 1rem' }}
          />
        )}
      </InputMask>

      <Button
        type="submit"
        variant="contained"
        sx={{ alignSelf: '' }}
        endIcon={<SendIcon />}
      >
        Отправить
      </Button>
    </Box>
  );
};

export default Form;
