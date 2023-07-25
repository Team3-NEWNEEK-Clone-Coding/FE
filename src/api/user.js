const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET || 'jwt.secret.key';

router.use(express.json());

const users = [
  {
    email: 'user1@example.com',
    passwordHash: '$2b$10$U0gjWJISlWHPqYEkQnURQ.LRJQJkgexBWHL.vrnxHNGJq7gFRbmbu',
  },
  {
    email: 'user2@example.com',
    passwordHash: '$2b$10$SqgQUBVoy1oQwWRXltUe0u4mMl96roGRLvjOCVOIvzEcmmdXjHE2i',
  },
];

const hashPassword = async (password) => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
};

const checkCredentials = async (email, password) => {
  const user = users.find((user) => user.email === email);
  if (!user) {
    return false;
  }
  return await bcrypt.compare(password, user.passwordHash);
};

const generateToken = (email) => {
  return jwt.sign({ email }, secretKey, { expiresIn: '1h' });
};

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const isValidCredentials = await checkCredentials(email, password);
  if (isValidCredentials) {
    const token = generateToken(email);
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

router.post('/signup', async (req, res) => {
  try {
    const { email, nickname, password } = req.body;

    if (users.some((user) => user.email === email)) {
      return res.status(400).json({ error: '이미 가입된 이메일입니다.' });
    }

    const passwordHash = await hashPassword(password);
    users.push({ email, passwordHash });

    const token = generateToken(email);
    res.json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: '서버 에러가 발생했습니다.' });
  }
});

router.post('/check-email', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const isDuplicate = users.some((user) => user.email === email);
  res.json({ isDuplicate });
});

module.exports = router;
