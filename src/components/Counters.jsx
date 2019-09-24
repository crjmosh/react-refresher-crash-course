import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
	render() {

		console.log('Counters - Rendered');

		// destructure this.props into individual variables
		const { onReset, counters, onDelete, onIncrement } = this.props;
		return (
			<div>
			<button 
				onClick={onReset}
				className="btn btn-primary btn-sm m-2"
			>Set Values to 0</button>
				{counters.map(counter =>
					<Counter key={counter.id}
						onDelete={onDelete}
						onIncrement={onIncrement}
						counter={counter}
					/>
				)}
			</div>
		)
	}
}

export default Counters;