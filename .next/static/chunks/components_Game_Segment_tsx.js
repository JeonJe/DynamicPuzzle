"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["components_Game_Segment_tsx"],{

/***/ "./components/Game/CloneVideo.tsx":
/*!****************************************!*\
  !*** ./components/Game/CloneVideo.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CloneVideo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction CloneVideo(param) {\n    let { id , videoId  } = param;\n    _s();\n    var cloneRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var ctx = null;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!cloneRef.current) return;\n        ctx = cloneRef.current.getContext(\"2d\");\n    }, [\n        cloneRef\n    ]);\n    const video = document.getElementById(videoId);\n    const draw = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        ctx.drawImage(video, 640 / 3 * (id % 3), 160 * ((id - id % 3) / 3), 640 / 3, 160, 0, 0, 640, 480);\n        setTimeout(function() {\n            draw();\n        }, 30);\n    }, [\n        video\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!video) return;\n        if (!ctx) return;\n        draw();\n    }, [\n        video\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n            id: \"\".concat(id),\n            width: \"640\",\n            height: \"480\",\n            ref: cloneRef\n        }, void 0, false, {\n            fileName: \"/Users/parkchan/Documents/jungle_Project/DP_IceBreaking/components/Game/CloneVideo.tsx\",\n            lineNumber: 33,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(CloneVideo, \"E1HjyBSp3yywQM7Qf++FEkuCoCs=\");\n_c = CloneVideo;\nvar _c;\n$RefreshReg$(_c, \"CloneVideo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbWUvQ2xvbmVWaWRlby50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF1RDtBQU94QyxTQUFTRyxXQUFXLEtBQTRCLEVBQUU7UUFBOUIsRUFBRUMsR0FBRSxFQUFFQyxRQUFPLEVBQWUsR0FBNUI7O0lBQy9CLElBQUlDLFdBQVdKLDZDQUFNQSxDQUFvQixJQUFJO0lBQzdDLElBQUlLLE1BQXVDLElBQUk7SUFDL0NOLGdEQUFTQSxDQUFDLElBQU07UUFDWixJQUFJLENBQUNLLFNBQVNFLE9BQU8sRUFBRTtRQUN2QkQsTUFBTUQsU0FBU0UsT0FBTyxDQUFDQyxVQUFVLENBQUM7SUFDdEMsR0FBRztRQUFDSDtLQUFTO0lBRWIsTUFBTUksUUFBUUMsU0FBU0MsY0FBYyxDQUFDUDtJQUV0QyxNQUFNUSxPQUFPYixrREFBV0EsQ0FBQyxJQUFNO1FBQzNCTyxJQUFLTyxTQUFTLENBQUNKLE9BQU8sTUFBTSxJQUFLTixDQUFBQSxLQUFLLElBQUksTUFBTyxFQUFDQSxLQUFLQSxLQUFLLEtBQUssSUFBSSxNQUFNLEdBQUcsS0FBSyxHQUFHLEdBQUcsS0FBSztRQUM5RlcsV0FBVyxXQUFZO1lBQ25CRjtRQUNKLEdBQUc7SUFFUCxHQUFHO1FBQUNIO0tBQU07SUFFVlQsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLElBQUksQ0FBQ1MsT0FBTztRQUNaLElBQUksQ0FBQ0gsS0FBSztRQUNWTTtJQUNKLEdBQUc7UUFBQ0g7S0FBTTtJQUNWLHFCQUNJO2tCQUNJLDRFQUFDTTtZQUFPWixJQUFJLEdBQU0sT0FBSEE7WUFBTWEsT0FBTTtZQUFNQyxRQUFPO1lBQU1DLEtBQUtiOzs7Ozs7O0FBSS9ELENBQUM7R0E3QnVCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0dhbWUvQ2xvbmVWaWRlby50c3g/ZDVkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIHNlZ21lbnREYXRhIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIHZpZGVvSWQ6IHN0cmluZztcblxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xvbmVWaWRlbyh7IGlkLCB2aWRlb0lkIH06IHNlZ21lbnREYXRhKSB7XG4gICAgdmFyIGNsb25lUmVmID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50PihudWxsKTtcbiAgICB2YXIgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsID0gbnVsbDtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIWNsb25lUmVmLmN1cnJlbnQpIHJldHVyblxuICAgICAgICBjdHggPSBjbG9uZVJlZi5jdXJyZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgfSwgW2Nsb25lUmVmXSlcblxuICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodmlkZW9JZCkgYXMgSFRNTFZpZGVvRWxlbWVudDtcblxuICAgIGNvbnN0IGRyYXcgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGN0eCEuZHJhd0ltYWdlKHZpZGVvLCA2NDAgLyAzICogKGlkICUgMyksIDE2MCAqICgoaWQgLSBpZCAlIDMpIC8gMyksIDY0MCAvIDMsIDE2MCwgMCwgMCwgNjQwLCA0ODApO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRyYXcoKTtcbiAgICAgICAgfSwgMzApO1xuXG4gICAgfSwgW3ZpZGVvXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIXZpZGVvKSByZXR1cm47XG4gICAgICAgIGlmICghY3R4KSByZXR1cm47XG4gICAgICAgIGRyYXcoKTtcbiAgICB9LCBbdmlkZW9dKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Y2FudmFzIGlkPXtgJHtpZH1gfSB3aWR0aD1cIjY0MFwiIGhlaWdodD1cIjQ4MFwiIHJlZj17Y2xvbmVSZWZ9PjwvY2FudmFzPlxuICAgICAgICA8Lz5cbiAgICApXG5cbn0iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJDbG9uZVZpZGVvIiwiaWQiLCJ2aWRlb0lkIiwiY2xvbmVSZWYiLCJjdHgiLCJjdXJyZW50IiwiZ2V0Q29udGV4dCIsInZpZGVvIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRyYXciLCJkcmF3SW1hZ2UiLCJzZXRUaW1lb3V0IiwiY2FudmFzIiwid2lkdGgiLCJoZWlnaHQiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Game/CloneVideo.tsx\n"));

/***/ }),

/***/ "./components/Game/Segment.tsx":
/*!*************************************!*\
  !*** ./components/Game/Segment.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isNearOutline\": function() { return /* binding */ isNearOutline; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-spring/web */ \"./node_modules/@react-spring/web/dist/react-spring-web.esm.js\");\n/* harmony import */ var react_use_gesture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-use-gesture */ \"./node_modules/react-use-gesture/dist/reactusegesture.esm.js\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.css */ \"./components/Game/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _CloneVideo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CloneVideo */ \"./components/Game/CloneVideo.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst calcX = (y, ly)=>-(y - ly - window.innerHeight / 2) / 20;\nconst calcY = (x, lx)=>(x - lx - window.innerWidth / 2) / 20;\nconst wheel = (y)=>{\n    const imgHeight = window.innerWidth * 0.3 - 20;\n    return \"translateY(\".concat(-imgHeight * (y < 0 ? 6 : 1) - y % (imgHeight * 5), \"px\");\n};\nfunction Segment(param) {\n    let { i , auth , videoId , peerxy , dataChannel , segmentState  } = param;\n    _s();\n    const [isRightPlace, setIsRightPlace] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!auth);\n    const [zindex, setZindex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.floor(Math.random() * 10));\n    // const videoElement = document.getElementById(videoId) as HTMLVideoElement;\n    // const [width, height] = [videoElement.videoWidth / 3 * (i % 3), videoElement.videoHeight / 3 * ((i - i % 3) / 3)]\n    const d = 1;\n    // 현재 좌표 받아와서 퍼즐을 끼워맞출 곳을 보정해줄 값을 widthOx, heightOx에 저장\n    const [widthOx, heightOx] = [\n        640 / 3 * d,\n        480 / 3 * d\n    ];\n    const [width, height] = [\n        640 / 3 * (i % 3) - widthOx,\n        480 / 3 * ((i - i % 3) / 3) + heightOx\n    ];\n    // const [width, height] = [windowSize.width / 3 * (i % 3), windowSize.height / 3 * ((i - i % 3) / 3)]\n    // TODO : 옆으로 init 시 api.start 이동\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const preventDefault = (e)=>e.preventDefault();\n        document.addEventListener(\"gesturestart\", preventDefault);\n        document.addEventListener(\"gesturechange\", preventDefault);\n        return ()=>{\n            document.removeEventListener(\"gesturestart\", preventDefault);\n            document.removeEventListener(\"gesturechange\", preventDefault);\n        };\n    }, []);\n    const domTarget = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [{ x , y , rotateX , rotateY , rotateZ , zoom , scale  }, api] = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useSpring)(()=>({\n            rotateX: 0,\n            rotateY: 0,\n            rotateZ: 0,\n            scale: 1,\n            zoom: 0,\n            x: 0,\n            y: 0,\n            config: {\n                mass: 2,\n                tension: 750,\n                friction: 50\n            }\n        }));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (peerxy !== undefined) {\n            console.log(\"peerxy\", peerxy);\n            api.start({\n                x: peerxy.peerx,\n                y: peerxy.peery,\n                rotateX: 0,\n                rotateY: 0\n            });\n        }\n    }, [\n        peerxy\n    ]);\n    const [{ wheelY  }, wheelApi] = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useSpring)(()=>({\n            wheelY: 0\n        }));\n    (0,react_use_gesture__WEBPACK_IMPORTED_MODULE_4__.useGesture)({\n        onDrag: (param)=>{\n            let { active , offset: [x, y]  } = param;\n            if (isRightPlace) return;\n            //TODO : active 신경써서 수치 변경\n            api.start({\n                x: x,\n                y: y,\n                rotateX: 0,\n                rotateY: 0,\n                scale: active ? 1 : 1.05\n            });\n            if ((dataChannel === null || dataChannel === void 0 ? void 0 : dataChannel.readyState) === \"open\") {\n                console.log(\"나다\", x, y);\n                dataChannel.send(JSON.stringify({\n                    type: \"move\",\n                    i: i,\n                    peerx: x,\n                    peery: y\n                }));\n            }\n        },\n        onPinch: (param)=>{\n            let { offset: [d, a]  } = param;\n            return api.start({\n                zoom: d / 10000,\n                rotateZ: a\n            });\n        },\n        onPinchEnd: ()=>api.start({\n                zoom: 0,\n                rotateZ: 0\n            }),\n        onMove: (param)=>{\n            let { xy: [px, py] , dragging  } = param;\n            !dragging && api.start({\n                rotateX: calcX(py, y.get()),\n                rotateY: calcY(px, x.get()),\n                scale: 1.05\n            });\n        },\n        onDragEnd: (param)=>{\n            let { offset: [ox, oy]  } = param;\n            if (!isRightPlace && isNearOutline(ox, oy, width, height)) {\n                domTarget.current.setAttribute(\"style\", \"z-index: 0\");\n                api.start({\n                    x: width,\n                    y: height\n                });\n                setIsRightPlace(true);\n                //TODO : 종료조건 넣어두기\n                setZindex(0);\n                if ((dataChannel === null || dataChannel === void 0 ? void 0 : dataChannel.readyState) === \"open\") {\n                    dataChannel.send(JSON.stringify({\n                        type: \"move\",\n                        i: i,\n                        peerx: width,\n                        peery: height\n                    }));\n                }\n            }\n        },\n        onHover: (param)=>{\n            let { hovering  } = param;\n            return !hovering && api.start({\n                rotateX: 0,\n                rotateY: 0,\n                scale: 1\n            });\n        },\n        onWheel: (param)=>{\n            let { event , offset: [, y]  } = param;\n            event.preventDefault();\n            wheelApi.set({\n                wheelY: y\n            });\n        }\n    }, {\n        domTarget,\n        eventOptions: {\n            passive: false\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n                    ref: domTarget,\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),\n                    style: {\n                        transform: \"perspective(600px)\",\n                        x,\n                        y,\n                        scale: (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.to)([\n                            scale,\n                            zoom\n                        ], (s, z)=>s + z),\n                        rotateX,\n                        rotateY,\n                        rotateZ,\n                        zIndex: zindex\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CloneVideo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            id: i,\n                            videoId: videoId\n                        }, i, false, {\n                            fileName: \"/Users/parkchan/Documents/jungle_Project/DP_IceBreaking/components/Game/Segment.tsx\",\n                            lineNumber: 144,\n                            columnNumber: 29\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/parkchan/Documents/jungle_Project/DP_IceBreaking/components/Game/Segment.tsx\",\n                        lineNumber: 143,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/parkchan/Documents/jungle_Project/DP_IceBreaking/components/Game/Segment.tsx\",\n                    lineNumber: 130,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/parkchan/Documents/jungle_Project/DP_IceBreaking/components/Game/Segment.tsx\",\n                lineNumber: 129,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/parkchan/Documents/jungle_Project/DP_IceBreaking/components/Game/Segment.tsx\",\n            lineNumber: 128,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Segment, \"hJMStXvz4i/ch5knTGrg9Au2Dcg=\", false, function() {\n    return [\n        _react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useSpring,\n        _react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useSpring,\n        react_use_gesture__WEBPACK_IMPORTED_MODULE_4__.useGesture\n    ];\n});\n_c = Segment;\nfunction isNearOutline(x, y, positionx, positiony) {\n    const diff = 40;\n    if (x > positionx - diff && x < positionx + diff && y > positiony - diff && y < positiony + diff) {\n        return true;\n    } else return false;\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(Segment));\nvar _c, _c1;\n$RefreshReg$(_c, \"Segment\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUEsQ0FBQzs0QkFBQzRDOzRCQUFPRDt5QkFBSyxFQUFFLENBQUNvRCxHQUFHQyxJQUFNRCxJQUFJQzt3QkFDdkN4RDt3QkFDQUM7d0JBQ0FDO3dCQUNBdUQsUUFBUXpFO29CQUNaOzhCQUNBLDRFQUFDekIsMkRBQVk7a0NBQ1QsNEVBQUNJLG1EQUFVQTs0QkFBUytGLElBQUlsRjs0QkFBR0UsU0FBU0E7MkJBQW5CRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRN0M7R0E1SFNEOztRQXlCMkRqQix3REFBU0E7UUFzQjFDQSx3REFBU0E7UUFFeENHLHlEQUFVQTs7O0tBakRMYztBQThIRixTQUFTK0QsY0FBY3BFLENBQVMsRUFBRUwsQ0FBUyxFQUFFOEYsU0FBaUIsRUFBRUMsU0FBaUIsRUFBRTtJQUN0RixNQUFNQyxPQUFPO0lBQ2IsSUFBSTNGLElBQUl5RixZQUFZRSxRQUFRM0YsSUFBSXlGLFlBQVlFLFFBQVFoRyxJQUFJK0YsWUFBWUMsUUFBUWhHLElBQUkrRixZQUFZQyxNQUFNO1FBQzlGLE9BQU8sSUFBSTtJQUNmLE9BRUksT0FBTyxLQUFLO0FBQ3BCLENBQUM7QUFJRCxrRkFBZXhHLDJDQUFJQSxDQUFDa0IsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0dhbWUvU2VnbWVudC50c3g/NjU5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlLCBtZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkLCB0byB9IGZyb20gJ0ByZWFjdC1zcHJpbmcvd2ViJ1xuaW1wb3J0IHsgdXNlR2VzdHVyZSB9IGZyb20gJ3JlYWN0LXVzZS1nZXN0dXJlJ1xuaW1wb3J0IHsgUHJvdmlkZXIsIHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IGl0ZW1TdG9yZSBmcm9tICdAL3BhZ2VzL3Jvb21zL2l0ZW1TdG9yZSdcblxuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnXG5pbXBvcnQgQ2xvbmVWaWRlbyBmcm9tICcuL0Nsb25lVmlkZW8nXG5cbmNvbnN0IGNhbGNYID0gKHk6IG51bWJlciwgbHk6IG51bWJlcikgPT4gLSh5IC0gbHkgLSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAvIDIwXG5jb25zdCBjYWxjWSA9ICh4OiBudW1iZXIsIGx4OiBudW1iZXIpID0+ICh4IC0gbHggLSB3aW5kb3cuaW5uZXJXaWR0aCAvIDIpIC8gMjBcblxuY29uc3Qgd2hlZWwgPSAoeTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgaW1nSGVpZ2h0ID0gd2luZG93LmlubmVyV2lkdGggKiAwLjMgLSAyMFxuICAgIHJldHVybiBgdHJhbnNsYXRlWSgkey1pbWdIZWlnaHQgKiAoeSA8IDAgPyA2IDogMSkgLSAoeSAlIChpbWdIZWlnaHQgKiA1KSl9cHhgXG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgaTogbnVtYmVyXG4gICAgdmlkZW9JZDogc3RyaW5nXG4gICAgYXV0aDogYm9vbGVhblxuXG4gICAgcGVlcnh5OiB7IHBlZXJ4OiBudW1iZXIsIHBlZXJ5OiBudW1iZXIgfSB8IHVuZGVmaW5lZFxuICAgIGRhdGFDaGFubmVsOiBSVENEYXRhQ2hhbm5lbCB8IHVuZGVmaW5lZFxuICAgIHNlZ21lbnRTdGF0ZTogc3RyaW5nXG59XG5mdW5jdGlvbiBTZWdtZW50KHsgaSwgYXV0aCwgdmlkZW9JZCwgcGVlcnh5LCBkYXRhQ2hhbm5lbCwgc2VnbWVudFN0YXRlIH06IFByb3BzKSB7XG4gICAgY29uc3QgW2lzUmlnaHRQbGFjZSwgc2V0SXNSaWdodFBsYWNlXSA9IHVzZVN0YXRlKCFhdXRoKVxuICAgIGNvbnN0IFt6aW5kZXgsIHNldFppbmRleF0gPSB1c2VTdGF0ZShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpXG4gICAgLy8gY29uc3QgdmlkZW9FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodmlkZW9JZCkgYXMgSFRNTFZpZGVvRWxlbWVudDtcbiAgICAvLyBjb25zdCBbd2lkdGgsIGhlaWdodF0gPSBbdmlkZW9FbGVtZW50LnZpZGVvV2lkdGggLyAzICogKGkgJSAzKSwgdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0IC8gMyAqICgoaSAtIGkgJSAzKSAvIDMpXVxuICAgIGNvbnN0IGQgPSAxO1xuICAgIC8vIO2YhOyerCDsooztkZwg67Cb7JWE7JmA7IScIO2NvOymkOydhCDrgbzsm4zrp57stpwg6rOz7J2EIOuztOygle2VtOykhCDqsJLsnYQgd2lkdGhPeCwgaGVpZ2h0T3jsl5Ag7KCA7J6lXG4gICAgY29uc3QgW3dpZHRoT3gsIGhlaWdodE94XSA9IFs2NDAgLyAzICogZCwgNDgwIC8gMyAqIGRdXG4gICAgY29uc3QgW3dpZHRoLCBoZWlnaHRdID0gWzY0MCAvIDMgKiAoaSAlIDMpIC0gd2lkdGhPeCwgNDgwIC8gMyAqICgoaSAtIGkgJSAzKSAvIDMpICsgaGVpZ2h0T3hdXG4gICAgLy8gY29uc3QgW3dpZHRoLCBoZWlnaHRdID0gW3dpbmRvd1NpemUud2lkdGggLyAzICogKGkgJSAzKSwgd2luZG93U2l6ZS5oZWlnaHQgLyAzICogKChpIC0gaSAlIDMpIC8gMyldXG4gICAgLy8gVE9ETyA6IOyYhuycvOuhnCBpbml0IOyLnCBhcGkuc3RhcnQg7J2064+ZXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBwcmV2ZW50RGVmYXVsdCA9IChlOiBFdmVudCkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2dlc3R1cmVzdGFydCcsIHByZXZlbnREZWZhdWx0KVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdnZXN0dXJlY2hhbmdlJywgcHJldmVudERlZmF1bHQpXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdnZXN0dXJlc3RhcnQnLCBwcmV2ZW50RGVmYXVsdClcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2dlc3R1cmVjaGFuZ2UnLCBwcmV2ZW50RGVmYXVsdClcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuXG5cblxuICAgIGNvbnN0IGRvbVRhcmdldCA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbClcbiAgICBjb25zdCBbeyB4LCB5LCByb3RhdGVYLCByb3RhdGVZLCByb3RhdGVaLCB6b29tLCBzY2FsZSB9LCBhcGldID0gdXNlU3ByaW5nKFxuICAgICAgICAoKSA9PiAoe1xuICAgICAgICAgICAgcm90YXRlWDogMCxcbiAgICAgICAgICAgIHJvdGF0ZVk6IDAsXG4gICAgICAgICAgICByb3RhdGVaOiAwLFxuICAgICAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgICAgICB6b29tOiAwLFxuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG5cbiAgICAgICAgICAgIGNvbmZpZzogeyBtYXNzOiAyLCB0ZW5zaW9uOiA3NTAsIGZyaWN0aW9uOiA1MCB9LFxuICAgICAgICB9KVxuICAgIClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChwZWVyeHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3BlZXJ4eScsIHBlZXJ4eSlcbiAgICAgICAgICAgIGFwaS5zdGFydCh7IHg6IHBlZXJ4eS5wZWVyeCwgeTogcGVlcnh5LnBlZXJ5LCByb3RhdGVYOiAwLCByb3RhdGVZOiAwIH0pXG4gICAgICAgIH1cbiAgICB9LCBbcGVlcnh5XSlcblxuXG4gICAgY29uc3QgW3sgd2hlZWxZIH0sIHdoZWVsQXBpXSA9IHVzZVNwcmluZygoKSA9PiAoeyB3aGVlbFk6IDAgfSkpXG5cbiAgICB1c2VHZXN0dXJlKFxuICAgICAgICB7XG4gICAgICAgICAgICBvbkRyYWc6ICh7IGFjdGl2ZSwgb2Zmc2V0OiBbeCwgeV0gfSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpc1JpZ2h0UGxhY2UpIHJldHVybjtcbiAgICAgICAgICAgICAgICAvL1RPRE8gOiBhY3RpdmUg7Iug6rK97I2o7IScIOyImOy5mCDrs4Dqsr1cbiAgICAgICAgICAgICAgICBhcGkuc3RhcnQoeyB4OiB4LCB5OiB5LCByb3RhdGVYOiAwLCByb3RhdGVZOiAwLCBzY2FsZTogYWN0aXZlID8gMSA6IDEuMDUgfSlcblxuICAgICAgICAgICAgICAgIGlmIChkYXRhQ2hhbm5lbD8ucmVhZHlTdGF0ZSA9PT0gJ29wZW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfrgpjri6QnLCB4LCB5KVxuICAgICAgICAgICAgICAgICAgICBkYXRhQ2hhbm5lbC5zZW5kKEpTT04uc3RyaW5naWZ5KHsgdHlwZTogJ21vdmUnLCBpOiBpLCBwZWVyeDogeCwgcGVlcnk6IHkgfSkpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25QaW5jaDogKHsgb2Zmc2V0OiBbZCwgYV0gfSkgPT4gYXBpLnN0YXJ0KHsgem9vbTogZCAvIDEwMDAwLCByb3RhdGVaOiBhIH0pLFxuICAgICAgICAgICAgb25QaW5jaEVuZDogKCkgPT4gYXBpLnN0YXJ0KHsgem9vbTogMCwgcm90YXRlWjogMCB9KSxcbiAgICAgICAgICAgIG9uTW92ZTogKHsgeHk6IFtweCwgcHldLCBkcmFnZ2luZyB9KSA9PiB7XG4gICAgICAgICAgICAgICAgIWRyYWdnaW5nICYmXG4gICAgICAgICAgICAgICAgICAgIGFwaS5zdGFydCh7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3RhdGVYOiBjYWxjWChweSwgeS5nZXQoKSksXG4gICAgICAgICAgICAgICAgICAgICAgICByb3RhdGVZOiBjYWxjWShweCwgeC5nZXQoKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogMS4wNSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25EcmFnRW5kOiAoeyBvZmZzZXQ6IFtveCwgb3ldIH0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzUmlnaHRQbGFjZSAmJiBpc05lYXJPdXRsaW5lKG94LCBveSwgd2lkdGgsIGhlaWdodCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tVGFyZ2V0LmN1cnJlbnQhLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnei1pbmRleDogMCcpXG4gICAgICAgICAgICAgICAgICAgIGFwaS5zdGFydCh7IHg6IHdpZHRoLCB5OiBoZWlnaHQgfSlcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNSaWdodFBsYWNlKHRydWUpXG4gICAgICAgICAgICAgICAgICAgIC8vVE9ETyA6IOyiheujjOyhsOqxtCDrhKPslrTrkZDquLBcbiAgICAgICAgICAgICAgICAgICAgc2V0WmluZGV4KDApXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhQ2hhbm5lbD8ucmVhZHlTdGF0ZSA9PT0gJ29wZW4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhQ2hhbm5lbC5zZW5kKEpTT04uc3RyaW5naWZ5KHsgdHlwZTogJ21vdmUnLCBpOiBpLCBwZWVyeDogd2lkdGgsIHBlZXJ5OiBoZWlnaHQgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Ib3ZlcjogKHsgaG92ZXJpbmcgfSkgPT5cbiAgICAgICAgICAgICAgICAhaG92ZXJpbmcgJiYgYXBpLnN0YXJ0KHsgcm90YXRlWDogMCwgcm90YXRlWTogMCwgc2NhbGU6IDEgfSksXG4gICAgICAgICAgICBvbldoZWVsOiAoeyBldmVudCwgb2Zmc2V0OiBbLCB5XSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIHdoZWVsQXBpLnNldCh7IHdoZWVsWTogeSB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgeyBkb21UYXJnZXQsIGV2ZW50T3B0aW9uczogeyBwYXNzaXZlOiBmYWxzZSB9IH1cbiAgICApXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZWQuZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e2RvbVRhcmdldH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3BlcnNwZWN0aXZlKDYwMHB4KScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiB0byhbc2NhbGUsIHpvb21dLCAocywgeikgPT4gcyArIHopLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZVgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlWSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhdGVaLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogemluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlZC5kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsb25lVmlkZW8ga2V5PXtpfSBpZD17aX0gdmlkZW9JZD17dmlkZW9JZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2FuaW1hdGVkLmRpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTmVhck91dGxpbmUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHBvc2l0aW9ueDogbnVtYmVyLCBwb3NpdGlvbnk6IG51bWJlcikge1xuICAgIGNvbnN0IGRpZmYgPSA0MDtcbiAgICBpZiAoeCA+IHBvc2l0aW9ueCAtIGRpZmYgJiYgeCA8IHBvc2l0aW9ueCArIGRpZmYgJiYgeSA+IHBvc2l0aW9ueSAtIGRpZmYgJiYgeSA8IHBvc2l0aW9ueSArIGRpZmYpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhTZWdtZW50KTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIm1lbW8iLCJ1c2VTcHJpbmciLCJhbmltYXRlZCIsInRvIiwidXNlR2VzdHVyZSIsInN0eWxlcyIsIkNsb25lVmlkZW8iLCJjYWxjWCIsInkiLCJseSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiY2FsY1kiLCJ4IiwibHgiLCJpbm5lcldpZHRoIiwid2hlZWwiLCJpbWdIZWlnaHQiLCJTZWdtZW50IiwiaSIsImF1dGgiLCJ2aWRlb0lkIiwicGVlcnh5IiwiZGF0YUNoYW5uZWwiLCJzZWdtZW50U3RhdGUiLCJpc1JpZ2h0UGxhY2UiLCJzZXRJc1JpZ2h0UGxhY2UiLCJ6aW5kZXgiLCJzZXRaaW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJkIiwid2lkdGhPeCIsImhlaWdodE94Iiwid2lkdGgiLCJoZWlnaHQiLCJwcmV2ZW50RGVmYXVsdCIsImUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZG9tVGFyZ2V0Iiwicm90YXRlWCIsInJvdGF0ZVkiLCJyb3RhdGVaIiwiem9vbSIsInNjYWxlIiwiYXBpIiwiY29uZmlnIiwibWFzcyIsInRlbnNpb24iLCJmcmljdGlvbiIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCJzdGFydCIsInBlZXJ4IiwicGVlcnkiLCJ3aGVlbFkiLCJ3aGVlbEFwaSIsIm9uRHJhZyIsImFjdGl2ZSIsIm9mZnNldCIsInJlYWR5U3RhdGUiLCJzZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsInR5cGUiLCJvblBpbmNoIiwiYSIsIm9uUGluY2hFbmQiLCJvbk1vdmUiLCJ4eSIsInB4IiwicHkiLCJkcmFnZ2luZyIsImdldCIsIm9uRHJhZ0VuZCIsIm94Iiwib3kiLCJpc05lYXJPdXRsaW5lIiwiY3VycmVudCIsInNldEF0dHJpYnV0ZSIsIm9uSG92ZXIiLCJob3ZlcmluZyIsIm9uV2hlZWwiLCJldmVudCIsInNldCIsImV2ZW50T3B0aW9ucyIsInBhc3NpdmUiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJyZWYiLCJjYXJkIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJzIiwieiIsInpJbmRleCIsImlkIiwicG9zaXRpb254IiwicG9zaXRpb255IiwiZGlmZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Game/Segment.tsx\n"));

/***/ })

}]);