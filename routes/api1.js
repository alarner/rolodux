let express = require('express');
let router = express.Router();
let bookshelfApi = require('bookshelf-api')({
	path: '../models'
});

router.use(bookshelfApi);

module.exports = router;
