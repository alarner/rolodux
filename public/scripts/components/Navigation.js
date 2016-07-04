let React = require('react');
let { Link } = require('react-router');
let slug = require('slug');

module.exports = React.createClass({
	render: function() {
		let links = [
			<Link key="home" to="/"><strong>Rolodux</strong></Link>
		];

		// User is logged in
		if(window.user) {
			links.push(<Link key="profile" to={`/profile/${slug(window.user.firstName+' '+window.user.lastName)}/${window.user.id}`}>View Profile</Link>);
			links.push(<Link key="edit" to="/edit">Edit Profile</Link>);
			links.push(<Link key="messages" to="/messages">Messages</Link>);
			links.push(<Link key="connections" to="/connections">Connections</Link>);
			links.push(<a key="logout" href="/auth/logout?responseFormat=html">Log out</a>);
		}
		// User is not logged in
		else {
			links.push(<a key="login" href="/auth/login">Log in</a>);
			links.push(<a key="register" href="/auth/register">Register</a>);			
		}
		return (
			<nav>
				<div className="container">
					{links}
				</div>
			</nav>
		);
	}
});