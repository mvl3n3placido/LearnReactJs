import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.initialState = {
            name: '',
            job: ''
        }
        this.state = this.initialState;
    }
    render() {
        const { name, job } = this.state;
        return (
            <form>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange} />

                </div>
                <div>
                    <label>Job</label>
                    <input
                        type="text"
                        name="job"
                        value={job}
                        onChange={this.handleChange} />
                </div>
                <div>
                    <input
                        type="button"
                        value="Submit"
                        onClick={this.submitForm} />
                </div>
            </form>
        );
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

}

export default Form;