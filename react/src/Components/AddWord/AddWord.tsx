import './AddWord.css';
import React, { useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import { ChevronLeft } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import useWordStore from '../Store';

function AddWord() {
  const { ruWord, enWord, setRuWord, setEnWord, handleReset, handleSave } = useWordStore();
  const navigate = useNavigate(); 

  useEffect(() => {
    setRuWord('');
    setEnWord('');
  }, []);

  const handleRuWordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const russianLettersRegex = /^[а-яА-ЯЁё\s]+$/;
    if (russianLettersRegex.test(event.target.value)) {
      setRuWord(event.target.value);
    } else {
      alert('Пожалуйста, введите текст на русском языке.');
    }
  };

  const handleEnWordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const englishLettersRegex = /^[a-zA-Z\s]+$/;
    if (englishLettersRegex.test(event.target.value)) {
      setEnWord(event.target.value);
    } else {
      alert('Пожалуйста, введите текст на английском языке.');
    }
  };

  const handleSaveWord = () => {
    handleSave();
    navigate('/dictionary?refresh=true');
  };

  return (
    <div className='add-word'>
      <div className='add-word__back-button-and-title'>
        <Link to='/dictionary'>
          <Button variant='outlined' size='small' className='add-word__back-button'>
            <ChevronLeft />
          </Button>
        </Link>
        <div className='add-word__title'>Добавления слова</div>
      </div>
      <div className='add-word__box'>
        <div className='add-word__vocabulary'>
          <p className='add-word__vocabulary-text'>Cловарное слово</p>
        </div>
        <div className='box__ru'>
          <span className='box__ru-title'>Слово на русском языке</span>
          <TextField
            className='box__ru-input'
            placeholder='Компонент'
            value={ruWord}
            onChange={handleRuWordChange}
          />
        </div>
        <div className='box__en'>
          <span className='box__en-title'>Перевод на английский язык</span>
          <TextField
            className='box__en-input'
            placeholder='Component'
            value={enWord}
            onChange={handleEnWordChange}
          />
        </div>
      </div>
      <div className='add-word__buttons'>
        <Button variant='contained' size='large' onClick={handleSaveWord}>
          СОХРАНИТЬ
        </Button>
        <Button variant='outlined' size='large' onClick={handleReset}>
          ОТМЕНИТЬ
        </Button>
      </div>
    </div>
  );
}

export default AddWord;
