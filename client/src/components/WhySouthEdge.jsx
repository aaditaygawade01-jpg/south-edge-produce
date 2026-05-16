import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Truck, MapPin, TrendingUp } from 'lucide-react';

const WhySouthEdge = () => {
  const blocks = [
    {
      icon: <Leaf size={28} />,
      title: 'Flavour First',
      body: 'Cool climate growing produces slower, more concentrated flavour development.'
    },
    {
      icon: <Truck size={28} />,
      title: 'Consistent Supply',
      body: 'Reliable seasonal volumes with professional handling from harvest to delivery.'
    },
    {
      icon: <MapPin size={28} />,
      title: 'Provenance You Can Trust',
      body: 'Full traceability from paddock to pack. Tasmanian grown, guaranteed.'
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'Scalable Partnership',
      body: 'Single pallets to full container loads. We can supply at scale.'
    }
  ];

  return (
    <section className="bg-gradient-dark py-32 text-warm-white relative overflow-hidden">
      {/* Decorative Glow Orbs */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-olive-deep/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-olive-light/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
            className="section-label text-olive-pale mb-6 block"
          >
            Why South Edge Produce
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-warm-white mb-6 glow-text"
          >
            Built on Provenance. Driven by Quality.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blocks.map((block, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-warm-white/10 p-12 rounded-xl hover:bg-white/10 transition-all duration-500 group relative"
            >
              {/* Card Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-olive opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl" />
              
              <div className="text-olive-light mb-8 bg-olive-deep/30 w-16 h-16 flex items-center justify-center rounded-lg glow-olive group-hover:scale-110 transition-transform duration-500">
                {block.icon}
              </div>
              <h3 className="text-2xl md:text-3xl mb-6 text-warm-white font-serif tracking-tight">{block.title}</h3>
              <p className="text-warm-white/70 font-sans text-base md:text-lg leading-relaxed">
                {block.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySouthEdge;
