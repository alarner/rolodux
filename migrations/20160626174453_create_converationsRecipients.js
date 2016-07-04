exports.up = function(knex, Promise) {
	return knex.schema.createTable('conversationRecipients', function(t) {
		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.integer('userId')
			.unsigned()
			.notNull()
			.references('id')
			.inTable('users')
			.onDelete('CASCADE');
		t.integer('conversationId')
			.unsigned()
			.notNull()
			.references('id')
			.inTable('conversations')
			.onDelete('CASCADE');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('conversationRecipients');
};
