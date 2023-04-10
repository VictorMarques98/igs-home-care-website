
const section = {
  margin: '0 auto',
  // border: ' solid 5px #2a7d2e',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: { xs: "0", md: "-8rem" },
};

const content = {
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'space-between',
  justifyContent: 'flex-start',
  boxShadow: '1px 20px 17px -5px #00000010',
  margin: { xs: "0", md: "0 2rem" },
};

const borderTop = {
  display: { xs: "none", md: "flex" },
  marginTop: '-1.25rem',
  width: '100%',
  height: '1.875rem',
};

const container = {
  display: 'flex',
  flexDirection: { xs: "column", md: "row" },
  alignItems: 'center',
  justifyContent: 'center ',
  gap: { xs: "1.5rem", md: "3rem" },
  width: '100%',
  padding: { xs: "1.5rem", md: "3rem 2rem" },
};

const service = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth:  { xs: "100%", md: "20%" },
  gap: '1rem',
};

const serviceImage = {
  fontSize: '3rem',
  color: '#2a7d2e'
};

const serviceTitle = {
  fontSize: { xs: "1.5rem", md: "1.625rem" },
  color: '#0b3d2c',
  fontWeight: '300',
};

const serviceDescription = {
  textAlign: 'center',
};

const serviceLink = {
  color: '#2a7d2e',
  fontSize: '0.875rem',
  textDecoration: 'none',
  borderBottom: 'solid 2px #2a7d2e'
};

const divider = {
  width: '0.0625rem',
  backgroundColor: '#0000002b',
  height: { xs: "2rem", md: "10rem" },
};


const styles = {
  section,
  content,
  borderTop,
  container,
  service,
  serviceImage,
  serviceTitle,
  serviceDescription,
  serviceLink,
  divider
};

export default styles;