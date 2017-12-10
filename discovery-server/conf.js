/*jslint node: true */
"use strict";

exports.bServeAsHub = false;
exports.bLight = true;
exports.bIgnoreUnpairRequests = true;

exports.storage = 'sqlite';

exports.hub = 'localhost:6611';
exports.WS_PROTOCOL = "ws://";
exports.deviceName = 'Development-Discovery-Service';
exports.permanent_pairing_secret = '0000'; //JKBZaJXGtM04
exports.control_addresses = [];
exports.payout_address = 'WHERE THE MONEY CAN BE SENT TO';

exports.KEYS_FILENAME = 'keys.json';

exports.PASS_PHRASE = '123'; //k5FKBpwOrPfu

exports.port = 7000

// temporary solution, until we have only one funding hub
exports.FUNDING_HUB_ADDRESS = ''

console.log('Finished server configuration');