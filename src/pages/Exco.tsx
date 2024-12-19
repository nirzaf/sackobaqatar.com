import { FC, useState } from 'react';
import { motion } from 'framer-motion';

interface ExcoMember {
  name: string;
  position: string;
}

interface ExcoYear {
  year: string;
  image: string;
  seatedMembers: ExcoMember[];
  standingMembers: ExcoMember[];
  absentees?: ExcoMember[];
  note?: string;
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
        absentMembers:[
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
     absentMembers:[
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
    absentMembers:[
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
     absentMembers: [
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
    absentMembers:[
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

const ExcoCard: FC<{ data: ExcoYear }> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative">
        <img
          src={data.image}
          alt={`Exco ${data.year}`}
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green/60 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold">
          Exco {data.year}
        </h3>
      </div>

      <div className="p-6">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full text-left mb-4 flex items-center justify-between text-primary-900 hover:text-primary-700"
        >
          <span className="font-semibold text-white">View Members</span>
          <svg
            className={`w-5 h-5 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isExpanded && (
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Seating (Left to Right)</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.seatedMembers.map((member, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-900">{member.name}</p>
                    <p className="text-sm text-gray-600">{member.position}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Standing (Left to Right)</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.standingMembers.map((member, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-900">{member.name}</p>
                    <p className="text-sm text-gray-600">{member.position}</p>
                  </div>
                ))}
              </div>
            </div>

            {data.absentees && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Absentees</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.absentees.map((member, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <p className="font-medium text-gray-900">{member.name}</p>
                      <p className="text-sm text-gray-600">{member.position}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {data.note && (
              <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">{data.note}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Exco: FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-primary-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/90" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-3xl font-bold text-black mb-4">
            Executive Committee
          </h1>
          <p className="text-xl text-black/80 max-w-2xl">
            Meet the dedicated team leading SACKOBA Qatar through various initiatives and activities
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-2">
        <div className="max-w-5xl mx-auto">
          {excoData.map((year) => (
            <ExcoCard key={year.year} data={year} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exco;