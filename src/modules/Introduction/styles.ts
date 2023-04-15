const section = {
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: `linear-gradient(to bottom, rgba(25, 25, 25, 0.44), rgba(22, 100, 42, 0.72)), url(/6.webp)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

const content = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem'
};

const title = {
  display: 'flex',
  flexDirection: 'column',
  whiteSpace: 'inherit',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: { xs: "3rem", md: "4rem" },
  fontWeight: 700,
  color: '#fff',
  gap: '0.5rem',
  textAlign: 'center'
};

const logo = {
  width: { xs: 80, md: 100 },
};

const subtitle = {
  fontSize: { xs: "1rem", md: "1.5rem" },
  fontWeight: 300,
  color: '#fff',
  textAlign: 'center',
};

const actionsContainer = {
  marginTop: '2rem',
  display: 'flex',
  gap: { xs: "1rem", md: "2rem" },
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
};

const scrollButton = {
  fontSize: '0.9rem',
  border: 'solid 1px #fff',
  color: '#fff',
  padding: '0.8rem 2rem',
  borderRadius: '1.6rem',
  textTransform: 'inherit',
  '&:hover': {
    backgroundColor: '#2a7d2e',
    borderColor: '#2a7d2e',
  }
};

const ctaButton = {
  fontSize: '0.9rem',
  lineHeight: '1.75',
  transition: 'all .5s',
  border: 0,
  background: '#fff',
  color: '#2a7d2e',
  padding: '0.8rem 2rem',
  borderRadius: '1.6rem',
  textTransform: 'inherit',
  display: { xs: 'none', md: 'inline-block'},
  '&:hover': {
    backgroundColor: '#2a7d2e',
    color: '#fff',
  },
  textDecoration: 'none'
};

const styles = {
  section,
  content,
  title,
  logo,
  subtitle,
  actionsContainer,
  scrollButton,
  ctaButton
};

export default styles;