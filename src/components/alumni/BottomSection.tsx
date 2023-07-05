'use client';

import {useEffect, useState} from 'react';
import {Avatar, Box, Divider, ListItem, ListItemAvatar, ListItemText} from '@mui/material';

import {AlumniPagination, AlumniList, AlumniListItemButton, StyledTitleTwo} from './Alumni.style';
import alumniData from '@/lib/alumni.json';

const pageSize = 5;

interface IAlumni {
  id?: number;
  name?: string;
  title?: string;
  graduationYear?: string;
}

export default function BottomSectionAlumni() {
  const [alumni, setAlumni] = useState<IAlumni[]>([]);
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  useEffect(() => {
    const data = alumniData.slice(pagination.from, pagination.to);

    setPagination({...pagination, count: alumniData.length});
    setAlumni(data);
  }, [pagination.from, pagination.to]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;

    setPagination({...pagination, from, to});
  };

  return (
    <>
      <StyledTitleTwo variant='h3' sx={{marginBottom: '2rem', textAlign: 'center'}}>
        Notable Alumni
      </StyledTitleTwo>
      <AlumniList>
        {alumni.map((alumni) => (
          <ListItem key={alumni?.id}>
            <ListItemAvatar>
              <Avatar alt={alumni?.name} src='/static/images/avatar/1.jpg' />
            </ListItemAvatar>
            <ListItemText primary={alumni?.name} secondary={alumni?.title} />
            <AlumniListItemButton>Connect</AlumniListItemButton>
          </ListItem>
        ))}
        <Divider variant='inset' />
        <Box display='flex' justifyContent='center'>
          <AlumniPagination
            count={Math.ceil(pagination.count / pageSize)}
            onChange={handlePageChange}
          />
        </Box>
      </AlumniList>
    </>
  );
}
