const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.json({username:'seungmin'}));
router.get('/group', (req, res) => res.json({username:'dev group. seungmin'}));

module.exports = router;