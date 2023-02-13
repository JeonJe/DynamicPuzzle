"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/play",{

/***/ "./components/itemBar/DockCard/index.tsx":
/*!***********************************************!*\
  !*** ./components/itemBar/DockCard/index.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DockCard\": function() { return /* binding */ DockCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-spring/web */ \"./node_modules/@react-spring/web/dist/react-spring-web.esm.js\");\n/* harmony import */ var _hooks_useMousePosition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useMousePosition */ \"./components/itemBar/hooks/useMousePosition.ts\");\n/* harmony import */ var _hooks_useWindowResize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useWindowResize */ \"./components/itemBar/hooks/useWindowResize.ts\");\n/* harmony import */ var _Dock_DockContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Dock/DockContext */ \"./components/itemBar/Dock/DockContext.ts\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ \"./components/itemBar/DockCard/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst INITIAL_WIDTH = 48;\nconst DockCard = (param)=>{\n    let { children  } = param;\n    _s();\n    const cardRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);\n    /**\n   * This doesn't need to be real time, think of it as a static\n   * value of where the card should go to at the end.\n   */ const [elCenterX, setElCenterX] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);\n    const size = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useSpringValue)(INITIAL_WIDTH, {\n        config: {\n            mass: 0.1,\n            tension: 320\n        }\n    });\n    const opacity = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useSpringValue)(0);\n    const y = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useSpringValue)(0, {\n        config: {\n            friction: 29,\n            tension: 238\n        }\n    });\n    const dock = (0,_Dock_DockContext__WEBPACK_IMPORTED_MODULE_5__.useDock)();\n    /**\n   * This is just an abstraction around a `useSpring` hook, if you wanted you could do this\n   * in the hook above, but these abstractions are useful to demonstrate!\n   */ (0,_hooks_useMousePosition__WEBPACK_IMPORTED_MODULE_3__.useMousePosition)({\n        onChange: (param)=>{\n            let { value  } = param;\n            const mouseX = value.x;\n            if (dock.width > 0) {\n                const transformedValue = INITIAL_WIDTH + 36 * Math.cos((mouseX - elCenterX) / dock.width * Math.PI / 2) ** 12;\n                if (dock.hovered) {\n                    size.start(transformedValue);\n                }\n            }\n        }\n    }, [\n        elCenterX,\n        dock\n    ]);\n    (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(()=>{\n        if (!dock.hovered) {\n            size.start(INITIAL_WIDTH);\n        }\n    }, [\n        dock.hovered\n    ]);\n    (0,_hooks_useWindowResize__WEBPACK_IMPORTED_MODULE_4__.useWindowResize)(()=>{\n        const { x  } = cardRef.current.getBoundingClientRect();\n        setElCenterX(x + INITIAL_WIDTH / 2);\n    });\n    const timesLooped = react__WEBPACK_IMPORTED_MODULE_1__.useRef(0);\n    const timeoutRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();\n    const isAnimating = react__WEBPACK_IMPORTED_MODULE_1__.useRef(false);\n    const handleClick = ()=>{\n        if (!isAnimating.current) {\n            isAnimating.current = true;\n            opacity.start(0.5);\n            timesLooped.current = 0;\n            y.start(-INITIAL_WIDTH / 2, {\n                loop: ()=>{\n                    if (2 === timesLooped.current++) {\n                        timeoutRef.current = setTimeout(()=>{\n                            opacity.start(0);\n                            y.set(0);\n                            isAnimating.current = false;\n                            timeoutRef.current = undefined;\n                        }, 480);\n                        y.stop();\n                    }\n                    return {\n                        reverse: true\n                    };\n                }\n            });\n        } else {\n            /**\n       * Allow premature exit of animation\n       * on a second click if we're currently animating\n       */ clearTimeout(timeoutRef.current);\n            opacity.start(0);\n            y.start(0);\n            isAnimating.current = false;\n        }\n    };\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>()=>clearTimeout(timeoutRef.current), []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default()[\"dock-card-container\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.button, {\n                ref: cardRef,\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default()[\"dock-card\"]),\n                onClick: handleClick,\n                style: {\n                    width: size,\n                    height: size,\n                    y\n                },\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/hoyeon/DP_IceBreaking/components/itemBar/DockCard/index.tsx\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default()[\"dock-dot\"]),\n                style: {\n                    opacity\n                }\n            }, void 0, false, {\n                fileName: \"/Users/hoyeon/DP_IceBreaking/components/itemBar/DockCard/index.tsx\",\n                lineNumber: 128,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hoyeon/DP_IceBreaking/components/itemBar/DockCard/index.tsx\",\n        lineNumber: 116,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DockCard, \"1DnZgOGO0pmel0llj2AC/MG1ORg=\", false, function() {\n    return [\n        _react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useSpringValue,\n        _react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useSpringValue,\n        _react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useSpringValue,\n        _Dock_DockContext__WEBPACK_IMPORTED_MODULE_5__.useDock,\n        _hooks_useMousePosition__WEBPACK_IMPORTED_MODULE_3__.useMousePosition,\n        _react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect,\n        _hooks_useWindowResize__WEBPACK_IMPORTED_MODULE_4__.useWindowResize\n    ];\n});\n_c = DockCard;\nvar _c;\n$RefreshReg$(_c, \"DockCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2l0ZW1CYXIvRG9ja0NhcmQvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDeUQ7QUFFM0I7QUFDRjtBQUViO0FBRUo7QUFNekMsTUFBTVEsZ0JBQWdCO0FBRWYsTUFBTUMsV0FBVyxTQUFpQztRQUFoQyxFQUFFQyxTQUFRLEVBQWlCOztJQUNsRCxNQUFNQyxVQUFVWCx5Q0FBWSxDQUFvQixJQUFJO0lBQ3BEOzs7R0FHQyxHQUNELE1BQU0sQ0FBQ2EsV0FBV0MsYUFBYSxHQUFHZCwyQ0FBYyxDQUFTO0lBRXpELE1BQU1nQixPQUFPYixpRUFBY0EsQ0FBQ0ssZUFBZTtRQUN6Q1MsUUFBUTtZQUNOQyxNQUFNO1lBQ05DLFNBQVM7UUFDWDtJQUNGO0lBRUEsTUFBTUMsVUFBVWpCLGlFQUFjQSxDQUFDO0lBQy9CLE1BQU1rQixJQUFJbEIsaUVBQWNBLENBQUMsR0FBRztRQUMxQmMsUUFBUTtZQUNOSyxVQUFVO1lBQ1ZILFNBQVM7UUFDWDtJQUNGO0lBRUEsTUFBTUksT0FBT2pCLDBEQUFPQTtJQUVwQjs7O0dBR0MsR0FDREYseUVBQWdCQSxDQUNkO1FBQ0VvQixVQUFVLFNBQWU7Z0JBQWQsRUFBRUMsTUFBSyxFQUFFO1lBQ2xCLE1BQU1DLFNBQVNELE1BQU1FLENBQUM7WUFFdEIsSUFBSUosS0FBS0ssS0FBSyxHQUFHLEdBQUc7Z0JBQ2xCLE1BQU1DLG1CQUNKckIsZ0JBQWdCLEtBQUtzQixLQUFLQyxHQUFHLENBQUMsQ0FBR0wsU0FBU2IsU0FBUSxJQUFLVSxLQUFLSyxLQUFLLEdBQUlFLEtBQUtFLEVBQUUsR0FBSSxNQUFNO2dCQUV4RixJQUFJVCxLQUFLVSxPQUFPLEVBQUU7b0JBQ2hCakIsS0FBS2tCLEtBQUssQ0FBQ0w7Z0JBQ2IsQ0FBQztZQUNILENBQUM7UUFDSDtJQUNGLEdBQ0E7UUFBQ2hCO1FBQVdVO0tBQUs7SUFHbkJyQiw0RUFBeUJBLENBQUMsSUFBTTtRQUM5QixJQUFJLENBQUNxQixLQUFLVSxPQUFPLEVBQUU7WUFDakJqQixLQUFLa0IsS0FBSyxDQUFDMUI7UUFDYixDQUFDO0lBQ0gsR0FBRztRQUFDZSxLQUFLVSxPQUFPO0tBQUM7SUFFakI1Qix1RUFBZUEsQ0FBQyxJQUFNO1FBQ3BCLE1BQU0sRUFBRXNCLEVBQUMsRUFBRSxHQUFHaEIsUUFBUXdCLE9BQU8sQ0FBQ0MscUJBQXFCO1FBRW5EdEIsYUFBYWEsSUFBSW5CLGdCQUFnQjtJQUNuQztJQUVBLE1BQU02QixjQUFjckMseUNBQVksQ0FBQztJQUNqQyxNQUFNc0MsYUFBYXRDLHlDQUFZO0lBQy9CLE1BQU11QyxjQUFjdkMseUNBQVksQ0FBQyxLQUFLO0lBRXRDLE1BQU13QyxjQUFjLElBQU07UUFDeEIsSUFBSSxDQUFDRCxZQUFZSixPQUFPLEVBQUU7WUFDeEJJLFlBQVlKLE9BQU8sR0FBRyxJQUFJO1lBQzFCZixRQUFRYyxLQUFLLENBQUM7WUFFZEcsWUFBWUYsT0FBTyxHQUFHO1lBRXRCZCxFQUFFYSxLQUFLLENBQUMsQ0FBQzFCLGdCQUFnQixHQUFHO2dCQUMxQmlDLE1BQU0sSUFBTTtvQkFDVixJQUFJLE1BQU1KLFlBQVlGLE9BQU8sSUFBSTt3QkFDL0JHLFdBQVdILE9BQU8sR0FBR08sV0FBVyxJQUFNOzRCQUNwQ3RCLFFBQVFjLEtBQUssQ0FBQzs0QkFDZGIsRUFBRXNCLEdBQUcsQ0FBQzs0QkFDTkosWUFBWUosT0FBTyxHQUFHLEtBQUs7NEJBQzNCRyxXQUFXSCxPQUFPLEdBQUdTO3dCQUN2QixHQUFHO3dCQUNIdkIsRUFBRXdCLElBQUk7b0JBQ1IsQ0FBQztvQkFDRCxPQUFPO3dCQUFFQyxTQUFTLElBQUk7b0JBQUM7Z0JBQ3pCO1lBQ0Y7UUFDRixPQUFPO1lBQ0w7OztPQUdDLEdBQ0RDLGFBQWFULFdBQVdILE9BQU87WUFDL0JmLFFBQVFjLEtBQUssQ0FBQztZQUNkYixFQUFFYSxLQUFLLENBQUM7WUFDUkssWUFBWUosT0FBTyxHQUFHLEtBQUs7UUFDN0IsQ0FBQztJQUNIO0lBRUFuQyw0Q0FBZSxDQUFDLElBQU0sSUFBTStDLGFBQWFULFdBQVdILE9BQU8sR0FBRyxFQUFFO0lBRWhFLHFCQUNFLDhEQUFDYztRQUFJQyxXQUFXM0MsbUZBQTZCOzswQkFDM0MsOERBQUNOLDhEQUFlO2dCQUNkbUQsS0FBS3pDO2dCQUNMdUMsV0FBVzNDLHlFQUFtQjtnQkFDOUI4QyxTQUFTYjtnQkFDVGMsT0FBTztvQkFDTDFCLE9BQU9aO29CQUNQdUMsUUFBUXZDO29CQUNSSztnQkFDRjswQkFDQ1g7Ozs7OzswQkFFSCw4REFBQ1QsMkRBQVk7Z0JBQUNpRCxXQUFXM0Msd0VBQWtCO2dCQUFFK0MsT0FBTztvQkFBRWxDO2dCQUFROzs7Ozs7Ozs7Ozs7QUFHcEUsRUFBQztHQWxIWVg7O1FBUUVOLDZEQUFjQTtRQU9YQSw2REFBY0E7UUFDcEJBLDZEQUFjQTtRQU9YRyxzREFBT0E7UUFNcEJGLHFFQUFnQkE7UUFrQmhCRix3RUFBeUJBO1FBTXpCRyxtRUFBZUE7OztLQXJESkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pdGVtQmFyL0RvY2tDYXJkL2luZGV4LnRzeD85MjhhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgYW5pbWF0ZWQsIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QsIHVzZVNwcmluZ1ZhbHVlIH0gZnJvbSAnQHJlYWN0LXNwcmluZy93ZWInXG5cbmltcG9ydCB7IHVzZU1vdXNlUG9zaXRpb24gfSBmcm9tICcuLi9ob29rcy91c2VNb3VzZVBvc2l0aW9uJ1xuaW1wb3J0IHsgdXNlV2luZG93UmVzaXplIH0gZnJvbSAnLi4vaG9va3MvdXNlV2luZG93UmVzaXplJ1xuXG5pbXBvcnQgeyB1c2VEb2NrIH0gZnJvbSAnLi4vRG9jay9Eb2NrQ29udGV4dCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2NzcydcblxuaW50ZXJmYWNlIERvY2tDYXJkUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG59XG5cbmNvbnN0IElOSVRJQUxfV0lEVEggPSA0OFxuXG5leHBvcnQgY29uc3QgRG9ja0NhcmQgPSAoeyBjaGlsZHJlbiB9OiBEb2NrQ2FyZFByb3BzKSA9PiB7XG4gIGNvbnN0IGNhcmRSZWYgPSBSZWFjdC51c2VSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+KG51bGwhKVxuICAvKipcbiAgICogVGhpcyBkb2Vzbid0IG5lZWQgdG8gYmUgcmVhbCB0aW1lLCB0aGluayBvZiBpdCBhcyBhIHN0YXRpY1xuICAgKiB2YWx1ZSBvZiB3aGVyZSB0aGUgY2FyZCBzaG91bGQgZ28gdG8gYXQgdGhlIGVuZC5cbiAgICovXG4gIGNvbnN0IFtlbENlbnRlclgsIHNldEVsQ2VudGVyWF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDApXG5cbiAgY29uc3Qgc2l6ZSA9IHVzZVNwcmluZ1ZhbHVlKElOSVRJQUxfV0lEVEgsIHtcbiAgICBjb25maWc6IHtcbiAgICAgIG1hc3M6IDAuMSxcbiAgICAgIHRlbnNpb246IDMyMCxcbiAgICB9LFxuICB9KVxuXG4gIGNvbnN0IG9wYWNpdHkgPSB1c2VTcHJpbmdWYWx1ZSgwKVxuICBjb25zdCB5ID0gdXNlU3ByaW5nVmFsdWUoMCwge1xuICAgIGNvbmZpZzoge1xuICAgICAgZnJpY3Rpb246IDI5LFxuICAgICAgdGVuc2lvbjogMjM4LFxuICAgIH0sXG4gIH0pXG5cbiAgY29uc3QgZG9jayA9IHVzZURvY2soKVxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIGp1c3QgYW4gYWJzdHJhY3Rpb24gYXJvdW5kIGEgYHVzZVNwcmluZ2AgaG9vaywgaWYgeW91IHdhbnRlZCB5b3UgY291bGQgZG8gdGhpc1xuICAgKiBpbiB0aGUgaG9vayBhYm92ZSwgYnV0IHRoZXNlIGFic3RyYWN0aW9ucyBhcmUgdXNlZnVsIHRvIGRlbW9uc3RyYXRlIVxuICAgKi9cbiAgdXNlTW91c2VQb3NpdGlvbihcbiAgICB7XG4gICAgICBvbkNoYW5nZTogKHsgdmFsdWUgfSkgPT4ge1xuICAgICAgICBjb25zdCBtb3VzZVggPSB2YWx1ZS54XG5cbiAgICAgICAgaWYgKGRvY2sud2lkdGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgdHJhbnNmb3JtZWRWYWx1ZSA9XG4gICAgICAgICAgICBJTklUSUFMX1dJRFRIICsgMzYgKiBNYXRoLmNvcygoKChtb3VzZVggLSBlbENlbnRlclgpIC8gZG9jay53aWR0aCkgKiBNYXRoLlBJKSAvIDIpICoqIDEyXG5cbiAgICAgICAgICBpZiAoZG9jay5ob3ZlcmVkKSB7XG4gICAgICAgICAgICBzaXplLnN0YXJ0KHRyYW5zZm9ybWVkVmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gICAgW2VsQ2VudGVyWCwgZG9ja11cbiAgKVxuXG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZG9jay5ob3ZlcmVkKSB7XG4gICAgICBzaXplLnN0YXJ0KElOSVRJQUxfV0lEVEgpXG4gICAgfVxuICB9LCBbZG9jay5ob3ZlcmVkXSlcblxuICB1c2VXaW5kb3dSZXNpemUoKCkgPT4ge1xuICAgIGNvbnN0IHsgeCB9ID0gY2FyZFJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICBzZXRFbENlbnRlclgoeCArIElOSVRJQUxfV0lEVEggLyAyKVxuICB9KVxuXG4gIGNvbnN0IHRpbWVzTG9vcGVkID0gUmVhY3QudXNlUmVmKDApXG4gIGNvbnN0IHRpbWVvdXRSZWYgPSBSZWFjdC51c2VSZWY8bnVtYmVyPigpXG4gIGNvbnN0IGlzQW5pbWF0aW5nID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIGlmICghaXNBbmltYXRpbmcuY3VycmVudCkge1xuICAgICAgaXNBbmltYXRpbmcuY3VycmVudCA9IHRydWVcbiAgICAgIG9wYWNpdHkuc3RhcnQoMC41KVxuXG4gICAgICB0aW1lc0xvb3BlZC5jdXJyZW50ID0gMFxuXG4gICAgICB5LnN0YXJ0KC1JTklUSUFMX1dJRFRIIC8gMiwge1xuICAgICAgICBsb29wOiAoKSA9PiB7XG4gICAgICAgICAgaWYgKDIgPT09IHRpbWVzTG9vcGVkLmN1cnJlbnQrKykge1xuICAgICAgICAgICAgdGltZW91dFJlZi5jdXJyZW50ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIG9wYWNpdHkuc3RhcnQoMClcbiAgICAgICAgICAgICAgeS5zZXQoMClcbiAgICAgICAgICAgICAgaXNBbmltYXRpbmcuY3VycmVudCA9IGZhbHNlXG4gICAgICAgICAgICAgIHRpbWVvdXRSZWYuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgICAgICAgfSwgNDgwKVxuICAgICAgICAgICAgeS5zdG9wKClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHsgcmV2ZXJzZTogdHJ1ZSB9XG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAvKipcbiAgICAgICAqIEFsbG93IHByZW1hdHVyZSBleGl0IG9mIGFuaW1hdGlvblxuICAgICAgICogb24gYSBzZWNvbmQgY2xpY2sgaWYgd2UncmUgY3VycmVudGx5IGFuaW1hdGluZ1xuICAgICAgICovXG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dFJlZi5jdXJyZW50KVxuICAgICAgb3BhY2l0eS5zdGFydCgwKVxuICAgICAgeS5zdGFydCgwKVxuICAgICAgaXNBbmltYXRpbmcuY3VycmVudCA9IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+ICgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0UmVmLmN1cnJlbnQpLCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2RvY2stY2FyZC1jb250YWluZXInXX0+XG4gICAgICA8YW5pbWF0ZWQuYnV0dG9uXG4gICAgICAgIHJlZj17Y2FyZFJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbJ2RvY2stY2FyZCddfVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogc2l6ZSxcbiAgICAgICAgICBoZWlnaHQ6IHNpemUsXG4gICAgICAgICAgeSxcbiAgICAgICAgfX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvYW5pbWF0ZWQuYnV0dG9uPlxuICAgICAgPGFuaW1hdGVkLmRpdiBjbGFzc05hbWU9e3N0eWxlc1snZG9jay1kb3QnXX0gc3R5bGU9e3sgb3BhY2l0eSB9fSAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJhbmltYXRlZCIsInVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QiLCJ1c2VTcHJpbmdWYWx1ZSIsInVzZU1vdXNlUG9zaXRpb24iLCJ1c2VXaW5kb3dSZXNpemUiLCJ1c2VEb2NrIiwic3R5bGVzIiwiSU5JVElBTF9XSURUSCIsIkRvY2tDYXJkIiwiY2hpbGRyZW4iLCJjYXJkUmVmIiwidXNlUmVmIiwiZWxDZW50ZXJYIiwic2V0RWxDZW50ZXJYIiwidXNlU3RhdGUiLCJzaXplIiwiY29uZmlnIiwibWFzcyIsInRlbnNpb24iLCJvcGFjaXR5IiwieSIsImZyaWN0aW9uIiwiZG9jayIsIm9uQ2hhbmdlIiwidmFsdWUiLCJtb3VzZVgiLCJ4Iiwid2lkdGgiLCJ0cmFuc2Zvcm1lZFZhbHVlIiwiTWF0aCIsImNvcyIsIlBJIiwiaG92ZXJlZCIsInN0YXJ0IiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRpbWVzTG9vcGVkIiwidGltZW91dFJlZiIsImlzQW5pbWF0aW5nIiwiaGFuZGxlQ2xpY2siLCJsb29wIiwic2V0VGltZW91dCIsInNldCIsInVuZGVmaW5lZCIsInN0b3AiLCJyZXZlcnNlIiwiY2xlYXJUaW1lb3V0IiwidXNlRWZmZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwicmVmIiwib25DbGljayIsInN0eWxlIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/itemBar/DockCard/index.tsx\n"));

/***/ })

});