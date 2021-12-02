"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _GrantApplications = _interopRequireDefault(require("../models/GrantApplications"));

var _EmailService = _interopRequireDefault(require("../services/EmailService"));

var _ServerResponse = _interopRequireDefault(require("../helpers/ServerResponse"));

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
 * @description implements Grant Applications Controller
 */
var GrantApplicationsController = /*#__PURE__*/function () {
  function GrantApplicationsController() {
    _classCallCheck(this, GrantApplicationsController);
  }

  _createClass(GrantApplicationsController, null, [{
    key: "requestGrant",

    /**
     * @description - implements user requesting a grant
     * @param {object} req - request object
     * @param {object} res - response object
     * @param {function} next - next function
     * @memberof AuthController
     * @returns {object|function} - returns a response object
     */
    value: function () {
      var _requestGrant = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
        var grantId, findGrant, applicationDocument, start, newGrantApplication, grantApplication, emailService, emailData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                grantId = req.grantId, findGrant = req.findGrant;
                applicationDocument = req.body.applicationDocument;
                start = new Date();
                newGrantApplication = new _GrantApplications["default"]({
                  grantId: grantId,
                  requestedBy: req.user._id,
                  status: 'PROCESSING',
                  applicationDocument: applicationDocument
                });
                _context.next = 7;
                return newGrantApplication.save();

              case 7:
                grantApplication = _context.sent;
                emailService = new _EmailService["default"](req.user.email, 'Your grant application on Kathēkon');
                emailData = {
                  frontendURL: process.env.FRONTEND_URL,
                  firstName: req.user.firstName,
                  supportEmail: process.env.SUPPORT_EMAIL,
                  grantName: findGrant.grantName
                };
                _context.next = 12;
                return emailService.sendEmail('newapplication', emailData);

              case 12:
                return _context.abrupt("return", _ServerResponse["default"].successResponse(res, 201, {
                  grant: grantId,
                  grantApplication: grantApplication
                }, 'Grant application created successfully and we will be in touch shortly', {
                  responseTime: "".concat(new Date() - start, "ms")
                }));

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", next(_context.t0));

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 15]]);
      }));

      function requestGrant(_x, _x2, _x3) {
        return _requestGrant.apply(this, arguments);
      }

      return requestGrant;
    }()
    /**
     * @description - implements getting a grant application
     * @param {object} req - request object
     * @param {object} res - response object
     * @param {function} next - next function
     * @memberof AuthController
     * @returns {object|function} - returns a response object
     */

  }, {
    key: "getAllGrantApplications",
    value: function () {
      var _getAllGrantApplications = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
        var start, _req$query, status, applicationDateRangeStart, applicationDateRangeEnd, pageSize, page, itemsPerPage, numberOfPages, queryOpts, grantApplications, totalCount;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                start = new Date();
                _req$query = req.query, status = _req$query.status, applicationDateRangeStart = _req$query.applicationDateRangeStart, applicationDateRangeEnd = _req$query.applicationDateRangeEnd, pageSize = _req$query.pageSize, page = _req$query.page;
                itemsPerPage = pageSize || 10;
                numberOfPages = Math.max(0, page) || 0;
                queryOpts = _objectSpread(_objectSpread(_objectSpread({}, status ? {
                  status: status
                } : {}), applicationDateRangeStart && applicationDateRangeEnd ? {
                  createdOn: {
                    $gte: applicationDateRangeStart,
                    $lte: applicationDateRangeEnd
                  }
                } : {}), req.user.userType === 'REQUESTER' ? {
                  requestedBy: req.user._id
                } : {});
                _context2.next = 8;
                return _GrantApplications["default"].find(_objectSpread({}, queryOpts)).populate('requestedBy').populate('grantId').limit(parseInt(itemsPerPage, 10)).skip(parseInt(itemsPerPage, 10) * parseInt(numberOfPages, 10)).sort({
                  createdOn: -1
                });

              case 8:
                grantApplications = _context2.sent;
                _context2.next = 11;
                return _GrantApplications["default"].count(_objectSpread({}, queryOpts));

              case 11:
                totalCount = _context2.sent;
                return _context2.abrupt("return", _ServerResponse["default"].successResponse(res, 200, {
                  grantApplications: grantApplications
                }, 'Grants fetched successfully', {
                  responseTime: "".concat(new Date() - start, "ms"),
                  totalCount: totalCount,
                  currentCount: grantApplications.length,
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

      function getAllGrantApplications(_x4, _x5, _x6) {
        return _getAllGrantApplications.apply(this, arguments);
      }

      return getAllGrantApplications;
    }()
    /**
     * @description - implements treating a grant application
     * @param {object} req - request object
     * @param {object} res - response object
     * @param {function} next - next function
     * @memberof AuthController
     * @returns {object|function} - returns a response object
     */

  }, {
    key: "treatGrantApplication",
    value: function () {
      var _treatGrantApplication = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
        var start, status, grantApplicationId, grantApplicationFields, treated;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                start = new Date();
                status = req.body.status;
                grantApplicationId = req.params.grantApplicationId;
                grantApplicationFields = {
                  status: status,
                  updatedOn: Date.now(),
                  treatedBy: req.user._id
                };
                _context3.next = 7;
                return _GrantApplications["default"].findOneAndUpdate({
                  _id: grantApplicationId
                }, {
                  $set: grantApplicationFields
                }, {
                  "new": true
                });

              case 7:
                treated = _context3.sent;
                return _context3.abrupt("return", _ServerResponse["default"].successResponse(res, 200, {
                  grantApplication: treated
                }, "Grant ".concat(status.toLowerCase(), " successfully"), {
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

      function treatGrantApplication(_x7, _x8, _x9) {
        return _treatGrantApplication.apply(this, arguments);
      }

      return treatGrantApplication;
    }()
  }]);

  return GrantApplicationsController;
}();

var _default = GrantApplicationsController;
exports["default"] = _default;