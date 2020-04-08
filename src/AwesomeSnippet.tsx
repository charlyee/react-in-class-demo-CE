import * as React from 'react';

export interface IAppProps {
}

let a = "hello world";
export default class App extends React.Component<IAppProps> {
    public render() {
        return (
            <div>
                {a}
            </div>
        );
    }
}
