import {Box, Button, Grid, styled} from '@mui/material';
// import { LinkProps } from "next/link";

export const DeptBox = styled(Box)(({theme}) => ({
  marginTop: '1rem',
  marginLeft: '21rem',
  [theme.breakpoints.up('md')]: {
    width: '68%',
  },
  [theme.breakpoints.down('md')]: {
    marginLeft: '22rem',
    width: '18%',
  },
  [theme.breakpoints.down('lg')]: {
    marginLeft: '22rem',
    width: '14%',
  },
}));

export const DeptGrid = styled(Grid)(({theme}) => ({
  marginBottom: '2rem',
  [theme.breakpoints.up('md')]: {
    width: '70',
  },
  [theme.breakpoints.down('md')]: {
    width: '38',
  },
}));

export const StyledDeptButton = styled(Button)(() => ({
  display: 'flex',
  justifyContent: 'center',
  color: 'white',
  textDecoration: 'none',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'translateY(-20px)',
    borderColor: 'white',
    backgroundColor: '#000',
  },
  padding: '30px',
  marginTop: '3.5rem',
  border: '15px solid ',
  width: '12.5rem',
  borderRadius: '2rem',
  backgroundColor: 'black',
}));
