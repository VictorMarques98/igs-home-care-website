import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import styles from './styles';

const pages = ["Home", "About", "Services", "Gallery", "Reviews"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={styles.appBar}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={styles.toolbar}>
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={styles.logoName}
          >
            IGS HOME CARE
          </Typography>
          <Box sx={styles.menuContainer}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              <List
                sx={styles.menuContainerMobile}
              >
                {pages.map((page) => (
                  <ListItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={styles.listItem}
                  >
                    <Typography
                      textAlign="center"
                      sx={styles.listItemText}
                    >
                      {page}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={styles.logoNameMobile}
          >
            IGS HOME CARE
          </Typography>
          <Box sx={styles.menuWrapper}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={styles.menuItem}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export { Header };
