// In order to use mongoose, we need to use asyncHandler, as the database is going to deal with promises 
const asyncHandler = require('express-async-handler')

const Goal = require('../model/goalModel')


// @desc    Get goals
// @route   GET api/goals
// @access  Private
const getGoals = asyncHandler(async(req, res) => {
  res.json({ message: 'Get goals' })
})

// @desc    Set goals
// @route   POST api/goals
// @access  Private
const postGoals = asyncHandler(async(req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error('please add a text field') 
  }
  res.json({message: 'Set goals'})
})

// @desc    Update goals
// @route   PUT api/goals/:id
// @access  Private
const putGoals = asyncHandler(async(req, res) => {
  res.json({message: `Update goal ${req.params.id}`})
})

// @desc    Delete goals
// @route   DELETE api/goals/:id
// @access  Private
const deleteGoals = asyncHandler(async(req, res) => {
  res.json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
  getGoals, 
  postGoals, 
  putGoals, 
  deleteGoals
}  