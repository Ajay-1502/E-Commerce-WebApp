import { Container } from 'react-bootstrap';
import { FaYoutube, FaSpotify, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#eb87faff', padding: '2rem 0' }}>
      <Container className="text-center">
        <h2 className="fw-bold text-white mb-4">The Generics</h2>
      </Container>
      <div className="d-flex justify-content-center gap-4">
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube size={30} style={{ color: '#FF0000', margin: '0 10px' }} />
        </a>
        <a
          href="https://www.spotify.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSpotify size={30} style={{ color: '#1DB954', margin: '0 10px' }} />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook
            size={30}
            style={{ color: '#1877F2', margin: '0 10px' }}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
