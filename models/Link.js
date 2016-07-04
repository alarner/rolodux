require('./User');
module.exports = bookshelf.model('Link', {
	tableName: 'links',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	user: function() {
		return this.belongsTo('User', 'userId');
	}
});