import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './RowCard.css'


export default function MediaControlCard(props) {

  return (
    <Card className="root">
        {props.media?
            <CardMedia
                className="cover"
                src={props.image}
                component={'img'}
            />
            :
            <div className="details">
                <CardContent className="content" >
                    <Typography component="h6" variant="h6">
                        {props.header&&props.first?'ABV:':''} {props.first}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {props.header&&props.second?'IBU:':''} {props.second}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {props.header&&props.third?'Ounces:':''} {props.third}
                    </Typography>
                </CardContent>  
                  
            </div>
        }
        
    </Card>
  );
}
