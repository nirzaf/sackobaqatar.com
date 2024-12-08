import { FC, memo } from 'react';
import { HistorySection } from './HistorySection';
import { HistoryTimeline } from './HistoryTimeline';
import { TimelineEvent } from './types';

interface MainContentProps {
  timelineEvents: TimelineEvent[];
}

export const MainContent: FC<MainContentProps> = memo(({ timelineEvents }) => (
  <div className="container mx-auto px-6 py-16">
    <div className="max-w-4xl mx-auto">
      <HistorySection
        title="The Beginning"
        content="The Roman Catholic Church had established itself in the Maritime areas from 1505. In 1820 the superior of all the Oratorians in Ceylon, Vincent de Rozairo, himself came as the first missionary to Kandy. He put up a church, which occupied the very same grounds whereon the present Scots Kirk stands."
      />

      <HistorySection
        title="Foundation Years"
        content="In January of 1854, Fr. Felice Zoppi opened a school for boys and one for girls at the house where he resided, with Mr. Van Twest as Head Teacher of the Boys School. This was the birth of St. Anthony's School. The number of students on roll at the inception was 62 boys and 28 girls."
      />

      <div className="my-20">
        <h2 className="text-3xl font-display font-bold text-primary-900 mb-12 text-center">
          Key Milestones
        </h2>
        <HistoryTimeline events={timelineEvents} />
      </div>

      <HistorySection
        title="The Centenary (1954)"
        content="1954, the Centenary year, is described as the 'Golden Year' of the College. The most memorable event was the Big Match, in which the Antonians triumphed over their traditional rivals Trinity College by an innings, with A.C.M. Lafir and Ronnie Stevens putting on a partnership of 276 runs for the first wicket, establishing a new schools record."
      />

      <HistorySection
        title="The Modern Era"
        content="Today, St. Anthony's College continues to uphold its tradition of excellence in both academics and sports. The college has produced numerous national athletes, cricketers, and leaders in various fields, while maintaining its commitment to holistic education and character development."
      />
    </div>
  </div>
));
