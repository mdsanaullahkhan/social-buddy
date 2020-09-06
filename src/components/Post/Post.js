import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

const Post = (props) => {

    const history = useHistory();

    const viewPost = (id) => {
        history.push('/'+id);
    }

    const { id, title } = props.post;

    const classes = useStyles();

    return (
        <div>
            <h3>Title: {title}</h3>
            <h5>Id: {id}</h5>
            <Button
                onClick={() => viewPost(id)}
                variant="contained"
                color="primary"
                className={classes.button}
            >
            See ALL
            </Button>
            
        </div>
    );
};

export default Post;