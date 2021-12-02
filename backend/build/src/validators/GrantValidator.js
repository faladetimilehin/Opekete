"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _ServerResponse = _interopRequireDefault(require("../helpers/ServerResponse"));

var _reorganizeErrors = _interopRequireWildcard(require("../helpers/reorganizeErrors"));

var _MongooseHelper = _interopRequireDefault(require("../helpers/MongooseHelper"));

var _Grants = _interopRequireDefault(require("../models/Grants"));

var _GrantApplications = _interopRequireDefault(require("../models/GrantApplications"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @description implements Grant Validator class
 */
var GrantValidator = /*#__PURE__*/function () {
  function GrantValidator() {
    _classCallCheck(this, GrantValidator);
  }

  _createClass(GrantValidator, null, [{
    key: "validateGrantCreation",

    /**
     * @description - implements validator for grant creation
     * @param {object} req - request object
     * @param {object} res - response object
     * @param {function} next - next function call
     * @member GrantValidator
     * @return {object|function} - returns a response object if validation fails or a function if it passes
     */
    value: function validateGrantCreation(req, res, next) {
      var start = new Date();

      var schema = _joi["default"].object({
        grantName: _joi["default"].string().required(),
        description: _joi["default"].string().required(),
        status: _joi["default"].string(),
        expiryDate: _joi["default"].date(),
        applicationStartDate: _joi["default"].string(),
        grantType: _joi["default"].string().required(),
        upload: _joi["default"].string().required(),
        thematicAreas: _joi["default"].array(),
        requirements: _joi["default"].array()
      });

      var _schema$validate = schema.validate(req.body, {
        abortEarly: false
      }),
          error = _schema$validate.error;

      if (error) {
        var errorMessages = (0, _reorganizeErrors["default"])(error.details);
        return _ServerResponse["default"].errorResponse(res, 400, errorMessages, 'Validation error', {}, {
          errorType: '001',
          responseTime: "".concat(new Date() - start, "ms"),
          errorDescription: _reorganizeErrors.errorTypeMap['001']
        });
      }

      return next();
    }
    /**
     * @description - implements validator for grant existence
     * @param {object} req - request object
     * @param {object} res - response object
     * @param {function} next - next function call
     * @member GrantValidator
     * @return {object|function} - returns a response object if validation fails or a function if it passes
     */

  }, {
    key: "validateGrantExists",
    value: function () {
      var _validateGrantExists = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
        var start, grantId, validId, findGrant;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                start = new Date();
                grantId = req.params.grantId;
                validId = _MongooseHelper["default"].validateObjectId(grantId);

                if (validId) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", _ServerResponse["default"].errorResponse(res, 400, {
                  message: 'Please provide a valid ID'
                }, 'Please provide a valid ID', {}, {
                  responseTime: "".concat(new Date() - start, "ms"),
                  errorType: '001',
                  errorDescription: _reorganizeErrors.errorTypeMap['001']
                }));

              case 5:
                _context.next = 7;
                return _Grants["default"].findOne({
                  _id: grantId,
                  deleted: false
                }).populate('createdBy', ['firstName', 'lastName']);

              case 7:
                findGrant = _context.sent;

                if (findGrant) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt("return", _ServerResponse["default"].errorResponse(res, 404, {
                  message: 'This grant does not exist or may have been deleted'
                }, 'This grant does not exist or may have been deleted', {}, {
                  responseTime: "".concat(new Date() - start, "ms"),
                  errorType: '001',
                  errorDescription: _reorganizeErrors.errorTypeMap['001']
                }));

              case 10:
                req.grantId = grantId;
                req.findGrant = findGrant;
                return _context.abrupt("return", next());

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function validateGrantExists(_x, _x2, _x3) {
        return _validateGrantExists.apply(this, arguments);
      }

      return validateGrantExists;
    }()
    /**
     * @description - implements validator for grant application duplicate
     * @param {object} req - request object
     * @param {object} res - response object
     * @param {function} next - next function call
     * @member GrantValidator
     * @return {object|function} - returns a response object if validation fails or a function if it passes
     */

  }, {
    key: "checkIfApplicationIsDuplicate",
    value: function () {
      var _checkIfApplicationIsDuplicate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
        var start, grantId, findGrantApplication;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                start = new Date();
                grantId = req.grantId;
                _context2.next = 4;
                return _GrantApplications["default"].findOne({
                  grantId: grantId,
                  requestedBy: req.user._id
                });

              case 4:
                findGrantApplication = _context2.sent;

                if (!findGrantApplication) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return", _ServerResponse["default"].errorResponse(res, 409, {
                  message: 'You have already applied for this grant'
                }, 'You have already applied for this grant', {}, {
                  responseTime: "".concat(new Date() - start, "ms"),
                  errorType: '001',
                  errorDescription: _reorganizeErrors.errorTypeMap['001']
                }));

              case 7:
                return _context2.abrupt("return", next());

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function checkIfApplicationIsDuplicate(_x4, _x5, _x6) {
        return _checkIfApplicationIsDuplicate.apply(this, arguments);
      }

      return checkIfApplicationIsDuplicate;
    }()
  }, {
    key: "checkIfResponseIsDuplicate",
    value: function () {
      var _checkIfResponseIsDuplicate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
        var start, grantApplicationId, findGrantApplication;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                start = new Date();
                grantApplicationId = req.params.grantApplicationId;
                _context3.next = 4;
                return _GrantApplications["default"].findOne({
                  _id: grantApplicationId
                });

              case 4:
                findGrantApplication = _context3.sent;

                if (findGrantApplication) {
                  _context3.next = 7;
                  break;
                }

                return _context3.abrupt("return", _ServerResponse["default"].errorResponse(res, 404, {
                  message: 'Grant does not exist'
                }, 'This grant does not exist or may have been moved', {}, {
                  responseTime: "".concat(new Date() - start, "ms"),
                  errorType: '001',
                  errorDescription: _reorganizeErrors.errorTypeMap['001']
                }));

              case 7:
                if (!(findGrantApplication && findGrantApplication.status !== 'PROCESSING')) {
                  _context3.next = 9;
                  break;
                }

                return _context3.abrupt("return", _ServerResponse["default"].errorResponse(res, 409, {
                  message: 'This grant has already been treated'
                }, 'This grant has already been treated and cannot be updated again', {}, {
                  responseTime: "".concat(new Date() - start, "ms"),
                  errorType: '001',
                  errorDescription: _reorganizeErrors.errorTypeMap['001']
                }));

              case 9:
                return _context3.abrupt("return", next());

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function checkIfResponseIsDuplicate(_x7, _x8, _x9) {
        return _checkIfResponseIsDuplicate.apply(this, arguments);
      }

      return checkIfResponseIsDuplicate;
    }()
  }, {
    key: "checkIfGrantApplicationExists",
    value: function () {
      var _checkIfGrantApplicationExists = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
        var status, start, grantApplicationId, validId, findGrantApplication;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                status = req.body.status;
                start = new Date();
                grantApplicationId = req.params.grantApplicationId;
                validId = _MongooseHelper["default"].validateObjectId(grantApplicationId);

                if (validId) {
                  _context4.next = 6;
                  break;
                }

                return _context4.abrupt("return", _ServerResponse["default"].errorResponse(res, 400, {
                  message: 'Please provide a valid ID'
                }, 'Please provide a valid ID', {}, {
                  responseTime: "".concat(new Date() - start, "ms"),
                  errorType: '001',
                  errorDescription: _reorganizeErrors.errorTypeMap['001']
                }));

              case 6:
                _context4.next = 8;
                return _Grants["default"].findOne({
                  _id: grantApplicationId,
                  deleted: false
                }).populate('createdBy', ['firstName', 'lastName']);

              case 8:
                findGrantApplication = _context4.sent;

                if (findGrantApplication) {
                  _context4.next = 11;
                  break;
                }

                return _context4.abrupt("return", _ServerResponse["default"].errorResponse(res, 404, {
                  message: 'This grant application does not exist or may have been deleted'
                }, 'This grant application does not exist or may have been deleted', {}, {
                  responseTime: "".concat(new Date() - start, "ms"),
                  errorType: '001',
                  errorDescription: _reorganizeErrors.errorTypeMap['001']
                }));

              case 11:
                if (!(findGrantApplication && findGrantApplication.status === 'APPROVED' // eslint-disable-next-line no-mixed-operators
                || findGrantApplication.status === 'DECLINED' || findGrantApplication.status === 'ARCHIVED')) {
                  _context4.next = 13;
                  break;
                }

                return _context4.abrupt("return", _ServerResponse["default"].errorResponse(res, 409, {
                  message: "This grant application has already been ".concat(status.toLowerCase(), " and cannot be ").concat(status.lowerCase(), " again")
                }, "This request has already been ".concat(status.toLowerCase()), {}, {
                  responseTime: "".concat(new Date() - start, "ms"),
                  errorType: '001',
                  errorDescription: _reorganizeErrors.errorTypeMap['001']
                }));

              case 13:
                req.grantApplicationId = grantApplicationId;
                req.grantApplication = findGrantApplication;
                return _context4.abrupt("return", next());

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function checkIfGrantApplicationExists(_x10, _x11, _x12) {
        return _checkIfGrantApplicationExists.apply(this, arguments);
      }

      return checkIfGrantApplicationExists;
    }()
  }]);

  return GrantValidator;
}();

var _default = GrantValidator;
exports["default"] = _default;