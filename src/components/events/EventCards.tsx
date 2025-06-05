import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, MapPinIcon, PhotoIcon } from '@heroicons/react/24/outline';

interface EventCard {
  id: string;
  name: string;
  year: string;
  category: 'Sports' | 'Cultural' | 'Religious' | 'Social' | 'Academic';
  previewImage: string;
  folderPath: string;
  location: string;
}

interface EventCardsProps {
  onEventClick?: (eventId: string, year: string) => void;
}

const eventCardsData: EventCard[] = [
  {
    "id": "agm_2023_sackoba_qatar",
    "name": "AGM 2023 SACKOBA Qatar",
    "year": "2023",
    "category": "Academic",
    "previewImage": "/images/event_images/2023/AGM_2023_SACKOBA_Qatar/AGM_College_Day_Attendees_at_Tables.jpg",
    "folderPath": "AGM_2023_SACKOBA_Qatar",
    "location": "Doha, Qatar"
  },
  {
    "id": "sackobaq_college_day_celebrations",
    "name": "SACKOBAQ College Day Celebrations",
    "year": "2023",
    "category": "Academic",
    "previewImage": "/images/event_images/2023/SACKOBAQ_College_Day_Celebrations/Audience_at_College_Day_Event.jpg",
    "folderPath": "SACKOBAQ_College_Day_Celebrations",
    "location": "Doha, Qatar"
  },
  {
    "id": "sinhala___tamil_new_year_and_iftar_celebration_2023_sackoba_qatar",
    "name": "Sinhala & Tamil New Year And Iftar Celebration 2023 SACKOBA Qatar",
    "year": "2023",
    "category": "Cultural",
    "previewImage": "/images/event_images/2023/Sinhala_&_Tamil_New_Year_and_Iftar_Celebration_2023_SACKOBA_Qatar/Aluth_Avurudu_Celebration_Group_Photo.jpg",
    "folderPath": "Sinhala_&_Tamil_New_Year_and_Iftar_Celebration_2023_SACKOBA_Qatar",
    "location": "Doha, Qatar"
  },
  {
    "id": "aluth_avurudu_iftar_celebration_2022",
    "name": "Aluth Avurudu Iftar Celebration 2022",
    "year": "2022",
    "category": "Cultural",
    "previewImage": "/images/event_images/2022/Aluth_Avurudu_Iftar_Celebration_2022/Aluth_Avurudu_Celebration_Group_Photo.jpg",
    "folderPath": "Aluth_Avurudu_Iftar_Celebration_2022",
    "location": "Doha, Qatar"
  },
  {
    "id": "college_day_and_feast_of_st_anthony_of_padua_2022",
    "name": "College Day And Feast Of St Anthony Of Padua 2022",
    "year": "2022",
    "category": "Religious",
    "previewImage": "/images/event_images/2022/College_Day_and_Feast_of_St_Anthony_of_Padua_2022/College_Day_Celebration_Group_Photo.jpg",
    "folderPath": "College_Day_and_Feast_of_St_Anthony_of_Padua_2022",
    "location": "Doha, Qatar"
  },
  {
    "id": "family_activity_day_2020",
    "name": "Family Activity Day 2020",
    "year": "2020",
    "category": "Social",
    "previewImage": "/images/event_images/2020/Family_Activity_Day_2020/Family_Activity_Day_Group_Photo.jpg",
    "folderPath": "Family_Activity_Day_2020",
    "location": "Doha, Qatar"
  },
  {
    "id": "old_anandians_bowling_tournament",
    "name": "Old Anandians Bowling Tournament",
    "year": "2020",
    "category": "Sports",
    "previewImage": "/images/event_images/2020/Old_Anandians_Bowling_Tournament/Bowling_Tournament_Group_Photo.jpg",
    "folderPath": "Old_Anandians_Bowling_Tournament",
    "location": "Doha, Qatar"
  },
  {
    "id": "rayyan_talons_smash_2018",
    "name": "Rayyan Talons Smash 2018",
    "year": "2018",
    "category": "Sports",
    "previewImage": "/images/event_images/2018/Rayyan_Talons_Smash_2018/Rayyan_Talons_Smash_Group_Photo.jpg",
    "folderPath": "Rayyan_Talons_Smash_2018",
    "location": "Doha, Qatar"
  },
  {
    "id": "awurudu_udawa_2017",
    "name": "Awurudu Udawa 2017",
    "year": "2017",
    "category": "Cultural",
    "previewImage": "/images/event_images/2017/Awurudu_Udawa_2017/Awurudu_Udawa_Group_Photo.jpg",
    "folderPath": "Awurudu_Udawa_2017",
    "location": "Doha, Qatar"
  },
  {
    "id": "college_day___agm___annual_iftar__2017",
    "name": "College Day   AGM   Annual Iftar  2017",
    "year": "2017",
    "category": "Academic",
    "previewImage": "/images/event_images/2017/College_Day_-_AGM___Annual_Iftar_-2017/College_Day_AGM_Iftar_Group_Photo.jpg",
    "folderPath": "College_Day_-_AGM___Annual_Iftar_-2017",
    "location": "Doha, Qatar"
  },
  {
    "id": "dark_horse_cricket_tournament___2017_champions",
    "name": "Dark Horse Cricket Tournament   2017 Champions",
    "year": "2017",
    "category": "Sports",
    "previewImage": "/images/event_images/2017/Dark_horse_Cricket_Tournament_-_2017_Champions/Dark_Horse_Cricket_Champions_Group_Photo.jpg",
    "folderPath": "Dark_horse_Cricket_Tournament_-_2017_Champions",
    "location": "Doha, Qatar"
  },
  {
    "id": "day_out_on_a_boat_2017",
    "name": "Day Out On A Boat 2017",
    "year": "2017",
    "category": "Social",
    "previewImage": "/images/event_images/2017/Day_Out_on_a_Boat_2017/Day_Out_Boat_Group_Photo.jpg",
    "folderPath": "Day_Out_on_a_Boat_2017",
    "location": "Doha, Qatar"
  },
  {
    "id": "feast_of_st_anthony_2017",
    "name": "Feast Of St Anthony 2017",
    "year": "2017",
    "category": "Religious",
    "previewImage": "/images/event_images/2017/Feast_of_St.Anthony_2017/Feast_St_Anthony_Group_Photo.jpg",
    "folderPath": "Feast_of_St.Anthony_2017",
    "location": "Doha, Qatar"
  },
  {
    "id": "lions_srilankan_schools_touch_rugby_7s___2017",
    "name": "Lions Srilankan Schools Touch Rugby 7s   2017",
    "year": "2017",
    "category": "Sports",
    "previewImage": "/images/event_images/2017/Lions_Srilankan_Schools_Touch_Rugby_7s_-_2017/Lions_Rugby_7s_Group_Photo.jpg",
    "folderPath": "Lions_Srilankan_Schools_Touch_Rugby_7s_-_2017",
    "location": "Doha, Qatar"
  },
  {
    "id": "silent_night_2017",
    "name": "Silent Night 2017",
    "year": "2017",
    "category": "Cultural",
    "previewImage": "/images/event_images/2017/Silent_Night_2017/Silent_Night_Group_Photo.jpg",
    "folderPath": "Silent_Night_2017",
    "location": "Doha, Qatar"
  },
  {
    "id": "antonian_festive_celebration___2016",
    "name": "Antonian Festive Celebration   2016",
    "year": "2016",
    "category": "Cultural",
    "previewImage": "/images/event_images/2016/Antonian_Festive_Celebration_-_2016/Antonian_Festive_Group_Photo.jpg",
    "folderPath": "Antonian_Festive_Celebration_-_2016",
    "location": "Doha, Qatar"
  },
  {
    "id": "green_touch_rugby_7s_and_champions_dinner___2016",
    "name": "Green Touch Rugby 7s And Champions Dinner   2016",
    "year": "2016",
    "category": "Sports",
    "previewImage": "/images/event_images/2016/Green_Touch_Rugby_7s_and_Champions_Dinner_-_2016/Green_Touch_Rugby_Group_Photo.jpg",
    "folderPath": "Green_Touch_Rugby_7s_and_Champions_Dinner_-_2016",
    "location": "Doha, Qatar"
  },
  {
    "id": "lions_srilankan_cricket_tournament___2016",
    "name": "Lions Srilankan Cricket Tournament   2016",
    "year": "2016",
    "category": "Sports",
    "previewImage": "/images/event_images/2016/Lions_Srilankan_Cricket_Tournament_-_2016/Lions_Cricket_Tournament_Group_Photo.jpg",
    "folderPath": "Lions_Srilankan_Cricket_Tournament_-_2016",
    "location": "Doha, Qatar"
  },
  {
    "id": "sackoba_q_big_day_out_2016",
    "name": "SACKOBA Q Big Day Out 2016",
    "year": "2016",
    "category": "Social",
    "previewImage": "/images/event_images/2016/SACKOBA_Q_Big_Day_Out_2016/SACKOBA_Big_Day_Out_Group_Photo.jpg",
    "folderPath": "SACKOBA_Q_Big_Day_Out_2016",
    "location": "Doha, Qatar"
  },
  {
    "id": "feast_of_st_anthony_of_padua_2015",
    "name": "Feast Of St Anthony Of Padua 2015",
    "year": "2015",
    "category": "Religious",
    "previewImage": "/images/event_images/2015/Feast_of_St.Anthony_of_Padua_2015/Church_Group_Photo_1024_X_680.JPG",
    "folderPath": "Feast_of_St.Anthony_of_Padua_2015",
    "location": "Doha, Qatar"
  },
  {
    "id": "iftar_2015",
    "name": "IFTAR 2015",
    "year": "2015",
    "category": "Religious",
    "previewImage": "/images/event_images/2015/IFTAR_2015/Crowd_of_people_receiving_handouts_indoors_4928_X_3264.JPG",
    "folderPath": "IFTAR_2015",
    "location": "Doha, Qatar"
  },
  {
    "id": "lions_cricket_7s_2015",
    "name": "Lions Cricket 7s 2015",
    "year": "2015",
    "category": "Sports",
    "previewImage": "/images/event_images/2015/Lions_Cricket_7s_2015/DSC_0455.JPG",
    "folderPath": "Lions_Cricket_7s_2015",
    "location": "Doha, Qatar"
  },
  {
    "id": "lions_rugby_7s_2015",
    "name": "Lions Rugby 7s 2015",
    "year": "2015",
    "category": "Sports",
    "previewImage": "/images/event_images/2015/Lions_Rugby_7s_2015/Blurred_People_Walking_At_Night_4928_X_3264.JPG",
    "folderPath": "Lions_Rugby_7s_2015",
    "location": "Doha, Qatar"
  },
  {
    "id": "special_general_meeting_2015",
    "name": "Special General Meeting 2015",
    "year": "2015",
    "category": "Academic",
    "previewImage": "/images/event_images/2015/Special_General_Meeting_2015/Four_men_at_buffet_table_2048_X_1356.jpg",
    "folderPath": "Special_General_Meeting_2015",
    "location": "Doha, Qatar"
  },
  {
    "id": "trinity_beach_carnival_2013",
    "name": "Trinity Beach Carnival 2013",
    "year": "2013",
    "category": "Cultural",
    "previewImage": "/images/event_images/2013/Trinity_Beach_Carnival_2013/24.JPG",
    "folderPath": "Trinity_Beach_Carnival_2013",
    "location": "Doha, Qatar"
  },
  {
    "id": "boat_2012",
    "name": "Boat 2012",
    "year": "2012",
    "category": "Social",
    "previewImage": "/images/event_images/2012/Boat_2012/Boat_party_with_guitar_and_Qatar_flag_600_X_450.jpg",
    "folderPath": "Boat_2012",
    "location": "Doha, Qatar"
  },
  {
    "id": "college_day_celebration_2012",
    "name": "COLLEGE DAY CELEBRATION 2012",
    "year": "2012",
    "category": "Academic",
    "previewImage": "/images/event_images/2012/COLLEGE_DAY_CELEBRATION_2012/Group_eating_at_a_gathering_600_X_450.jpg",
    "folderPath": "COLLEGE_DAY_CELEBRATION_2012",
    "location": "Doha, Qatar"
  },
  {
    "id": "fuwairit_annual_beach_trip_2012",
    "name": "Fuwairit Annual Beach Trip 2012",
    "year": "2012",
    "category": "Social",
    "previewImage": "/images/event_images/2012/Fuwairit_Annual_Beach_Trip_2012/Beach_Barbecue_with_Friends_600_X_400.jpg",
    "folderPath": "Fuwairit_Annual_Beach_Trip_2012",
    "location": "Doha, Qatar"
  },
  {
    "id": "lions_rugby_7s_2012",
    "name": "LIONS RUGBY 7S 2012",
    "year": "2012",
    "category": "Sports",
    "previewImage": "/images/event_images/2012/LIONS_RUGBY_7S_2012/Crowd_of_People_at_Sporting_Event_450_X_600.jpg",
    "folderPath": "LIONS_RUGBY_7S_2012",
    "location": "Doha, Qatar"
  },
  {
    "id": "ozee_7s_2012",
    "name": "OZEE 7S 2012",
    "year": "2012",
    "category": "Sports",
    "previewImage": "/images/event_images/2012/OZEE_7S_2012/Car_with_flag_on_roof__Qatar_license_plate_600_X_400.jpg",
    "folderPath": "OZEE_7S_2012",
    "location": "Doha, Qatar"
  },
  {
    "id": "special_meetings",
    "name": "SPECIAL MEETINGS",
    "year": "2012",
    "category": "Academic",
    "previewImage": "/images/event_images/2012/SPECIAL_MEETINGS/Businessmen_Meeting_in_Formal_Setting_600_X_450.jpg",
    "folderPath": "SPECIAL_MEETINGS",
    "location": "Doha, Qatar"
  }
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Sports':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'Cultural':
      return 'bg-purple-100 text-purple-800 border-purple-200';
    case 'Religious':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'Social':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'Academic':
      return 'bg-indigo-100 text-indigo-800 border-indigo-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export const EventCards: React.FC<EventCardsProps> = ({ onEventClick }) => {
  const handleCardClick = (eventCard: EventCard) => {
    if (onEventClick) {
      onEventClick(eventCard.id, eventCard.year);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Events</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore our rich collection of events spanning over a decade. From sports tournaments to cultural celebrations,
          religious gatherings to academic meetings - discover the vibrant community life of SACKOBA Qatar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {eventCardsData.map((eventCard, index) => (
          <motion.div
            key={eventCard.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
            onClick={() => handleCardClick(eventCard)}
          >
            {/* Event Image */}
            <div className="relative h-48 bg-gray-200 overflow-hidden">
              <img
                src={eventCard.previewImage}
                alt={eventCard.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-gray-100">
                        <div class="text-center">
                          <svg class="h-12 w-12 text-gray-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <p class="text-sm text-gray-500">Image not available</p>
                        </div>
                      </div>
                    `;
                  }
                }}
              />

              {/* Year Badge */}
              <div className="absolute top-3 left-3">
                <span className="bg-black bg-opacity-75 text-white px-2 py-1 rounded-md text-sm font-medium">
                  {eventCard.year}
                </span>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 right-3">
                <span className={`px-2 py-1 rounded-md text-xs font-medium border ${getCategoryColor(eventCard.category)}`}>
                  {eventCard.category}
                </span>
              </div>
            </div>

            {/* Event Details */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors duration-200">
                {eventCard.name}
              </h3>

              <div className="flex items-center text-sm text-gray-500 mb-2">
                <CalendarIcon className="h-4 w-4 mr-1" />
                <span>{eventCard.year}</span>
              </div>

              <div className="flex items-center text-sm text-gray-500 mb-3">
                <MapPinIcon className="h-4 w-4 mr-1" />
                <span>{eventCard.location}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <PhotoIcon className="h-4 w-4 mr-1" />
                  <span>View Gallery</span>
                </div>

                <div className="text-purple-600 text-sm font-medium group-hover:text-purple-700">
                  Explore →
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-gray-600">
          Total Events: <span className="font-semibold text-purple-600">{eventCardsData.length}</span> |
          Years Covered: <span className="font-semibold text-purple-600">
            {Math.min(...eventCardsData.map(e => parseInt(e.year)))} - {Math.max(...eventCardsData.map(e => parseInt(e.year)))}
          </span>
        </p>
      </div>
    </div>
  );
};

export default EventCards;