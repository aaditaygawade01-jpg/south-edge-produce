import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProductCards = () => {
  const products = [
    {
      title: 'Golden Shallots',
      description: 'Hand-graded and packed in premium punnets. Consistent quality and exceptional shelf appeal for retail and foodservice.',
      image: '/golden-shallots-direct.png',
      badge: 'Bestseller',
      path: '/products'
    },
    {
      title: 'Red Shallots',
      description: 'Intense flavour and deep red colour. Available in premium mesh bags — a favourite among chefs and premium retailers.',
      image: '/red-shallots-direct.png',
      badge: 'Chef\'s Choice',
      path: '/products'
    },
    {
      title: 'Black Garlic',
      description: 'Slow-fermented for deep umami sweetness. Presented in designer window boxes for the premium market.',
      image: '/black-garlic-direct.png',
      badge: 'Specialty',
      path: '/products'
    }
  ];

  return (
    <section className="bg-warm-white py-40 overflow-hidden relative">
      {/* Aesthetic Background Accents */}
      <div className="absolute top-40 right-0 w-64 h-64 bg-olive-light/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 left-0 w-64 h-64 bg-olive-pale/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-label mb-4 block"
          >
            Our Produce
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-charcoal-deep mb-8 leading-tight"
          >
            Grown with Intention.<br />Harvested with Care.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-charcoal-mid max-w-2xl mx-auto font-sans text-lg leading-relaxed"
          >
            Premium shallots and specialty produce from North East Tasmania.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="bg-white border border-parchment/50 shadow-soft hover:shadow-hover transition-all duration-500 flex flex-col h-full rounded-2xl overflow-hidden group"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {product.badge && (
                  <span className="absolute top-6 left-6 bg-olive-mid text-warm-white text-[10px] tracking-widest uppercase px-4 py-1.5 rounded-full font-sans font-bold glow-olive">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-10 flex flex-col flex-grow relative bg-white">
                <h3 className="text-3xl mb-4 text-charcoal-deep font-serif group-hover:text-olive-deep transition-colors duration-300">{product.title}</h3>
                <p className="text-charcoal-mid text-base font-sans leading-relaxed mb-10 flex-grow">
                  {product.description}
                </p>
                <Link to={product.path} className="text-olive-deep font-sans text-sm font-bold tracking-widest uppercase inline-flex items-center group/link">
                  <span>Learn More</span>
                  <span className="ml-3 transition-transform group-hover/link:translate-x-2">→</span>
                </Link>

                {/* Aesthetic Glow Line */}
                <div className="absolute bottom-0 left-0 h-1 bg-olive-mid w-0 group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCards;
