import React from 'react';
import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <div className="pt-8 md:pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-serif text-clinic-teal-900 mb-8 uppercase tracking-widest text-center">Privacy Policy</h1>
        
        <div className="prose prose-teal max-w-none text-clinic-muted space-y-6">
          <section>
            <h2 className="text-2xl font-serif text-clinic-teal-800 uppercase tracking-wider mb-4">1. Information We Collect</h2>
            <p>At Sattvic Advanced Ayurveda, we collect information that you provide directly to us when you book a consultation, sign up for our newsletter, or contact us through our website. This may include your name, email address, phone number, and health-related details provided for consultation purposes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-clinic-teal-800 uppercase tracking-wider mb-4">2. How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Schedule and manage your Ayurvedic appointments.</li>
              <li>Provide personalized health recommendations.</li>
              <li>Communicate with you regarding our services and wellness tips.</li>
              <li>Improve our website and client experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-clinic-teal-800 uppercase tracking-wider mb-4">3. Data Security</h2>
            <p>We treat your medical and personal information with the highest level of confidentiality. We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-clinic-teal-800 uppercase tracking-wider mb-4">4. Third-Party Sharing</h2>
            <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website or servicing you, so long as those parties agree to keep this information confidential.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-clinic-teal-800 uppercase tracking-wider mb-4">5. Your Rights</h2>
            <p>You have the right to request access to the personal data we hold about you, to request that your personal data be rectified or deleted, and to withdraw your consent at any time.</p>
          </section>

          <section className="pt-8 border-t border-clinic-border">
            <p className="text-sm italic">Last updated: April 2026. For any questions regarding this policy, please contact us at sattviclife9@gmail.com</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
