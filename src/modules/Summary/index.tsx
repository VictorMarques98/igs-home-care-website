import React from 'react';

import styles from './styles';

import { motion } from 'framer-motion';
import { simpleFadeIn } from '../../utils/motion';

import {
  Box,
  Container,
  Typography
} from "@mui/material";
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';

const services = [
  {
    title: 'Lawn mowing',
    description: 'Get expert advice on how to design a garden.',
    image: <OtherHousesOutlinedIcon sx={styles.serviceImage} />,
  },
  {
    title: 'Hedging and pruning',
    description: 'Get expert advice on how to design a garden.',
    image: <OtherHousesOutlinedIcon sx={styles.serviceImage} />,
  },
  {
    title: 'Weed control',
    description: 'Get expert advice on how to design a garden.',
    image: <OtherHousesOutlinedIcon sx={styles.serviceImage} />,
  },
  {
    title: 'Rubbish removal (green waste)',
    description: 'Get expert advice on how to design a garden.',
    image: <OtherHousesOutlinedIcon sx={styles.serviceImage} />,
  },
];

const Summary = () => {
  return (
    <Box
      component={motion.section}
      sx={styles.section}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.25 }}
      variants={simpleFadeIn(1)}
    >
      <Container
        sx={styles.content}
        maxWidth="lg"
        disableGutters
      >
        <Box
          component="img"
          sx={styles.borderTop}
          alt="grass"
          src="https://landscaping.vamtam.com/wp-content/uploads/2017/09/grass.svg"
        />
        <Box sx={styles.container}>
          {services.map((service, index) => (
            <React.Fragment key={service.title}>
              <Box
                sx={styles.service}
                key={service.title}
              >
                {service.image}
                <Typography
                  variant="h3"
                  sx={styles.serviceTitle}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={styles.serviceDescription}
                >
                  {service.description}
                </Typography>
              </Box>
              {index !== services.length - 1 &&
                <Box sx={styles.divider} />
              }
            </React.Fragment>
          ))}
        </Box>
      </Container>
    </Box>
  )
};

export { Summary };