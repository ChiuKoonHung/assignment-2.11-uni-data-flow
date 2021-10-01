import React from 'react';
import ChildAddForm from './childAddForm';
import ChildListInput from './childListInput';

class Parent extends React.Component {
    constructor() {
        super(); 
            this.state= {
                inputs: [],
            };

        this.handleAddForm = this.handleAddForm.bind(this);
    }

    handleAddForm(haha) {
        const input = this.state.inputs;
        input.push(haha);
        this.setState({ input });
    }

    render() {
        return (
            <>
            <h2>Parent Container</h2>
            <ChildAddForm add={this.handleAddForm} />
            <ChildListInput input={this.state.inputs} />
            </>
        )
    }
}

export default Parent;