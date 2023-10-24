'use client';

import {Box, Button, Typography} from '@mui/material';
import AttachmentIcon from '@mui/icons-material/Attachment';
import VideocamOutlined from '@mui/icons-material/VideocamOutlined';
import {useParams} from 'next/navigation';
import {useEffect, useState} from 'react';
import {StyledDivider} from '@/components/home/index.style';

interface IFile {
  name: string;
  url: string;
}

const videoLectures = [
  {title: 'NestJS Course for Beginners', url: 'https://youtu.be/W6NZfCO5SIk?si=GSsrLc6AGkZfsUqD'},
  {title: 'NestJS Course for Beginners', url: 'https://youtu.be/GHTA143_b-s?si=M1fdxY5XFEBYHmIK'},
  {title: 'ReactJS Course for Beginners', url: 'https://youtu.be/bMknfKXIFA8?si=vCOu6vNRXnUV8eFB'},
];

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
    <Box sx={{marginLeft: '18rem'}}>
      <Typography align='center' paragraph={true} variant='h4' fontWeight={800}>
        Notes for You
      </Typography>
      {files?.map((file) => (
        <Button
          sx={{ml: '3rem'}}
          href={file.url}
          download={true}
          target='blank'
          startIcon={<AttachmentIcon />}
        >
          {file.name}
        </Button>
      ))}
      <StyledDivider sx={{margin: '3rem'}} />
      <Typography align='center' paragraph={true} variant='h4' fontWeight={800}>
        Videos for You
      </Typography>
      {videoLectures?.map((video) => (
        <Button
          sx={{ml: '3rem'}}
          href={video.url}
          download={true}
          target='blank'
          startIcon={<VideocamOutlined />}
        >
          {video.title}
        </Button>
      ))}
    </Box>
  );
}
