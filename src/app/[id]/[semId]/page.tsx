'use client';

import {Box, Button, Grid, Paper, ThemeProvider, Typography, styled} from '@mui/material';
import VideocamOutlined from '@mui/icons-material/VideocamOutlined';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import {useParams} from 'next/navigation';
import {useEffect, useState} from 'react';
import {theme} from '@/theme/theme';

interface IFile {
  name: string;
  url: string;
}

const videoLectures = [
  {
    title: 'JavaScript for Beginners',
    technology: 'JavaScript',
    url: 'https://youtu.be/W6NZfCO5SIk?si=GSsrLc6AGkZfsUqD',
  },
  {
    title: 'NestJS for Beginners',
    technology: 'NestJS',
    url: 'https://youtu.be/GHTA143_b-s?si=M1fdxY5XFEBYHmIK',
  },
  {
    title: 'ReactJS for Beginners',
    technology: 'ReactJS',
    url: 'https://youtu.be/bMknfKXIFA8?si=vCOu6vNRXnUV8eFB',
  },
];

const Item = styled(Paper)(({theme}) => ({
  ...theme.typography.body1,
  padding: '1.5rem',
  textAlign: 'justify',
  marginLeft: '16.5rem',
  marginBottom: '1rem',
  color: theme.palette.text.secondary,
  height: 'max-content',
  width: '100%',
  lineHeight: '60px',
}));

export default function SemesterPae() {
  const params = useParams();

  const [files, setFiles] = useState<IFile[]>();

  useEffect(() => {
    fetch(`http://localhost:3000/file/upload/${params.id}/${params.semId}`)
      .then((res) => res.json())
      .then((result) => {
        setFiles(result);
      });
  }, []);

  return (
    <>
      <Typography ml={30} align='center' paragraph={true} variant='h4' fontWeight={800}>
        Notes for You
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: 'background',
                display: 'grid',
                gridTemplateColumns: {md: '1fr 1fr'},
                gap: 2,
              }}
            >
              {files?.map((file) => (
                <Item elevation={6}>
                  <Typography variant='h4'>{file.name}</Typography>
                  <Typography variant='h6'>
                    {params.id.toUpperCase()} - {params.semId}th Semester
                  </Typography>
                  <Button
                    variant='contained'
                    href={file.url}
                    download
                    target='blank'
                    endIcon={<AutoStoriesIcon />}
                  >
                    Read
                  </Button>
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      </Grid>
      <Typography ml={30} align='center' paragraph={true} variant='h4' fontWeight={800}>
        Videos for You
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: 'background',
                display: 'grid',
                gridTemplateColumns: {md: '1fr 1fr'},
                gap: 2,
              }}
            >
              {videoLectures?.map((video) => (
                <Item elevation={6}>
                  <Typography variant='h4'>{video.title}</Typography>
                  <Typography variant='h6'>Technology: {video.technology}</Typography>
                  <Button
                    variant='contained'
                    href={video.url}
                    download
                    target='blank'
                    endIcon={<VideocamOutlined />}
                  >
                    Watch
                  </Button>
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      </Grid>
    </>
  );
}
