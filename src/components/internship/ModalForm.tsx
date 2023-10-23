import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  TextareaAutosize,
  Typography,
} from '@mui/material';
import React, {useState} from 'react';

interface IProps {
  onClose: () => void;
  onAddInternship: (
    role: string,
    description: string,
    stipend: string,
    phoneNumber: string,
    email: string,
    SkillRequired: string,
  ) => void;
}

export const ModalForm = ({onClose, onAddInternship}: IProps) => {
  const [formData, setFormData] = useState({
    role: '',
    description: '',
    stipend: '',
    phoneNumber: '',
    email: '',
    SkillRequired: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    onAddInternship(
      formData.role,
      formData.description,
      formData.stipend,
      formData.phoneNumber,
      formData.email,
      formData.SkillRequired,
    );

    try {
      const response = await fetch('http://localhost:3000/internships/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Success');
      } else {
        console.error('Request failed:', response.status, response.statusText, response);
      }
    } catch (error) {
      console.error('Error:', error);
    }

    onClose();
  };

  return (
    <>
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
              value={formData.role}
              onChange={handleInputChange}
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
                value={formData.description}
                minLength={250}
                onChange={handleInputChange}
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
              id=''
              type='number'
              name='stipend'
              aria-describedby='my-stipend-text'
              value={formData.stipend}
              onChange={handleInputChange}
            />
            <FormHelperText id='my-stipend-text'>Stipend you're willing to pay</FormHelperText>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel variant='standard'>Phone number</InputLabel>
            <Input
              type='text'
              id='phoneNumber'
              name='phoneNumber'
              aria-describedby='my-phone-text'
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
            <FormHelperText id='my-phone-text'>Contact information</FormHelperText>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel variant='standard' htmlFor='email'>
              Email
            </InputLabel>
            <Input
              id='email'
              type='email'
              name='email'
              aria-describedby='my-email-text'
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <FormHelperText id='my-email-text'>Email Address</FormHelperText>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel variant='standard' htmlFor='email'>
              Skills Required
            </InputLabel>
            <Input
              id='SkillRequired'
              type='text'
              name='SkillRequired'
              aria-describedby='Skill Required'
              value={formData.SkillRequired}
              onChange={handleInputChange}
              required
            />
            <FormHelperText id='my-email-text'>Skill Required</FormHelperText>
          </FormControl>
          shdgshfhghasfhafsakfhs
          <Grid container spacing={2} sx={{display: 'flex', flexDirection: 'row-reverse'}}>
            <Grid item>
              <Button type='submit' variant='contained' sx={{color: '#fff'}} children='Submit' />
            </Grid>
            <Grid item>
              <Button
                variant='outlined'
                sx={{color: '#blue'}}
                children='Cancel'
                onClick={onClose}
              />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
