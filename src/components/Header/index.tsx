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
import { useScrollTrigger } from "@mui/material";

import { motion } from 'framer-motion';

import styles from './styles';
import { navVariants } from "../../utils/motion";

const pages = ["Home", "About", "Services", "Gallery", "Reviews"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window : undefined
  });

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={styles.appBar}
      style={trigger ? { backgroundColor: "#fff", boxShadow: "#000 0px 8px 14px -10px" } : {}}
      component={motion.header}
      viewport={{ once: false, amount: 1 }}
      initial="hidden"
      whileInView="show"
    >
      <Container
        maxWidth="xl"
        component={motion.div}
        variants={navVariants}
      >
        <Toolbar disableGutters sx={styles.toolbar}>
          <Box
            component="img"
            sx={styles.logo}
            alt="igs home care logo"
            src={trigger ? "/logo.png" : "/logo-white.png"}
          />
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={styles.logoName}
            style={trigger ? { color: '#2a7d2e' } : {}}
          >
            IGS HOME CARE
          </Typography>
          {/* <Box sx={styles.menuContainer}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              style={trigger ? { color: '#2a7d2e' } : {}}
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
          </Box> */}
          {/* <Box sx={styles.menuWrapper}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={styles.menuItem}
                style={trigger ? { color: '#2a7d2e', fontWeight: '500' } : {}}
              >
                {page}
              </Button>
            ))}
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export { Header };
