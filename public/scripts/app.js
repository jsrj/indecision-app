'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(p) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, p));

    _this.state = {
      title: 'Indecision',
      subTitle: 'Make Up Your Mind With The Help of Randomness',
      optionList: ['One Thing', 'Two Thing', 'Red Thing', 'Blue Thing']
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: this.state.title, subTitle: this.state.subTitle }),
        React.createElement(Options, { optionList: this.state.optionList }),
        React.createElement(AddOption, null)
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          this.props.title
        ),
        React.createElement(
          'h4',
          null,
          this.props.subTitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Options = function (_React$Component3) {
  _inherits(Options, _React$Component3);

  function Options(p) {
    _classCallCheck(this, Options);

    var _this3 = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, p));

    _this3.removeOptions = _this3.removeOptions.bind(_this3);
    return _this3;
  }

  _createClass(Options, [{
    key: 'removeOptions',
    value: function removeOptions() {
      console.log(this.state.optionList);
      this.setState(function () {
        return {
          optionList: []
        };
      });
      console.log(this.state.optionList);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'span',
          null,
          this.props.optionList && this.props.optionList.length > 0 && 'Here Are Your' || 'You Have No',
          ' Options:'
        ),
        React.createElement(
          'ul',
          null,
          this.props.optionList.map(function (option) {
            return React.createElement(Option, { key: option + Math.random(), option: option });
          })
        ),
        React.createElement('br', null),
        React.createElement(
          'button',
          { onClick: this.removeOptions },
          'Reset'
        )
      );
    }
  }]);

  return Options;
}(React.Component);

var Option = function (_React$Component4) {
  _inherits(Option, _React$Component4);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'li',
        null,
        this.props.option
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOption = function (_React$Component5) {
  _inherits(AddOption, _React$Component5);

  function AddOption() {
    _classCallCheck(this, AddOption);

    return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
  }

  _createClass(AddOption, [{
    key: 'addOption',
    value: function addOption(event) {
      event.preventDefault();

      var option = event.target.elements.option.value.trim();
      if (option) {

        console.log('"' + option + '"');
      }
      event.target.elements.option.value = '';
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { onSubmit: this.addOption },
        React.createElement('input', { type: 'text', name: 'option', placeholder: 'I want to...' }),
        React.createElement(Action, null)
      );
    }
  }]);

  return AddOption;
}(React.Component);

var Action = function (_React$Component6) {
  _inherits(Action, _React$Component6);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'button',
        { onClick: this.doTheThing },
        'Make Up My Mind!'
      );
    }
  }]);

  return Action;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
