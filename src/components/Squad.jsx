import { motion } from 'framer-motion';

const squadCategories = [
  {
    category: "Batters & Wicketkeepers",
    players: [
      { id: 1, name: 'Travis Head', role: 'Opening Batter', stat: 'Core Player', image: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/1020.png', core: true, fallback: '/images/players/travis_head.jpg' },
      { id: 2, name: 'Ishan Kishan', role: 'Wicketkeeper / Batter', stat: 'Core Player', image: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/2975.png', core: true, fallback: '/images/players/ishan_kishan.jpg' },
      { id: 3, name: 'Heinrich Klaasen', role: 'Wicketkeeper / Batter', stat: 'Core Player', image: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/3869.png', core: true, fallback: '/images/players/heinrich_klaasen.png' },
      { id: 4, name: 'Aniket Verma', role: 'Batter', stat: 'IPL 2026', image: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/22082.png', core: false, fallback: 'https://ui-avatars.com/api/?name=Aniket+Verma&background=F26522&color=fff&size=512' },
      { id: 5, name: 'Smaran Ravichandran', role: 'Batter', stat: 'IPL 2026', image: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/22378.png', core: false, fallback: 'https://ui-avatars.com/api/?name=Smaran+Ravichandran&background=F26522&color=fff&size=512' },
      { id: 6, name: 'Salil Arora', role: 'Wicketkeeper / Batter', stat: 'IPL 2026', image: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/23041.png', core: false, fallback: 'https://ui-avatars.com/api/?name=Salil+Arora&background=F26522&color=fff&size=512' },
    ]
  },
  {
    category: "All-Rounders",
    players: [
      { id: 7, name: 'Abhishek Sharma', role: 'All-Rounder', stat: 'Core Player', image: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/3760.png', core: true, fallback: '/images/players/abhishek_sharma.png' },
      { id: 8, name: 'Nitish Kumar Reddy', role: 'All-Rounder', stat: 'Core Player', image: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/5711.png', core: true, fallback: '/images/players/nitish_kumar_reddy.jpg' },
      { id: 9, name: 'Liam Livingstone', role: 'All-Rounder', stat: 'IPL 2026', image: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/3644.png', core: false, fallback: 'https://ui-avatars.com/api/?name=Liam+Livingstone&background=F26522&color=fff&size=512' },
      { id: 10, name: 'Kamindu Mendis', role: 'All-Rounder', stat: 'IPL 2026', image: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/22077.png', core: false, fallback: 'https://ui-avatars.com/api/?name=Kamindu+Mendis&background=F26522&color=fff&size=512' },
      { id: 11, name: 'Harsh Dubey', role: 'All-Rounder', stat: 'IPL 2026', image: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/22381.png', core: false, fallback: 'https://ui-avatars.com/api/?name=Harsh+Dubey&background=F26522&color=fff&size=512' },
      { id: 12, name: 'Shivang Kumar', role: 'All-Rounder', stat: 'IPL 2026', image: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/23006.png', core: false, fallback: 'https://ui-avatars.com/api/?name=Shivang+Kumar&background=F26522&color=fff&size=512' },
      { id: 13, name: 'Krains Fuletra', role: 'All-Rounder', stat: 'IPL 2026', image: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/23132.png', core: false, fallback: 'https://ui-avatars.com/api/?name=Krains+Fuletra&background=F26522&color=fff&size=512' },
    ]
  },
  {
    category: "Bowlers",
    players: [
      { id: 14, name: 'Pat Cummins', role: 'Captain / Bowler', stat: 'Core Player', image: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/488.png', core: true, fallback: 'https://ui-avatars.com/api/?name=Pat+Cummins&background=F26522&color=fff&size=512' },
      { id: 15, name: 'Harshal Patel', role: 'Bowler', stat: 'Core Player', image: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/157.png', core: true, fallback: 'https://ui-avatars.com/api/?name=Harshal+Patel&background=F26522&color=fff&size=512' },
      { id: 16, name: 'Jaydev Unadkat', role: 'Bowler', stat: 'IPL 2026', image: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/86.png', core: false, fallback: 'https://ui-avatars.com/api/?name=Jaydev+Unadkat&background=F26522&color=fff&size=512' },
      { id: 17, name: 'Eshan Malinga', role: 'Bowler', stat: 'IPL 2026', image: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/22228.png', core: false, fallback: 'https://ui-avatars.com/api/?name=Eshan+Malinga&background=F26522&color=fff&size=512' },
      { id: 18, name: 'Zeeshan Ansari', role: 'Bowler', stat: 'IPL 2026', image: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/22007.png', core: false, fallback: 'https://ui-avatars.com/api/?name=Zeeshan+Ansari&background=F26522&color=fff&size=512' },
      { id: 19, name: 'Shivam Mavi', role: 'Bowler', stat: 'IPL 2026', image: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/3120.png', core: false, fallback: 'https://ui-avatars.com/api/?name=Shivam+Mavi&background=F26522&color=fff&size=512' },
      { id: 20, name: 'Sakib Hussain', role: 'Bowler', stat: 'IPL 2026', image: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/20717.png', core: false, fallback: 'https://ui-avatars.com/api/?name=Sakib+Hussain&background=F26522&color=fff&size=512' },
      { id: 21, name: 'Praful Hinge', role: 'Bowler', stat: 'IPL 2026', image: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/23114.png', core: false, fallback: 'https://ui-avatars.com/api/?name=Praful+Hinge&background=F26522&color=fff&size=512' },
      { id: 22, name: 'Amit Kumar', role: 'Bowler', stat: 'IPL 2026', image: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/23087.png', core: false, fallback: 'https://ui-avatars.com/api/?name=Amit+Kumar&background=F26522&color=fff&size=512' },
      { id: 23, name: 'Onkar Tarmale', role: 'Bowler', stat: 'IPL 2026', image: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/23048.png', core: false, fallback: 'https://ui-avatars.com/api/?name=Onkar+Tarmale&background=F26522&color=fff&size=512' },
    ]
  }
];

const Squad = () => {
  return (
    <section id="squad" className="py-20 relative bg-srh-black">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-bebas text-5xl md:text-6xl text-white mb-4">Meet The <span className="text-srh-orange text-glow">Squad</span></h2>
          <p className="font-poppins text-gray-400 max-w-2xl mx-auto">
            The complete IPL 2026 roster ready to bring the cup home.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16">
          {squadCategories.map((section, secIndex) => (
            <div key={secIndex}>
              <h3 className="font-bebas text-4xl text-white mb-8 border-l-4 border-srh-orange pl-4">
                {section.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.players.map((player, index) => (
                  <motion.div
                    key={player.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index % 3) * 0.1 }}
                    whileHover={{ y: -10 }}
                    className={`glass-card overflow-hidden group cursor-pointer ${player.core ? 'border-srh-orange/50 shadow-[0_0_15px_rgba(242,101,34,0.15)]' : ''}`}
                  >
                    <div className="relative h-80 bg-srh-darkgray flex items-end justify-center overflow-hidden">
                      <div className="player-frame w-full h-full">
                        <img
                          src={player.image}
                          alt={player.name}
                          className="player-photo"
                          data-fallback-applied="false"
                          onError={(e) => {
                            if (e.target.dataset.fallbackApplied === 'false') {
                              e.target.dataset.fallbackApplied = 'true';
                              e.target.src = player.fallback;
                            } else {
                              e.target.src = '/images/players/default-player.svg';
                            }
                          }}
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-srh-darkgray via-transparent to-transparent" />
                      {player.core && (
                        <div className="absolute top-4 right-4 bg-srh-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-[0_0_10px_rgba(242,101,34,0.5)]">
                          Fan Favorite
                        </div>
                      )}
                    </div>
                    <div className="p-6 relative z-10 border-t border-white/5">
                      <h3 className="font-bebas text-3xl text-white mb-1 group-hover:text-srh-orange transition-colors">{player.name}</h3>
                      <p className="font-montserrat text-sm font-semibold text-gray-400 mb-3">{player.role}</p>
                      <div className={`inline-block px-3 py-1 rounded-full font-inter text-xs font-medium ${player.core ? 'bg-srh-orange/20 text-srh-orange border border-srh-orange/30' : 'bg-white/10 text-gray-300'}`}>
                        {player.stat}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Squad;
