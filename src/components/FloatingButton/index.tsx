import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CallIcon from '@mui/icons-material/Call';

const styles = {
  container: {
    backgroundColor: '#249029',
    color: 'primary.contrastText',
    '&:hover': {
      backgroundColor: '#23d12f',
    }
  }
};

function FloatingActionButton() {
  return (
    <Box
      position="fixed"
      bottom={20}
      right={20}
    >
      <Fab
        variant="extended"
        sx={styles.container}
      >
        <CallIcon sx={{ mr: 1 }} />
        Contact us
      </Fab>
    </Box>
  );
};

export { FloatingActionButton };