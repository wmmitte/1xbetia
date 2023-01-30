document.getElementById("cle").value = 2.5;
document.getElementById("cote").value = 1.7;
document.getElementById("mise").value = 200;
document.getElementById("budget").value = 2000;

function evaluateIa() {
  var _budget = Math.ceil(parseFloat(document.getElementById("budget").value));
  var _cle = Math.ceil(parseFloat(document.getElementById("cle").value));
  var _cote = Math.ceil(parseFloat(document.getElementById("cote").value));
  var _mise = Math.ceil(parseFloat(document.getElementById("mise").value));

  var _1mObj = document.getElementById("1m");
  var _1pObj = document.getElementById("1p");
  var _1gObj = document.getElementById("1g");
  var _1sObj = document.getElementById("1s");
  var _1rObj = document.getElementById("1r");

  var _2mObj = document.getElementById("2m");
  var _2pObj = document.getElementById("2p");
  var _2gObj = document.getElementById("2g");
  var _2sObj = document.getElementById("2s");
  var _2rObj = document.getElementById("2r");

  var _3mObj = document.getElementById("3m");
  var _3pObj = document.getElementById("3p");
  var _3gObj = document.getElementById("3g");
  var _3sObj = document.getElementById("3s");
  var _3rObj = document.getElementById("3r");

  var _4mObj = document.getElementById("4m");
  var _4pObj = document.getElementById("4p");
  var _4gObj = document.getElementById("4g");
  var _4sObj = document.getElementById("4s");
  var _4rObj = document.getElementById("4r");

  var _5mObj = document.getElementById("5m");
  var _5pObj = document.getElementById("5p");
  var _5gObj = document.getElementById("5g");
  var _5sObj = document.getElementById("5s");
  var _5rObj = document.getElementById("5r");

  // line 1
  document.getElementById("l1").className = "";
  document.getElementById("1r").className = "";
  _1mObj.innerHTML = _mise;
  _1pObj.innerHTML = _mise;
  _1gObj.innerHTML =
    Math.ceil(parseFloat(_1mObj.innerHTML * _cote) - parseFloat(_1mObj.innerHTML));
  _1rObj.innerHTML =
    _budget - Math.ceil(parseFloat(_1pObj.innerHTML));
  
  _1sObj.innerHTML = Math.ceil(_budget + parseFloat(_1gObj.innerHTML));
  if (
    parseFloat(_1gObj.innerHTML) > 0 &&
    parseFloat(_1pObj.innerHTML) < _budget
  ) {
    document.getElementById("l1").className = "text-green-500";
  }
  if (parseFloat(_1rObj.innerHTML) < 0) {
    document.getElementById("1r").className = "bg-red-500 text-white rounded p-1";
  }

  // line 2
  document.getElementById("l2").className = "";
  document.getElementById("2r").className = "";
  _2mObj.innerHTML = Math.ceil(_mise * Math.pow(_cle, 1));
  _2pObj.innerHTML =
    Math.ceil(parseFloat(_1pObj.innerHTML) + parseFloat(_2mObj.innerHTML));
  _2gObj.innerHTML =
    Math.ceil(parseFloat(_2mObj.innerHTML) * _cote - parseFloat(_2pObj.innerHTML));
  _2sObj.innerHTML = Math.ceil(_budget + parseFloat(_2gObj.innerHTML));
  _2rObj.innerHTML = Math.ceil(_budget - parseFloat(_2pObj.innerHTML));

  if (
    parseFloat(_2gObj.innerHTML) > 0 &&
    parseFloat(_2pObj.innerHTML) < _budget
  ) {
    document.getElementById("l2").className = "text-green-500";
  }
  if (parseFloat(_2rObj.innerHTML) < 0 ) {
    document.getElementById("2r").className = "bg-red-500 text-white rounded p-1";
  }

  // line 3
  document.getElementById("l3").className = "";
  document.getElementById("3r").className = "";
  _3mObj.innerHTML = Math.ceil(_mise * Math.pow(_cle, 2));
  _3pObj.innerHTML =
    Math.ceil(parseFloat(_2pObj.innerHTML) + parseFloat(_3mObj.innerHTML));
  _3gObj.innerHTML =
    Math.ceil(parseFloat(_3mObj.innerHTML) * _cote - parseFloat(_3pObj.innerHTML));
  _3sObj.innerHTML = Math.ceil(_budget + parseFloat(_3gObj.innerHTML));
  _3rObj.innerHTML = Math.ceil(_budget - parseFloat(_3pObj.innerHTML));
  if (
    parseFloat(_3gObj.innerHTML) > 0 &&
    parseFloat(_3pObj.innerHTML) < _budget
  ) {
    document.getElementById("l3").className = "text-green-500";
  }
  if (parseFloat(_3rObj.innerHTML) < 0 ) {
    document.getElementById("3r").className = "bg-red-500 text-white rounded p-1";
  }

  // line 4
  document.getElementById("l4").className = "";
  document.getElementById("4r").className = "";
  _4mObj.innerHTML = Math.ceil(_mise * Math.pow(_cle, 3));
  _4pObj.innerHTML =
    Math.ceil(parseFloat(_3pObj.innerHTML) + parseFloat(_4mObj.innerHTML));
  _4gObj.innerHTML =
    Math.ceil(parseFloat(_4mObj.innerHTML) * _cote - parseFloat(_4pObj.innerHTML));
  _4sObj.innerHTML = Math.ceil(_budget + parseFloat(_4gObj.innerHTML));
  _4rObj.innerHTML = Math.ceil(_budget - parseFloat(_4pObj.innerHTML));
  if (
    parseFloat(_4gObj.innerHTML) > 0 &&
    parseFloat(_4pObj.innerHTML) < _budget
  ) {
    document.getElementById("l4").className = "text-green-500";
  }

  if (parseFloat(_4rObj.innerHTML) < 0 ) {
    document.getElementById("4r").className = "bg-red-500 text-white rounded p-1";
  }

  // line 5
  document.getElementById("l5").className = "";
  document.getElementById("5r").className = "";
  _5mObj.innerHTML = Math.ceil(_mise * Math.pow(_cle, 4));
  _5pObj.innerHTML =
    Math.ceil(parseFloat(_4pObj.innerHTML) + parseFloat(_5mObj.innerHTML));
  _5gObj.innerHTML =
    Math.ceil(parseFloat(_5mObj.innerHTML) * _cote - parseFloat(_5pObj.innerHTML));
  _5sObj.innerHTML = Math.ceil(_budget + parseFloat(_5gObj.innerHTML));
  _5rObj.innerHTML = Math.ceil(_budget - parseFloat(_5rObj.innerHTML));
  if (
    parseFloat(_5gObj.innerHTML) > 0 &&
    parseFloat(_5pObj.innerHTML) < _budget
  ) {
    document.getElementById("l5").className = "text-green-500";
  }
  if (parseFloat(_5rObj.innerHTML) < 0 ) {
    document.getElementById("5r").className = "bg-red-500 text-white rounded p-1";
  }
}

evaluateIa();