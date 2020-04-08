import * as React from 'react'; //Import statement.
import Something from './Something';

//INTERFACE: "Contract" to use the component is specified here.
export interface IPersonProps {
    name?: string | undefined;
    callbackMethod: (callbackString: string) => string;
}

export default class Person extends React.Component<IPersonProps> {

    public greeting(): string {
        return "hello!";
    }

    public render() {
        let { name, callbackMethod } = this.props;

        return (
            <React.Fragment>
                {name}
                {callbackMethod(":))")}
            </React.Fragment>
        );
    }
}