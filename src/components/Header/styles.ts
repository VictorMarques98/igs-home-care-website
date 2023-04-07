const appBar = {
  backgroundColor: 'transparent', 
  boxShadow: 'none',
};

const logoName = {
  mr: 2,
  display: { xs: "none", md: "flex" },
  fontFamily: "monospace",
  fontWeight: 700,
  color: "inherit",
  textDecoration: "none",
};

const toolbar ={
  height: "90px"
};

const menuContainer = {
  flexGrow: 1, 
  display: { xs: "flex", md: "none" }
};

const menuWrapperMobile = {
  display: { xs: "block", md: "none" },
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};

const logoNameMobile = {
  mr: 2,
  display: { xs: "flex", md: "none" },
  flexGrow: 1,
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none"
};

const menuWrapper = {
  flexGrow: 1, 
  display: { xs: "none", md: "flex" }, 
  justifyContent: 'center',
};

const menuItem = {
  my: 2,
  color: "#fff",
  display: "block",
  textTransform: "inherit",
  fontSize: "1rem",
  margin: 0,
  padding: "0 1rem",
  fontWeight: 400,
  '&:hover': {
    color: "#d6d2d2",
  }
};

const menuItemMobile = {
  border: "solid 1px red",
};

const menuContainerMobile = {
  maxWidth: "250px",
  minWidth: "150px",
  width: "50vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "1rem",
  height: "100%"
};

const listItem = {
  paddingLeft: '1.8rem',
};

const listItemText = {
  fontWeight: 600,
  fontSize: "1.2rem",

};

const styles = {
  appBar,
  logoName,
  toolbar,
  menuContainer,
  menuWrapper,
  logoNameMobile,
  menuWrapperMobile,
  menuItem,
  menuItemMobile,
  menuContainerMobile,
  listItem,
  listItemText
};

export default styles;