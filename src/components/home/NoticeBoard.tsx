import { FC } from 'react';
import { motion } from 'framer-motion';

export const NoticeBoard: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-2 max-w-6xl mx-auto"
    >
      <div className="bg-gradient-to-r from-[#541D67] to-[#B62D71] p-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
          Special Announcement
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 p-6">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://ik.imagekit.io/sackoba/t_shirt_final_promotion_compressed.jpg"
              alt="Antonian Custom Embroidered Polo Shirts"
              className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center p-4"
        >
          <h3 className="text-2xl font-bold text-[#541D67] mb-4">
            ANTONIAN CUSTOM EMBROIDERED POLO SHIRTS
          </h3>
          
          <div className="space-y-4 text-gray-700">
            <p className="font-semibold text-lg">Available in:</p>
            <div className="ml-4">
              <p>🇶🇦 Qatar:</p>
              <ul className="list-disc ml-8 space-y-1">
                <li>Navy Blue (L & XL)</li>
                <li>Contact:</li>
                <ul className="ml-4 space-y-1">
                  <li>Riyas: +974 66730575</li>
                  <li>Shafraz: +974 55467643</li>
                  <li>Vignesh: +974 70072629</li>
                  <li>Email: sackobaqatar@gmail.com</li>
                </ul>
              </ul>
            </div>
            
            <div className="ml-4 mt-2">
              <p>🇱🇰 Sri Lanka:</p>
              <ul className="list-disc ml-8">
                <li>Available at College Souvenir Shop</li>
                <li>Navy Blue and Bright White (S/M/L & XL)</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
