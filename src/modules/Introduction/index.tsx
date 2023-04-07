import { 
  Box, 
  Container, 
  Typography,
   Button 
  } from "@mui/material";

import styles from './styles';

const Introduction = () => {
  return (
    <Box
      component="section"
      sx={styles.section}
    >
      <Container
        sx={styles.content}
        maxWidth="xl"
      >
        <Typography
          variant="h1"
          sx={styles.title}
        >
          <Box
            component="img"
            sx={styles.logo}
            alt="igs home care logo"
            src="https://landscaping.vamtam.com/wp-content/uploads/2017/09/leaves.svg"
          />
          Garden Based in NY
        </Typography>
        <Typography
          variant="subtitle1"
          sx={styles.subtitle}
        >
          Provides hassle-free backyard transformations with artistic solutions.
        </Typography>
        <Box sx={styles.actionsContainer}>
          <Button
            sx={styles.scrollButton}
            variant="outlined">
            About us
          </Button>
          <Button
            sx={styles.ctaButton}
            variant="contained"
          >
            Request an estimate
          </Button>
        </Box>
      </Container>
    </Box>
  )
};

export { Introduction };