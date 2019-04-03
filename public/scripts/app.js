'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisibilityToggle = function (_React$Component) {
  _inherits(VisibilityToggle, _React$Component);

  function VisibilityToggle(p) {
    _classCallCheck(this, VisibilityToggle);

    var _this = _possibleConstructorReturn(this, (VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).call(this, p));

    _this.state = {
      showDetails: false
    };

    _this.toggleVisibility = _this.toggleVisibility.bind(_this);
    return _this;
  }

  _createClass(VisibilityToggle, [{
    key: 'toggleVisibility',
    value: function toggleVisibility() {
      this.setState(function (prev) {
        return {
          showDetails: !prev.showDetails
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Visibility Toggle Challenge'
        ),
        React.createElement(
          'button',
          { onClick: this.toggleVisibility },
          !this.state.showDetails && 'Show' || 'Hide',
          ' Details'
        ),
        React.createElement('br', null),
        this.state.showDetails && React.createElement(Details, null)
      );
    }
  }]);

  return VisibilityToggle;
}(React.Component);

var Details = function (_React$Component2) {
  _inherits(Details, _React$Component2);

  function Details() {
    _classCallCheck(this, Details);

    return _possibleConstructorReturn(this, (Details.__proto__ || Object.getPrototypeOf(Details)).apply(this, arguments));
  }

  _createClass(Details, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          null,
          'YEET!!!'
        )
      );
    }
  }]);

  return Details;
}(React.Component);

var ROOT = document.getElementById('app');
ReactDOM.render(React.createElement(VisibilityToggle, null), ROOT);
