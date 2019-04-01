'use strict';var _createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var IndecisionApp=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:'render',value:function a(){return React.createElement('div',null,React.createElement(Header,{title:'Indecision',subTitle:'Make Up Your Mind With The Help of Randomness'}),React.createElement(Options,{optionList:['One Thing','Two Thing','Red Thing','Blue Thing']}),React.createElement(AddOption,null),React.createElement(Action,null))}}]),b}(React.Component),Header=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:'render',value:function a(){return React.createElement('div',null,React.createElement('h1',null,this.props.title),React.createElement('h4',null,this.props.subTitle))}}]),b}(React.Component),Options=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:'removeOptions',value:function a(){console.log('Clear Option List')}},{key:'render',value:function a(){return React.createElement('div',null,React.createElement('span',null,this.props.optionList&&0<this.props.optionList.length&&'Here Are Your'||'You Have No',' Options:'),React.createElement('ul',null,this.props.optionList.map(function(a){return React.createElement(Option,{key:a+Math.random(),option:a})})),React.createElement('br',null),React.createElement('button',{onClick:this.removeOptions},'Reset'))}}]),b}(React.Component),Option=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:'render',value:function a(){return React.createElement('li',null,this.props.option)}}]),b}(React.Component),AddOption=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:'addOption',value:function b(a){a.preventDefault()}},{key:'render',value:function a(){return React.createElement('form',{onSubmit:this.addOption},React.createElement('input',{type:'text',name:'option',placeholder:'I want to...'}),React.createElement('button',null,'Add Option'))}}]),b}(React.Component),Action=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:'render',value:function a(){return React.createElement('button',{onClick:this.doTheThing},'Make Up My Mind!')}}]),b}(React.Component);ReactDOM.render(React.createElement(IndecisionApp,null),document.getElementById('app'));
