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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam auctor, nisl eget ultricies tincidunt, nunc
            justo ultricies nunc, eget ultricies lorem ipsum
            euismod nunc. Sed euismod, nisl eget ultricies
            tincidunt, nunc justo ultricies nunc, eget ultricies
            lorem ipsum euismod nunc. Sed euismod, nisl eget
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