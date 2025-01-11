import './FlashcardList.css'

const FlashcardList = ({flashcards, onDelete}) => {
    return (
        <ul className='flashcard-list'>
            {flashcards.length === 0 && <h4>No flashcards</h4> }
            {flashcards.map((flashcard, index) => {
                return (
                    <li key={index} className='flashcard-list-item'>
                        <h3>{flashcard.question}</h3>
                        <p>{flashcard.answer}</p>
                        <button className='flashcard-list-item-button' onClick={() => onDelete(flashcard.id)}>Delete</button>
                    </li>
                )
            })}
        </ul>
    )
}

export default FlashcardList
