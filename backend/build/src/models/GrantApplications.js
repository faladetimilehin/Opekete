"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var grantApplicationsSchema = new _mongoose.Schema({
  grantId: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'grants'
  },
  createdOn: {
    type: Date,
    "default": Date.now
  },
  updatedOn: {
    type: Date,
    "default": Date.now
  },
  requestedBy: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  status: {
    type: String,
    required: true,
    "enum": ['APPROVED', 'PROCESSING', 'IN_REVIEW', 'DECLINED', 'ARCHIVED'],
    "default": 'PROCESSING'
  },
  treatedBy: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  applicationDocument: {
    type: String,
    required: true
  }
});
var GrantApplications = (0, _mongoose.model)('grantApplications', grantApplicationsSchema);
var _default = GrantApplications;
exports["default"] = _default;