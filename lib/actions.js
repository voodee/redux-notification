'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.showNotification = showNotification;
exports.removeNotification = removeNotification;

var _constants = require('./constants');

function showNotification(payload) {
    return {
        type: _constants.SHOW_NOTIFICATION,
        payload: payload
    };
}

function removeNotification(uid) {
    return {
        type: _constants.REMOVE_NOTIFICATION,
        uid: uid
    };
}