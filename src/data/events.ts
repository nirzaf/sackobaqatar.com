interface EventImage {
  url: string;
  title: string;
}

export interface Event {
  id: string;
  year: string;
  name: string;
  images: EventImage[];
  date: string;
  description?: string;
}

// Helper function to format event name from filename
export function formatEventName(filename: string): string {
  return filename
    .replace(/_/g, ' ')
    .replace(/\.md$/, '')
    .replace(/\s+\d{4}$/, '')
    .replace(/\s+-\s+\d{4}/, '');
}

// Helper function to get event year from filename
export function getEventYear(filename: string): string {
  const match = filename.match(/\d{4}/);
  return match ? match[0] : '';
}

// Helper function to generate event ID
export function generateEventId(name: string, year: string): string {
  return `${name.toLowerCase().replace(/\s+/g, '_')}_${year}`;
}

export const events: Event[] = [
  // 2010 Events
  {
    id: "al_ishan_2010",
    year: "2010",
    name: "Al Ishan Get Together",
    date: "2010-12-15",
    images: [
      {
        url: "https://ik.imagekit.io/sackoba/events/2010/AL_ISHAN_GET_TO_GETHER_2010/Boy_Receiving_Gift_at_Ceremony_810_X_540.JPG",
        title: "Boy Receiving Gift at Ceremony"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2010/AL_ISHAN_GET_TO_GETHER_2010/Man_Speaking_At_Event_With_Microphone_810_X_540.JPG",
        title: "Man Speaking At Event"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2010/AL_ISHAN_GET_TO_GETHER_2010/Priest_presents_gift_to_boy_held_by_man_810_X_540.JPG",
        title: "Priest Presents Gift"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2010/AL_ISHAN_GET_TO_GETHER_2010/Three_men_at_round_table_event_810_X_540.JPG",
        title: "Three Men at Round Table"
      }
    ],
    description: "A memorable gathering featuring award ceremonies, speeches, and a festive dinner"
  },
  {
    id: "al_shamal_picnic_2010",
    year: "2010",
    name: "Al Shamal Family Picnic",
    date: "2010-11-20",
    images: [
      {
        url: "https://ik.imagekit.io/sackoba/events/2010/AL_SHAMAL_FAMILY_PICNIC_2010/Beach_barbecue_group_of_men_at_the_coast_720_X_540.jpg",
        title: "Beach Barbecue Group"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2010/AL_SHAMAL_FAMILY_PICNIC_2010/Beach_Team_Building_Activity_720_X_540.jpg",
        title: "Team Building Activity"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2010/AL_SHAMAL_FAMILY_PICNIC_2010/Beach_tug_of_war_competition_720_X_540.jpg",
        title: "Tug of War Competition"
      }
    ],
    description: "Fun-filled family day at Al Shamal beach featuring barbecue, team building activities, and games"
  },
  {
    id: "inaugural_boat_trip_2010",
    year: "2010",
    name: "Inaugural Reunion Boat Trip",
    date: "2010-10-10",
    images: [
      {
        url: "https://ik.imagekit.io/sackoba/events/2010/INAUGURAL_REUNION_BOAT_TRIP_2010/Group_of_Men_on_Boat_640_X_480.jpg",
        title: "Group on Boat"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2010/INAUGURAL_REUNION_BOAT_TRIP_2010/Buffet_lunch_on_a_boat_640_X_480.jpg",
        title: "Buffet Lunch"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2010/INAUGURAL_REUNION_BOAT_TRIP_2010/Group_of_People_on_Boat_at_Night_720_X_540.jpg",
        title: "Evening Gathering"
      }
    ],
    description: "Special boat trip reunion featuring buffet lunch and evening entertainment"
  },
  // 2011 Events
  {
    id: "feast_st_anthony_2011",
    year: "2011",
    name: "Feast of St. Anthony and College Day Celebration",
    date: "2011-06-13",
    images: [
      {
        url: "https://ik.imagekit.io/sackoba/events/2011/FEAST_OF_ST_ANTHONY_AND_COLLEGE_DAY_CELEBRATION_2011/412841_10150496558607689_1206705829_o.jpg",
        title: "Feast Day Celebration"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2011/FEAST_OF_ST_ANTHONY_AND_COLLEGE_DAY_CELEBRATION_2011/Man_lighting_traditional_lamp_ceremony_1360_X_2048.jpg",
        title: "Traditional Lamp Lighting Ceremony"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2011/FEAST_OF_ST_ANTHONY_AND_COLLEGE_DAY_CELEBRATION_2011/Group_Photo_St_Anthonys_College_Old_Boys_Association_2048_X_1360.jpg",
        title: "Group Photo"
      }
    ],
    description: "Annual celebration combining St. Anthony's feast day with College Day festivities, featuring traditional ceremonies and awards"
  },
  {
    id: "ozee_7s_2011",
    year: "2011",
    name: "OZEE 7s Tournament",
    date: "2011-07-15",
    images: [
      {
        url: "https://ik.imagekit.io/sackoba/events/2011/OZEE_7S_2011/Cricket_field_with_people_and_floodlights_2592_X_1944.JPG",
        title: "Cricket Field Under Floodlights"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2011/OZEE_7S_2011/Cricket_Team_with_Lion_Shirts_and_Hats_2592_X_1944.JPG",
        title: "Cricket Team in Lion Shirts"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2011/OZEE_7S_2011/Team_Huddle_Hugging_Before_Game_2592_X_1944.JPG",
        title: "Team Huddle"
      }
    ],
    description: "Exciting sports tournament featuring cricket and rugby matches, team celebrations, and community spirit"
  },
  {
    id: "sackoba_centenary_2011",
    year: "2011",
    name: "SACKOBA Centenary Celebration",
    date: "2011-08-20",
    images: [
      {
        url: "https://ik.imagekit.io/sackoba/events/2011/SACKOBA_CENETARY_CELEBRATION_2011/20SACKOBA%20CENTENARY.jpg",
        title: "Centenary Celebration"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2011/SACKOBA_CENETARY_CELEBRATION_2011/Centenary_Cake_with_Plates_and_Cutlery_600_X_400.jpg",
        title: "Centenary Celebration Cake"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2011/SACKOBA_CENETARY_CELEBRATION_2011/People_dancing_at_St_Anthony_s_Old_Boys_Association_event_3168_X_2112.jpg",
        title: "Celebration Dancing"
      }
    ],
    description: "Historic celebration marking 100 years of SACKOBA, featuring traditional ceremonies and recognition of achievements"
  },
  {
    id: "agm_get_together_2011",
    year: "2011",
    name: "AGM & Get-Together",
    date: "2011-09-10",
    images: [
      {
        url: "https://ik.imagekit.io/sackoba/events/2011/AGM_&_GET-TOGETHER_2011-20201/Award_ceremony_event_with_balloons_and_flags_2048_X_1360.jpg",
        title: "Award Ceremony Event"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2011/AGM_&_GET-TOGETHER_2011-20201/Balloon_Decorated_Tables_for_Event_2048_X_1360.jpg",
        title: "Decorated Tables"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2011/AGM_&_GET-TOGETHER_2011-20201/Men_in_suits_at_event_with_balloons_2048_X_1360.jpg",
        title: "Event Gathering"
      }
    ],
    description: "Annual General Meeting combined with a social gathering for members"
  },
  {
    id: "qatar_general_meeting_2011",
    year: "2011",
    name: "SACKOBA Qatar General Meeting",
    date: "2011-10-05",
    images: [
      {
        url: "https://ik.imagekit.io/sackoba/events/2011/SACKOBA_QATAR_GENERAL_MEETING_2011/Four_Men_Posing_Sri_Lanka_Office_600_X_450.JPG",
        title: "Meeting Group Photo"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2011/SACKOBA_QATAR_GENERAL_MEETING_2011/Four_men_at_St_Anthony_s_College_Old_Boys_event_600_X_450.JPG",
        title: "Old Boys Event"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2011/SACKOBA_QATAR_GENERAL_MEETING_2011/Four_men_holding_plates_at_buffet_600_X_450.JPG",
        title: "Event Buffet"
      }
    ],
    description: "General meeting of SACKOBA Qatar members discussing organizational matters and future plans"
  },
  // 2012 Events
  {
    id: "college_day_2012",
    year: "2012",
    name: "College Day Celebration",
    date: "2012-06-13",
    images: [
      {
        url: "https://ik.imagekit.io/sackoba/events/2012/COLLEGE_DAY_CELEBRATION_2012/Man_giving_speech_at_podium_jpg_600_X_450.jpg",
        title: "Speech at Podium"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2012/COLLEGE_DAY_CELEBRATION_2012/Dual_floral_arrangements_with_red_roses_and_yellow_flowers_600_X_450.jpg",
        title: "Floral Arrangements"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2012/COLLEGE_DAY_CELEBRATION_2012/Group_eating_at_a_gathering_600_X_450.jpg",
        title: "Group Gathering"
      }
    ],
    description: "Annual College Day celebration featuring speeches, ceremonies, and community gatherings"
  },
  {
    id: "lions_cricket_2012",
    year: "2012",
    name: "Lions Cricket Tournament",
    date: "2012-07-20",
    images: [
      {
        url: "https://ik.imagekit.io/sackoba/events/2012/LIONS_CRICKET_TOURNAMENT_2012/Cricket_Team_Wins_With_Trophies_4272_X_2848.jpg",
        title: "Team Victory with Trophies"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2012/LIONS_CRICKET_TOURNAMENT_2012/Celebrating_team_with_flags_and_claps_600_X_450.jpg",
        title: "Team Celebration"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2012/LIONS_CRICKET_TOURNAMENT_2012/Cricket_team_victory_celebration_with_flags_600_X_400.jpg",
        title: "Victory Celebration"
      }
    ],
    description: "Annual cricket tournament featuring intense matches and spirited celebrations"
  },
  {
    id: "fuwairit_beach_2012",
    year: "2012",
    name: "Fuwairit Annual Beach Trip",
    date: "2012-08-15",
    images: [
      {
        url: "https://ik.imagekit.io/sackoba/events/2012/Fuwairit_Annual_Beach_Trip_2012/Beach_bonfire_gathering_at_night_600_X_400.jpg",
        title: "Beach Bonfire Gathering"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2012/Fuwairit_Annual_Beach_Trip_2012/Beach_Barbecue_with_Friends_600_X_400.jpg",
        title: "Beach Barbecue"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2012/Fuwairit_Annual_Beach_Trip_2012/St_Anthonys_College_Kandy_Banner_Bus_Tiki_Torch_Tent_600_X_400.jpg",
        title: "Beach Setup"
      }
    ],
    description: "Fun-filled beach trip featuring bonfire, barbecue, music, and entertainment"
  },
  {
    id: "lions_rugby_2012",
    year: "2012",
    name: "Lions Rugby 7s",
    date: "2012-09-10",
    images: [
      {
        url: "https://ik.imagekit.io/sackoba/events/2012/LIONS_RUGBY_7S_2012/Rugby_team_on_field_with_trophy_600_X_450.jpg",
        title: "Team with Trophy"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2012/LIONS_RUGBY_7S_2012/Rugby_match_action_shot_600_X_450.jpg",
        title: "Match Action"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2012/LIONS_RUGBY_7S_2012/Team_celebration_after_win_600_X_450.jpg",
        title: "Victory Celebration"
      }
    ],
    description: "Annual rugby tournament showcasing athletic excellence and team spirit"
  },
  {
    id: "ozee_7s_2012",
    year: "2012",
    name: "OZEE 7s Tournament",
    date: "2012-10-15",
    images: [
      {
        url: "https://ik.imagekit.io/sackoba/events/2012/OZEE_7S_2012/Team_photo_with_trophy_600_X_450.jpg",
        title: "Team Trophy Photo"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2012/OZEE_7S_2012/Match_in_progress_600_X_450.jpg",
        title: "Match Action"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2012/OZEE_7S_2012/Victory_celebration_600_X_450.jpg",
        title: "Victory Celebration"
      }
    ],
    description: "Exciting sports tournament featuring competitive matches and team spirit"
  },
  // 2014 Events
  {
    id: "college_day_2014",
    year: "2014",
    name: "College Day Celebration",
    date: "2014-01-01",
    images: [
      {
        url: "https://ik.imagekit.io/sackoba/events/2014/College_Day_Celebration_2014/Churchgoers_standing_at_mass_or_service_600_X_400.jpg",
        title: "Churchgoers standing at mass or service"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2014/College_Day_Celebration_2014/Group_of_Men_in_Church_Pews_600_X_400.jpg",
        title: "Group of Men in Church Pews"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2014/College_Day_Celebration_2014/Group_of_Men_in_Uniform_Shirts_and_Ties_600_X_400.jpg",
        title: "Group of Men in Uniform Shirts and Ties"
      }
    ],
    description: "Annual College Day Celebration bringing together students and faculty"
  },
  {
    id: "dark_horse_cricket_2014",
    year: "2014",
    name: "Dark Horse 6s Cricket Tournament",
    date: "2014-06-20",
    images: [
      {
        url: "https://ik.imagekit.io/sackoba/events/2014/Dark_Horse_6_s_Cricket_Tournament_-_2014/cricket_1.jpg",
        title: "Cricket Tournament 1"
      }
    ],
    description: "Exciting cricket tournament featuring 6-a-side matches"
  },
  {
    id: "dark_horse_bowling_2014",
    year: "2014",
    name: "Dark Horse Bowling Tournament",
    date: "2014-07-10",
    images: [
      {
        url: "https://ik.imagekit.io/sackoba/events/2014/Dark_Horse_Bowling_Tournament_2014/bowling_1.jpg",
        title: "Bowling Tournament 1"
      }
    ],
    description: "Annual bowling tournament organized by Dark Horse"
  },
  {
    id: "doha_lions_rugby_2014",
    year: "2014",
    name: "Doha Lions Touch Rugby 7s",
    date: "2014-08-15",
    images: [
      {
        url: "https://ik.imagekit.io/sackoba/events/2014/Doha_Lions_Touch_Rugby_7s_2014/rugby_1.jpg",
        title: "Rugby Tournament 1"
      }
    ],
    description: "Touch Rugby tournament featuring 7-a-side matches"
  },
  {
    id: "sackobaq_iftar_2014",
    year: "2014",
    name: "SACKOBAQ Iftar",
    date: "2014-07-25",
    images: [
      {
        url: "https://ik.imagekit.io/sackoba/events/2014/SACKOBAQ_Iftar_2014/iftar_1.jpg",
        title: "Iftar Gathering 1"
      }
    ],
    description: "Annual Iftar gathering during Ramadan"
  },
  // 2023 Events
  {
    id: '2023_annual_dinner',
    year: '2023',
    name: 'Annual Dinner',
    images: [
      {
        url: '/events/2023/images/annual_dinner_1.jpg',
        title: 'Annual Dinner 1'
      },
      {
        url: '/events/2023/images/annual_dinner_2.jpg',
        title: 'Annual Dinner 2'
      }
    ],
    date: '2023-12-15',
  },
  // 2014 Events
  {
    id: '2014_cricket_tournament',
    year: '2014',
    name: 'Dark Horse 6s Cricket Tournament',
    images: [
      {
        url: 'https://ik.imagekit.io/sackoba/events/2014/Dark_Horse_6_s_Cricket_Tournament_-_2014/Cricket_Team_Gathering_Night_Time_6000_X_4000.JPG?updatedAt=1734807365670',
        title: 'Cricket 1'
      },
      {
        url: 'https://ik.imagekit.io/sackoba/events/2014/Dark_Horse_6_s_Cricket_Tournament_-_2014/Antonian_Cricket_Team_Shirt_Sackoba_Qatar_Eagle_6000_X_4000.JPG?updatedAt=1734807296782',
        title: 'Cricket 2'
      }
    ],
    date: '2014-06-20',
  },
  {
    id: '2014_bowling_tournament',
    year: '2014',
    name: 'Dark Horse Bowling Tournament',
    images: [
      {
        url: 'https://ik.imagekit.io/sackoba/events/2014/Dark_Horse_Bowling_Tournament_2014/Four_Men_Smiling_Event_Crowd_600_X_400.JPG?updatedAt=1734807135444',
        title: 'Bowling 1'
      },
      {
        url: 'https://ik.imagekit.io/sackoba/events/2014/Dark_Horse_Bowling_Tournament_2014/Man_Watching_Bowling_Game_600_X_400.JPG?updatedAt=1734807137309',
        title: 'Bowling 2'
      }
    ],
    date: '2014-07-10',
  },
  {
    id: '2014_rugby',
    year: '2014',
    name: 'Doha Lions Touch Rugby 7s',
    images: [
      {
        url: '/events/2014/images/rugby_1.jpg',
        title: 'Rugby 1'
      },
      {
        url: '/events/2014/images/rugby_2.jpg',
        title: 'Rugby 2'
      }
    ],
    date: '2014-08-15',
  },
  {
    id: '2014_iftar',
    year: '2014',
    name: 'SACKOBAQ Iftar',
    images: [
      {
        url: '/events/2014/images/iftar_1.jpg',
        title: 'Iftar 1'
      },
      {
        url: '/events/2014/images/iftar_2.jpg',
        title: 'Iftar 2'
      }
    ],
    date: '2014-07-25',
  },
  {
    id: '2014_serendib_bowling',
    year: '2014',
    name: 'SERENDIB Bowling Tournament',
    images: [
      {
        url: '/events/2014/images/serendib_bowling_1.jpg',
        title: 'Serendib Bowling 1'
      },
      {
        url: '/events/2014/images/serendib_bowling_2.jpg',
        title: 'Serendib Bowling 2'
      }
    ],
    date: '2014-09-05',
  },
  {
    id: '2014_zahira_bowling',
    year: '2014',
    name: 'Zahira Bowling Tournament',
    images: [
      {
        url: '/events/2014/images/zahira_bowling_1.jpg',
        title: 'Zahira Bowling 1'
      },
      {
        url: '/events/2014/images/zahira_bowling_2.jpg',
        title: 'Zahira Bowling 2'
      }
    ],
    date: '2014-10-12',
  },
  // Add placeholder events for other years
  {
    id: '2022_cultural_night',
    year: '2022',
    name: 'Cultural Night',
    images: [
      {
        url: '/events/2022/images/cultural_night_1.jpg',
        title: 'Cultural Night 1'
      },
      {
        url: '/events/2022/images/cultural_night_2.jpg',
        title: 'Cultural Night 2'
      }
    ],
    date: '2022-12-10',
  },
  // Add more events for each year...
];
