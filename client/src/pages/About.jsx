import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { Wind, Droplets, Mountain, ThermometerSnowflake, ShieldCheck, Anchor } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const advantageCards = [
    { 
      icon: <Wind className="text-olive-light" size={32} />, 
      title: "World's Cleanest Air", 
      body: "Roaring Forties winds bring pure Southern Ocean air directly to our farm." 
    },
    { 
      icon: <Droplets className="text-olive-light" size={32} />, 
      title: "Pure Tasmanian Water", 
      body: "Natural mountain water, uncontaminated and mineral rich." 
    },
    { 
      icon: <Mountain className="text-olive-light" size={32} />, 
      title: "Rich Volcanic Soils", 
      body: "Deep, nutrient-dense soils built over thousands of years." 
    },
    { 
      icon: <ThermometerSnowflake className="text-olive-light" size={32} />, 
      title: "Cool Temperate Climate", 
      body: "Slow growth in cool conditions concentrates flavour naturally." 
    },
    { 
      icon: <ShieldCheck className="text-olive-light" size={32} />, 
      title: "GM Free by Government Law", 
      body: "Tasmania bans GM crops by law — guaranteed clean produce." 
    },
    { 
      icon: <Anchor className="text-olive-light" size={32} />, 
      title: "Island Isolation Advantage", 
      body: "Natural separation from mainland pests and diseases." 
    }
  ];

  return (
    <main>
      <Hero 
        images={["/farm-harvest-project.png"]}
        label="Our Story"
        title="Growing from the Edge of the World"
        subtitle="The Scottsdale region of North East Tasmania offers natural advantages you can't manufacture."
      />

      {/* Origin Section */}
      <section className="bg-warm-white py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="section-label mb-8 block">The Origin</span>
          <h2 className="text-charcoal-deep mb-12 italic">
            "Where you grow is as important as how you grow."
          </h2>
          <div className="space-y-8 text-charcoal-mid font-sans text-lg md:text-xl leading-relaxed">
            <p>
              South Edge Produce was built on a simple belief — that where you grow is as important as how you grow. Our farm sits in the Scottsdale region of North East Tasmania, one of the world's most pristine growing environments.
            </p>
            <p>
              For three generations, our family has worked this land, understanding the subtle rhythms of the seasons and the specific requirements of premium alliums. 
            </p>
          </div>
        </div>
      </section>

      {/* The Tasmania Advantage */}
      <section className="bg-cream py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <span className="section-label mb-4 block">Provenance</span>
            <h2 className="text-charcoal-deep">The Tasmania Advantage</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantageCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-warm-white p-10 rounded-[4px] border border-parchment shadow-soft hover:shadow-mid transition-all"
              >
                <div className="mb-6">{card.icon}</div>
                <h3 className="text-xl mb-4 text-charcoal-deep">{card.title}</h3>
                <p className="text-charcoal-mid text-sm font-sans leading-relaxed">
                  {card.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-warm-white py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
               <span className="section-label mb-4 block">Methodology</span>
               <h2 className="text-charcoal-deep mb-8">Quality in Every Stage</h2>
               <p className="text-charcoal-mid font-sans text-lg mb-10 leading-relaxed">
                 From planting to harvest, every step is managed for consistency, flavour, and reliability. We combine traditional knowledge with modern cold chain technology to ensure our produce arrives in peak condition.
               </p>
               <ul className="space-y-6">
                 {[
                   "Third generation growing knowledge",
                   "Quality management from farm to pack",
                   "Professional cold chain handling"
                 ].map((point, idx) => (
                   <li key={idx} className="flex items-center space-x-4 font-sans font-semibold text-olive-deep">
                     <span className="w-6 h-6 bg-olive-lightest rounded-full flex items-center justify-center text-[10px]">✓</span>
                     <span>{point}</span>
                   </li>
                 ))}
               </ul>
               <Link to="/products" className="btn-primary mt-12 inline-block">
                 View Our Products →
               </Link>
            </div>
            <div className="lg:w-1/2">
              <img src="/provenance-farm.png" alt="Tasmanian Farm" className="rounded-[4px] shadow-strong" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
