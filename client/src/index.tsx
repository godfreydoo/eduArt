import './styles.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import QuestionList from './components/QuestionList';
import Canvas from './components/Canvas';
import CreateQuiz from './components/CreateQuiz';
import Play from './components/Play';
import documentSampleData from './data/parsedsample1';

const App: React.FC = () => {
  const [questions, setQuestions] = useState<object[]>([]);
  const [score, setScore] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setQuestions(documentSampleData.questions);
    setTotal(documentSampleData.questions.length);
  }, []);

  const handleScore = () => {
    setScore(prevScore => prevScore + 1);
  }

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>
            <Link to="/play">Play</Link>
          </li>
        </ul>

      <hr />
        <Switch>
          <Route exact path="/">
            <div className="main-row">
              <section className="question-column">
                <QuestionList questions={questions} handleScore={handleScore}/>
              </section>
              <section className="canvas-column" >
                <Canvas score={score} total={total}/>
              </section>
            </div>
          </Route>
          <Route path='/create' component={CreateQuiz}/>
          <Route path='/play' component={Play}/>
        </Switch>
      </div>
    </Router>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));