import './About.scss';
import { Link } from 'react-scroll';

function About() {
  return (
    <>
      <h2 className="section-title">POKERFACE</h2>
      <p className="paragraph">
        Уникальная, яркая и стильная кавер-группа мирового уровня! Коллектив
        имеет огромный профессиональный опыт и успешно зарекомендовал себя на
        многих площадках.
      </p>

      <p className="paragraph">
        Pokerface подходит для любой публики с разными музыкальными вкусами.
        Музыканты чувствуют настроение зрителей и всегда удачно выбирают
        следующую песню. Выступления проходят на любых праздничных мероприятиях:
        корпоративный вечер, день рождения, свадьба и т.д.
      </p>
      <p className="paragraph">
        В{' '}
        <Link
          to="songs"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="paragraph__link paragraph__link_red"
        >
          репертуар
        </Link>{' '}
        включены лучшие песни из дискотеки 80-х, 90-х, зарубежного и
        отечественного рока, современных поп хитов и т.д.
      </p>

      <div className="vk-group">
        <div id="vk_groups"></div>
      </div>
    </>
  );
}
export default About;
