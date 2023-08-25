import { Box, Button, Container, Link, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from './styles';
import { useState } from "react";

const images = [
  "./1.webp",
  "./2.webp",
  "./3.webp",
  "./4.webp",
  "./7.webp",
  "./9.webp",
  "./11.webp",
  "./12.webp"
];

const Gallery = () => {
  const [quantity, setQuantity] = useState(4);

  function showMoreImages() {
    setQuantity(prev => prev + 4);
  };

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
          {images.slice(0, quantity).map((item) => (
            <Box
              component="li"
              sx={styles.imageItem}
              key={item}
            >
              <LazyLoadImage
                src={`${item}`}
                srcSet={`${item}`}
                placeholderSrc="garden-service"
                effect="blur"
                alt="Image of service from IGS Company"
                loading="lazy"
                style={styles.image}
              />
            </Box>
          ))}
        </Box>
        {quantity < images.length &&
          <Button
            sx={styles.seeMore}
            onClick={showMoreImages}
          >
            Show more
          </Button>
        }
      </Container>
    </Box>
  )
};

export { Gallery };