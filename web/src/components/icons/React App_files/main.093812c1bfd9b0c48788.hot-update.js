webpackHotUpdate("main",{

/***/ "./src/components/viewers/ViewNetworks.jsx":
/*!*************************************************!*\
  !*** ./src/components/viewers/ViewNetworks.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ViewNetworks; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _widgets_Selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widgets/Selector */ "./src/components/widgets/Selector.js");
/* harmony import */ var _objects_Networks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../objects/Networks */ "./src/components/objects/Networks.js");
/* harmony import */ var _widgets_NetworkGraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widgets/NetworkGraph */ "./src/components/widgets/NetworkGraph.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/dhrobertson/projects/target_explorer/web/src/components/viewers/ViewNetworks.jsx";

/*
 * Render a selected list (Rx, Dx, ...)
 * Enable adding, clearing, and deleting items from the list based on parent component functions
 * Parent component holds the list state and functions acting on the list
 * @author Lena Ara <lenaa@radcube.com>
 * @author Dan Robertson <drobertson@indianabiosciences.org>
 */




let debug = true;
class ViewNetworks extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    this._setSelectedEdge = value => {
      !debug || console.log('Test.js setSelectedEdge() {value}:', value);
      this.setState({
        network_edge: value
      });
    };

    this._setSelectedNode = value => {
      !debug || console.log('Test.js setSelectedNode() {value}:', value);
      this.setState({
        network_node: value
      });
    };

    this._setSelectedNetwork = value => {
      !debug || console.log("ListNetworks.js setSelectedNetwork() {value}", value);
      this.setState({
        selected_network: value
      });
    };

    this.showSelector = () => {
      !debug || console.log("ListNetworks.js showSelector() {}");
      let allNetworks = this.state.networks.getAll();
      !debug || console.log("ListNetworks.js showSelector() {allNetworks}", allNetworks);
      let values = [];

      for (let i = 0; i < allNetworks.length; i++) {
        let value = allNetworks[i];
        let name = this.state.networks.getName(value);
        values.push({
          value: value,
          name: name
        });
      }

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_widgets_Selector__WEBPACK_IMPORTED_MODULE_2__["default"], {
        values: values,
        selected: this.state.selected_network,
        setFunction: this._setSelectedNetwork,
        hideValue: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 7
      }, this);
    };

    let networks = new _objects_Networks__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.state = {
      networks: networks,
      totalNetworks: networks.getAll().length,
      selected_network: 'test-tim',
      selected_node: null,
      selected_edge: null
    };
  } // function for network set value function


  render() {
    !debug || console.log('ViewNetworkss.js render() {this.state}:', this.state);
    !debug || console.log('ViewNetworks.js render() {this.props}:', this.props);
    let networkName = this.state.networks.getName(this.state.selected_network);
    let jsonData = this.state.networks.getData(this.state.selected_network);
    let jsonStyle = this.state.networks.getStyle(this.state.selected_network);
    !debug || console.log('ViewNetworks.js render() {network, name, data, style}:', this.state.selected_network, networkName, jsonData, jsonStyle);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-col ml-5 mr-5",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-row w-full justify-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex w-80 self-center text-ibri text-lg font-bold pr-2",
          children: ["Network: ", networkName]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex self-center align-center font-bold pr-4",
          children: this.showSelector()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex self-center align-middle font-md",
          children: ["(", this.state.totalNetworks, " available)"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-row w-full",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex w-auto h-auto border-2 border-ibri-navy m-2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-grow border m-2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 4
    }, this);
  }

}

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
//# sourceMappingURL=main.093812c1bfd9b0c48788.hot-update.js.map