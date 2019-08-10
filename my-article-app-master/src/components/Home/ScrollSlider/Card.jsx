import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
const useStyles = makeStyles({
  card: {
    minWidth: 310,
    maxWidth: 310,
    height: 400
  },
  abstract:{
    height: 80,
    overflow: "hidden"
  },
  media: {
    height: 140,
    width: "100%"
  },
});

export default function MediaCard({item}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.img}
          title={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {item.title}
          </Typography>
          <Typography className={classes.abstract} variant="body2" color="textSecondary" component="p">
            {item.abstract}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link className="article-link" to={`/article/${item._id}`}>
          Learn More
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
