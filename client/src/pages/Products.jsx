import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <main>
      <Hero 
        images={["https://images.unsplash.com/photo-1621255193910-18451f28b493?auto=format&fit=crop&q=80&w=2000"]}
        label="The Gourmet Collection"
        title={<>Premium Produce.<br />Culinary Excellence.</>}
        subtitle="Specially curated for chefs, wholesalers, and premium retailers who demand the world's best Tasmanian alliums."
        primaryCTA={{ text: "Download Product Guide →", to: "#" }}
        secondaryCTA={{ text: "Wholesale Enquiry", to: "/wholesale" }}
      />

      {/* Golden Shallots - Warm Parchment */}
      <section className="bg-[#FDFCF9] py-32 overflow-hidden border-b border-parchment/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div className="relative">
                <div className="absolute -inset-4 bg-olive-mid/5 blur-2xl rounded-full" />
                <motion.img 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  src="/golden-onion-project.png" 
                  alt="Golden Shallots" 
                  className="relative rounded-[4px] shadow-strong w-full aspect-[4/3] object-cover"
                />
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <span className="section-label mb-4 block">Varietal 01</span>
              <h2 className="text-charcoal-deep mb-6">Golden Shallots</h2>
              <div className="space-y-6 text-charcoal-mid font-sans leading-relaxed mb-10">
                <p>
                  Our golden shallots are grown slowly in Tasmania's cool temperate climate — producing a sweet, complex flavour with exceptional shelf life.
                </p>
                <p>
                  The ideal conditions of clean air, pure water, and rich Tasmanian soil result in consistent sizing and superior quality every season.
                </p>
              </div>
              
              <div className="bg-cream/50 p-8 rounded-[4px] border border-parchment/20 mb-10">
                <h4 className="section-label mb-4 text-[10px]">Technical Specifications</h4>
                <div className="grid grid-cols-2 gap-y-4 text-sm font-sans">
                  <span className="text-olive-deep font-bold">Flavour:</span>
                  <span>Sweet, mild, complex</span>
                  <span className="text-olive-deep font-bold">Skin:</span>
                  <span>Papery golden-brown</span>
                  <span className="text-olive-deep font-bold">Climate:</span>
                  <span>Cool temperate Tasmania</span>
                  <span className="text-olive-deep font-bold">Formats:</span>
                  <span>500g | 1kg | 5kg | 10kg | Bulk</span>
                </div>
              </div>
              
              <Link to="/wholesale" className="btn-primary">
                Enquire About Supply →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Red Shallots - Olive Mist */}
      <section className="bg-[#F4F6F0] py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div className="relative">
                <div className="absolute -inset-4 bg-olive-mid/10 blur-2xl rounded-full" />
                <motion.img 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  src="/hero-luxury.png" 
                  alt="Red Shallots" 
                  className="relative rounded-[4px] shadow-strong w-full aspect-[4/3] object-cover"
                />
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <span className="section-label mb-4 block">Varietal 02</span>
              <h2 className="text-charcoal-deep mb-6">Red Shallots</h2>
              <div className="space-y-6 text-charcoal-mid font-sans leading-relaxed mb-10">
                <p>
                  Bold in colour and intense in flavour, our red shallots are a favourite among chefs and premium retailers across Australia.
                </p>
                <p>
                  Grown in the same pristine Tasmanian conditions, they offer a richer, more pronounced flavour profile ideal for fine dining.
                </p>
              </div>
              
              <div className="bg-warm-white/80 p-8 rounded-[4px] border border-parchment/30 mb-10">
                <h4 className="section-label mb-4 text-[10px]">Technical Specifications</h4>
                <div className="grid grid-cols-2 gap-y-4 text-sm font-sans">
                  <span className="text-olive-deep font-bold">Flavour:</span>
                  <span>Bold, intense, rich</span>
                  <span className="text-olive-deep font-bold">Skin:</span>
                  <span>Deep red-purple</span>
                  <span className="text-olive-deep font-bold">Climate:</span>
                  <span>Cool temperate Tasmania</span>
                  <span className="text-olive-deep font-bold">Formats:</span>
                  <span>500g | 1kg | 5kg | 10kg | Bulk</span>
                </div>
              </div>
              
              <Link to="/wholesale" className="btn-primary">
                Enquire About Supply →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Black Garlic - Midnight Slate */}
      <section className="bg-[#1B2018] py-32 overflow-hidden text-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div className="relative">
                {/* Subtle Olive Glow Backdrop for Black Garlic */}
                <div className="absolute -inset-10 bg-olive-mid/15 blur-[80px] rounded-full pointer-events-none" />
                <motion.img 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  src="/garlic-project.png" 
                  alt="Black Garlic" 
                  className="relative rounded-[4px] shadow-[0_0_50px_rgba(107,122,62,0.2)] w-full aspect-[4/3] object-cover border border-olive-mid/20"
                />
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <span className="bg-olive-mid/30 text-olive-pale text-[10px] tracking-widest uppercase px-4 py-1.5 rounded-full font-sans font-bold mb-6 inline-block border border-olive-mid/40">Specialty Fermentation</span>
              <h2 className="text-warm-white mb-6">Tasmanian Black Garlic</h2>
              <div className="space-y-6 text-[rgba(250,250,247,0.70)] font-sans leading-relaxed mb-10">
                <p>
                  Our black garlic is produced through a slow fermentation process — aging whole bulbs under carefully controlled temperature and humidity over several weeks.
                </p>
                <p>
                  The result is a deeply complex ingredient: sweet, savory, with notes of balsamic and umami. No additives. No preservatives. Pure fermentation.
                </p>
              </div>
              
              <div className="bg-olive-deep/20 border border-olive-mid/20 p-8 rounded-[4px] mb-10">
                <h4 className="section-label text-olive-pale mb-4 text-[10px]">Technical Specifications</h4>
                <div className="grid grid-cols-2 gap-y-4 text-sm font-sans">
                  <span className="text-olive-pale font-bold">Flavour:</span>
                  <span>Sweet, umami, balsamic</span>
                  <span className="text-olive-pale font-bold">Texture:</span>
                  <span>Soft, spreadable</span>
                  <span className="text-olive-pale font-bold">Process:</span>
                  <span>Slow natural fermentation</span>
                  <span className="text-olive-pale font-bold">Availability:</span>
                  <span>Limited, seasonal</span>
                </div>
              </div>
              
              <Link to="/wholesale" className="btn-primary !bg-olive-mid hover:!bg-olive-light">
                Register Your Interest →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
