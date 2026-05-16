import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = ({ images = [], label, title, subtitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload images for faster transitions
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-warm-white">
      {/* Background Image Slider (Desktop Right / Mobile Full) */}
      
      {/* Mobile Background (Full coverage on mobile) */}
      <div className="absolute inset-0 z-0 lg:hidden overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url("${images[currentIndex]}")` }}
          />
        </AnimatePresence>
      </div>

      {/* Animated Olive Glow Orb */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 lg:left-0 -translate-x-1/2 lg:-translate-x-0 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-olive-mid/30 blur-[100px] md:blur-[120px] z-10 pointer-events-none"
      />

      {/* Content Column */}
      <div className="container mx-auto px-6 lg:px-12 relative z-20 flex h-full items-center">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left pt-32 md:pt-40 pb-20 relative">
          
          {/* Glowing Olive Accent Line */}
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: 250 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-[-20px] top-[55%] -translate-y-1/2 w-[3px] bg-olive-mid shadow-[0_0_15px_rgba(107,122,62,0.6)] hidden lg:block" 
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-2xl lg:max-w-none"
          >
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <motion.span 
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="font-sans text-[10px] md:text-[12px] tracking-[0.3em] uppercase font-bold text-olive-deep"
              >
                {label}
              </motion.span>
              <div className="h-[2px] w-12 md:w-20 bg-olive-mid/40 shadow-[0_0_8px_rgba(107,122,62,0.3)]" />
            </div>

            <h1 className="text-charcoal-deep mb-6 md:mb-8 leading-[1.1] font-serif font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              {title}
            </h1>

            <p className="text-charcoal-mid text-base md:text-lg lg:text-xl font-sans mb-10 md:mb-12 leading-relaxed opacity-90 lg:border-l-2 lg:border-olive-pale/30 lg:pl-6 max-w-xl">
              {subtitle}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full"
            >
              {/* Main CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6 w-full">
                <Link 
                  to="/products" 
                  className="w-full sm:w-auto bg-[#3D4A2E] text-warm-white px-8 md:px-10 py-4 md:py-5 rounded-[4px] text-[12px] md:text-[13px] tracking-widest font-bold uppercase hover:bg-olive-mid transition-all shadow-lg hover:-translate-y-1 text-center"
                >
                  View Our Products →
                </Link>
                <Link 
                  to="/wholesale" 
                  className="w-full sm:w-auto bg-transparent border-2 border-[#1B2A4A] text-[#1B2A4A] px-8 md:px-10 py-4 md:py-5 rounded-[4px] text-[12px] md:text-[13px] tracking-widest font-bold uppercase hover:bg-[#1B2A4A] hover:text-warm-white transition-all text-center"
                >
                  Wholesale Enquiries
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Right Image Slider Section (Desktop) */}
      <div className="absolute right-0 top-0 w-full lg:w-[45%] h-full z-10 hidden lg:block">
        <div className="relative w-full h-full overflow-hidden">
          {/* Stabilized Fluid Curve Overlay */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
              <path 
                d="M0,0 Q15,50 0,100 L0,100 L0,0 Z" 
                fill="#FAFAF7" 
              />
            </svg>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url("${images[currentIndex]}")` }}
            />
          </AnimatePresence>

          {/* Functional Pagination Dots */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-4">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-500 border border-warm-white/40 shadow-[0_0_8px_rgba(250,250,247,0.4)] ${i === currentIndex ? 'bg-warm-white w-8' : 'bg-transparent hover:bg-warm-white/20'}`}
                aria-label={`Switch to image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
