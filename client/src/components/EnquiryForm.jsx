import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EnquiryForm = ({ source = 'General' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    buyerType: '',
    productInterest: '',
    volumeEstimate: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('http://localhost:5000/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, pageSource: source })
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({
          fullName: '',
          companyName: '',
          email: '',
          phone: '',
          buyerType: '',
          productInterest: '',
          volumeEstimate: '',
          message: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-warm-cream p-12 text-center rounded-[4px] border border-olive-pale"
      >
        <h3 className="text-olive-deep text-2xl mb-4 font-serif">Thank You</h3>
        <p className="text-charcoal-mid font-sans mb-8">
          Your enquiry has been received. We will be in touch within 1 business day.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="btn-primary"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs tracking-widest uppercase text-olive-mid font-sans font-semibold">Full Name *</label>
          <input
            required
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full bg-warm-white border border-parchment p-4 focus:outline-none focus:border-olive-mid transition-colors font-sans text-sm"
            placeholder="John Smith"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs tracking-widest uppercase text-olive-mid font-sans font-semibold">Company Name *</label>
          <input
            required
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full bg-warm-white border border-parchment p-4 focus:outline-none focus:border-olive-mid transition-colors font-sans text-sm"
            placeholder="Produce Solutions Ltd"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs tracking-widest uppercase text-olive-mid font-sans font-semibold">Email Address *</label>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-warm-white border border-parchment p-4 focus:outline-none focus:border-olive-mid transition-colors font-sans text-sm"
            placeholder="john@example.com"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs tracking-widest uppercase text-olive-mid font-sans font-semibold">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-warm-white border border-parchment p-4 focus:outline-none focus:border-olive-mid transition-colors font-sans text-sm"
            placeholder="+61 000 000 000"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs tracking-widest uppercase text-olive-mid font-sans font-semibold">I am a...</label>
          <select
            name="buyerType"
            value={formData.buyerType}
            onChange={handleChange}
            className="w-full bg-warm-white border border-parchment p-4 focus:outline-none focus:border-olive-mid transition-colors font-sans text-sm appearance-none"
          >
            <option value="">Select Option</option>
            <option value="Wholesaler">Wholesaler / Distributor</option>
            <option value="Retailer">Retailer / Independent Grocer</option>
            <option value="Foodservice">Foodservice Operator</option>
            <option value="Chef">Chef</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-xs tracking-widest uppercase text-olive-mid font-sans font-semibold">Product Interest</label>
          <select
            name="productInterest"
            value={formData.productInterest}
            onChange={handleChange}
            className="w-full bg-warm-white border border-parchment p-4 focus:outline-none focus:border-olive-mid transition-colors font-sans text-sm appearance-none"
          >
            <option value="">Select Option</option>
            <option value="Golden Shallots">Golden Shallots</option>
            <option value="Red Shallots">Red Shallots</option>
            <option value="Black Garlic">Black Garlic</option>
            <option value="All Products">All Products</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs tracking-widest uppercase text-olive-mid font-sans font-semibold">Estimated Volume Required</label>
        <input
          type="text"
          name="volumeEstimate"
          value={formData.volumeEstimate}
          onChange={handleChange}
          className="w-full bg-warm-white border border-parchment p-4 focus:outline-none focus:border-olive-mid transition-colors font-sans text-sm"
          placeholder="e.g. 1 pallet weekly, 5kg trial, etc."
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs tracking-widest uppercase text-olive-mid font-sans font-semibold">Message / Additional Details</label>
        <textarea
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-warm-white border border-parchment p-4 focus:outline-none focus:border-olive-mid transition-colors font-sans text-sm resize-none"
          placeholder="How can we help you?"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className={`btn-primary w-full py-5 text-base font-semibold tracking-wide ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        {status === 'loading' ? 'Sending...' : 'Send Enquiry →'}
      </button>

      {status === 'error' && (
        <p className="text-red-600 text-sm font-sans text-center mt-4">
          There was an error sending your message. Please try again or email us directly.
        </p>
      )}
    </form>
  );
};

export default EnquiryForm;
