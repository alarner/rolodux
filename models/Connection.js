require('./User');
module.exports = bookshelf.model('Connection', {
	tableName: 'connections',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	initiator: function() {
		return this.belongsTo('User', 'initiatorId');
	},
	responder: function() {
		return this.belongsTo('User', 'responderId');
	}
});