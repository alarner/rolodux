let Navigation = require('./Navigation');
let React = require('react');
module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<Navigation />
				<div className="container">
					{this.props.children}
				</div>
			</div>
		);
	}
});