import {Button, Card, CardActions, CardContent, Typography} from '@mui/material';

interface ICard {
  role?: string;
  description?: string;
  stipend?: string;
  phone?: string;
  email?: string;
}

export const InternshipCard = (props: ICard) => {
  return (
    <Card sx={{width: '50rem', marginLeft: '20rem', mt: 5, boxShadow: 16}}>
      <CardContent>
        <Typography sx={{fontSize: 14}} variant='caption' fontWeight={1000} gutterBottom>
          Role: {props.role}
        </Typography>
        <Typography variant='body2' sx={{mt: 1.5}}>
          {props.description}
          <br />
        </Typography>
        <br />
        <Typography sx={{mb: 1}} color='darkgrey'>
          {props.phone}
        </Typography>
        <Typography sx={{mb: 1}} color='darkgrey'>
          {props.email}
        </Typography>
        <Typography sx={{mb: 1}} color='darkgrey'>
          Stipend: {props.stipend ? `₹${props.stipend}` : 'No stipend'}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size='small' sx={{color: '#FF0000'}}>
          Delete
        </Button>
      </CardActions> */}
    </Card>
  );
};
