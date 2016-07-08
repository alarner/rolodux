let React = require('react');
let moment = require('moment');
module.exports = React.createClass({
	render: function() {
		let { title, company, startDate, endDate } = this.props;
		startDate = moment(startDate).format('MMM YYYY');
		endDate = endDate ? moment(endDate).format('MMM YYYY') : 'Present';

		return (
			<tr>
				<td>
					<div>{title} at {company}</div>
					<div>From {startDate} to  {endDate}</div>
				</td>
				<td><a href="#">Edit</a></td>
				<td><a href="#">Delete</a></td>
				<td className="work-history-table-row-order">
					<a href="#">Move Up</a>
					<a href="#">Move Down</a>
				</td>
			</tr>
		);
	}
});