import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingActions() {
  const phoneNumber = "919923880447";
  const whatsappNumber = "919923880447";
  const whatsappMessage = "Namaste! I would like to book a consultation at Sattvic Advanced Ayurveda.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <div className="relative group">
        {/* Pulsating Waves */}
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[#25D366] rounded-full -z-10"
        />
        <motion.div
          animate={{ scale: [1, 2, 1], opacity: [0.15, 0.05, 0.15] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute inset-0 bg-[#25D366] rounded-full -z-10"
        />
        
        <motion.a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center gap-2 bg-[#25D366] text-white p-3 md:px-5 md:py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow relative z-10"
          id="whatsapp-floating-button"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="hidden md:inline text-sm font-bold tracking-wider uppercase">WhatsApp</span>
        </motion.a>
      </div>

      {/* Call Button */}
      <div className="relative group">
        {/* Pulsating Waves */}
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          className="absolute inset-0 bg-clinic-teal-900 rounded-full -z-10"
        />
        <motion.div
          animate={{ scale: [1, 2, 1], opacity: [0.15, 0.05, 0.15] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
          className="absolute inset-0 bg-clinic-teal-900 rounded-full -z-10"
        />

        <motion.a
          href={`tel:+${phoneNumber}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center gap-2 bg-clinic-teal-900 text-white p-3 md:px-5 md:py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow relative z-10"
          id="call-floating-button"
        >
          <Phone className="w-6 h-6" />
          <span className="hidden md:inline text-sm font-bold tracking-wider uppercase">Call Now</span>
        </motion.a>
      </div>
    </div>
  );
}
