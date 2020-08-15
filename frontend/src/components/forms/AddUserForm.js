import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class AddUserForm extends Component {
    renderInput = ({ input, label, meta }) => {
        return (
            <div className="flex mt-10 mx-8 justify-between">
                <label className="mr-1">{label}</label>
                <input
                    className="shadow appearance-none border rounded px-2 py-1 text-gray-700 focus:outline-none focus:shadow-outline"
                    {...input}
                    autoComplete="off"
                />
            </div>
        );
    };

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <div className="bg-secpurple h-screen flex flex-col justify-center items-center">
                <h1 className="text-2xl text-gray-700 mb-4">Add a user</h1>
                <form
                    className="bg-darkpurple2 h-64 flex-shrink-0 flex flex-col rounded-lg text-white"
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
                    <button className="border self-center rounded mt-12 bg-mainpink w-1/4 h-10">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'addUserForm',
})(AddUserForm);
