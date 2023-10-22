'use client';

import {useState, useEffect} from 'react';
import {Button, Grid, Typography} from '@mui/material';
import {useRouter} from 'next/navigation';

import {DeptBox, DeptGrid, StyledDeptButton} from './index.style';
import departmnets from '@/lib/DeptNames.json';

const DepartmentPage = () => {
  const router = useRouter();
  const SemesterCount = departmnets.results.map((department) => department.SemCount);

  const departmentName = departmnets.results.map((department) => department.name);

  const [currentUrl, setCurrentUrl] = useState('');

  const reDirect = (number: number) => {
    router.push(`/${currentUrl}/${number}`);
  };

  useEffect(() => {
    const pathname = window.location.pathname;
    const urlText = pathname.substring(pathname.lastIndexOf('/') + 1);
    setCurrentUrl(urlText);
  }, [currentUrl]);

  const index = departmentName.indexOf(currentUrl.toUpperCase());
  const numberofButtons = SemesterCount[index];
  const buttons = [];
  for (let i = 1; i <= numberofButtons; i++) {
    buttons.push(
      <Button
        sx={{color: 'primary.contrastText'}}
        key={`${i}`}
        onClick={() => {
          const number = i;
          reDirect(number);
        }}
      >
        {` semester ${i}`}
      </Button>,
    );
  }

  return (
    <DeptBox>
      <Typography align='center' paragraph={true} variant='h4' fontWeight={800}>
        Explore Semesters
      </Typography>
      <DeptGrid container>
        {buttons.map((button, index) => (
          <Grid ml={'4rem'} item key={index}>
            <StyledDeptButton key={index}>{button}</StyledDeptButton>
          </Grid>
        ))}
      </DeptGrid>
    </DeptBox>
  );
};

export default DepartmentPage;
