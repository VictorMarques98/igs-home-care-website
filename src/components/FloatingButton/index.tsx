import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CallIcon from '@mui/icons-material/Call';

import styles from './styles';

function FloatingActionButton() {
  return (
    <Box
      sx={styles.wrapper}
    >
      <Fab
        variant="extended"
        sx={styles.button}
      >
        <CallIcon sx={{ mr: 1 }} />
        Contact us
      </Fab>
    </Box>
  );
};

export { FloatingActionButton };