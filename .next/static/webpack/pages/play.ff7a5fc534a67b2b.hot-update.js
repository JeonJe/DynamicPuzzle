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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DockCard\": function() { return /* binding */ DockCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-spring/web */ \"./node_modules/@react-spring/web/dist/react-spring-web.esm.js\");\n/* harmony import */ var _hooks_useMousePosition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useMousePosition */ \"./components/itemBar/hooks/useMousePosition.ts\");\n/* harmony import */ var _hooks_useWindowResize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useWindowResize */ \"./components/itemBar/hooks/useWindowResize.ts\");\n/* harmony import */ var _Dock_DockContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Dock/DockContext */ \"./components/itemBar/Dock/DockContext.ts\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ \"./components/itemBar/DockCard/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst INITIAL_WIDTH = 48;\nconst DockCard = (param)=>{\n    let { children  } = param;\n    _s();\n    const cardRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);\n    /**\n   * This doesn't need to be real time, think of it as a static\n   * value of where the card should go to at the end.\n   */ const [elCenterX, setElCenterX] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);\n    const size = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useSpringValue)(INITIAL_WIDTH, {\n        config: {\n            mass: 0.1,\n            tension: 320\n        }\n    });\n    const opacity = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useSpringValue)(0);\n    const y = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useSpringValue)(0, {\n        config: {\n            friction: 30,\n            tension: 350\n        }\n    });\n    const dock = (0,_Dock_DockContext__WEBPACK_IMPORTED_MODULE_5__.useDock)();\n    /**\n   * This is just an abstraction around a `useSpring` hook, if you wanted you could do this\n   * in the hook above, but these abstractions are useful to demonstrate!\n   */ (0,_hooks_useMousePosition__WEBPACK_IMPORTED_MODULE_3__.useMousePosition)({\n        onChange: (param)=>{\n            let { value  } = param;\n            const mouseX = value.x;\n            if (dock.width > 0) {\n                const transformedValue = INITIAL_WIDTH + 36 * Math.cos((mouseX - elCenterX) / dock.width * Math.PI / 2) ** 12;\n                if (dock.hovered) {\n                    size.start(transformedValue);\n                }\n            }\n        }\n    }, [\n        elCenterX,\n        dock\n    ]);\n    (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(()=>{\n        if (!dock.hovered) {\n            size.start(INITIAL_WIDTH);\n        }\n    }, [\n        dock.hovered\n    ]);\n    (0,_hooks_useWindowResize__WEBPACK_IMPORTED_MODULE_4__.useWindowResize)(()=>{\n        const { x  } = cardRef.current.getBoundingClientRect();\n        setElCenterX(x + INITIAL_WIDTH / 2);\n    });\n    const timesLooped = react__WEBPACK_IMPORTED_MODULE_1__.useRef(0);\n    const timeoutRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();\n    const isAnimating = react__WEBPACK_IMPORTED_MODULE_1__.useRef(false);\n    const handleClick = ()=>{\n        if (!isAnimating.current) {\n            isAnimating.current = true;\n            opacity.start(0.5);\n            timesLooped.current = 0;\n            y.start(-INITIAL_WIDTH / 2, {\n                loop: ()=>{\n                    if (1 === timesLooped.current++) {\n                        opacity.start(0);\n                        // y.set(0)\n                        isAnimating.current = false;\n                        timeoutRef.current = undefined;\n                        y.set(0);\n                    }\n                    return {\n                        reverse: false\n                    };\n                }\n            });\n        }\n    // else {\n    //   /**\n    //    * Allow premature exit of animation\n    //    * on a second click if we're currently animating\n    //    */\n    //   clearTimeout(timeoutRef.current)\n    //   opacity.start(0)\n    //   y.start(0)\n    //   isAnimating.current = false\n    // }\n    };\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>()=>clearTimeout(timeoutRef.current), []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default()[\"dock-card-container\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.button, {\n                ref: cardRef,\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default()[\"dock-card\"]),\n                onClick: handleClick,\n                style: {\n                    width: size,\n                    height: size,\n                    y\n                },\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/hoyeon/DP_IceBreaking/components/itemBar/DockCard/index.tsx\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default()[\"dock-dot\"]),\n                style: {\n                    opacity\n                }\n            }, void 0, false, {\n                fileName: \"/Users/hoyeon/DP_IceBreaking/components/itemBar/DockCard/index.tsx\",\n                lineNumber: 127,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hoyeon/DP_IceBreaking/components/itemBar/DockCard/index.tsx\",\n        lineNumber: 115,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DockCard, \"1DnZgOGO0pmel0llj2AC/MG1ORg=\", false, function() {\n    return [\n        _react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useSpringValue,\n        _react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useSpringValue,\n        _react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useSpringValue,\n        _Dock_DockContext__WEBPACK_IMPORTED_MODULE_5__.useDock,\n        _hooks_useMousePosition__WEBPACK_IMPORTED_MODULE_3__.useMousePosition,\n        _react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect,\n        _hooks_useWindowResize__WEBPACK_IMPORTED_MODULE_4__.useWindowResize\n    ];\n});\n_c = DockCard;\nvar _c;\n$RefreshReg$(_c, \"DockCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2l0ZW1CYXIvRG9ja0NhcmQvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDeUQ7QUFFM0I7QUFDRjtBQUViO0FBRUo7QUFNekMsTUFBTVEsZ0JBQWdCO0FBRWYsTUFBTUMsV0FBVyxTQUFpQztRQUFoQyxFQUFFQyxTQUFRLEVBQWlCOztJQUNsRCxNQUFNQyxVQUFVWCx5Q0FBWSxDQUFvQixJQUFJO0lBQ3BEOzs7R0FHQyxHQUNELE1BQU0sQ0FBQ2EsV0FBV0MsYUFBYSxHQUFHZCwyQ0FBYyxDQUFTO0lBRXpELE1BQU1nQixPQUFPYixpRUFBY0EsQ0FBQ0ssZUFBZTtRQUN6Q1MsUUFBUTtZQUNOQyxNQUFNO1lBQ05DLFNBQVM7UUFDWDtJQUNGO0lBRUEsTUFBTUMsVUFBVWpCLGlFQUFjQSxDQUFDO0lBQy9CLE1BQU1rQixJQUFJbEIsaUVBQWNBLENBQUMsR0FBRztRQUMxQmMsUUFBUTtZQUNOSyxVQUFVO1lBQ1ZILFNBQVM7UUFDWDtJQUNGO0lBRUEsTUFBTUksT0FBT2pCLDBEQUFPQTtJQUVwQjs7O0dBR0MsR0FDREYseUVBQWdCQSxDQUNkO1FBQ0VvQixVQUFVLFNBQWU7Z0JBQWQsRUFBRUMsTUFBSyxFQUFFO1lBQ2xCLE1BQU1DLFNBQVNELE1BQU1FLENBQUM7WUFFdEIsSUFBSUosS0FBS0ssS0FBSyxHQUFHLEdBQUc7Z0JBQ2xCLE1BQU1DLG1CQUNKckIsZ0JBQWdCLEtBQUtzQixLQUFLQyxHQUFHLENBQUMsQ0FBR0wsU0FBU2IsU0FBUSxJQUFLVSxLQUFLSyxLQUFLLEdBQUlFLEtBQUtFLEVBQUUsR0FBSSxNQUFNO2dCQUV4RixJQUFJVCxLQUFLVSxPQUFPLEVBQUU7b0JBQ2hCakIsS0FBS2tCLEtBQUssQ0FBQ0w7Z0JBQ2IsQ0FBQztZQUNILENBQUM7UUFDSDtJQUNGLEdBQ0E7UUFBQ2hCO1FBQVdVO0tBQUs7SUFHbkJyQiw0RUFBeUJBLENBQUMsSUFBTTtRQUM5QixJQUFJLENBQUNxQixLQUFLVSxPQUFPLEVBQUU7WUFDakJqQixLQUFLa0IsS0FBSyxDQUFDMUI7UUFDYixDQUFDO0lBQ0gsR0FBRztRQUFDZSxLQUFLVSxPQUFPO0tBQUM7SUFFakI1Qix1RUFBZUEsQ0FBQyxJQUFNO1FBQ3BCLE1BQU0sRUFBRXNCLEVBQUMsRUFBRSxHQUFHaEIsUUFBUXdCLE9BQU8sQ0FBQ0MscUJBQXFCO1FBRW5EdEIsYUFBYWEsSUFBSW5CLGdCQUFnQjtJQUNuQztJQUVBLE1BQU02QixjQUFjckMseUNBQVksQ0FBQztJQUNqQyxNQUFNc0MsYUFBYXRDLHlDQUFZO0lBQy9CLE1BQU11QyxjQUFjdkMseUNBQVksQ0FBQyxLQUFLO0lBRXRDLE1BQU13QyxjQUFjLElBQU07UUFDeEIsSUFBSSxDQUFDRCxZQUFZSixPQUFPLEVBQUU7WUFDeEJJLFlBQVlKLE9BQU8sR0FBRyxJQUFJO1lBQzFCZixRQUFRYyxLQUFLLENBQUM7WUFFZEcsWUFBWUYsT0FBTyxHQUFHO1lBRXRCZCxFQUFFYSxLQUFLLENBQUMsQ0FBQzFCLGdCQUFnQixHQUFHO2dCQUMxQmlDLE1BQU0sSUFBTTtvQkFDVixJQUFJLE1BQU1KLFlBQVlGLE9BQU8sSUFBSTt3QkFDL0JmLFFBQVFjLEtBQUssQ0FBQzt3QkFDZCxXQUFXO3dCQUNYSyxZQUFZSixPQUFPLEdBQUcsS0FBSzt3QkFDM0JHLFdBQVdILE9BQU8sR0FBR087d0JBQ3JCckIsRUFBRXNCLEdBQUcsQ0FBQztvQkFDUixDQUFDO29CQUNELE9BQU87d0JBQUVDLFNBQVMsS0FBSztvQkFBQztnQkFDMUI7WUFDRjtRQUNGLENBQUM7SUFDRCxTQUFTO0lBQ1QsUUFBUTtJQUNSLHlDQUF5QztJQUN6QyxzREFBc0Q7SUFDdEQsUUFBUTtJQUNSLHFDQUFxQztJQUNyQyxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdDQUFnQztJQUNoQyxJQUFJO0lBQ047SUFFQTVDLDRDQUFlLENBQUMsSUFBTSxJQUFNOEMsYUFBYVIsV0FBV0gsT0FBTyxHQUFHLEVBQUU7SUFFaEUscUJBQ0UsOERBQUNZO1FBQUlDLFdBQVd6QyxtRkFBNkI7OzBCQUMzQyw4REFBQ04sOERBQWU7Z0JBQ2RpRCxLQUFLdkM7Z0JBQ0xxQyxXQUFXekMseUVBQW1CO2dCQUM5QjRDLFNBQVNYO2dCQUNUWSxPQUFPO29CQUNMeEIsT0FBT1o7b0JBQ1BxQyxRQUFRckM7b0JBQ1JLO2dCQUNGOzBCQUNDWDs7Ozs7OzBCQUVILDhEQUFDVCwyREFBWTtnQkFBQytDLFdBQVd6Qyx3RUFBa0I7Z0JBQUU2QyxPQUFPO29CQUFFaEM7Z0JBQVE7Ozs7Ozs7Ozs7OztBQUdwRSxFQUFDO0dBakhZWDs7UUFRRU4sNkRBQWNBO1FBT1hBLDZEQUFjQTtRQUNwQkEsNkRBQWNBO1FBT1hHLHNEQUFPQTtRQU1wQkYscUVBQWdCQTtRQWtCaEJGLHdFQUF5QkE7UUFNekJHLG1FQUFlQTs7O0tBckRKSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2l0ZW1CYXIvRG9ja0NhcmQvaW5kZXgudHN4PzkyOGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBhbmltYXRlZCwgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCwgdXNlU3ByaW5nVmFsdWUgfSBmcm9tICdAcmVhY3Qtc3ByaW5nL3dlYidcblxuaW1wb3J0IHsgdXNlTW91c2VQb3NpdGlvbiB9IGZyb20gJy4uL2hvb2tzL3VzZU1vdXNlUG9zaXRpb24nXG5pbXBvcnQgeyB1c2VXaW5kb3dSZXNpemUgfSBmcm9tICcuLi9ob29rcy91c2VXaW5kb3dSZXNpemUnXG5cbmltcG9ydCB7IHVzZURvY2sgfSBmcm9tICcuLi9Eb2NrL0RvY2tDb250ZXh0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xuXG5pbnRlcmZhY2UgRG9ja0NhcmRQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuY29uc3QgSU5JVElBTF9XSURUSCA9IDQ4XG5cbmV4cG9ydCBjb25zdCBEb2NrQ2FyZCA9ICh7IGNoaWxkcmVuIH06IERvY2tDYXJkUHJvcHMpID0+IHtcbiAgY29uc3QgY2FyZFJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MQnV0dG9uRWxlbWVudD4obnVsbCEpXG4gIC8qKlxuICAgKiBUaGlzIGRvZXNuJ3QgbmVlZCB0byBiZSByZWFsIHRpbWUsIHRoaW5rIG9mIGl0IGFzIGEgc3RhdGljXG4gICAqIHZhbHVlIG9mIHdoZXJlIHRoZSBjYXJkIHNob3VsZCBnbyB0byBhdCB0aGUgZW5kLlxuICAgKi9cbiAgY29uc3QgW2VsQ2VudGVyWCwgc2V0RWxDZW50ZXJYXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oMClcblxuICBjb25zdCBzaXplID0gdXNlU3ByaW5nVmFsdWUoSU5JVElBTF9XSURUSCwge1xuICAgIGNvbmZpZzoge1xuICAgICAgbWFzczogMC4xLFxuICAgICAgdGVuc2lvbjogMzIwLFxuICAgIH0sXG4gIH0pXG5cbiAgY29uc3Qgb3BhY2l0eSA9IHVzZVNwcmluZ1ZhbHVlKDApXG4gIGNvbnN0IHkgPSB1c2VTcHJpbmdWYWx1ZSgwLCB7XG4gICAgY29uZmlnOiB7XG4gICAgICBmcmljdGlvbjogMzAsXG4gICAgICB0ZW5zaW9uOiAzNTAsXG4gICAgfSxcbiAgfSlcblxuICBjb25zdCBkb2NrID0gdXNlRG9jaygpXG5cbiAgLyoqXG4gICAqIFRoaXMgaXMganVzdCBhbiBhYnN0cmFjdGlvbiBhcm91bmQgYSBgdXNlU3ByaW5nYCBob29rLCBpZiB5b3Ugd2FudGVkIHlvdSBjb3VsZCBkbyB0aGlzXG4gICAqIGluIHRoZSBob29rIGFib3ZlLCBidXQgdGhlc2UgYWJzdHJhY3Rpb25zIGFyZSB1c2VmdWwgdG8gZGVtb25zdHJhdGUhXG4gICAqL1xuICB1c2VNb3VzZVBvc2l0aW9uKFxuICAgIHtcbiAgICAgIG9uQ2hhbmdlOiAoeyB2YWx1ZSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IG1vdXNlWCA9IHZhbHVlLnhcblxuICAgICAgICBpZiAoZG9jay53aWR0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCB0cmFuc2Zvcm1lZFZhbHVlID1cbiAgICAgICAgICAgIElOSVRJQUxfV0lEVEggKyAzNiAqIE1hdGguY29zKCgoKG1vdXNlWCAtIGVsQ2VudGVyWCkgLyBkb2NrLndpZHRoKSAqIE1hdGguUEkpIC8gMikgKiogMTJcblxuICAgICAgICAgIGlmIChkb2NrLmhvdmVyZWQpIHtcbiAgICAgICAgICAgIHNpemUuc3RhcnQodHJhbnNmb3JtZWRWYWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgICBbZWxDZW50ZXJYLCBkb2NrXVxuICApXG5cbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFkb2NrLmhvdmVyZWQpIHtcbiAgICAgIHNpemUuc3RhcnQoSU5JVElBTF9XSURUSClcbiAgICB9XG4gIH0sIFtkb2NrLmhvdmVyZWRdKVxuXG4gIHVzZVdpbmRvd1Jlc2l6ZSgoKSA9PiB7XG4gICAgY29uc3QgeyB4IH0gPSBjYXJkUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIHNldEVsQ2VudGVyWCh4ICsgSU5JVElBTF9XSURUSCAvIDIpXG4gIH0pXG5cbiAgY29uc3QgdGltZXNMb29wZWQgPSBSZWFjdC51c2VSZWYoMClcbiAgY29uc3QgdGltZW91dFJlZiA9IFJlYWN0LnVzZVJlZjxudW1iZXI+KClcbiAgY29uc3QgaXNBbmltYXRpbmcgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKCFpc0FuaW1hdGluZy5jdXJyZW50KSB7XG4gICAgICBpc0FuaW1hdGluZy5jdXJyZW50ID0gdHJ1ZVxuICAgICAgb3BhY2l0eS5zdGFydCgwLjUpXG5cbiAgICAgIHRpbWVzTG9vcGVkLmN1cnJlbnQgPSAwXG5cbiAgICAgIHkuc3RhcnQoLUlOSVRJQUxfV0lEVEggLyAyLCB7XG4gICAgICAgIGxvb3A6ICgpID0+IHtcbiAgICAgICAgICBpZiAoMSA9PT0gdGltZXNMb29wZWQuY3VycmVudCsrKSB7XG4gICAgICAgICAgICBvcGFjaXR5LnN0YXJ0KDApXG4gICAgICAgICAgICAvLyB5LnNldCgwKVxuICAgICAgICAgICAgaXNBbmltYXRpbmcuY3VycmVudCA9IGZhbHNlXG4gICAgICAgICAgICB0aW1lb3V0UmVmLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgICAgICAgIHkuc2V0KDApXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7IHJldmVyc2U6IGZhbHNlIH1cbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfVxuICAgIC8vIGVsc2Uge1xuICAgIC8vICAgLyoqXG4gICAgLy8gICAgKiBBbGxvdyBwcmVtYXR1cmUgZXhpdCBvZiBhbmltYXRpb25cbiAgICAvLyAgICAqIG9uIGEgc2Vjb25kIGNsaWNrIGlmIHdlJ3JlIGN1cnJlbnRseSBhbmltYXRpbmdcbiAgICAvLyAgICAqL1xuICAgIC8vICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRSZWYuY3VycmVudClcbiAgICAvLyAgIG9wYWNpdHkuc3RhcnQoMClcbiAgICAvLyAgIHkuc3RhcnQoMClcbiAgICAvLyAgIGlzQW5pbWF0aW5nLmN1cnJlbnQgPSBmYWxzZVxuICAgIC8vIH1cbiAgfVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dFJlZi5jdXJyZW50KSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydkb2NrLWNhcmQtY29udGFpbmVyJ119PlxuICAgICAgPGFuaW1hdGVkLmJ1dHRvblxuICAgICAgICByZWY9e2NhcmRSZWZ9XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzWydkb2NrLWNhcmQnXX1cbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6IHNpemUsXG4gICAgICAgICAgaGVpZ2h0OiBzaXplLFxuICAgICAgICAgIHksXG4gICAgICAgIH19PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2FuaW1hdGVkLmJ1dHRvbj5cbiAgICAgIDxhbmltYXRlZC5kaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2RvY2stZG90J119IHN0eWxlPXt7IG9wYWNpdHkgfX0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiYW5pbWF0ZWQiLCJ1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0IiwidXNlU3ByaW5nVmFsdWUiLCJ1c2VNb3VzZVBvc2l0aW9uIiwidXNlV2luZG93UmVzaXplIiwidXNlRG9jayIsInN0eWxlcyIsIklOSVRJQUxfV0lEVEgiLCJEb2NrQ2FyZCIsImNoaWxkcmVuIiwiY2FyZFJlZiIsInVzZVJlZiIsImVsQ2VudGVyWCIsInNldEVsQ2VudGVyWCIsInVzZVN0YXRlIiwic2l6ZSIsImNvbmZpZyIsIm1hc3MiLCJ0ZW5zaW9uIiwib3BhY2l0eSIsInkiLCJmcmljdGlvbiIsImRvY2siLCJvbkNoYW5nZSIsInZhbHVlIiwibW91c2VYIiwieCIsIndpZHRoIiwidHJhbnNmb3JtZWRWYWx1ZSIsIk1hdGgiLCJjb3MiLCJQSSIsImhvdmVyZWQiLCJzdGFydCIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0aW1lc0xvb3BlZCIsInRpbWVvdXRSZWYiLCJpc0FuaW1hdGluZyIsImhhbmRsZUNsaWNrIiwibG9vcCIsInVuZGVmaW5lZCIsInNldCIsInJldmVyc2UiLCJ1c2VFZmZlY3QiLCJjbGVhclRpbWVvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJyZWYiLCJvbkNsaWNrIiwic3R5bGUiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/itemBar/DockCard/index.tsx\n"));

/***/ })

});