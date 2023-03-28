// import Form from './Form';
import './Contacts.scss';
import avatar from '../../images/avatar.jpg';
import TiltParalax from '../settings/TiltParalax';
import Button from '@mui/material/Button';
import PhoneIcon from '@mui/icons-material/Phone';

function Contacts() {
  return (
    <div className="contacts__wrapper">
      {/* <Form /> */}
      <TiltParalax classEnter="contacts__card">
        {/* <ul className="manager"> */}
        <li className="manager-item">
          <img className="manager__img" src={avatar} alt="Аватарка" />
          <h3 className="manager__title">Вячеслав</h3>
          <p className="manager__desc">Руководитель проекта</p>
        </li>
        <li className="manager-item">
          <h3 className="manager__title">Телефон</h3>
          {/* <p className="manager__desc manager__phone"></p> */}
        </li>
        <Button
          className="contacts__button"
          variant="contained"
          href="tel:+79264610236"
          color="error"
          startIcon={<PhoneIcon />}
          sx={{ transform: 'translateY(-10px) translateZ(80px)' }}
        >
          +7 (926) 461-02-36
        </Button>
        {/* </ul> */}
      </TiltParalax>
    </div>
  );
}
export default Contacts;
