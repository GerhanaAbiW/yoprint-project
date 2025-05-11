import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

interface CardComponentProps {
  image: string;
  width?: number | string;
  height?: number | string;
  title: string;
  alt?: string;
  onClick?: () => void;  
}

const CardComponent: React.FC<CardComponentProps> = ({
  image,
  width = 345,
  height = 140,
  title,
  alt = 'card image',
  onClick,  
}) => {
  return (
    <Card sx={{ maxWidth: width }} onClick={onClick}> 
      <CardActionArea>
        <CardMedia
          component="img"
          height={height}
          image={image}
          alt={alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
