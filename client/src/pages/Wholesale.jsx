import React from 'react';
import Hero from '../components/Hero';
import EnquiryForm from '../components/EnquiryForm';
import { motion } from 'framer-motion';
import { CheckCircle2, Box, RefreshCw, Ship, LayoutGrid } from 'lucide-react';

const Wholesale = () => {
  const capabilities = [
    {
      icon: <Box size={32} />,
      title: "Single Pallets",
      body: "Flexible minimum orders for new buyers looking to trial our produce."
    },
    {
      icon: <RefreshCw size={32} />,
      title: "Regular Supply Runs",
      body: "Weekly or fortnightly supply to suit your ongoing retail or foodservice operation."
    },
    {
      icon: <Ship size={32} />,
      title: "Full Container Loads",
      body: "Scalable volumes for large distributors and export markets globally."
    },
    {
      icon: <LayoutGrid size={32} />,
      title: "Custom Pack Formats",
      body: "Tailored packaging and presentation available for specialty requirements."
    }
  ];

  const benefits = [
    "Tasmanian provenance — premium market positioning",
    "Consistent grading and sizing every season",
    "Professional cold chain handling from paddock to pack",
    "Reliable seasonal volumes you can count on",
    "Full traceability guaranteed by Tasmanian grower",
    "Export grade quality standards across all varieties",
    "GM Free — guaranteed by Tasmanian law"
  ];

  return (
    <main>
      <Hero 
        images={["/garlic-project.png"]}
        label="For Wholesale Buyers"
        title="A Reliable Supply Partner"
        subtitle="Consistent quality. Professional handling. Scalable volumes."
      />

      {/* Capability Section */}
      <section className="bg-warm-white py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <span className="section-label mb-4 block">Capability</span>
            <h2 className="text-charcoal-deep mb-6">What We Can Supply</h2>
            <p className="text-charcoal-mid max-w-2xl mx-auto font-sans">
              We supply wholesale buyers, retailers, distributors, and foodservice operators across Australia and international markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-cream p-8 rounded-[4px] border border-parchment hover:border-olive-pale transition-all"
              >
                <div className="text-olive-mid mb-6">{item.icon}</div>
                <h3 className="text-xl mb-4 text-charcoal-deep font-serif">{item.title}</h3>
                <p className="text-charcoal-mid text-sm font-sans leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Source Section */}
      <section className="bg-charcoal-deep py-32 text-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="section-label text-olive-pale mb-6 block">The Advantage</span>
              <h2 className="text-warm-white mb-8">Why Source From Us</h2>
              <div className="grid grid-cols-1 gap-6">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <CheckCircle2 className="text-olive-light mt-1 flex-shrink-0" size={20} />
                    <span className="font-sans text-[rgba(250,250,247,0.85)] leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 bg-[rgba(250,250,247,0.05)] p-12 rounded-[4px] border border-[rgba(250,250,247,0.15)]">
               <h3 className="text-2xl mb-8 font-serif text-warm-white">How It Works</h3>
               <div className="space-y-8">
                 {[
                   { step: "1", title: "Make an Enquiry", desc: "Fill in our form or email us with your requirements." },
                   { step: "2", title: "Discuss Requirements", desc: "We'll call you to discuss volumes, pricing and timing." },
                   { step: "3", title: "Receive Proposal", desc: "A formal supply proposal tailored to your operation." },
                   { step: "4", title: "Confirm Agreement", desc: "Finalize logistics and supply schedule." },
                   { step: "5", title: "Ongoing Partnership", desc: "Reliable, consistent supply every season." }
                 ].map((item, idx) => (
                   <div key={idx} className="flex items-start space-x-6">
                     <span className="w-8 h-8 rounded-full bg-olive-mid flex items-center justify-center font-sans font-bold text-sm flex-shrink-0">
                       {item.step}
                     </span>
                     <div>
                       <h4 className="font-sans font-bold text-sm tracking-wide uppercase text-olive-pale mb-1">{item.title}</h4>
                       <p className="text-xs text-[rgba(250,250,247,0.60)]">{item.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pack Formats Table */}
      <section className="bg-warm-white py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-charcoal-deep mb-4">Pack Formats</h2>
            <p className="text-charcoal-mid font-sans">Consistent sizing and professional packaging.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans border-collapse">
              <thead>
                <tr className="border-b border-parchment">
                  <th className="py-6 section-label !text-charcoal-deep">Product</th>
                  <th className="py-6 section-label !text-charcoal-deep">Formats</th>
                  <th className="py-6 section-label !text-charcoal-deep">Min Order</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Golden Shallots", formats: "500g – Bulk", min: "1 Pallet" },
                  { name: "Red Shallots", formats: "500g – Bulk", min: "1 Pallet" },
                  { name: "Black Garlic", formats: "Custom POA", min: "On Enquiry" }
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-parchment hover:bg-cream transition-colors">
                    <td className="py-6 font-semibold text-olive-deep">{row.name}</td>
                    <td className="py-6 text-charcoal-mid">{row.formats}</td>
                    <td className="py-6 text-charcoal-mid">{row.min}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Large Enquiry Form */}
      <section id="enquiry" className="bg-cream py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">Connect</span>
            <h2 className="text-charcoal-deep mb-6">Start a Supply Conversation</h2>
            <p className="text-charcoal-mid font-sans max-w-2xl mx-auto">
              Fill in your details and we will be in touch within 1 business day to discuss your wholesale requirements.
            </p>
          </div>
          <EnquiryForm source="Wholesale Page" />
        </div>
      </section>
    </main>
  );
};

export default Wholesale;
