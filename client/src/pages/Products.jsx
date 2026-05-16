import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <main>
      <Hero 
        images={["/golden-onion-project.png"]}
        label="Our Produce"
        title={<>Premium Produce.<br />Exceptional Flavour.</>}
        subtitle="Sustainably grown in the world's cleanest environment."
      />

      {/* Golden Shallots */}
      <section className="bg-warm-white py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.img 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                src="/golden-shallots.png" 
                alt="Golden Shallots" 
                className="rounded-[4px] shadow-strong w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-charcoal-deep mb-6">Golden Shallots</h2>
              <div className="space-y-6 text-charcoal-mid font-sans leading-relaxed mb-10">
                <p>
                  Our golden shallots are grown slowly in Tasmania's cool temperate climate — producing a sweet, complex flavour with exceptional shelf life.
                </p>
                <p>
                  The ideal conditions of clean air, pure water, and rich Tasmanian soil result in consistent sizing and superior quality every season.
                </p>
              </div>
              
              <div className="bg-cream p-8 rounded-[4px] mb-10">
                <h4 className="section-label mb-4">Specifications</h4>
                <div className="grid grid-cols-2 gap-y-4 text-sm font-sans">
                  <span className="text-olive-mid font-semibold">Flavour:</span>
                  <span>Sweet, mild, complex</span>
                  <span className="text-olive-mid font-semibold">Skin:</span>
                  <span>Papery golden-brown</span>
                  <span className="text-olive-mid font-semibold">Climate:</span>
                  <span>Cool temperate Tasmania</span>
                  <span className="text-olive-mid font-semibold">Pack Formats:</span>
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

      {/* Red Shallots */}
      <section className="bg-cream py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2">
              <motion.img 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                src="/red-shallots.png" 
                alt="Red Shallots" 
                className="rounded-[4px] shadow-strong w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-charcoal-deep mb-6">Red Shallots</h2>
              <div className="space-y-6 text-charcoal-mid font-sans leading-relaxed mb-10">
                <p>
                  Bold in colour and intense in flavour, our red shallots are a favourite among chefs and premium retailers across Australia.
                </p>
                <p>
                  Grown in the same pristine Tasmanian conditions, they offer a richer, more pronounced flavour profile ideal for fine dining.
                </p>
              </div>
              
              <div className="bg-warm-white p-8 rounded-[4px] border border-parchment mb-10">
                <h4 className="section-label mb-4">Specifications</h4>
                <div className="grid grid-cols-2 gap-y-4 text-sm font-sans">
                  <span className="text-olive-mid font-semibold">Flavour:</span>
                  <span>Bold, intense, rich</span>
                  <span className="text-olive-mid font-semibold">Skin:</span>
                  <span>Deep red-purple</span>
                  <span className="text-olive-mid font-semibold">Climate:</span>
                  <span>Cool temperate Tasmania</span>
                  <span className="text-olive-mid font-semibold">Pack Formats:</span>
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

      {/* Black Garlic */}
      <section className="bg-charcoal-deep py-32 overflow-hidden text-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.img 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                src="/black-garlic.png" 
                alt="Black Garlic" 
                className="rounded-[4px] shadow-olive w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <span className="bg-olive-mid text-warm-white text-[10px] tracking-widest uppercase px-4 py-1.5 rounded-full font-sans font-semibold mb-6 inline-block">Specialty Product</span>
              <h2 className="text-warm-white mb-6">Black Garlic</h2>
              <div className="space-y-6 text-[rgba(250,250,247,0.80)] font-sans leading-relaxed mb-10">
                <p>
                  Our black garlic is produced through a slow fermentation process — aging whole bulbs under carefully controlled temperature and humidity over several weeks.
                </p>
                <p>
                  The result is a deeply complex ingredient: sweet, savory, with notes of balsamic and umami. No additives. No preservatives. Pure fermentation.
                </p>
              </div>
              
              <div className="bg-[rgba(250,250,247,0.05)] border border-[rgba(250,250,247,0.15)] p-8 rounded-[4px] mb-10">
                <h4 className="section-label text-olive-pale mb-4">Specifications</h4>
                <div className="grid grid-cols-2 gap-y-4 text-sm font-sans">
                  <span className="text-olive-pale font-semibold">Flavour:</span>
                  <span>Sweet, umami, balsamic</span>
                  <span className="text-olive-pale font-semibold">Texture:</span>
                  <span>Soft, spreadable</span>
                  <span className="text-olive-pale font-semibold">Process:</span>
                  <span>Slow natural fermentation</span>
                  <span className="text-olive-pale font-semibold">Availability:</span>
                  <span>Limited, seasonal</span>
                </div>
              </div>
              
              <Link to="/wholesale" className="btn-primary !bg-olive-light hover:!bg-olive-pale !text-charcoal-deep">
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
