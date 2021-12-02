"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uuid = require("uuid");

var _Grants = _interopRequireDefault(require("../models/Grants"));

var _ServerResponse = _interopRequireDefault(require("../helpers/ServerResponse"));

var _reorganizeErrors = require("../helpers/reorganizeErrors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @description implements Grants Controller
 */
var GrantsController = /*#__PURE__*/function () {
  function GrantsController() {
    _classCallCheck(this, GrantsController);
  }

  _createClass(GrantsController, null, [{
    key: "createGrant",

    /**
     * @description - implements create grant method by admin users
     * @param {object} req - request object
     * @param {object} res - response object
     * @param {function} next - next function
     * @memberof AuthController
     * @returns {object|function} - returns a response object
     */
    value: function () {
      var _createGrant = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
        var start, _req$body, grantName, description, status, expiryDate, applicationStartDate, grantType, upload, requirements, thematicAreas, existingApplication, grantTypeImageMap, newGrant, grant;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                start = new Date();
                _req$body = req.body, grantName = _req$body.grantName, description = _req$body.description, status = _req$body.status, expiryDate = _req$body.expiryDate, applicationStartDate = _req$body.applicationStartDate, grantType = _req$body.grantType, upload = _req$body.upload, requirements = _req$body.requirements, thematicAreas = _req$body.thematicAreas;
                _context.next = 5;
                return _Grants["default"].findOne({
                  $and: [{
                    grantName: grantName
                  }, {
                    deleted: false
                  }]
                });

              case 5:
                existingApplication = _context.sent;

                if (!existingApplication) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", _ServerResponse["default"].errorResponse(res, 409, {
                  message: 'A grant with this name already exists'
                }, 'Grant already exists', {}, {
                  responseTime: "".concat(new Date() - start, "ms"),
                  errorType: '001',
                  errorDescription: _reorganizeErrors.errorTypeMap['001']
                }));

              case 8:
                grantTypeImageMap = {
                  grant: 'https://res.cloudinary.com/tolulope-od/image/upload/v1605063040/cytonn-photography-vWchRczcQwM-unsplash_suwbc8.jpg',
                  scholarship: 'https://res.cloudinary.com/tolulope-od/image/upload/v1601139589/santi-vedri-O5EMzfdxedg-unsplash_forq9q.jpg'
                };
                newGrant = new _Grants["default"]({
                  grantId: (0, _uuid.v4)(),
                  description: description,
                  grantName: grantName,
                  grantType: grantType,
                  // eslint-disable-next-line no-mixed-operators
                  status: status && status || 'ACTIVE',
                  expiryDate: expiryDate,
                  // eslint-disable-next-line no-mixed-operators
                  applicationStartDate: applicationStartDate && applicationStartDate || Date.now(),
                  createdBy: req.user._id,
                  upload: upload,
                  image: grantTypeImageMap[grantType],
                  requirements: requirements || [],
                  thematicAreas: thematicAreas || []
                });
                _context.next = 12;
                return newGrant.save();

              case 12:
                grant = _context.sent;
                return _context.abrupt("return", _ServerResponse["default"].successResponse(res, 201, {
                  grant: grant
                }, 'Grant created successfully', {
                  responseTime: "".concat(new Date() - start, "ms")
                }));

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", next(_context.t0));

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 16]]);
      }));

      function createGrant(_x, _x2, _x3) {
        return _createGrant.apply(this, arguments);
      }

      return createGrant;
    }()
    /**
     * @description - implements view grants
     * @param {object} req - request object
     * @param {object} res - response object
     * @param {function} next - next function
     * @memberof AuthController
     * @returns {object|function} - returns a response object
     */

  }, {
    key: "getAllGrants",
    value: function () {
      var _getAllGrants = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
        var start, _req$query, status, expiryDateRageStart, expiryDateRangeEnd, applicationDateRangeStart, applicationDateRangeEnd, pageSize, page, itemsPerPage, numberOfPages, queryOpts, grants, totalCount;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                start = new Date();
                _req$query = req.query, status = _req$query.status, expiryDateRageStart = _req$query.expiryDateRageStart, expiryDateRangeEnd = _req$query.expiryDateRangeEnd, applicationDateRangeStart = _req$query.applicationDateRangeStart, applicationDateRangeEnd = _req$query.applicationDateRangeEnd, pageSize = _req$query.pageSize, page = _req$query.page;
                itemsPerPage = pageSize || 10;
                numberOfPages = Math.max(0, page) || 0;
                queryOpts = _objectSpread(_objectSpread(_objectSpread({}, status ? {
                  status: status
                } : {
                  status: 'ACTIVE'
                }), applicationDateRangeStart && applicationDateRangeEnd ? {
                  applicationStartDate: {
                    $gte: applicationDateRangeStart,
                    $lte: applicationDateRangeEnd
                  }
                } : {}), expiryDateRageStart && expiryDateRangeEnd ? {
                  expiryDate: {
                    $gte: expiryDateRageStart,
                    $lte: expiryDateRangeEnd
                  }
                } : {});
                _context2.next = 8;
                return _Grants["default"].find(_objectSpread({}, queryOpts)).populate('createdBy', ['_id', 'firstName', 'lastName']).limit(parseInt(itemsPerPage, 10)).skip(parseInt(itemsPerPage, 10) * parseInt(numberOfPages, 10)).sort({
                  createdOn: -1
                });

              case 8:
                grants = _context2.sent;
                _context2.next = 11;
                return _Grants["default"].count(_objectSpread({}, queryOpts));

              case 11:
                totalCount = _context2.sent;
                return _context2.abrupt("return", _ServerResponse["default"].successResponse(res, 200, {
                  grants: grants
                }, 'Grants fetched successfully', {
                  responseTime: "".concat(new Date() - start, "ms"),
                  totalCount: totalCount,
                  currentCount: grants.length,
                  page: page,
                  pageSize: pageSize
                }));

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", next(_context2.t0));

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 15]]);
      }));

      function getAllGrants(_x4, _x5, _x6) {
        return _getAllGrants.apply(this, arguments);
      }

      return getAllGrants;
    }()
    /**
     * @description - implements updating/editing a grant
     * @param {object} req - request object
     * @param {object} res - response object
     * @param {function} next - next function
     * @memberof AuthController
     * @returns {object|function} - returns a response object
     */

  }, {
    key: "updateAGrant",
    value: function () {
      var _updateAGrant = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
        var start, _req$body2, grantName, description, status, expiryDate, applicationStartDate, grantType, grantId, grantFields, updatedGrant;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                start = new Date();
                _req$body2 = req.body, grantName = _req$body2.grantName, description = _req$body2.description, status = _req$body2.status, expiryDate = _req$body2.expiryDate, applicationStartDate = _req$body2.applicationStartDate, grantType = _req$body2.grantType;
                grantId = req.grantId;
                grantFields = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, grantName ? {
                  grantName: grantName
                } : {}), grantType ? {
                  grantType: grantType
                } : {}), description ? {
                  description: description
                } : {}), status ? {
                  status: status
                } : {}), expiryDate ? {
                  applicationStartDate: applicationStartDate
                } : {}), {}, {
                  updatedOn: Date.now(),
                  updatedBy: req.user._id
                });
                _context3.next = 7;
                return _Grants["default"].findOneAndUpdate({
                  _id: grantId
                }, {
                  $set: grantFields
                }, {
                  "new": true
                });

              case 7:
                updatedGrant = _context3.sent;
                return _context3.abrupt("return", _ServerResponse["default"].successResponse(res, 200, {
                  grant: updatedGrant
                }, 'Grant updated successfully', {
                  responseTime: "".concat(new Date() - start, "ms")
                }));

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", next(_context3.t0));

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 11]]);
      }));

      function updateAGrant(_x7, _x8, _x9) {
        return _updateAGrant.apply(this, arguments);
      }

      return updateAGrant;
    }()
    /**
     * @description - implements get a grant by id
     * @param {object} req - request object
     * @param {object} res - response object
     * @param {function} next - next function
     * @memberof AuthController
     * @returns {object|function} - returns a response object
     */

  }, {
    key: "getGrantById",
    value: function () {
      var _getGrantById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
        var start, findGrant;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                start = new Date();
                findGrant = req.findGrant;
                return _context4.abrupt("return", _ServerResponse["default"].successResponse(res, 200, {
                  grant: findGrant
                }, 'Grant fetched successfully', {
                  responseTime: "".concat(new Date() - start, "ms")
                }));

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4["catch"](0);
                return _context4.abrupt("return", next(_context4.t0));

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 6]]);
      }));

      function getGrantById(_x10, _x11, _x12) {
        return _getGrantById.apply(this, arguments);
      }

      return getGrantById;
    }()
    /**
     * @description - implements delete a grant
     * @param {object} req - request object
     * @param {object} res - response object
     * @param {function} next - next function
     * @memberof AuthController
     * @returns {object|function} - returns a response object
     */

  }, {
    key: "deleteAGrant",
    value: function () {
      var _deleteAGrant = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
        var start, grantId, grantFields;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                start = new Date();
                grantId = req.grantId;
                grantFields = {
                  deleted: true,
                  updatedOn: Date.now(),
                  updatedBy: req.user._id
                };
                _context5.next = 6;
                return _Grants["default"].findOneAndUpdate({
                  _id: grantId
                }, {
                  $set: grantFields
                }, {
                  "new": true
                });

              case 6:
                return _context5.abrupt("return", _ServerResponse["default"].successResponse(res, 200, {
                  grant: null
                }, 'Grant delete successfully', {
                  responseTime: "".concat(new Date() - start, "ms")
                }));

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](0);
                return _context5.abrupt("return", next(_context5.t0));

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 9]]);
      }));

      function deleteAGrant(_x13, _x14, _x15) {
        return _deleteAGrant.apply(this, arguments);
      }

      return deleteAGrant;
    }()
  }]);

  return GrantsController;
}();

var _default = GrantsController;
exports["default"] = _default;