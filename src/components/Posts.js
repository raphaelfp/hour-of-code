import React from 'react';
import { Grid, Row, Col, FormGroup, Button, Alert } from 'react-bootstrap';
import CustomInput from './CustomInput';
import axios from 'axios';

const inputs = [
	{
		id: 'titulo',
		type: 'text',
		label: 'Título'
	},
	{
		id: 'autor',
		type: 'text',
		label: 'Autor'
	},
	{
		id: 'conteudo',
		type: 'text',
		label: 'Conteúdo'
	}
];

const style = {
	alert: {
		marginTop: '20px'
	}
};

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

	renderMessage = () => {
		const { titulo, autor, conteudo } = this.state.message;

		return (
			<Alert bsStyle="warning" style={style.alert}>
				<h4>Post enviado com sucesso</h4>
				<p>Título: {titulo}</p>
				<p>Autor: {autor}</p>
				<p>Conteúdo: {conteudo}</p>
			</Alert>
		);
	};

	render() {
		return (
			<Grid>
				<Row>
					<Col>
						<h3>Novo Post</h3>
						<FormGroup controlId="posts">
							{inputs.map(input => (
								<CustomInput
									key={input.id}
									id={input.id}
									type={input.type}
									label={input.label}
									handleInput={this.handleInput}
								/>
							))}
						</FormGroup>
					</Col>
					<Col>
						<Button onClick={this.submitForm} bsStyle="primary">
							Enviar
						</Button>
					</Col>
					{this.state.message && this.renderMessage()}
					<Col />
				</Row>
			</Grid>
		);
	}
}

export default Posts;
