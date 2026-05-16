import React from 'react';
import EnquiryForm from '../components/EnquiryForm';
import { Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <main className="pt-32 pb-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <span className="section-label mb-4 block">Contact</span>
          <h1 className="text-charcoal-deep !text-[clamp(2.5rem,5vw,4rem)] mb-6">Get in Touch</h1>
          <p className="text-charcoal-mid max-w-2xl mx-auto font-sans leading-relaxed text-lg">
            Whether you're a wholesaler, retailer, chef or foodservice operator — we'd love to hear from you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left Side: Form */}
          <div className="lg:w-3/5 bg-cream p-10 md:p-16 rounded-[4px] shadow-soft">
            <h3 className="text-2xl mb-10 font-serif text-charcoal-deep">Send us a Message</h3>
            <EnquiryForm source="Contact Page" />
          </div>

          {/* Right Side: Info */}
          <div className="lg:w-2/5 space-y-12">
            <div>
              <h4 className="section-label mb-6 text-olive-mid">Location</h4>
              <div className="flex items-start space-x-4">
                <MapPin className="text-olive-light mt-1 flex-shrink-0" size={24} />
                <div className="font-sans">
                  <p className="text-charcoal-deep font-bold mb-1">South Edge Produce</p>
                  <p className="text-charcoal-mid">North East Tasmania</p>
                  <p className="text-charcoal-mid">Australia</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="section-label mb-6 text-olive-mid">Direct Contact</h4>
              <div className="flex items-start space-x-4">
                <Mail className="text-olive-light mt-1 flex-shrink-0" size={24} />
                <div className="font-sans">
                  <a 
                    href="mailto:enquire@southedgeproduce.com.au" 
                    className="text-charcoal-deep font-bold hover:text-olive-mid transition-colors block mb-1"
                  >
                    enquire@southedgeproduce.com.au
                  </a>
                  <p className="text-xs text-charcoal-light">We aim to respond within 1 business day.</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="section-label mb-6 text-olive-mid">Response Time</h4>
              <div className="flex items-start space-x-4">
                <Clock className="text-olive-light mt-1 flex-shrink-0" size={24} />
                <div className="font-sans">
                  <p className="text-charcoal-mid">Our office is active Monday to Friday.</p>
                  <p className="text-charcoal-mid">Wholesale enquiries are prioritized.</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-parchment">
              <p className="font-serif italic text-charcoal-light text-lg">
                "Tasmania is geographically the best environment for premium produce. We look forward to sharing it with you."
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
