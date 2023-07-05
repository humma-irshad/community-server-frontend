'use client';

import {Typography} from '@mui/material';
import {NewsBox, NewsGrid, StyledBodyText, ImageStyled, StyledTitleTwo} from './Alumni.style';
import Img1 from '@/assests/boy.jpeg';
import Image from 'next/image';

const MiddleSectionAlumni = () => {
  return (
    <>
      <StyledTitleTwo variant='h2' sx={{textAlign: 'center'}}>
        News and updates
      </StyledTitleTwo>
      <NewsGrid container>
        <NewsBox>
          <Image style={ImageStyled} src={Img1} alt='Image 1' />
          <StyledBodyText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </StyledBodyText>
        </NewsBox>
        <NewsBox>
          <Image style={ImageStyled} src={Img1} alt='Image 1' />
          <StyledBodyText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </StyledBodyText>
        </NewsBox>
        <NewsBox>
          <Image style={ImageStyled} src={Img1} alt='Image 1' />
          <StyledBodyText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </StyledBodyText>
        </NewsBox>
        <NewsBox>
          <Image style={ImageStyled} src={Img1} alt='Image 1' />
          <StyledBodyText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </StyledBodyText>
        </NewsBox>
        <NewsBox>
          <Image style={ImageStyled} src={Img1} alt='Image 1' />
          <StyledBodyText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </StyledBodyText>
        </NewsBox>
        <NewsBox>
          <Image style={ImageStyled} src={Img1} alt='Image 1' />
          <StyledBodyText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </StyledBodyText>
        </NewsBox>
      </NewsGrid>
    </>
  );
};

export default MiddleSectionAlumni;
