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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app/selector.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/selector.js":
/*!*****************************!*\
  !*** ./src/app/selector.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//Header - Sandwich Menu\nlet sandwichMenu = document.querySelector('.fa-ellipsis-h'),\n    rollMenu = document.querySelector('.roll-menu'),\n    sandwichBox = document.querySelector('input[name=sandwichCheck]');\nsandwichBox.addEventListener('change', function () {\n  if (this.checked) {\n    sandwichMenu.style.transformOrigin = \"center center\";\n    sandwichMenu.style.transform = \"rotate(90deg)\";\n    rollMenu.style.display = \"block\";\n  } else {\n    sandwichMenu.style.transformOrigin = \"center center\";\n    sandwichMenu.style.transform = \"rotate(360deg)\";\n    rollMenu.style.display = \"none\";\n  }\n}); //Header - Notes/Notifications\n\nlet notesContainer = document.querySelector('.notes-container'),\n    notesBox = document.querySelector('input[name=notesCheck]');\nnotiContainer = document.querySelector('.notifications-container'), notiBox = document.querySelector('input[name=notiCheck]');\nnotesBox.addEventListener('change', function () {\n  if (this.checked) {\n    notesContainer.style.display = \"block\";\n    notiContainer.style.display = \"none\";\n    notiBox.checked = false;\n  } else {\n    notesContainer.style.display = \"none\";\n    notiContainer.style.display = \"none\";\n    notiBox.checked = false;\n  }\n});\nnotiBox.addEventListener('change', function () {\n  if (this.checked) {\n    notiContainer.style.display = \"block\";\n    notesContainer.style.display = \"none\";\n    notesBox.checked = false;\n  } else {\n    notiContainer.style.display = \"none\";\n    notesContainer.style.display = \"none\";\n    notesBox.checked = false;\n  }\n}); //Main - Rooms\n\nlet roomCards = document.querySelector('#rooms'),\n    roomContainer = document.querySelector('.rooms-container'),\n    roomBox = document.querySelector('input[name=roomsCheck]');\nroomBox.addEventListener('change', function () {\n  if (this.checked) {\n    roomCards.style.display = \"inline-flex\";\n    roomContainer.style.height = \"25%\";\n  } else {\n    roomCards.style.display = \"none\";\n    roomContainer.style.height = \"0\";\n  }\n});\nlet livingRoom = document.querySelector('.living-room'),\n    hall = document.querySelector('.hall'),\n    bedRoom = document.querySelector('.bed-room'),\n    kitchen = document.querySelector('.kitchen'),\n    kidsRoom = document.querySelector('.kids-room'),\n    dinningRoom = document.querySelector('.dinning-room'),\n    garage = document.querySelector('.garage');\nlivingRoom.addEventListener('mousedown', e => {\n  startTime = new Date();\n});\nlivingRoom.addEventListener('mouseup', e => {\n  endTime = new Date() - startTime;\n  timeDiff = (endTime / 1000).toFixed(3);\n  console.log(timeDiff);\n\n  if (timeDiff > 0.199) {\n    document.querySelector('.living-switch').style.display = \"flex\";\n  }\n});\nlivingRoom.addEventListener('touchstart', e => {\n  startTime = new Date();\n});\nlivingRoom.addEventListener('touchend', e => {\n  endTime = new Date() - startTime;\n  timeDiff = (endTime / 1000).toFixed(3);\n  console.log(timeDiff);\n\n  if (timeDiff > 0.199) {\n    document.querySelector('.living-switch').style.display = \"flex\";\n  }\n}); // Main Devices\n\nlet devices = document.querySelector('.devices'),\n    devicesContainer = document.querySelector('.devices-container'),\n    devicesBox = document.querySelector('input[name=devicesCheck]');\ndevicesBox.addEventListener('change', function () {\n  if (this.checked) {\n    devices.style.display = \"inline-flex\";\n    devicesContainer.style.height = \"30%\";\n  } else {\n    devices.style.display = \"none\";\n    devicesContainer.style.height = \"0%\";\n  }\n});\nlet exitBox = document.querySelector('input[name=livingCheck]');\nexitBox.addEventListener('change', function (e) {\n  if (this.checked) {\n    document.querySelector('.living-switch').style.display = \"none\";\n    exitBox.checked = false;\n  }\n});\n\n//# sourceURL=webpack:///./src/app/selector.js?");

/***/ })

/******/ });