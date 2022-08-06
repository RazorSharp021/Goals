const express = require('express')
const router = express.Router()
const { 
  getGoals, 
  postGoals, 
  putGoals, 
  deleteGoals 
} = require('../controllers/goalController')

router.route('/').get(getGoals).post(postGoals)
router.route('/:id').delete(deleteGoals).put(putGoals)

module.exports = router