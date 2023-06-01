import {
  Box,
  Container,
  Typography,
  Button,
  Link
} from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

import { motion } from 'framer-motion';

import { simpleFadeIn } from '../../utils/motion';

import styles from './styles';

const Redirect = () => {
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
          <CircularProgress
            size={80}
            style={{color: '#fff', marginBottom: '1rem'}}
          />
          We are redirecting you to our contact...
        </Typography>
      </Container>
    </Box>
  )
};

export { Redirect };