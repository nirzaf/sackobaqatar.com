import { FC, useState } from 'react';
import VideoHeader from '../components/video-gallery/VideoHeader';
import CategoryFilter from '../components/video-gallery/CategoryFilter';
import VideoGrid from '../components/video-gallery/VideoGrid';
import { Video } from '../components/video-gallery/types';

const videos: Video[] = [
  {
    title: "St. Anthony's College Anthem",
    url: "https://www.youtube.com/watch?v=XYZ123abc",
    duration: "3:45",
    category: "Anthem"
  },
  {
    title: "SACKOBA Qatar 10th Anniversary Highlights",
    url: "https://www.youtube.com/watch?v=DEF456ghi",
    duration: "15:20",
    category: "Events"
  },
  {
    title: "Cricket Tournament 2023 Finals",
    url: "https://www.youtube.com/watch?v=JKL789mno",
    duration: "8:15",
    category: "Sports"
  },
  {
    title: "Traditional Dance Performance - Cultural Night 2023",
    url: "https://www.youtube.com/watch?v=PQR321stu",
    duration: "12:30",
    category: "Cultural"
  },
  {
    title: "SACKOBA Qatar Community Service Day 2023",
    url: "https://www.youtube.com/watch?v=VWX654xyz",
    duration: "5:45",
    category: "Community"
  },
  {
    title: "A Day in the Life of an Antonian",
    url: "https://www.youtube.com/watch?v=MNO987pqr",
    duration: "18:25",
    category: "Feature"
  }
];

const categories = Array.from(new Set(videos.map(video => video.category)));

export const VideoGallery: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredVideos = selectedCategory === 'All' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <VideoHeader />
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <VideoGrid videos={filteredVideos} />
    </div>
  );
};
