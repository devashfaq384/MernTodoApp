const User = require('../models/userModel')

const createUser = async (req, res) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email });
    
        if (existingUser) {
          return res.json({ message: 'Email already exists' });
        }
    
        const newUser = await User.create(req.body);
        res.json({ username: newUser.username , userId : newUser._id });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
}

const getUser = async (req, res) => {
    const user = await User.findOne({ email: req.body.email , Password : req.body.Password});
    if(user){
        res.json(user);
    }else{
      res.json({
          message : "Email or Password is incorrect"
      })
    }
    
  }

module.exports = { createUser, getUser }