import './Result.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import useWordStore from '../Store'; 

function Result() {
  const { words, correctAnswers, handleReset } = useWordStore();
  
  return(
    <div className='result'>
        <div className='result__title'>Результаты</div>
      <div className='result-box'>
      <span className='result-box__title'>Ответы</span>
        <div className='result-box__correct'>
          <div className='result-box__text-and-icon'>
            <CheckCircleOutlineIcon sx={{color: `#50AC58`}}/><span>Правильные</span>
          </div>          
          <span>{correctAnswers}</span>
        </div>
        <div className='result-box__wrong'>
          <div className='result-box__text-and-icon'>
            <HighlightOffIcon sx={{color: `#D00000`}}/><span>Ошибочные</span>
          </div>         
          <span>{words.length - correctAnswers}</span>
        </div>
        <div className='result-box__all'>
          <div className='result-box__text-and-icon'>
            <MenuBookIcon sx={{color: `#9932AB`}}/><span>Всего слов</span>
          </div>
          <span>{words.length}</span>
        </div>
      </div>
      <div className='result__buttons'>
      <Link to='/control'>
          <Button variant='contained' size='large' onClick={handleReset}>
            НАЧАТЬ ЗАНОВО
          </Button>
        </Link>
      <Link to='/'>
        <Button variant='outlined' size='large' onClick={handleReset}>
          ВЕРНУТЬСЯ В НАЧАЛО
        </Button>
      </Link>
      </div>
    </div>
  );
}

export default Result;