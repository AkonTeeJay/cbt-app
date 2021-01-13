import React, { Fragment, useEffect, useState } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../../components/Layout/Navbar/Navbar';
import './QuestionsPage.css';
import '../../App.css';
import QuestionBox from '../../components/QuestionBox/QuestionBox';
import Spinner from '../../components/Spinner/Spinner';

const QuestionsPage = () => {
    useEffect(async () => {
        const fetchQuestions = async () => {
            const response = await fetch('http://localhost:3002/questions');
            const data = await response.json();
            const fetchedQuestions = await data.map(question => question);
            setQuestions(await fetchedQuestions);
        };

        await fetchQuestions();
        setLoaded(true);
    }, []);
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [marks, setMarks] = useState(0);
    const [availableQuestions, setAvailableQuestions] = useState(10);
    const [loaded, setLoaded] = useState(false);
    const [responses, setResponses] = useState(0);

    return (
        <Fragment>
            <Navbar />
            {/* Loader */}
            {questions.length > 0 && loaded ? (
                <QuestionBox
                    question={questions[currentQuestion].question}
                    id={questions[currentQuestion].id}
                    choices={questions[currentQuestion].choices}
                    answer={questions[currentQuestion].answer}
                    key={questions[currentQuestion].id}
                    currentQuestion={currentQuestion}
                    setCurrentQuestion={setCurrentQuestion}
                    setAvailableQuestions={setAvailableQuestions}
                    availableQuestions={availableQuestions}
                    responses={responses}
                    setResponses={setResponses}
                    loaded={loaded}
                    setLoaded={setLoaded}
                />
            ) : (
                <Spinner />
            )}
        </Fragment>
    );
};

export default QuestionsPage;
