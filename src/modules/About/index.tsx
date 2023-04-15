import {
  Box,
  Container,
  Typography,
  Button
} from "@mui/material";

import styles from './styles';

const About = () => {
  return (
    <Box
      component="section"
      sx={styles.section}
    >
      <Container sx={styles.content}>
        <Box
          component="div"
          sx={styles.textContainer}
        >
          <Typography
            variant="h6"
            sx={styles.title}
          >
            About us
          </Typography>
          <Typography
            variant="subtitle1"
            sx={styles.subtitle}
          >
            Gardeny offers a full-service garden design to clients.
          </Typography>
          <Typography
            variant="body1"
            sx={styles.body}
          >
            We are a professional gardening service company that offers a 
            comprehensive range of services, including landscape design, 
            lawn maintenance, seasonal clean-ups, and garden renovation. 
            Our experienced team of professionals is dedicated to delivering 
            top-notch services that meet your specific needs and preferences. 
            We work closely with you to create beautiful outdoor spaces that 
            add value to your property and enhance your quality of life. 
            Contact us today to learn more about our services and how we 
            can help bring your outdoor space to life!
          </Typography>
        </Box>
        <Box
          component="img"
          srcSet="./5.webp"
          alt="IGS Company"
          loading="lazy"
          sx={styles.image}
        />
      </Container>
    </Box>
  );
};

export { About };