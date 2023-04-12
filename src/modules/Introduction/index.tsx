import {
  Box,
  Container,
  Typography,
  Button
} from "@mui/material";

import { motion } from 'framer-motion';

import { simpleFadeIn } from '../../utils/motion';

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
        component={motion.div}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <Typography
          variant="h1"
          sx={styles.title}
          component={motion.h1}
          variants={simpleFadeIn(0.65)}
        >
          <Box
            component="img"
            sx={styles.logo}
            alt="igs home care logo"
            src="https://landscaping.vamtam.com/wp-content/uploads/2017/09/leaves.svg"
          />
          Home Gardening
        </Typography>
        <Typography
          variant="subtitle1"
          sx={styles.subtitle}
          component={motion.p}
          variants={simpleFadeIn(1)}
        >
          Your lawn and landscape cared for the way they should be!
        </Typography>
        <Box
          sx={styles.actionsContainer}
          component={motion.div}
          variants={simpleFadeIn(1.5)}
        >
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