"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _BlogController = _interopRequireDefault(require("../controllers/BlogController"));

var _Permissions = _interopRequireDefault(require("../middlewares/Permissions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var blogsRouter = (0, _express.Router)();
blogsRouter.post('/', _Permissions["default"].authenticateJWTFromRequest, _Permissions["default"].allowOnly(['ADMIN', 'SUPER_ADMIN']), _BlogController["default"].createBlogPost);
blogsRouter.get('/', _BlogController["default"].getBlogPosts);
blogsRouter.get('/:slug', _BlogController["default"].getPostBySlug);
var _default = blogsRouter;
exports["default"] = _default;