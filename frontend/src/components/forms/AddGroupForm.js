import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class AddGroupForm extends Component {
    renderError = ({ error, touched }) => {
        if (touched && error) {
            return (
                <div>
                    <p className="text-red-600 text-center mt-1">{error}</p>
                </div>
            );
        } else {
            return <div></div>;
        }
    };

    renderInput = ({ input, label, meta }) => {
        return (
            <>
                <div className="flex mt-10 mx-8 justify-between">
                    <label className="mr-1">{label}</label>
                    <input
                        {...input}
                        autoComplete="off"
                        className="shadow appearance-none border rounded px-2 py-1 text-gray-700 focus:outline-none focus:shadow-outline"
                    />
                </div>
                {this.renderError(meta)}
            </>
        );
    };

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <div className="bg-secpurple h-screen flex flex-col justify-center items-center">
                <h1 className="text-2xl text-gray-700 mb-4">Create a group</h1>
                <form
                    className="bg-darkpurple2 flex-shrink-0 flex flex-col rounded-lg text-white"
                    onSubmit={this.props.handleSubmit(this.onSubmit)}
                >
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
                    <button className="border self-center rounded my-6 bg-mainpink w-1/4 h-10">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.groupName) {
        errors.groupName = 'Please enter group name.';
    }

    if (!formValues.description) {
        errors.description = 'Please enter a description.';
    }

    return errors;
};

export default reduxForm({
    form: 'addGroupForm',
    validate,
})(AddGroupForm);
