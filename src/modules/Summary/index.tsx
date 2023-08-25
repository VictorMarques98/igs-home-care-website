import React from 'react';

import styles from './styles';

import { motion } from 'framer-motion';
import { simpleFadeIn } from '../../utils/motion';

import {
  Box,
  Container,
  Typography
} from "@mui/material";

const services = [
  {
    title: 'Lawn mowing',
    description: 'Expert lawn mowing for your yard',
    image: "/i-4.webp",
  },
  {
    title: 'Hedging and pruning',
    description: 'Professional hedge and tree trimming.',
    image: "/i-1.webp",
  },
  {
    title: 'Weed control',
    description: 'Effective weed removal and prevention.',
    image: "/i-3.webp",
  },
  {
    title: 'Rubbish removal (green waste)',
    description: 'Quick and reliable rubbish removal.',
    image: "/i-2.webp",
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
      id="summary"
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
                <Box
                  sx={styles.serviceImage}
                  component={motion.img}
                  src={service.image}
                  />
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