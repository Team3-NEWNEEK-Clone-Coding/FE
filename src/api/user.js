const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET;

router.use(express.json());

const users = [
  {
    userEmail: 'user1@example.com',
    passwordHash: '$2b$10$U0gjWJISlWHPqYEkQnURQ.LRJQJkgexBWHL.vrnxHNGJq7gFRbmbu',
  },
  {
    userEmail: 'user2@example.com',
    passwordHash: '$2b$10$SqgQUBVoy1oQwWRXltUe0u4mMl96roGRLvjOCVOIvzEcmmdXjHE2i',
  },
];

const hashPassword = async (userPassword) => {
  const saltRounds = 10;
  return bcrypt.hash(userPassword, saltRounds);
};

const checkCredentials = async (userEmail, userPassword) => {
  const user = users.find((user) => user.userEmail === userEmail);
  if (!user) {
    return false;
  }
  return await bcrypt.compare(userPassword, user.passwordHash);
};

const generateToken = (userEmail) => {
  return jwt.sign({ userEmail }, secretKey, { expiresIn: '1h' });
};

router.post('/login', async (req, res) => {
  const { userEmail, userPassword } = req.body;

  const isValidCredentials = await checkCredentials(userEmail, userPassword);
  if (isValidCredentials) {
    const token = generateToken(userEmail);
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

router.post('/signup', async (req, res) => {
  try {
    const { userEmail, nickname, userPassword } = req.body;

    if (users.some((user) => user.userEmail === userEmail)) {
      return res.status(400).json({ error: '이미 가입된 이메일입니다.' });
    }

    const passwordHash = await hashPassword(userPassword);
    users.push({ userEmail, passwordHash });

    const token = generateToken(userEmail);
    res.json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: '서버 에러가 발생했습니다.' });
  }
});

router.post('/check-email', (req, res) => {
  const { userEmail } = req.body;

  if (!userEmail) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const isDuplicate = users.some((user) => user.userEmail === userEmail);
  res.json({ isDuplicate });
});

module.exports = router;
