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
