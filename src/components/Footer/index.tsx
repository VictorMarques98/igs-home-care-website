import { Box, Container, Typography, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';

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
            href=""
          >
            Call us: 99999099999
          </Link>
          <Typography
            variant="body1"
            sx={styles.text}
          >
            New York, USA – 1060 Firs Avenue, Muswell Hill
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