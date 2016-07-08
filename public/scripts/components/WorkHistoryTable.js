let React = require('react');
let WorkHistoryTableRow = require('./WorkHistoryTableRow');
module.exports = React.createClass({
	render: function() {
		if(!this.props.workHistory.length) {
			return null;
		}

		let workHistoryTableRows = this.props.workHistory.map(job => {
			return <WorkHistoryTableRow {...job} key={job.id} />;
		});

		return (
			<table>
				<thead>
					<tr>
						<th>Job Title</th>
						<th>Edit</th>
						<th>Delete</th>
						<th>Reorder</th>
					</tr>
				</thead>
				<tbody>
					{workHistoryTableRows}
				</tbody>
			</table>
		);
	}
});