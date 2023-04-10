const section = {
  maxWidth: '1100px',
  margin: '0 auto'
};

const content = {
  margin: '0 auto',
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem'
};

const title = {
  fontSize: { xs: '2rem', md: '3rem' },
  color: '#124a2f'
};

const subtitle = {
  fontSize: { xs: '1rem', md: '1.4rem' },
  color: '#878275'
};

const textContainer = {
  background: '#fff',
  padding: '1rem',
  textAlign: { xs: 'center', md: 'left'}
};

const body = {
  margin: '1rem 0'
};

const image = {
  maxWidth: { xs: '600px', md: '45%' },
  borderRadius: '1rem',
  width: '100%'
};

const styles = {
  section,
  content,
  title,
  subtitle,
  textContainer,
  image,
  body
};

export default styles;