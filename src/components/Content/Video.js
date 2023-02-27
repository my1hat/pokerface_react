import './Video.scss';
import { Link } from 'react-scroll';

function Video() {
  return (
    <>
      <h2 className="section-title">Видео</h2>
      <p className="paragraph">
        Вы можете помотреть другие видео c нашими выступлениями непосредственно
        на{' '}
        <a
          className="paragraph__link_red"
          href="https://www.youtube.com/@pokerfacecoverband"
        >
          нашем канале youtube
        </a>{' '}
        и в{' '}
        <Link
          className="paragraph__link_blue "
          to="contacts"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          соц.сетях.
        </Link>
      </p>
      <div className="video-container">
        <div
          className="video-container__item preview-1"
          src="https://www.youtube.com/embed/BGVDtUDIUxU?autoplay=1"
        ></div>
        <div
          className="video-container__item preview-2"
          src="https://www.youtube.com/embed/9cd5487jIKg?autoplay=1"
        ></div>
        <div
          className="video-container__item preview-3"
          src="https://www.youtube.com/embed/u_LfYj6CASY?autoplay=1"
        ></div>
      </div>
    </>
  );
}
export default Video;
