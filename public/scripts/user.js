let MicroEvent = require('microevent');
let slug = require('slug');
class User {
	constructor(u) {
		this.u = u || {};
	}

	set(obj) {
		Object.assign(this.u, obj);
		this.trigger('change');
	}

	get(prop) {
		return this.u[prop];
	}

	isLoggedIn() {
		return Boolean(this.u.id);
	}

	name() {
		return this.u.firstName+' '+this.u.lastName;
	}

	slug() {
		return slug(this.name());
	}
}

MicroEvent.mixin(User);

module.exports = new User(window.user);