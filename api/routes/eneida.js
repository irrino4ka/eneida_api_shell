var express = require('express');
var router = express.Router();

var eneida_controller = require('../controllers/eneidaController');

router.get('/', eneida_controller.list_all);
router.get('/:id', eneida_controller.read);

module.exports = router;