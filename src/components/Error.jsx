import { Link } from 'react-router-dom';
import { FaTriangleExclamation } from 'react-icons/fa6';

const Error = () => {
  return (
    <main
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>Oh No, The Requested Page Doesn&apos;t Exist!</h1>
      <FaTriangleExclamation
        style={{
          color: 'tomato',
          fontSize: '3rem',
        }}
      />
      <Link
        style={{
          textDecoration: 'underline',
        }}
        to="/"
      >
        Go Back Home
      </Link>
    </main>
  );
};

export default Error;
