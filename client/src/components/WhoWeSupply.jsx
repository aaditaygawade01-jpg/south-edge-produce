import React from 'react';
import { motion } from 'framer-motion';
import { Store, ShoppingCart, UserCheck, Building2, Globe } from 'lucide-react';

const WhoWeSupply = () => {
  const partners = [
    { icon: <Store size={32} />, label: 'Wholesalers & Distributors' },
    { icon: <ShoppingCart size={32} />, label: 'Retail & Grocery' },
    { icon: <UserCheck size={32} />, label: 'Chefs & Foodservice' },
    { icon: <Building2 size={32} />, label: 'Premium Supermarkets' },
    { icon: <Globe size={32} />, label: 'Export Markets' },
  ];

  return (
    <section className="bg-[#FAF9F6] py-24 md:py-32 overflow-hidden relative">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-olive-mid/[0.03] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="section-label mb-4 block text-olive-deep tracking-[0.3em]"
          >
            PARTNERSHIPS
          </motion.span>
          <h2 className="text-charcoal-deep mb-6 font-serif text-4xl md:text-5xl">Who We Supply</h2>
          <p className="text-charcoal-mid max-w-2xl mx-auto font-sans leading-relaxed text-sm md:text-base opacity-80">
            Trusted by wholesale buyers, retailers, and high-end culinary establishments across the globe.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-6">
                {/* Olive Glow Ring */}
                <div className="absolute inset-0 bg-olive-mid/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center text-olive-deep bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-olive-pale/20 transition-all duration-500 group-hover:shadow-olive group-hover:border-olive-mid/40 group-hover:-translate-y-2">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
                  >
                    {partner.icon}
                  </motion.div>
                </div>
              </div>
              
              <span className="font-sans text-[11px] md:text-xs font-bold text-charcoal-deep tracking-[0.1em] uppercase max-w-[120px] leading-tight">
                {partner.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeSupply;
