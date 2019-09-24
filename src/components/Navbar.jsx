import React from 'react';

// Stateless Functional Component
const Navbar = ({ totalCounters }) => {
// object destructuring ^^ to pull totalCounters from props
	
	// No lifecycle hooks in stateless functional components
	// Use class component if you need lifecycle hooks
	console.log('Navbar - Rendered')

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="navbar-brand">
				Unique Products:{" "}
				<span className="badge badge-pill badge-secondary">
					{totalCounters}
				</span>
			</div>
		</nav>
	)
}

// class Navbar extends Component {
// 	render() {
// 		return (
// 			<nav className="navbar navbar-light bg-light">
// 				<a className="navbar-brand" href="#navbar">
// 					Navbar{" "}
// 					<span className="badge badge-pill badge-secondary">
// 						{this.props.totalCounters}
// 					</span>
// 				</a>
// 			</nav>
// 		)
// 	}
// }

export default Navbar;