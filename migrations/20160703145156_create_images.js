exports.up = function(knex, Promise) {
	return knex.schema.createTable('images', function(t) {
		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.string('originalFilename').nullable();
		t.string('original').notNull();
		t.string('medium').notNull();
		t.string('small').notNull();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('images');
};
