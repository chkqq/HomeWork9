import './ModeChoise.css';
import { Button } from '@mui/material';

function ModeChoise() {
  return(
    <div className='mode-choise'>
        <div className='mode-choise__title'>Выберите режим</div>
        <div className='mode-choise__buttons'>
          <Button variant='contained'>ЗАПОЛНИТЬ СЛОВАРЬ</Button>
          <Button variant='outlined'>ПРОВЕРИТЬ ЗНАНИЯ</Button>
        </div>
    </div>
  );
}

export default ModeChoise;