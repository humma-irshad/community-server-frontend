'use client';

import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import Img1 from '@/assests/Convocation.png';
import Img2 from '@/assests/randomIUST.png';
import Img3 from '@/assests/randomIUST2.png';
import Img4 from '@/assests/randomIUST3.jpeg';
import Img5 from '@/assests/Convocation2.png';
import Img6 from '@/assests/Convocation3.png';
import {StyledTitleOne} from './Alumni.style';

const TopSectionAlumni = () => {
  const getImageStyle = () => {
    return {
      height: '35rem',
      width: '100%',
      borderRadius: '3rem',
    };
  };

  return (
    <>
      <StyledTitleOne variant='h2' sx={{textAlign: 'center', marginTop: '-2rem'}}>
        Our Alumni
      </StyledTitleOne>
      <Carousel
        animationHandler={'fade'}
        interval={7000}
        autoPlay
        showStatus={true}
        infiniteLoop
        showThumbs={false}
        stopOnHover={false}
      >
        <Image src={Img1} alt='Image 1' style={getImageStyle()} />
        <Image src={Img2} alt='Image 2' style={getImageStyle()} />
        <Image src={Img3} alt='Image 3' style={getImageStyle()} />
        <Image src={Img4} alt='Image 4' style={getImageStyle()} />
        <Image src={Img5} alt='Image 5' style={getImageStyle()} />
        <Image src={Img6} alt='Image 6' style={getImageStyle()} />
      </Carousel>
    </>
  );
};

export default TopSectionAlumni;
