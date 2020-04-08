import * as React from 'react'; //Import statements at the top of the file.
//Baseline with tsrcc is going to import baseline react from the react node_module.
// * "wildcard" means "import all" 

export interface IPersonProfileProps {
}

export default class PersonProfile extends React.Component<IPersonProfileProps> {
    public render() {
        return (
            <React.Fragment>
                <h1>{personName}</h1>
                <p>{personBirthday}</p>
                <p>{personFavePizza}</p>
            </React.Fragment>
        );
    }
}