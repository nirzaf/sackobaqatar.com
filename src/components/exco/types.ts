export interface ExcoMember {
  name: string;
  role: string;
}

export interface ExcoMembers {
  seating: ExcoMember[];
  standing: ExcoMember[];
}

export interface ExcoYear {
  year: string;
  members: ExcoMembers;
}

export interface MemberCardProps {
  member: ExcoMember;
  index: number;
}

export interface MemberSectionProps {
  title: string;
  members: ExcoMember[];
}
