require('./User');
require('./Conversation');
module.exports = bookshelf.model('ConversationRecipient', {
	tableName: 'conversationRecipients',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	recipient: function() {
		return this.belongsTo('User', 'userId');
	},
	conversation: function() {
		return this.belongsTo('Conversation', 'conversationId');
	}
});