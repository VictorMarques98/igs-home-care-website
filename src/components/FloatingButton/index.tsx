import Box from '@mui/material/Box';
import CallIcon from '@mui/icons-material/Call';

import styles from './styles';
import { Link } from '@mui/material';

function FloatingActionButton() {
  return (
    <Box sx={styles.wrapper}>
      <Link
        sx={styles.button}
        href="tel:+0421697161"
      >
        <CallIcon sx={{ mr: 1 }} />
        Contact us
      </Link>
    </Box>
  );
};

export { FloatingActionButton };