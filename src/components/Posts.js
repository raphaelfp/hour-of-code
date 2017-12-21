import React from 'react';
import { Container, Form, Button } from 'semantic-ui-react';
import CustomInput from './CustomInput';
import CustomMessage from './CustomMessage';
import inputs from './inputs';
import axios from 'axios';

class Posts extends React.Component {
	state = { titulo: '', autor: '', conteudo: '' };

	handleInput = (value, id) => {
		this.setState({ ...this.state, [id]: value });
	};

	submitForm = async () => {
		axios
			.post('https://jsonplaceholder.typicode.com/posts', this.state)
			.then(res => this.setState({ ...this.state, message: res.data }));
	};

	render() {
		return (
			<Container>
				<h3>Novo Post</h3>
				<Form>
					{inputs.map(input => (
						<CustomInput
							key={input.id}
							id={input.id}
							type={input.type}
							label={input.label}
							handleInput={this.handleInput}
						/>
					))}
					<Button primary onClick={this.submitForm}>
						Enviar
					</Button>
				</Form>
				{this.state.message && <CustomMessage {...this.state.message} />}
			</Container>
		);
	}
}

export default Posts;
