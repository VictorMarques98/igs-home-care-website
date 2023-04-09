import IntroImg from "../../assets/Introimg.jpeg";

const section = {
  height: '80vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: `linear-gradient(to bottom, rgba(25, 25, 25, 0.52), rgba(12, 39, 19, 0.80)), url(${IntroImg})`,
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
  fontWeight: 700,
  color: '#fff',
  textAlign: 'center',
};

const actionsContainer = {
  marginTop: '2rem',
  display: 'flex',
  gap: '2rem',
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
  border: 0,
  background: '#fff',
  color: '#2a7d2e',
  padding: '0.8rem 2rem',
  borderRadius: '1.6rem',
  textTransform: 'inherit',
  '&:hover': {
    backgroundColor: '#2a7d2e',
    color: '#fff',
  }
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