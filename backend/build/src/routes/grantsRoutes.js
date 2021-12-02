"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _GrantsController = _interopRequireDefault(require("../controllers/GrantsController"));

var _GrantValidator = _interopRequireDefault(require("../validators/GrantValidator"));

var _Permissions = _interopRequireDefault(require("../middlewares/Permissions"));

var _GrantApplicationsController = _interopRequireDefault(require("../controllers/GrantApplicationsController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var grantsRouter = (0, _express.Router)();
grantsRouter.post('/', _Permissions["default"].authenticateJWTFromRequest, _Permissions["default"].allowOnly(['ADMIN', 'SUPER_ADMIN']), _GrantValidator["default"].validateGrantCreation, _GrantsController["default"].createGrant);
grantsRouter.get('/', _GrantsController["default"].getAllGrants);
grantsRouter.get('/applications', _Permissions["default"].authenticateJWTFromRequest, _GrantApplicationsController["default"].getAllGrantApplications);
grantsRouter.get('/:grantId', _GrantValidator["default"].validateGrantExists, _GrantsController["default"].getGrantById);
grantsRouter.patch('/:grantId', _Permissions["default"].authenticateJWTFromRequest, _Permissions["default"].allowOnly(['ADMIN', 'SUPER_ADMIN']), _GrantValidator["default"].validateGrantExists, _GrantValidator["default"].validateGrantCreation, _GrantsController["default"].updateAGrant);
grantsRouter["delete"]('/:grantId', _Permissions["default"].authenticateJWTFromRequest, _Permissions["default"].allowOnly(['ADMIN', 'SUPER_ADMIN']), _GrantValidator["default"].validateGrantExists, _GrantValidator["default"].validateGrantCreation, _GrantsController["default"].updateAGrant);
grantsRouter.post('/application/:grantId', _Permissions["default"].authenticateJWTFromRequest, _Permissions["default"].allowOnly(['REQUESTER']), _GrantValidator["default"].validateGrantExists, _GrantValidator["default"].checkIfApplicationIsDuplicate, _GrantApplicationsController["default"].requestGrant);
grantsRouter.patch('/applications/:grantApplicationId', _Permissions["default"].authenticateJWTFromRequest, _Permissions["default"].allowOnly(['ADMIN', 'SUPER_ADMIN']), _GrantValidator["default"].checkIfResponseIsDuplicate, _GrantApplicationsController["default"].treatGrantApplication);
var _default = grantsRouter;
exports["default"] = _default;