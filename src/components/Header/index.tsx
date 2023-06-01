import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { useScrollTrigger } from "@mui/material";

import { motion } from 'framer-motion';

import styles from './styles';

import { email } from "../../utils/constants";
import { navVariants } from "../../utils/motion";

function Header() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window : undefined
  });

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
            src={trigger ? "/logo.webp" : "/logo-white.webp"}
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
          <Typography
            variant="h6"
            component="a"
            href="/redirecting"
            sx={styles.callNumber}
            style={trigger ? { color: '#2a7d2e' } : {}}
          >
            Call Us: +0421697161
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export { Header };
