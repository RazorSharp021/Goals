// @desc    Get goals
// @route   GET api/goals
// @access  Private
const getGoals = (req, res) => {
  res.json({ message: 'Get goals' })
}

// @desc    Post goals
// @route   POST api/goals
// @access  Private
const postGoals = (req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error('please add a text field') 
  }
  res.json({message: 'Set goals'})
}

// @desc    Update goals
// @route   PUT api/goals/:id
// @access  Private
const putGoals = (req, res) => {
  res.json({message: `Update goal ${req.params.id}`})
}

// @desc    Delete goals
// @route   DELETE api/goals/:id
// @access  Private
const deleteGoals = (req, res) => {
  res.json({message: `Delete goal ${req.params.id}`})
}

module.exports = {
  getGoals, 
  postGoals, 
  putGoals, 
  deleteGoals
}  