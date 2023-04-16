import { Box, Container, Typography } from "@mui/material";

import styles from './styles';

const images = ["./1.webp", "./2.webp", "./3.webp", "./4.webp"];

const Gallery = () => {
  return (
    <Box component="section" >
      <Container
        sx={styles.content}
        maxWidth="xl"
      >
        <Typography
          variant="h3"
          sx={styles.title}
        >
          We handle everything for you
        </Typography>
        <Typography
          variant="subtitle1"
          sx={styles.subtitle}
        >
          We are proud to offer carefully designed
          landscapes crafted to suit our clients’
          preferences while prioritizing sustainability.
        </Typography>
        <Box
          component="ul"
          sx={styles.imageList}
        >
          {images.map((item) => (
            <Box
              component="li"
              sx={styles.imageItem}
              key={item}
            >
              <Box
                component="img"
                src={`${item}?w=248&fit=crop&auto=format`}
                srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt="Image of service from IGS Company"
                loading="lazy"
                sx={styles.image}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
};

export { Gallery };