import React from 'react';
import { Box, Container, Typography } from '@mui/material';

import image1 from '../../../assets/damir.svg';
import image2 from '../../../assets/bx1.svg';
import image3 from '../../../assets/asad.svg';
import image4 from '../../../assets/saad.svg';
import image5 from '../../../assets/mahnoor.svg';
import image6 from '../../../assets/kaxhi.svg';
import image7 from '../../../assets/asad.svg';
import image8 from '../../../assets/bengi.svg';

const cardData = [
  { id: 1, image: image1, title: 'Damir', job: 'Founder & CEO' },
  { id: 2, image: image2, title: 'BX1', job: 'Co-Founder' },
  { id: 3, image: image3, title: 'Asad Ali Akbar', job: 'Business and Development Manager' },
  { id: 4, image: image4, title: 'Saad Saeed', job: 'Lead Developer' },
  { id: 5, image: image5, title: 'Mahnoor Maqsood', job: 'Lead Designer' },
  { id: 6, image: image6, title: 'KaXhi', job: 'SEO Strategist' },
  { id: 7, image: image7, title: 'Navion Maxi', job: 'Blockchain Developer' },
  { id: 8, image: image8, title: 'Bengi Marko', job: 'Marketing Head' },
];

const CardComponent = ({ image, title, job }) => {
  return (
    <Box
      sx={{
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#FFFFFF',
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '350px',
        }}
      ></Box>

      <Box
        sx={{
          background: 'linear-gradient(to bottom right, #2F7AFF, #96D0FF)',
          padding: '30px 15px',
          borderRadius: '12px 12px 0 0', 
          marginTop: '-30px',
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#000000', fontFamily: '"Satoshi", sans-serif' }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: '#000000', fontFamily: '"Satoshi", sans-serif' }}>
          {job}
        </Typography>
      </Box>
    </Box>
  );
};

const CardGrid = () => {
  return (
    <Container 
      maxWidth="lg" 
      sx={{ 
        padding: '100px 0', 
        paddingLeft: { xs: '16px', lg: '0' }, // Set left padding to 0 on lg screens
        paddingRight: { xs: '16px', lg: '0' }, // Set right padding to 0 on lg screens
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '15px', 
        justifyContent: 'space-between' 
      }}
    >
      {cardData.map((card) => (
        <Box key={card.id} sx={{ width: { xs: '100%', sm: '48%', md: '24%' }, marginBottom: '15px' }}>
          <CardComponent
            image={card.image}
            title={card.title}
            job={card.job}
          />
        </Box>
      ))}
    </Container>
  );
};

export default CardGrid;
