import cricketEvent from '../../assets/images/events/a79e91_0fe20be97f454538a07e5bb0dc9ef482~mv2.png';
import culturalEvent from '../../assets/images/events/a79e91_ba48d3e579b84155b20f65fba8120ac6~mv2.jpg';
import familyEvent from '../../assets/images/events/a79e91_8a52ef3c6718473fb5d65f2f83477e4a~mv2.jpg';
import communityEvent from '../../assets/images/events/a79e91_4a3d0c850f7142358da16ed18728ccb0~mv2.jpg';
import eventHero from '../../assets/images/events/a79e91_29bf2faf77ec498bb49e8b4d2f0a7e56~mv2_1.png';
import { Event } from './types';

export const events: Event[] = [
  {
    id: '1',
    title: 'Annual Cricket Tournament 2024',
    date: '2024-03-15',
    location: 'West Bay Cricket Ground, Doha',
    attendees: 120,
    imageUrl: cricketEvent,
    category: 'Sports',
    description: 'Join us for our annual cricket tournament featuring teams from different batches. Exciting matches, great food, and wonderful company!',
    status: 'upcoming',
  },
  {
    id: '2',
    title: 'Cultural Evening: Sri Lankan Night',
    date: '2024-04-05',
    location: 'Antonian Community Center',
    attendees: 200,
    imageUrl: culturalEvent,
    category: 'Cultural',
    description: 'Experience the rich cultural heritage of Sri Lanka with traditional music, dance performances, and authentic cuisine.',
    status: 'upcoming',
  },
  {
    id: '3',
    title: 'Family Day Out',
    date: '2024-05-20',
    location: 'Al Bidda Park',
    attendees: 150,
    imageUrl: familyEvent,
    category: 'Social',
    description: 'A fun-filled day for Antonian families featuring games, activities, and a grand BBQ lunch.',
    status: 'upcoming',
  },
  {
    id: '4',
    title: 'Community Service Day',
    date: '2024-06-10',
    location: 'Various Locations, Doha',
    attendees: 80,
    imageUrl: communityEvent,
    category: 'Community',
    description: 'Give back to the community through various service activities and charitable initiatives.',
    status: 'upcoming',
  },
];

export const heroImage = eventHero;
