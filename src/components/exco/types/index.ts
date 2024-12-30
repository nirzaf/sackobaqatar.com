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
