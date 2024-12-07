export interface ExcoMember {
  name: string;
  role: string;
  image?: string;
}

export interface ExcoYear {
  year: string;
  members: {
    seating: ExcoMember[];
    standing: ExcoMember[];
    absentees?: ExcoMember[];
  };
}

export interface NewsItem {
  title: string;
  date: string;
  content: string;
  link?: string;
}

export interface VideoItem {
  title: string;
  duration: string;
  description: string;
  url?: string;
  thumbnail?: string;
}
