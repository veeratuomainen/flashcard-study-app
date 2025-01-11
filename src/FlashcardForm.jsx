import { useState } from 'react'

import './FlashcardForm.css'

const FlashcardForm = (props) => {
    const [enteredCard, setEnteredCard] = useState([{
        question: '',
        answer: ''
    }])

    const cardAddedHandler = (event) => {
        setEnteredCard((prevState) => ({
            ...prevState,
            // name attribute tells function whether it's updating question or answer
            [event.target.name]: event.target.value
        }))
    }

    const submitHandler = (event) => {
        event.preventDefault()
        props.onCardAdded(enteredCard)
        // reset form after submission
        setEnteredCard({question: '', answer: ''})
    }

    return (
        <form onSubmit={submitHandler} className='flashcard-form'>
            <h3>Question</h3>
            <input
                type="text"
                name='question'
                onChange={cardAddedHandler}
                value={enteredCard.question}
                className='flashcard-form__input'
            />
            <h3>Answer</h3>
            <input
                type="text"
                name='answer'
                onChange={cardAddedHandler}
                value={enteredCard.answer}
                className='flashcard-form__input'
            />
            <p></p>
            <button type='submit' className='flashcard-form__button'>Add flashcard</button>
        </form>
    )
}

export default FlashcardForm
