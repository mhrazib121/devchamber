const express = require('express');
const router = express.Router();

router.get('/test', (req, res)=> res.json({massage:'profile works'}));

module.exports = router;