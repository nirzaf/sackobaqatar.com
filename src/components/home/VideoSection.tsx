import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { Section } from './Section';
import { VideoCard } from './VideoCard';

const featuredVideos = [
  {
    title: "St. Anthony's College Anthem",
    url: "https://www.youtube.com/watch?v=XYZ123abc",
    duration: "3:45",
    category: "Anthem",
    thumbnailUrl: "https://img.youtube.com/vi/XYZ123abc/maxresdefault.jpg"
  },
  {
    title: "SACKOBA Qatar 10th Anniversary Highlights",
    url: "https://www.youtube.com/watch?v=DEF456ghi",
    duration: "15:20",
    category: "Events",
    thumbnailUrl: "https://img.youtube.com/vi/DEF456ghi/maxresdefault.jpg"
  },
  {
    title: "Cricket Tournament 2023 Finals",
    url: "https://www.youtube.com/watch?v=JKL789mno",
    duration: "8:15",
    category: "Sports",
    thumbnailUrl: "https://img.youtube.com/vi/JKL789mno/maxresdefault.jpg"
  },
  {
    title: "Traditional Dance Performance - Cultural Night 2023",
    url: "https://www.youtube.com/watch?v=PQR321stu",
    duration: "12:30",
    category: "Cultural",
    thumbnailUrl: "https://img.youtube.com/vi/PQR321stu/maxresdefault.jpg"
  },
  {
    title: "SACKOBA Qatar Community Service Day 2023",
    url: "https://www.youtube.com/watch?v=VWX654xyz",
    duration: "5:45",
    category: "Community",
    thumbnailUrl: "https://img.youtube.com/vi/VWX654xyz/maxresdefault.jpg"
  },
  {
    title: "A Day in the Life of an Antonian",
    url: "https://www.youtube.com/watch?v=MNO987pqr",
    duration: "18:25",
    category: "Feature",
    thumbnailUrl: "https://img.youtube.com/vi/MNO987pqr/maxresdefault.jpg"
  }
];

// Additional embedded videos
const embeddedVideos = [
  {
    id: "bGXXF1Iuqd0",
    title: "SACKOBA Qatar 10th Anniversary",
    embedUrl: "https://www.youtube-nocookie.com/embed/bGXXF1Iuqd0?si=gllciq_6oiv63Y3k"
  },
  {
    id: "ix9COgFRPZc",
    title: "SACKOBA Qatar Cultural Night",
    embedUrl: "https://www.youtube-nocookie.com/embed/ix9COgFRPZc?si=PZwMfiqXs0dwUPei"
  },
  {
    id: "KKb4U9kSUCk",
    title: "SACKOBA Qatar Community Event",
    embedUrl: "https://www.youtube-nocookie.com/embed/KKb4U9kSUCk?si=hU26zYr9A0wMXCcv"
  }
];

export const VideoSection: FC = memo(() => (
  <Section title="Featured Videos" className="bg-[#B1B3CE]/5">
    {/* Featured Video Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredVideos.slice(0, 3).map((video, index) => (
        <VideoCard
          key={index}
          title={video.title}
          duration={video.duration}
          category={video.category}
          thumbnailUrl={video.thumbnailUrl}
          url={video.url}
        />
      ))}
    </div>

    {/* Embedded YouTube Videos */}
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {embeddedVideos.map((video, index) => (
        <div key={index} className="aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="100%"
            src={video.embedUrl}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      ))}
    </div>

    {/* View All Button */}
    <div className="text-center mt-12">
      <Link 
        to="/videos"
        className="inline-flex items-center px-6 py-3 bg-[#541D67] text-white rounded-full hover:bg-[#B62D71] transition-colors"
      >
        View All Videos
        <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </Link>
    </div>
  </Section>
));
