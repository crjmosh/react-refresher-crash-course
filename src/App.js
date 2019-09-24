import React from 'react';
import Navbar from './components/Navbar';
import Counters from './components/Counters';

class App extends React.Component {
	state = {
		counters: [
			{ id: 1, value: 0 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 }
		]
	};

	constructor(props) {
		super(props);
		console.log('App - Constructor');
		// this is a place to set initial state
		// this.state = this.props.something
	}

	componentDidMount() {
		// perfect place for AJAX calls
		console.log('App - Mounted')
	}

	handleDelete = counterId => {
		const counters = this.state.counters.filter(c => c.id !== counterId);
		this.setState({counters});
	}

	handleReset = () => {
		const counters = this.state.counters.map(c => {
			c.value = 0;
			return c;
		});
		this.setState({counters});
	}

	handleIncrement = counter => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = {...counter};
		counters[index].value++;
		this.setState({counters});
	}

	render() {
		console.log('App - Rendered')
		return (
			<div className="app">
				<Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
				<main className="container">
					<Counters
						counters={this.state.counters}
						onReset={this.handleReset}
						onIncrement={this.handleIncrement}
						onDelete={this.handleDelete}
					/>
					<div  className="mt-3">
						<small>* Refresh page to restore all products.</small>
					</div>
				</main>
			</div>
		)
	}
}

export default App;