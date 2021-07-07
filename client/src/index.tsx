import './App.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './components/QuestionList';
import Canvas from './components/Canvas';
import questionData from './data/parsedsample1';

const App: React.FC = () => {
  const [questions, setQuestions] = useState<object[]>([]);
  const [score, setScore] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  React.useEffect(() => {
    setQuestions(questionData);
    setTotal(questionData.length);
  }, []);

  const handleScore = () => {
    setScore(prevScore => prevScore + 1);
  }

  return (
    <div className="main-row">
      <section className="question-column">
        <QuestionList questions={questions} handleScore={handleScore}/>
      </section>
      <section className="canvas-column" >
        <Canvas score={score} total={total}/>
      </section>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));