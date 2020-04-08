import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Something from './Something';
import LikeButton from './LikeButton';

/**
 * What is a fragment? https://dev.to/tumee/react-fragments-what-why-how-2kh1
 * Send single "parent" element from each react component.
 */
function App() {

  return (
    <Fragment>
      <Fragment>
        <Fragment>
          <h1>This is a header!</h1>
          <p>Paragraph!<em>Emphasized text!</em></p>
          <button className="SpecialButton">I know what a button is!</button>
          <button>Another button!</button>
          <p>Proof!</p>
          <Button
            color='red'
            content='Like'
            icon='heart'
            label={{ basic: true, color: 'red', pointing: 'left', content: '2,048' }}
          />

        </Fragment>
        <Fragment>
          <h1>This is a header!</h1>
          <p>Paragraph!<em>Emphasized text!</em></p>
          <button className="SpecialButton">I know what a button is!</button>
          <button>Another button!</button>
          <p>Proof!</p>
        </Fragment>
      </Fragment>
    </Fragment>
  );




}

export default App;
