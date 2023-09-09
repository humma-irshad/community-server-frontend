import {Box, Button, Typography, styled} from '@mui/material';
import Image from 'next/image';

export const InternImage = styled(Image)(() => ({
  alignItems: 'right',
  marginLeft: '45rem',
  width: '55%',
  height: '30rem',
  zIndex: '1',
}));

export const InternshipTypography = styled(Typography)(() => ({
  zIndex: '1',
  marginLeft: '20rem',
  textAlign: 'center',
  position: 'absolute',
  marginTop: '1rem',
  fontFamily: 'Roboto,Helvetica,Aria,sans-serif',
}));

export const BodyText = styled(Typography)(() => ({
  zIndex: '1',
  textAlign: 'center',
  marginLeft: '20rem',
  position: 'absolute',
  marginTop: '7rem',
  width: '30%',
  fontFamily: 'Roboto,Helvetica,Aria,sans-serif',
}));

export const StyledBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  zIndex: '-1',
  '&::before': {
    content: '""',
    height: '100%',
    position: 'absolute',
    top: '-25%',
    left: 0,
    right: 0,
    background: `linear-gradient(to right, transparent,#5F5449)`,
    transform: 'skewY(-5deg)',
    transformOrigin: 'top left',
  },
}));

export const AddInternship = styled(Button)(() => ({
  marginLeft: '20rem',
  padding: '11px',
  backgroundColor: '#5F5449',
  '&:hover': {
    backgroundColor: '#82613E',
  },
}));

export const ModalBox = styled(Box)(() => ({
  position: 'absolute',
  top: '50%',
  left: '55%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  backgroundColor: '#FFF',
  border: '2px solid #FFF',
  borderRadius: '10px',
  padding: '0.55rem 3rem 0.55rem 3rem',
}));
