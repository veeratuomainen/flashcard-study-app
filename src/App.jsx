import { useState, useEffect } from 'react'
import { v4 as uuidv4} from 'uuid'

import './App.css'

import FlashcardForm from './FlashcardForm'
import FlashcardList from './FlashcardList'
import FlashcardReview from './FlashcardReview'

function App() {
  const [flashcards, setFlashcards] = useState([])
  const [currentSection, setCurrentSection] = useState('')

  // load flashcards from local storage
  useEffect(() => {
    const savedFlashcards = localStorage.getItem('flashcards')
        if (savedFlashcards) {
            setFlashcards(JSON.parse(savedFlashcards))
        }
  }, []) // empty dependency to only run once

  // save flashcards to local storage
  useEffect(() => {
    localStorage.setItem('flashcards', JSON.stringify(flashcards))
  }, [flashcards]) // flashcards depence, so it runs when flashcards change

  const onCardAddedHandler = (card) => {
    const newFlashcard = {
      id: uuidv4(),
      question: card.question,
      answer: card.answer
    }
    setFlashcards([...flashcards, newFlashcard])
  }

  const onDeleteHandler = (id) => {
    setFlashcards(flashcards.filter((flashcard) => flashcard.id !== id))
  }

  return (
    <>
      <h1>Flashcard Study App</h1>
      <button className='render-button' onClick={() => setCurrentSection('create')}>Create Flashcards</button>
      <button className='render-button' onClick={() => setCurrentSection('view')}>View Flashcards</button>
      <button className='render-button' onClick={() => setCurrentSection('review')}>Review Flashcards</button>

      {currentSection === 'create' && <FlashcardForm onCardAdded={onCardAddedHandler}/>}
      {currentSection === 'view' && <FlashcardList flashcards={flashcards} onDelete={onDeleteHandler}/>}
      {currentSection === 'review' && <FlashcardReview flashcards={flashcards}/>}
    </>
  )
}

export default App
