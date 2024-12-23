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
  // 2023 Events
  {
    id: "agm_2023",
    year: "2023",
    name: "AGM 2023",
    date: "2023-12-15",
    images: [
      {
        url: "https://ik.imagekit.io/sackoba/events/2023/AGM_2023_SACKOBA_Qatar/Old_Boys_Association_Group_Photo_Qatar_2023.jpg",
        title: "AGM Group Photo"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2023/AGM_2023_SACKOBA_Qatar/St_Anthony_s_College_flag_cake_AGM_2023.jpg",
        title: "College Flag Cake"
      }
    ],
    description: "Annual General Meeting of SACKOBA Qatar"
  },
  {
    id: "college_day_2023",
    year: "2023",
    name: "College Day Celebrations",
    date: "2023-06-13",
    images: [
      {
        url: "https://ik.imagekit.io/sackoba/events/2023/SACKOBAQ_College_Day_Celebrations/Church_Service_Ceremony_at_St__Anthony_s_College.JPG",
        title: "College Day Ceremony"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2023/SACKOBAQ_College_Day_Celebrations/Priest_at_Altar_College_Day_Celebration_2023.JPG",
        title: "Priest at Altar"
      }
    ],
    description: "Annual celebration of College Day with special ceremonies and gatherings"
  },
  {
    id: "sinhala_tamil_new_year_2023",
    year: "2023",
    name: "Sinhala & Tamil New Year and Iftar",
    date: "2023-04-14",
    images: [
      {
        url: "https://ik.imagekit.io/sackoba/events/2023/Sinhala%20&%20Tamil%20New%20Year%20and%20Iftar%20Celebration%202023%20SACKOBA%20Qatar/St%20Anthonys%20College%20Old%20Boys%20Qatar%20Poster.jpg?updatedAt=1734955172648",
        title: "Traditional Kolam with Oil Lamp"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2023/Sinhala_&_Tamil_New_Year_and_Iftar_Celebration_2023_SACKOBA_Qatar/Couples_in_Traditional_Sri_Lankan_Attire.jpg",
        title: "Traditional Sri Lankan Attire"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2023/Sinhala_&_Tamil_New_Year_and_Iftar_Celebration_2023_SACKOBA_Qatar/Blindfolded_Man_Smashing_Hanging_Pots_Game.jpg",
        title: "Traditional New Year Games"
      }
    ],
    description: "Combined celebration of Sinhala & Tamil New Year with Iftar gathering"
  },
  // 2022 Events
  {
    id: "cultural_night_2022",
    year: "2022",
    name: "Cultural Night",
    date: "2022-12-10",
    images: [
      {
        url: "https://ik.imagekit.io/sackoba/events/2022/Aluth_Avurudu_Iftar_Celebration_2022/IMG_0487.jpg",
        title: "Cultural Performance"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2022/Aluth_Avurudu_Iftar_Celebration_2022/IMG_0500.jpg",
        title: "Cultural Night Celebration"
      }
    ],
    description: "A night celebrating Sri Lankan culture and traditions"
  },
  {
    id: "college_day_2022",
    year: "2022",
    name: "College Day & Feast of St. Anthony",
    date: "2022-06-13",
    images: [
      {
        url: "https://ik.imagekit.io/sackoba/events/2022/College_Day_and_Feast_of_St_Anthony_of_Padua_2022/WhatsApp%20Image%202022-06-10%20at%2010.51.25%20AM.jpeg",
        title: "College Day Celebration"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2022/College_Day_and_Feast_of_St_Anthony_of_Padua_2022/WhatsApp%20Image%202022-06-11%20at%204.25.53%20AM.jpeg",
        title: "St. Anthony Feast"
      }
    ],
    description: "Annual College Day celebration and feast of St. Anthony of Padua"
  },
  {
    id: "aluth_avurudu_iftar_2022",
    year: "2022",
    name: "Aluth Avurudu & Iftar Celebration",
    date: "2022-04-14",
    images: [
      {
        url: "https://ik.imagekit.io/sackoba/events/2022/Aluth_Avurudu_Iftar_Celebration_2022/IMG_0460.jpg",
        title: "Aluth Avurudu Celebration"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2022/Aluth_Avurudu_Iftar_Celebration_2022/IMG_0500.jpg",
        title: "Iftar Gathering"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2022/Aluth_Avurudu_Iftar_Celebration_2022/IMG_9212.jpg",
        title: "Traditional Games"
      }
    ],
    description: "Combined celebration of Sinhala & Tamil New Year with Iftar"
  },
  // 2021 Events
  {
    id: "sackoba_qatar_2021",
    year: "2021",
    name: "SACKOBA Qatar Annual Gathering",
    date: "2021-12-15",
    images: [
      {
        url: "https://ik.imagekit.io/sackoba/events/2021/SACKOBA_Qatar_2021/1.jpg",
        title: "Annual Gathering"
      },
      {
        url: "https://ik.imagekit.io/sackoba/events/2021/SACKOBA_Qatar_2021/3.jpg",
        title: "Group Photo"
      }
    ],
    description: "Annual gathering of SACKOBA Qatar members"
  },
  // 2012 Events
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
  // 2011 Events
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
  // 2010 Events
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
  }
];
