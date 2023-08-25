import styles from './styles';

import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import CallIcon from '@mui/icons-material/Call';

function FloatingActionButton() {
  const isTablet = window.innerWidth <= 768;
  return (
    <Box sx={styles.wrapper}>
      <Link
        sx={styles.button}
        href="https://igshomecare.com.au/redirecting/"
      >
        <CallIcon sx={{ mr: 1 }} />
        Contact us
      </Link>
    </Box>
  );
};

export { FloatingActionButton };