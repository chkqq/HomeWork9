import './KnowledgeControl.css';
import { Button } from '@mui/material';
import { ChevronLeft } from '@mui/icons-material';

function KnowledgeControl() {
  return(
    <div className='control'>
      <div className='control__back-button-and-title'>
        <Button variant='outlined' size='small' className='control__back-button'><ChevronLeft></ChevronLeft></Button>
        <div className='control__title'>Словарь</div>
      </div>
    </div>
  );
}

export default KnowledgeControl;