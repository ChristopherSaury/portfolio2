const _0x4f30c0 = _0x3b36;
(function (_0x5107ef, _0x1794a5) {
  const _0x23c2d7 = _0x3b36,
    _0xf49abf = _0x5107ef();
  while (!![]) {
    try {
      const _0x52fcf9 =
        (-parseInt(_0x23c2d7(0xc3)) / 0x1) * (parseInt(_0x23c2d7(0xb2)) / 0x2) +
        -parseInt(_0x23c2d7(0xbb)) / 0x3 +
        -parseInt(_0x23c2d7(0xd8)) / 0x4 +
        (-parseInt(_0x23c2d7(0xd5)) / 0x5) *
          (-parseInt(_0x23c2d7(0xc2)) / 0x6) +
        (-parseInt(_0x23c2d7(0xda)) / 0x7) * (parseInt(_0x23c2d7(0xc7)) / 0x8) +
        (parseInt(_0x23c2d7(0xb5)) / 0x9) * (-parseInt(_0x23c2d7(0xd3)) / 0xa) +
        parseInt(_0x23c2d7(0xb9)) / 0xb;
      if (_0x52fcf9 === _0x1794a5) break;
      else _0xf49abf["push"](_0xf49abf["shift"]());
    } catch (_0x53daf6) {
      _0xf49abf["push"](_0xf49abf["shift"]());
    }
  }
})(_0x4043, 0xa6f5e),
  $(document)[_0x4f30c0(0xad)](function () {
    const _0x362d41 = _0x4f30c0;
    var _0x5112e3 = new Typed(_0x362d41(0xba), {
      strings: ["Développeur\x20web\x20junior", _0x362d41(0xcb)],
      typeSpeed: 0x64,
      backSpeed: 0x3c,
      loop: !![],
    });
  }),
  window[_0x4f30c0(0xae)]("scroll", reveal);
function reveal() {
  const _0x4a6c23 = _0x4f30c0;
  let _0x435e2a = document[_0x4a6c23(0xcc)](_0x4a6c23(0xd4));
  for (
    let _0x23cc96 = 0x0;
    _0x23cc96 < _0x435e2a[_0x4a6c23(0xd2)];
    _0x23cc96++
  ) {
    let _0x21e926 = window[_0x4a6c23(0xd0)],
      _0x1d38ad =
        _0x435e2a[_0x23cc96]["getBoundingClientRect"]()[_0x4a6c23(0xc6)],
      _0x5c0d2c = 0x96;
    _0x1d38ad < _0x21e926 - _0x5c0d2c
      ? _0x435e2a[_0x23cc96][_0x4a6c23(0xc4)][_0x4a6c23(0xd7)]("active")
      : _0x435e2a[_0x23cc96][_0x4a6c23(0xc4)][_0x4a6c23(0xc0)](_0x4a6c23(0xb4));
  }
}
(function () {
  const _0x2c7e35 = _0x4f30c0;
  emailjs[_0x2c7e35(0xb3)](_0x2c7e35(0xbd));
})();
function resetForm() {
  const _0x33f4fd = _0x4f30c0;
  document[_0x33f4fd(0xca)](_0x33f4fd(0xd6))[_0x33f4fd(0xb1)]();
}
function validate() {
  const _0x4c6e15 = _0x4f30c0;
  let _0x3d59b7 = document["getElementById"](_0x4c6e15(0xc9)),
    _0x265e9c = document[_0x4c6e15(0xca)](_0x4c6e15(0xb6)),
    _0x4ee3ab = document[_0x4c6e15(0xca)]("subject"),
    _0x381f1e = document["getElementById"](_0x4c6e15(0xbf)),
    _0x2556f0 = document[_0x4c6e15(0xca)](_0x4c6e15(0xd1)),
    _0x4f739e = document["getElementById"](_0x4c6e15(0xbe));
  _0x4f739e["addEventListener"](_0x4c6e15(0xbc), (_0x5848cc) => {
    const _0x3bd510 = _0x4c6e15;
    _0x5848cc[_0x3bd510(0xb7)](),
      _0x3d59b7["value"] == "" ||
      _0x265e9c["value"] == "" ||
      _0x4ee3ab[_0x3bd510(0xc8)] == "" ||
      _0x381f1e[_0x3bd510(0xc8)] == "" ||
      _0x2556f0["value"] == ""
        ? emptyerror()
        : (sendmail(
            _0x3d59b7[_0x3bd510(0xc8)],
            _0x265e9c[_0x3bd510(0xc8)],
            _0x4ee3ab[_0x3bd510(0xc8)],
            _0x381f1e[_0x3bd510(0xc8)],
            _0x2556f0[_0x3bd510(0xc8)]
          ),
          success(),
          resetForm());
  });
}
validate();
function sendmail(_0x255f0c, _0x3119fb, _0x56a389, _0x56b02b, _0x1345ff) {
  const _0x3624e9 = _0x4f30c0;
  emailjs[_0x3624e9(0xd9)](_0x3624e9(0xb8), _0x3624e9(0xaf), {
    from_name: _0x255f0c,
    from_firstname: _0x3119fb,
    email: _0x56b02b,
    subject: _0x56a389,
    message: _0x1345ff,
  });
}
function emptyerror() {
  const _0xf3cf21 = _0x4f30c0;
  swal({
    title: _0xf3cf21(0xcf),
    text: _0xf3cf21(0xce),
    icon: _0xf3cf21(0xc1),
    button: "Fermer",
  });
}
function _0x3b36(_0x2d1565, _0x1a3b1a) {
  const _0x404317 = _0x4043();
  return (
    (_0x3b36 = function (_0x3b365a, _0x371122) {
      _0x3b365a = _0x3b365a - 0xad;
      let _0x48b7ab = _0x404317[_0x3b365a];
      return _0x48b7ab;
    }),
    _0x3b36(_0x2d1565, _0x1a3b1a)
  );
}
function error() {
  const _0x296ff2 = _0x4f30c0;
  swal({
    title: "Oops...!",
    text: _0x296ff2(0xc5),
    icon: _0x296ff2(0xc1),
    button: _0x296ff2(0xb0),
  });
}
function success() {
  const _0x6b32a0 = _0x4f30c0;
  swal({
    title: _0x6b32a0(0xcd),
    text: "",
    icon: "success",
    button: _0x6b32a0(0xb0),
  });
}
function _0x4043() {
  const _0x2b254d = [
    "remove",
    "error",
    "3428598bcVUBM",
    "297cflNgk",
    "classList",
    "Erreur\x20lors\x20de\x20l\x27envoi",
    "top",
    "809272QMhfkV",
    "value",
    "name",
    "getElementById",
    "Soyez\x20les\x20bienvenus\x20sur\x20mon\x20portfolio",
    "querySelectorAll",
    "Message\x20Envoyé!",
    "Vous\x20devez\x20remplir\x20les\x20champs\x20demandés",
    "Message\x20non\x20envoyé!",
    "innerHeight",
    "message",
    "length",
    "110rYHVfo",
    ".reveal",
    "5quzrna",
    "contact-form",
    "add",
    "5106240KZiXkj",
    "send",
    "63gqPdQG",
    "ready",
    "addEventListener",
    "template_een2gin",
    "Fermer",
    "reset",
    "482TwjsSd",
    "init",
    "active",
    "735669RKplXh",
    "firstname",
    "preventDefault",
    "service_6wbx0ej",
    "47348862aIccxe",
    ".typing",
    "3102858dDtbcR",
    "click",
    "user_3q1josetWP00Qy0dNzQmi",
    "submit-btn",
    "email",
  ];
  _0x4043 = function () {
    return _0x2b254d;
  };
  return _0x4043();
}
