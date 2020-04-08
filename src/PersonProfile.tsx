import * as React from 'react'; //Import statements. Baseline imports
//react from the react node_module folder.
import './PersonProfile.css';

//Contract between what this component (PersonProfile) will expect other 
//components that use this component to provide to this component.
//Think of this as similar to function arguments.
export interface IPersonProfileProps {
}

//The "main class" of the component, the real "content" of the component
//will all be here all the way from the "structure" all the way 
// to the "functionality" of said component.
export default class PersonProfile extends React.Component<IPersonProfileProps> {
    public render() {
        return (
            <React.Fragment>
                <h1>Person Name</h1>
                <h1>Person Birthday</h1>
                <h1>Person Pet Name</h1>
            </React.Fragment>
        );
    }

    public subtract(num1: number, num2: number): number {
        return num1 - num2
    }
}
