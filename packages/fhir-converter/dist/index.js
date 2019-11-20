(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@art-forms/models"));
	else if(typeof define === 'function' && define.amd)
		define(["@art-forms/models"], factory);
	else if(typeof exports === 'object')
		exports["FhirConverter"] = factory(require("@art-forms/models"));
	else
		root["FhirConverter"] = factory(root["@art-forms/models"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__art_forms_models__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/constants/FHIREnableBehavior.ts":
/*!*********************************************!*\
  !*** ./src/constants/FHIREnableBehavior.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ALL = 'all';\r\nexports.ANY = 'any';\r\n\n\n//# sourceURL=webpack://FhirConverter/./src/constants/FHIREnableBehavior.ts?");

/***/ }),

/***/ "./src/constants/FHIREnableWhenOperator.ts":
/*!*************************************************!*\
  !*** ./src/constants/FHIREnableWhenOperator.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.EXISTS = 'exists';\r\nexports.EQUAL = '=';\r\nexports.NOT_EQUAL = '!=';\r\nexports.MORE = '>';\r\nexports.LESS = '<';\r\nexports.MORE_OR_EQUAL = '>=';\r\nexports.LESS_OR_EQUAL = '<=';\r\n\n\n//# sourceURL=webpack://FhirConverter/./src/constants/FHIREnableWhenOperator.ts?");

/***/ }),

/***/ "./src/constants/FHIRItemType.ts":
/*!***************************************!*\
  !*** ./src/constants/FHIRItemType.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.GROUP = 'group';\r\nexports.DISPLAY = 'display';\r\nexports.BOOLEAN = 'boolean';\r\nexports.DECIMAL = 'decimal';\r\nexports.DATE = 'date';\r\nexports.DATE_TIME = 'dateTime';\r\nexports.TIME = 'time';\r\nexports.TEXT = 'text';\r\nexports.CHOICE = 'choice';\r\nexports.OPEN_CHOICE = 'open-choice';\r\nexports.MULTI_CHOICE = 'multi-choice'; /////////????????\r\nexports.ATTACHMENT = 'attachment';\r\nexports.STRING = 'string';\r\n\n\n//# sourceURL=webpack://FhirConverter/./src/constants/FHIRItemType.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./mappers/questionnaire */ \"./src/mappers/questionnaire.ts\"));\r\n__export(__webpack_require__(/*! ./mappers/questionnaireResponse */ \"./src/mappers/questionnaireResponse.ts\"));\r\n__export(__webpack_require__(/*! ./mappers/questionnaireItem */ \"./src/mappers/questionnaireItem.ts\"));\r\n__export(__webpack_require__(/*! ./mappers/questionnaireResponseItem */ \"./src/mappers/questionnaireResponseItem.ts\"));\r\n__export(__webpack_require__(/*! ./mappers/FhirToModelConverters/answer */ \"./src/mappers/FhirToModelConverters/answer.ts\"));\r\n__export(__webpack_require__(/*! ./mappers/FhirToModelConverters/answerOption */ \"./src/mappers/FhirToModelConverters/answerOption.ts\"));\r\n__export(__webpack_require__(/*! ./mappers/FhirToModelConverters/enableBehavior */ \"./src/mappers/FhirToModelConverters/enableBehavior.ts\"));\r\n__export(__webpack_require__(/*! ./mappers/FhirToModelConverters/enableWhen */ \"./src/mappers/FhirToModelConverters/enableWhen.ts\"));\r\n__export(__webpack_require__(/*! ./mappers/FhirToModelConverters/initialAnswer */ \"./src/mappers/FhirToModelConverters/initialAnswer.ts\"));\r\n__export(__webpack_require__(/*! ./mappers/FhirToModelConverters/itemType */ \"./src/mappers/FhirToModelConverters/itemType.ts\"));\r\n__export(__webpack_require__(/*! ./mappers/FhirToModelConverters/operator */ \"./src/mappers/FhirToModelConverters/operator.ts\"));\r\n__export(__webpack_require__(/*! ./mappers/ModelToFhirCOnverters/answer */ \"./src/mappers/ModelToFhirCOnverters/answer.ts\"));\r\n__export(__webpack_require__(/*! ./mappers/ModelToFhirCOnverters/answerOption */ \"./src/mappers/ModelToFhirCOnverters/answerOption.ts\"));\r\n__export(__webpack_require__(/*! ./mappers/ModelToFhirCOnverters/enableBehavior */ \"./src/mappers/ModelToFhirCOnverters/enableBehavior.ts\"));\r\n__export(__webpack_require__(/*! ./mappers/ModelToFhirCOnverters/enableWhen */ \"./src/mappers/ModelToFhirCOnverters/enableWhen.ts\"));\r\n__export(__webpack_require__(/*! ./mappers/ModelToFhirCOnverters/initialAnswer */ \"./src/mappers/ModelToFhirCOnverters/initialAnswer.ts\"));\r\n__export(__webpack_require__(/*! ./mappers/ModelToFhirCOnverters/itemType */ \"./src/mappers/ModelToFhirCOnverters/itemType.ts\"));\r\n__export(__webpack_require__(/*! ./mappers/ModelToFhirCOnverters/operator */ \"./src/mappers/ModelToFhirCOnverters/operator.ts\"));\r\n\n\n//# sourceURL=webpack://FhirConverter/./src/index.ts?");

/***/ }),

/***/ "./src/mappers/FhirToModelConverters/answer.ts":
/*!*****************************************************!*\
  !*** ./src/mappers/FhirToModelConverters/answer.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst questionnaireResponseItem_1 = __importDefault(__webpack_require__(/*! ../questionnaireResponseItem */ \"./src/mappers/questionnaireResponseItem.ts\"));\r\nexports.answerToModelConverter = (answer) => {\r\n    const newAnswer = {\r\n        id: answer.id,\r\n        items: answer.item && answer.item.map(item => questionnaireResponseItem_1.default.toModel(item)),\r\n        value: answer.valueBoolean || answer.valueDecimal || answer.valueInteger || answer.valueDate || answer.valueDateTime || answer.valueTime || answer.valueString\r\n    };\r\n    return newAnswer;\r\n};\r\nexports.default = exports.answerToModelConverter;\r\n\n\n//# sourceURL=webpack://FhirConverter/./src/mappers/FhirToModelConverters/answer.ts?");

/***/ }),

/***/ "./src/mappers/FhirToModelConverters/answerOption.ts":
/*!***********************************************************!*\
  !*** ./src/mappers/FhirToModelConverters/answerOption.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.answerOptionToModelConverter = (answerOption) => {\r\n    const newAnswerOption = {\r\n        id: answerOption.id,\r\n        value: answerOption.valueInteger || answerOption.valueDate || answerOption.valueTime || answerOption.valueString,\r\n        defaultSelected: answerOption.initialSelected\r\n    };\r\n    return newAnswerOption;\r\n};\r\nexports.default = exports.answerOptionToModelConverter;\r\n\n\n//# sourceURL=webpack://FhirConverter/./src/mappers/FhirToModelConverters/answerOption.ts?");

/***/ }),

/***/ "./src/mappers/FhirToModelConverters/enableBehavior.ts":
/*!*************************************************************!*\
  !*** ./src/mappers/FhirToModelConverters/enableBehavior.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Models = __importStar(__webpack_require__(/*! @art-forms/models */ \"@art-forms/models\"));\r\nconst FHIREnableBehavior_1 = __webpack_require__(/*! ../../constants/FHIREnableBehavior */ \"./src/constants/FHIREnableBehavior.ts\");\r\nexports.enableBehaviorToModelConverter = (enableBehavior) => {\r\n    switch (enableBehavior) {\r\n        case FHIREnableBehavior_1.ALL: return Models.AND;\r\n        case FHIREnableBehavior_1.ANY: return Models.OR;\r\n        default: return Models.AND;\r\n    }\r\n};\r\nexports.default = exports.enableBehaviorToModelConverter;\r\n\n\n//# sourceURL=webpack://FhirConverter/./src/mappers/FhirToModelConverters/enableBehavior.ts?");

/***/ }),

/***/ "./src/mappers/FhirToModelConverters/enableWhen.ts":
/*!*********************************************************!*\
  !*** ./src/mappers/FhirToModelConverters/enableWhen.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst operator_1 = __importDefault(__webpack_require__(/*! ./operator */ \"./src/mappers/FhirToModelConverters/operator.ts\"));\r\nexports.enableWhenToModelConverter = (enableWhen) => {\r\n    const mappedEnableWhen = {\r\n        id: enableWhen.id,\r\n        questionId: enableWhen.question,\r\n        answer: enableWhen.answerBoolean || enableWhen.answerDecimal || enableWhen.answerInteger || enableWhen.answerDate || enableWhen.answerDateTime || enableWhen.answerTime || enableWhen.answerString,\r\n        operator: operator_1.default(enableWhen.operator)\r\n    };\r\n    return mappedEnableWhen;\r\n};\r\nexports.default = exports.enableWhenToModelConverter;\r\n\n\n//# sourceURL=webpack://FhirConverter/./src/mappers/FhirToModelConverters/enableWhen.ts?");

/***/ }),

/***/ "./src/mappers/FhirToModelConverters/initialAnswer.ts":
/*!************************************************************!*\
  !*** ./src/mappers/FhirToModelConverters/initialAnswer.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.initialAnswerToModelConverter = (initialAnswer) => {\r\n    const newInitialAnswer = {\r\n        id: initialAnswer.id,\r\n        value: initialAnswer.valueBoolean || initialAnswer.valueDecimal || initialAnswer.valueInteger || initialAnswer.valueDate || initialAnswer.valueDateTime || initialAnswer.valueTime || initialAnswer.valueString\r\n    };\r\n    return newInitialAnswer;\r\n};\r\nexports.default = exports.initialAnswerToModelConverter;\r\n\n\n//# sourceURL=webpack://FhirConverter/./src/mappers/FhirToModelConverters/initialAnswer.ts?");

/***/ }),

/***/ "./src/mappers/FhirToModelConverters/itemType.ts":
/*!*******************************************************!*\
  !*** ./src/mappers/FhirToModelConverters/itemType.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Models = __importStar(__webpack_require__(/*! @art-forms/models */ \"@art-forms/models\"));\r\nconst FHIRItemType = __importStar(__webpack_require__(/*! ../../constants/FHIRItemType */ \"./src/constants/FHIRItemType.ts\"));\r\nexports.itemTypeToModelConverter = (type, multipleAnswers) => {\r\n    if (type === FHIRItemType.CHOICE && multipleAnswers) {\r\n        return Models.MULTI_CHOICE;\r\n    }\r\n    switch (type) {\r\n        case FHIRItemType.GROUP: return Models.GROUP;\r\n        case FHIRItemType.DISPLAY: return Models.DISPLAY;\r\n        case FHIRItemType.BOOLEAN: return Models.BOOLEAN;\r\n        case FHIRItemType.ATTACHMENT: return Models.ATTACHMENT;\r\n        case FHIRItemType.CHOICE: return Models.CHOICE;\r\n        case FHIRItemType.DATE: return Models.DATE;\r\n        case FHIRItemType.DATE_TIME: return Models.DATE_TIME;\r\n        case FHIRItemType.DECIMAL: return Models.DECIMAL;\r\n        case FHIRItemType.OPEN_CHOICE: return Models.OPEN_CHOICE;\r\n        case FHIRItemType.STRING: return Models.STRING;\r\n        case FHIRItemType.TIME: return Models.TIME;\r\n        case FHIRItemType.TEXT: return Models.TEXT;\r\n        default: return Models.DISPLAY;\r\n    }\r\n};\r\nexports.default = exports.itemTypeToModelConverter;\r\n\n\n//# sourceURL=webpack://FhirConverter/./src/mappers/FhirToModelConverters/itemType.ts?");

/***/ }),

/***/ "./src/mappers/FhirToModelConverters/operator.ts":
/*!*******************************************************!*\
  !*** ./src/mappers/FhirToModelConverters/operator.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Models = __importStar(__webpack_require__(/*! @art-forms/models */ \"@art-forms/models\"));\r\nconst FHIREnableWhenOperator = __importStar(__webpack_require__(/*! ../../constants/FHIREnableWhenOperator */ \"./src/constants/FHIREnableWhenOperator.ts\"));\r\nexports.operatorToModelConverter = (operator) => {\r\n    switch (operator) {\r\n        case FHIREnableWhenOperator.EXISTS: return Models.EXISTS;\r\n        case FHIREnableWhenOperator.EQUAL: return Models.EQUAL;\r\n        case FHIREnableWhenOperator.LESS: return Models.LESS;\r\n        case FHIREnableWhenOperator.LESS_OR_EQUAL: return Models.LESS_OR_EQUAL;\r\n        case FHIREnableWhenOperator.MORE: return Models.MORE;\r\n        case FHIREnableWhenOperator.MORE_OR_EQUAL: return Models.MORE_OR_EQUAL;\r\n        case FHIREnableWhenOperator.NOT_EQUAL: return Models.NOT_EQUAL;\r\n        default: return Models.EQUAL;\r\n    }\r\n};\r\nexports.default = exports.operatorToModelConverter;\r\n\n\n//# sourceURL=webpack://FhirConverter/./src/mappers/FhirToModelConverters/operator.ts?");

/***/ }),

/***/ "./src/mappers/ModelToFhirCOnverters/answer.ts":
/*!*****************************************************!*\
  !*** ./src/mappers/ModelToFhirCOnverters/answer.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst questionnaireResponseItem_1 = __importDefault(__webpack_require__(/*! ../questionnaireResponseItem */ \"./src/mappers/questionnaireResponseItem.ts\"));\r\nexports.answerFromModelConverter = (answer) => {\r\n    const newAnswer = {\r\n        id: answer.id,\r\n        valueString: answer.value,\r\n        item: answer.items && answer.items.map(item => questionnaireResponseItem_1.default.fromModel(item))\r\n    };\r\n    return newAnswer;\r\n};\r\nexports.default = exports.answerFromModelConverter;\r\n\n\n//# sourceURL=webpack://FhirConverter/./src/mappers/ModelToFhirCOnverters/answer.ts?");

/***/ }),

/***/ "./src/mappers/ModelToFhirCOnverters/answerOption.ts":
/*!***********************************************************!*\
  !*** ./src/mappers/ModelToFhirCOnverters/answerOption.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.answerOptionFromModelConverter = (answerOption) => {\r\n    const newAnswerOption = {\r\n        id: answerOption.id,\r\n        valueString: answerOption.value,\r\n        initialSelected: answerOption.defaultSelected\r\n    };\r\n    return newAnswerOption;\r\n};\r\nexports.default = exports.answerOptionFromModelConverter;\r\n\n\n//# sourceURL=webpack://FhirConverter/./src/mappers/ModelToFhirCOnverters/answerOption.ts?");

/***/ }),

/***/ "./src/mappers/ModelToFhirCOnverters/enableBehavior.ts":
/*!*************************************************************!*\
  !*** ./src/mappers/ModelToFhirCOnverters/enableBehavior.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Models = __importStar(__webpack_require__(/*! @art-forms/models */ \"@art-forms/models\"));\r\nconst FHIREnableBehavior = __importStar(__webpack_require__(/*! ../../constants/FHIREnableBehavior */ \"./src/constants/FHIREnableBehavior.ts\"));\r\nexports.enableBehaviorFromModelConverter = (enableBehavior) => {\r\n    switch (enableBehavior) {\r\n        case Models.AND: return FHIREnableBehavior.ALL;\r\n        case Models.OR: return FHIREnableBehavior.ANY;\r\n        default: return FHIREnableBehavior.ALL;\r\n    }\r\n};\r\nexports.default = exports.enableBehaviorFromModelConverter;\r\n\n\n//# sourceURL=webpack://FhirConverter/./src/mappers/ModelToFhirCOnverters/enableBehavior.ts?");

/***/ }),

/***/ "./src/mappers/ModelToFhirCOnverters/enableWhen.ts":
/*!*********************************************************!*\
  !*** ./src/mappers/ModelToFhirCOnverters/enableWhen.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst operator_1 = __importDefault(__webpack_require__(/*! ./operator */ \"./src/mappers/ModelToFhirCOnverters/operator.ts\"));\r\nexports.enableWhenFromModelConverter = (enableWhen) => {\r\n    const mappedEnableWhen = {\r\n        id: enableWhen.id,\r\n        question: enableWhen.questionId,\r\n        answerString: enableWhen.answer,\r\n        operator: operator_1.default(enableWhen.operator)\r\n    };\r\n    return mappedEnableWhen;\r\n};\r\nexports.default = exports.enableWhenFromModelConverter;\r\n\n\n//# sourceURL=webpack://FhirConverter/./src/mappers/ModelToFhirCOnverters/enableWhen.ts?");

/***/ }),

/***/ "./src/mappers/ModelToFhirCOnverters/initialAnswer.ts":
/*!************************************************************!*\
  !*** ./src/mappers/ModelToFhirCOnverters/initialAnswer.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Models = __importStar(__webpack_require__(/*! @art-forms/models */ \"@art-forms/models\"));\r\nexports.initialAnswerFromModelConverter = (initialAnswer, questionType) => {\r\n    let keyName;\r\n    switch (questionType) {\r\n        case Models.TEXT: {\r\n            keyName = 'valueString';\r\n            break;\r\n        }\r\n        case Models.STRING: {\r\n            keyName = 'valueString';\r\n            break;\r\n        }\r\n        case Models.DECIMAL: {\r\n            keyName = 'valueDecimal';\r\n            break;\r\n        }\r\n        case Models.BOOLEAN: {\r\n            keyName = 'valueBoolean';\r\n            break;\r\n        }\r\n        case Models.TIME: {\r\n            keyName = 'valueTime';\r\n            break;\r\n        }\r\n        case Models.DATE: {\r\n            keyName = 'valueDate';\r\n            break;\r\n        }\r\n        case Models.DATE_TIME: {\r\n            keyName = 'valueDateTime';\r\n            break;\r\n        }\r\n        case Models.ATTACHMENT: {\r\n            keyName = 'valueAttachment';\r\n            break;\r\n        }\r\n        default: {\r\n            keyName = 'valueString';\r\n        }\r\n    }\r\n    const newInitialAnswer = {\r\n        id: initialAnswer.id,\r\n        [keyName]: initialAnswer.value\r\n    };\r\n    return newInitialAnswer;\r\n};\r\nexports.default = exports.initialAnswerFromModelConverter;\r\n\n\n//# sourceURL=webpack://FhirConverter/./src/mappers/ModelToFhirCOnverters/initialAnswer.ts?");

/***/ }),

/***/ "./src/mappers/ModelToFhirCOnverters/itemType.ts":
/*!*******************************************************!*\
  !*** ./src/mappers/ModelToFhirCOnverters/itemType.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Models = __importStar(__webpack_require__(/*! @art-forms/models */ \"@art-forms/models\"));\r\nconst FHIRItemType = __importStar(__webpack_require__(/*! ../../constants/FHIRItemType */ \"./src/constants/FHIRItemType.ts\"));\r\nexports.itemTypeFromModelConverter = (type) => {\r\n    switch (type) {\r\n        case Models.GROUP: return FHIRItemType.GROUP;\r\n        case Models.DISPLAY: return FHIRItemType.DISPLAY;\r\n        case Models.BOOLEAN: return FHIRItemType.BOOLEAN;\r\n        case Models.ATTACHMENT: return FHIRItemType.ATTACHMENT;\r\n        case Models.CHOICE: return FHIRItemType.CHOICE;\r\n        case Models.DATE: return FHIRItemType.DATE;\r\n        case Models.DATE_TIME: return FHIRItemType.DATE_TIME;\r\n        case Models.DECIMAL: return FHIRItemType.DECIMAL;\r\n        case Models.OPEN_CHOICE: return FHIRItemType.OPEN_CHOICE;\r\n        case Models.STRING: return FHIRItemType.STRING;\r\n        case Models.TIME: return FHIRItemType.TIME;\r\n        case Models.TEXT: return FHIRItemType.TEXT;\r\n        case Models.MULTI_CHOICE: return FHIRItemType.CHOICE;\r\n        default: return FHIRItemType.DISPLAY;\r\n    }\r\n};\r\nexports.default = exports.itemTypeFromModelConverter;\r\n\n\n//# sourceURL=webpack://FhirConverter/./src/mappers/ModelToFhirCOnverters/itemType.ts?");

/***/ }),

/***/ "./src/mappers/ModelToFhirCOnverters/operator.ts":
/*!*******************************************************!*\
  !*** ./src/mappers/ModelToFhirCOnverters/operator.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Models = __importStar(__webpack_require__(/*! @art-forms/models */ \"@art-forms/models\"));\r\nconst FHIREnableWhenOperator = __importStar(__webpack_require__(/*! ../../constants/FHIREnableWhenOperator */ \"./src/constants/FHIREnableWhenOperator.ts\"));\r\nexports.operatorFromModelConverter = (operator) => {\r\n    switch (operator) {\r\n        case Models.EXISTS: return FHIREnableWhenOperator.EXISTS;\r\n        case Models.EQUAL: return FHIREnableWhenOperator.EQUAL;\r\n        case Models.LESS: return FHIREnableWhenOperator.LESS;\r\n        case Models.LESS_OR_EQUAL: return FHIREnableWhenOperator.LESS_OR_EQUAL;\r\n        case Models.MORE: return FHIREnableWhenOperator.MORE;\r\n        case Models.MORE_OR_EQUAL: return FHIREnableWhenOperator.MORE_OR_EQUAL;\r\n        case Models.NOT_EQUAL: return FHIREnableWhenOperator.NOT_EQUAL;\r\n        default: return FHIREnableWhenOperator.EQUAL;\r\n    }\r\n};\r\nexports.default = exports.operatorFromModelConverter;\r\n\n\n//# sourceURL=webpack://FhirConverter/./src/mappers/ModelToFhirCOnverters/operator.ts?");

/***/ }),

/***/ "./src/mappers/questionnaire.ts":
/*!**************************************!*\
  !*** ./src/mappers/questionnaire.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst questionnaireItem_1 = __webpack_require__(/*! ./questionnaireItem */ \"./src/mappers/questionnaireItem.ts\");\r\nexports.questionnaireConverter = {\r\n    toModel(questionnaire) {\r\n        const mappedQuestionnaire = {\r\n            description: questionnaire.description,\r\n            title: questionnaire.title,\r\n            id: questionnaire.id,\r\n            items: questionnaire.item && questionnaire.item.map(item => questionnaireItem_1.questionnaireItemConverter.toModel(item))\r\n        };\r\n        return mappedQuestionnaire;\r\n    },\r\n    fromModel(questionnaire) {\r\n        const newQuestionnaire = {\r\n            resourceType: \"Questionnaire\",\r\n            id: questionnaire.id,\r\n            description: questionnaire.description,\r\n            title: questionnaire.title,\r\n            item: questionnaire.items && questionnaire.items.map(item => questionnaireItem_1.questionnaireItemConverter.fromModel(item))\r\n        };\r\n        return newQuestionnaire;\r\n    }\r\n};\r\nexports.default = exports.questionnaireConverter;\r\n\n\n//# sourceURL=webpack://FhirConverter/./src/mappers/questionnaire.ts?");

/***/ }),

/***/ "./src/mappers/questionnaireItem.ts":
/*!******************************************!*\
  !*** ./src/mappers/questionnaireItem.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Models = __importStar(__webpack_require__(/*! @art-forms/models */ \"@art-forms/models\"));\r\nconst itemType_1 = __webpack_require__(/*! ./FhirToModelConverters/itemType */ \"./src/mappers/FhirToModelConverters/itemType.ts\");\r\nconst enableWhen_1 = __webpack_require__(/*! ./FhirToModelConverters/enableWhen */ \"./src/mappers/FhirToModelConverters/enableWhen.ts\");\r\nconst enableBehavior_1 = __webpack_require__(/*! ./FhirToModelConverters/enableBehavior */ \"./src/mappers/FhirToModelConverters/enableBehavior.ts\");\r\nconst initialAnswer_1 = __webpack_require__(/*! ./FhirToModelConverters/initialAnswer */ \"./src/mappers/FhirToModelConverters/initialAnswer.ts\");\r\nconst answerOption_1 = __webpack_require__(/*! ./FhirToModelConverters/answerOption */ \"./src/mappers/FhirToModelConverters/answerOption.ts\");\r\nconst itemType_2 = __webpack_require__(/*! ./ModelToFhirCOnverters/itemType */ \"./src/mappers/ModelToFhirCOnverters/itemType.ts\");\r\nconst enableBehavior_2 = __webpack_require__(/*! ./ModelToFhirCOnverters/enableBehavior */ \"./src/mappers/ModelToFhirCOnverters/enableBehavior.ts\");\r\nconst enableWhen_2 = __webpack_require__(/*! ./ModelToFhirCOnverters/enableWhen */ \"./src/mappers/ModelToFhirCOnverters/enableWhen.ts\");\r\nconst answerOption_2 = __webpack_require__(/*! ./ModelToFhirCOnverters/answerOption */ \"./src/mappers/ModelToFhirCOnverters/answerOption.ts\");\r\nconst initialAnswer_2 = __webpack_require__(/*! ./ModelToFhirCOnverters/initialAnswer */ \"./src/mappers/ModelToFhirCOnverters/initialAnswer.ts\");\r\nexports.questionnaireItemConverter = {\r\n    toModel(item) {\r\n        const newItem = {\r\n            id: item.linkId,\r\n            required: item.required,\r\n            text: item.text,\r\n            type: itemType_1.itemTypeToModelConverter(item.type, item.repeats),\r\n            items: item.item && item.item.map(item => exports.questionnaireItemConverter.toModel(item)),\r\n            enableWhen: item.enableWhen && item.enableWhen.map(enableWhen => enableWhen_1.enableWhenToModelConverter(enableWhen)),\r\n            enableBehavior: enableBehavior_1.enableBehaviorToModelConverter(item.enableBehavior),\r\n            initialAnswers: item.initial && item.initial.map(initial => initialAnswer_1.initialAnswerToModelConverter(initial)),\r\n            options: item.answerOption && item.answerOption.map(answerOption => answerOption_1.answerOptionToModelConverter(answerOption)),\r\n            multipleFiles: itemType_1.itemTypeToModelConverter(item.type, item.repeats) === Models.ATTACHMENT && item.repeats\r\n        };\r\n        return newItem;\r\n    },\r\n    fromModel(item) {\r\n        const newItem = {\r\n            linkId: item.id,\r\n            required: item.required,\r\n            text: item.text,\r\n            type: itemType_2.itemTypeFromModelConverter(item.type),\r\n            repeats: item.type === Models.MULTI_CHOICE || item.multipleFiles,\r\n            item: item.items && item.items.map(item => exports.questionnaireItemConverter.fromModel(item)),\r\n            enableWhen: item.enableWhen && item.enableWhen.map(enableWhen => enableWhen_2.enableWhenFromModelConverter(enableWhen)),\r\n            enableBehavior: enableBehavior_2.enableBehaviorFromModelConverter(item.enableBehavior),\r\n            initial: item.initialAnswers && item.initialAnswers.map(initialAnswer => initialAnswer_2.initialAnswerFromModelConverter(initialAnswer, item.type)),\r\n            answerOption: item.options && item.options.map(option => answerOption_2.answerOptionFromModelConverter(option))\r\n        };\r\n        return newItem;\r\n    }\r\n};\r\nexports.default = exports.questionnaireItemConverter;\r\n\n\n//# sourceURL=webpack://FhirConverter/./src/mappers/questionnaireItem.ts?");

/***/ }),

/***/ "./src/mappers/questionnaireResponse.ts":
/*!**********************************************!*\
  !*** ./src/mappers/questionnaireResponse.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst questionnaireResponseItem_1 = __webpack_require__(/*! ./questionnaireResponseItem */ \"./src/mappers/questionnaireResponseItem.ts\");\r\nexports.questionnaireResponseConverter = {\r\n    toModel(questionnaireResponse) {\r\n        const newQuestionnaireResponse = {\r\n            id: questionnaireResponse.id,\r\n            questionnaireId: questionnaireResponse.resourceType.slice(14),\r\n            items: questionnaireResponse.item.map(item => questionnaireResponseItem_1.questionnaireResponseItemConverter.toModel(item))\r\n        };\r\n        return newQuestionnaireResponse;\r\n    },\r\n    fromModel(questionnaireResponse) {\r\n        const newQuestionnaireResponse = {\r\n            id: questionnaireResponse.id,\r\n            questionnaire: `Questionnaire/${questionnaireResponse.questionnaireId}`,\r\n            resourceType: 'QuestionnaireResponse',\r\n            item: questionnaireResponse.items && questionnaireResponse.items.map(item => questionnaireResponseItem_1.questionnaireResponseItemConverter.fromModel(item))\r\n        };\r\n        return newQuestionnaireResponse;\r\n    }\r\n};\r\nexports.default = exports.questionnaireResponseConverter;\r\n\n\n//# sourceURL=webpack://FhirConverter/./src/mappers/questionnaireResponse.ts?");

/***/ }),

/***/ "./src/mappers/questionnaireResponseItem.ts":
/*!**************************************************!*\
  !*** ./src/mappers/questionnaireResponseItem.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst answer_1 = __importDefault(__webpack_require__(/*! ./FhirToModelConverters/answer */ \"./src/mappers/FhirToModelConverters/answer.ts\"));\r\nconst answer_2 = __importDefault(__webpack_require__(/*! ./ModelToFhirCOnverters/answer */ \"./src/mappers/ModelToFhirCOnverters/answer.ts\"));\r\nexports.questionnaireResponseItemConverter = {\r\n    toModel(item) {\r\n        const newQuestionnaireResponseItem = {\r\n            id: item.id,\r\n            text: item.text,\r\n            questionId: item.linkId,\r\n            items: item.item && item.item.map(itm => exports.questionnaireResponseItemConverter.toModel(itm)),\r\n            answers: item.answer && item.answer.map(answer => answer_1.default(answer))\r\n        };\r\n        return newQuestionnaireResponseItem;\r\n    },\r\n    fromModel(item) {\r\n        const newQuestionnaireResponseItem = {\r\n            id: item.id,\r\n            linkId: item.questionId,\r\n            text: item.text,\r\n            answer: item.answers && item.answers.map(answer => answer_2.default(answer)),\r\n            item: item.items && item.items.map(item => exports.questionnaireResponseItemConverter.fromModel(item))\r\n        };\r\n        return newQuestionnaireResponseItem;\r\n    }\r\n};\r\nexports.default = exports.questionnaireResponseItemConverter;\r\n\n\n//# sourceURL=webpack://FhirConverter/./src/mappers/questionnaireResponseItem.ts?");

/***/ }),

/***/ "@art-forms/models":
/*!************************************!*\
  !*** external "@art-forms/models" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__art_forms_models__;\n\n//# sourceURL=webpack://FhirConverter/external_%22@art-forms/models%22?");

/***/ })

/******/ });
});