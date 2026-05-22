import { motion } from 'framer-motion';

const featuredNews = {
  id: 1,
  title: "Sunrisers Hyderabad Secure Thrilling Last-Over Victory",
  date: "May 18, 2026",
  summary: "In a nail-biting finish, SRH chased down 214 runs against their arch-rivals, thanks to an explosive century by Travis Head and a finishing cameo by Heinrich Klaasen.",
  image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200&auto=format&fit=crop",
  category: "Match Report"
};

const newsFeed = [
  {
    id: 2,
    title: "Pat Cummins Lauds Team's Fighting Spirit",
    date: "May 19, 2026",
    summary: "The captain praised the middle order for holding their nerve in crunch situations.",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=400&auto=format&fit=crop",
    category: "Interview"
  },
  {
    id: 3,
    title: "SRH Confirms Playing XI for the Next Clash",
    date: "May 20, 2026",
    summary: "Head coach announces the final line-up ahead of a big rivalry match.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=400&auto=format&fit=crop",
    category: "Team Lineup"
  },
  {
    id: 4,
    title: "Abhishek Sharma's Powerplay Dominance Unpacked",
    date: "May 17, 2026",
    summary: "Analyzing the young opener's strike rate and fearless approach this season.",
    image: "https://images.unsplash.com/photo-1624526267942-ab0f0b5800d8?q=80&w=400&auto=format&fit=crop",
    category: "Analysis"
  },
  {
    id: 5,
    title: "SRH Unveils New Training Facility",
    date: "May 15, 2026",
    summary: "The franchise inaugurated a state-of-the-art high-performance center.",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=400&auto=format&fit=crop",
    category: "Franchise"
  },
  {
    id: 6,
    title: "Sunrisers Hyderabad Gear Up for Final Group Stage Battle",
    date: "May 21, 2026",
    summary: "The squad looks sharp in practice as they prepare for a crucial match.",
    image: "https://images.unsplash.com/photo-1505842465776-3d66a1d6ad6b?q=80&w=400&auto=format&fit=crop",
    category: "Preview"
  },
  {
    id: 7,
    title: "Injury Update: Key Bowler Expected to Return Soon",
    date: "May 10, 2026",
    summary: "Medical staff provides a positive update on the recovering fast bowler.",
    image: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?q=80&w=400&auto=format&fit=crop",
    category: "Team News"
  }
];

const News = () => {
  return (
    <section id="news" className="py-20 relative bg-srh-darkgray border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-bebas text-5xl md:text-6xl text-white mb-4">Latest <span className="text-srh-orange text-glow">News</span></h2>
          <p className="font-poppins text-gray-400 max-w-2xl mx-auto">
            Stay up to date with the latest stories from the Orange Army camp.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Featured News */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 glass-card group cursor-pointer overflow-hidden flex flex-col relative"
          >
            <div className="h-80 md:h-96 w-full overflow-hidden relative">
              <div className="absolute top-6 left-6 z-10 bg-srh-orange text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                Featured • {featuredNews.category}
              </div>
              <img 
                src={featuredNews.image} 
                alt={featuredNews.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-srh-black via-black/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 z-10">
                <span className="text-srh-orange font-inter text-sm mb-3 block drop-shadow-md">{featuredNews.date}</span>
                <h3 className="font-bebas text-4xl md:text-5xl text-white mb-4 leading-tight group-hover:text-srh-orange transition-colors drop-shadow-lg">
                  {featuredNews.title}
                </h3>
                <p className="font-poppins text-sm md:text-base text-gray-300 max-w-2xl drop-shadow-md hidden md:block">
                  {featuredNews.summary}
                </p>
                <div className="mt-6 font-montserrat text-white text-sm font-semibold flex items-center gap-2 group-hover:text-srh-orange transition-colors">
                  Read Full Story
                  <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Scrollable News Feed */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 flex flex-col"
          >
            <h3 className="font-bebas text-3xl text-white mb-6 border-l-4 border-srh-orange pl-4">
              SRH News Feed
            </h3>
            
            <div className="flex-grow glass-card p-2 overflow-y-auto custom-scrollbar" style={{ maxHeight: '500px' }}>
              <div className="flex flex-col gap-2">
                {newsFeed.map((article, index) => (
                  <div 
                    key={article.id}
                    className="flex gap-4 p-4 rounded-xl hover:bg-white/5 cursor-pointer transition-colors group"
                  >
                    <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-srh-orange text-xs font-inter mb-1 uppercase tracking-wider">{article.category} • {article.date}</span>
                      <h4 className="font-bebas text-xl text-white leading-tight group-hover:text-srh-orange transition-colors line-clamp-2">
                        {article.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button className="w-full mt-4 py-3 border border-srh-orange text-srh-orange hover:bg-srh-orange hover:text-white rounded-xl font-inter font-medium transition-all text-sm flex items-center justify-center gap-2">
              View All News
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default News;
