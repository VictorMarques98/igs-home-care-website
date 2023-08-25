import styles from './styles';
import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import CallIcon from '@mui/icons-material/Call';
import { Link as LinkReact } from 'react-router-dom';

function FloatingActionButton() {
  const isTablet = window.innerWidth <= 768;
  return (
    <Box sx={styles.wrapper}>
      <Link sx={styles.button}>
        <LinkReact to="/redirecting" style={styles.link}>
          <CallIcon sx={{ mr: 1 }} />
          Contact us
        </LinkReact>
      </Link>
    </Box>
  );
};

export { FloatingActionButton };