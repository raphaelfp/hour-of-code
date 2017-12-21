import React from 'react';
import Posts from './components/Posts';

const style = {
	app: {
		marginTop: '20px'
	}
};

class App extends React.Component {
	render() {
		return (
			<div style={style.app}>
				<Posts />
			</div>
		);
	}
}

export default App;
