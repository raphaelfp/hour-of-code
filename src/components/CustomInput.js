import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

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
			<FormGroup controlId={id}>
				<ControlLabel>{label}</ControlLabel>
				<FormControl
					id={id}
					type={type}
					value={this.state.value}
					label={label}
					placeholder={label}
					onChange={event => this.handleChange(event, handleInput)}
				/>
			</FormGroup>
		);
	}
}

export default CustomInput;
