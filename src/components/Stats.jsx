import { motion } from 'framer-motion';

const stats = [
  { id: 1, label: 'Top Run Scorer', value: 'D. Warner', subValue: '4,014 Runs' },
  { id: 2, label: 'Highest Wicket-Taker', value: 'B. Kumar', subValue: '157 Wickets' },
  { id: 3, label: 'Highest Team Score', value: '287/3', subValue: 'vs RCB (2024)' },
  { id: 4, label: 'IPL Titles', value: '1', subValue: '2016 Champions' },
];

const Stats = () => {
  return (
    <section id="stats" className="py-20 relative bg-srh-black">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-bebas text-5xl md:text-6xl text-white mb-4">Team <span className="text-srh-orange text-glow">Statistics</span></h2>
          <p className="font-poppins text-gray-400 max-w-2xl mx-auto">
            Dominating the field with unmatched numbers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 text-center border border-white/10 hover:border-srh-orange transition-colors relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-srh-orange opacity-0 group-hover:opacity-5 transition-opacity" />
              <h3 className="font-montserrat text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
                {stat.label}
              </h3>
              <div className="font-bebas text-5xl text-white mb-2">{stat.value}</div>
              <div className="font-inter text-srh-orange font-medium">{stat.subValue}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
