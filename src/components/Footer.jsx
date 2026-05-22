import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer id="contact" className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-srh-orange rounded-full flex items-center justify-center font-bebas text-2xl text-srh-black">
            SRH
          </div>
          <span className="font-bebas text-3xl tracking-wider text-white">
            ARENA
          </span>
        </div>

        <p className="font-poppins text-gray-500 text-sm text-center md:text-left">
          © {new Date().getFullYear()} SRH ARENA. Ultimate Fan Hub. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-srh-orange transition-colors text-2xl">
            <FiGithub />
          </a>
          <a href="#" className="text-gray-400 hover:text-srh-orange transition-colors text-2xl">
            <FiLinkedin />
          </a>
          <a href="#" className="text-gray-400 hover:text-srh-orange transition-colors text-2xl">
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
