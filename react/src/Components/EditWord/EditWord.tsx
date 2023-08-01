import './EditWord.css';
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { ChevronLeft } from '@mui/icons-material';
import useWordStore from '../Store';

function EditWord() {
  const { id } = useParams(); 
  const { words, ruWord, enWord, setRuWord, setEnWord, handleReset, handleEdit } = useWordStore();
  const navigate = useNavigate();

  useEffect(() => {
    const selectedWord = words.find((word) => word.ruWord === id);
    if (selectedWord) {
      setRuWord(selectedWord.ruWord);
      setEnWord(selectedWord.enWord);
    }
  }, [id, words, setRuWord, setEnWord]);

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

  const handleEditWord = () => {
    const selectedWord = words.find((word) => word.ruWord === id);
    if (selectedWord) {
      const updatedWord = { ...selectedWord, ruWord, enWord };
      handleEdit(updatedWord);
    }
    navigate('/dictionary');
  };

  return (
    <div className='edit-word'>
      <div className='edit-word__back-button-and-title'>
        <Link to='/dictionary'>
          <Button variant='outlined' size='small' className='edit-word__back-button'>
            <ChevronLeft />
          </Button>
        </Link>
        <div className='edit-word__title'>Редактирование слова</div>
      </div>
      <div className='edit-word__box'>
        <div className='edit-word__vocabulary'>
          <p className='edit-word__vocabulary-text'>Словарное слово</p>
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
      <div className='edit-word__buttons'>
        <Button variant='contained' size='large' onClick={handleEditWord}>
          СОХРАНИТЬ
        </Button>
        <Button variant='outlined' size='large' onClick={handleReset}>
          ОТМЕНИТЬ
        </Button>
      </div>
    </div>
  );
}

export default EditWord;
