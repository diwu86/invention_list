/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_InventionBox__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_InventionList__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_InventionDetail__ = __webpack_require__(4);




class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inventionList: [] };
  }
  formattedInventions(inventionList) {
    let formattedList = inventionList.map(invention => {
      invention.formattedBits = invention.bits.map(bit => {
        return bit.name;
      });
      return invention;
    });
    return {
      inventionList: formattedList
    };
  }
  addInvention(invention) {
    $.post("/inventions", invention).success(savedInvention => {
      let newInventionList = this.state.inventionList;
      newInventionList.unshift(savedInvention);
      this.setState({ inventionList: newInventionList });
    });
  }
  componentDidMount() {
    $.ajax("/inventions").success(data => this.setState({ inventionList: data })).error(error => console.log(error));
  }
  render() {
    return React.createElement(
      'div',
      { className: 'container' },
      React.createElement(__WEBPACK_IMPORTED_MODULE_0__components_InventionBox__["a" /* default */], { postInvention: this.addInvention.bind(this) }),
      React.createElement(__WEBPACK_IMPORTED_MODULE_1__components_InventionList__["a" /* default */], { inventions: this.state.inventionList })
    );
  }
}

let documentReady = () => {
  let reactNode = document.getElementById('react');
  if (reactNode) {
    ReactDOM.render(React.createElement(Main, null), reactNode);
  }
  $('.collapsible').collapsible();
  let reactInventionDetail = document.getElementById('InventionDetail');
  if (reactInventionDetail) {
    ReactDOM.render(React.createElement(__WEBPACK_IMPORTED_MODULE_2__components_InventionDetail__["a" /* default */], null), reactInventionDetail);
  }
};

$(documentReady);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class InventionBox extends React.Component {

  postInvention(event) {
    event.preventDefault();
    let invention = { title: this.refs.inventionTitle.value,
      description: this.refs.inventionDescription.value,
      user_name: this.refs.inventionUserName.value,
      email: this.refs.inventionEmail.value
    };
    this.props.postInvention(invention);
    this.refs.inventionTitle.value = '';
    this.refs.inventionDescription.value = '';
    this.refs.inventionUserName.value = '';
    this.refs.inventionEmail.value = '';
    this.refs.inventionBits.value = '';
    this.refs.inventionOtherMaterials.value = '';
  }

  render() {
    return React.createElement(
      'div',
      { className: 'row' },
      React.createElement(
        'form',
        { onSubmit: this.postInvention.bind(this) },
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'input-field col s12' },
            React.createElement('input', { ref: 'inventionTitle', name: 'title', type: 'text' }),
            React.createElement(
              'label',
              { 'for': 'title' },
              'Title'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'input-field col s12' },
            React.createElement('input', { ref: 'inventionDescription', name: 'description', type: 'text', className: 'validate' }),
            React.createElement(
              'label',
              { 'for': 'description' },
              'Description'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'input-field col s6' },
            React.createElement('input', { ref: 'inventionUserName', name: 'user_name', type: 'text', className: 'validate' }),
            React.createElement(
              'label',
              { 'for': 'user_name' },
              'User Name'
            )
          ),
          React.createElement(
            'div',
            { className: 'input-field col s6' },
            React.createElement('input', { ref: 'inventionEmail', name: 'email', type: 'email', className: 'validate' }),
            React.createElement(
              'label',
              { 'for': 'email' },
              'Email'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'input-field col s12' },
            React.createElement('input', { ref: 'inventionBits', name: 'bits', type: 'text', className: 'validate' }),
            React.createElement(
              'label',
              { 'for': 'bits' },
              'Bits used'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'input-field col s12' },
            React.createElement('input', { ref: 'inventionOtherMaterials', name: 'other_material', type: 'text', className: 'validate' }),
            React.createElement(
              'label',
              { 'for': 'other_material' },
              'Other Material'
            )
          )
        ),
        React.createElement(
          'button',
          { type: 'submit', className: 'btn right' },
          'Submit'
        )
      )
    );
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = InventionBox;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Invention__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



class InventionList extends React.Component {
  render() {
    let inventions = this.props.inventions.map(invention => React.createElement(__WEBPACK_IMPORTED_MODULE_0__Invention__["a" /* default */], _extends({ key: invention.id }, invention)));
    return (
      // <ul className="collapsible" data-collapsible="accordion">
      //   {inventions}
      // </ul>
      React.createElement(
        "div",
        { className: "collection" },
        inventions
      )
    );
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = InventionList;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Invention extends React.Component {
  render() {
    return React.createElement(
      "a",
      { href: "/inventions/" + this.props.id, className: "collection-item" },
      this.props.title
    )
    // <li>
    //   <div className="collapsible-header">{this.props.title}</div>
    //   <div className="collapsible-body">
    //   <ul class="collection">
    //     <li class="collection-item">Descritpion: {this.props.description}</li>
    //     <li class="collection-item">Submitted by: {this.props.user_name}</li>
    //     <li class="collection-item">Bits used: {this.props.formattedBits}</li>
    //     </ul>
    //   </div>
    // </li>
    ;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Invention;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class InventionDetail extends React.Component {
  render() {
    let _invention;
    $.ajax("/inventions/3").success(data => _invention = data).error(error => console.log(error));
    return (
      // <a href={"/inventions/" +this.props.id} className="collection-item">{this.props.title}</a>
      React.createElement(
        "p",
        null,
        "detail"
      )
      // <li>
      //   <div className="collapsible-header">{_invention.title}</div>
      //   <div className="collapsible-body">
      //   <ul className="collection">
      //     <li className="collection-item">Descritpion: {_invention.description}</li>
      //     <li className="collection-item">Submitted by: {_invention.user_name}</li>
      //     <li className="collection-item">Bits used: {_invention.description}</li>
      //     </ul>
      //   </div>
      // </li>

    );
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = InventionDetail;


/***/ })
/******/ ]);