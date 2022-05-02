/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/MatchGame/MatchGameController.js":
/*!**********************************************!*\
  !*** ./src/MatchGame/MatchGameController.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _matchGameModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matchGameModel */ \"./src/MatchGame/matchGameModel.js\");\n/* harmony import */ var _matchGameView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matchGameView */ \"./src/MatchGame/matchGameView.js\");\n/* harmony import */ var _public_car1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/car1.jpg */ \"./public/car1.jpg\");\n\r\n\r\n\r\n\r\nclass GameController{\r\n    constructor(gameModel,gameView){\r\n        this.model = gameModel;\r\n        this.gameView = gameView;\r\n    }\r\n    init(){\r\n        this.gameView.init();\r\n        this.gameView.start = this.start.bind(this);\r\n    }\r\n    start(){\r\n        console.log(1)\r\n        const gameSettings = this.gameView.getStartOptions();\r\n        console.log(gameSettings);\r\n        if(gameSettings === null) return;\r\n        const cards = this.model.chooseCollection(gameSettings.skirt + gameSettings.difficult);\r\n        console.log(gameSettings.skirt + gameSettings.difficult);\r\n        console.log(cards);\r\n        for(let i = cards.length-1; i >= 0; i--){\r\n            let j = Math.floor(Math.random() * i + 1);\r\n            [cards[j],cards[i]] = [cards[i],cards[j]]\r\n        }\r\n        this.gameView.gameStart(cards);\r\n    }\r\n}\r\n\r\nconst gameController = new GameController(_matchGameModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"],_matchGameView__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameController);\n\n//# sourceURL=webpack://match-match-game/./src/MatchGame/MatchGameController.js?");

/***/ }),

/***/ "./src/MatchGame/matchGameModel.js":
/*!*****************************************!*\
  !*** ./src/MatchGame/matchGameModel.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cardsCollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cardsCollection */ \"./src/cardsCollection.js\");\n\r\nconsole.log(_cardsCollection__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\r\nclass GameModel{\r\n    constructor(cardsCollection){\r\n        this.cardsCollection = cardsCollection;\r\n    }\r\n    chooseCollection(name){\r\n        return this.cardsCollection.get(name);\r\n    }\r\n}\r\n\r\nconst gameModel = new GameModel(_cardsCollection__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameModel);\n\n//# sourceURL=webpack://match-match-game/./src/MatchGame/matchGameModel.js?");

/***/ }),

/***/ "./src/MatchGame/matchGameView.js":
/*!****************************************!*\
  !*** ./src/MatchGame/matchGameView.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _public_question_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/question.jpg */ \"./public/question.jpg\");\n\r\n\r\nclass GameView{\r\n    turnedCards = [];\r\n    clearedCards = 0;\r\n    constructor(){\r\n        \r\n    }\r\n\r\n    init(){\r\n        // console.log(this);\r\n        const skirtMenu = document.querySelector(\"#submenu1\");\r\n        const difficultyMenu = document.querySelector(\"#submenu2\");\r\n\r\n        const skirtButton1 = document.querySelector(\"#skirtButton1\");\r\n        const skirtButton2 = document.querySelector(\"#skirtButton2\");\r\n        const skirtButton3 = document.querySelector(\"#skirtButton3\");\r\n\r\n        const difficultyButton1 = document.querySelector(\"#difficultyButton1\");\r\n        const difficultyButton2 = document.querySelector(\"#difficultyButton2\");\r\n        const difficultyButton3 = document.querySelector(\"#difficultyButton3\");\r\n\r\n        const startButton = document.querySelector(\".nav-button3\");\r\n\r\n        skirtMenu.addEventListener(\"click\",(e)=>{\r\n            if(e.target === skirtButton1){\r\n                this.skirt = \"cars\";\r\n            }else if(e.target === skirtButton2){\r\n                this.skirt = \"emojies\";\r\n            }else if(e.target === skirtButton3){\r\n                this.skirt = \"minions\";\r\n            }\r\n            skirtButton1.style.color = this.skirt === \"cars\" ? \"blue\" : \"\";\r\n            skirtButton2.style.color = this.skirt === \"emojies\" ? \"blue\" : \"\";\r\n            skirtButton3.style.color = this.skirt === \"minions\" ? \"blue\" : \"\";\r\n        });\r\n\r\n        difficultyMenu.addEventListener(\"click\",(e)=>{\r\n            if(e.target === difficultyButton1){\r\n                this.difficult = \"5x2\";\r\n            }else if(e.target === difficultyButton2){\r\n                this.difficult = \"6x3\";\r\n            }else if(e.target === difficultyButton3){\r\n                this.difficult = \"8x3\";\r\n            }\r\n            difficultyButton1.style.color = this.difficult === \"5x2\" ? \"blue\" : \"\";\r\n            difficultyButton2.style.color = this.difficult === \"6x3\" ? \"blue\" : \"\";\r\n            difficultyButton3.style.color = this.difficult === \"8x3\" ? \"blue\" : \"\";\r\n        });\r\n\r\n        startButton.addEventListener(\"click\",()=>{\r\n            this.start()\r\n        })\r\n    }\r\n\r\n    getStartOptions(){\r\n        if(this.difficult && this.skirt){\r\n            return {\r\n                difficult: this.difficult,\r\n                skirt: this.skirt,\r\n            }\r\n        }\r\n        return null;\r\n    }\r\n\r\n    gameStart(cards){\r\n        const container = document.querySelector(\"#container\");\r\n        // const container = document.createElement(\"div\");\r\n        container.innerHTML = \"\";\r\n        // main.appendChild(container)\r\n        this.turnedCards = [];\r\n        this.clearedCards = 0;\r\n        this.stopTimer()\r\n        this.setTimer();\r\n\r\n        cards.forEach((i)=>{\r\n            const card = document.createElement(\"div\");\r\n            const cardFrontSide = document.createElement(\"div\");\r\n            const cardBackSide = document.createElement(\"div\");\r\n            const img = document.createElement(\"img\");\r\n\r\n            cardBackSide.className = \"cardBackSide\";\r\n            cardFrontSide.className = \"cardFrontSide\";\r\n            card.className = \"card\";\r\n            img.src = i;\r\n\r\n            card.style.float = \"left\";\r\n            card.style.margin = \"20px 20px 20px 20px\"\r\n            cardBackSide.style.backgroundImage = `url(${_public_question_jpg__WEBPACK_IMPORTED_MODULE_0__})`\r\n\r\n            container.append(card);\r\n            card.append(cardFrontSide);\r\n            card.append(cardBackSide);\r\n            cardFrontSide.appendChild(img);\r\n\r\n            setTimeout(()=>{\r\n                cardFrontSide.style.transform = `rotateY(${180}deg)`;\r\n                cardBackSide.style.transform = `rotateY(${360}deg)`;\r\n                cardBackSide.addEventListener(\"click\",(e)=>{\r\n                    console.log(this.turnedCards)\r\n                    if(this.turnedCards.length === 2) return;\r\n                    else if(this.turnedCards[0] === card) return;\r\n                    let deg = +cardFrontSide.style.transform.slice(8).slice(0,-4);\r\n                    let deg1 = +cardBackSide.style.transform.slice(8).slice(0,-4);\r\n\r\n                    cardFrontSide.style.transform = `rotateY(${deg+180}deg)`;\r\n                    cardBackSide.style.transform = `rotateY(${deg1+180}deg)`;\r\n\r\n                    this.turnedCards.push(card);\r\n\r\n                    if(this.turnedCards.length === 2){\r\n                        this.handleTurnCards();\r\n                    }\r\n                });\r\n            },5000)\r\n        })\r\n    }\r\n\r\n    handleTurnCards(){\r\n        const card1 = this.turnedCards[0];\r\n        const card2 = this.turnedCards[1];\r\n        const img1 = card1.querySelector(\"img\");\r\n        const img2 = card2.querySelector(\"img\");\r\n\r\n        if(img1.src === img2.src){\r\n            console.log(121414)\r\n            setTimeout(()=>{\r\n                this.turnedCards[0].querySelector(\".cardFrontSide\").remove();\r\n                this.turnedCards[1].querySelector(\".cardFrontSide\").remove();\r\n                this.turnedCards = [];\r\n                this.clearedCards += 2;\r\n                console.log(this.clearedCards)\r\n                if(this.clearedCards === 10 && this.difficult === \"5x2\"\r\n                || this.clearedCards === 18 && this.difficult === \"6x3\"\r\n                || this.clearedCards === 24 && this.difficult === \"8x3\"){\r\n                    console.log(this,2412412124124)\r\n                    this.endGame();        \r\n                }\r\n            },2000)\r\n        }else{\r\n            setTimeout(()=>{\r\n                let frontCard1 = card1.querySelector(\".cardFrontSide\");\r\n                let backCard1 = card1.querySelector(\".cardBackSide\");\r\n\r\n                let frontCard2 = card2.querySelector(\".cardFrontSide\");\r\n                let backCard2 = card2.querySelector(\".cardBackSide\");\r\n\r\n                let frontDegCard1 = +frontCard1.style.transform.slice(8).slice(0,-4);\r\n                let frontDegCard2 = +frontCard2.style.transform.slice(8).slice(0,-4);\r\n                \r\n                let backDegCard1 = +backCard1.style.transform.slice(8).slice(0,-4);\r\n                let backDegCard2 = +backCard2.style.transform.slice(8).slice(0,-4);\r\n\r\n                frontCard1.style.transform = `rotateY(${frontDegCard1+180}deg)`;\r\n                frontCard2.style.transform = `rotateY(${frontDegCard2+180}deg)`;\r\n\r\n                backCard1.style.transform = `rotateY(${backDegCard1+180}deg)`;\r\n                backCard2.style.transform = `rotateY(${backDegCard2+180}deg)`;\r\n                this.turnedCards = [];\r\n            },2000)\r\n        }\r\n    }\r\n    setTimer(){\r\n        this.time = 0;\r\n        const timer = document.createElement(\"div\");\r\n        timer.style.textAlign = \"center\";\r\n        timer.textContent = this.time;\r\n        timer.style.fontSize = \"36px\";\r\n        const container = document.querySelector(\".container\");\r\n        container.appendChild(timer);\r\n        let setTime = ()=>{\r\n            timer.textContent = ++this.time;  \r\n            timerId = setTimeout(setTime,1000);\r\n            this.timerId = timerId;\r\n        }\r\n        let timerId = setTimeout(setTime, 1000);\r\n        this.timerId = timerId;\r\n        this.timer = timer;\r\n    }\r\n    stopTimer(){\r\n        if(!this.timer) return;\r\n        clearTimeout(this.timerId);\r\n        this.timer.remove();\r\n    }\r\n    endGame(){\r\n        this.end = true;\r\n        console.log(\"BUHF DC~ GKKLFYJKCM<\")\r\n        const container = document.querySelector(\"#container\");\r\n        container.innerHTML = \"\";\r\n        const end = document.createElement(\"div\");\r\n        end.style.display = \"flex\";\r\n        end.style.justifyContent = \"center\";\r\n        end.style.alignItems = \"center\";\r\n        end.style.width = \"100%\";\r\n        end.style.height = \"100%\";\r\n        end.style.fontSize = \"36px\";\r\n        end.textContent = `Great Work and Congratulations! You did it for ${this.time} seconds`;\r\n        container.appendChild(end);\r\n        this.stopTimer();\r\n    }\r\n}\r\n\r\nconst gameView = new GameView();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameView);\n\n//# sourceURL=webpack://match-match-game/./src/MatchGame/matchGameView.js?");

/***/ }),

/***/ "./src/cardsCollection.js":
/*!********************************!*\
  !*** ./src/cardsCollection.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _public_car1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../public/car1.jpg */ \"./public/car1.jpg\");\n/* harmony import */ var _public_car2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/car2.jpg */ \"./public/car2.jpg\");\n/* harmony import */ var _public_car3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/car3.jpg */ \"./public/car3.jpg\");\n/* harmony import */ var _public_car4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/car4.jpg */ \"./public/car4.jpg\");\n/* harmony import */ var _public_car5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/car5.jpg */ \"./public/car5.jpg\");\n/* harmony import */ var _public_smile1_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/smile1.jpg */ \"./public/smile1.jpg\");\n/* harmony import */ var _public_smile2_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/smile2.jpg */ \"./public/smile2.jpg\");\n/* harmony import */ var _public_smile3_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/smile3.jpg */ \"./public/smile3.jpg\");\n/* harmony import */ var _public_smile4_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/smile4.jpg */ \"./public/smile4.jpg\");\n/* harmony import */ var _public_smile5_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/smile5.jpg */ \"./public/smile5.jpg\");\n/* harmony import */ var _public_minion1_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/minion1.png */ \"./public/minion1.png\");\n/* harmony import */ var _public_minion2_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/minion2.png */ \"./public/minion2.png\");\n/* harmony import */ var _public_minion3_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../public/minion3.png */ \"./public/minion3.png\");\n/* harmony import */ var _public_minion4_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../public/minion4.png */ \"./public/minion4.png\");\n/* harmony import */ var _public_minion5_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../public/minion5.png */ \"./public/minion5.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst cars5x2 = [_public_car1_jpg__WEBPACK_IMPORTED_MODULE_0__,_public_car2_jpg__WEBPACK_IMPORTED_MODULE_1__,_public_car3_jpg__WEBPACK_IMPORTED_MODULE_2__,_public_car4_jpg__WEBPACK_IMPORTED_MODULE_3__,_public_car5_jpg__WEBPACK_IMPORTED_MODULE_4__,_public_car1_jpg__WEBPACK_IMPORTED_MODULE_0__,_public_car2_jpg__WEBPACK_IMPORTED_MODULE_1__,_public_car3_jpg__WEBPACK_IMPORTED_MODULE_2__,_public_car4_jpg__WEBPACK_IMPORTED_MODULE_3__,_public_car5_jpg__WEBPACK_IMPORTED_MODULE_4__];\r\nconst cars6x3 = [...cars5x2,_public_car1_jpg__WEBPACK_IMPORTED_MODULE_0__,_public_car2_jpg__WEBPACK_IMPORTED_MODULE_1__,_public_car3_jpg__WEBPACK_IMPORTED_MODULE_2__,_public_car4_jpg__WEBPACK_IMPORTED_MODULE_3__,_public_car1_jpg__WEBPACK_IMPORTED_MODULE_0__,_public_car2_jpg__WEBPACK_IMPORTED_MODULE_1__,_public_car3_jpg__WEBPACK_IMPORTED_MODULE_2__,_public_car4_jpg__WEBPACK_IMPORTED_MODULE_3__];\r\nconst cars8x3 = [...cars5x2,...cars5x2,_public_car1_jpg__WEBPACK_IMPORTED_MODULE_0__,_public_car2_jpg__WEBPACK_IMPORTED_MODULE_1__,_public_car1_jpg__WEBPACK_IMPORTED_MODULE_0__,_public_car2_jpg__WEBPACK_IMPORTED_MODULE_1__];\r\nconst emojies5x2 = [_public_smile1_jpg__WEBPACK_IMPORTED_MODULE_5__,_public_smile2_jpg__WEBPACK_IMPORTED_MODULE_6__,_public_smile3_jpg__WEBPACK_IMPORTED_MODULE_7__,_public_smile4_jpg__WEBPACK_IMPORTED_MODULE_8__,_public_smile5_jpg__WEBPACK_IMPORTED_MODULE_9__,_public_smile1_jpg__WEBPACK_IMPORTED_MODULE_5__,_public_smile2_jpg__WEBPACK_IMPORTED_MODULE_6__,_public_smile3_jpg__WEBPACK_IMPORTED_MODULE_7__,_public_smile4_jpg__WEBPACK_IMPORTED_MODULE_8__,_public_smile5_jpg__WEBPACK_IMPORTED_MODULE_9__];\r\nconst emojies6x3 = [...emojies5x2,_public_smile1_jpg__WEBPACK_IMPORTED_MODULE_5__,_public_smile2_jpg__WEBPACK_IMPORTED_MODULE_6__,_public_smile3_jpg__WEBPACK_IMPORTED_MODULE_7__,_public_smile4_jpg__WEBPACK_IMPORTED_MODULE_8__,_public_smile1_jpg__WEBPACK_IMPORTED_MODULE_5__,_public_smile2_jpg__WEBPACK_IMPORTED_MODULE_6__,_public_smile3_jpg__WEBPACK_IMPORTED_MODULE_7__,_public_smile4_jpg__WEBPACK_IMPORTED_MODULE_8__];\r\nconst emojies8x3 = [...emojies5x2,...emojies5x2,_public_smile1_jpg__WEBPACK_IMPORTED_MODULE_5__,_public_smile2_jpg__WEBPACK_IMPORTED_MODULE_6__,_public_smile1_jpg__WEBPACK_IMPORTED_MODULE_5__,_public_smile2_jpg__WEBPACK_IMPORTED_MODULE_6__];\r\nconst minions5x2 = [_public_minion1_png__WEBPACK_IMPORTED_MODULE_10__,_public_minion2_png__WEBPACK_IMPORTED_MODULE_11__,_public_minion3_png__WEBPACK_IMPORTED_MODULE_12__,_public_minion4_png__WEBPACK_IMPORTED_MODULE_13__,_public_minion5_png__WEBPACK_IMPORTED_MODULE_14__,_public_minion1_png__WEBPACK_IMPORTED_MODULE_10__,_public_minion2_png__WEBPACK_IMPORTED_MODULE_11__,_public_minion3_png__WEBPACK_IMPORTED_MODULE_12__,_public_minion4_png__WEBPACK_IMPORTED_MODULE_13__,_public_minion5_png__WEBPACK_IMPORTED_MODULE_14__];\r\nconst minions6x3 = [...minions5x2,_public_minion1_png__WEBPACK_IMPORTED_MODULE_10__,_public_minion2_png__WEBPACK_IMPORTED_MODULE_11__,_public_minion3_png__WEBPACK_IMPORTED_MODULE_12__,_public_minion4_png__WEBPACK_IMPORTED_MODULE_13__,_public_minion1_png__WEBPACK_IMPORTED_MODULE_10__,_public_minion2_png__WEBPACK_IMPORTED_MODULE_11__,_public_minion3_png__WEBPACK_IMPORTED_MODULE_12__,_public_minion4_png__WEBPACK_IMPORTED_MODULE_13__];\r\nconst minions8x3 = [...minions5x2,...minions5x2,_public_minion1_png__WEBPACK_IMPORTED_MODULE_10__,_public_minion2_png__WEBPACK_IMPORTED_MODULE_11__,_public_minion1_png__WEBPACK_IMPORTED_MODULE_10__,_public_minion2_png__WEBPACK_IMPORTED_MODULE_11__];\r\n\r\nconst cardsCollection = new Map([\r\n    [\"cars5x2\", cars5x2],\r\n    [\"cars6x3\", cars6x3],\r\n    [\"cars8x3\", cars8x3],\r\n    [\"emojies5x2\", emojies5x2],\r\n    [\"emojies6x3\", emojies6x3],\r\n    [\"emojies8x3\", emojies8x3],\r\n    [\"minions5x2\", minions5x2],\r\n    [\"minions6x3\", minions6x3],\r\n    [\"minions8x3\", minions8x3],\r\n]);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cardsCollection);\n\n//# sourceURL=webpack://match-match-game/./src/cardsCollection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MatchGame_MatchGameController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MatchGame/MatchGameController */ \"./src/MatchGame/MatchGameController.js\");\n\r\n// import img from \"../public/car1.jpg\"\r\n// const el = document.querySelector(\"div\");\r\n// el.textContent = gameController.name;\r\n_MatchGame_MatchGameController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init()\r\nconsole.log(_MatchGame_MatchGameController__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://match-match-game/./src/index.js?");

/***/ }),

/***/ "./public/car1.jpg":
/*!*************************!*\
  !*** ./public/car1.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2aaa3acd32a58d0e8681.jpg\";\n\n//# sourceURL=webpack://match-match-game/./public/car1.jpg?");

/***/ }),

/***/ "./public/car2.jpg":
/*!*************************!*\
  !*** ./public/car2.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f8bc37eaecd6b695b358.jpg\";\n\n//# sourceURL=webpack://match-match-game/./public/car2.jpg?");

/***/ }),

/***/ "./public/car3.jpg":
/*!*************************!*\
  !*** ./public/car3.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a24977bc301f1689650b.jpg\";\n\n//# sourceURL=webpack://match-match-game/./public/car3.jpg?");

/***/ }),

/***/ "./public/car4.jpg":
/*!*************************!*\
  !*** ./public/car4.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"670c5379d077a5718aa2.jpg\";\n\n//# sourceURL=webpack://match-match-game/./public/car4.jpg?");

/***/ }),

/***/ "./public/car5.jpg":
/*!*************************!*\
  !*** ./public/car5.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3fa28a1e49237a4e79e0.jpg\";\n\n//# sourceURL=webpack://match-match-game/./public/car5.jpg?");

/***/ }),

/***/ "./public/minion1.png":
/*!****************************!*\
  !*** ./public/minion1.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"20d031e5e9478c4dc321.png\";\n\n//# sourceURL=webpack://match-match-game/./public/minion1.png?");

/***/ }),

/***/ "./public/minion2.png":
/*!****************************!*\
  !*** ./public/minion2.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d0136552f9ed385937b3.png\";\n\n//# sourceURL=webpack://match-match-game/./public/minion2.png?");

/***/ }),

/***/ "./public/minion3.png":
/*!****************************!*\
  !*** ./public/minion3.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"419ec785b5ce01d3d48b.png\";\n\n//# sourceURL=webpack://match-match-game/./public/minion3.png?");

/***/ }),

/***/ "./public/minion4.png":
/*!****************************!*\
  !*** ./public/minion4.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1971ea2cd3f35c38f550.png\";\n\n//# sourceURL=webpack://match-match-game/./public/minion4.png?");

/***/ }),

/***/ "./public/minion5.png":
/*!****************************!*\
  !*** ./public/minion5.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eb4fee77731135e75f0d.png\";\n\n//# sourceURL=webpack://match-match-game/./public/minion5.png?");

/***/ }),

/***/ "./public/question.jpg":
/*!*****************************!*\
  !*** ./public/question.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a6a4f943fd10eddf2e93.jpg\";\n\n//# sourceURL=webpack://match-match-game/./public/question.jpg?");

/***/ }),

/***/ "./public/smile1.jpg":
/*!***************************!*\
  !*** ./public/smile1.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ddfe40809ba0421b67eb.jpg\";\n\n//# sourceURL=webpack://match-match-game/./public/smile1.jpg?");

/***/ }),

/***/ "./public/smile2.jpg":
/*!***************************!*\
  !*** ./public/smile2.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3fd9c3b2bfa40f695233.jpg\";\n\n//# sourceURL=webpack://match-match-game/./public/smile2.jpg?");

/***/ }),

/***/ "./public/smile3.jpg":
/*!***************************!*\
  !*** ./public/smile3.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3bd95455825a69a4e7a2.jpg\";\n\n//# sourceURL=webpack://match-match-game/./public/smile3.jpg?");

/***/ }),

/***/ "./public/smile4.jpg":
/*!***************************!*\
  !*** ./public/smile4.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"948ea4fdf3f677e6bda1.jpg\";\n\n//# sourceURL=webpack://match-match-game/./public/smile4.jpg?");

/***/ }),

/***/ "./public/smile5.jpg":
/*!***************************!*\
  !*** ./public/smile5.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cb5fa0d2aca7e19fb6fa.jpg\";\n\n//# sourceURL=webpack://match-match-game/./public/smile5.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;