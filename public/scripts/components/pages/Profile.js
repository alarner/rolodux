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
			<div className="page">
				<div className="row">
					<div className="column column-66">
						<h3>{user.firstName} {user.lastName}</h3>
						<p>Short description goes here</p>
						<div className="profile-buttons">
							<button>Connect</button>
							<button>Message</button>
						</div>
						<div>
							<h4>Self Summary</h4>
							<p>Lorem ipsum In nulla velit fugiat dolore Ut in reprehenderit fugiat fugiat culpa ut in est commodo dolor sit anim in eu sit labore minim quis eiusmod proident exercitation reprehenderit occaecat officia sed laborum occaecat deserunt occaecat esse qui Duis Duis quis.</p>
						</div>
						<div>
							<h4>Work History</h4>
							{workHistoryRows}
						</div>
					</div>
					<div className="column column-33">
						<h4>Links</h4>
						<ul>
							<li>
								<a href="https://twitter.com/alarner">Twitter</a>
							</li>
							<li>
								<a href="https://github.com/alarner">GitHub</a>
							</li>
							<li>
								<a href="http://nutellahabit.com/">Blog</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
});