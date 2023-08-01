import './ModeChoise.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function ModeChoise() {
  return (
    <div>
      <div className='mode-choise'>
        <div className='mode-choise__title'>Выберите режим</div>
        <div className='mode-choise__buttons'>         
            <Link to="/dictionary">
              <Button variant='contained'>ЗАПОЛНИТЬ СЛОВАРЬ</Button>
            </Link>                    
            <Link to="/control">
              <Button variant='outlined'>ПРОВЕРИТЬ ЗНАНИЯ</Button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default ModeChoise;
