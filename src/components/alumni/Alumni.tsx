'use client';

import TopSectionAlumni from './TopSection';
import MiddleSectionAlumni from './MiddleSection';
import BottomSectionAlumni from './BottomSection';
import {Box} from '@mui/system';

export default function Alumni() {
  return (
    <Box
      sx={{
        marginLeft: '15rem',
      }}
    >
      <TopSectionAlumni />
      <MiddleSectionAlumni />
      <BottomSectionAlumni />
    </Box>
  );
}
