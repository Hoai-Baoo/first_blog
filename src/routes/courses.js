const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

// newsController.index

router.post('/handle-form-actions',courseController.handleFormActions);
router.post('/store', courseController.store);
router.get('/create', courseController.create);
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update);
router.patch('/:id/restore',courseController.restore);
router.delete('/:id', courseController.delete);
router.delete('/:id/force', courseController.forceDelete);
router.get('/:slug', courseController.show);

module.exports = router;
