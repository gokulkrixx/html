const users = require('../db/models/users');
let success_function  = require("./response-handler.js").success_function
let error_function = require("./response-handler.js").error_function


exports.checkLogin 