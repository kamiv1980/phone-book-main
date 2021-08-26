import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { getUser, signOut } from '../../../../services/profile/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSignOut = () => dispatch(signOut());

  const handleOpenContacts = () => {
    // dispatch(getContacts());
    setAnchorEl(null);
  };

  const handleUserInfo = () => {
    dispatch(getUser());
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.container}>
      <Button className={styles.title_menu} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        User Menu
      </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleUserInfo}>My account</MenuItem>
        <MenuItem onClick={handleOpenContacts}>
          <Link to="/contacts">Contacts</Link>
        </MenuItem>
        <MenuItem onClick={handleSignOut}>Logout</MenuItem>
      </Menu>
    </div>
  );
};
