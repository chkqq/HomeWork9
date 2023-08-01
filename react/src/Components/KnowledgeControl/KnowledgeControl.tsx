import './KnowledgeControl.css';
import { Button, Container } from '@mui/material';
import { ChevronLeft } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import useWordStore from '../Store';

function shuffleArray(array: string[]) {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

function KnowledgeControl() {
  const {
    words,
    currentWordIndex,
    setCurrentWordIndex,
    selectedTranslation,
    setSelectedTranslation,
    handleCheckAnswer
  } = useWordStore();

  const englishTranslations = shuffleArray(words.map((word) => word.enWord));

  const handleTranslationChange = (event: SelectChangeEvent<string>) => {
    setSelectedTranslation(event.target.value);
  };

  const handleNextWord = () => {
    handleCheckAnswer();
    if (currentWordIndex < words.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
      setSelectedTranslation('');
    } else {
      window.location.href = '/result';
    }
  };

  const isNextButtonDisabled = !selectedTranslation;

  return (
    <div className='control'>
      <div className='control__back-button-and-title'>
        <Link to='/'>
          <Button variant='outlined' size='small' className='control__back-button'>
            <ChevronLeft />
          </Button>
        </Link>
        <div className='control__title'>Проверка Знаний</div>
      </div>
      <p className='control__number-of-word'>Cлово: {currentWordIndex + 1}  из {words.length} </p>
      <Container className='control__translation-box' maxWidth='lg'>
        <div className='translation-box__rus'>
          <span className='translation-box__rus-title'>Слово на русском языке</span>
          <div className='translation-box__rus-word'>
            <span>{words[currentWordIndex]?.ruWord}</span> 
          </div>
        </div>
        <div className='translation-box__en'>
          <span className='translation-box__en-title'>Перевод на английский язык</span>
          <FormControl className='translation-box__en-select' variant='outlined'>
            <InputLabel id='selector-label'>Выберите значение</InputLabel>
            <Select
              labelId='selector-label'
              label='Выберите значение'
              value={selectedTranslation}
              onChange={handleTranslationChange}
            >
              {englishTranslations.map((translation) => (
                <MenuItem key={translation} value={translation}>
                  {translation}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </Container>
        <Button variant='contained' size='large' className='control__check-button' onClick={handleNextWord} disabled={isNextButtonDisabled}>
          ДАЛЕЕ
        </Button>
    </div>
  );
}

export default KnowledgeControl;
