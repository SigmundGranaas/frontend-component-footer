function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import messages from './Footer.messages';
import FooterLogo from '../logo.png';
import LanguageSelector from './LanguageSelector';
var EVENT_NAMES = {
  FOOTER_LINK: 'edx.bi.footer.link'
};

var SiteFooter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SiteFooter, _React$Component);

  function SiteFooter(props) {
    var _this;

    _classCallCheck(this, SiteFooter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SiteFooter).call(this, props));
    _this.externalLinkClickHandler = _this.externalLinkClickHandler.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SiteFooter, [{
    key: "getLocalePrefix",
    value: function getLocalePrefix(locale) {
      var twoLetterPrefix = locale.substring(0, 2).toLowerCase();

      if (twoLetterPrefix === 'en') {
        return '';
      }

      return "/".concat(twoLetterPrefix);
    }
  }, {
    key: "externalLinkClickHandler",
    value: function externalLinkClickHandler(event) {
      var label = event.currentTarget.getAttribute('href');
      var eventName = EVENT_NAMES.FOOTER_LINK;
      var properties = {
        category: 'outbound_link',
        label: label
      };
      sendTrackEvent(eventName, properties);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          supportedLanguages = _this$props.supportedLanguages,
          onLanguageSelected = _this$props.onLanguageSelected,
          logo = _this$props.logo,
          intl = _this$props.intl;
      var showLanguageSelector = supportedLanguages.length > 0 && onLanguageSelected;
      return React.createElement("footer", {
        role: "contentinfo",
        "aria-label": intl.formatMessage(messages['footer.logo.ariaLabel']),
        className: "footer d-flex border-top py-3 px-4"
      }, React.createElement("div", {
        className: "container d-flex"
      }, React.createElement("a", {
        className: "d-block mb-3",
        href: "https://open.edx.org",
        "aria-label": intl.formatMessage(messages['footer.logo.ariaLabel'])
      }, React.createElement("img", {
        style: {
          maxWidth: 150
        },
        src: logo || FooterLogo,
        alt: intl.formatMessage(messages['footer.logo.altText'])
      })), React.createElement("div", {
        className: "flex-grow-1"
      }), showLanguageSelector && React.createElement(LanguageSelector, {
        options: supportedLanguages,
        onSubmit: onLanguageSelected
      })));
    }
  }]);

  return SiteFooter;
}(React.Component);

SiteFooter.propTypes = {
  intl: intlShape.isRequired,
  logo: PropTypes.string,
  onLanguageSelected: PropTypes.func,
  supportedLanguages: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }))
};
SiteFooter.defaultProps = {
  logo: undefined,
  onLanguageSelected: undefined,
  supportedLanguages: []
};
export default injectIntl(SiteFooter);
export { EVENT_NAMES };
//# sourceMappingURL=Footer.js.map