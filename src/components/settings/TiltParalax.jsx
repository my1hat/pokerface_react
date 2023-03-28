import Tilt from 'react-parallax-tilt';

function TiltParalax({ classEnter, children }) {
  return (
    <Tilt
      className={classEnter}
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.25}
      scale={1.02}
    >
      {children}
    </Tilt>
  );
}

export default TiltParalax;
