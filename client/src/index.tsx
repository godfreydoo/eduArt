import './styles/general.css';
import './styles/questions.css';
import './styles/quiz.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import CreateQuiz from './components/CreateQuiz';
import Play from './components/Play';
import Start from './components/Start';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav className="header">
          <div className="header-left">
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/create">Create</Link>
            </div>
            <div>
              <Link to="/play">Play</Link>
            </div>
          </div>
          <div className="header-right">
            <div>
              <Link to="/login">Sign In</Link>
            </div>
          </div>

        </nav>
      <hr />
        <Switch>
          <Route exact path="/" component={Start}/>
          <Route exact path='/create' component={CreateQuiz}/>
          <Route exact path='/play' component={Play}/>
        </Switch>
      </div>
    </Router>
  )
};

export default App;

ReactDOM.render(<App/>, document.getElementById('root'));