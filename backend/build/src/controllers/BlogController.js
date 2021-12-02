"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BlogPost = _interopRequireDefault(require("../models/BlogPost"));

var _ServerResponse = _interopRequireDefault(require("../helpers/ServerResponse"));

var _BlogPostHelper = _interopRequireDefault(require("../helpers/BlogPostHelper"));

var _reorganizeErrors = require("../helpers/reorganizeErrors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 *
 * @description class to model helper methods for blog posts
 * @export
 * @class BlogController
 */
var BlogController = /*#__PURE__*/function () {
  function BlogController() {
    _classCallCheck(this, BlogController);
  }

  _createClass(BlogController, null, [{
    key: "createBlogPost",

    /**
     * @method createBlogPost
     * @description create a new blog post
     * @static
     * @async
     * @param {object} req - request object
     * @param {object} res - response object
     * @param {function} next - next function
     * @returns {object|function} - returns a response object
     * @memberof BlogController
     */
    value: function () {
      var _createBlogPost = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
        var start, _req$body, body, title, description, tags, status, coverImage, safeTitle, slug, allParagraphs, reduced, readTime, newPost, post;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                start = new Date();
                _context.prev = 1;
                _req$body = req.body, body = _req$body.body, title = _req$body.title, description = _req$body.description, tags = _req$body.tags, status = _req$body.status, coverImage = _req$body.coverImage;
                safeTitle = title.replace(/[^\w\s]/gi, '');
                slug = _BlogPostHelper["default"].generateSlug(safeTitle);
                allParagraphs = JSON.parse(body);
                reduced = allParagraphs.blocks.reduce(function (accumulator, item) {
                  if (item.type === 'paragraph') {
                    accumulator.paraprhaps += " ".concat(item.data.text);
                  }

                  return accumulator;
                }, {
                  paraprhaps: ''
                });
                readTime = _BlogPostHelper["default"].getReadTime(reduced.paraprhaps);
                newPost = new _BlogPost["default"]({
                  body: body,
                  title: title,
                  author: req.user._id,
                  description: description,
                  tags: tags ? _toConsumableArray(tags) : [],
                  coverImage: coverImage,
                  status: status || 'PUBLISHED',
                  slug: slug,
                  readTime: readTime
                });
                _context.next = 11;
                return newPost.save();

              case 11:
                post = _context.sent;
                return _context.abrupt("return", _ServerResponse["default"].successResponse(res, 201, _objectSpread({}, post), 'Successfully created blog article', {
                  responseTime: "".concat(new Date() - start, "ms")
                }));

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](1);
                return _context.abrupt("return", next(_context.t0));

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 15]]);
      }));

      function createBlogPost(_x, _x2, _x3) {
        return _createBlogPost.apply(this, arguments);
      }

      return createBlogPost;
    }()
  }, {
    key: "getBlogPosts",
    value: function () {
      var _getBlogPosts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
        var start, _req$query, status, createdOnRangeStart, createdOnRangeEnd, pageSize, page, itemsPerPage, numberOfPages, queryOpts, posts, totalCount;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                start = new Date();
                _context2.prev = 1;
                _req$query = req.query, status = _req$query.status, createdOnRangeStart = _req$query.createdOnRangeStart, createdOnRangeEnd = _req$query.createdOnRangeEnd, pageSize = _req$query.pageSize, page = _req$query.page;
                itemsPerPage = pageSize || 10;
                numberOfPages = Math.max(0, page) || 0;
                queryOpts = _objectSpread(_objectSpread({}, status ? {
                  status: status
                } : {
                  status: 'PUBLISHED'
                }), createdOnRangeStart && createdOnRangeEnd ? {
                  createdOn: {
                    $gte: createdOnRangeStart,
                    $lte: createdOnRangeEnd
                  }
                } : {});
                _context2.next = 8;
                return _BlogPost["default"].find(_objectSpread({}, queryOpts)).populate('author', ['_id', 'firstName', 'lastName']).limit(parseInt(itemsPerPage, 10)).skip(parseInt(itemsPerPage, 10) * parseInt(numberOfPages, 10)).sort({
                  createdOn: -1
                });

              case 8:
                posts = _context2.sent;
                _context2.next = 11;
                return _BlogPost["default"].count(_objectSpread({}, queryOpts));

              case 11:
                totalCount = _context2.sent;
                return _context2.abrupt("return", _ServerResponse["default"].successResponse(res, 200, {
                  posts: posts
                }, 'Stories fetched successfully', {
                  responseTime: "".concat(new Date() - start, "ms"),
                  totalCount: totalCount,
                  currentCount: posts.length,
                  page: page,
                  pageSize: pageSize
                }));

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](1);
                return _context2.abrupt("return", next(_context2.t0));

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 15]]);
      }));

      function getBlogPosts(_x4, _x5, _x6) {
        return _getBlogPosts.apply(this, arguments);
      }

      return getBlogPosts;
    }()
  }, {
    key: "getPostBySlug",
    value: function () {
      var _getPostBySlug = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
        var start, slug, post, updatedPostFields, updatedPost, itemsPerPage, numberOfPages, recentPosts;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                start = new Date();
                _context3.prev = 1;
                slug = req.params.slug;
                _context3.next = 5;
                return _BlogPost["default"].findOne({
                  slug: slug
                }).populate('author', ['_id', 'firstName', 'lastName', 'avatar']);

              case 5:
                post = _context3.sent;

                if (post) {
                  _context3.next = 8;
                  break;
                }

                return _context3.abrupt("return", _ServerResponse["default"].errorResponse(res, 404, {
                  message: 'This post has either been removed or does not exist'
                }, 'Post not found', {}, {
                  responseTime: "".concat(new Date() - start, "ms"),
                  errorType: '001',
                  errorDescription: _reorganizeErrors.errorTypeMap['001']
                }));

              case 8:
                // update read count
                updatedPostFields = {
                  readCount: post.readCount + 1
                };
                _context3.next = 11;
                return _BlogPost["default"].findOneAndUpdate({
                  _id: post._id
                }, {
                  $set: updatedPostFields
                }, {
                  "new": true
                }).populate('author', ['_id', 'firstName', 'lastName', 'avatar']);

              case 11:
                updatedPost = _context3.sent;
                // fetch related posts
                itemsPerPage = 4;
                numberOfPages = 0;
                _context3.next = 16;
                return _BlogPost["default"].find({
                  status: 'PUBLISHED',
                  slug: {
                    $not: {
                      $regex: "^".concat(slug)
                    }
                  }
                }).populate('author', ['_id', 'firstName', 'lastName']).limit(parseInt(itemsPerPage, 10)).skip(parseInt(itemsPerPage, 10) * parseInt(numberOfPages, 10)).sort({
                  createdOn: -1
                });

              case 16:
                recentPosts = _context3.sent;
                return _context3.abrupt("return", _ServerResponse["default"].successResponse(res, 200, {
                  post: updatedPost,
                  recentPosts: recentPosts
                }, 'Stories fetched successfully', {
                  responseTime: "".concat(new Date() - start, "ms")
                }));

              case 20:
                _context3.prev = 20;
                _context3.t0 = _context3["catch"](1);
                return _context3.abrupt("return", next(_context3.t0));

              case 23:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 20]]);
      }));

      function getPostBySlug(_x7, _x8, _x9) {
        return _getPostBySlug.apply(this, arguments);
      }

      return getPostBySlug;
    }()
  }]);

  return BlogController;
}();

var _default = BlogController;
exports["default"] = _default;