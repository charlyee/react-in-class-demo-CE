import * as React from 'react';

export interface IPersonProps {
    name: string;
    callbackMethod: (callbackString: string) => string;
}


export default class Person extends React.Component<IPersonProps> {

    public greeting (): string {
        return "hello!";
    }

    public render() {
        let { name, callbackMethod } = this.props;
        return (
            <h1>{this.greeting()}</h1>
            // <React.Fragment>
            //     {name}
            //     {callbackMethod(":)")}
            // </React.Fragment>
        );
    }
}
