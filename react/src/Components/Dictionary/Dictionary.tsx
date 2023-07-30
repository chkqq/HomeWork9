import './Dictionary.css';
import Word from '../Word/Word';
import { Button } from '@mui/material';
import { ChevronLeft } from '@mui/icons-material';

function Dictionary() {
  return(
    <div className='dictionary'>
      <div className='dictionary__back-button-and-title'>
        <Button variant='outlined' size='small' className='dictionary__back-button'><ChevronLeft></ChevronLeft></Button>
        <div className='dictionary__title'>Словарь</div>
      </div>
      <Button variant="contained" size='large'>+ Добавить Слово</Button>
      <div className='dictionary__word'>
        <div className='info-box'>
          <span>Слово на русском языке</span>
          <span>Перевод на Английский язык</span>
          <span>Действие</span>
        </div>
        <Word></Word>
      </div>
    </div>
  );
}
export default Dictionary;