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
  gap: '0.5rem',
  maxWidth: '900px',
};

const title = {
  display: 'flex',
  flexDirection: 'column',
  whiteSpace: 'inherit',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: { xs: "2rem", md: "3rem" },
  fontWeight: 700,
  color: '#fff',
  gap: '0.5rem',
  textAlign: 'center'
};

const styles = {
  section,
  content,
  title,
};

export default styles;