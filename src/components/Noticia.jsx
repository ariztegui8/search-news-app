import { Card, CardActions, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material'
import React from 'react'

const Noticia = ({noticia}) => {

  const {publishedAt, url, urlToImage, title, description, source} = noticia;

  return (
    <Grid
      item md={6} lg={4}
    >
      <Card>
        {urlToImage && (
          <CardMedia 
          component='img'
          alt={`Imagen de la noticia ${title}`}
          image={urlToImage}
          height={'250'}
        />
        )}

        <CardContent>
          <Typography
            variant='body1'
            color='error'
          >
            {source.name}
          </Typography>

          <Typography
            variant='h5'
            component="div"
          >
            {title}
          </Typography>

          <Typography
            variant='body2'
          >
            {description}
          </Typography>
        </CardContent>

        <CardActions>
          <Link
            href={url}
            target="_blank"
            variant='button'
            sx={{
              textDecoration: 'none'
            }}
          >
            Más información
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Noticia