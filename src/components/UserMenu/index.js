import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { getUser } from '../../services/profile/operations';
import MenuIcon from '@material-ui/icons/Menu';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOpenContacts = () => {
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
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon />
      </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleUserInfo}>
          <Link to="/about_user" className={styles.link}>
            My account
          </Link>
        </MenuItem>
        <MenuItem onClick={handleOpenContacts}>
          <Link to="/contacts" className={styles.link}>
            Contacts
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};
