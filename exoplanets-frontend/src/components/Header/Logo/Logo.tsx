import planet from '../../../assets/planet.svg';

const Logo: React.FC<{ height?: number | string }> = ({ height }) => {
  return (
    <img src={planet} alt="Planet logo" height={height ? height : '80%'} />
  );
};

export default Logo;
