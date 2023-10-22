'use client';

import {Box, Button} from '@mui/material';
import AttachmentIcon from '@mui/icons-material/Attachment';
import {useParams} from 'next/navigation';
import {useEffect, useState} from 'react';

interface IFile {
  name: string;
  url: string;
}

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
    <Box sx={{justifyContent: 'center'}}>
      {files?.map((file) => (
        <Button
          sx={{marginLeft: '24rem'}}
          href={file.url}
          download={true}
          target='blank'
          endIcon={<AttachmentIcon />}
        >
          {file.name}
        </Button>
      ))}
    </Box>
  );
}
