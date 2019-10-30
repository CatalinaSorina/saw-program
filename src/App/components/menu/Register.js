import React from 'react';
import 'antd/dist/antd.css';
import './menu.css';
import { Form, Icon, Input, Button } from 'antd';

function hasErrors(fieldsError) {
	return Object.keys(fieldsError).some((field) => fieldsError[field]);
}

class Register extends React.Component {
	componentDidMount() {
		// To disabled submit button at the beginning.
		this.props.form.validateFields();
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	};

	render() {
		const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

		// Only show error after a field is touched.
		const usernameError = isFieldTouched('username') && getFieldError('username');
		const passwordError = isFieldTouched('password') && getFieldError('password');
		const tipError = isFieldTouched('tip') && getFieldError('tip');
		return (
			<Form layout="inline" onSubmit={this.handleSubmit}>
				<Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
					{getFieldDecorator('username', {
						rules: [ { required: true, message: 'Scrie un nume de utilizator!' } ]
					})(
						<Input
							prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
							placeholder="Utilizator"
						/>
					)}
				</Form.Item>
				<Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
					{getFieldDecorator('password', {
						rules: [ { required: true, message: 'Scrie o parolă!' } ]
					})(
						<Input
							prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
							type="password"
							placeholder="Parolă"
						/>
					)}
				</Form.Item>
				<Form.Item validateStatus={tipError ? 'error' : ''} help={tipError || ''}>
					{getFieldDecorator('tip', {
						rules: [ { required: true, message: 'Scrie ceva care să te ajute să îți amintești parola:' } ]
					})(
						<Input
							prefix={<Icon type="bulb" style={{ color: 'rgba(0,0,0,.25)' }} />}
							type="tip"
							placeholder="ex: anu nașterii"
						/>
					)}
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
						&#206;nregistrare
					</Button>
				</Form.Item>
			</Form>
		);
	}
}

export default Form.create({ name: 'horizontal_login' })(Register);
