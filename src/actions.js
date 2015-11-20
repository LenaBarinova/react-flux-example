"use strict";

let Dispatcher = require('./dispatcher');
const ACTION_TYPES = require('./action-types');

let Actions = {
  switchLanguage(language) {
    Dispatcher.dispatch({
      actionType: ACTION_TYPES.SWITCH_LANGUAGE,
      language: language
    });
  },
  initApp() {
    Dispatcher.dispatch({
      actionType: ACTION_TYPES.INIT_APP
    });
  }
};

module.exports = Actions;