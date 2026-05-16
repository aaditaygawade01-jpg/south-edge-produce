import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Provenance = () => {
  return (
    <section className="flex flex-col lg:flex-row min-h-[600px] overflow-hidden">
      {/* Image Side */}
      <div className="lg:w-[55%] relative h-[400px] lg:h-auto overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/provenance-farm.png")' }}
        />
        <div className="absolute inset-0 bg-[rgba(28,32,24,0.15)]" />
      </div>

      {/* Text Side */}
      <div className="lg:w-[45%] bg-cream-mid flex items-center p-12 lg:p-24">
        <div className="max-w-md">
          <span className="section-label text-olive-mid mb-6 block">Our Provenance</span>
          <h2 className="text-charcoal-deep mb-8">
            North East Tasmania.<br />Geographically the Best.
          </h2>
          
          <div className="space-y-6 text-charcoal-mid font-sans text-sm md:text-base leading-loose">
            <p>
              South Edge Produce is grown in the Scottsdale region of North East Tasmania — one of the most pristine growing environments on earth.
            </p>
            <p>
              A long cool growing season, the world's cleanest air, and pure Tasmanian water combine to produce shallots of exceptional flavour and consistency.
            </p>
            <p className="font-semibold italic">
              "These are natural advantages you cannot replicate."
            </p>
          </div>

          <Link to="/about" className="mt-12 inline-block text-olive-mid font-sans text-sm font-semibold tracking-wide border-b border-transparent hover:border-olive-mid transition-all">
            Our Full Story →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Provenance;
