import { Container } from 'react-bootstrap';
import { FaYoutube, FaSpotify, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#87cefa', padding: '2rem 0' }}>
      <Container className="text-center">
        <h2 className="fw-bold text-white mb-4">The Generics</h2>
      </Container>
      <div className="d-flex justify-content-center gap-4">
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube size={30} color="white" />
        </a>
        <a
          href="https://www.spotify.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSpotify size={30} color="white" />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={30} color="white" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
