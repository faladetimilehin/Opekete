"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var grantsSchema = new _mongoose.Schema({
  grantId: {
    type: String,
    required: true
  },
  grantName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    "enum": ['ACTIVE', 'CLOSED', 'EVALUATING', 'EXPIRED', 'ARCHIVED'],
    "default": 'ACTIVE'
  },
  createdOn: {
    type: Date,
    "default": Date.now
  },
  updatedOn: {
    type: Date,
    "default": Date.now
  },
  updatedBy: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  createdBy: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  applicationStartDate: {
    type: Date,
    "default": Date.now
  },
  expiryDate: {
    type: Date,
    "default": Date.now
  },
  deleted: {
    type: Boolean,
    "default": false
  },
  grantType: {
    type: String,
    required: true,
    "enum": ['grant', 'scholarship'],
    "default": 'grant'
  },
  upload: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  requirements: {
    type: Array,
    "default": []
  },
  thematicAreas: {
    type: Array,
    "default": []
  }
});
grantsSchema.index({
  grantName: 'text',
  description: 'text',
  status: 'text',
  grantType: 'text'
});
var Grants = (0, _mongoose.model)('grants', grantsSchema);
var _default = Grants;
exports["default"] = _default;