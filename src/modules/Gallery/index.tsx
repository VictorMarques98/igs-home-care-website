import { Box, Container, Typography, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

import styles from './styles';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
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
          We at The Gardeny are proud to offer carefully designed landscapes crafted to suit our commercial clients’ preferences while prioritizing sustainability.
        </Typography>
        <ImageList
          sx={{ width: '100%', maxWidth: '900px' }}
          gap={30}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img} sx={{ textAlign: 'left' }}>
              <Box
                component="img"
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                sx={styles.image}
              />
              <ImageListItemBar
                title={
                  <Typography
                    variant="caption"
                    sx={styles.imageTitle}
                  >
                    {item.title}
                  </Typography>
                }
                subtitle={
                  <Typography
                    variant="caption"
                    sx={styles.imageAuthor}
                  >
                    {item.author}
                  </Typography>
                }
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </Box>
  )
};

export { Gallery };