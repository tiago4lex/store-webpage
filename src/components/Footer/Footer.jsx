import "./Footer.css";
import {
  FaInstagram,
  FaSoundcloud,
  FaSpotify,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 FULL OF SHITZ. ALL RIGHTS RESERVED.</p>
      <div className="social-icons">
        <a
          href="https://www.instagram.com/full.of.sh1tz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>

        <a
          href="https://soundcloud.com/fullofshitz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSoundcloud />
        </a>

        <a
          href="https://www.youtube.com/channel/UCJrmb3bVtdbc0fmws7tEbKg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>

        <a 
        href="https://open.spotify.com/intl-pt/artist/63OJ7unzwHWdpWbxNUYUlS?si=fmYjLC_-SkaMqxui_jjqhw"
        target="_blank"
        rel="noopener noreferrer"
        >
            <FaSpotify />
        </a>
      </div>
    </footer>
  );
}

export default Footer;