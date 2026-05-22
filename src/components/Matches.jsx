import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const upcomingMatches = [
  { id: 1, opponent: 'KKR', date: 'March 23, 2024', time: '19:30 IST', venue: 'Eden Gardens, Kolkata', home: false },
  { id: 2, opponent: 'MI', date: 'March 27, 2024', time: '19:30 IST', venue: 'Rajiv Gandhi Stadium, Hyderabad', home: true },
  { id: 3, opponent: 'GT', date: 'March 31, 2024', time: '15:30 IST', venue: 'Narendra Modi Stadium, Ahmedabad', home: false },
  { id: 4, opponent: 'CSK', date: 'April 5, 2024', time: '19:30 IST', venue: 'Rajiv Gandhi Stadium, Hyderabad', home: true },
  { id: 5, opponent: 'PBKS', date: 'April 9, 2024', time: '19:30 IST', venue: 'Mullanpur, Mohali', home: false },
  { id: 6, opponent: 'RCB', date: 'April 15, 2024', time: '19:30 IST', venue: 'M. Chinnaswamy Stadium, Bengaluru', home: false },
  { id: 7, opponent: 'DC', date: 'April 20, 2024', time: '19:30 IST', venue: 'Arun Jaitley Stadium, Delhi', home: false },
  { id: 8, opponent: 'RCB', date: 'April 25, 2024', time: '19:30 IST', venue: 'Rajiv Gandhi Stadium, Hyderabad', home: true },
  { id: 9, opponent: 'CSK', date: 'April 28, 2024', time: '19:30 IST', venue: 'MA Chidambaram Stadium, Chennai', home: false },
  { id: 10, opponent: 'RR', date: 'May 2, 2024', time: '19:30 IST', venue: 'Rajiv Gandhi Stadium, Hyderabad', home: true },
  { id: 11, opponent: 'MI', date: 'May 6, 2024', time: '19:30 IST', venue: 'Wankhede Stadium, Mumbai', home: false },
  { id: 12, opponent: 'LSG', date: 'May 8, 2024', time: '19:30 IST', venue: 'Rajiv Gandhi Stadium, Hyderabad', home: true },
  { id: 13, opponent: 'GT', date: 'May 16, 2024', time: '19:30 IST', venue: 'Rajiv Gandhi Stadium, Hyderabad', home: true },
  { id: 14, opponent: 'PBKS', date: 'May 19, 2024', time: '15:30 IST', venue: 'Rajiv Gandhi Stadium, Hyderabad', home: true },
];

const Matches = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [nextMatch, setNextMatch] = useState(upcomingMatches[0]);

  useEffect(() => {
    const now = new Date();
    const currentYear = now.getFullYear();
    
    // Find the next upcoming match
    let upcoming = upcomingMatches.find(match => {
      // Parse date dynamically, using the current year for calculations
      const matchDateStr = `${match.date.split(',')[0]}, ${currentYear} ${match.time.split(' ')[0]}`;
      return new Date(matchDateStr) > now;
    });

    // If all matches have passed for the current year, use the first match of the next year
    if (!upcoming) {
      upcoming = upcomingMatches[0];
    }
    
    setNextMatch(upcoming);

    const matchDateStr = `${upcoming.date.split(',')[0]}, ${currentYear} ${upcoming.time.split(' ')[0]}`;
    let targetDate = new Date(matchDateStr);
    
    if (targetDate < now) {
      targetDate.setFullYear(currentYear + 1);
    }

    const interval = setInterval(() => {
      const currentTime = new Date();
      const difference = targetDate - currentTime;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="matches" className="py-20 relative bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Next Match Countdown */}
          <div className="lg:w-1/3">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 h-full flex flex-col justify-center border-t-4 border-t-srh-orange"
            >
              <h3 className="font-montserrat text-srh-orange font-bold tracking-widest text-sm mb-2">NEXT MATCH</h3>
              <h2 className="font-bebas text-5xl text-white mb-6">SRH vs {nextMatch?.opponent || 'TBD'}</h2>
              <p className="font-poppins text-gray-400 mb-8">{nextMatch?.venue || 'Venue TBD'}</p>
              
              <div className="grid grid-cols-4 gap-4 text-center">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="bg-white/5 rounded-lg p-3">
                    <div className="font-bebas text-3xl text-white">{value}</div>
                    <div className="font-inter text-xs text-gray-400 uppercase">{unit}</div>
                  </div>
                ))}
              </div>
              
              <button className="mt-8 w-full py-4 bg-srh-orange hover:bg-[#d65518] text-white font-inter font-medium rounded-full transition-all text-sm">
                Get Tickets
              </button>
            </motion.div>
          </div>

          {/* Schedule */}
          <div className="lg:w-2/3">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-bebas text-5xl text-white mb-8">Match <span className="text-srh-orange">Schedule</span></h2>
              <div className="flex flex-col gap-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                {upcomingMatches.map((match) => (
                  <div key={match.id} className="glass-card p-6 flex flex-col sm:flex-row justify-between items-center gap-6 hover:border-srh-orange/50 transition-colors">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center font-bebas text-2xl text-gray-300">
                        {match.opponent}
                      </div>
                      <div>
                        <h4 className="font-bebas text-2xl text-white tracking-wide">SRH vs {match.opponent}</h4>
                        <p className="font-montserrat text-sm text-gray-400">{match.venue}</p>
                      </div>
                    </div>
                    <div className="text-center sm:text-right">
                      <div className="font-inter font-bold text-white mb-1">{match.date}</div>
                      <div className="font-inter text-sm text-srh-orange">{match.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Matches;
