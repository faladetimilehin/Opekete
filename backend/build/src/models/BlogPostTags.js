"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var blogPostTagSchema = new _mongoose.Schema({
  tagName: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  createdOn: {
    type: Date,
    "default": Date.now
  },
  updatedOn: {
    type: Date,
    "default": Date.now
  },
  createdBy: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  deleted: {
    type: Boolean,
    "default": false
  }
});
blogPostTagSchema.index({
  tagName: 'text'
});
var BlogPostTag = (0, _mongoose.model)('blogPostTags', blogPostTagSchema);
var _default = BlogPostTag;
exports["default"] = _default;