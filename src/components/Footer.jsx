import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-violet-600 text-white py-6 mt-auto">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-sm mb-4">&copy; 2024 MyApp. All rights reserved.</p>
        <div className="flex space-x-4 mb-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white hover:text-gray-300" size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white hover:text-gray-300" size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white hover:text-gray-300" size={24} />
          </a>
        </div>
        <p className="text-sm">Made with ❤️ by Your Name</p>
      </div>
    </footer>
  );
}

export default Footer;