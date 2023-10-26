import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import girl1 from '@/assests/girl1.jpg';
import girl2 from '@/assests/girl2.jpg';
import boy from '@/assests/boyAvatar.png';

const developers = [
  {
    name: 'Humma Irshad',
    profession: 'Full Stack Developer',
    avatarSrc: girl2,
  },
  {
    name: 'Mohammad Amman ul haq',
    profession: 'Full Stack Developer',
    avatarSrc: boy,
  },
  {
    name: 'Uzma Rashid Mir',
    profession: 'UI/UX Designer, Front End Developer',
    avatarSrc: girl1,
  },
];

export default function DevelopersComponent() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      maxWidth='lg'
    >
      <Typography variant='h4' align='center' sx={{marginLeft: '5rem', mb: '1rem'}}>
        Our Developers
      </Typography>
      <Grid sx={{marginLeft: '2rem'}} container spacing={5}>
        {developers.map((developer, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Avatar
              alt={developer.name}
              src={developer.avatarSrc.src}
              sx={{width: 120, height: 120, mx: 'auto'}}
            />
            <Typography variant='h6' align='center' gutterBottom>
              {developer.name}
            </Typography>
            <Typography variant='subtitle1' align='center' color='textSecondary'>
              {developer.profession}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
