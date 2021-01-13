import React, { Fragment, useState } from 'react';
import '../../pages/QuestionsPage/QuestionsPage.css';
import Spinner from '../../components/Spinner/Spinner';
import EndPage from '../../pages/EndPage/EndPage';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

const QuestionBox = ({
    question,
    answer,
    choices: { A, B, C, D },
    id,
    setCurrentQuestion,
    currentQuestion,
    availableQuestion,
    setAvailableQuestion,
    loaded,
    setLoaded,
}) => {
    const [error, setError] = useState('');
    const [qNumber, setQNumber] = useState(0);
    const [showEndPage, setShowEndPage] = useState(false);
    const [questionClicked, setQuestionClicked] = useState(null);
    const [correct, setCorrect] = useState(false);
    const [incorrect, setIncorrect] = useState(false);
    const [marks, setMarks] = useState(0);

    const handleNextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1);
    };

    const onQuestionClick = (questionClicked, e) => {
        setQuestionClicked(e.target);

        console.log(questionClicked);
        if (e.target.innerText !== answer) {
            e.target.classList.add('incorrect');
            setTimeout(() => {
                setLoaded(false);
            }, 500);
            setTimeout(() => {
                setLoaded(true);
                handleNextQuestion();
            }, 1000);
            // e.target.classList.add('incorrect');
            // setIncorrect(true);
            // questionClicked.classList.add('incorrect');
            // updateResponses
        }
        if (e.target.innerText === answer) {
            //     // e.target.classList.add('correct');
            // setQuestionClicked(false);
            //     questionClicked.classList.add('correct');
            e.target.classList.add('correct');
            setTimeout(() => {
                setLoaded(false);
            }, 500);
            setTimeout(() => {
                setLoaded(true);
                handleNextQuestion();
            }, 1000);
            // setCorrect(true);
        }
    };

    const handlePreviousQuestion = () => {
        setCurrentQuestion(currentQuestion - 1);
    };
    return (
        <Fragment>
            {showEndPage ? (
                <EndPage />
            ) : (
                loaded && (
                    <Fragment>
                        <div
                            className='container'
                            onClick={e => {
                                setQuestionClicked(e.target);
                                onQuestionClick(questionClicked, e);
                            }}
                        >
                            <div className='justify-center flex-column'>
                                <div className='stats'>
                                    <div className='stat-item'>
                                        <p
                                            id='progressText'
                                            className='stat-prefix'
                                        >
                                            Question {id}
                                        </p>
                                        <div id='progressBar'>
                                            <div id='progressBarFull'></div>
                                        </div>
                                    </div>
                                    <div className='stat-item'>
                                        <p className='stat-prefix'>Marks:</p>
                                        <h1
                                            className='stat-main-text'
                                            id='marks'
                                        >
                                            0
                                        </h1>
                                    </div>
                                </div>
                                <h2 className='question'>{question}</h2>
                                <div className={`choice-container`}>
                                    <p className='choice-option'>A</p>
                                    <p className='choice-text'>{A}</p>
                                </div>
                                <div className={`choice-container `}>
                                    <p className='choice-option'>B</p>
                                    <p className='choice-text'>{B}</p>
                                </div>
                                <div className={`choice-container`}>
                                    <p className='choice-option'>C</p>
                                    <p className='choice-text'>{C}</p>
                                </div>
                                <div className={`choice-container `}>
                                    <p className='choice-option'>D</p>
                                    <p className='choice-text'>{D}</p>
                                </div>
                            </div>
                        </div>
                        <div className='next-btns'>
                            <button
                                onClick={() => {
                                    handlePreviousQuestion();
                                }}
                                className={`btn prev ${
                                    id > 1 ? 'show-btn' : 'hide-btn'
                                }`}
                            >
                                Prev
                            </button>

                            <button
                                onClick={handleNextQuestion}
                                className={`btn next ${
                                    id === 10 ? 'hide-btn' : 'show-btn'
                                }`}
                            >
                                Next
                            </button>
                        </div>
                    </Fragment>
                )
            )}
        </Fragment>
    );
};
export default QuestionBox;
