import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { signOut } from '../../services/profile/operations';
import { UserMenu } from './UserMenu';
import styles from './styles.module.css';
import { useStyles } from './styles';

export const NavBar = ({ isAuth }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSignOut = () => dispatch(signOut());

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.menuButton}>{isAuth && <UserMenu />}</div>
          <Typography variant="h6" className={classes.title}>
            Phone Book
          </Typography>
          {!isAuth && (
            <Button color="inherit">
              <Link to="/sign_in" className={styles.link}>
                Sign In
              </Link>
            </Button>
          )}
          {!isAuth && (
            <Button>
              <Link to="/sign_up" className={styles.link}>
                Sign Up
              </Link>
            </Button>
          )}
          {isAuth && (
            <Button onClick={handleSignOut} color="inherit">
              LogOut
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
