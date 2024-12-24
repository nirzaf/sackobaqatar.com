import { FC } from 'react';
import { useScrollToTop } from '@/hooks/useScrollToTop';

export const ScrollToTop: FC = () => {
  useScrollToTop();
  return null;
};
