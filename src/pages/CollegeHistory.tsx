import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { TimelineNav } from '../components/college-history/TimelineNav';
import { HistorySection } from '../components/college-history/HistorySection';
import { NotablePerson } from '../components/college-history/NotablePerson';
import { HistoryPeriod } from '../components/college-history/types';

const historyData: HistoryPeriod[] = [
  {
    year: '1820',
    title: 'The Beginning',
    content: `The Roman Catholic Church had established itself in the Maritime areas from 1505. In 1820 the superior of all the Oratorians in Ceylon, Vincent de Rozairo, himself came as the first missionary to Kandy. He put up a church, which occupied the very same grounds whereon the present Scots Kirk stands. In 1828 the Scots Kirk site was found to be too small and hilly and accordingly a petition was submitted to the Governor - General Sir Edward Barnes who promptly presented the Catholic Church with a new site. It was roughly a square 152 ft. by 150 ft. upon which the second Roman Catholic Church was built. This is the very same site on which St. Anthony's Cathedral stands today.`,
    image: 'https://ik.imagekit.io/sackoba/history/Old%20Red%20Brick%20Building%20-1910.png?updatedAt=1734619941523',
    notablePersons: [
      {
        name: 'Vincent de Rozairo',
        role: 'First Missionary',
        period: '1820',
        description: 'The superior of all the Oratorians in Ceylon who established the first church in Kandy.'
      },
      {
        name: 'Bishop Bede Beeckmeyer',
        role: 'Bishop',
        period: '1820-1935',
        description: 'Significant contributor to the early development of the institution',
        image: 'https://ik.imagekit.io/sackoba/history/Bishop%20Bede%20Beeckmeyer.png?updatedAt=1734619944721'
      }
    ]
  },
  {
    year: '1854',
    title: 'School Foundation',
    content: `It was realized that building churches alone would not contribute to the success of the missionary efforts that commenced in 1820. In September 1843, an Italian Oratorian, Fr. Orazio Bettacchini was sent to the Kandyan mission who, during his missionary year 1843/44, opened a school in Kandy on the same premises. But, in August 1844, his successor Fr. Reinaud, who continued as missionary until 1848, began his missionary career by pulling down the school, which Fr. Bettacchini had put up.

    In November 1853, Fr. Felice Zoppi, a Franciscan from the Chinese missionary field was sent to Kandy by Monsignor Joseph Maria Bravi. Fr. Zoppi promptly set about his task by opening a school for boys and one for girls at the house where he resided, in January of 1854, with a Mr. Van Twest as Head Teacher of the Boys School. This was the birth of St. Anthony's School.`,
    image: 'https://ik.imagekit.io/sackoba/history/Tiny%20Tots%20at%20the%20Boarding%20House-1924.png?updatedAt=1734619944158',
    notablePersons: [
      {
        name: 'Fr. Felice Zoppi',
        role: 'Founder',
        period: '1854',
        description: 'A Franciscan from the Chinese missionary field who founded St. Anthony\'s School.',
        achievements: [
          'Established the first boys\' school',
          'Named the school after St. Anthony',
          'Started with 62 boys and 28 girls'
        ]
      },
      {
        name: 'Charlie Hamilton',
        role: 'Early Administrator',
        period: '1896-1909',
        description: 'Contributed significantly to the school\'s development',
        image: 'https://ik.imagekit.io/sackoba/history/Charlie%20Hamilton%2010.12.1896%20-%205.11.1909.png?updatedAt=1734619944666'
      }
    ]
  },
  {
    year: '1870',
    title: 'First Fifty Years',
    content: `Mr. Paul Poorey took over the administration of the Boys School from Mr. Van Twest in 1855, contributing immensely to the efficiency and prestige the school enjoyed in its formative years. Fr. Zoppi left the country at the end of September 1856. In the absence of sufficient missionaries to take over the school, which was then a parish school, a succession of laymen carried on the administration until 1870.

    In 1867, St. Anthony's Boys' School was referred as the 'second best school in English' among all the schools established by the Missionaries. In 1870, the Irish Christian Brothers John and Paul took over the administration, temporarily. The school continued to grow under various administrators until Fr. Dom Hildebrand Vanderstraaten O.S.B. was installed as Principal in 1875.`,
    image: 'https://ik.imagekit.io/sackoba/history/The%20building%20was%20declared%20%20open%20on%20the%2015th%20of%20February%201934.png?updatedAt=1734619945510',
    notablePersons: [
      {
        name: 'Mr. Paul Poorey',
        role: 'Administrator',
        period: '1855-1870',
        description: 'Took over from Mr. Van Twest and contributed significantly to the school\'s early development.'
      },
      {
        name: 'Rev. Fr. Stephen Abraham',
        role: 'Administrator',
        period: '1870-1875',
        description: 'Served during a crucial transition period',
        image: 'https://ik.imagekit.io/sackoba/history/Rev.%20Fr.%20Stephen%20Abraham.png?updatedAt=1734619944618'
      }
    ]
  },
  {
    year: '1892',
    title: 'Benedictine Era',
    content: `Upon Mr. Jansz's retirement in 1892, the Benedictines appointed Fr. Hilarian Leitan O.S.B., who had only been ordained a priest in December 1891, as Principal. He continued for a period of six years until 1898. Fr. Leitan was the first, of an unbroken line of O.S.B. Priest-Principals of the College, to date.

    During his six years in office, he had the services of a few other Benedictine monks - Dom Hildebrand Georgesz, Dom Patrick Mckelvie, Dom Dominic Direckze and for a short term, a Benedictine Father from Scotland, Rev. Ryan whose brothers were in charge of tea plantations.`,
    image: 'https://ik.imagekit.io/sackoba/history/New%20Three-Storey%20Block.png?updatedAt=1734619944418',
    notablePersons: [
      {
        name: 'Fr. Hilarian Leitan O.S.B.',
        role: 'First O.S.B. Principal',
        period: '1892-1898',
        description: 'Started the unbroken line of Benedictine Principals at the college.'
      }
    ]
  },
  {
    year: '1950',
    title: 'Modern Development',
    content: `Between the 50's and the 70's, St. Anthony's College had a well-established hostel, with over 500 boarders, who came from all parts of the Island. They were spread among 14 cottage type dormitories, arranged in succession, according to age groups. The hostel was supported by a livestock farm, bakery and a fully equipped sickroom, to cater to the needs of the boarders.`,
    image: 'https://ik.imagekit.io/sackoba/history/Rugger%20Team-%201968.png?updatedAt=1734619941797',
    notablePersons: [
      {
        name: 'Rev. Fr. Hilarion Fernando',
        role: 'Principal',
        period: '1950-1960',
        description: 'Led significant modernization efforts',
        image: 'https://ik.imagekit.io/sackoba/history/Rev.%20Fr.%20Hilarion%20Fernando.png?updatedAt=1734619941686'
      },
      {
        name: 'Mr. William Gopallawa',
        role: 'Notable Alumni',
        period: '1950s',
        description: 'Distinguished alumnus who made significant contributions',
        image: 'https://ik.imagekit.io/sackoba/history/Mr.%20William%20Gopallawa.png?updatedAt=1734619941683'
      }
    ]
  },
  {
    year: '1960',
    title: 'Sports Excellence',
    content: `The 1960s marked a golden era in sports at St. Anthony's College. The school excelled in various sports including rugby, cricket, and boxing. The establishment of new sporting facilities and dedicated coaching programs led to numerous achievements and the development of many talented athletes.`,
    image: 'https://ik.imagekit.io/sackoba/history/Antonian%20Champion%20Boxers.png?updatedAt=1734619944293',
    notablePersons: [
      {
        name: 'Mr. Cyril Brown',
        role: 'Sports Coach',
        period: '1960s',
        description: 'Legendary sports coach who developed many champions',
        image: 'https://ik.imagekit.io/sackoba/history/Mr.%20Cyril%20Brown.png?updatedAt=1734619942137'
      },
      {
        name: 'Jack Anderson',
        role: 'Sports Director',
        period: '1960s',
        description: 'Pioneered modern sports programs',
        image: 'https://ik.imagekit.io/sackoba/history/Jack%20Anderson.png?updatedAt=1734619942144'
      }
    ]
  },
  {
    year: '1970',
    title: 'Infrastructure Development',
    content: `The 1970s saw significant infrastructure development with the construction of new facilities including the Sports Complex and modern classroom blocks. The school continued to grow both in terms of student population and facilities.`,
    image: 'https://ik.imagekit.io/sackoba/history/Bishop%20Leo%20%20Nanayakkara%20Sports%20%20&%20Pavilion%20Complex.png?updatedAt=1734619942141',
    notablePersons: [
      {
        name: 'Hon. M.D. Banda',
        role: 'Benefactor',
        period: '1970s',
        description: 'Major contributor to infrastructure development',
        image: 'https://ik.imagekit.io/sackoba/history/Hon%20M.D.%20Banda.png?updatedAt=1734619941675'
      },
      {
        name: 'Hon. K.D.M.C. Bandara',
        role: 'Government Minister',
        period: '1970s',
        description: 'Supported the school\'s expansion projects',
        image: 'https://ik.imagekit.io/sackoba/history/Hon.%20K.%20D.%20M.%20C.%20Bandara%20at%20the%20%20opening%20of%20the%20Sports%20Complex.png?updatedAt=1734619941695'
      }
    ]
  },
  {
    year: '1990',
    title: 'Modern Era',
    content: `The 1990s marked the beginning of the modern era with the introduction of computer education and other technological advancements. The school maintained its excellence in both academics and sports, producing many notable achievements.`,
    image: 'https://ik.imagekit.io/sackoba/history/Primary%20School%20Computer%20Center.png?updatedAt=1734619941793',
    notablePersons: [
      {
        name: 'Ronnie Stevens',
        role: 'Cricket Coach',
        period: '1990s',
        description: 'Led the cricket team to numerous victories',
        image: 'https://ik.imagekit.io/sackoba/history/Ronnie%20Stevens%20and%20A.C.M.%20Lafir.png?updatedAt=1734619944290'
      }
    ]
  }
];

const Accordion: FC<{
  title: string;
  year: string;
  content: string;
  image?: string;
  notablePersons?: any[];
  isOpen: boolean;
  onToggle: () => void;
}> = ({ title, year, content, image, notablePersons, isOpen, onToggle }) => {
  return (
    <div className="border-b border-[#E5E7EB]">
      <button
        onClick={onToggle}
        className="w-full py-4 px-6 flex items-center justify-between hover:bg-[#F8F6F9]/50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-[#B62D71]">{year}</span>
          <h2 className="text-lg font-semibold text-[#541D67]">{title}</h2>
        </div>
        <ChevronDownIcon 
          className={`w-5 h-5 text-[#5B4886] transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              {image && (
                <div className={`mb-6 rounded-lg overflow-hidden ${
                  image.includes('Rugger%20Team') ? 'max-w-3xl' : 'max-w-sm'
                }`}>
                  <img 
                    src={image} 
                    alt={title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
              <div className="prose max-w-none">
                <div className="text-[#5B4886] leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </div>
              {notablePersons && notablePersons.length > 0 && (
                <div className="mt-6 space-y-4">
                  <h3 className="text-lg font-semibold text-[#541D67]">Notable Persons</h3>
                  {notablePersons.map((person, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-start gap-4">
                        {person.image && (
                          <img 
                            src={person.image} 
                            alt={person.name}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                        )}
                        <div>
                          <h4 className="font-medium text-[#541D67]">{person.name}</h4>
                          <p className="text-sm text-[#5B4886]">{person.role} ({person.period})</p>
                          <p className="mt-2 text-[#5B4886]">{person.description}</p>
                          {person.achievements && (
                            <ul className="mt-2 list-disc list-inside text-sm text-[#5B4886]">
                              {person.achievements.map((achievement: string, i: number) => (
                                <li key={i}>{achievement}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const CollegeHistory: FC = () => {
  const [openSection, setOpenSection] = useState<string>(historyData[0].year);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Adjusted Height */}
      <div className="relative h-[30vh] md:h-[36vh] bg-[#F8F6F9] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://ik.imagekit.io/sackoba/history/College%20Building.png"
            alt="St. Anthony's College"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F8F6F9]/50 to-[#F8F6F9]" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#541D67] mb-2">
            Our Rich History
          </h1>
          <p className="text-base md:text-lg text-[#5B4886] max-w-2xl">
            Since 1854, St. Anthony's College has been shaping minds and building futures
          </p>
        </div>
      </div>

      {/* Main Content with Accordions */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {historyData.map((period) => (
            <div key={period.year} className="mb-4">
              <button
                onClick={() => setOpenSection(openSection === period.year ? '' : period.year)}
                className="w-full bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-lg transition-colors duration-300"
              >
                <div className="py-6 px-6 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <span className="text-xl font-bold text-[#FF69B4]">{period.year}</span>
                    <h2 className="text-2xl font-bold text-white">{period.title}</h2>
                  </div>
                  <ChevronDownIcon 
                    className={`w-6 h-6 text-white transition-transform duration-300 ${
                      openSection === period.year ? 'transform rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
              <AnimatePresence>
                {openSection === period.year && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-white rounded-b-lg shadow-sm"
                  >
                    <div className="p-6">
                      {period.image && (
                        <div className={`mb-6 rounded-lg overflow-hidden ${
                          period.image.includes('Rugger%20Team') ? 'max-w-3xl mx-auto' : 'max-w-sm mx-auto'
                        }`}>
                          <img 
                            src={period.image} 
                            alt={period.title}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      )}
                      <div className="prose max-w-none">
                        <div className="text-[#5B4886] leading-relaxed mb-6"
                          dangerouslySetInnerHTML={{ __html: period.content }}
                        />
                      </div>
                      {period.notablePersons && period.notablePersons.length > 0 && (
                        <div className="mt-8">
                          <h3 className="text-xl font-bold text-[#541D67] mb-4">Notable Persons</h3>
                          <div className="space-y-6">
                            {period.notablePersons.map((person, index) => (
                              <div key={index} className="bg-[#F8F6F9] p-6 rounded-lg">
                                <div className="flex items-start gap-6">
                                  {person.image && (
                                    <img 
                                      src={person.image} 
                                      alt={person.name}
                                      className="w-24 h-24 object-cover rounded-lg shadow-sm"
                                    />
                                  )}
                                  <div>
                                    <h4 className="text-lg font-bold text-[#541D67]">{person.name}</h4>
                                    <p className="text-[#B62D71] font-medium">{person.role}</p>
                                    <p className="text-sm text-[#5B4886] mb-2">{person.period}</p>
                                    <p className="text-[#5B4886]">{person.description}</p>
                                    {person.achievements && (
                                      <ul className="mt-3 space-y-1 list-disc list-inside text-sm text-[#5B4886]">
                                        {person.achievements.map((achievement: string, i: number) => (
                                          <li key={i}>{achievement}</li>
                                        ))}
                                      </ul>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-[#F8F6F9] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center bg-white p-4 rounded-lg shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-[#B62D71]">170</div>
              <div className="text-sm text-[#5B4886]">Years of Excellence</div>
            </div>
            <div className="text-center bg-white p-4 rounded-lg shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-[#B62D71]">27</div>
              <div className="text-sm text-[#5B4886]">Principals</div>
            </div>
            <div className="text-center bg-white p-4 rounded-lg shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-[#B62D71]">1000s</div>
              <div className="text-sm text-[#5B4886]">Alumni Worldwide</div>
            </div>
            <div className="text-center bg-white p-4 rounded-lg shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-[#B62D71]">15</div>
              <div className="text-sm text-[#5B4886]">Benedictine Principals</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
