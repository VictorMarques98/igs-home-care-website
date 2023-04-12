const wrapper = {
    position: 'fixed',
    bottom: '1.875rem',
    right: '1.25rem',
    left: { xs: '1.25rem', md: 'unset' },
};

const button = {
    backgroundColor: '#25cd2d',
    width: { xs: '100%', md: 'max-content' },
    color: 'primary.contrastText',
    '&:hover': {
      backgroundColor: '#23d12f',
    }
};

const values = {
  wrapper,
  button
};

export default values;