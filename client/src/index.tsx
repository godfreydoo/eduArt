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
  }, []);

  const handleScore = () => {
    setScore(prevScore => prevScore + 1);
  }

  return (
    <div>
      <section>
        <QuestionList questions={questions}/>
      </section>
      <section>
        <Canvas />
      </section>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));