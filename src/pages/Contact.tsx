import { FC } from 'react';
import { ContactForm, ContactInfo, ContactFormData } from '../components/contact';
import { motion } from 'framer-motion';

export const Contact: FC = () => {
  const handleSubmit = (data: ContactFormData) => {
    // Handle form submission
    console.log('Form submitted:', data);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-500"
          >
            Have questions about SACKOBA Qatar? We're here to help. Send us a message and we'll respond as soon as possible.
          </motion.p>
        </div>

        {/* Contact Grid */}
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
