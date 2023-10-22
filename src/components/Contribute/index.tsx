'use client';

import Img1 from '@/assests/Job.svg';
import {BodyText, JobImage, TitleText, StyledBox, AddFile} from './index.styles';

import useTypewriter from 'react-typewriter-hook';
import {Modal, Typography} from '@mui/material';
import {ModalBox} from '../internship/index.style';
import {useState} from 'react';
import {ModalForm} from './ModalForm';

export default function ContributionPage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const text =
    'Contribute to communiity and uplift your skills with us. We are here to help you to get better grades in your final examinations by providing Course lectures, Graded Assignment Solutions.';
  const typedText = useTypewriter(text);
  return (
    <>
      <StyledBox>
        <JobImage src={Img1} alt='Image 1' />
        <TitleText variant='h3'>Connecting Students</TitleText>
        <BodyText variant='h6'>{typedText}</BodyText>
      </StyledBox>
      <AddFile variant='contained' onClick={handleOpen}>
        Add File
      </AddFile>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-contribute-title'
        aria-describedby='modal-contribute-description'
      >
        <ModalBox>
          <ModalForm onClose={handleClose} />
        </ModalBox>
      </Modal>
    </>
  );
}
