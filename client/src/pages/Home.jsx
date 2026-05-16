import React from 'react';
import Hero from '../components/Hero';
import TasmaniaBar from '../components/TasmaniaBar';
import ProductCards from '../components/ProductCards';
import WhoWeSupply from '../components/WhoWeSupply';
import Provenance from '../components/Provenance';
import WhySouthEdge from '../components/WhySouthEdge';
import CTABanner from '../components/CTABanner';

const Home = () => {
  return (
    <main>
      <Hero
        images={[
          "/hero-luxury.png",
          "/golden-onion.png",
          "/garlic.png",
          "/onion-field-harvest.png"
        ]}
        label="NUTRITION, GROWN IN TASMANIA"
        title={"Premium Quality &\nSustainable Farming"}
        subtitle="Defining the future of Tasmanian agriculture through innovation, quality, and direct wholesale supply. A fully integrated system from soil to delivery."
      />
      <TasmaniaBar />
      <ProductCards />
      <WhoWeSupply />
      <Provenance />
      <WhySouthEdge />
      <CTABanner />
    </main>
  );
};

export default Home;
