import { useState } from 'react'

import './FlashcardReview.css'

const FlashcardReview = ({flashcards}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isFlipped, setIsFlipped] = useState(false)

    if (flashcards.length === 0) {
        return <h4>No flashcards</h4>
    }

    const handleFlip = () => {
        setIsFlipped((prevFlipped) => !prevFlipped)
    }

    const handlePrevious = () => {
        setIsFlipped(false) // reset so that new card does not show the answer straight away
        setCurrentIndex((prevId) => prevId === 0 ? flashcards.length - 1 : prevId - 1)
    }

    const handleNext = () => {
        setIsFlipped(false)
        setCurrentIndex((prevId) => (prevId + 1) % flashcards.length)
        // use modulo so that after the last card on the array 'next' goes to the first card
    }

    const currenFlashcard = flashcards[currentIndex]

    return (
        <div className='flashcard-review'>
            <div className='flashcard-review-item'>
                <h3>{isFlipped ? currenFlashcard.answer : currenFlashcard.question}</h3>
                <button onClick={handleFlip} className='flashcard-review-button'>Flip</button>
            </div>
            <div>
                <button onClick={handlePrevious} className='flashcard-review-button'>Previous</button>
                <button onClick={handleNext} className='flashcard-review-button-next'>Next</button>
            </div>
        </div>
    )
}

export default FlashcardReview
