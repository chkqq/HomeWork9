import { create } from 'zustand';

type Word = {
  ruWord: string;
  enWord: string;
};

type WordWithId = Word & {
  id: number;
};


type WordState = {
  words: WordWithId[];
  ruWord: string;
  enWord: string;
  currentWordIndex: number;
  selectedTranslation: string;
  correctAnswers: number;
  isGameFinished: boolean;
  setRuWord: (ruWord: string) => void;
  setEnWord: (enWord: string) => void;
  handleReset: () => void;
  handleSave: () => void;
  handleEdit: (updatedWord: WordWithId) => void;
  handleDelete: (ruWord: string, enWord: string) => void;
  setCurrentWordIndex: (index: number) => void;
  setSelectedTranslation: (translation: string) => void;
  handleCheckAnswer: () => void;
};

const useWordStore = create<WordState>((set) => {
  const storedRuWord = localStorage.getItem('ruWord') || '';
  const storedEnWord = localStorage.getItem('enWord') || '';
  const storedData = localStorage.getItem('words');
  const storedCorrectAnswers = localStorage.getItem('correctAnswers')
    ? parseInt(localStorage.getItem('correctAnswers') || '0', 10)
    : 0;
  const parsedData: WordWithId[] = storedData ? JSON.parse(storedData) : [];


  return {
    words: parsedData,
    ruWord: storedRuWord,
    enWord: storedEnWord,
    currentWordIndex: 0,
    selectedTranslation: '',
    correctAnswers: storedCorrectAnswers,
    isGameFinished: false,
    setRuWord: (ruWord) => {
      localStorage.setItem('ruWord', ruWord);
      set({ ruWord });
    },
    setEnWord: (enWord) => {
      localStorage.setItem('enWord', enWord);
      set({ enWord });
    },
    handleReset: () => {
      localStorage.removeItem('ruWord');
      localStorage.removeItem('enWord');
      localStorage.removeItem('correctAnswers'); 
      set({
        ruWord: '',
        enWord: '',
        currentWordIndex: 0,
        selectedTranslation: '',
        correctAnswers: 0, 
        isGameFinished: false,
      });
    },
    handleSave: () => {
      const { ruWord, enWord } = useWordStore.getState();
      if (ruWord && enWord) {
        const newWord: Word = { ruWord, enWord };
        const updatedWords = [...useWordStore.getState().words, newWord];
        localStorage.setItem('words', JSON.stringify(updatedWords));
        set({ ruWord: '', enWord: '' });
      }
    },

    handleEdit: (updatedWord) => {
      set((state) => {
        const updatedWords = state.words.map((word) =>
          word.id === updatedWord.id ? updatedWord : word
        );

        localStorage.setItem('words', JSON.stringify(updatedWords));

        return { ...state, words: updatedWords };
      });
    },
    

    handleDelete: (ruWord, enWord) => {
      if (ruWord && enWord) {
        const updatedWords: Word[] = useWordStore
          .getState()
          .words.filter((word: Word) => word.ruWord !== ruWord || word.enWord !== enWord);
        localStorage.setItem('words', JSON.stringify(updatedWords));
      }
    },
    setCurrentWordIndex: (index) => set({ currentWordIndex: index }),
    setSelectedTranslation: (translation) => set({ selectedTranslation: translation }),
    handleCheckAnswer: () => {
      set((state) => {
        const currentWord = state.words[state.currentWordIndex];
        const isCorrect = currentWord.enWord === state.selectedTranslation;
        const updatedCorrectAnswers = isCorrect ? state.correctAnswers + 1 : state.correctAnswers;
    
        localStorage.setItem('correctAnswers', String(updatedCorrectAnswers));
        return {
          correctAnswers: updatedCorrectAnswers,
          isGameFinished: state.currentWordIndex >= state.words.length - 1,
        };
      });
    },    
  };
});

export default useWordStore;

