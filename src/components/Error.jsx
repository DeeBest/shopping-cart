import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <main>
      <h1>Oh no, this route doesn&apos;t exist!</h1>
      <Link to="/">
        You can go back to the home page by clicking here, though!
      </Link>
    </main>
  );
};

export default Error;
