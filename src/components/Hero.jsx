import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/srh_logo.png)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 text-center px-4">
        <img src="/images/srh_eagle.svg" alt="SRH Eagle" className="absolute inset-0 m-auto w-3/4 max-w-[1000px] opacity-5 pointer-events-none hero-eagle" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6">
            <h2 className="font-bebas text-6xl md:text-7xl lg:text-8xl text-srh-orange uppercase tracking-[0.25em] text-glow mb-4">
              SRH
            </h2>
            <h1 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-white mb-4 text-glow leading-none">
              RISE WITH THE SUN
            </h1>
          </div>
          <p className="font-poppins text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10">
            Welcome to the Ultimate Fan Hub. Feel the energy, explore the squad, and stay updated with every match.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#squad" className="w-full sm:w-auto px-8 py-4 bg-srh-orange hover:bg-[#d65518] text-white font-inter font-medium rounded-full transition-all box-glow text-lg">
              Explore Squad
            </a>
            <a href="#matches" className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-srh-orange text-srh-orange hover:bg-srh-orange hover:text-white font-inter font-medium rounded-full transition-all text-lg">
              Upcoming Matches
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
