import cricketEvent from '../../assets/images/events/a79e91_0fe20be97f454538a07e5bb0dc9ef482~mv2.png';
import culturalEvent from '../../assets/images/events/a79e91_ba48d3e579b84155b20f65fba8120ac6~mv2.jpg';
import familyEvent from '../../assets/images/events/a79e91_8a52ef3c6718473fb5d65f2f83477e4a~mv2.jpg';
import communityEvent from '../../assets/images/events/a79e91_4a3d0c850f7142358da16ed18728ccb0~mv2.jpg';
import eventHero from '../../assets/images/events/a79e91_29bf2faf77ec498bb49e8b4d2f0a7e56~mv2_1.png';
import { Event } from './types';

export const events: Event[] = [
  {
    id: '1',
    year: '2024',
    name: 'Annual Cricket Tournament 2024',
    date: '2024-03-15',
    description: 'Join us for our annual cricket tournament featuring teams from different batches. Exciting matches, great food, and wonderful company!',
    images: [
      {
        url: cricketEvent,
        title: 'Annual Cricket Tournament 2024'
      }
    ]
  },
  {
    id: '2',
    year: '2024',
    name: 'Cultural Evening: Sri Lankan Night',
    date: '2024-04-05',
    description: 'Experience the rich cultural heritage of Sri Lanka with traditional music, dance performances, and authentic cuisine.',
    images: [
      {
        url: culturalEvent,
        title: 'Cultural Evening: Sri Lankan Night'
      }
    ]
  },
  {
    id: '3',
    year: '2024',
    name: 'Family Day Out',
    date: '2024-05-20',
    description: 'A fun-filled day for Antonian families featuring games, activities, and a grand BBQ lunch.',
    images: [
      {
        url: familyEvent,
        title: 'Family Day Out'
      }
    ]
  },
  {
    id: '4',
    year: '2024',
    name: 'Community Service Day',
    date: '2024-06-10',
    description: 'Give back to the community through various service activities and charitable initiatives.',
    images: [
      {
        url: communityEvent,
        title: 'Community Service Day'
      }
    ]
  }
];

export const heroImage = eventHero;
