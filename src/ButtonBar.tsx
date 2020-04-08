import * as React from 'react';
import SampleButton from './SampleButton';

export interface IButtonBarProps {
}

export default class ButtonBar extends React.Component<IButtonBarProps> {
    public render() {
        return (
            <React.Fragment>
                <SampleButton />
                <SampleButton />
                <SampleButton />
            </React.Fragment>
        );
    }
}
