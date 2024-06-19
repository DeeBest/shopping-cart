import BounceLoader from 'react-spinners/BounceLoader';

const override = {
  display: 'block',
  margin: '100px auto',
};

const Spinner = () => {
  return <BounceLoader color="tomato" cssOverride={override} size={150} />;
};

export default Spinner;
