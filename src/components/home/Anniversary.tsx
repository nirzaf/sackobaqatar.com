import { useState } from 'react';
import { motion } from 'framer-motion';

interface Event {
  date: string
  day: string
  title: string
  description?: string
  category?: 'celebration' | 'meeting' | 'activity' | 'religious'
  icon?: string
}

const events: Event[] = [
  {
    date: "Feb",
    day: "14",
    title: "Activity Day",
    description: "Fun-filled activities and team building events for all members",
    category: "activity",
    icon: "🎯"
  },
  {
    date: "Mar",
    day: "07",
    title: "Iftar Celebration",
    description: "Breaking fast together during the holy month of Ramadan",
    category: "religious",
    icon: "🌙"
  },
  {
    date: "Apr",
    day: "18",
    title: "Awrudu Celebration",
    description: "Traditional Sri Lankan New Year festivities",
    category: "celebration",
    icon: "🎊"
  },
  {
    date: "Jun",
    day: "13",
    title: "College Day Holy Mass",
    description: "Annual thanksgiving mass celebrating our alma mater",
    category: "religious",
    icon: "⛪"
  },
  {
    date: "Jun",
    day: "20",
    title: "AGM & 15th Anniversary",
    description: "Annual General Meeting and milestone celebration",
    category: "meeting",
    icon: "🏆"
  },
  {
    date: "Oct",
    day: "31",
    title: "Annual Outing",
    description: "Family-friendly outdoor activities and bonding",
    category: "activity",
    icon: "🏖️"
  },
  {
    date: "Dec",
    day: "05",
    title: "Christmas Dinner",
    description: "Festive dinner celebration with families",
    category: "celebration",
    icon: "🎄"
  },
]

const EventCalendar = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);

  const getCategoryColor = (category?: string) => {
    switch (category) {
      case 'celebration': return 'from-primary-600 to-primary-700';
      case 'meeting': return 'from-blue-600 to-blue-700';
      case 'activity': return 'from-green-600 to-green-700';
      case 'religious': return 'from-purple-600 to-purple-700';
      default: return 'from-gray-600 to-gray-700';
    }
  };

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-white shadow-2xl border border-gray-100"
        >
          {/* Enhanced Background Patterns */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50" />

            {/* Animated Geometric Shapes */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 w-40 h-40 bg-primary-100/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-16 -left-16 w-32 h-32 bg-blue-100/30 rounded-full"
            />

            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 w-2 h-2 bg-primary-300 rounded-full animate-pulse" />
            <div className="absolute top-20 right-32 w-1 h-1 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-primary-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          </div>

          {/* Content Container */}
          <div className="relative p-6 sm:p-8 lg:p-12">
            {/* Enhanced Header Section */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              {/* Logos and Title Container */}
              <div className="mb-8 flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* 15th Anniversary Logo */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="relative h-[120px] w-[160px] lg:h-[150px] lg:w-[200px] flex-shrink-0"
                >
                  <img
                    src="https://res.cloudinary.com/ddpxtaue7/image/upload/v1735207379/SACKOBA__15_Annivesary_150_g4mmnl.png"
                    alt="SACKOBA 15 Years Anniversary"
                    className="object-contain hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>

                {/* Main Title Group */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center flex-1"
                >
                  <h1 className="text-2xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary-700 to-primary-600 bg-clip-text text-transparent mb-2">
                    SACKOBA - QATAR
                  </h1>
                  <h2 className="text-lg lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                    15 YEARS ANNIVERSARY
                  </h2>
                </motion.div>

                {/* LUX DE COELO Logo */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="relative h-[120px] w-[120px] lg:h-[150px] lg:w-[130px] flex-shrink-0"
                >
                  <img
                    src="https://ik.imagekit.io/sackoba/logos/sack_badge_color_512X512-270x270.png?updatedAt=1735203751175"
                    alt="LUX DE COELO"
                    className="object-contain hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              </div>

              {/* Event Calendar Title */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-medium tracking-[0.2em] text-primary-600 mb-4">
                  EVENT CALENDAR
                </h3>
                <div className="text-4xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-blue-700 to-blue-600 bg-clip-text text-transparent">
                  2025
                </div>
                <div className="mt-4 w-24 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto rounded-full" />
              </motion.div>
            </motion.div>

            {/* Enhanced Events List */}
            <div className="grid gap-4 lg:gap-6">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                  onMouseEnter={() => setHoveredEvent(index)}
                  onMouseLeave={() => setHoveredEvent(null)}
                  onClick={() => setSelectedEvent(selectedEvent === index ? null : index)}
                >
                  <div className={`relative flex items-center gap-4 lg:gap-6 p-4 lg:p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer
                    ${selectedEvent === index
                      ? 'border-primary-300 bg-primary-50 shadow-lg transform scale-[1.02]'
                      : hoveredEvent === index
                        ? 'border-primary-200 bg-primary-25 shadow-md transform scale-[1.01]'
                        : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                    }`}
                  >
                    {/* Enhanced Date Box */}
                    <div className={`flex min-w-[120px] lg:min-w-[140px] items-center justify-center rounded-xl p-4 text-white shadow-lg transition-all duration-300 bg-gradient-to-r ${getCategoryColor(event.category)}
                      ${hoveredEvent === index ? 'transform scale-105' : ''}`}
                    >
                      <div className="text-center">
                        <div className="text-sm lg:text-base font-medium opacity-90">{event.date}</div>
                        <div className="text-2xl lg:text-3xl font-bold">{event.day}</div>
                      </div>
                    </div>

                    {/* Event Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        {event.icon && (
                          <span className="text-2xl lg:text-3xl">{event.icon}</span>
                        )}
                        <h4 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 group-hover:text-primary-700 transition-colors">
                          {event.title}
                        </h4>
                      </div>

                      {/* Description - Always visible on larger screens, toggleable on mobile */}
                      <div className={`text-gray-600 text-sm lg:text-base transition-all duration-300 overflow-hidden
                        ${selectedEvent === index ? 'max-h-20 opacity-100' : 'lg:max-h-20 lg:opacity-100 max-h-0 opacity-0'}`}
                      >
                        {event.description}
                      </div>
                    </div>

                    {/* Interactive Arrow */}
                    <div className={`flex-shrink-0 transition-all duration-300 ${hoveredEvent === index ? 'transform translate-x-2' : ''}`}>
                      <svg className="w-6 h-6 lg:w-8 lg:h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>

                    {/* Mobile Expand Indicator */}
                    <div className="lg:hidden absolute top-2 right-2">
                      <svg className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${selectedEvent === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-gray-600 mb-6 text-lg">Join us for these exciting events throughout the year!</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>Learn More About Events</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const Anniversary = () => {
  return (
    <div>
      <EventCalendar />
    </div>
  )
}

export default Anniversary;
