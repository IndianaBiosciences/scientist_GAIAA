webpackHotUpdate("main",{

/***/ "./src/components/widgets/Selector.js":
/*!********************************************!*\
  !*** ./src/components/widgets/Selector.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Selector; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_IconArrowLeft__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/IconArrowLeft */ "./src/components/icons/IconArrowLeft.jsx");
/* harmony import */ var _icons_IconArrowRight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/IconArrowRight */ "./src/components/icons/IconArrowRight.jsx");
/* harmony import */ var _icons_IconCircleMinus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/IconCircleMinus */ "./src/components/icons/IconCircleMinus.jsx");
/* harmony import */ var _icons_IconCirclePlus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/IconCirclePlus */ "./src/components/icons/IconCirclePlus.jsx");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/Users/dhrobertson/projects/target_explorer/web/src/components/widgets/Selector.js";

/*
* Render a generic selector
* uses tailwindcss styling
* @author Dan Robertson <drobertson@indianabiosciences.org>
*/





let debug = false;
class Selector extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    this.setValue = index => {
      !debug || console.log("Selector.js setValue() {this.props}", this.props);
      !debug || console.log("Selector.js setValue() {index}", index);
      this.props.setFunction(this.props.values[index].value);
    };

    this.decIndex = () => {
      !debug || console.log("Selector.js decIndex() {this.props}", this.props);
      let index = this.getIndex();
      index = index - 1;

      if (index < 0) {
        if (this.props.cycle) {
          index = this.props.values.length - 1;
        } else {
          index = 0;
        }
      }

      this.setValue(index);
    };

    this.incIndex = () => {
      !debug || console.log("Selector.js incIndex() {this.props}", this.props);
      let index = this.getIndex();
      index = index + 1;

      if (index > this.props.values.length - 1) {
        if (this.props.cycle) {
          index = 0;
        } else {
          index = this.props.values.length - 1;
        }
      }

      this.setValue(index);
    };

    this.getIndex = () => {
      !debug || console.log("Selector.js getIndex() {this.props}", this.props);
      let values = this.props.values; // check to make sure there are some values

      if (values.length === 0) {
        return -1;
      } // check to make sure selected value is in list


      let index = values.map(e => e.value).indexOf(this.props.selected);

      if (index === -1) {
        index = 0;
      }

      return index;
    };

    this.showValue = index => {
      !debug || console.log("Selector.js showValue() {props}", this.props);
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "bg-transparent w-32 text-center px-4",
        children: this.props.values[index].name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 7
      }, this);
    };

    this.showSelector = () => {
      !debug || console.log("Selector.js showSelector() {props}", this.props);
      let index = this.getIndex(); // check to make sure there are some values

      if (index === -1 || this.props.values.length === 0) {
        return null;
      }

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-row items-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "py-2 px-1 focus:outline-none hover:opacity-50",
          onClick: () => this.decIndex(),
          children: this.props.markerStyle === "plus-minus" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_IconCircleMinus__WEBPACK_IMPORTED_MODULE_4__["default"], {
            width: "20"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 55
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_IconArrowLeft__WEBPACK_IMPORTED_MODULE_2__["default"], {
            width: "20"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 88
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 9
        }, this), this.props.hideValue ? null : this.showValue(index), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "py-2 px-1 focus:outline-none hover:opacity-50",
          onClick: () => this.incIndex(),
          children: this.props.markerStyle === "plus-minus" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_IconCirclePlus__WEBPACK_IMPORTED_MODULE_5__["default"], {
            width: "20"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 57
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_IconArrowRight__WEBPACK_IMPORTED_MODULE_3__["default"], {
            width: "20"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 89
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 7
      }, this);
    };

    this.render = () => {
      !debug || console.log("Selector.js render() {this.state}", this.state);
      !debug || console.log("Selector.js render() {this.props}", this.props);
      let index = this.getIndex();
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: this.showSelector(index)
      }, void 0, false);
    };

    this.state = {
      showSettings: false
    };
  }

}
Selector.defaultProps = {
  values: [],
  selected: null,
  hideValue: false,
  markerStyle: "arrows",
  cycle: true
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.31bb2c59f6fc18b601e4.hot-update.js.map