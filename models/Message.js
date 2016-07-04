require('./User');
require('./Conversation');
module.exports = bookshelf.model('Message', {
	tableName: 'messages',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	sender: function() {
		return this.belongsTo('User', 'senderId');
	},
	conversation: function() {
		return this.belongsTo('Conversation', 'conversationId');
	}
});