import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
  },
  media: {
    height: 340,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div  align="center">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="http://e-cdn-images.deezer.com/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/250x250-000000-80-0-0.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
         
        </CardContent>
      </CardActionArea>
     
    </Card>
    </div>
  );
}