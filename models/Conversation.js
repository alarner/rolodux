require('./User');
require('./Message');
require('./ConversationRecipient');
module.exports = bookshelf.model('Conversation', {
	tableName: 'conversations',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	sender: function() {
		return this.belongsTo('User', 'senderId');
	},
	messages: function() {
		return this.hasMany('Message', 'conversationId');
	},
	recipients: function() {
		return this.hasMany('ConversationRecipient', 'conversationId');
	}
});