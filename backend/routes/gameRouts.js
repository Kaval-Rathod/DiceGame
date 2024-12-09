import express from 'express';
import UserData from '../models/UserData.js';

const router = express.Router();

// Save Score
router.post('/save-score', async (req, res) => {
  const { username, email, score } = req.body;

  try {
    let user = await UserData.findOne({ email });

    if (user) {
      // Update score if the user already exists
      user.score = Math.max(user.score, score); // Keep the highest score
      await user.save();
    } else {
      // Create a new user with the provided score
      user = new UserData({ username, email, score });
      await user.save();
    }

    res.status(200).json({ message: 'Score saved successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error saving score', error });
  }
});

// Fetch Scores
router.get('/scores', async (req, res) => {
  try {
    const scores = await UserData.find().sort({ score: -1 }).limit(10); // Top 10 scores
    res.status(200).json(scores);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching scores', error });
  }
});

export default router;
