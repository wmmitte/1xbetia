document.getElementById("cle").value = 2.5;
document.getElementById("cote").value = 1.7;
document.getElementById("mise").value = 200;
document.getElementById("budget").value = 2000;

function evaluateIa() {
  var _budget = parseFloat(document.getElementById("budget").value);
  var _cle = parseFloat(document.getElementById("cle").value);
  var _cote = parseFloat(document.getElementById("cote").value);
  var _mise = parseFloat(document.getElementById("mise").value);

  var _1mObj = document.getElementById("1m");
  var _1pObj = document.getElementById("1p");
  var _1gObj = document.getElementById("1g");
  var _1sObj = document.getElementById("1s");

  var _2mObj = document.getElementById("2m");
  var _2pObj = document.getElementById("2p");
  var _2gObj = document.getElementById("2g");
  var _2sObj = document.getElementById("2s");

  var _3mObj = document.getElementById("3m");
  var _3pObj = document.getElementById("3p");
  var _3gObj = document.getElementById("3g");
  var _3sObj = document.getElementById("3s");

  var _4mObj = document.getElementById("4m");
  var _4pObj = document.getElementById("4p");
  var _4gObj = document.getElementById("4g");
  var _4sObj = document.getElementById("4s");

  var _5mObj = document.getElementById("5m");
  var _5pObj = document.getElementById("5p");
  var _5gObj = document.getElementById("5g");
  var _5sObj = document.getElementById("5s");

  // line 1
  document.getElementById("l1").className = "";
  _1mObj.innerHTML = _mise;
  _1pObj.innerHTML = _mise;
  _1gObj.innerHTML =
    parseFloat(_1mObj.innerHTML * _cote) - parseFloat(_1mObj.innerHTML);
  _1sObj.innerHTML = _budget + parseFloat(_1gObj.innerHTML);
  if (
    parseFloat(_1gObj.innerHTML) > 0 &&
    parseFloat(_1pObj.innerHTML) < _budget
  ) {
    document.getElementById("l1").className = "winner-row";
  }

  // line 2
  document.getElementById("l2").className = "";
  _2mObj.innerHTML = _mise * Math.pow(_cle, 1);
  _2pObj.innerHTML =
    parseFloat(_1pObj.innerHTML) + parseFloat(_2mObj.innerHTML);
  _2gObj.innerHTML =
    parseFloat(_2mObj.innerHTML) * _cote - parseFloat(_2pObj.innerHTML);
  _2sObj.innerHTML = _budget + parseFloat(_2gObj.innerHTML);
  if (
    parseFloat(_2gObj.innerHTML) > 0 &&
    parseFloat(_2pObj.innerHTML) < _budget
  ) {
    document.getElementById("l2").className = "winner-row";
  }

  // line 3
  document.getElementById("l3").className = "";
  _3mObj.innerHTML = _mise * Math.pow(_cle, 2);
  _3pObj.innerHTML =
    parseFloat(_2pObj.innerHTML) + parseFloat(_3mObj.innerHTML);
  _3gObj.innerHTML =
    parseFloat(_3mObj.innerHTML) * _cote - parseFloat(_3pObj.innerHTML);
  _3sObj.innerHTML = _budget + parseFloat(_3gObj.innerHTML);
  if (
    parseFloat(_3gObj.innerHTML) > 0 &&
    parseFloat(_3pObj.innerHTML) < _budget
  ) {
    document.getElementById("l3").className = "winner-row";
  }

  // line 4
  document.getElementById("l4").className = "";
  _4mObj.innerHTML = _mise * Math.pow(_cle, 3);
  _4pObj.innerHTML =
    parseFloat(_3pObj.innerHTML) + parseFloat(_4mObj.innerHTML);
  _4gObj.innerHTML =
    parseFloat(_4mObj.innerHTML) * _cote - parseFloat(_4pObj.innerHTML);
  _4sObj.innerHTML = _budget + parseFloat(_4gObj.innerHTML);
  if (
    parseFloat(_4gObj.innerHTML) > 0 &&
    parseFloat(_4pObj.innerHTML) < _budget
  ) {
    document.getElementById("l4").className = "winner-row";
  }

  // line 5
  document.getElementById("l5").className = "";
  _5mObj.innerHTML = _mise * Math.pow(_cle, 4);
  _5pObj.innerHTML =
    parseFloat(_4pObj.innerHTML) + parseFloat(_5mObj.innerHTML);
  _5gObj.innerHTML =
    parseFloat(_5mObj.innerHTML) * _cote - parseFloat(_5pObj.innerHTML);
  _5sObj.innerHTML = _budget + parseFloat(_5gObj.innerHTML);
  if (
    parseFloat(_5gObj.innerHTML) > 0 &&
    parseFloat(_5pObj.innerHTML) < _budget
  ) {
    document.getElementById("l5").className = "winner-row";
  }
}
