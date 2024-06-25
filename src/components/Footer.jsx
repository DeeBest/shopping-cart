/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

const Footer = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={isDarkMode && 'dark-header-footer'}>
      <div className="icons-container">
        <Link
          className={`${isDarkMode ? 'dark-mode-link' : ''} link`}
          to="https://github.com/DeeBest"
        >
          <FaGithub className="icon" />
        </Link>
        <Link
          className={`${isDarkMode ? 'dark-mode-link' : ''} link`}
          to="mailto:simphiwedladla8@gmail.com"
        >
          <FaEnvelope className="icon" />
        </Link>
        <Link
          className={`${isDarkMode ? 'dark-mode-link' : ''} link`}
          to="https://www.linkedin.com/in/dladla-simphiwe-89061a20a/"
        >
          <FaLinkedin className="icon" />
        </Link>
      </div>
      <small>Created By &copy;Simphiwe {currentYear}.</small>
    </footer>
  );
};

export default Footer;
