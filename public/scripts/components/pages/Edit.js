let React = require('react');
let fetch = require('howhap-fetch');
let Rayon = require('Rayon');
let user = require('../../user');
let WorkHistoryTable = require('../WorkHistoryTable');
let WorkHistoryForm = require('../WorkHistoryForm');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			user: null,
			errors: {},
			showSaveMessage: false,
			modal: {
				job: false
			}
		};
	},
	componentWillMount: function() {
		if(!user.isLoggedIn()) {
			return this.setState({
				errors: { loading: 'You must be logged in to view this page.' }
			});
		}

		fetch.get(`/api/v1/user?where[id]=${user.get('id')}&withRelated[0]=workHistory`)
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
		let saveMessageClass = 'alert-success save-message';
		if(this.state.errors.loading) {
			return <div>{this.state.errors.loading}</div>;
		}
		if(!this.state.user) {
			return <div>Loading...</div>;
		}
		if(this.state.showSaveMessage) {
			saveMessageClass += ' visible';
		}

		return (
			<div className="page">
				<div className="row">
					<div className={saveMessageClass}>
						Your profile has been saved!
					</div>
				</div>
				<div className="row">
					<div className="column column-66">
						<form onSubmit={this.saveUser}>
							<div className="row">
								<label className="column column-50">
									First Name
									<input
										type="text"
										defaultValue={this.state.user.firstName}
										ref="firstName" />
								</label>
								<label className="column column-50">
									Last Name
									<input
										type="text"
										defaultValue={this.state.user.lastName}
										ref="lastName" />
								</label>
							</div>
							<div className="row">
								<label className="column">
									Short Description
									<input
										type="text"
										defaultValue={this.state.user.shortDescription}
										ref="shortDescription" />
								</label>
							</div>
							<div className="row">
								<label className="column">
									Self Summary
									<textarea
										defaultValue={this.state.user.selfSummary}
										ref="selfSummary"
										onChange={this.changeUser}>
									</textarea>
								</label>
							</div>
							<input type="submit" className="invisible-submit" />
						</form>
						<div className="row">
							<div className="column">
								<label className="float-left">Work History</label>
								<button className="float-right" onClick={this.changeModal('job', true)}>Add Job</button>
							</div>
						</div>
						<div className="row">
							<div className="column">
								<WorkHistoryTable workHistory={this.state.user.workHistory} />
							</div>
						</div>
					</div>
					<div className="column column-33">
						<button className="edit-save" onClick={this.saveUser}>Save</button>
					</div>
				</div>
				<Rayon isOpen={this.state.modal.job} onClose={this.changeModal('job', false)} bodyClass="rayon-no-overflow">
					<WorkHistoryForm onClose={this.changeModal('job', false)} onAdd={this.addJob} />
				</Rayon>
			</div>
		);
	},

	changeModal: function(type, visible) {
		return (e) => {
			let newState = { modal: {} };
			newState.modal[type] = visible;
			this.setState(newState);
		};
	},

	toastSaveMessage: function() {
		this.setState({ showSaveMessage: true });
		setTimeout(() => {
			this.setState({ showSaveMessage: false });
		}, 3000);
	},

	saveUser: function(e) {
		e.preventDefault();
		let errors = {};
		if(!this.refs.firstName) {
			errors.firstName = 'Please enter your first name.';
		}

		if(!this.refs.lastName) {
			errors.lastName = 'Please enter your last name.';
		}

		this.setState({ errors });

		if(!Object.keys(errors).length) {
			let {firstName, lastName, shortDescription, selfSummary} = this.refs;
			fetch.put(`/api/v1/user/${user.get('id')}`, {
				firstName: firstName.value,
				lastName: lastName.value,
				shortDescription: shortDescription.value,
				selfSummary: selfSummary.value
			})
			.then(u => {
				user.set(u);
				this.toastSaveMessage();
			});
		}
	},

	addJob: function(job) {
		let { user } = this.state;
		if(user && user.workHistory) {
			user.workHistory = user.workHistory.concat([job]);
		}
		this.changeModal('job', false)();
		this.setState({ user });
	}
});