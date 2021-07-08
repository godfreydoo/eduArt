import './styles.css';
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