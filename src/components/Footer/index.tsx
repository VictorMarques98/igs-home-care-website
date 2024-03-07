import { Box, Container, Typography, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import { Link as RouterLink } from 'react-router-dom'

import styles from './styles';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={styles.footer}
    >
      <Container
        sx={styles.content}
        maxWidth="xl"
      >
        <Box sx={styles.contactContainer}>
          <Link
            sx={styles.contactLink}
            component={RouterLink}
            to="/redirecting"
          >
            Call us: 0421697161
          </Link>
          <Typography
            variant="body1"
            sx={styles.text}
          >
            24/217 Brisbane road, Biggera Waters
          </Typography>
        </Box>
        <Box sx={styles.socialContainer}>
          <Link>
            <FacebookIcon sx={styles.icon} />
          </Link>
          <Link>
            <InstagramIcon sx={styles.icon} />
          </Link>
          <Link>
            <GoogleIcon sx={styles.icon} />
          </Link>
        </Box>
      </Container >
    </Box >
  );
};

export { Footer };