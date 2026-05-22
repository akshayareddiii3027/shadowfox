import { useState } from 'react';
import { motion } from 'framer-motion';

const FanZone = () => {
  const [quizState, setQuizState] = useState({ answered: false, correct: false, selectedOpt: null });
  const [cheerCount, setCheerCount] = useState(12450);
  const [pollVoted, setPollVoted] = useState(false);

  const handleQuiz = (index, isCorrect) => {
    setQuizState({ answered: true, correct: isCorrect, selectedOpt: index });
  };

  const handleCheer = () => {
    setCheerCount(prev => prev + 1);
  };

  return (
    <section id="fanzone" className="py-20 relative bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-bebas text-5xl md:text-6xl text-white mb-4">The <span className="text-srh-orange text-glow">Fan Zone</span></h2>
          <p className="font-poppins text-gray-400 max-w-2xl mx-auto">
            Your voice, your passion. Engage with the Orange Army!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* SRH Trivia */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-bebas text-3xl text-white mb-2">SRH <span className="text-srh-orange">Trivia Challenge</span></h3>
              <p className="font-poppins text-sm text-gray-400 border-b border-white/10 pb-4 mb-6">Test your knowledge of the Orange Army!</p>
              <div className="mb-6">
                <h4 className="font-montserrat font-semibold text-sm text-white mb-4">Who holds the record for most wickets in a single IPL season for SRH?</h4>
                <div className="space-y-3">
                  {[
                    { name: 'Rashid Khan', correct: false },
                    { name: 'Bhuvneshwar Kumar', correct: true },
                    { name: 'Mustafizur Rahman', correct: false },
                    { name: 'Dale Steyn', correct: false }
                  ].map((opt, index) => (
                    <button 
                      key={index}
                      onClick={() => !quizState.answered && handleQuiz(index, opt.correct)}
                      disabled={quizState.answered}
                      className={`w-full text-left p-3 rounded-lg font-inter text-sm transition-all duration-300 flex justify-between items-center border ${
                        quizState.answered 
                          ? opt.correct 
                            ? 'bg-green-500/20 border-green-500 text-green-400' 
                            : quizState.selectedOpt === index 
                              ? 'bg-red-500/20 border-red-500 text-red-400' 
                              : 'bg-white/5 border-white/5 text-gray-500'
                          : 'bg-white/5 border-white/10 text-white hover:border-srh-orange hover:bg-srh-orange/10'
                      }`}
                    >
                      {opt.name}
                      {quizState.answered && opt.correct && <span className="text-green-400">✓</span>}
                      {quizState.answered && !opt.correct && quizState.selectedOpt === index && <span className="text-red-400">✗</span>}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {quizState.answered && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-3 rounded-lg text-center font-montserrat text-sm ${quizState.correct ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}
              >
                {quizState.correct ? 'Spot on! Bhuvi took 26 wickets in 2017.' : 'Incorrect! Bhuvneshwar Kumar holds the record (26 in 2017).'}
              </motion.div>
            )}
          </motion.div>

          {/* Interactive Cheer & Poll */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Cheer Meter */}
            <div className="glass-card p-6 text-center flex-1 flex flex-col justify-center items-center">
              <h3 className="font-bebas text-3xl text-white mb-2">Roar for <span className="text-srh-orange">SRH</span></h3>
              <p className="font-poppins text-xs text-gray-400 mb-6">Tap to show your support!</p>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCheer}
                className="w-28 h-28 rounded-full bg-gradient-to-tr from-srh-orange to-[#ff8c42] shadow-[0_0_30px_rgba(242,101,34,0.4)] flex items-center justify-center text-white font-bebas text-3xl mb-6 relative overflow-hidden group border-4 border-black/20"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
                ROAR!
              </motion.button>
              
              <div className="bg-black/50 px-5 py-2 rounded-full border border-white/10 flex items-center gap-2">
                <span className="font-bebas text-2xl text-srh-orange tracking-wider">{cheerCount.toLocaleString()}</span>
                <span className="font-inter text-[10px] text-gray-400 uppercase">Cheers</span>
              </div>
            </div>

            {/* Mini Poll */}
            <div className="glass-card p-6">
              <h3 className="font-bebas text-2xl text-white mb-3 border-b border-white/10 pb-2">Match Day Poll</h3>
              <p className="font-poppins text-xs text-gray-400 mb-4">Who will hit the most sixes?</p>
              {!pollVoted ? (
                <div className="space-y-2">
                  {[
                    { name: 'T. Head', image: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/1020.png', fallback: '/images/players/travis_head.jpg' },
                    { name: 'H. Klaasen', image: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/3869.png', fallback: '/images/players/heinrich_klaasen.png' },
                    { name: 'A. Sharma', image: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/3760.png', fallback: '/images/players/abhishek_sharma.png' }
                  ].map((player) => (
                    <button 
                      key={player.name}
                      onClick={() => setPollVoted(true)}
                      className="w-full text-left px-4 py-2 rounded-lg bg-white/5 hover:bg-srh-orange/20 hover:border-srh-orange border border-white/10 transition-all font-montserrat text-xs text-white flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-full overflow-hidden bg-white/5 flex items-center justify-center">
                        <div className="relative w-full h-full">
                          <img src={player.image} alt={player.name} className="w-full h-full object-cover" onError={(e)=>{e.target.onerror=null;e.target.src=player.fallback}} />
                          <img src="/images/srh_jersey.svg" alt="jersey" className="absolute left-0 top-0 w-full h-full object-cover pointer-events-none" />
                        </div>
                      </div>
                      <span>{player.name}</span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="py-2">
                  <p className="font-montserrat text-xs text-green-400 text-center mb-3">Vote counted!</p>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-[10px] text-gray-400 mb-1"><span>H. Klaasen</span><span>65%</span></div>
                      <div className="w-full bg-white/10 rounded-full h-1.5"><div className="bg-srh-orange h-full rounded-full" style={{width: '65%'}}></div></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[10px] text-gray-400 mb-1"><span>T. Head</span><span>25%</span></div>
                      <div className="w-full bg-white/10 rounded-full h-1.5"><div className="bg-gray-400 h-full rounded-full" style={{width: '25%'}}></div></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Fan Shoutouts */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 flex flex-col"
          >
            <h3 className="font-bebas text-3xl text-white mb-2">Fan <span className="text-srh-orange">Shoutouts</span></h3>
            <p className="font-poppins text-sm text-gray-400 border-b border-white/10 pb-4 mb-6">Join the live conversation.</p>
            
            <div className="space-y-4 flex-1 overflow-y-auto pr-2 custom-scrollbar max-h-[300px]">
              {[
                { name: 'Rahul V.', comment: 'Head is going to smash a century today! Orange Army! 🔥' },
                { name: 'Priya S.', comment: 'Cummins captaincy is exactly what we needed. Let\'s go SRH!' },
                { name: 'Karthik N.', comment: 'Klaasen is unstoppable this season. Can\'t wait for the match.' },
                { name: 'Neha M.', comment: 'The stadium vibe is unreal! #RiseWithTheSun' }
              ].map((msg, i) => (
                <div key={i} className="bg-white/5 p-3 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                  <div className="font-montserrat font-bold text-xs text-srh-orange mb-1">{msg.name}</div>
                  <p className="font-poppins text-xs text-gray-300 leading-relaxed">{msg.comment}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex gap-2">
              <input type="text" placeholder="Your shoutout..." className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-srh-orange" />
              <button className="px-4 bg-srh-orange text-white rounded-lg font-inter text-sm font-medium hover:bg-[#d65518] transition-colors">Post</button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FanZone;
