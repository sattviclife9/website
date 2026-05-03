import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, ArrowRight, MapPin, CheckCircle, AlertCircle, X } from 'lucide-react';
import SEO from '../components/SEO';
import AboutNav from '../components/AboutNav';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

export default function ContactUs() {
  const submitActionRef = useRef('whatsapp');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 5000);
  };

  return (
    <>
      <AboutNav />
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-12 md:pt-40 md:pb-32">
      <SEO 
        title="Contact Us | Book Your Ayurvedic Consultation"
        description="Get in touch with Sattvic Advanced Ayurveda in Pune. Book your appointment for Nadi Parikshan, Panchakarma, or pain management therapies today."
        keywords="book Ayurveda appointment Pune, contact Sattvic Life, Ayurveda clinic location, Nadi Pariksha appointment"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-20 md:mb-28"
      >
        <div className="mb-6 md:mb-8 inline-flex items-center gap-4">
          <span className="h-[1px] w-8 bg-clinic-bronze"></span>
          <span className="text-clinic-bronze font-serif italic text-lg md:text-xl">Reach Out</span>
          <span className="h-[1px] w-8 bg-clinic-bronze"></span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif text-clinic-teal-900 leading-[0.9] mb-8 font-light">
          Contact <span className="italic font-medium text-clinic-teal-900/80">Us</span>
        </h1>
        <p className="text-xl md:text-2xl text-clinic-charcoal font-light leading-relaxed max-w-3xl mx-auto">
          Book your consultation or simply reach out with questions regarding our therapies.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        <div className="bg-white p-10 md:p-14 rounded-[2.5rem] border border-clinic-border shadow-sm">
          <h3 className="text-3xl font-serif text-clinic-teal-900 mb-8 font-light">Send an Inquiry</h3>
          <form 
            className="flex flex-col gap-4" 
            onSubmit={async (e) => { 
              e.preventDefault(); 
              
              const formData = new FormData(e.currentTarget);
              const action = submitActionRef.current;

              const name = formData.get('name') as string;
              const phone = formData.get('phone') as string;
              const email = formData.get('email') as string;
              const message = formData.get('message') as string;

              if (action === 'email') {
                setIsSubmitting(true);
                
                const object = Object.fromEntries(formData.entries());
                object.access_key = "c8114dca-87c5-4c87-a1ec-2dd75b70c61a";
                object.subject = `New Inquiry from ${name}`;
                object.from_name = "Sattvic Life Website";
                const json = JSON.stringify(object);
                
                try {
                  const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Accept: "application/json"
                    },
                    body: json
                  });
                  
                  const result = await response.json();
                  
                  if (response.ok && result.success) {
                    showNotification('success', 'Thank you! Your message has been sent successfully.');
                    (e.target as HTMLFormElement).reset();
                  } else {
                    showNotification('error', result.message || 'Something went wrong. Please try again later or use WhatsApp.');
                  }
                } catch (error) {
                  showNotification('error', 'Network error. Please check your connection and try again.');
                } finally {
                  setIsSubmitting(false);
                }
              } else {
                // Default: Send via WhatsApp
                const whatsappMessage = `*New Inquiry from Sattvic Life*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email || 'N/A'}\n\n*Message:*\n${message}`;
                const encodedMessage = encodeURIComponent(whatsappMessage);
                
                window.open(`https://wa.me/919404417145?text=${encodedMessage}`, '_blank');
              }
            }}
          >
            <input name="name" type="text" placeholder="Your Name *" required className="p-4 bg-clinic-ivory/50 rounded-lg border border-clinic-border focus:outline-none focus:border-clinic-gold" />
            <input name="phone" type="tel" pattern="[0-9]{10}" title="Please enter a valid 10-digit phone number" maxLength={10} placeholder="Your Phone Number (10 digits) *" required className="p-4 bg-clinic-ivory/50 rounded-lg border border-clinic-border focus:outline-none focus:border-clinic-gold" />
            <input name="email" type="email" placeholder="Your Email" className="p-4 bg-clinic-ivory/50 rounded-lg border border-clinic-border focus:outline-none focus:border-clinic-gold" />
            <textarea name="message" placeholder="Message" rows={4} required className="p-4 bg-clinic-ivory/50 rounded-lg border border-clinic-border focus:outline-none focus:border-clinic-gold"></textarea>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <button 
                type="submit" 
                onClick={() => submitActionRef.current = 'whatsapp'}
                className="w-full sm:w-auto flex justify-center items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-sm text-[11px] font-bold tracking-widest shadow-md hover:bg-green-700 transition-colors uppercase"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Send via WhatsApp
              </button>
              
              <span className="text-clinic-muted font-serif italic text-sm">or</span>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                onClick={() => submitActionRef.current = 'email'}
                className={`w-full sm:w-auto flex justify-center items-center gap-2 bg-clinic-teal-900 text-white px-8 py-4 rounded-sm text-[11px] font-bold tracking-widest shadow-md transition-colors uppercase ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-clinic-teal-800'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                {isSubmitting ? 'Sending...' : 'Send via Email'}
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col justify-center">
          <div className="mb-8">
            <h4 className="text-[11px] uppercase tracking-widest font-bold text-clinic-bronze mb-2">Clinic Operations</h4>
            <p className="text-clinic-muted">
              Mon to Sat: 10AM to 2PM | 5PM to 8:30PM<br/>
              Sun: 10AM to 2PM <span className="text-[11px] italic text-clinic-bronze">(Prior Appointment)</span>
            </p>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-widest font-bold text-clinic-bronze mb-4">Direct Lines</h4>
            <div className="flex flex-col gap-3 items-start">
              <a href="tel:+919404417145" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 text-[13px] uppercase tracking-[0.1em] font-bold text-clinic-teal-900 border border-clinic-teal-900/20 bg-clinic-teal-50/30 px-6 py-4 rounded-xl shadow-sm transition-all hover:bg-clinic-teal-50 hover:border-clinic-teal-900/40">
                <Phone className="w-4 h-4" />
                <span>Call +91-9404417145</span>
              </a>
              <a href="mailto:sattviclife9@gmail.com" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 text-[13px] uppercase tracking-[0.1em] font-bold text-clinic-teal-900 border border-clinic-teal-900/20 bg-clinic-teal-50/30 px-6 py-4 rounded-xl shadow-sm transition-all hover:bg-clinic-teal-50 hover:border-clinic-teal-900/40">
                <span className="text-lg">@</span>
                <span>sattviclife9@gmail.com</span>
              </a>
              <a href="https://wa.me/919404417145" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 text-[13px] uppercase tracking-[0.1em] font-bold text-green-700 border border-green-700/20 bg-green-50/30 px-6 py-4 rounded-xl shadow-sm transition-all hover:bg-green-50 hover:border-green-700/40">
                <WhatsAppIcon className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 bg-white p-6 md:p-8 rounded-[2rem] border border-clinic-border shadow-sm transform-gpu"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
          <div>
            <h3 className="text-2xl font-serif text-clinic-teal-900 mb-2">Our Location</h3>
            <p className="text-clinic-muted">Visit Sattvic Advanced Ayurveda for your consultation.</p>
          </div>
          <a 
            href="https://www.google.com/maps/search/Sattvic+Advanced+Ayurveda+and+Panchakarma+Centre" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-clinic-teal-50 text-clinic-teal-900 px-6 py-3 rounded-full text-[11px] font-bold tracking-widest hover:bg-clinic-teal-100 transition-colors uppercase"
          >
            <MapPin className="w-4 h-4" />
            Open in Google Maps
          </a>
        </div>
        <div className="w-full h-[300px] md:h-[450px] rounded-xl overflow-hidden border border-clinic-border relative bg-clinic-ivory/50">
          <iframe 
            src="https://maps.google.com/maps?q=Sattvic+Advanced+Ayurveda+and+Panchakarma+Centre&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Clinic Location"
            className="absolute inset-0"
          ></iframe>
        </div>
      </motion.div>

      {/* Custom Notification Toast */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 p-4 rounded-xl shadow-xl flex items-center gap-3 border min-w-[320px] max-w-[90vw] ${
              notification.type === 'success' 
                ? 'bg-clinic-teal-900 border-clinic-teal-800 text-white' 
                : 'bg-red-50 border-red-200 text-red-800'
            }`}
          >
            {notification.type === 'success' ? (
              <CheckCircle className="w-6 h-6 text-clinic-gold flex-shrink-0" />
            ) : (
              <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
            )}
            <p className="text-sm font-medium flex-1">{notification.message}</p>
            <button 
              onClick={() => setNotification(null)} 
              className="ml-2 p-1 opacity-70 hover:opacity-100 transition-opacity rounded-full hover:bg-black/10"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </>
  );
}
