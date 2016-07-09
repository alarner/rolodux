let React = require('react');
let user = require('../user');
let fetch = require('howhap-fetch');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			errors: {}
		};
	},
	render: function() {
		let { title, company, startDate, endDate, description } = this.props;
		return (
			<div>
				<header>Add a Job</header>
				<section>
					<form>
						<div className="error">{this.state.errors.default}</div>
						<label className="column">
							Title
							<input type="text" defaultValue={title} ref="title" />
							<div className="error">{this.state.errors.title}</div>
						</label>
						<label className="column">
							Company
							<input type="text" defaultValue={company} ref="company" />
							<div className="error">{this.state.errors.company}</div>
						</label>
						<label className="column">
							Start Date
							<input type="date" defaultValue={startDate} ref="startDate" />
							<div className="error">{this.state.errors.startDate}</div>
						</label>
						<label className="column">
							End Date
							<input type="date" defaultValue={endDate} ref="endDate" />
							<div className="error">{this.state.errors.endDate}</div>
						</label>
						<label className="column">
							Description
							<textarea defaultValue={description} ref="description"></textarea>
							<div className="error">{this.state.errors.description}</div>
						</label>
					</form>
				</section>
				<footer>
					<button onClick={this.save}>Save</button>
					<button onClick={this.props.onClose}>Close</button>
				</footer>
			</div>
		);
	},
	save: function(e) {
		e.preventDefault();
		let errors = {};
		if(!this.refs.title.value) {
			errors.title = 'Please enter a job title.';
		}

		if(!this.refs.company.value) {
			errors.company = 'Please enter the company where you worked.';
		}

		if(!this.refs.startDate.value) {
			errors.startDate = 'Please enter the date you started.';
		}

		if(this.refs.endDate.value && this.refs.startDate.value > this.refs.endDate.value) {
			errors.endDate = 'The end date cannot come before the start date.';
		}

		if(!this.refs.description.value) {
			errors.description = 'Please enter a description.';
		}

		this.setState({ errors });

		console.log(this.refs.startDate.value);

		if(!Object.keys(errors).length) {
			let {title, company, startDate, endDate, description} = this.refs;
			fetch.post('/api/v1/workHistory', {
				title: title.value,
				company: company.value,
				startDate: startDate.value,
				endDate: endDate.value || null,
				description: description.value || null,
				order: 1,
				userId: user.get('id')
			})
			.then(this.props.onAdd);
		}
	}
});