import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ModeChoise from './Components/ModeChoise/ModeChoise';
import Dictionary from './Components/Dictionary/Dictionary';
import KnowledgeControl from './Components/KnowledgeControl/KnowledgeControl';
import AddWord from './Components/AddWord/AddWord';
import EditWord from './Components/EditWord/EditWord';
import Result from './Components/Result/Result';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ModeChoise />} />
        <Route path='/dictionary' element={<Dictionary />} />
        <Route path='/control' element={<KnowledgeControl/>}/>
        <Route path='/addword' element={<AddWord/>}/>
        <Route path='/editword/:id' element={<EditWord/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>
    </Router>
  );
};

export default App;