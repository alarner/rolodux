let React = require('react');
module.exports = React.createClass({
	render: function() {
		return (
			<div className="page">
				<div className="row">
					<div className="column column-50">
						<h3>A community of professionals</h3>
						<p>
							Lorem ipsum Sit qui consequat non consectetur Duis consequat anim ut irure eiusmod consequat voluptate in incididunt dolore cillum dolore est in ullamco est dolor ea laboris sit consectetur dolore incididunt reprehenderit reprehenderit non nisi enim voluptate aliquip irure sed irure officia.
						</p>
						<p>
							Lorem ipsum Sit qui consequat non consectetur Duis consequat anim ut irure eiusmod consequat voluptate in incididunt dolore cillum dolore est in ullamco est dolor ea laboris sit consectetur dolore incididunt reprehenderit reprehenderit non nisi enim voluptate aliquip irure sed irure officia.
						</p>
					</div>
					<div className="column column-50">
						<h5>Create a profile</h5>
						<form action="/auth/register?responseFormat=html" method="post">
							<div>
								<input type="text" placeholder="first name" name="firstName" />
							</div>
							<div>
								<input type="text" placeholder="last name" name="lastName" />
							</div>
							<div>
								<input type="email" placeholder="email" name="email" />
							</div>
							<div>
								<input type="password" placeholder="password" name="password" />
							</div>
							<button>Register</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
});