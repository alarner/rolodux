let React = require('react');
module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<div className="container">
					{this.props.children}
				</div>
			</div>
		);
	}
});