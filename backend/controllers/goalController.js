// In order to use mongoose, we need to use asyncHandler, as the database is going to deal with promises 
const asyncHandler = require('express-async-handler')

const Goal = require('../model/goalModel')


// @desc    Get goals
// @route   GET api/goals
// @access  Private
const getGoals = asyncHandler(async(req, res) => {
  const goals = await Goal.find({ user: req.user.id })

  res.json(goals)
})

// @desc    Set goals
// @route   POST api/goals
// @access  Private
const postGoals = asyncHandler(async(req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error('please add a text field') 
  }
  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id
  })

  res.json(goal)
})

// @desc    Update goals
// @route   PUT api/goals/:id
// @access  Private
const updateGoals = asyncHandler(async(req, res) => {
  const goal = await Goal.findById(req.params.id)

  if(!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.json(updatedGoal)
})

// @desc    Delete goals
// @route   DELETE api/goals/:id
// @access  Private
const deleteGoals = asyncHandler(async(req, res) => {
  const goal = await Goal.findById(req.params.id)

  if(!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }
  await Goal.remove()
  res.json({id: req.params.id})
})

module.exports = {
  getGoals, 
  postGoals, 
  updateGoals, 
  deleteGoals
}  