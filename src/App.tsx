import React, { Fragment } from 'react';
import './App.css';
import Person from './Person';
import { Input } from 'semantic-ui-react';
import { ButtonBar } from './ButtonBar';
import PersonProfile from './PersonProfile';

/**
 * What is a fragment? https://dev.to/tumee/react-fragments-what-why-how-2kh1
 * Send single "parent" element from each react component.
 * ctrl + . to get dropdown of error solutions. Eg: imports.
 */
let propsExampleFunction = (input: string): string => {
  return `The answer is 42 ${input}`;
}

function App() {
  return (
    <Fragment>
      <Person name="John Doe" callbackMethod={propsExampleFunction}/>
    </Fragment>
  );
}
//Person Object MUST be passed down the following PROPerties.
// export interface IPersonProps {
//   name: string;
//   callbackMethod: (callbackString: string) => string;
// }

export default App;






    // <Fragment>
    //   <Person name="John Doe" callbackMethod={propsExampleFunction} />
    //   <Input loading placeholder='Search...' />
    // </Fragment>