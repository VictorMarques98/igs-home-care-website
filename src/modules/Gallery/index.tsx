import { Box, Container, Typography } from "@mui/material";

import styles from './styles';

const itemData = [
  {
    img: './1.jpeg',
    title: 'Garden',
    author: 'description',
  },
  {
    img: './3.jpeg',
    title: 'Garden',
    author: 'description',
  },
  {
    img: './3.jpeg',
    title: 'Garden',
    author: 'description',
  },
  {
    img: './4.jpeg',
    title: 'Garden',
    author: 'description',
  },
  {
    img: './1.jpeg',
    title: 'Garden',
    author: 'description',
  },
  {
    img: './3.jpeg',
    title: 'Garden',
    author: 'description',
  },
  {
    img: './3.jpeg',
    title: 'Garden',
    author: 'description',
  },
  {
    img: './4.jpeg',
    title: 'Garden',
    author: 'description',
  },
];

const Gallery = () => {
  return (
    <Box
      component="section"
      sx={styles.section}
    >
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
          We at The Gardeny are proud to offer carefully designed 
          landscapes crafted to suit our commercial clients’ 
          preferences while prioritizing sustainability.
        </Typography>
        <Box
          component="ul"
          sx={styles.imageList}
        >
          {itemData.map((item) => (
            <Box
              component="li"
              sx={styles.imageItem}
              key={item.img}
            >
              <Box
                component="img"
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
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