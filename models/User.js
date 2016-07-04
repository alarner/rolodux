require('./Authentication');
require('./Link');
require('./WorkHistory');
require('./Image');
module.exports = bookshelf.model('User', {
	tableName: 'users',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	authentication: function() {
		return this.hasMany('Authentication', 'userId');
	},
	image: function() {
		return this.hasOne('Image', 'imageId');
	},
	links: function() {
		return this.hasMany('Link', 'userId');
	},
	workHistory: function() {
		return this.hasMany('WorkHistory', 'userId');
	}
});