import React, {useState} from 'react';
import './App.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ListAnimation from '../ListAnimation.tsx/ListAnimation';
import Home from '../Home/Home';
function App() {
  const [duration, setDuration] = useState(1000)
  return (
    <Router>
      <div className="side-bar">
      <Route render={({history}) =>(
        <button onClick={() =>{ history.push('/')}}>Home</button>
        )}>
      </Route>
      <Route render={({history}) =>(
        <button onClick={() =>{ history.push('/ListAnimations')}}>Liste Animasjoner</button>
        )}>
      </Route>
    </div>
      <Route>
        <Route path="/ListAnimations">
          <ListAnimation setDuration={setDuration} duration={duration}/>
        </Route>
        <Route path="/">
          <Home setDuration={setDuration} duration={duration}/>
        </Route>
      </Route>
    </Router>
  );
}

export default App;
