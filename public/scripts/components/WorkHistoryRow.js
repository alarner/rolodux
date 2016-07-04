let React = require('react');
let moment = require('moment');
module.exports = React.createClass({
	render: function() {
		let { title, company, startDate, endDate, description } = this.props;
		startDate = moment(startDate).format('MMM YYYY');
		endDate = endDate ? moment(endDate).format('MMM YYYY') : 'Present';
		return (
			<div className="row">
				<div className="column">
					<div>
						<strong>{title} at <a href="#">{company}</a></strong>
					</div>
					<div className="work-history-dates">
						From {startDate} to  {endDate}
					</div>
					<p>{description}</p>
				</div>
			</div>
		);
	}
});