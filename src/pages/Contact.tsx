import { FC } from 'react';
import { ContactForm, ContactInfo, ContactFormData } from '../components/contact';
import { motion } from 'framer-motion';
import { PageMeta } from '../components/shared/PageMeta';

export const Contact: FC = () => {
  const handleSubmit = async (data: ContactFormData) => {
    const resp = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    const json = await resp.json()
    // basic inline feedback could be added here if needed
    if (!resp.ok) {
      console.error('Contact submit error:', json)
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageMeta
        title="Contact SACKOBA Qatar | Get in Touch"
        description="Questions about membership, events, or scholarships? Contact SACKOBA Qatar and we’ll get back to you."
        canonical="https://sackobaqatar.com/contact"
        ogImage="https://sackobaqatar.com/images/og/contact.jpg"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          'url': 'https://sackobaqatar.com/contact',
          'mainEntity': {
            '@type': 'ContactPoint',
            'contactType': 'customer support',
            'email': 'info@sackobaqatar.com'
          }
        }}
      />
      {/* Hero Section */}
      <section className="relative h-[34vh] bg-gradient-to-r from-[#541D67] to-[#B62D71]">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white z-10">
            <motion.h1 
              className="text-4xl md:text-3xl text-white font-bold mb-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Get in Touch
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Have questions about SACKOBA Qatar? We're here to help.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-10">
            <h3 className="text-lg font-medium text-gray-900 mb-6">
              Send us a message
            </h3>
            <ContactForm onSubmit={handleSubmit} />
          </div>

          {/* Contact Information */}
          <ContactInfo
            title="Get in touch"
            description="We'd love to hear from you. Whether you have a question about membership, events, or anything else, our team is ready to answer all your questions."
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
