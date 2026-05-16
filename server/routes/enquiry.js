const express = require('express');
const router = express.Router();
const { createClient } = require('@supabase/supabase-js');

// These should be in your .env file
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

let supabase;
if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
} else {
  console.warn('Supabase credentials missing. Running in mock mode.');
}

router.post('/', async (req, res) => {
  const { 
    fullName, 
    companyName, 
    email, 
    phone, 
    buyerType, 
    productInterest, 
    volumeEstimate, 
    message,
    pageSource 
  } = req.body;

  console.log('Received enquiry:', req.body);

  if (!supabase) {
    // Mock success for development if Supabase is not configured
    return res.status(200).json({ message: 'Enquiry received (Mock mode)' });
  }

  try {
    const { data, error } = await supabase
      .from('enquiries')
      .insert([
        { 
          full_name: fullName, 
          company_name: companyName, 
          email, 
          phone, 
          buyer_type: buyerType, 
          product_interest: productInterest, 
          volume_estimate: volumeEstimate, 
          message,
          page_source: pageSource
        }
      ]);

    if (error) throw error;

    res.status(200).json({ message: 'Enquiry submitted successfully', data });
  } catch (error) {
    console.error('Supabase error:', error);
    res.status(500).json({ message: 'Failed to submit enquiry', error: error.message });
  }
});

module.exports = router;
