import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    { 
      id: 1, 
      src: '/images/stadium_bg.png', 
      title: '2016 IPL Champions',
      colSpan: 'md:col-span-2', rowSpan: 'md:row-span-2' 
    },
    { 
      id: 2, 
      src: '/images/players/travis_head.jpg', 
      title: 'Travis Head 100 - Record 287/3',
      colSpan: 'col-span-1', rowSpan: 'row-span-1' 
    },
    { 
      id: 3, 
      src: '/images/players/abhishek_sharma.png', 
      title: 'Explosive Openings',
      colSpan: 'col-span-1', rowSpan: 'row-span-1' 
    },
    { 
      id: 4, 
      src: '/images/players/pat_cummins.jpg', 
      title: 'Captain Pat Cummins',
      colSpan: 'md:col-span-2', rowSpan: 'row-span-1' 
    },
  ];

  return (
    <section id="gallery" className="py-20 relative bg-srh-black">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-bebas text-5xl md:text-6xl text-white mb-4">Moments of <span className="text-srh-orange text-glow">Glory</span></h2>
          <p className="font-poppins text-gray-400 max-w-2xl mx-auto">
            Relive the best moments of the season.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-xl overflow-hidden group ${img.colSpan} ${img.rowSpan}`}
            >
              <img 
                src={img.src} 
                alt="Gallery" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-srh-black/90 via-srh-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end pb-6">
                <div className="w-12 h-12 mb-4 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center scale-50 group-hover:scale-100 transition-transform duration-500">
                  <span className="text-white text-xl">+</span>
                </div>
                <h3 className="font-bebas text-2xl text-white tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
