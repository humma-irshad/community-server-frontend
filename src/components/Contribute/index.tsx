'use client';

import Img1 from '@/assests/Job.svg';
import {BodyText, JobImage, TitleText, StyledBox} from './index.styles';

import useTypewriter from 'react-typewriter-hook';

export default function ContributionPage() {
  const text =
    'Contribute to communiity and uplift your skills with us. We are here to help you to get better grades in your final examinations by providing Course lectures, Graded Assignment Solutions.';
  const typedText = useTypewriter(text);
  return (
    <StyledBox>
      <JobImage src={Img1} alt='Image 1' />
      <TitleText variant='h3'>Connecting Students</TitleText>
      <BodyText variant='h6'>{typedText}</BodyText>
    </StyledBox>
  );
}
