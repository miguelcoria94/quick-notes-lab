const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', notesCtrl.create);
router.get('/', notesCtrl.index);
router.delete('/:id', notesCtrl.delete);
router.put('/:id', notesCtrl.update);
router.get('/:id', notesCtrl.show);

module.exports = router;
