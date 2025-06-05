interface EventImage {
  url: string;
  title: string;
  filename: string;
}

interface EventCategory {
  id: string;
  name: string;
  year: string;
  images: EventImage[];
  folderPath: string;
}

interface YearGroup {
  year: string;
  events: EventCategory[];
}

// Helper function to format event name from folder name
export function formatEventName(folderName: string): string {
  return folderName
    .replace(/_/g, ' ')
    .replace(/\s+\d{4}$/, '') // Remove year from end
    .replace(/\s+-\s+\d{4}/, '') // Remove year with dash
    .trim();
}

// Helper function to extract year from folder name
export function extractYear(folderName: string): string {
  const match = folderName.match(/\d{4}/);
  return match ? match[0] : '';
}

// Helper function to generate clean filename for title
export function generateImageTitle(filename: string): string {
  return filename
    .replace(/\.(jpg|jpeg|png|gif|webp)$/i, '')
    .replace(/_/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Main function to organize event images by year and category
export function organizeEventImages(): YearGroup[] {
  const eventStructure: YearGroup[] = [
    {
      year: '2023',
      events: [
        {
          id: 'agm_2023_sackoba_qatar',
          name: 'AGM 2023 SACKOBA Qatar',
          year: '2023',
          folderPath: 'src/assets/images/event_images/2023/AGM_2023_SACKOBA_Qatar',
          images: [
            {
              url: '/src/assets/images/event_images/2023/AGM_2023_SACKOBA_Qatar/Old_Boys_Association_Group_Photo_Qatar_2023.jpg',
              title: 'Old Boys Association Group Photo Qatar 2023',
              filename: 'Old_Boys_Association_Group_Photo_Qatar_2023.jpg'
            },
            {
              url: '/src/assets/images/event_images/2023/AGM_2023_SACKOBA_Qatar/St_Anthony_s_College_flag_cake_AGM_2023.jpg',
              title: 'St Anthony\'s College Flag Cake AGM 2023',
              filename: 'St_Anthony_s_College_flag_cake_AGM_2023.jpg'
            },
            {
              url: '/src/assets/images/event_images/2023/AGM_2023_SACKOBA_Qatar/Sackoba_Qatar_Banner_St_Anthony_College.jpg',
              title: 'SACKOBA Qatar Banner St Anthony College',
              filename: 'Sackoba_Qatar_Banner_St_Anthony_College.jpg'
            },
            {
              url: '/src/assets/images/event_images/2023/AGM_2023_SACKOBA_Qatar/Group_of_Men_Cutting_Cake_at_Event.jpg',
              title: 'Group of Men Cutting Cake at Event',
              filename: 'Group_of_Men_Cutting_Cake_at_Event.jpg'
            },
            {
              url: '/src/assets/images/event_images/2023/AGM_2023_SACKOBA_Qatar/Speaker_at_St_Anthony_s_College_AGM_Event.jpg',
              title: 'Speaker at St Anthony\'s College AGM Event',
              filename: 'Speaker_at_St_Anthony_s_College_AGM_Event.jpg'
            }
          ]
        },
        {
          id: 'sackobaq_college_day_celebrations',
          name: 'SACKOBAQ College Day Celebrations',
          year: '2023',
          folderPath: 'src/assets/images/event_images/2023/SACKOBAQ_College_Day_Celebrations',
          images: [
            {
              url: '/src/assets/images/event_images/2023/SACKOBAQ_College_Day_Celebrations/College_Day_Group_Photo_2023.jpg',
              title: 'College Day Group Photo 2023',
              filename: 'College_Day_Group_Photo_2023.jpg'
            }
          ]
        },
        {
          id: 'sinhala_tamil_new_year_iftar_2023',
          name: 'Sinhala & Tamil New Year and Iftar Celebration 2023',
          year: '2023',
          folderPath: 'src/assets/images/event_images/2023/Sinhala_&_Tamil_New_Year_and_Iftar_Celebration_2023_SACKOBA_Qatar',
          images: [
            {
              url: '/src/assets/images/event_images/2023/Sinhala_&_Tamil_New_Year_and_Iftar_Celebration_2023_SACKOBA_Qatar/Blindfolded_Man_Smashing_Hanging_Pots_Game.jpg',
              title: 'Traditional New Year Games - Blindfolded Pot Breaking',
              filename: 'Blindfolded_Man_Smashing_Hanging_Pots_Game.jpg'
            }
          ]
        }
      ]
    },
    {
      year: '2022',
      events: [
        {
          id: 'aluth_avurudu_iftar_2022',
          name: 'Aluth Avurudu Iftar Celebration 2022',
          year: '2022',
          folderPath: 'src/assets/images/event_images/2022/Aluth_Avurudu_Iftar_Celebration_2022',
          images: [
            {
              url: '/src/assets/images/event_images/2022/Aluth_Avurudu_Iftar_Celebration_2022/Cultural_Performance.jpg',
              title: 'Cultural Performance',
              filename: 'Cultural_Performance.jpg'
            }
          ]
        },
        {
          id: 'college_day_feast_st_anthony_2022',
          name: 'College Day and Feast of St Anthony of Padua 2022',
          year: '2022',
          folderPath: 'src/assets/images/event_images/2022/College_Day_and_Feast_of_St_Anthony_of_Padua_2022',
          images: [
            {
              url: '/src/assets/images/event_images/2022/College_Day_and_Feast_of_St_Anthony_of_Padua_2022/WhatsApp Image 2022-06-10 at 10.51.19 AM.jpeg',
              title: 'College Day Celebration',
              filename: 'WhatsApp Image 2022-06-10 at 10.51.19 AM.jpeg'
            },
            {
              url: '/src/assets/images/event_images/2022/College_Day_and_Feast_of_St_Anthony_of_Padua_2022/WhatsApp Image 2022-06-10 at 10.51.23 AM.jpeg',
              title: 'College Day Event',
              filename: 'WhatsApp Image 2022-06-10 at 10.51.23 AM.jpeg'
            },
            {
              url: '/src/assets/images/event_images/2022/College_Day_and_Feast_of_St_Anthony_of_Padua_2022/WhatsApp Image 2022-06-11 at 7.18.05 AM.jpeg',
              title: 'Feast of St Anthony Celebration',
              filename: 'WhatsApp Image 2022-06-11 at 7.18.05 AM.jpeg'
            }
          ]
        }
      ]
    },
    {
      year: '2020',
      events: [
        {
          id: 'family_activity_day_2020',
          name: 'Family Activity Day 2020',
          year: '2020',
          folderPath: 'src/assets/images/event_images/2020/Family_Activity_Day_2020',
          images: [
            {
              url: '/src/assets/images/event_images/2020/Family_Activity_Day_2020/family_activity_1.jpg',
              title: 'Family Activity Day',
              filename: 'family_activity_1.jpg'
            }
          ]
        },
        {
          id: 'old_anandians_bowling_tournament',
          name: 'Old Anandians Bowling Tournament',
          year: '2020',
          folderPath: 'src/assets/images/event_images/2020/Old_Anandians_Bowling_Tournament',
          images: [
            {
              url: '/src/assets/images/event_images/2020/Old_Anandians_Bowling_Tournament/bowling_tournament_1.jpg',
              title: 'Bowling Tournament',
              filename: 'bowling_tournament_1.jpg'
            }
          ]
        }
      ]
    },
    {
      year: '2018',
      events: [
        {
          id: 'rayyan_talons_smash_2018',
          name: 'Rayyan Talons Smash 2018',
          year: '2018',
          folderPath: 'src/assets/images/event_images/2018/Rayyan_Talons_Smash_2018',
          images: [
            {
              url: '/src/assets/images/event_images/2018/Rayyan_Talons_Smash_2018/rayyan_talons_1.jpg',
              title: 'Rayyan Talons Smash Event',
              filename: 'rayyan_talons_1.jpg'
            }
          ]
        }
      ]
    },
    {
      year: '2017',
      events: [
        {
          id: 'awurudu_udawa_2017',
          name: 'Awurudu Udawa 2017',
          year: '2017',
          folderPath: 'src/assets/images/event_images/2017/Awurudu_Udawa_2017',
          images: [
            {
              url: '/src/assets/images/event_images/2017/Awurudu_Udawa_2017/awurudu_celebration_1.jpg',
              title: 'Awurudu Celebration',
              filename: 'awurudu_celebration_1.jpg'
            }
          ]
        },
        {
          id: 'college_day_agm_iftar_2017',
          name: 'College Day - AGM & Annual Iftar 2017',
          year: '2017',
          folderPath: 'src/assets/images/event_images/2017/College_Day_-_AGM___Annual_Iftar_-2017',
          images: [
            {
              url: '/src/assets/images/event_images/2017/College_Day_-_AGM___Annual_Iftar_-2017/college_day_agm_1.jpg',
              title: 'College Day AGM and Iftar',
              filename: 'college_day_agm_1.jpg'
            }
          ]
        },
        {
          id: 'feast_of_st_anthony_2017',
          name: 'Feast of St Anthony 2017',
          year: '2017',
          folderPath: 'src/assets/images/event_images/2017/Feast_of_St.Anthony_2017',
          images: [
            {
              url: '/src/assets/images/event_images/2017/Feast_of_St.Anthony_2017/feast_celebration_1.jpg',
              title: 'Feast of St Anthony Celebration',
              filename: 'feast_celebration_1.jpg'
            }
          ]
        },
        {
          id: 'silent_night_2017',
          name: 'Silent Night 2017',
          year: '2017',
          folderPath: 'src/assets/images/event_images/2017/Silent_Night_2017',
          images: [
            {
              url: '/src/assets/images/event_images/2017/Silent_Night_2017/silent_night_1.jpg',
              title: 'Silent Night Celebration',
              filename: 'silent_night_1.jpg'
            }
          ]
        }
      ]
    },
    {
      year: '2016',
      events: [
        {
          id: 'antonian_festive_celebration_2016',
          name: 'Antonian Festive Celebration 2016',
          year: '2016',
          folderPath: 'src/assets/images/event_images/2016/Antonian_Festive_Celebration_-_2016',
          images: [
            {
              url: '/src/assets/images/event_images/2016/Antonian_Festive_Celebration_-_2016/festive_celebration_1.jpg',
              title: 'Antonian Festive Celebration',
              filename: 'festive_celebration_1.jpg'
            }
          ]
        },
        {
          id: 'sackoba_q_big_day_out_2016',
          name: 'SACKOBA Q Big Day Out 2016',
          year: '2016',
          folderPath: 'src/assets/images/event_images/2016/SACKOBA_Q_Big_Day_Out_2016',
          images: [
            {
              url: '/src/assets/images/event_images/2016/SACKOBA_Q_Big_Day_Out_2016/big_day_out_1.jpg',
              title: 'SACKOBA Q Big Day Out',
              filename: 'big_day_out_1.jpg'
            }
          ]
        }
      ]
    },
    {
      year: '2015',
      events: [
        {
          id: 'feast_of_st_anthony_2015',
          name: 'Feast of St Anthony of Padua 2015',
          year: '2015',
          folderPath: 'src/assets/images/event_images/2015/Feast_of_St.Anthony_of_Padua_2015',
          images: [
            {
              url: '/src/assets/images/event_images/2015/Feast_of_St.Anthony_of_Padua_2015/feast_2015_1.jpg',
              title: 'Feast of St Anthony 2015',
              filename: 'feast_2015_1.jpg'
            }
          ]
        },
        {
          id: 'iftar_2015',
          name: 'IFTAR 2015',
          year: '2015',
          folderPath: 'src/assets/images/event_images/2015/IFTAR_2015',
          images: [
            {
              url: '/src/assets/images/event_images/2015/IFTAR_2015/iftar_2015_1.jpg',
              title: 'IFTAR Celebration 2015',
              filename: 'iftar_2015_1.jpg'
            }
          ]
        },
        {
          id: 'lions_cricket_7s_2015',
          name: 'Lions Cricket 7s 2015',
          year: '2015',
          folderPath: 'src/assets/images/event_images/2015/Lions_Cricket_7s_2015',
          images: [
            {
              url: '/src/assets/images/event_images/2015/Lions_Cricket_7s_2015/cricket_7s_2015_1.jpg',
              title: 'Lions Cricket 7s Tournament',
              filename: 'cricket_7s_2015_1.jpg'
            }
          ]
        }
      ]
    },
    {
      year: '2013',
      events: [
        {
          id: 'trinity_beach_carnival_2013',
          name: 'Trinity Beach Carnival 2013',
          year: '2013',
          folderPath: 'src/assets/images/event_images/2013/Trinity_Beach_Carnival_2013',
          images: [
            {
              url: '/src/assets/images/event_images/2013/Trinity_Beach_Carnival_2013/beach_carnival_1.jpg',
              title: 'Trinity Beach Carnival',
              filename: 'beach_carnival_1.jpg'
            }
          ]
        }
      ]
    },
    {
      year: '2012',
      events: [
        {
          id: 'boat_2012',
          name: 'Boat Trip 2012',
          year: '2012',
          folderPath: 'src/assets/images/event_images/2012/Boat_2012',
          images: [
            {
              url: '/src/assets/images/event_images/2012/Boat_2012/boat_trip_1.jpg',
              title: 'Boat Trip 2012',
              filename: 'boat_trip_1.jpg'
            }
          ]
        },
        {
          id: 'college_day_celebration_2012',
          name: 'College Day Celebration 2012',
          year: '2012',
          folderPath: 'src/assets/images/event_images/2012/COLLEGE_DAY_CELEBRATION_2012',
          images: [
            {
              url: '/src/assets/images/event_images/2012/COLLEGE_DAY_CELEBRATION_2012/college_day_2012_1.jpg',
              title: 'College Day Celebration 2012',
              filename: 'college_day_2012_1.jpg'
            }
          ]
        },
        {
          id: 'fuwairit_annual_beach_trip_2012',
          name: 'Fuwairit Annual Beach Trip 2012',
          year: '2012',
          folderPath: 'src/assets/images/event_images/2012/Fuwairit_Annual_Beach_Trip_2012',
          images: [
            {
              url: '/src/assets/images/event_images/2012/Fuwairit_Annual_Beach_Trip_2012/beach_trip_1.jpg',
              title: 'Fuwairit Beach Trip',
              filename: 'beach_trip_1.jpg'
            }
          ]
        },
        {
          id: 'lions_rugby_7s_2012',
          name: 'Lions Rugby 7s 2012',
          year: '2012',
          folderPath: 'src/assets/images/event_images/2012/LIONS_RUGBY_7S_2012',
          images: [
            {
              url: '/src/assets/images/event_images/2012/LIONS_RUGBY_7S_2012/rugby_7s_2012_1.jpg',
              title: 'Lions Rugby 7s Tournament',
              filename: 'rugby_7s_2012_1.jpg'
            }
          ]
        },
        {
          id: 'ozee_7s_2012',
          name: 'OZEE 7s 2012',
          year: '2012',
          folderPath: 'src/assets/images/event_images/2012/OZEE_7S_2012',
          images: [
            {
              url: '/src/assets/images/event_images/2012/OZEE_7S_2012/ozee_7s_1.jpg',
              title: 'OZEE 7s Tournament',
              filename: 'ozee_7s_1.jpg'
            }
          ]
        },
        {
          id: 'special_meetings_2012',
          name: 'Special Meetings 2012',
          year: '2012',
          folderPath: 'src/assets/images/event_images/2012/SPECIAL_MEETINGS',
          images: [
            {
              url: '/src/assets/images/event_images/2012/SPECIAL_MEETINGS/special_meeting_1.jpg',
              title: 'Special Meetings',
              filename: 'special_meeting_1.jpg'
            }
          ]
        }
      ]
    }
  ];

  return eventStructure;
}

// Function to get all images for a specific year
export function getImagesByYear(year: string): EventCategory[] {
  const allEvents = organizeEventImages();
  const yearGroup = allEvents.find(group => group.year === year);
  return yearGroup ? yearGroup.events : [];
}

// Function to get all available years
export function getAvailableYears(): string[] {
  const allEvents = organizeEventImages();
  return allEvents.map(group => group.year).sort((a, b) => parseInt(b) - parseInt(a));
}

export type { EventImage, EventCategory, YearGroup };
