import { FC, ErrorInfo, Component } from 'react';
import type { ExcoYear } from '../components/exco/types';
import { ExcoCard } from '../components/exco/ExcoCard';
import { ExcoHero } from '../components/exco/ExcoHero';

/**
 * Error Boundary component to handle runtime errors
 */
class ErrorBoundary extends Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ExcoPage Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h2>
            <p className="text-gray-600">Please try refreshing the page</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const excoData: ExcoYear[] = [
  {
    year: '2024-2025',
    image: 'https://ik.imagekit.io/sackoba/exco/Exco-2024-2025.jpg?updatedAt=1734631542077',
    seatedMembers: [
      { name: 'Vigneshwaran Selvarathnam', position: 'Asst. Secretary' },
      { name: 'K.Sivaraja', position: 'Vice President' },
      { name: 'Clifford Ferguson', position: 'Gen. Secretary' },
      { name: 'Anurudha Ellepola', position: 'President' },
      { name: 'M.D.M. Rizkhan', position: 'Treasurer' },
      { name: 'Damith Hearath', position: 'Member of the Committee' },
      { name: 'Riyas Thajudeen', position: 'Member of the Committee' }
    ],
    standingMembers: [
      { name: 'Malinda Dissanayake', position: 'Coordinating Secretary' },
      { name: 'Riyaz Nilabdeen', position: 'Secretary Sports' },
      { name: 'Christy Shihan', position: 'Media Coordinator' },
      { name: 'Arshad Niyaz', position: 'Member of the Committee' },
      { name: 'Shifan Muhajireen', position: 'Member of the Committee' },
      { name: 'Jiffry M. Murshid', position: 'Coordinator Special Events' },
      { name: 'Thanuja Manoj', position: 'Asst. Treasurer' },
      { name: 'Milroy Perera', position: 'Secretary Social & Religious Affairs' }
    ]
  },
  {
    year: '2023-2024',
    image: 'https://ik.imagekit.io/sackoba/exco/Exco-2023-2024.jpg?updatedAt=1734631542087',
    seatedMembers: [
      { name: 'Gihan Rodrigo', position: 'Secretary Religious/Social Affairs' },
      { name: 'K.Sivaraja', position: 'Vice President' },
      { name: 'Vigneshwaran Selvarathnam', position: 'Treasurer' },
      { name: 'Anurudha Ellepola', position: 'President' },
      { name: 'Riyas Thajudeen', position: 'Gen. Secretary' },
      { name: 'Malinda Dissanayake', position: 'Secretary Sports' },
      { name: 'Sellamuthu Yogeswaran', position: 'Coordinator Events' }
    ],
    standingMembers: [
      { name: 'Clifford Ferguson', position: 'Asst. Secretary' },
      { name: 'Riyaz Nilabdeen', position: 'Secretary Sports' },
      { name: 'Namal Attanayake', position: 'Ex-co Coordinator' },
      { name: 'Arshad Niyaz', position: 'Media Coordinator' },
      { name: 'Jiffry M.Murshid', position: 'Member of the Committee' },
      { name: 'Mohamed Sajith', position: 'Member of the Committee' },
      { name: 'Damith Hearath', position: 'Coordinator Events' },
      { name: 'M.D.M. Rizkhan', position: 'Asst. Treasurer' }
    ]
  },
  {
    year: '2019-2020',
    image: 'https://ik.imagekit.io/sackoba/exco/Exco-2019-2020.jpg?updatedAt=1734631541909',
    seatedMembers: [
      { name: 'Riyas Thajudeen', position: 'Immediate past President' },
      { name: 'Vignesh Selvarathnam', position: 'Treasurer' },
      { name: 'Clifford Ferguson', position: 'President' },
      { name: 'Christy Shihan', position: 'Gen. Secretary and Media Coordinator' },
      { name: 'Anuradha Ellepola', position: 'Secretary Religious/Social Affairs' },
      { name: 'Samuel Pradeep', position: 'Member of the Committee' }
    ],
    standingMembers: [
      { name: 'Shafraz Mansoor', position: 'Vice President' },
      { name: 'Mohamed Sajith', position: 'Member of the Committee' },
      { name: 'Jeremy Stephen', position: 'Member of the Committee' },
      { name: 'Nadarajah Thirukumar', position: 'Coordinating Secretary' },
      { name: 'Yogeswaran Sellamuthu', position: 'Member of the Committee' },
      { name: 'Malinda Dissanayake', position: 'Ex-co Coordinator' },
    ],
    absentees: [
      { name: 'Aloy J. Cooray', position: 'Member of the committee' },
      { name: 'Mohammed Riyaz Nilabdeen', position: 'Secretary Sports' },
      { name: 'Sivaraja KP', position: 'Coordinator Events' }
    ],
    note: "Due to departure of Clifford Ferguson (Elected President) in the year of 2019, Shafraz Mansoor took over the position of President - SACKOBA Qatar and continue the Ex-co 2020/2021 due to COVID19."
  },
  {
    year: '2018-2019',
    image: 'https://ik.imagekit.io/sackoba/exco/Exco-2018-2019.jpg?updatedAt=1734631541983',
    seatedMembers: [
      { name: 'Gihan Rodrigo', position: 'Ex-Co. Coordinator' },
      { name: 'Anuradha Ellepola', position: 'Secretary Religious/Social Affairs' },
      { name: 'Clifford Ferguson', position: 'Gen. Secretary' },
      { name: 'Riyas Thajudeen', position: 'President' },
      { name: 'Samuel Pradeep', position: 'Treasurer' },
      { name: 'Shafraz Mansoor', position: 'Vice President' },
      { name: 'Sivaraja KP', position: 'Coordinator Special Events' }
    ],
    standingMembers: [
      { name: 'Vigneswaran Selvaratnam', position: 'Asst. Treasurer' },
      { name: 'Mohammed Riyaz Nilabdeen', position: 'Member of the Committee' },
      { name: 'Christy Shihan', position: 'Asst. Secretary and Media Co.' },
      { name: 'Nadarajah Thirukumar', position: 'Coordinating Secretary' },
      { name: 'Milroy Perera', position: 'Sports Secretary' }
    ]
  },
  {
    year: '2017-2018',
    image: 'https://ik.imagekit.io/sackoba/exco/Exco-2017-2018.jpg?updatedAt=1734631541966',
    seatedMembers: [
      { name: 'Anuradha Ellepola', position: 'Vice President' },
      { name: 'Damith Herath', position: 'Ex-co coordinator and members welfare' },
      { name: 'Clifford Ferguson', position: 'Gen. Secretary' },
      { name: 'Riyas Thajudeen', position: 'President' },
      { name: 'Pradeep Samuel', position: 'Treasurer' },
      { name: 'Gihan Rodrigo', position: 'Coordinating Secretary' },
      { name: 'Shafraz Mansoor', position: 'Secretary Sports' }
    ],
    standingMembers: [
      { name: 'M. Rizkhan', position: 'Editor' },
      { name: 'Nadarajah Thirukumar', position: 'Asst. Secretary' },
      { name: 'Sivaraja KP', position: 'Secretary Social & Religious affairs' },
      { name: 'Riyas Nilabdeen', position: 'Member of the committee' },
      { name: 'Christy Shihan', position: 'Media Coordinator' },
      { name: 'Sanjaya Rajaguru', position: 'Member of the committee' },
      { name: 'Patterson Ferdinandus', position: 'Member of the committee' },
      { name: 'Milroy Perera', position: 'Coordinator Special events' }
    ],
    absentees: [
      { name: 'Deyan Bastianz', position: 'Member of the committee' }
    ]
  },
  {
    year: '2016-2017',
    image: 'https://ik.imagekit.io/sackoba/exco/Exco-2016-2017.jpg?updatedAt=1734631542091',
    seatedMembers: [
      { name: 'Sivaraja KP', position: 'Media Coordinator' },
      { name: 'M. Rizkhan', position: 'Treasurer' },
      { name: 'Anuradha Ellepola', position: 'Vice President' },
      { name: 'Damith Herath', position: 'President' },
      { name: 'Riyas Thajudeen', position: 'Gen. Secretary' },
      { name: 'Gihan Rodrigo', position: 'Coordinating Secretary' },
      { name: 'Milroy Perera', position: 'Secretary Social and Religious affairs' }
    ],
    standingMembers: [
      { name: 'Clifford Ferguson', position: 'Coordinator Special Projects' },
      { name: 'Malinda Dissanayake', position: 'Member of the Committee' },
      { name: 'Mohamed Shibly', position: 'Editor' },
      { name: 'Shajith Safeek', position: 'Member of the Committee' },
      { name: 'Samuel Pradeep', position: 'Asst. Treasurer' },
      { name: 'Patterson Ferdinandus', position: 'Asst. Secretary' },
      { name: 'Ishara Nanayakkara', position: 'Member of the Committee' },
      { name: 'Shafraz Mansoor', position: 'Ex-co Coordinator and Members welfare' },
      { name: 'Sanjaya Rajaguru', position: 'Secretary Sports' }
    ]
  },
  {
    year: '2015-2016',
    image: 'https://ik.imagekit.io/sackoba/exco/Exco-2015-2016.jpg?updatedAt=1734631542082',
    seatedMembers: [
      { name: 'Clifford Ferguson', position: 'Special Projects' },
      { name: 'M.D.M. Rizkhan', position: 'Treasurer' },
      { name: 'Anurudha Ellepola', position: 'Vice President' },
      { name: 'Damith Herath', position: 'President' },
      { name: 'Riyas Thajudeen', position: 'General Secretary' },
      { name: 'Gihan Rodrigo', position: 'Coordinating Secretary' },
      { name: 'Mohamed Shafraz', position: 'EXCO-Coordinator & Members Welfare' },
    ],
    standingMembers: [
      { name: 'Malinda Dissanayake', position: 'member of the committee' },
      { name: 'Shibly Rauf', position: 'member of the committee' },
      { name: 'Ishara Nanayakkara', position: 'member of the committee' },
      { name: 'Pradeep Samuel', position: 'Asst. Treasurer' },
      { name: 'Sanjaya Rajaguru', position: 'Secretary Sports' },
      { name: 'Sajith Safeek', position: 'member of the committee' },
      { name: 'Patterson Ferdinandus', position: 'Asst. Secretary' },
      { name: 'Milroy Perera', position: 'Secretary Social & Religious Affairs' },
    ],
    absentees: [
      { name: 'K. Sivaraj', position: 'Media Coordinator' }
    ]
  },
  {
    year: '2013-2014',
    image: 'https://ik.imagekit.io/sackoba/exco/Exco-2013-2014.jpg?updatedAt=1734631541922',
    seatedMembers: [
      { name: 'Damith Herath', position: 'Vice President' },
      { name: 'K. Sivaraja', position: 'Treasurer' },
      { name: 'Aloy J. Cooray', position: 'President' },
      { name: 'Riyas Thajudeen', position: 'General Secretary' },
      { name: 'Namal Attanayake', position: 'Coordinating Secretary' }
    ],
    standingMembers: [
      { name: 'Anurudha Ellepola', position: 'Secretary Social & Religious Affairs' },
      { name: 'Chaminda Mayakaduwa', position: 'Member of the Committee' },
      { name: 'Manjula Liyange', position: 'Asst. Treasurer' },
      { name: 'Christy Shihan', position: 'Editor, Media Coordinator' },
      { name: 'Chiron Samuel', position: 'Member of the Committee' },
      { name: 'Mohamed Hifas', position: 'Member of the Committee' },
      { name: 'Clifford Ferguson', position: 'Member of the Committee' }
    ],
    absentees: [
      { name: 'Mohamed Shafraz', position: 'Sports Secretary' },
      { name: 'Mohamed Riyas', position: 'member of the Committee' }
    ]
  },
  {
    year: '2011-2012',
    image: 'https://ik.imagekit.io/sackoba/exco/Exco-2011-2012.jpg?updatedAt=1734631541913',
    seatedMembers: [
      { name: 'M.D.M. Rizkhan', position: 'Treasurer' },
      { name: 'Aloy J. Cooray', position: 'President' },
      { name: 'Rev.Fr. Vincent Wijesooriya', position: 'Patron' },
      { name: 'Riyas Thajudeen', position: 'General Secretary' },
      { name: 'Gihan Rodrigo', position: 'Coordinating Secretary' }
    ],
    standingMembers: [
      { name: 'Krishan Perera', position: 'Member of the Committee' },
      { name: 'Damith Herath', position: 'Sports Secretary' },
      { name: 'T.K. Hannan', position: 'member of the Committee' },
      { name: 'Christy Shihan', position: 'Editor, Media Coordinator' },
      { name: 'Mohamed Shafraz', position: 'Secretary Social and Religious Affairs' },
      { name: 'Clifford Ferguson', position: 'Member of the Committee' },
      { name: 'Anurudha Ellepola', position: 'Member of the Committee' }
    ],
    absentees: [
      { name: 'K. Sivaraja', position: 'Vice President' }
    ]
  },
  {
    year: '2010-2011',
    image: 'https://ik.imagekit.io/sackoba/exco/Exco-2010-2011.jpg?updatedAt=1734631541926',
    seatedMembers: [
      { name: 'Riyas Thajudeen', position: 'Asst. Secretary' },
      { name: 'Gihan Rodrigo', position: 'Coordinating Secretary' },
      { name: 'Aloy J. Cooray', position: 'President' },
      { name: 'Rev.Fr. Vincent Wijesooriya', position: 'Patron' },
      { name: 'Manoharan T. Arasu', position: 'General Secretary' },
      { name: 'Saffan Mohammed', position: 'Treasurer' },
      { name: 'K. Sivaraja', position: 'Vice President' }
    ],
    standingMembers: [
      { name: 'M.D.M. Rizkhan', position: 'Asst. Treasurer' },
      { name: 'Anurudha Ellepola', position: 'Editor' },
      { name: 'Saliya Tennkoon', position: 'Social Secretary' },
      { name: 'Imtikaf farook', position: '' },
      { name: 'T.K. Hannan', position: 'Coordinator Special Events' },
      { name: 'Clifford Ferguson', position: 'Media Coordinator' },
      { name: 'Mohamed Shafraz', position: 'Sports Secretary' },
      { name: 'Manoj Puwaneshwararaj', position: '' }
    ]
  },
  {
    year: '2009-2010',
    image: 'https://ik.imagekit.io/sackoba/exco/Exco-2009-2010.jpg?updatedAt=1734631544762',
    seatedMembers: [
      { name: 'Gihan Rodrigo', position: 'Coordinating Secretary' },
      { name: 'Manoharan T. Arasu', position: 'General Secretary' },
      { name: 'H.E The Ambassador Mr. Padukkage', position: 'Patron' },
      { name: 'Aloy J. Cooray', position: 'President' },
      { name: 'K. Sivaraja', position: 'Vice President' }
    ],
    standingMembers: [
      { name: 'Manoj Puwaneshwararaj', position: 'member of the committee' },
      { name: 'M.D.M. Rizkhan', position: 'Asst. Treasurer' },
      { name: 'Mohamed Shafraz', position: 'Sports Secretary' },
      { name: 'Imtikaf farook', position: 'member of the committee' },
      { name: 'T.K. Hannan', position: 'Coordinator Special Events' },
      { name: 'Saliya Tennkoon', position: 'Social Secretary' },
      { name: 'Riyas Thajudeen', position: 'member of the committee' },
      { name: 'Anurudha Ellepola', position: 'Editor' }
    ]
  }
];

/**
 * Exco page component displaying the executive committee members
 * Includes error boundary and proper component organization
 */
const Exco: FC = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-100">
        <ExcoHero />
        
        <main className="container mx-auto px-4 py-2">
          <div className="max-w-5xl mx-auto">
            {excoData.map((year) => (
              <ExcoCard key={year.year} data={year} />
            ))}
          </div>
        </main>
      </div>
    </ErrorBoundary>
  );
};

export default Exco;