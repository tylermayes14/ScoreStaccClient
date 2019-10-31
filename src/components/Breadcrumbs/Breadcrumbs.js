import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(1, 2),
    },
    link: {
      display: 'flex',
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
    },
}));

const Breadcrumb = () => {
    const classes = useStyles();

    return (
      <Paper elevation={0} className={classes.root}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/" className={classes.link}>
            <HomeIcon className={classes.icon} />
            Home
          </Link>
          <Link
            color="inherit"
            href="/getting-started/installation/"
            className={classes.link}
          >
            <WhatshotIcon className={classes.icon} />
            Core
          </Link>
          <Typography color="textPrimary" className={classes.link}>
            <GrainIcon className={classes.icon} />
            Breadcrumb
          </Typography>
        </Breadcrumbs>
      </Paper>
    );
}

export default Breadcrumbs;