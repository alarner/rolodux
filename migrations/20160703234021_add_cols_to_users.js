exports.up = function(knex, Promise) {
	return knex.schema.table('users', function(t) {
		t.string('shortDescription', 120).nullable();
		t.text('selfSummary').nullable();
		t.integer('imageId')
			.unsigned()
			.nullable()
			.references('id')
			.inTable('images')
			.onDelete('CASCADE');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.table('users', function(t) {
		t.dropColumn('shortDescription');
		t.dropColumn('selfSummary');
		t.dropColumn('imageId');
	});
};
