import React, { Component } from 'react';

class Counter extends Component {
	componentDidUpdate(prevProps, prevState) {
		// console.log(prevProps);
		// console.log(prevState);
		if (prevProps.counter.value !== this.props.counter.value) {
			console.log('Product #' + this.props.counter.id + ' changed value to ' + this.props.counter.value);
			// data has changed, do something (AJAX call, etc...)
		}
	}

	componentWillUnmount() {
		// called just before component is removed from DOM
		console.log('Counter - Unmount');
	}

	// constructor() {
	// 	super();
	// 	this.handleIncrement = this.handleIncrement.bind(this);
	// }

	// state = {
	// 	value: this.props.counter.value,
	// };

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? 'Zero' : value;
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += (this.props.counter.value === 0) ? "warning" : "primary";
		return classes;
	}

	// handleIncrement = product => {
	// 	this.setState({value: this.state.value + 1});
	// }


	render() {
		console.log('Counter - Rendered')
		return (
			<div>
				{  <h4>Product #{this.props.counter.id}</h4>  }
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button
					onClick={() => this.props.onIncrement(this.props.counter)}
					className="btn btn-secondary btn-sm"
				>Increment</button>
				<button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete Product</button>
			</div>
		)
	}
}

export default Counter;