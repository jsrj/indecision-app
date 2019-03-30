'use strict';

console.log('App.js Loaded!');
var ROOT = document.getElementById('app');

var app = {
  title: 'Indecision',
  subTitle: 'A Subtitle',
  options: []
};

var getValue = function getValue(value) {
  return value && value;
};

var optionsExist = false;

var addOption = function addOption(event) {
  event.preventDefault();

  var option = event.target.elements.option.value;
  if (option) {
    var keyId = Math.random().toString().replace(RegExp('^[0-9].'), '');
    app.options.push(React.createElement(
      'li',
      { id: keyId, key: keyId },
      option
    ));
    optionsExist = true;
    event.target.elements.option.value = '';
  }
  refresh();
};

var clearOptions = function clearOptions() {
  event.preventDefault();
  app.options = [];
  optionsExist = false;
  refresh();
};

var makeDecision = function makeDecision() {
  event.preventDefault();
  if (app.options.length > 0 && optionsExist) {
    var chosenOption = Math.floor(Math.random() * app.options.length);
    app.options = [app.options[chosenOption]];
  } else {
    optionsExist = false;
  }
  refresh();
};

var refresh = function refresh() {

  var baseTemplate = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      getValue(app.title)
    ),
    React.createElement(
      'h3',
      null,
      getValue(app.subTitle)
    ),
    app.options && app.options.length > 0 && React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'You Have ',
        app.options.length,
        ' Options:'
      ),
      React.createElement(
        'ul',
        null,
        app.options
      )
    ) || React.createElement(
      'p',
      null,
      'There Are No Options'
    ),
    React.createElement(
      'form',
      { onSubmit: addOption },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add'
      ),
      '\xA0',
      React.createElement(
        'button',
        { onClick: clearOptions },
        'Reset'
      ),
      '\xA0',
      optionsExist && app.options.length > 1 && React.createElement(
        'button',
        { disabled: !optionsExist, onClick: makeDecision },
        'Choose One!'
      )
    )
  );
  ReactDOM.render(baseTemplate, ROOT);
};

refresh();
