import React from 'react';
import { motion } from 'motion/react';

export default function TermsOfService() {
  return (
    <div className="pt-8 md:pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-serif text-clinic-teal-900 mb-8 uppercase tracking-widest text-center">Terms of Service</h1>
        
        <div className="prose prose-teal max-w-none text-clinic-muted space-y-6">
          <section>
            <h2 className="text-2xl font-serif text-clinic-teal-800 uppercase tracking-wider mb-4">1. Medical Disclaimer</h2>
            <p>The content on this website and our Ayurvedic treatments are for information and wellness purposes only. Ayurveda is a complementary health system and is not intended to replace conventional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-clinic-teal-800 uppercase tracking-wider mb-4">2. Appointment Policy</h2>
            <p>Consultations and treatments are by appointment only. We request at least 24 hours' notice for cancellations or rescheduling. This allows us to manage our practitioner's schedule and serve other clients effectively.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-clinic-teal-800 uppercase tracking-wider mb-4">3. Use of Website</h2>
            <p>By accessing this website, you agree to use it only for lawful purposes. You are prohibited from using the site to transmit any material that is offensive, harmful, or violates intellectual property rights.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-clinic-teal-800 uppercase tracking-wider mb-4">4. Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, and images, is the property of Sattvic Advanced Ayurveda and is protected by copyright laws. Unauthorized reproduction or distribution is strictly prohibited.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-clinic-teal-800 uppercase tracking-wider mb-4">5. Limitation of Liability</h2>
            <p>Sattvic Advanced Ayurveda shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or services.</p>
          </section>

          <section className="pt-8 border-t border-clinic-border">
            <p className="text-sm italic">By using our services, you signify your acceptance of these terms. These terms are subject to change without prior notice.</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
