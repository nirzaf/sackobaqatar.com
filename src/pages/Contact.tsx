import { FC } from 'react';
import { ContactForm, ContactInfo, ContactFormData } from '../components/contact';

export const Contact: FC = () => {
  const handleSubmit = (data: ContactFormData) => {
    // Handle form submission
    console.log('Form submitted:', data);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Have questions about SACKOBA Qatar? We're here to help. Send us a message and we'll respond as soon as possible.
          </p>
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
