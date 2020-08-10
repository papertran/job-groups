import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class AddJobForm extends Component {
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
                <button className="border">Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'addJobForm',
})(AddJobForm);
