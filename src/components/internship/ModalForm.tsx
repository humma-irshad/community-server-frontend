import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  TextareaAutosize,
} from '@mui/material';
import React, {useState} from 'react';

interface IProps {
  onClose: () => void;
  onAddInternship: (
    role: string,
    description: string,
    stipend: string,
    phone: string,
    email: string,
  ) => void;
}

export const ModalForm = ({onClose, onAddInternship}: IProps) => {
  const [role, setRole] = useState('');
  const [description, setDescription] = useState('');
  const [stipend, setStipend] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onAddInternship(role, description, stipend, phone, email);

    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        spacing={2}
        container
        sx={{
          m: '1.5rem auto',
          borderRadius: 3,
          maxWidth: '30rem',
        }}
      >
        <FormControl fullWidth>
          <InputLabel variant='standard' htmlFor='role'>
            Role
          </InputLabel>
          <Input
            name='role'
            aria-describedby='my-role-text'
            value={role}
            onChange={(event) => setRole(event.target.value)}
            required
            autoFocus
          />
          <FormHelperText id='my-role-text'>What role is being offered?</FormHelperText>
        </FormControl>
        <Grid item>
          <FormControl>
            <TextareaAutosize
              name='description'
              aria-describedby='description-text'
              placeholder='Work Description'
              value={description}
              minLength={250}
              onChange={(event) => setDescription(event.target.value)}
              required
              style={{
                fontSize: '18px',
                width: '26rem',
                maxWidth: '26rem',
                height: '7rem',
                padding: '0.624rem',
                marginLeft: '-1rem',
              }}
            />
          </FormControl>
        </Grid>
        <FormControl fullWidth>
          <InputLabel variant='standard' htmlFor='stipend'>
            Stipend
          </InputLabel>
          <Input
            type='number'
            name='stipend'
            aria-describedby='my-stipend-text'
            value={stipend}
            onChange={(event) => setStipend(event.target.value)}
          />
          <FormHelperText id='my-phone-text'>Stipend you're willing to pay</FormHelperText>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel variant='standard' htmlFor='phone'>
            Phone number
          </InputLabel>
          <Input
            type='tel'
            name='phone'
            aria-describedby='my-phone-text'
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
          />
          <FormHelperText id='my-phone-text'>Contact information</FormHelperText>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel variant='standard' htmlFor='phone'>
            Email
          </InputLabel>
          <Input
            type='email'
            name='email'
            aria-describedby='my-email-text'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <FormHelperText id='my-email-text'>Email Address</FormHelperText>
        </FormControl>
        <Grid container spacing={2} sx={{display: 'flex', flexDirection: 'row-reverse'}}>
          <Grid item>
            <Button type='submit' variant='contained' sx={{color: '#fff'}} children='Submit' />
          </Grid>
          <Grid item>
            <Button variant='outlined' sx={{color: '#blue'}} children='Cancel' onClick={onClose} />
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};
