import React from 'react';
import { motion } from 'framer-motion';

const TasmaniaBar = () => {
  const stats = [
    { label: 'Cool Climate Growing' },
    { label: 'Zero Mainland Pests' },
    { label: 'GM Free by Law' },
    { label: 'Export Grade Quality' },
  ];

  return (
    <section className="bg-charcoal-deep py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-serif italic text-warm-white text-[clamp(1.5rem,3vw,2.2rem)] leading-relaxed mb-12 max-w-4xl mx-auto"
        >
          "These are natural advantages you can't manufacture."
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="px-6 py-2 border border-[rgba(184,201,160,0.25)] rounded-full"
            >
              <span className="font-sans text-olive-pale text-sm tracking-wide">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TasmaniaBar;
