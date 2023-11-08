const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = await YourModel.findAll();
        res.json(data)
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
});

router.post('/', async (req, res) => {
    const { name, email } = req.body

    try {
        const user = await YourModel.create({ name, email })
        res.status(201).json(user)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params
    const changes = req.body
  
    try {
      const user = await YourModel.findByPk(id)
      if (!user) {
        return res.status(404).json({ message: 'User not found' })
      }
  
      user.set(changes)
      await user.save()
      res.json(user)
    } catch (err) {
      res.status(400).json({ message: err.message }) 
    }
  })

module.exports = router;