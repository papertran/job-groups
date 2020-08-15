import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class AddUserForm extends Component {
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
                    name="email"
                    component={this.renderInput}
                    label="Enter user email"
                />
                <button className="border">Submit</button>
            </form>
        );
    }
}

/*
class AddUserForm extends Component {
    renderInput = ({ input, label, meta }) => {
        return (
            <div className="flex flex-none jusitify-between">
                <label>{label}</label>
                <input
                    className="rounded"
                    {...input}
                    autoComplete="off"
                    className="border "
                />
            </div>
        );
    };

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <div className="bg-secpurple h-screen flex justify-center items-center">
                <form
                    className="bg-darkpurple2 h-64 w-1/4 rounded-lg flex-none flex-col justify-evenly items-center text-white"
                    onSubmit={this.props.handleSubmit(this.onSubmit)}
                >
                    <Field
                        name="groupName"
                        component={this.renderInput}
                        label="Enter Group Name"
                    />
                    <Field
                        name="email"
                        component={this.renderInput}
                        label="Enter user email"
                    />
                    <button className="border rounded bg-mainpink w-1/4 h-10">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}
*/
export default reduxForm({
    form: 'addUserForm',
})(AddUserForm);
