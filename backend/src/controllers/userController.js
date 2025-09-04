const { validationResult } = require('express-validator');
const User = require('../models/User'); 

exports.getUsers = async (req, res) => {
  const users = await User.find().sort({ createdAt: -1 });
  res.json(users);
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }
  res.json(user);
};

exports.createUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    throw new Error(errors.array().map((e) => e.msg).join(', '));
  }

  const { name, email, phone, company, role, avatar, address = {} } = req.body;

  const existing = await User.findOne({ email });
  if (existing) {
    res.status(400);
    throw new Error('Email already in use');
  }

  const user = new User({ name, email, phone, company, role, avatar, address });
  const saved = await user.save();
  res.status(201).json(saved);
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    throw new Error(errors.array().map((e) => e.msg).join(', '));
  }

  const user = await User.findById(id);
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  const { name, email, phone, company, role, status, avatar, address } = req.body;

  if (email && email !== user.email) {
    const existing = await User.findOne({ email });
    if (existing) {
      res.status(400);
      throw new Error('Email already in use');
    }
  }

  if (name !== undefined) user.name = name;
  if (email !== undefined) user.email = email;
  if (phone !== undefined) user.phone = phone;
  if (company !== undefined) user.company = company;
  if (role !== undefined) user.role = role;
  if (status !== undefined) user.status = status;
  if (avatar !== undefined) user.avatar = avatar;

  if (address !== undefined) {
    user.address = {
      ...user.address?.toObject?.() ?? {},
      ...address,
      geo: {
        ...(user.address?.geo?.toObject?.() ?? {}),
        ...(address?.geo ?? {})
      }
    };
  }

  const updated = await user.save();
  res.json(updated);
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }
  await user.deleteOne();
  res.json({ message: 'User deleted' });
};
