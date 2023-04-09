import React from 'react';

import { Box, Container, Link, Typography } from "@mui/material";
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';

import styles from './styles';

const services = [
  {
    title: 'Gardens',
    description: 'Get expert advice on how to design a garden.',
    linkText: '#gardens',
    image: <OtherHousesOutlinedIcon sx={styles.serviceImage} />,
  },
  {
    title: 'Gardens',
    description: 'Get expert advice on how to design a garden.',
    linkText: '#gardens',
    image: <OtherHousesOutlinedIcon sx={styles.serviceImage} />,
  },
  {
    title: 'Gardens',
    description: 'Get expert advice on how to design a garden.',
    linkText: '#gardens',
    image: <OtherHousesOutlinedIcon sx={styles.serviceImage} />,
  },
];

const Summary = () => {
  return (
    <Box
      component="section"
      sx={styles.section}
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
                <Link
                  sx={styles.serviceLink}
                  href={`#${service.linkText}`}
                >
                  Read more
                </Link>
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
}

export { Summary };