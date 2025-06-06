import { FC } from 'react';
import { Link } from 'react-router-dom';

/**
 * HistorySection component - Displays SACKOBA Qatar's history with innovative design
 * Features a modern, compact horizontal timeline with glassmorphism styling
 */
export const HistorySection: FC = () => {
    const timelineEvents = [
        {
            year: '2009',
            title: 'Foundation',
            description: 'SACKOBA Qatar was born from the vision of 8 Old Antonians',
            details: 'Founded by Aloy Cooray and Manoharan Arasu on September 28th, 2009',
            icon: '🏛️',
            color: 'from-amber-400 to-orange-500'
        },
        {
            year: '2010',
            title: 'First Reunion',
            description: 'Historic boat trip gathering 25 Antonians',
            details: 'First executive committee elected, establishing governance structure',
            icon: '⛵',
            color: 'from-blue-400 to-cyan-500'
        },
        {
            year: '2018',
            title: 'Digital Evolution',
            description: 'Launch of sackobaqatar.org with modern design',
            details: 'Mobile-optimized platform connecting global Antonian community',
            icon: '🌐',
            color: 'from-purple-400 to-pink-500'
        },
        {
            year: '2019',
            title: 'Decade Celebration',
            description: '10 Years of Excellence milestone achieved',
            details: 'Community recognition and special commemorative events',
            icon: '🎉',
            color: 'from-green-400 to-emerald-500'
        }
    ];

    return (
        <section className="relative w-full py-16 px-2 md:px-8 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
            <div className="max-w-4xl mx-auto rounded-3xl bg-white/60 backdrop-blur-md shadow-xl p-6 md:p-10">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#541D67] via-[#B62D71] to-purple-600 bg-clip-text text-transparent mb-2">
                        SACKOBA Qatar History
                    </h2>
                    <p className="text-md md:text-lg text-gray-700">
                        From vision to legacy: Key milestones in a single glance.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-2">
                    {timelineEvents.map((event, idx) => (
                        <div key={event.year} className="flex flex-col items-center flex-1 group">
                            <div className={`w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br ${event.color} text-2xl shadow-lg mb-2 group-hover:scale-110 transition-transform`}>
                                {event.icon}
                            </div>
                            <div className="font-bold text-lg text-[#541D67]">{event.year}</div>
                            <div className="text-sm text-gray-700 text-center font-semibold">{event.title}</div>
                            <div className="text-xs text-gray-500 mt-1 text-center hidden md:block">
                                {event.description}
                            </div>
                            <div className="hidden group-hover:block absolute mt-20 md:mt-24 z-20 w-64 p-3 bg-white/90 shadow-lg rounded-xl border border-[#B62D71]/10 text-xs text-gray-700">
                                {event.details}
                            </div>
                            {idx !== timelineEvents.length - 1 && (
                                <div className="hidden md:block absolute left-full top-1/2 w-10 h-1 -translate-y-1/2 bg-gradient-to-r from-[#541D67] to-[#B62D71] opacity-40"></div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-10 flex flex-col items-center">
                    <Link to="/contact" className="bg-gradient-to-r from-[#541D67] to-[#B62D71] text-white px-8 py-3 rounded-2xl font-semibold text-lg shadow-lg hover:scale-105 transition-transform">
                        Join Our Community
                    </Link>
                    <p className="text-xs text-gray-500 mt-2 max-w-xs text-center">
                        Be part of the next chapter in SACKOBA Qatar's story.
                    </p>
                </div>
            </div>
        </section>
    );
};