import * as React from 'react';
import { Button, Icon, Label } from 'semantic-ui-react';

export interface IAppProps {
}

export default class LikeButton extends React.Component<IAppProps> {
    public render() {
        return (
            <Button as='div' labelPosition='right'>
                <Button icon>
                    <Icon name='heart' />
                    Like
      </Button>
                <Label as='a' basic pointing='left'>
                    2,048
      </Label>
            </Button>
        );
    }
}
