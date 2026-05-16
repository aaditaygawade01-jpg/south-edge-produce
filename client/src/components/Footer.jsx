import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-charcoal-deep text-warm-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-tight text-olive-pale font-semibold mb-6 block">
              South Edge Produce
            </Link>
            <p className="text-[rgba(250,250,247,0.60)] font-sans text-sm leading-loose mb-2">
              "Grown at the Edge of the World"
            </p>
            <p className="text-[rgba(250,250,247,0.60)] font-sans text-sm">
              North East Tasmania, Australia
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-olive-light mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Products', 'Wholesale', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-[rgba(250,250,247,0.80)] hover:text-olive-light transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Products */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-olive-light mb-8">Products</h4>
            <ul className="space-y-4">
              {['Golden Shallots', 'Red Shallots', 'Black Garlic'].map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    className="text-[rgba(250,250,247,0.80)] hover:text-olive-light transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-olive-light mb-8">Contact</h4>
            <div className="space-y-4 text-sm text-[rgba(250,250,247,0.80)]">
              <p>Tasmania, Australia</p>
              <a
                href="mailto:enquire@southedgeproduce.com.au"
                className="block hover:text-olive-light transition-colors"
              >
                enquire@southedgeproduce.com.au
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[rgba(250,250,247,0.10)] pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[rgba(250,250,247,0.40)] text-xs">
            © 2026 South Edge Produce. Grown in Tasmania, Australia.
          </p>
          <div className="flex space-x-6 text-xs text-[rgba(250,250,247,0.40)]">
            <Link to="#" className="hover:text-warm-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-warm-white transition-colors">Terms of Supply</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
