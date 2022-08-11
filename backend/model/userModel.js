const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  text: {
    type: String,
    required: [true, 'Please add your name']
  },
  text: {
    type: String,
    required: [true, 'Please add your email']
  },
  text: {
    type: String,
    required: [true, 'Please add your password']
  },
}, 
{
  timestamps: true
})

module.exports = mongoose.model('User', userSchema)