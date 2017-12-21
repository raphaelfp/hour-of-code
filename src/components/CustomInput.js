import React from 'react';
import { Form } from 'semantic-ui-react';

class CustomInput extends React.Component {
	state = { value: '' };

	handleChange = (event, handleInput) => {
		const { value, id } = event.target;
		this.setState({ value });
		handleInput(value, id);
	};

	render() {
		const { type, label, handleInput, id } = this.props;
		return (
			<Form.Input
				id={id}
				label={label}
				type={type}
				value={this.state.value}
				placeholder={label}
				onChange={event => this.handleChange(event, handleInput)}
			/>
		);
	}
}

export default CustomInput;
