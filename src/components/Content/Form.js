import { useState } from 'react';
import './Form.scss';

function Form() {
  const [data, setData] = useState({
    username: '',

    phone: '',
  });
  // console.log({ ...data });
  const [changeClass, setChangeClass] = useState('');

  function handleInputChange(e, name) {
    setData({ ...data, [name]: e.target.value });
    e.target.value.length > 1
      ? setChangeClass('valid')
      : setChangeClass('invalid');
  }

  return (
    <form className="form" id="request_to_call">
      <div className="fields element_animation">
        <div className="field">
          <label className="field__label" htmlFor="name">
            Ваше имя
          </label>
          <div className={`input__wrapper ${changeClass}`}>
            <input
              id="name"
              className="field__input"
              type="text"
              name="name"
              placeholder="Введите имя"
              onChange={(e) => handleInputChange(e, 'username')}
              value={data.username}
            />
          </div>
        </div>
        <div className="field">
          <label className="field__label" htmlFor="phone">
            Телефон
          </label>
          <div className="input__wrapper">
            <span className="input__plus">+</span>
            <input
              id="phone"
              className="field__input"
              type="tel"
              name="phone"
              onChange={(e) => handleInputChange(e, 'phone')}
              placeholder="7(999)999-99-99"
              inputMode="tel"
              title="формат телефона: 7(999)999-99-99 скобки и дефисы необязательны"
              required
              value={data.phone}
            />
          </div>
        </div>
      </div>
    </form>
  );
}
export default Form;
