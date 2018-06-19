'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
function platzom(text) {
  var completeTr = '';

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = text.toLowerCase().split(' ')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var str = _step.value;

      var tr = str;

      tr = isPal(str);
      tr = endsWith(tr, 'ar');
      tr = startsWith(tr, 'z');
      tr = moreThan(tr, 10);

      completeTr += tr + ' ';
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return completeTr;
}

// Primera regla: si termina con AR se le quita el AR
function endsWith(str, end) {
  var tr = str;

  if (str.toLowerCase().endsWith(end)) {
    tr = str.slice(0, -2);
  }

  return tr;
}

// Segunda regla: si empieza con Z se le agrega PE al final
function startsWith(str, start) {
  var tr = str;

  if (tr.toLowerCase().startsWith(start)) {
    tr = str + 'pe';
  }

  return tr;
}

// Tercer regla: si tiene mas de diez caracteres se pone un - en medio
function moreThan(str, n) {
  var tr = str;
  var length = str.length;

  if (length >= n) {
    var first = tr.slice(0, Math.round(length / 2));
    var second = tr.slice(Math.round(length / 2));

    tr = first + '-' + second;
  }

  return tr;
}

// Cuarta regla: si es un palindromo no se aplica ninguna regla y se intercalan las mayusculas
function isPal(str) {
  var array = str.split('');
  var pal = array.reverse().join('');
  var tr = str;

  if (pal == str) {
    tr = '';

    for (var i = 0; i < array.length; i++) {
      tr += i % 2 == 0 ? array[i].toUpperCase() : array[i].toLowerCase();
    }
  }

  return tr;
}
