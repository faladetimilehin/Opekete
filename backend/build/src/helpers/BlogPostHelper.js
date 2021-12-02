"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 *
 * @description class to model helper methods for blog posts
 * @export
 * @class BlogPostHelper
 */
var BlogPostHelper = /*#__PURE__*/function () {
  function BlogPostHelper() {
    _classCallCheck(this, BlogPostHelper);
  }

  _createClass(BlogPostHelper, null, [{
    key: "generateSlug",

    /**
     * @method generateSlug
     * @description generates a slug for an blog post when given the title;
     * @static
     * @param {string} title
     * @returns {string} slug generated string with a random number
     * @memberof BlogPostHelper
     */
    value: function generateSlug(title) {
      var formattedTitle = title.split(' ').join('-');
      var randomNumber = Math.floor(Math.random() * 100000);
      return "".concat(formattedTitle.toLowerCase(), "-").concat(Date.now(), "-").concat(randomNumber);
    }
    /**
     * @method getReadTime
     * @description Calculate how many minutes it takes to read a block of text
     * @static
     * @param {string} text
     * @returns {number} amount of minutes it takes to read a block of text
     * @memberof BlogPostHelper
     */

  }, {
    key: "getReadTime",
    value: function getReadTime(text) {
      var articleLength = text.split(' ').length;
      var time = articleLength / 200;
      return Math.round(time);
    }
  }]);

  return BlogPostHelper;
}();

var _default = BlogPostHelper;
exports["default"] = _default;