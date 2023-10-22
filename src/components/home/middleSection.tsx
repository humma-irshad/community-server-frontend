'use client';

import {useEffect, useState} from 'react';
import {Box, Grid, Typography} from '@mui/material';
import Image from 'next/image';

import {DeptBox, DeptGrid, ImageStyle, StyledDeptButton} from './index.style';
import MidImageOne from '@/assests/boy.jpeg';
import MidImageTwo from '@/assests/grad.jpeg';

export default function MiddleSection() {
  interface IDeptNames {
    id?: number;
    name?: string;
  }

  const [deptNames, setDeptNames] = useState<IDeptNames[]>([]);

  useEffect(() => {
    const fetcData = async () => {
      await fetch('http://localhost:3000/deptnames')
        .then((res) => res.json())
        .then((data) => setDeptNames(data.results));
    };
    fetcData();
  }, []);

  return (
    <>
      <DeptBox>
        <Typography align='center' paragraph={true} variant='h4' fontWeight={800}>
          Explore Department-Wise
        </Typography>
        <DeptGrid container>
          {deptNames?.map((dept: IDeptNames, index) => (
            <Grid ml={'4rem'} item key={index}>
              <StyledDeptButton href={`/${encodeURIComponent(dept.name!.toLowerCase())}`}>
                {dept.name}
              </StyledDeptButton>
            </Grid>
          ))}
        </DeptGrid>
      </DeptBox>
      <Box
        sx={{
          marginLeft: '20rem',
          marginTop: '10rem',
          alignItems: 'left',
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Image src={MidImageOne} style={ImageStyle} alt='A boy reading a book' loading='lazy' />
        <Box
          sx={{
            marginTop: '1rem',
            marginLeft: '2rem',
          }}
        >
          <Typography variant='h4' sx={{textAlign: 'left'}}>
            Quiz End-Term Revision
          </Typography>
          <br />
          <Typography
            sx={{
              fontSize: '1rem',
              width: '35rem',
              fontWeight: 'bold',
            }}
          >
            We provide video lectures for explanation of all the concepts and detailed videos on
            solution of Graded Assignments. Short and effective End term video lectures for quick
            revision to perform well in exams.
          </Typography>
        </Box>
      </Box>
      {/* ------------------------------ */}
      <Box
        sx={{
          marginTop: '8rem',
          display: 'flex',
          flexDirection: 'row',
          marginLeft: '23rem',
          marginBottom: '8rem',
        }}
      >
        <Box
          sx={{
            marginTop: '1rem',
          }}
        >
          <Typography variant='h4' sx={{textAlign: 'left'}}>
            Personality Development
          </Typography>
          <br />
          <Typography
            sx={{
              fontSize: '1rem',
              width: '35rem',
              fontWeight: 'bold',
            }}
          >
            Exclusive members-only videos.Members-only live chats( Course Duration 6 months.
            Members-only live streams. Members-only chat rooms. PRE BOOK- LIMITED SEATS AVAILABLE.
          </Typography>
        </Box>
        <Image src={MidImageTwo} style={ImageStyle} loading='lazy' alt='personality development' />
      </Box>
    </>
  );
}
