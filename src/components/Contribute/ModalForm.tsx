import {
  Alert,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

import React, {useEffect, useState} from 'react';

interface IProps {
  onClose: () => void;
}

interface IDeptNames {
  id?: number;
  name?: string;
  SemCount?: number;
}

export const ModalForm = ({onClose}: IProps) => {
  const [results, setResults] = useState<[]>([]);
  const [dept, setDept] = useState('');
  const [error, setError] = useState('');
  const [semester, setSemester] = useState<unknown>();
  const [fileName, setFileName] = useState('');
  const [file, setFile] = useState<File>();

  useEffect(() => {
    fetch('http://localhost:3000/deptnames')
      .then((response) => response.json())
      .then((data) => {
        setResults(data.results);
      });
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if ((semester as number) > 10 || (semester as number) <= 0) {
      return setError('Semester value is invalid');
    }

    if (!file) return setError('Please add a file');

    const formData = new FormData();
    formData.append('department', dept.toLowerCase());
    formData.append('semester', semester as string);
    formData.append('name', fileName);
    formData.append('file', file);

    fetch('http://localhost:3000/file/upload', {
      method: 'POST',
      mode: 'cors',
      body: formData,
    })
      .then((data) => console.log(data))
      .catch((err) => setError(err));
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <Alert severity='error'>{error}</Alert>}
      <Grid container marginY={4}>
        <FormControl fullWidth sx={{marginBottom: 2}}>
          <InputLabel id='dept-simple-select-label'>Department *</InputLabel>
          <Select
            labelId='dept-simple-select-label'
            id='dept-simple-select'
            value={dept}
            label='Department'
            onChange={(event) => setDept(event.target.value)}
            required
          >
            {results?.map((result: IDeptNames) => (
              <MenuItem key={result.id} value={result?.name}>
                {result?.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{marginBottom: 2}}>
          <TextField
            id='semester-simple-select'
            type='number'
            label={'Semester'}
            value={semester}
            onChange={(event) => setSemester(event.target.value)}
            required
          />
        </FormControl>
        <FormControl fullWidth sx={{mb: 2}}>
          <TextField
            id='filename-simple-select'
            type='text'
            label='File Name'
            value={fileName}
            onChange={(event) => setFileName(event.target.value)}
            required
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            id='file-simple-select'
            type='file'
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const {files} = event.target;
              const selectedFiles = files as FileList;
              setFile(selectedFiles?.[0]);
            }}
            required
            hidden
          />
        </FormControl>
      </Grid>
      <Grid container spacing={2} sx={{flexDirection: 'row-reverse', marginY: 2}}>
        <Grid item>
          <Button type='submit' variant='contained' sx={{color: '#fff'}} children='Submit' />
        </Grid>
        <Grid item>
          <Button variant='outlined' sx={{color: '#blue'}} children='Cancel' onClick={onClose} />
        </Grid>
      </Grid>
    </form>
  );
};
