require('./User');
module.exports = bookshelf.model('WorkHistory', {
	tableName: 'workHistory',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	user: function() {
		return this.belongsTo('User', 'userId');
	}
});