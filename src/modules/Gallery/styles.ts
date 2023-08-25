const content = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  padding: { xs: '2rem 1rem', md: '8rem 1rem' },
  gap: '2rem'
};

const title = {
  fontWeight: 200,
  fontSize: { xs: '2.5rem', md: '4rem' },
  color: '#2a7d2e'
};

const subtitle = {
  fontWeight: 300,
  maxWidth: { xs: '100%', md: '60%' },
};

const imageTitle = {
  fontSize: '1.3rem',
  fontWeight: 600,
  color: '#2a7d2e',
  textAlign: 'left'
};

const imageAuthor = {
  fontSize: '1rem',
  fontWeight: 300,
};

const image = {
  borderRadius: '1rem',
  maxWidth: '100%',
  width: '100%',
};

const imageList = {
  display: 'flex',
  maxWidth: '100%',
  flexWrap: 'wrap',
  gap: '30px',
  justifyContent: 'center',
  marginTop: '2rem',
};

const imageItem = {
  maxWidth: { xs: '100%', md: '30%' },
  minWidth: { xs: 'inherit', md: '500px' },
  width: '100%',
};

const seeMore = {
  fontSize: '0.9rem',
  lineHeight: '1.75',
  transition: 'all .5s',
  border: 0,
  background: '#2a7d2e',
  color: '#fff',
  padding: '0.8rem 2rem',
  borderRadius: '1.6rem',
  textTransform: 'inherit',
  display: { xs: 'none', md: 'inline-block'},
  '&:hover': {
    backgroundColor: '#2a7d2c',
  },
  textDecoration: 'none'
}

const styles = {
  title,
  content,
  subtitle,
  imageTitle,
  imageAuthor,
  image,
  imageList,
  imageItem,
  seeMore
};

export default styles;