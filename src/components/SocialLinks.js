// components/SocialLinks.jsx
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <FaFacebook className="w-6 h-6 hover:text-blue-600 transition-colors duration-300" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaInstagram className="w-6 h-6 hover:text-pink-500 transition-colors duration-300" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter (X)">
        <FaXTwitter className="w-6 h-6 hover:text-blue-400 transition-colors duration-300" />
      </a>
    </div>
  );
};

export default SocialLinks;
