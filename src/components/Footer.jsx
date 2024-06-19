import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="icons-container">
        <Link to="https://github.com/DeeBest">
          <FaGithub className="icon" />
        </Link>
        <Link to="mailto:simphiwedladla8@gmail.com">
          <FaEnvelope className="icon" />
        </Link>
        <Link to="https://www.linkedin.com/in/dladla-simphiwe-89061a20a/">
          <FaLinkedin className="icon" />
        </Link>
      </div>
      <small>Created By &copy;Simphiwe {currentYear}.</small>
    </footer>
  );
};

export default Footer;
