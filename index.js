const WebSqlPouchCore = require("./pouchdb-adapter-websql-core");

const websql = require("./websql");

function NodeWebSqlPouch(opts, callback) {
  var _opts = Object.assign(
    {
      websql: websql, // pass node-websql in as our "openDatabase" function
    },
    opts
  );

  WebSqlPouchCore.call(this, _opts, callback);
}

// overrides for normal WebSQL behavior in the browser
NodeWebSqlPouch.valid = function () {
  return true;
};
NodeWebSqlPouch.use_prefix = false; // no prefix necessary in Node

module.exports = function (PouchDB) {
  PouchDB.adapter("websql", NodeWebSqlPouch, true);
};
