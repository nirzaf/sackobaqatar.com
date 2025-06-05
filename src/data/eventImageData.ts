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
    totalEvents: 3,
    totalImages: 32,
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
            filename: 'Old_Boys_Association_Group_Photo_Qatar_2023.jpg',
            description: 'Official group photo of SACKOBA Qatar members at the 2023 AGM',
            tags: ['group photo', 'AGM', 'members', 'formal']
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
        date: '2023-04-14',
        location: 'Qatar Sports Club',
        description: 'Combined celebration of Sinhala & Tamil New Year with traditional games, cultural activities, and Iftar gathering.',
        category: 'Cultural',
        attendees: 120,
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
      },
      {
        id: 'sackobaq_college_day_celebrations_2023',
        name: 'SACKOBAQ College Day Celebrations 2023',
        year: '2023',
        date: '2023-06-13',
        location: 'St Anthony\'s College, Sri Lanka',
        description: 'Annual College Day celebrations at St Anthony\'s College with religious ceremonies, community service, and alumni gathering.',
        category: 'Academic',
        attendees: 200,
        folderPath: 'src/assets/images/event_images/2023/SACKOBAQ_College_Day_Celebrations',
        images: [
          {
            url: '/images/event_images/2023/SACKOBAQ_College_Day_Celebrations/Church_Service_Ceremony_at_St__Anthony_s_College.JPG',
            title: 'Church Service Ceremony at St Anthony\'s College',
            filename: 'Church_Service_Ceremony_at_St__Anthony_s_College.JPG',
            description: 'Religious ceremony during College Day celebrations',
            tags: ['church', 'ceremony', 'college day', 'religious']
          },
          {
            url: '/images/event_images/2023/SACKOBAQ_College_Day_Celebrations/Priest_at_Altar_College_Day_Celebration_2023.JPG',
            title: 'Priest at Altar - College Day Celebration 2023',
            filename: 'Priest_at_Altar_College_Day_Celebration_2023.JPG',
            description: 'Priest conducting service at altar during college day',
            tags: ['priest', 'altar', 'college day', 'service']
          },
          {
            url: '/images/event_images/2023/SACKOBAQ_College_Day_Celebrations/People_Praying_in_Church_during_Gathering.JPG',
            title: 'People Praying in Church during Gathering',
            filename: 'People_Praying_in_Church_during_Gathering.JPG',
            description: 'Community members praying during church gathering',
            tags: ['prayer', 'church', 'gathering', 'community']
          },
          {
            url: '/images/event_images/2023/SACKOBAQ_College_Day_Celebrations/College_Alumni_Gathering_Hallway.JPG',
            title: 'College Alumni Gathering in Hallway',
            filename: 'College_Alumni_Gathering_Hallway.JPG',
            description: 'Alumni gathering in college hallway',
            tags: ['alumni', 'gathering', 'hallway', 'college']
          },
          {
            url: '/images/event_images/2023/SACKOBAQ_College_Day_Celebrations/Men_distributing_food_bags_at_event.JPG',
            title: 'Community Service - Food Distribution',
            filename: 'Men_distributing_food_bags_at_event.JPG',
            description: 'Men distributing food bags during community service',
            tags: ['community service', 'food distribution', 'charity', 'service']
          },
          {
            url: '/images/event_images/2023/SACKOBAQ_College_Day_Celebrations/Men_distributing_water_bottles_at_college_event.JPG',
            title: 'Water Distribution at College Event',
            filename: 'Men_distributing_water_bottles_at_college_event.JPG',
            description: 'Volunteers distributing water bottles at college event',
            tags: ['water distribution', 'volunteers', 'college event', 'service']
          },
          {
            url: '/images/event_images/2023/SACKOBAQ_College_Day_Celebrations/Group_of_People_at_St_Anthony_s_College_Event.JPG',
            title: 'Group at St Anthony\'s College Event',
            filename: 'Group_of_People_at_St_Anthony_s_College_Event.JPG',
            description: 'Group of people attending St Anthony\'s College event',
            tags: ['group', 'college event', 'st anthony', 'attendees']
          },
          {
            url: '/images/event_images/2023/SACKOBAQ_College_Day_Celebrations/People_receiving_communion_at_college_event.JPG',
            title: 'Communion at College Event',
            filename: 'People_receiving_communion_at_college_event.JPG',
            description: 'People receiving communion during college event',
            tags: ['communion', 'college event', 'religious', 'ceremony']
          },
          {
            url: '/images/event_images/2023/SACKOBAQ_College_Day_Celebrations/Man_speaking_at_podium_in_church_setting.JPG',
            title: 'Speaker at Church Podium',
            filename: 'Man_speaking_at_podium_in_church_setting.JPG',
            description: 'Speaker addressing gathering at church podium',
            tags: ['speaker', 'podium', 'church', 'address']
          },
          {
            url: '/images/event_images/2023/SACKOBAQ_College_Day_Celebrations/Priest_Incensing_Ceremony_During_College_Event.JPG',
            title: 'Priest Incensing Ceremony',
            filename: 'Priest_Incensing_Ceremony_During_College_Event.JPG',
            description: 'Priest performing incensing ceremony during college event',
            tags: ['priest', 'incense', 'ceremony', 'religious']
          }
        ]
      }
    ]
  },
  {
    year: '2022',
    totalEvents: 2,
    totalImages: 16,
    events: [
      {
        id: 'college_day_feast_st_anthony_2022',
        name: 'College Day and Feast of St Anthony of Padua 2022',
        year: '2022',
        date: '2022-06-13',
        location: 'Doha, Qatar',
        description: 'Annual College Day celebration combined with the Feast of St Anthony of Padua, featuring religious ceremonies and community gathering.',
        category: 'Religious',
        attendees: 95,
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
        date: '2022-04-14',
        location: 'Community Center, Doha',
        description: 'Traditional Sri Lankan New Year celebration combined with Iftar, featuring cultural performances, traditional games, and community feast.',
        category: 'Cultural',
        attendees: 110,
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
  },
  {
    year: '2020',
    totalEvents: 2,
    totalImages: 14,
    events: [
      {
        id: 'family_activity_day_2020',
        name: 'Family Activity Day 2020',
        year: '2020',
        date: '2020-02-28',
        location: 'Al Bidda Park, Doha',
        description: 'Annual family gathering with outdoor activities, games, and picnic for SACKOBA Qatar members and their families.',
        category: 'Social',
        attendees: 75,
        folderPath: 'src/assets/images/event_images/2020/Family_Activity_Day_2020',
        images: [
          {
            url: '/images/event_images/2020/Family_Activity_Day_2020/Family Activity Day 2020 (1).JPG',
            title: 'Family Activity Day - Group Photo',
            filename: 'Family Activity Day 2020 (1).JPG',
            description: 'Families enjoying outdoor activities at Al Bidda Park',
            tags: ['family', 'outdoor', 'activities', 'children']
          },
          {
            url: '/images/event_images/2020/Family_Activity_Day_2020/Family Activity Day 2020 (5).JPG',
            title: 'Children Playing Games',
            filename: 'Family Activity Day 2020 (5).JPG',
            description: 'Children participating in organized games and activities',
            tags: ['children', 'games', 'fun', 'activities']
          },
          {
            url: '/images/event_images/2020/Family_Activity_Day_2020/Family Activity Day 2020 (10).JPG',
            title: 'Family Picnic',
            filename: 'Family Activity Day 2020 (10).JPG',
            description: 'Families enjoying picnic lunch together',
            tags: ['picnic', 'lunch', 'families', 'gathering']
          },
          {
            url: '/images/event_images/2020/Family_Activity_Day_2020/Family Activity Day 2020 (15).JPG',
            title: 'Outdoor Activities',
            filename: 'Family Activity Day 2020 (15).JPG',
            description: 'Community members participating in outdoor activities',
            tags: ['outdoor', 'activities', 'community', 'participation']
          },
          {
            url: '/images/event_images/2020/Family_Activity_Day_2020/Family Activity Day 2020 (20).JPG',
            title: 'Family Fun Time',
            filename: 'Family Activity Day 2020 (20).JPG',
            description: 'Families having fun together at the park',
            tags: ['family', 'fun', 'park', 'together']
          },
          {
            url: '/images/event_images/2020/Family_Activity_Day_2020/Family Activity Day 2020 (25).JPG',
            title: 'Community Gathering',
            filename: 'Family Activity Day 2020 (25).JPG',
            description: 'Large community gathering at the family day',
            tags: ['community', 'gathering', 'family day', 'social']
          },
          {
            url: '/images/event_images/2020/Family_Activity_Day_2020/Family Activity Day 2020 (30).JPG',
            title: 'Group Activities',
            filename: 'Family Activity Day 2020 (30).JPG',
            description: 'Various group activities and entertainment',
            tags: ['group', 'activities', 'entertainment', 'fun']
          },
          {
            url: '/images/event_images/2020/Family_Activity_Day_2020/Family Activity Day 2020 (35).JPG',
            title: 'Family Celebration',
            filename: 'Family Activity Day 2020 (35).JPG',
            description: 'Families celebrating together at the event',
            tags: ['family', 'celebration', 'event', 'joy']
          }
        ]
      },
      {
        id: 'old_anandians_bowling_tournament',
        name: 'Old Anandians Bowling Tournament',
        year: '2020',
        date: '2020-11-20',
        location: 'Bowling Center, Doha',
        description: 'Inter-school bowling tournament featuring Old Anandians and other old boys associations.',
        category: 'Sports',
        attendees: 45,
        folderPath: 'src/assets/images/event_images/2020/Old_Anandians_Bowling_Tournament',
        images: [
          {
            url: '/images/event_images/2020/Old_Anandians_Bowling_Tournament/Old Anandians Bowling Tournament (1).jpg',
            title: 'Bowling Tournament - Group Photo',
            filename: 'Old Anandians Bowling Tournament (1).jpg',
            description: 'Participants at the Old Anandians bowling tournament',
            tags: ['bowling', 'tournament', 'sports', 'competition']
          },
          {
            url: '/images/event_images/2020/Old_Anandians_Bowling_Tournament/Old Anandians Bowling Tournament (2).jpg',
            title: 'Tournament Action',
            filename: 'Old Anandians Bowling Tournament (2).jpg',
            description: 'Action shots from the bowling tournament',
            tags: ['bowling', 'action', 'sports', 'competition']
          },
          {
            url: '/images/event_images/2020/Old_Anandians_Bowling_Tournament/Old Anandians Bowling Tournament (3).jpg',
            title: 'Team Competition',
            filename: 'Old Anandians Bowling Tournament (3).jpg',
            description: 'Teams competing in the bowling tournament',
            tags: ['teams', 'competition', 'bowling', 'sports']
          },
          {
            url: '/images/event_images/2020/Old_Anandians_Bowling_Tournament/Old Anandians Bowling Tournament (4).jpg',
            title: 'Tournament Participants',
            filename: 'Old Anandians Bowling Tournament (4).jpg',
            description: 'Group photo of all tournament participants',
            tags: ['participants', 'group photo', 'tournament', 'bowling']
          },
          {
            url: '/images/event_images/2020/Old_Anandians_Bowling_Tournament/Old Anandians Bowling Tournament (5).jpg',
            title: 'Bowling Competition',
            filename: 'Old Anandians Bowling Tournament (5).jpg',
            description: 'Competitive bowling action during the tournament',
            tags: ['bowling', 'competition', 'action', 'sports']
          },
          {
            url: '/images/event_images/2020/Old_Anandians_Bowling_Tournament/Old Anandians Bowling Tournament (6).jpg',
            title: 'Tournament Winners',
            filename: 'Old Anandians Bowling Tournament (6).jpg',
            description: 'Winners and participants celebrating the tournament',
            tags: ['winners', 'celebration', 'tournament', 'achievement']
          }
        ]
      }
    ]
  },
  {
    year: '2018',
    totalEvents: 1,
    totalImages: 10,
    events: [
      {
        id: 'rayyan_talons_smash_2018',
        name: 'Rayyan Talons Smash 2018',
        year: '2018',
        date: '2018-09-15',
        location: 'Rayyan Sports Complex, Qatar',
        description: 'Annual sports tournament featuring multiple games and competitions among SACKOBA Qatar members.',
        category: 'Sports',
        attendees: 60,
        folderPath: 'src/assets/images/event_images/2018/Rayyan_Talons_Smash_2018',
        images: [
          {
            url: '/images/event_images/2018/Rayyan_Talons_Smash_2018/Cover Photo.jpg',
            title: 'Rayyan Talons Smash - Cover Photo',
            filename: 'Cover Photo.jpg',
            description: 'Official cover photo of the Rayyan Talons Smash tournament',
            tags: ['cover', 'tournament', 'sports', 'official']
          },
          {
            url: '/images/event_images/2018/Rayyan_Talons_Smash_2018/DSC_2530.jpg',
            title: 'Tournament Opening',
            filename: 'DSC_2530.jpg',
            description: 'Opening ceremony of the sports tournament',
            tags: ['opening', 'ceremony', 'sports', 'tournament']
          },
          {
            url: '/images/event_images/2018/Rayyan_Talons_Smash_2018/DSC_2567.jpg',
            title: 'Athletic Competition',
            filename: 'DSC_2567.jpg',
            description: 'Athletes competing in various sports events',
            tags: ['athletics', 'competition', 'sports', 'action']
          },
          {
            url: '/images/event_images/2018/Rayyan_Talons_Smash_2018/DSC_2640.jpg',
            title: 'Team Sports',
            filename: 'DSC_2640.jpg',
            description: 'Team sports competition during the tournament',
            tags: ['team sports', 'competition', 'athletics', 'teamwork']
          },
          {
            url: '/images/event_images/2018/Rayyan_Talons_Smash_2018/DSC_2711.jpg',
            title: 'Sports Action',
            filename: 'DSC_2711.jpg',
            description: 'Action shots from various sports competitions',
            tags: ['action', 'sports', 'competition', 'athletics']
          },
          {
            url: '/images/event_images/2018/Rayyan_Talons_Smash_2018/DSC_2794.jpg',
            title: 'Tournament Participants',
            filename: 'DSC_2794.jpg',
            description: 'Participants enjoying the sports tournament',
            tags: ['participants', 'tournament', 'sports', 'community']
          },
          {
            url: '/images/event_images/2018/Rayyan_Talons_Smash_2018/IMG_3908.jpg',
            title: 'Group Activities',
            filename: 'IMG_3908.jpg',
            description: 'Group activities and team building exercises',
            tags: ['group', 'activities', 'team building', 'sports']
          },
          {
            url: '/images/event_images/2018/Rayyan_Talons_Smash_2018/IMG_4133.jpg',
            title: 'Winners Ceremony',
            filename: 'IMG_4133.jpg',
            description: 'Award ceremony for tournament winners',
            tags: ['winners', 'ceremony', 'awards', 'achievement']
          },
          {
            url: '/images/event_images/2018/Rayyan_Talons_Smash_2018/IMG_4255.jpg',
            title: 'Tournament Celebration',
            filename: 'IMG_4255.jpg',
            description: 'Celebration and closing ceremony',
            tags: ['celebration', 'closing', 'tournament', 'achievement']
          },
          {
            url: '/images/event_images/2018/Rayyan_Talons_Smash_2018/IMG_4466.jpg',
            title: 'Group Photo',
            filename: 'IMG_4466.jpg',
            description: 'Group photo of all tournament participants',
            tags: ['group photo', 'participants', 'tournament', 'community']
          }
        ]
      }
    ]
  },
  {
    year: '2017',
    totalEvents: 5,
    totalImages: 30,
    events: [
      {
        id: 'awurudu_udawa_2017',
        name: 'Awurudu Udawa 2017',
        year: '2017',
        date: '2017-04-13',
        location: 'Community Center, Doha',
        description: 'Traditional Sri Lankan New Year celebration with cultural activities, traditional games, and community feast.',
        category: 'Cultural',
        attendees: 85,
        folderPath: 'src/assets/images/event_images/2017/Awurudu_Udawa_2017',
        images: [
          {
            url: '/images/event_images/2017/Awurudu_Udawa_2017/COVER PHOTO.jpg',
            title: 'Awurudu Udawa 2017 - Cover Photo',
            filename: 'COVER PHOTO.jpg',
            description: 'Official cover photo of Awurudu Udawa 2017 celebration',
            tags: ['cover', 'awurudu', 'new year', 'official']
          },
          {
            url: '/images/event_images/2017/Awurudu_Udawa_2017/18156772_10154644317512689_7778778790727501797_o.jpg',
            title: 'Traditional New Year Celebration',
            filename: '18156772_10154644317512689_7778778790727501797_o.jpg',
            description: 'Community celebrating traditional Sri Lankan New Year',
            tags: ['new year', 'traditional', 'community', 'celebration']
          },
          {
            url: '/images/event_images/2017/Awurudu_Udawa_2017/18192276_10154644353587689_5784867990693951207_o.jpg',
            title: 'Traditional Games',
            filename: '18192276_10154644353587689_5784867990693951207_o.jpg',
            description: 'Traditional Awurudu games and activities',
            tags: ['games', 'traditional', 'awurudu', 'activities']
          },
          {
            url: '/images/event_images/2017/Awurudu_Udawa_2017/18192285_10154644351297689_2345179001905277950_o.jpg',
            title: 'Cultural Activities',
            filename: '18192285_10154644351297689_2345179001905277950_o.jpg',
            description: 'Cultural performances and traditional activities',
            tags: ['cultural', 'performance', 'traditional', 'activities']
          },
          {
            url: '/images/event_images/2017/Awurudu_Udawa_2017/18193074_10154644370042689_5972431579560851194_o.jpg',
            title: 'Community Gathering',
            filename: '18193074_10154644370042689_5972431579560851194_o.jpg',
            description: 'Large community gathering for Awurudu celebration',
            tags: ['community', 'gathering', 'celebration', 'awurudu']
          },
          {
            url: '/images/event_images/2017/Awurudu_Udawa_2017/18209116_10154644319572689_3926648714934932249_o.jpg',
            title: 'Traditional Food Preparation',
            filename: '18209116_10154644319572689_3926648714934932249_o.jpg',
            description: 'Preparation of traditional Awurudu food',
            tags: ['food', 'traditional', 'preparation', 'awurudu']
          },
          {
            url: '/images/event_images/2017/Awurudu_Udawa_2017/18237780_10154644344422689_1155018161519905710_o (1).jpg',
            title: 'Festival Celebrations',
            filename: '18237780_10154644344422689_1155018161519905710_o (1).jpg',
            description: 'Festive celebrations during Awurudu',
            tags: ['festival', 'celebrations', 'awurudu', 'joy']
          },
          {
            url: '/images/event_images/2017/Awurudu_Udawa_2017/18278188_10154644314442689_5821999416867447528_o.jpg',
            title: 'Group Photo',
            filename: '18278188_10154644314442689_5821999416867447528_o.jpg',
            description: 'Group photo of Awurudu celebration participants',
            tags: ['group photo', 'participants', 'awurudu', 'community']
          }
        ]
      },
      {
        id: 'college_day_agm_iftar_2017',
        name: 'College Day - AGM & Annual Iftar 2017',
        year: '2017',
        date: '2017-06-13',
        location: 'Doha, Qatar',
        description: 'Combined celebration of College Day with Annual General Meeting and Iftar gathering.',
        category: 'Academic',
        attendees: 90,
        folderPath: 'src/assets/images/event_images/2017/College_Day_-_AGM___Annual_Iftar_-2017',
        images: [
          {
            url: '/images/event_images/2017/College_Day_-_AGM___Annual_Iftar_-2017/COVER PHOTO.jpg',
            title: 'College Day AGM & Iftar 2017 - Cover Photo',
            filename: 'COVER PHOTO.jpg',
            description: 'Official cover photo of College Day, AGM and Annual Iftar 2017',
            tags: ['cover', 'college day', 'AGM', 'iftar']
          },
          {
            url: '/images/event_images/2017/College_Day_-_AGM___Annual_Iftar_-2017/19237941_10154810857997689_3740106895866288121_o.jpg',
            title: 'Annual General Meeting',
            filename: '19237941_10154810857997689_3740106895866288121_o.jpg',
            description: 'Annual General Meeting proceedings and discussions',
            tags: ['AGM', 'meeting', 'academic', 'formal']
          },
          {
            url: '/images/event_images/2017/College_Day_-_AGM___Annual_Iftar_-2017/19243029_10154810856167689_245505658030116625_o.jpg',
            title: 'College Day Celebration',
            filename: '19243029_10154810856167689_245505658030116625_o.jpg',
            description: 'College Day celebration with community members',
            tags: ['college day', 'celebration', 'community', 'academic']
          },
          {
            url: '/images/event_images/2017/College_Day_-_AGM___Annual_Iftar_-2017/19250448_10154810851922689_887738211189593450_o.jpg',
            title: 'Iftar Gathering',
            filename: '19250448_10154810851922689_887738211189593450_o.jpg',
            description: 'Community Iftar gathering and breaking fast together',
            tags: ['iftar', 'community', 'gathering', 'religious']
          },
          {
            url: '/images/event_images/2017/College_Day_-_AGM___Annual_Iftar_-2017/19264337_10154810845142689_2464772711510734248_o.jpg',
            title: 'Event Proceedings',
            filename: '19264337_10154810845142689_2464772711510734248_o.jpg',
            description: 'Event proceedings and formal ceremonies',
            tags: ['proceedings', 'ceremony', 'formal', 'event']
          },
          {
            url: '/images/event_images/2017/College_Day_-_AGM___Annual_Iftar_-2017/19417299_10154810859712689_1108488203958263164_o.jpg',
            title: 'Community Fellowship',
            filename: '19417299_10154810859712689_1108488203958263164_o.jpg',
            description: 'Community fellowship and networking',
            tags: ['fellowship', 'community', 'networking', 'social']
          },
          {
            url: '/images/event_images/2017/College_Day_-_AGM___Annual_Iftar_-2017/19441744_10154810851617689_5007987521012309768_o.jpg',
            title: 'Group Photo',
            filename: '19441744_10154810851617689_5007987521012309768_o.jpg',
            description: 'Group photo of event participants',
            tags: ['group photo', 'participants', 'event', 'community']
          },
          {
            url: '/images/event_images/2017/College_Day_-_AGM___Annual_Iftar_-2017/19466272_10154810861387689_484601912630300244_o.jpg',
            title: 'Event Highlights',
            filename: '19466272_10154810861387689_484601912630300244_o.jpg',
            description: 'Highlights from the combined celebration',
            tags: ['highlights', 'celebration', 'event', 'memorable']
          }
        ]
      },
      {
        id: 'feast_of_st_anthony_2017',
        name: 'Feast of St Anthony 2017',
        year: '2017',
        date: '2017-06-13',
        location: 'Doha, Qatar',
        description: 'Annual celebration of the Feast of St Anthony of Padua with religious ceremonies and community gathering.',
        category: 'Religious',
        attendees: 75,
        folderPath: 'src/assets/images/event_images/2017/Feast_of_St.Anthony_2017',
        images: [
          {
            url: '/images/event_images/2017/Feast_of_St.Anthony_2017/DSC_1712.jpg',
            title: 'Feast of St Anthony Celebration',
            filename: 'DSC_1712.jpg',
            description: 'Religious celebration of St Anthony of Padua',
            tags: ['feast', 'st anthony', 'religious', 'celebration']
          },
          {
            url: '/images/event_images/2017/Feast_of_St.Anthony_2017/DSC_1754.jpg',
            title: 'Religious Ceremony',
            filename: 'DSC_1754.jpg',
            description: 'Religious ceremony during the feast celebration',
            tags: ['ceremony', 'religious', 'feast', 'spiritual']
          },
          {
            url: '/images/event_images/2017/Feast_of_St.Anthony_2017/DSC_1798.jpg',
            title: 'Community Prayer',
            filename: 'DSC_1798.jpg',
            description: 'Community members gathered in prayer',
            tags: ['prayer', 'community', 'religious', 'spiritual']
          },
          {
            url: '/images/event_images/2017/Feast_of_St.Anthony_2017/DSC_1831.jpg',
            title: 'Feast Celebration',
            filename: 'DSC_1831.jpg',
            description: 'Community celebrating the feast of St Anthony',
            tags: ['feast', 'celebration', 'community', 'religious']
          },
          {
            url: '/images/event_images/2017/Feast_of_St.Anthony_2017/DSC_1855.jpg',
            title: 'Religious Gathering',
            filename: 'DSC_1855.jpg',
            description: 'Religious gathering for the feast celebration',
            tags: ['gathering', 'religious', 'feast', 'community']
          },
          {
            url: '/images/event_images/2017/Feast_of_St.Anthony_2017/DSC_1876.jpg',
            title: 'Spiritual Ceremony',
            filename: 'DSC_1876.jpg',
            description: 'Spiritual ceremony honoring St Anthony',
            tags: ['spiritual', 'ceremony', 'st anthony', 'honor']
          },
          {
            url: '/images/event_images/2017/Feast_of_St.Anthony_2017/DSC_1917.jpg',
            title: 'Community Worship',
            filename: 'DSC_1917.jpg',
            description: 'Community worship during the feast',
            tags: ['worship', 'community', 'feast', 'religious']
          },
          {
            url: '/images/event_images/2017/Feast_of_St.Anthony_2017/DSC_1932.jpg',
            title: 'Feast Day Celebration',
            filename: 'DSC_1932.jpg',
            description: 'Celebration of St Anthony\'s feast day',
            tags: ['feast day', 'celebration', 'st anthony', 'religious']
          }
        ]
      },
      {
        id: 'dark_horse_cricket_tournament_2017',
        name: 'Dark Horse Cricket Tournament 2017 - Champions',
        year: '2017',
        date: '2017-10-20',
        location: 'Cricket Ground, Qatar',
        description: 'Cricket tournament where SACKOBA Qatar emerged as champions, featuring competitive matches and team spirit.',
        category: 'Sports',
        attendees: 50,
        folderPath: 'src/assets/images/event_images/2017/Dark_horse_Cricket_Tournament_-_2017_Champions',
        images: [
          {
            url: '/images/event_images/2017/Dark_horse_Cricket_Tournament_-_2017_Champions/DSC_0381.jpg',
            title: 'Cricket Tournament Opening',
            filename: 'DSC_0381.jpg',
            description: 'Opening ceremony of the Dark Horse Cricket Tournament',
            tags: ['cricket', 'tournament', 'opening', 'sports']
          },
          {
            url: '/images/event_images/2017/Dark_horse_Cricket_Tournament_-_2017_Champions/DSC_0397.jpg',
            title: 'Cricket Match Action',
            filename: 'DSC_0397.jpg',
            description: 'Action shots from the cricket matches',
            tags: ['cricket', 'action', 'match', 'sports']
          },
          {
            url: '/images/event_images/2017/Dark_horse_Cricket_Tournament_-_2017_Champions/DSC_0436.jpg',
            title: 'Team Competition',
            filename: 'DSC_0436.jpg',
            description: 'Teams competing in the cricket tournament',
            tags: ['teams', 'competition', 'cricket', 'tournament']
          },
          {
            url: '/images/event_images/2017/Dark_horse_Cricket_Tournament_-_2017_Champions/DSC_0502.jpg',
            title: 'Cricket Champions',
            filename: 'DSC_0502.jpg',
            description: 'SACKOBA Qatar team celebrating their championship',
            tags: ['champions', 'victory', 'cricket', 'celebration']
          },
          {
            url: '/images/event_images/2017/Dark_horse_Cricket_Tournament_-_2017_Champions/DSC_0568.jpg',
            title: 'Trophy Presentation',
            filename: 'DSC_0568.jpg',
            description: 'Trophy presentation ceremony for the champions',
            tags: ['trophy', 'presentation', 'champions', 'ceremony']
          },
          {
            url: '/images/event_images/2017/Dark_horse_Cricket_Tournament_-_2017_Champions/DSC_0634.jpg',
            title: 'Team Celebration',
            filename: 'DSC_0634.jpg',
            description: 'Team celebrating their tournament victory',
            tags: ['celebration', 'team', 'victory', 'cricket']
          }
        ]
      },
      {
        id: 'day_out_on_boat_2017',
        name: 'Day Out on a Boat 2017',
        year: '2017',
        date: '2017-05-12',
        location: 'Qatar Waters',
        description: 'Relaxing day out on a boat with community members enjoying the sea, fishing, and fellowship.',
        category: 'Social',
        attendees: 35,
        folderPath: 'src/assets/images/event_images/2017/Day_Out_on_a_Boat_2017',
        images: [
          {
            url: '/images/event_images/2017/Day_Out_on_a_Boat_2017/DSC_0011.jpg',
            title: 'Boat Trip Beginning',
            filename: 'DSC_0011.jpg',
            description: 'Starting the day out on the boat',
            tags: ['boat', 'trip', 'beginning', 'sea']
          },
          {
            url: '/images/event_images/2017/Day_Out_on_a_Boat_2017/DSC_0044.jpg',
            title: 'Sea Adventure',
            filename: 'DSC_0044.jpg',
            description: 'Community members enjoying the sea adventure',
            tags: ['sea', 'adventure', 'boat', 'community']
          },
          {
            url: '/images/event_images/2017/Day_Out_on_a_Boat_2017/DSC_0076.jpg',
            title: 'Fishing Activity',
            filename: 'DSC_0076.jpg',
            description: 'Fishing activities during the boat trip',
            tags: ['fishing', 'activity', 'boat', 'recreation']
          },
          {
            url: '/images/event_images/2017/Day_Out_on_a_Boat_2017/DSC_0119.jpg',
            title: 'Group on Boat',
            filename: 'DSC_0119.jpg',
            description: 'Group photo of participants on the boat',
            tags: ['group', 'boat', 'participants', 'photo']
          },
          {
            url: '/images/event_images/2017/Day_Out_on_a_Boat_2017/DSC_0164.jpg',
            title: 'Ocean Views',
            filename: 'DSC_0164.jpg',
            description: 'Beautiful ocean views during the boat trip',
            tags: ['ocean', 'views', 'boat', 'scenic']
          },
          {
            url: '/images/event_images/2017/Day_Out_on_a_Boat_2017/DSC_0195.jpg',
            title: 'Boat Fellowship',
            filename: 'DSC_0195.jpg',
            description: 'Fellowship and bonding on the boat',
            tags: ['fellowship', 'bonding', 'boat', 'community']
          }
        ]
      }
    ]
  },
  {
    year: '2016',
    totalEvents: 2,
    totalImages: 8,
    events: [
      {
        id: 'antonian_festive_celebration_2016',
        name: 'Antonian Festive Celebration 2016',
        year: '2016',
        date: '2016-12-15',
        location: 'Doha, Qatar',
        description: 'Annual festive celebration bringing together the Antonian community in Qatar.',
        category: 'Social',
        attendees: 65,
        folderPath: 'src/assets/images/event_images/2016/Antonian_Festive_Celebration_-_2016',
        images: [
          {
            url: '/images/event_images/2016/Antonian_Festive_Celebration_-_2016/festive_celebration_1.jpg',
            title: 'Antonian Festive Celebration',
            filename: 'festive_celebration_1.jpg',
            description: 'Annual festive celebration of the Antonian community',
            tags: ['festive', 'celebration', 'community', 'social']
          },
          {
            url: '/images/event_images/2016/Antonian_Festive_Celebration_-_2016/festive_celebration_2.jpg',
            title: 'Community Gathering',
            filename: 'festive_celebration_2.jpg',
            description: 'Community members celebrating together',
            tags: ['community', 'gathering', 'celebration', 'unity']
          },
          {
            url: '/images/event_images/2016/Antonian_Festive_Celebration_-_2016/festive_celebration_3.jpg',
            title: 'Festive Activities',
            filename: 'festive_celebration_3.jpg',
            description: 'Various festive activities and entertainment',
            tags: ['activities', 'entertainment', 'festive', 'fun']
          },
          {
            url: '/images/event_images/2016/Antonian_Festive_Celebration_-_2016/festive_celebration_4.jpg',
            title: 'Group Photo',
            filename: 'festive_celebration_4.jpg',
            description: 'Group photo of celebration attendees',
            tags: ['group photo', 'attendees', 'celebration', 'community']
          }
        ]
      },
      {
        id: 'sackoba_q_big_day_out_2016',
        name: 'SACKOBA Q Big Day Out 2016',
        year: '2016',
        date: '2016-03-25',
        location: 'Outdoor Venue, Qatar',
        description: 'Annual outdoor family day with activities, games, and entertainment for all ages.',
        category: 'Social',
        attendees: 95,
        folderPath: 'src/assets/images/event_images/2016/SACKOBA_Q_Big_Day_Out_2016',
        images: [
          {
            url: '/images/event_images/2016/SACKOBA_Q_Big_Day_Out_2016/big_day_out_1.jpg',
            title: 'SACKOBA Q Big Day Out',
            filename: 'big_day_out_1.jpg',
            description: 'Annual outdoor family day event',
            tags: ['outdoor', 'family', 'day out', 'activities']
          },
          {
            url: '/images/event_images/2016/SACKOBA_Q_Big_Day_Out_2016/big_day_out_2.jpg',
            title: 'Family Activities',
            filename: 'big_day_out_2.jpg',
            description: 'Families enjoying outdoor activities',
            tags: ['family', 'activities', 'outdoor', 'fun']
          },
          {
            url: '/images/event_images/2016/SACKOBA_Q_Big_Day_Out_2016/big_day_out_3.jpg',
            title: 'Games and Entertainment',
            filename: 'big_day_out_3.jpg',
            description: 'Games and entertainment for all ages',
            tags: ['games', 'entertainment', 'all ages', 'fun']
          },
          {
            url: '/images/event_images/2016/SACKOBA_Q_Big_Day_Out_2016/big_day_out_4.jpg',
            title: 'Community Picnic',
            filename: 'big_day_out_4.jpg',
            description: 'Community picnic and outdoor dining',
            tags: ['picnic', 'outdoor dining', 'community', 'social']
          }
        ]
      }
    ]
  },
  {
    year: '2015',
    totalEvents: 5,
    totalImages: 50,
    events: [
      {
        id: 'feast_of_st_anthony_padua_2015',
        name: 'Feast of St Anthony of Padua 2015',
        year: '2015',
        date: '2015-06-13',
        location: 'Church and Community Center, Doha',
        description: 'Annual celebration of the Feast of St Anthony of Padua with religious ceremonies, community gathering, and fellowship meal.',
        category: 'Religious',
        attendees: 120,
        folderPath: 'src/assets/images/event_images/2015/Feast_of_St.Anthony_of_Padua_2015',
        images: [
          {
            url: '/images/event_images/2015/Feast_of_St.Anthony_of_Padua_2015/Saint_Anthony_holding_child_statue_with_candles_680_X_1024.JPG',
            title: 'Saint Anthony Statue with Candles',
            filename: 'Saint_Anthony_holding_child_statue_with_candles_680_X_1024.JPG',
            description: 'Beautiful statue of Saint Anthony holding child with candles',
            tags: ['saint anthony', 'statue', 'candles', 'religious']
          },
          {
            url: '/images/event_images/2015/Feast_of_St.Anthony_of_Padua_2015/Church_Service_with_Priest_and_Altar_Servers_1024_X_680.JPG',
            title: 'Church Service with Priest and Altar Servers',
            filename: 'Church_Service_with_Priest_and_Altar_Servers_1024_X_680.JPG',
            description: 'Religious service with priest and altar servers',
            tags: ['church', 'service', 'priest', 'altar servers']
          },
          {
            url: '/images/event_images/2015/Feast_of_St.Anthony_of_Padua_2015/Church_Congregation_Attending_Service_1024_X_680.JPG',
            title: 'Church Congregation Attending Service',
            filename: 'Church_Congregation_Attending_Service_1024_X_680.JPG',
            description: 'Congregation attending the religious service',
            tags: ['congregation', 'service', 'church', 'worship']
          },
          {
            url: '/images/event_images/2015/Feast_of_St.Anthony_of_Padua_2015/Church_Group_Photo_1024_X_680.JPG',
            title: 'Church Group Photo',
            filename: 'Church_Group_Photo_1024_X_680.JPG',
            description: 'Group photo of church community members',
            tags: ['group photo', 'church', 'community', 'members']
          },
          {
            url: '/images/event_images/2015/Feast_of_St.Anthony_of_Padua_2015/Man_speaking_at_church_podium_680_X_1024.JPG',
            title: 'Speaker at Church Podium',
            filename: 'Man_speaking_at_church_podium_680_X_1024.JPG',
            description: 'Community member speaking at church podium',
            tags: ['speaker', 'podium', 'church', 'address']
          },
          {
            url: '/images/event_images/2015/Feast_of_St.Anthony_of_Padua_2015/People_lined_up_for_food_and_water_1024_X_680.JPG',
            title: 'Community Food Distribution',
            filename: 'People_lined_up_for_food_and_water_1024_X_680.JPG',
            description: 'Community members lined up for food distribution',
            tags: ['food', 'distribution', 'community', 'service']
          },
          {
            url: '/images/event_images/2015/Feast_of_St.Anthony_of_Padua_2015/Men_at_restaurant_table_eating_meal_1024_X_680.JPG',
            title: 'Community Fellowship Meal',
            filename: 'Men_at_restaurant_table_eating_meal_1024_X_680.JPG',
            description: 'Community members enjoying fellowship meal',
            tags: ['fellowship', 'meal', 'community', 'dining']
          },
          {
            url: '/images/event_images/2015/Feast_of_St.Anthony_of_Padua_2015/Group_of_Men_in_Business_Attire_1024_X_680.JPG',
            title: 'Community Leaders in Business Attire',
            filename: 'Group_of_Men_in_Business_Attire_1024_X_680.JPG',
            description: 'Community leaders in formal business attire',
            tags: ['leaders', 'business attire', 'formal', 'community']
          }
        ]
      },
      {
        id: 'iftar_2015',
        name: 'IFTAR 2015',
        year: '2015',
        date: '2015-07-10',
        location: 'Community Tent, Doha',
        description: 'Community Iftar celebration with food distribution, family gathering, and breaking fast together during Ramadan.',
        category: 'Religious',
        attendees: 200,
        folderPath: 'src/assets/images/event_images/2015/IFTAR_2015',
        images: [
          {
            url: '/images/event_images/2015/IFTAR_2015/Large_Group_Photo_Under_Tent_Lighting_4928_X_3264.JPG',
            title: 'Large Group Photo Under Tent',
            filename: 'Large_Group_Photo_Under_Tent_Lighting_4928_X_3264.JPG',
            description: 'Large group photo of Iftar participants under tent lighting',
            tags: ['group photo', 'tent', 'iftar', 'community']
          },
          {
            url: '/images/event_images/2015/IFTAR_2015/Large_Group_of_People_Posing_Indoors_4928_X_3264.JPG',
            title: 'Large Group of People Posing',
            filename: 'Large_Group_of_People_Posing_Indoors_4928_X_3264.JPG',
            description: 'Large group of people posing for Iftar celebration',
            tags: ['group photo', 'iftar', 'celebration', 'community']
          },
          {
            url: '/images/event_images/2015/IFTAR_2015/Group_of_friends_eating_on_floor_with_boxes_4928_X_3264.JPG',
            title: 'Friends Eating Together on Floor',
            filename: 'Group_of_friends_eating_on_floor_with_boxes_4928_X_3264.JPG',
            description: 'Group of friends eating together on floor during Iftar',
            tags: ['friends', 'eating', 'floor', 'iftar']
          },
          {
            url: '/images/event_images/2015/IFTAR_2015/Large_group_of_people_eating_in_a_tent_1024_X_680.jpg',
            title: 'Community Eating in Tent',
            filename: 'Large_group_of_people_eating_in_a_tent_1024_X_680.jpg',
            description: 'Large group of people eating together in tent',
            tags: ['community', 'eating', 'tent', 'iftar']
          },
          {
            url: '/images/event_images/2015/IFTAR_2015/Group_of_people_and_children_in_tent_4928_X_3264.JPG',
            title: 'Families with Children in Tent',
            filename: 'Group_of_people_and_children_in_tent_4928_X_3264.JPG',
            description: 'Families with children gathered in tent for Iftar',
            tags: ['families', 'children', 'tent', 'iftar']
          },
          {
            url: '/images/event_images/2015/IFTAR_2015/Crowd_of_people_receiving_handouts_indoors_4928_X_3264.JPG',
            title: 'Food Distribution to Community',
            filename: 'Crowd_of_people_receiving_handouts_indoors_4928_X_3264.JPG',
            description: 'Crowd of people receiving food handouts',
            tags: ['food distribution', 'community', 'charity', 'iftar']
          },
          {
            url: '/images/event_images/2015/IFTAR_2015/People_Unloading_Boxes_from_Truck_1024_X_680.jpg',
            title: 'Volunteers Unloading Food Supplies',
            filename: 'People_Unloading_Boxes_from_Truck_1024_X_680.jpg',
            description: 'Volunteers unloading food supply boxes from truck',
            tags: ['volunteers', 'food supplies', 'truck', 'preparation']
          },
          {
            url: '/images/event_images/2015/IFTAR_2015/Workers_bagging_food_donations_in_containers_1024_X_680.jpg',
            title: 'Food Preparation and Packaging',
            filename: 'Workers_bagging_food_donations_in_containers_1024_X_680.jpg',
            description: 'Workers preparing and packaging food donations',
            tags: ['food preparation', 'packaging', 'donations', 'volunteers']
          }
        ]
      },
      {
        id: 'lions_cricket_7s_2015',
        name: 'Lions Cricket 7s 2015',
        year: '2015',
        date: '2015-11-20',
        location: 'Cricket Ground, Qatar',
        description: 'Lions Cricket 7s tournament featuring competitive cricket matches and community participation.',
        category: 'Sports',
        attendees: 80,
        folderPath: 'src/assets/images/event_images/2015/Lions_Cricket_7s_2015',
        images: [
          {
            url: '/images/event_images/2015/Lions_Cricket_7s_2015/DSC_0455.JPG',
            title: 'Cricket Tournament Opening',
            filename: 'DSC_0455.JPG',
            description: 'Opening ceremony of Lions Cricket 7s tournament',
            tags: ['cricket', 'tournament', 'opening', 'sports']
          },
          {
            url: '/images/event_images/2015/Lions_Cricket_7s_2015/DSC_0482.JPG',
            title: 'Cricket Match Action',
            filename: 'DSC_0482.JPG',
            description: 'Action shots from cricket matches',
            tags: ['cricket', 'action', 'match', 'sports']
          },
          {
            url: '/images/event_images/2015/Lions_Cricket_7s_2015/DSC_0500.JPG',
            title: 'Cricket Competition',
            filename: 'DSC_0500.JPG',
            description: 'Competitive cricket gameplay',
            tags: ['cricket', 'competition', 'gameplay', 'sports']
          },
          {
            url: '/images/event_images/2015/Lions_Cricket_7s_2015/Man_celebrating_victory_at_cricket_game_4928_X_3264.JPG',
            title: 'Victory Celebration',
            filename: 'Man_celebrating_victory_at_cricket_game_4928_X_3264.JPG',
            description: 'Player celebrating victory at cricket game',
            tags: ['victory', 'celebration', 'cricket', 'achievement']
          },
          {
            url: '/images/event_images/2015/Lions_Cricket_7s_2015/Men_playing_ball_game_at_night_outside_4928_X_3264.JPG',
            title: 'Night Cricket Game',
            filename: 'Men_playing_ball_game_at_night_outside_4928_X_3264.JPG',
            description: 'Men playing cricket game at night outdoors',
            tags: ['night', 'cricket', 'outdoor', 'sports']
          },
          {
            url: '/images/event_images/2015/Lions_Cricket_7s_2015/Three_men_outdoor_cricket_party_4928_X_3264.JPG',
            title: 'Cricket Tournament Participants',
            filename: 'Three_men_outdoor_cricket_party_4928_X_3264.JPG',
            description: 'Three men at outdoor cricket tournament',
            tags: ['participants', 'cricket', 'outdoor', 'tournament']
          }
        ]
      },
      {
        id: 'lions_rugby_7s_2015',
        name: 'Lions Rugby 7s 2015',
        year: '2015',
        date: '2015-12-04',
        location: 'Rugby Field, Qatar',
        description: 'Lions Rugby 7s tournament with competitive rugby matches, team participation, and community support.',
        category: 'Sports',
        attendees: 100,
        folderPath: 'src/assets/images/event_images/2015/Lions_Rugby_7s_2015',
        images: [
          {
            url: '/images/event_images/2015/Lions_Rugby_7s_2015/Rugby_players_running_with_ball_on_field_4928_X_3264.JPG',
            title: 'Rugby Players Running with Ball',
            filename: 'Rugby_players_running_with_ball_on_field_4928_X_3264.JPG',
            description: 'Rugby players running with ball during match',
            tags: ['rugby', 'players', 'running', 'ball']
          },
          {
            url: '/images/event_images/2015/Lions_Rugby_7s_2015/Rugby_Team_Photo_at_Night_4928_X_3264.jpg',
            title: 'Rugby Team Photo at Night',
            filename: 'Rugby_Team_Photo_at_Night_4928_X_3264.jpg',
            description: 'Team photo taken at night during rugby tournament',
            tags: ['team photo', 'rugby', 'night', 'tournament']
          },
          {
            url: '/images/event_images/2015/Lions_Rugby_7s_2015/Soccer_team_photo_SACK_OBA_QATAR_4928_X_3264.JPG',
            title: 'SACKOBA Qatar Team Photo',
            filename: 'Soccer_team_photo_SACK_OBA_QATAR_4928_X_3264.JPG',
            description: 'SACKOBA Qatar team photo at rugby tournament',
            tags: ['team photo', 'SACKOBA', 'Qatar', 'rugby']
          },
          {
            url: '/images/event_images/2015/Lions_Rugby_7s_2015/Rugby_players_scrum_for_the_ball_on_field_4928_X_3264.jpg',
            title: 'Rugby Scrum Action',
            filename: 'Rugby_players_scrum_for_the_ball_on_field_4928_X_3264.jpg',
            description: 'Rugby players in scrum formation competing for ball',
            tags: ['rugby', 'scrum', 'action', 'competition']
          },
          {
            url: '/images/event_images/2015/Lions_Rugby_7s_2015/Team_Huddle_with_Old_Anandians_Flag_in_Qatar_4928_X_3264.JPG',
            title: 'Team Huddle with Old Anandians Flag',
            filename: 'Team_Huddle_with_Old_Anandians_Flag_in_Qatar_4928_X_3264.JPG',
            description: 'Team huddle with Old Anandians flag in Qatar',
            tags: ['team huddle', 'flag', 'Old Anandians', 'Qatar']
          },
          {
            url: '/images/event_images/2015/Lions_Rugby_7s_2015/Three_Men_Shaking_Hands_at_Night_Field_4928_X_3264.JPG',
            title: 'Sportsmanship Handshake',
            filename: 'Three_Men_Shaking_Hands_at_Night_Field_4928_X_3264.JPG',
            description: 'Three men shaking hands showing sportsmanship',
            tags: ['sportsmanship', 'handshake', 'rugby', 'respect']
          }
        ]
      },
      {
        id: 'special_general_meeting_2015',
        name: 'Special General Meeting 2015',
        year: '2015',
        date: '2015-09-15',
        location: 'Restaurant, Doha',
        description: 'Special General Meeting of SACKOBA Qatar with formal discussions, networking, and community fellowship.',
        category: 'Academic',
        attendees: 60,
        folderPath: 'src/assets/images/event_images/2015/Special_General_Meeting_2015',
        images: [
          {
            url: '/images/event_images/2015/Special_General_Meeting_2015/Group_of_Men_Posing_Indoors_2048_X_1356.jpg',
            title: 'Group of Men Posing at Meeting',
            filename: 'Group_of_Men_Posing_Indoors_2048_X_1356.jpg',
            description: 'Group of men posing indoors at the meeting',
            tags: ['group photo', 'meeting', 'indoor', 'formal']
          },
          {
            url: '/images/event_images/2015/Special_General_Meeting_2015/Group_of_Men_at_Restaurant_Table_2048_X_1356.jpg',
            title: 'Meeting at Restaurant Table',
            filename: 'Group_of_Men_at_Restaurant_Table_2048_X_1356.jpg',
            description: 'Group of men having meeting at restaurant table',
            tags: ['meeting', 'restaurant', 'table', 'discussion']
          },
          {
            url: '/images/event_images/2015/Special_General_Meeting_2015/Men_Chatting_Smiling_Meeting_2048_X_1356.jpg',
            title: 'Networking and Fellowship',
            filename: 'Men_Chatting_Smiling_Meeting_2048_X_1356.jpg',
            description: 'Men chatting and smiling during meeting',
            tags: ['networking', 'fellowship', 'chatting', 'meeting']
          },
          {
            url: '/images/event_images/2015/Special_General_Meeting_2015/Buffet_Food_Line_with_Plates_and_Servers_1356_X_2048.jpg',
            title: 'Buffet Food Service',
            filename: 'Buffet_Food_Line_with_Plates_and_Servers_1356_X_2048.jpg',
            description: 'Buffet food line with plates and servers',
            tags: ['buffet', 'food', 'service', 'dining']
          },
          {
            url: '/images/event_images/2015/Special_General_Meeting_2015/Three_Men_Smiling_Group_Photo_2048_X_1356.jpg',
            title: 'Three Men Group Photo',
            filename: 'Three_Men_Smiling_Group_Photo_2048_X_1356.jpg',
            description: 'Three men smiling in group photo',
            tags: ['group photo', 'smiling', 'three men', 'meeting']
          },
          {
            url: '/images/event_images/2015/Special_General_Meeting_2015/People_at_a_restaurant_table_having_lunch_2048_X_1356.jpg',
            title: 'Lunch Meeting',
            filename: 'People_at_a_restaurant_table_having_lunch_2048_X_1356.jpg',
            description: 'People having lunch meeting at restaurant table',
            tags: ['lunch', 'meeting', 'restaurant', 'dining']
          }
        ]
      }
    ]
  },
  {
    year: '2013',
    totalEvents: 1,
    totalImages: 12,
    events: [
      {
        id: 'trinity_beach_carnival_2013',
        name: 'Trinity Beach Carnival 2013',
        year: '2013',
        date: '2013-04-26',
        location: 'Beach Resort, Qatar',
        description: 'Trinity Beach Carnival featuring beach rugby, cricket, volleyball, and various beach sports with awards ceremony.',
        category: 'Sports',
        attendees: 150,
        folderPath: 'src/assets/images/event_images/2013/Trinity_Beach_Carnival_2013',
        images: [
          {
            url: '/images/event_images/2013/Trinity_Beach_Carnival_2013/Beach_Rugby_Kings_Award_Ceremony_2013_600_X_450.JPG',
            title: 'Beach Rugby Kings Award Ceremony 2013',
            filename: 'Beach_Rugby_Kings_Award_Ceremony_2013_600_X_450.JPG',
            description: 'Award ceremony for Beach Rugby Kings tournament winners',
            tags: ['beach rugby', 'awards', 'ceremony', 'winners']
          },
          {
            url: '/images/event_images/2013/Trinity_Beach_Carnival_2013/Beach_Rugby_Game_On_Sandy_Field_600_X_450.jpg',
            title: 'Beach Rugby Game on Sandy Field',
            filename: 'Beach_Rugby_Game_On_Sandy_Field_600_X_450.jpg',
            description: 'Competitive beach rugby game on sandy field',
            tags: ['beach rugby', 'game', 'sand', 'competition']
          },
          {
            url: '/images/event_images/2013/Trinity_Beach_Carnival_2013/Beach_Kabaddi_game_players_on_sand_600_X_450.jpg',
            title: 'Beach Kabaddi Game',
            filename: 'Beach_Kabaddi_game_players_on_sand_600_X_450.jpg',
            description: 'Players competing in beach kabaddi on sand',
            tags: ['kabaddi', 'beach', 'sand', 'traditional game']
          },
          {
            url: '/images/event_images/2013/Trinity_Beach_Carnival_2013/Beach_Cricket_Players_Resting_Under_Tent_600_X_450.JPG',
            title: 'Cricket Players Resting Under Tent',
            filename: 'Beach_Cricket_Players_Resting_Under_Tent_600_X_450.JPG',
            description: 'Cricket players taking rest under tent during beach carnival',
            tags: ['cricket', 'players', 'tent', 'rest']
          },
          {
            url: '/images/event_images/2013/Trinity_Beach_Carnival_2013/Beach_volleyball_spectators_under_tents_600_X_450.jpg',
            title: 'Beach Volleyball Spectators',
            filename: 'Beach_volleyball_spectators_under_tents_600_X_450.jpg',
            description: 'Spectators watching beach volleyball under tents',
            tags: ['volleyball', 'spectators', 'tents', 'beach']
          },
          {
            url: '/images/event_images/2013/Trinity_Beach_Carnival_2013/Beach_rugby_team_photo_at_St_Regis_600_X_450.JPG',
            title: 'Beach Rugby Team Photo at St Regis',
            filename: 'Beach_rugby_team_photo_at_St_Regis_600_X_450.JPG',
            description: 'Beach rugby team group photo at St Regis resort',
            tags: ['team photo', 'beach rugby', 'St Regis', 'group']
          },
          {
            url: '/images/event_images/2013/Trinity_Beach_Carnival_2013/Red_Bull_Event_Tent_Beach_Sand_600_X_377.jpg',
            title: 'Red Bull Event Tent on Beach',
            filename: 'Red_Bull_Event_Tent_Beach_Sand_600_X_377.jpg',
            description: 'Red Bull sponsored event tent on beach sand',
            tags: ['Red Bull', 'tent', 'beach', 'sponsor']
          },
          {
            url: '/images/event_images/2013/Trinity_Beach_Carnival_2013/Trinity_Rugby_Jersey_with_Lion_Mascot_600_X_782.jpg',
            title: 'Trinity Rugby Jersey with Lion Mascot',
            filename: 'Trinity_Rugby_Jersey_with_Lion_Mascot_600_X_782.jpg',
            description: 'Trinity rugby team jersey featuring lion mascot',
            tags: ['jersey', 'trinity', 'lion', 'mascot']
          },
          {
            url: '/images/event_images/2013/Trinity_Beach_Carnival_2013/Group_of_six_men_on_beach_600_X_450.JPG',
            title: 'Group of Six Men on Beach',
            filename: 'Group_of_six_men_on_beach_600_X_450.JPG',
            description: 'Group of six men enjoying beach carnival',
            tags: ['group photo', 'men', 'beach', 'carnival']
          },
          {
            url: '/images/event_images/2013/Trinity_Beach_Carnival_2013/Team_in_Jerseys_on_Beach_600_X_450.jpg',
            title: 'Team in Jerseys on Beach',
            filename: 'Team_in_Jerseys_on_Beach_600_X_450.jpg',
            description: 'Sports team wearing jerseys on beach',
            tags: ['team', 'jerseys', 'beach', 'sports']
          },
          {
            url: '/images/event_images/2013/Trinity_Beach_Carnival_2013/Rugby_team_wins_beach_rugby_kings_trophy_600_X_450.JPG',
            title: 'Rugby Team Wins Beach Rugby Kings Trophy',
            filename: 'Rugby_team_wins_beach_rugby_kings_trophy_600_X_450.JPG',
            description: 'Rugby team celebrating victory with Beach Rugby Kings trophy',
            tags: ['rugby', 'trophy', 'victory', 'champions']
          },
          {
            url: '/images/event_images/2013/Trinity_Beach_Carnival_2013/Men_relaxing_under_beach_canopies_600_X_450.JPG',
            title: 'Men Relaxing Under Beach Canopies',
            filename: 'Men_relaxing_under_beach_canopies_600_X_450.JPG',
            description: 'Men relaxing and socializing under beach canopies',
            tags: ['relaxing', 'canopies', 'beach', 'socializing']
          }
        ]
      }
    ]
  },
  {
    year: '2012',
    totalEvents: 6,
    totalImages: 60,
    events: [
      {
        id: 'boat_2012',
        name: 'Boat Trip 2012',
        year: '2012',
        date: '2012-05-18',
        location: 'Qatar Waters',
        description: 'Community boat trip with music, food, and fellowship on Qatar waters with city skyline views.',
        category: 'Social',
        attendees: 80,
        folderPath: 'src/assets/images/event_images/2012/Boat_2012',
        images: [
          {
            url: '/images/event_images/2012/Boat_2012/St__Anthonys_College_Old_Boys_Association_Qatar_2048_X_1536.jpg',
            title: 'St Anthony\'s College Old Boys Association Qatar',
            filename: 'St__Anthonys_College_Old_Boys_Association_Qatar_2048_X_1536.jpg',
            description: 'Official group photo of St Anthony\'s College Old Boys Association Qatar',
            tags: ['group photo', 'old boys', 'association', 'official']
          },
          {
            url: '/images/event_images/2012/Boat_2012/Group_of_people_on_a_boat_by_sea_2048_X_1536.jpg',
            title: 'Group of People on Boat by Sea',
            filename: 'Group_of_people_on_a_boat_by_sea_2048_X_1536.jpg',
            description: 'Community members enjoying boat trip by the sea',
            tags: ['boat', 'sea', 'community', 'trip']
          },
          {
            url: '/images/event_images/2012/Boat_2012/People_on_Boat_at_Dusk_with_City_Skyline_600_X_450.jpg',
            title: 'Boat Trip at Dusk with City Skyline',
            filename: 'People_on_Boat_at_Dusk_with_City_Skyline_600_X_450.jpg',
            description: 'People on boat at dusk with beautiful city skyline view',
            tags: ['boat', 'dusk', 'skyline', 'scenic']
          },
          {
            url: '/images/event_images/2012/Boat_2012/Boat_party_with_guitar_and_Qatar_flag_600_X_450.jpg',
            title: 'Boat Party with Guitar and Qatar Flag',
            filename: 'Boat_party_with_guitar_and_Qatar_flag_600_X_450.jpg',
            description: 'Boat party featuring music with guitar and Qatar flag',
            tags: ['party', 'guitar', 'Qatar flag', 'music']
          },
          {
            url: '/images/event_images/2012/Boat_2012/People_with_sparklers_on_boat_at_night_600_X_450.jpg',
            title: 'Sparklers on Boat at Night',
            filename: 'People_with_sparklers_on_boat_at_night_600_X_450.jpg',
            description: 'People celebrating with sparklers on boat at night',
            tags: ['sparklers', 'night', 'celebration', 'boat']
          },
          {
            url: '/images/event_images/2012/Boat_2012/People_eating_on_a_boat_trip_600_X_450.jpg',
            title: 'Dining on Boat Trip',
            filename: 'People_eating_on_a_boat_trip_600_X_450.jpg',
            description: 'Community members enjoying meal during boat trip',
            tags: ['dining', 'boat trip', 'meal', 'community']
          },
          {
            url: '/images/event_images/2012/Boat_2012/Three_Men_on_Boat_Overlooking_City_Skyline_600_X_450.jpg',
            title: 'Three Men Overlooking City Skyline',
            filename: 'Three_Men_on_Boat_Overlooking_City_Skyline_600_X_450.jpg',
            description: 'Three men on boat enjoying city skyline view',
            tags: ['three men', 'skyline', 'boat', 'view']
          },
          {
            url: '/images/event_images/2012/Boat_2012/Man_speaking_into_microphone_at_party_600_X_338.jpg',
            title: 'Speaker at Boat Party',
            filename: 'Man_speaking_into_microphone_at_party_600_X_338.jpg',
            description: 'Man speaking into microphone at boat party',
            tags: ['speaker', 'microphone', 'party', 'address']
          },
          {
            url: '/images/event_images/2012/Boat_2012/Kids_celebrating_with_sparklers_at_night_600_X_450.jpg',
            title: 'Kids Celebrating with Sparklers',
            filename: 'Kids_celebrating_with_sparklers_at_night_600_X_450.jpg',
            description: 'Children celebrating with sparklers at night on boat',
            tags: ['kids', 'sparklers', 'celebration', 'night']
          },
          {
            url: '/images/event_images/2012/Boat_2012/Women_on_a_boat_trip_600_X_450.jpg',
            title: 'Women on Boat Trip',
            filename: 'Women_on_a_boat_trip_600_X_450.jpg',
            description: 'Women enjoying the community boat trip',
            tags: ['women', 'boat trip', 'community', 'enjoyment']
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
