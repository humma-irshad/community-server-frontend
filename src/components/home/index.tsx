'use client';

import {StyledTitle} from './index.style';
import TopSection from '@/components/home/topSection';
import MiddleSection from '@/components/home/middleSection';

export default function Home() {
  return (
    <>
      <StyledTitle variant='h2'>Community App</StyledTitle>
      <TopSection />
      <MiddleSection />
    </>
  );
}
