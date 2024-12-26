interface Event {
  date: string
  day: string
  title: string
}

const events: Event[] = [
  { date: "Feb", day: "14", title: "Activity Day" },
  { date: "Mar", day: "07", title: "Iftar Celebration" },
  { date: "Apr", day: "18", title: "Awrudu Celebration" },
  { date: "Jun", day: "13", title: "College Day Holly Mass" },
  { date: "Jun", day: "20", title: "AGM & 15th year Celebration" },
  { date: "Oct", day: "31", title: "Annual Outing" },
  { date: "Dec", day: "05", title: "Christmas Dinner" },
]

const EventCalendar = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-12">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-lg bg-white p-4 shadow-xl sm:p-6 md:p-8">
        {/* Background Patterns */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Main diagonal background */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-white"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
            }}
          />
          
          {/* Dots Pattern */}
          <div className="absolute inset-0">
            {[...Array(200)].map((_, i) => (
              <div
                key={i}
                className="absolute h-0.5 w-0.5 rounded-full bg-gray-300"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 50}%`,
                  opacity: Math.random() * 0.5 + 0.1,
                }}
              />
            ))}
          </div>
          
          {/* Top-right curved shape */}
          <svg
            className="absolute -right-16 -top-16 h-64 w-64 text-gray-200"
            fill="currentColor"
            viewBox="0 0 100 100"
          >
            <path d="M100 0v100H0C0 44.8 44.8 0 100 0z" />
          </svg>
          
          {/* Bottom-right circle */}
          <div 
            className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white opacity-70"
          />
          
        </div>

        {/* Content Container */}
        <div className="relative">
          {/* Header Section */}
          <div className="mb-12 flex flex-col items-start">
            <div className="relative w-full">
              {/* Logos and Title Container */}
              <div className="mb-6 flex items-center justify-between relative">
                {/* 15th Anniversary Logo */}
                <div className="relative h-[150px] w-[200px] sm:h-[180px] sm:w-[240px] flex-shrink-0">
                  <img
                    src="https://res.cloudinary.com/ddpxtaue7/image/upload/v1735207379/SACKOBA__15_Annivesary_150_g4mmnl.png"
                    alt="SACKOBA 15 Years Anniversary"
                    className="object-contain object-left"
                  />
                </div>

                {/* Main Title Group */}
                <div className="absolute left-1/2 transform -translate-x-1/2 text-center px-4">
                  <h1 className="text-2xl font-extrabold tracking-tight text-purple-700 sm:text-3xl md:text-4xl">
                    SACKOBA - QATAR
                  </h1>
                  <h2 className="mt-1 text-xl font-bold text-blue-600 sm:text-2xl md:text-3xl">
                    15 YEARS ANNIVERSARY
                  </h2>
                </div>
                
                {/* LUX DE COELO Logo */}
                <div className="relative h-[100px] w-[100px] sm:h-[120px] sm:w-[120px] flex-shrink-0">
                  <img
                    src="https://ik.imagekit.io/sackoba/logos/sack_badge_color_512X512-270x270.png?updatedAt=1735203751175"
                    alt="LUX DE COELO"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Event Calendar Title */}
              <div className="mb-4 text-center">
                <h3 className="text-2xl font-medium tracking-[0.2em] text-purple-600 sm:text-3xl">
                  EVENT CALENDAR
                </h3>
                <div className="mt-2 text-5xl font-bold text-blue-700 sm:text-6xl">
                  2025
                </div>
              </div>
            </div>
          </div>

          {/* Events List */}
          <div className="space-y-3 sm:space-y-4">
            {events.map((event, index) => (
              <div 
                key={index}
                className="group relative flex items-center gap-2 sm:gap-4"
              >
                {/* Date Box */}
                <div className="flex min-w-[100px] items-center justify-center rounded-r-md bg-blue-800 p-2 text-white shadow-md transition-all group-hover:bg-blue-700 sm:min-w-[120px] sm:p-3">
                  <span className="text-base font-bold sm:text-lg md:text-xl">{event.date}</span>
                  <span className="ml-1 text-lg font-bold sm:ml-2 sm:text-xl md:text-2xl">{event.day}</span>
                </div>
                
                {/* Event Title */}
                <div className="flex-1 text-sm font-semibold text-blue-600 transition-all group-hover:translate-x-2 sm:text-base md:text-xl">
                  {event.title}
                </div>
                
                {/* Arrow */}
                <div className="absolute -left-2 h-0 w-0 border-b-[12px] border-r-[12px] border-t-[12px] border-b-transparent border-r-blue-800 border-t-transparent group-hover:border-r-blue-700 sm:border-b-[15px] sm:border-r-[15px] sm:border-t-[15px]"></div>
              </div>
            ))}
          </div>
        </div>
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
