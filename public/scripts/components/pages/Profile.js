let React = require('react');
let fetch = require('howhap-fetch');
let WorkHistoryRow = require('../WorkHistoryRow');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			user: null,
			error: null
		};
	},
	componentWillMount: function() {
		fetch.get(`/api/v1/user?where[id]=${this.props.params.id}&withRelated[0]=workHistory`)
		.then(users => {
			if(!users.length) {
				this.setState({ error: 'Profile not found' });
			}
			else {
				this.setState({ user: users[0] });
			}
		});
	},
	render: function() {
		const { user, error } = this.state;
		if(error) {
			return <div>{error}</div>;
		}
		if(!user) {
			return <div>Loading...</div>;
		}
		const workHistoryRows = user.workHistory.map(history => {
			return <WorkHistoryRow
				key={history.id}
				title={history.title}
				company={history.company}
				startDate={history.startDate}
				endDate={history.endDate}
				description={history.description} />;
		});

		return (
			<div>
				<h1>{user.firstName} {user.lastName}</h1>
				<h4>Work History</h4>
				{workHistoryRows}
			</div>
		);
	}
});