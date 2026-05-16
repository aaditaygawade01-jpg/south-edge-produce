import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTABanner = () => {
  return (
    <section className="bg-gradient-cta py-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[rgba(250,250,247,0.03)] transform skew-x-[-20deg] translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-warm-white mb-6 font-serif"
        >
          Ready to Stock<br />South Edge Produce?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[rgba(250,250,247,0.80)] font-sans text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Reach out to discuss volumes, pricing, and seasonal availability.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link to="/wholesale" className="bg-warm-white text-olive-deep px-12 py-4 rounded-[4px] font-sans font-semibold text-base transition-all hover:bg-cream hover:scale-[1.05] inline-block shadow-mid">
            Make an Enquiry →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
