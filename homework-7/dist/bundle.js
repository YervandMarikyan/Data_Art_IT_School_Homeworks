/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("const task = {\n    id: 0,\n    text: \"Text\",\n};\nconsole.log(task);\n//Partial\nfunction update(task, patch) {\n    return Object.assign(Object.assign({}, task), patch);\n}\nconst t1 = update(task, { text: \"Hello\" });\nconsole.log(t1);\ntask.id = t1.id;\ntask.text = t1.text;\nconsole.log(task);\n//Required\nconst task1 = {\n    id: 1,\n    text: \"Text_1\",\n    isComplited: true,\n    completedDate: new Date(),\n};\nfunction getCompleted(tasks) {\n    return tasks.filter(task => task.isComplited && task.completedDate);\n}\nconst tasks = getCompleted([task, task1]);\nconsole.log(tasks);\nconst t = {\n    light: {\n        fontSize: 20,\n        color: \"white\"\n    },\n    dark: {\n        fontSize: 30,\n        color: \"black\"\n    }\n};\nconsole.log(t);\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;