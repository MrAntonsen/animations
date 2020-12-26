import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ListAnimation from '../ListAnimation.tsx/ListAnimation';
function App() {
  return (
    <Router>
      <Route>
        <Route path="/">
          <ListAnimation />
        </Route>
      </Route>
    </Router>
  );
}

export default App;
