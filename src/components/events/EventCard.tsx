import { FC } from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, MapPinIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { EventCardProps } from '@/types/components/events';

export const EventCard: FC<EventCardProps> = ({
  title,
  date,
  location,
  attendees,
  imageUrl,
  category,
  description,
  onClick,
}) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      {/* Event Image */}
      <div className="relative w-full h-64 bg-[#F8F6F9] overflow-hidden">
        {imageUrl ? (
          <div className="absolute inset-0 w-full h-full">
            <img
              src={imageUrl}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover object-center scale-110 transform group-hover:scale-125 transition-transform duration-300"
              style={{ objectPosition: 'center center' }}
            />
          </div>
        ) : (
          <div className="flex items-center justify-center h-full bg-[#F8F6F9]">
            <CalendarIcon className="h-12 w-12 text-[#541D67]" />
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium 
                         bg-white/90 text-[#B62D71] border border-[#B62D71]/20
                         shadow-sm backdrop-blur-sm">
            {category}
          </span>
        </div>
      </div>

      {/* Event Details */}
      <div className="p-6">
        <h3 className="text-xl font-display font-semibold text-[#541D67] mb-2 
                     group-hover:text-[#B62D71] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-[#5B4886] text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="space-y-2">
          <div className="flex items-center text-sm text-[#9A78AB]">
            <CalendarIcon className="h-4 w-4 mr-2 text-[#B62D71]" />
            {date}
          </div>
          <div className="flex items-center text-sm text-[#9A78AB]">
            <MapPinIcon className="h-4 w-4 mr-2 text-[#B62D71]" />
            {location}
          </div>
          <div className="flex items-center text-sm text-[#9A78AB]">
            <UserGroupIcon className="h-4 w-4 mr-2 text-[#B62D71]" />
            {attendees} attending
          </div>
        </div>
      </div>

      {/* Hover Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#541D67]/50 via-transparent to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Card Border Hover Effect */}
      <div className="absolute inset-0 border border-[#B1B3CE]/20 group-hover:border-[#9A78AB]/30 
                    rounded-xl transition-colors duration-300" />
    </motion.div>
  );
};
