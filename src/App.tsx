import React from 'react';
import logo from './logo.svg';
import './App.css';
import Something from './Something';
import LikeButton from './LikeButton';

function App() {

  return (
    <React.Fragment>
      <Fragment>
        <Fragment>
          <h1>This is a header!</h1>
          <p>Paragraph!<em>Emphasized text!</em></p>
          <button className="SpecialButton">I know what a button is!</button>
          <button>Another button!</button>
          <p>Proof!</p>
        </Fragment>
        <Fragment>
          <h1>This is a header!</h1>
          <p>Paragraph!<em>Emphasized text!</em></p>
          <button className="SpecialButton">I know what a button is!</button>
          <button>Another button!</button>
          <p>Proof!</p>
        </Fragment>
      </Fragment>
    </React.Fragment>
  );




}

export default App;
