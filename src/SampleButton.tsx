import * as React from 'react';

export interface ISampleButtonProps {
}

export default class SampleButton extends React.Component<ISampleButtonProps> {
    public buttonText(): string {
        return "button text";
    }

    public render() {
        return (
            <button>{this.buttonText()}</button>
        );
    }
}
