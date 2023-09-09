'use client';
import {useState} from 'react';
import useTypewriter from 'react-typewriter-hook';

import intern from '@/assests/internship.png';
import {
  AddInternship,
  BodyText,
  InternImage,
  InternshipTypography,
  ModalBox,
  StyledBox,
} from './index.style';
import {Modal} from '@mui/material';
import {ModalForm} from './ModalForm';
import {InternshipCard} from './InternshipCard';

export default function Internship() {
  interface ICard {
    id?: string;
    role?: string;
    description?: string;
    stipend?: string;
    phone?: string;
    email?: string;
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [card, setCard] = useState<ICard[]>([]);

  const addInternship = (
    role: string,
    description: string,
    stipend: string,
    phone: string,
    email: string,
  ) => {
    setCard((prevCard: ICard[]) => {
      return [...prevCard, {id: Math.random().toString(), role, description, stipend, phone, email}];
    });
  };

  const text =
    'Get internship opportunities from your very own alumni and passouts. Learn new skills, and develop applications that will help you out in the real world to become a skilled developer.';
  const typedText = useTypewriter(text);

  return (
    <>
      <StyledBox>
        <InternImage src={intern} alt='intern at work' />
        <InternshipTypography variant='h3'>Internships & Workshops</InternshipTypography>
        <BodyText>{typedText}</BodyText>
      </StyledBox>
      <AddInternship variant='contained' onClick={handleOpen}>
        Add Oppurtunity
      </AddInternship>
      {card?.map((item: ICard) => (
        <InternshipCard
          key={item.id}
          role={item.role}
          description={item.description}
          stipend={item.stipend}
          phone={item.phone}
          email={item.email}
        />
      ))}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-intern-title'
        aria-describedby='modal-intern-description'
      >
        <ModalBox>
          <ModalForm onClose={handleClose} onAddInternship={addInternship} />
        </ModalBox>
      </Modal>
    </>
  );
}
