import React from 'react';
import './Word.css';
import { Menu, Delete, ModeEdit } from '@mui/icons-material';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import MenuList from '@mui/material/MenuList';
import Popover from '@mui/material/Popover';
import { Link } from 'react-router-dom';

type WordProps = {
  id: number;
  ruWord: string;
  enWord: string;
  onDelete: (id: number) => void;
};

function Word({ id, ruWord, enWord, onDelete }: WordProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    onDelete(id);
    handleMenuClose();
    window.location.reload();
  };

  return (
    <div className='word-box'>
      <span className='word-ru'>{ruWord}</span>
      <span className='word-en'>{enWord}</span>
      <Button onClick={handleMenuOpen}><Menu /></Button>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuList className='menu'>
          <Link to={`/editword/${ruWord}`} className='edit-link'>
            <MenuItem>
              <ModeEdit />
              Редактировать
            </MenuItem>
          </Link>
          <MenuItem onClick={handleDelete}>
            <Delete />
            Удалить
          </MenuItem>
        </MenuList>
      </Popover>
    </div>
  );
}

export default Word;
