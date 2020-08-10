import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class AddGroupForm extends Component {
    renderInput = ({ input, label, meta }) => {
        return (
            <div>
                <label>{label}</label>
                <input {...input} autoComplete="off" className="border " />
            </div>
        );
    };

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field
                    name="groupName"
                    component={this.renderInput}
                    label="Enter Group Name"
                />
                <Field
                    name="description"
                    component={this.renderInput}
                    label="Enter Description"
                />
                <button className="border">Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'addGroupForm',
})(AddGroupForm);
