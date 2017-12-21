import React from 'react';
import { Message } from 'semantic-ui-react';

const style = {
	alert: {
		marginTop: '20px'
	}
};

const CustomMessage = ({ titulo, autor, conteudo }) => {
	return (
		<Message style={style.alert}>
			<Message.Header>Post enviado com sucesso</Message.Header>
			<p>Título: {titulo}</p>
			<p>Autor: {autor}</p>
			<p>Conteúdo: {conteudo}</p>
		</Message>
	);
};

export default CustomMessage;
