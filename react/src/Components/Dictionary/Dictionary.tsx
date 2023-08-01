import './Dictionary.css';
import Word from '../Word/Word';
import { Button } from '@mui/material';
import { ChevronLeft } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import useWordStore from '../Store';

function Dictionary() {
  const { words, handleDelete } = useWordStore();
  const location = useLocation();
  const [updatedWord, setUpdatedWord] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('refresh') === 'true') {
      window.location.reload();
      params.delete('refresh');
      window.history.replaceState({}, '', `${location.pathname}?${params}`);
    }
  }, [location]);

  useEffect(() => {
    if (updatedWord) {
      setUpdatedWord(null);
    }
  }, [updatedWord]);

  return (
    <div className='dictionary'>
      <div className='dictionary__back-button-and-title'>
        <Link to='/'>
          <Button variant='outlined' size='small' className='dictionary__back-button'>
            <ChevronLeft />
          </Button>
        </Link>
        <div className='dictionary__title'>Словарь</div>
      </div>
      <Link to={'/addword'}>
        <Button variant='contained' size='large'>
          + Добавить Слово
        </Button>
      </Link>
      {words.length > 0 && (
        <div className='dictionary__word'>
          <div className='info-box'>
            <span>Слово на русском языке</span>
            <span>Перевод на Английский язык</span>
            <span>Действие</span>
          </div>
          {words.map((word) => (
            <Word
              id={word.id}
              key={`${word.ruWord}-${word.enWord}`}
              ruWord={word.ruWord}
              enWord={word.enWord}
              onDelete={() => handleDelete(word.ruWord, word.enWord)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Dictionary;
