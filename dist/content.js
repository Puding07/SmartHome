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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/public/content.html");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/public/content.html":
/*!*********************************!*\
  !*** ./src/public/content.html ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=vl></div> <div class=blurr></div> <div class=header> <div class=header-divs> <div class=sandwich-menu> <input id=sandwich-menu name=sandwichCheck type=checkbox> <label for=sandwich-menu><i class=\\\"fas fa-ellipsis-h\\\"></i></label> </div> <div class=logo-sign><label class=logo for=logo-sign>&#8711;</label><span>SmartHome</span></div> <div id=logo-space></div> <div class=home><span>Home</span></div> <div id=logo-space></div> <div class=page2>Payments</div> <div id=header-space></div> <div class=noti-conctainer> <label for=dropdown-notes><i class=\\\"far fa-clipboard notes\\\"></i></label> <input id=dropdown-notes name=notesCheck type=checkbox> <div class=notes-container><div class=note><span>Do the washing!</span></div></div> <div id=noti-space></div> <label for=dropdown-noti><i class=\\\"fas fa-bell noti\\\"></i></label> <input id=dropdown-noti name=notiCheck type=checkbox> <div class=notifications-container><div class=notification><span>Someone is at the door!</span></div></div> </div> <div class=profile> <div class=picture></div> <div class=name> <span>Hi, Aaron</span> <label class=menu for=dropdown-toggle>&#9662;</label> <input class=dropdown-check id=dropdown-toggle type=checkbox> <div class=dropdown-container> <div class=settings>Settings</div> <div class=profile-settings>Profile settings</div> <div class=logout>Log out</div> </div> </div> </div> <div id=profile-space></div> </div> </div> <div class=roll-menu> <div class=roll-contents> <div class=searchbar-container-mob><input type=text placeholder=Search><i class=\\\"fas fa-search\\\"></i></div> <div class=settings-mob><span>Settings</span></div> <div class=profile-settings-mob><span>Profile settings</span></div> <div class=logout-mob><span>Log out</span></div> </div> </div> <div class=main> <div class=\\\"main-container top-container\\\"> <div class=wellcome-container> <span class=wellcome>Welcome home, </span><span class=mrname>Mr Aaron</span> </div> <div class=searchbar-container><input type=text placeholder=Search><i class=\\\"fas fa-search\\\"></i></div> </div> <div class=\\\"main-container rooms-container\\\"> <div class=rooms-center> <label for=dropdown-rooms>Rooms</label><label class=rooms-dropdown for=dropdown-rooms>&#9661;</label><input id=dropdown-rooms name=roomsCheck type=checkbox checked=checked> </div> <div class=room-displays> <div class=living-switch><label for=living-close><i class=\\\"far fa-times-circle\\\"></i></label><input id=living-close name=livingCheck type=checkbox></div> <div class=hall-switch><input type=button value=Lights></div> <div class=bed-switch><input type=button value=Lights></div> <div class=kitchen-switch><input type=button value=Lights></div> <div class=kids-switch><input type=button value=Lights></div> <div class=dinning-switch><input type=button value=Lights></div> <div class=garage-switch><input type=button value=Lights></div> </div> <div class=\\\"uk-position-relative uk-visible-toggle\\\" id=rooms uk-slider> <ul class=\\\"uk-slider-items uk-child-width-1-6\\\" uk-grid> <li><div class=living-room><i class=\\\"fas fa-circle dot\\\"></i><i class=\\\"fas fa-couch room-pict\\\"></i><span>Living room</span><span class=devices-number>4 devices</span><span class=kwh-consumption>448 kwh</span></div></li> <li><div class=hall><i class=\\\"fas fa-circle dot\\\"></i><i class=\\\"fas fa-door-open room-pict\\\"></i><span>Hall</span><span class=devices-number>2 devices</span><span class=kwh-consumption>378 kwh</span></div></li> <li><div class=bed-room><i class=\\\"fas fa-circle dot\\\"></i><i class=\\\"fas fa-bed room-pict\\\"></i><span>Bed room</span><span class=devices-number>2 devices</span><span class=kwh-consumption>248 kwh</span></div></li> <li><div class=kitchen><i class=\\\"fas fa-circle dot\\\"></i><i class=\\\"fas fa-cheese room-pict\\\"></i><span>Kitchen</span><span class=devices-number>6 devices</span><span class=kwh-consumption>462 kwh</span></div></li> <li><div class=kids-room><i class=\\\"fas fa-circle dot\\\"></i><i class=\\\"fas fa-door-closed room-pict\\\"></i><span>Kids room</span><span class=devices-number>7 devices</span><span class=kwh-consumption>378 kwh</span></div></li> <li><div class=dinning-room><i class=\\\"fas fa-circle dot\\\"></i><i class=\\\"fas fa-utensils room-pict\\\"></i><span>Dinning room</span><span class=devices-number>4 devices</span><span class=kwh-consumption>435 kwh</span></div></li> <li><div class=garage><i class=\\\"fas fa-circle dot\\\"></i><i class=\\\"fas fa-warehouse room-pict\\\"></i><span>Garage</span><span class=devices-number>5 devices</span><span class=kwh-consumption>221 kwh</span></div></li> </ul> </div> </div> <div class=\\\"main-container electricity-container\\\"> <div class=\\\"\\\"></div> </div> <div class=\\\"main-container devices-container\\\"> <div class=devices-center> <label for=dropdown-devices>Devices list</label><label class=devices-dropdown for=dropdown-devices>&#9661;</label><input id=dropdown-devices name=devicesCheck type=checkbox checked=checked> </div> <div class=devices> <div class=device-name><div class=column-name>Device name</div><div class=device>Aaron's iPhone</div></div> <div class=device-room><div class=column-name>Room</div><div class=place>Living room</div></div> <div class=device-status><div class=column-name>Status</div><div class=status>Online on 32% battery power</div></div> <div class=device-mode><div class=column-name>Mode</div><div class=mode>Media player</div></div> </div> </div> </div>\";\n\n//# sourceURL=webpack:///./src/public/content.html?");

/***/ })

/******/ });