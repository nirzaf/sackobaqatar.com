// Define interfaces locally to avoid circular dependencies
interface EventImage {
  url: string;
  title: string;
  filename: string;
  description?: string;
  photographer?: string;
  tags?: string[];
}

interface EventCategory {
  id: string;
  name: string;
  year: string;
  date?: string;
  location?: string;
  description?: string;
  category: 'Sports' | 'Cultural' | 'Religious' | 'Social' | 'Academic' | 'Community';
  attendees?: number;
  images: EventImage[];
  folderPath: string;
}

interface YearGroup {
  year: string;
  events: EventCategory[];
  totalEvents: number;
  totalImages: number;
}

// Comprehensive event image data with actual file paths
export const eventImageData: YearGroup[] = [
  {
    year: '2023',
    totalEvents: 2,
    totalImages: 22,
    events: [
      {
        id: 'agm_2023_sackoba_qatar',
        name: 'AGM 2023 SACKOBA Qatar',
        year: '2023',
        date: '2023-12-15',
        location: 'Golden Tulip Hotel, Doha',
        description: 'Annual General Meeting of SACKOBA Qatar with cake cutting ceremony, speeches, and networking dinner.',
        category: 'Academic',
        attendees: 85,
        folderPath: 'src/assets/images/event_images/2023/AGM_2023_SACKOBA_Qatar',
        images: [
          {
            url: '/images/event_images/2023/AGM_2023_SACKOBA_Qatar/Old_Boys_Association_Group_Photo_Qatar_2023.jpg',
            title: 'Old Boys Association Group Photo Qatar 2023',
            filename: 'Old_Boys_Association_Group_Photo_Qatar_2023.jpg'
          },
          {
            url: '/images/event_images/2023/AGM_2023_SACKOBA_Qatar/St_Anthony_s_College_flag_cake_AGM_2023.jpg',
            title: 'St Anthony\'s College Flag Cake AGM 2023',
            filename: 'St_Anthony_s_College_flag_cake_AGM_2023.jpg'
          },
          {
            url: '/images/event_images/2023/AGM_2023_SACKOBA_Qatar/Sackoba_Qatar_Banner_St_Anthony_College.jpg',
            title: 'SACKOBA Qatar Banner St Anthony College',
            filename: 'Sackoba_Qatar_Banner_St_Anthony_College.jpg'
          },
          {
            url: '/images/event_images/2023/AGM_2023_SACKOBA_Qatar/Group_of_Men_Cutting_Cake_at_Event.jpg',
            title: 'Group of Men Cutting Cake at Event',
            filename: 'Group_of_Men_Cutting_Cake_at_Event.jpg'
          },
          {
            url: '/images/event_images/2023/AGM_2023_SACKOBA_Qatar/Speaker_at_St_Anthony_s_College_AGM_Event.jpg',
            title: 'Speaker at St Anthony\'s College AGM Event',
            filename: 'Speaker_at_St_Anthony_s_College_AGM_Event.jpg'
          },
          {
            url: '/images/event_images/2023/AGM_2023_SACKOBA_Qatar/Men_at_St_Anthony_s_College_AGM_Meeting.jpg',
            title: 'Men at St Anthony\'s College AGM Meeting',
            filename: 'Men_at_St_Anthony_s_College_AGM_Meeting.jpg'
          },
          {
            url: '/images/event_images/2023/AGM_2023_SACKOBA_Qatar/Golden_Tulip_Podium_with_Flag_and_Flowers.jpg',
            title: 'Golden Tulip Podium with Flag and Flowers',
            filename: 'Golden_Tulip_Podium_with_Flag_and_Flowers.jpg'
          },
          {
            url: '/images/event_images/2023/AGM_2023_SACKOBA_Qatar/Buffet_Salad_Bar_Selection_Variety.jpg',
            title: 'Buffet Salad Bar Selection Variety',
            filename: 'Buffet_Salad_Bar_Selection_Variety.jpg'
          },
          {
            url: '/images/event_images/2023/AGM_2023_SACKOBA_Qatar/Men_in_suits_group_photo.jpg',
            title: 'Men in Suits Group Photo',
            filename: 'Men_in_suits_group_photo.jpg'
          },
          {
            url: '/images/event_images/2023/AGM_2023_SACKOBA_Qatar/Five_Men_in_Suits_Smiling_at_an_Event.jpg',
            title: 'Five Men in Suits Smiling at Event',
            filename: 'Five_Men_in_Suits_Smiling_at_an_Event.jpg'
          },
          {
            url: '/images/event_images/2023/AGM_2023_SACKOBA_Qatar/Men_cutting_cake_at_college_event.jpg',
            title: 'Men Cutting Cake at College Event',
            filename: 'Men_cutting_cake_at_college_event.jpg'
          },
          {
            url: '/images/event_images/2023/AGM_2023_SACKOBA_Qatar/Man_speaking_at_Golden_Tulip_podium.jpg',
            title: 'Man Speaking at Golden Tulip Podium',
            filename: 'Man_speaking_at_Golden_Tulip_podium.jpg'
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
            url: '/images/event_images/2023/Sinhala_&_Tamil_New_Year_and_Iftar_Celebration_2023_SACKOBA_Qatar/Blindfolded_Man_Smashing_Hanging_Pots_Game.jpg',
            title: 'Traditional New Year Games - Blindfolded Pot Breaking',
            filename: 'Blindfolded_Man_Smashing_Hanging_Pots_Game.jpg'
          },
          {
            url: '/images/event_images/2023/Sinhala_&_Tamil_New_Year_and_Iftar_Celebration_2023_SACKOBA_Qatar/Large_Group_Photo_Event_Qatar.jpg',
            title: 'Large Group Photo Event Qatar',
            filename: 'Large_Group_Photo_Event_Qatar.jpg'
          },
          {
            url: '/images/event_images/2023/Sinhala_&_Tamil_New_Year_and_Iftar_Celebration_2023_SACKOBA_Qatar/Sri_Lankan_Traditional_Milk_Pot_Ceremony_Group.jpg',
            title: 'Sri Lankan Traditional Milk Pot Ceremony',
            filename: 'Sri_Lankan_Traditional_Milk_Pot_Ceremony_Group.jpg'
          },
          {
            url: '/images/event_images/2023/Sinhala_&_Tamil_New_Year_and_Iftar_Celebration_2023_SACKOBA_Qatar/Tug_of_war_at_St_Anthony_s_College_celebration.jpg',
            title: 'Tug of War at St Anthony\'s College Celebration',
            filename: 'Tug_of_war_at_St_Anthony_s_College_celebration.jpg'
          },
          {
            url: '/images/event_images/2023/Sinhala_&_Tamil_New_Year_and_Iftar_Celebration_2023_SACKOBA_Qatar/Sack_Race_at_St_Anthony_s_College_Event.jpg',
            title: 'Sack Race at St Anthony\'s College Event',
            filename: 'Sack_Race_at_St_Anthony_s_College_Event.jpg'
          },
          {
            url: '/images/event_images/2023/Sinhala_&_Tamil_New_Year_and_Iftar_Celebration_2023_SACKOBA_Qatar/People_lighting_traditional_oil_lamp_ceremony.jpg',
            title: 'Traditional Oil Lamp Lighting Ceremony',
            filename: 'People_lighting_traditional_oil_lamp_ceremony.jpg'
          },
          {
            url: '/images/event_images/2023/Sinhala_&_Tamil_New_Year_and_Iftar_Celebration_2023_SACKOBA_Qatar/Iftar_gathering_people_sitting_on_mat_eating.jpg',
            title: 'Iftar Gathering - People Sitting on Mat Eating',
            filename: 'Iftar_gathering_people_sitting_on_mat_eating.jpg'
          },
          {
            url: '/images/event_images/2023/Sinhala_&_Tamil_New_Year_and_Iftar_Celebration_2023_SACKOBA_Qatar/Couples_in_Traditional_Sri_Lankan_Attire.jpg',
            title: 'Couples in Traditional Sri Lankan Attire',
            filename: 'Couples_in_Traditional_Sri_Lankan_Attire.jpg'
          },
          {
            url: '/images/event_images/2023/Sinhala_&_Tamil_New_Year_and_Iftar_Celebration_2023_SACKOBA_Qatar/Pillow_Fight_at_Sinhala_Tamil_New_Year_Celebration.jpg',
            title: 'Pillow Fight at Sinhala Tamil New Year Celebration',
            filename: 'Pillow_Fight_at_Sinhala_Tamil_New_Year_Celebration.jpg'
          },
          {
            url: '/images/event_images/2023/Sinhala_&_Tamil_New_Year_and_Iftar_Celebration_2023_SACKOBA_Qatar/Women_cooking_at_Tamil_New_Year_celebration.jpg',
            title: 'Women Cooking at Tamil New Year Celebration',
            filename: 'Women_cooking_at_Tamil_New_Year_celebration.jpg'
          }
        ]
      }
    ]
  },
  {
    year: '2022',
    events: [
      {
        id: 'college_day_feast_st_anthony_2022',
        name: 'College Day and Feast of St Anthony of Padua 2022',
        year: '2022',
        folderPath: 'src/assets/images/event_images/2022/College_Day_and_Feast_of_St_Anthony_of_Padua_2022',
        images: [
          {
            url: '/images/event_images/2022/College_Day_and_Feast_of_St_Anthony_of_Padua_2022/WhatsApp Image 2022-06-10 at 10.51.19 AM.jpeg',
            title: 'College Day Celebration',
            filename: 'WhatsApp Image 2022-06-10 at 10.51.19 AM.jpeg'
          },
          {
            url: '/images/event_images/2022/College_Day_and_Feast_of_St_Anthony_of_Padua_2022/WhatsApp Image 2022-06-10 at 10.51.23 AM.jpeg',
            title: 'College Day Event',
            filename: 'WhatsApp Image 2022-06-10 at 10.51.23 AM.jpeg'
          },
          {
            url: '/images/event_images/2022/College_Day_and_Feast_of_St_Anthony_of_Padua_2022/WhatsApp Image 2022-06-11 at 7.18.05 AM.jpeg',
            title: 'Feast of St Anthony Celebration',
            filename: 'WhatsApp Image 2022-06-11 at 7.18.05 AM.jpeg'
          },
          {
            url: '/images/event_images/2022/College_Day_and_Feast_of_St_Anthony_of_Padua_2022/WhatsApp Image 2022-06-10 at 10.51.25 AM.jpeg',
            title: 'College Day Activities',
            filename: 'WhatsApp Image 2022-06-10 at 10.51.25 AM.jpeg'
          },
          {
            url: '/images/event_images/2022/College_Day_and_Feast_of_St_Anthony_of_Padua_2022/WhatsApp Image 2022-06-11 at 9.43.48 AM.jpeg',
            title: 'Event Gathering',
            filename: 'WhatsApp Image 2022-06-11 at 9.43.48 AM.jpeg'
          },
          {
            url: '/images/event_images/2022/College_Day_and_Feast_of_St_Anthony_of_Padua_2022/WhatsApp Image 2022-06-10 at 8.50.56 AM.jpeg',
            title: 'Religious Ceremony',
            filename: 'WhatsApp Image 2022-06-10 at 8.50.56 AM.jpeg'
          },
          {
            url: '/images/event_images/2022/College_Day_and_Feast_of_St_Anthony_of_Padua_2022/WhatsApp Image 2022-06-11 at 4.25.48 AM.jpeg',
            title: 'Community Gathering',
            filename: 'WhatsApp Image 2022-06-11 at 4.25.48 AM.jpeg'
          },
          {
            url: '/images/event_images/2022/College_Day_and_Feast_of_St_Anthony_of_Padua_2022/WhatsApp Image 2022-06-10 at 11.17.06 AM.jpeg',
            title: 'Event Highlights',
            filename: 'WhatsApp Image 2022-06-10 at 11.17.06 AM.jpeg'
          }
        ]
      },
      {
        id: 'aluth_avurudu_iftar_2022',
        name: 'Aluth Avurudu Iftar Celebration 2022',
        year: '2022',
        folderPath: 'src/assets/images/event_images/2022/Aluth_Avurudu_Iftar_Celebration_2022',
        images: [
          {
            url: '/images/event_images/2022/Aluth_Avurudu_Iftar_Celebration_2022/IMG_0487.jpg',
            title: 'Cultural Performance',
            filename: 'IMG_0487.jpg'
          },
          {
            url: '/images/event_images/2022/Aluth_Avurudu_Iftar_Celebration_2022/IMG_0500.jpg',
            title: 'Iftar Celebration',
            filename: 'IMG_0500.jpg'
          },
          {
            url: '/images/event_images/2022/Aluth_Avurudu_Iftar_Celebration_2022/IMG_8780.jpg',
            title: 'Traditional Games',
            filename: 'IMG_8780.jpg'
          },
          {
            url: '/images/event_images/2022/Aluth_Avurudu_Iftar_Celebration_2022/IMG_8805.jpg',
            title: 'Event Gathering',
            filename: 'IMG_8805.jpg'
          },
          {
            url: '/images/event_images/2022/Aluth_Avurudu_Iftar_Celebration_2022/IMG_9047.jpg',
            title: 'Community Celebration',
            filename: 'IMG_9047.jpg'
          },
          {
            url: '/images/event_images/2022/Aluth_Avurudu_Iftar_Celebration_2022/IMG_9240.jpg',
            title: 'Group Activities',
            filename: 'IMG_9240.jpg'
          },
          {
            url: '/images/event_images/2022/Aluth_Avurudu_Iftar_Celebration_2022/IMG_9316.jpg',
            title: 'Festival Moments',
            filename: 'IMG_9316.jpg'
          },
          {
            url: '/images/event_images/2022/Aluth_Avurudu_Iftar_Celebration_2022/IMG_0640.jpg',
            title: 'Event Highlights',
            filename: 'IMG_0640.jpg'
          }
        ]
      }
    ]
  }
];

// Function to get event image data
export function getEventImageData(): YearGroup[] {
  return eventImageData;
}

// Function to get images by year
export function getEventImagesByYear(year: string): EventCategory[] {
  const yearGroup = eventImageData.find(group => group.year === year);
  return yearGroup ? yearGroup.events : [];
}

// Function to get all available years from image data
export function getEventImageYears(): string[] {
  return eventImageData.map(group => group.year).sort((a, b) => parseInt(b) - parseInt(a));
}

// Export types
export type { EventImage, EventCategory, YearGroup };
