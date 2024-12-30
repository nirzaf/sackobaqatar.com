export interface ExcoMember {
  name: string;
  position: string;
}

export interface ExcoMembers {
  seating: ExcoMember[];
  standing: ExcoMember[];
}

export interface ExcoYear {
  year: string;
  image: string;
  seatedMembers: ExcoMember[];
  standingMembers: ExcoMember[];
  absentees?: ExcoMember[];
  note?: string;
}

export interface MemberCardProps {
  member: ExcoMember;
  index: number;
}

export interface MemberSectionProps {
  title: string;
  members: ExcoMember[];
}
