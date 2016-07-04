exports.up = function(knex, Promise) {
	return knex.schema.createTable('workHistory', function(t) {
		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.string('title').notNull();
		t.string('company').notNull();
		t.date('startDate').notNull();
		t.date('endDate').nullable();
		t.text('description').notNull();
		t.integer('order').notNull();
		t.integer('userId')
			.unsigned()
			.notNull()
			.references('id')
			.inTable('users')
			.onDelete('CASCADE');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('workHistory');
};
