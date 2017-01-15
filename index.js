'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bake_cookie = bake_cookie;
exports.read_cookie = read_cookie;
exports.delete_cookie = delete_cookie;
function bake_cookie(name, value) {
  var cookie = [name, '=', JSON.stringify(value), '; domain_.', window.location.host.toString(), '; path=/;'].join('');
  document.cookie = cookie;
}

// reads a cookie according to the given name
function read_cookie(name) {
  var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
  result = result != null ? JSON.parse(result[1]) : [];
  return result;
}

function delete_cookie(name) {
  document.cookie = [name, '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/; domain.', window.location.host.toString()].join('');
}