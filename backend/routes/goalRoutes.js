const express = require('express')
const { getGoals, postGoals, putGoals, deleteGoals } = require('../controllers/goalController')
const router = express.Router()

router.get('/', getGoals)

router.post('/', postGoals)

router.put('/:id', putGoals)

router.delete('/:id', deleteGoals)

module.exports = router