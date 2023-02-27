import Form from './Form';
import './Contacts.scss';
import avatar from '../../images/avatar.jpg';
function Contacts() {
  return (
    <div className="contacts__wrapper">
      <Form />
      <ul className="manager">
        <li className="manager-item">
          <img className="manager__img" src={avatar} alt="Аватарка" />
          <h3 className="manager__title">Вячеслав</h3>
          <p className="manager__desc">Руководитель проекта</p>
        </li>
        <li className="manager-item">
          <h3 className="manager__title">Телефон</h3>
          <p className="manager__desc">+7(926)461-02-36</p>
        </li>
      </ul>
    </div>
  );
}
export default Contacts;
