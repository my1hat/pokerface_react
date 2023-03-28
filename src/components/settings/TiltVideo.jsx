import Tilt from 'react-parallax-tilt';

export default function TiltVideo({ children, classEnter }) {
  return (
    <Tilt
      className={classEnter}
      perspective={1300}
      glareEnable={true}
      glareMaxOpacity={0.2}
      scale={1}
    >
      {children}
    </Tilt>
  );
}
