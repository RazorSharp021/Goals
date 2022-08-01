const getGoals = (req, res) => {
  res.json({ message: 'Get goals' })
}

const postGoals = (req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error('please add a text field') 
  }
  res.json({message: 'Set goals'})
}

const putGoals = (req, res) => {
  res.json({message: `Update goal ${req.params.id}`})
}

const deleteGoals = (req, res) => {
  res.json({message: `Update goal ${req.params.id}`})
}

module.exports = {
  getGoals, 
  postGoals, 
  putGoals, 
  deleteGoals
}  