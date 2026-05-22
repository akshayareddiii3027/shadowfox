import { motion } from 'framer-motion';
import { FiPlayCircle } from 'react-icons/fi';

const PlayerSpotlight = () => {
  return (
    <section className="py-20 relative bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(/images/stadium_bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="absolute inset-0 bg-gradient-to-r from-srh-black via-srh-black/80 to-transparent" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="inline-block px-4 py-1 bg-srh-orange/20 border border-srh-orange rounded-full font-inter text-xs text-srh-orange font-medium mb-6 uppercase tracking-widest">
              Player Spotlight
            </div>
            <h2 className="font-bebas text-7xl md:text-8xl text-white mb-2 leading-none">
              PAT <span className="text-white">CUMMINS</span>
            </h2>
            <h3 className="font-montserrat text-2xl text-gray-400 mb-6">Captain & Leading Wicket Taker</h3>
            <p className="font-poppins text-gray-300 mb-8 leading-relaxed">
              Leading from the front, our captain has shown exceptional performance with both ball and leadership. With 16 wickets this season and a game-changing mindset, he is the anchor of the Orange Army.
            </p>
            
            <div className="flex gap-6 mb-8">
              <div className="text-center">
                <div className="font-bebas text-4xl text-white">16</div>
                <div className="font-inter text-xs text-srh-orange uppercase">Wickets</div>
              </div>
              <div className="w-px bg-white/10" />
              <div className="text-center">
                <div className="font-bebas text-4xl text-white">7.2</div>
                <div className="font-inter text-xs text-srh-orange uppercase">Econ Rate</div>
              </div>
              <div className="w-px bg-white/10" />
              <div className="text-center">
                <div className="font-bebas text-4xl text-white">4/12</div>
                <div className="font-inter text-xs text-srh-orange uppercase">Best Bowling</div>
              </div>
            </div>

            <button className="flex items-center gap-2 px-6 py-3 bg-white text-srh-black rounded-full font-inter font-bold hover:bg-srh-orange hover:text-white transition-colors">
              <FiPlayCircle className="text-xl" />
              Watch Highlights
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 relative flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-srh-orange rounded-full filter blur-[100px] opacity-20" />
            <div className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl">
              <div className="player-frame w-full h-96">
                <img
                  src={'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/488.png'}
                  alt="Pat Cummins"
                  className="player-photo"
                  onError={(e)=>{e.target.onerror=null;e.target.src='/images/players/pat_cummins.jpg'}}
                />
                <img src="/images/srh_jersey.svg" alt="SRH Jersey" className="jersey-overlay" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PlayerSpotlight;
