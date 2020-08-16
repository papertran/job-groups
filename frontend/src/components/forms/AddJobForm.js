import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class AddJobForm extends Component {
    renderInput = ({ input, label, meta }) => {
        return (
            <div className="flex mt-10 mx-8 justify-between">
                <label className="mr-1">{label}</label>
                <input
                    {...input}
                    autoComplete="off"
                    className="shadow appearance-none border rounded px-2 py-1 text-gray-700 focus:outline-none focus:shadow-outline"
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
                <h1 className="text-2xl text-gray-700 mb-4">Add a Job</h1>
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
                        name="jobName"
                        component={this.renderInput}
                        label="Enter Job Name"
                    />
                    <Field
                        name="position"
                        component={this.renderInput}
                        label="Enter Job Position"
                    />
                    <Field
                        name="url"
                        component={this.renderInput}
                        label="Enter Job url"
                    />
                    <Field
                        name="location"
                        component={this.renderInput}
                        label="Enter Job Location"
                    />
                    <Field
                        name="pay"
                        component={this.renderInput}
                        label="Enter Job Pay"
                    />
                    <button className="border self-center rounded my-6 bg-mainpink w-1/4 h-10">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'addJobForm',
})(AddJobForm);
