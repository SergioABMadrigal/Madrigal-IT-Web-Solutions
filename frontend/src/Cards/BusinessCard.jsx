import { FaLinkedin, FaInstagram, FaFacebook, FaEnvelope, FaGlobe } from 'react-icons/fa';
import logo2_480px from '../assets/logo2_480px.webp';

const BusinessCard = () => {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 p-6 flex flex-col items-center text-center">
      <img
        src={logo2_480px}
        alt="Madrigal IT Logo"
        className="w-24 h-24 rounded-full mb-4 border-2 border-green-800 object-cover"
      />
      <h2 className="text-2xl font-bold text-gray-800 mb-1">Sergio Madrigal</h2>
      <p className="text-green-800 font-semibold mb-2">Web Developer & Business Owner</p>
      <p className="text-gray-600 text-sm mb-4">Building honest, secure, and impactful websites for small businesses. Based in California. Licensed & Insured.</p>
      <div className="flex justify-center gap-4 mb-4">
        <a href="https://www.linkedin.com/in/sergio-madrigal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-green-800 hover:text-green-600 text-2xl"><FaLinkedin /></a>
        <a href="https://www.instagram.com/madrigalit" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-green-800 hover:text-green-600 text-2xl"><FaInstagram /></a>
        <a href="https://www.facebook.com/madrigalit" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-green-800 hover:text-green-600 text-2xl"><FaFacebook /></a>
        <a href="mailto:sergio@madrigalit.com" aria-label="Email" className="text-green-800 hover:text-green-600 text-2xl"><FaEnvelope /></a>
        <a href="https://madrigalit.com" target="_blank" rel="noopener noreferrer" aria-label="Website" className="text-green-800 hover:text-green-600 text-2xl"><FaGlobe /></a>
      </div>
      <div className="text-xs text-gray-400 mt-2">Madrigal IT Web Solutions &copy; {new Date().getFullYear()}</div>
    </div>
  );
};

export default BusinessCard;