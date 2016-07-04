require('./User');
module.exports = bookshelf.model('ConnectionRequest', {
	tableName: 'connectionRequest',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	initiator: function() {
		return this.belongsTo('User', 'initiatorId');
	},
	responder: function() {
		return this.belongsTo('User', 'responderId');
	}
});