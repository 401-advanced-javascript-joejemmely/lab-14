'use strict';

const mongoose = require('mongoose');
const users = require('./users-model.js');

const roles = new mongoose.Schema({
  role: { type: String, required: true },
  capabilities: { type: Array, required: true },
});

module.exports = mongoose.model('roles', roles);
