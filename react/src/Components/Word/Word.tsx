import './Word.css';
import { Menu } from '@mui/icons-material';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

function Word() {
  return(
    <div className='word-box'>
      <span className='word-ru'>Автомобиль</span>
      <span className='word-en'>Car</span>
      <Menu></Menu>
    </div>
  );
}
export default Word;