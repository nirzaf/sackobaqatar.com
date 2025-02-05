export interface ExcoMember {
  name: string;
  position: string;
}

export interface ExcoYear {
  year: string;
  image: string;
  seatedMembers: ExcoMember[];
  standingMembers: ExcoMember[];
  absentees?: ExcoMember[];
  note?: string;
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
