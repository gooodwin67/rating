/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Ni = { ROTATE: 0, DOLLY: 1, PAN: 2 }, Ci = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Dh = 0, qa = 1, Nh = 2, Tc = 1, Uh = 2, yn = 3, bn = 0, Fe = 1, an = 2, kn = 0, Ui = 1, ja = 2, $a = 3, Ka = 4, Fh = 5, si = 100, Oh = 101, Bh = 102, kh = 103, zh = 104, Hh = 200, Vh = 201, Gh = 202, Wh = 203, vo = 204, xo = 205, Xh = 206, Yh = 207, qh = 208, jh = 209, $h = 210, Kh = 211, Zh = 212, Jh = 213, Qh = 214, yo = 0, Mo = 1, So = 2, ki = 3, Eo = 4, Ao = 5, bo = 6, To = 7, pa = 0, tu = 1, eu = 2, zn = 0, nu = 1, iu = 2, su = 3, ru = 4, ou = 5, au = 6, lu = 7, Za = "attached", cu = "detached", wc = 300, zi = 301, Hi = 302, wo = 303, Ro = 304, Ar = 306, Vi = 1e3, On = 1001, vr = 1002, Ce = 1003, Rc = 1004, ds = 1005, ze = 1006, hr = 1007, Sn = 1008, Tn = 1009, Cc = 1010, Pc = 1011, xs = 1012, ma = 1013, li = 1014, nn = 1015, ws = 1016, ga = 1017, _a = 1018, Gi = 1020, Lc = 35902, Ic = 1021, Dc = 1022, qe = 1023, Nc = 1024, Uc = 1025, Fi = 1026, Wi = 1027, va = 1028, xa = 1029, Fc = 1030, ya = 1031, Ma = 1033, ur = 33776, dr = 33777, fr = 33778, pr = 33779, Co = 35840, Po = 35841, Lo = 35842, Io = 35843, Do = 36196, No = 37492, Uo = 37496, Fo = 37808, Oo = 37809, Bo = 37810, ko = 37811, zo = 37812, Ho = 37813, Vo = 37814, Go = 37815, Wo = 37816, Xo = 37817, Yo = 37818, qo = 37819, jo = 37820, $o = 37821, mr = 36492, Ko = 36494, Zo = 36495, Oc = 36283, Jo = 36284, Qo = 36285, ta = 36286, hu = 2200, uu = 2201, du = 2202, ys = 2300, Ms = 2301, Pr = 2302, Pi = 2400, Li = 2401, xr = 2402, Sa = 2500, fu = 2501, pu = 0, Bc = 1, ea = 2, mu = 3200, gu = 3201, Ea = 0, _u = 1, Fn = "", Me = "srgb", Ie = "srgb-linear", yr = "linear", se = "srgb", fi = 7680, Ja = 519, vu = 512, xu = 513, yu = 514, kc = 515, Mu = 516, Su = 517, Eu = 518, Au = 519, na = 35044, wx = 35048, Qa = "300 es", En = 2e3, Mr = 2001;
class Gn {
  addEventListener(t, e) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[t] === void 0 && (n[t] = []), n[t].indexOf(e) === -1 && n[t].push(e);
  }
  hasEventListener(t, e) {
    if (this._listeners === void 0) return false;
    const n = this._listeners;
    return n[t] !== void 0 && n[t].indexOf(e) !== -1;
  }
  removeEventListener(t, e) {
    if (this._listeners === void 0) return;
    const i = this._listeners[t];
    if (i !== void 0) {
      const r = i.indexOf(e);
      r !== -1 && i.splice(r, 1);
    }
  }
  dispatchEvent(t) {
    if (this._listeners === void 0) return;
    const n = this._listeners[t.type];
    if (n !== void 0) {
      t.target = this;
      const i = n.slice(0);
      for (let r = 0, o = i.length; r < o; r++) i[r].call(this, t);
      t.target = null;
    }
  }
}
const Ee = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let tl = 1234567;
const ps = Math.PI / 180, Xi = 180 / Math.PI;
function je() {
  const s = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Ee[s & 255] + Ee[s >> 8 & 255] + Ee[s >> 16 & 255] + Ee[s >> 24 & 255] + "-" + Ee[t & 255] + Ee[t >> 8 & 255] + "-" + Ee[t >> 16 & 15 | 64] + Ee[t >> 24 & 255] + "-" + Ee[e & 63 | 128] + Ee[e >> 8 & 255] + "-" + Ee[e >> 16 & 255] + Ee[e >> 24 & 255] + Ee[n & 255] + Ee[n >> 8 & 255] + Ee[n >> 16 & 255] + Ee[n >> 24 & 255]).toLowerCase();
}
function Ht(s, t, e) {
  return Math.max(t, Math.min(e, s));
}
function Aa(s, t) {
  return (s % t + t) % t;
}
function bu(s, t, e, n, i) {
  return n + (s - t) * (i - n) / (e - t);
}
function Tu(s, t, e) {
  return s !== t ? (e - s) / (t - s) : 0;
}
function ms(s, t, e) {
  return (1 - e) * s + e * t;
}
function wu(s, t, e, n) {
  return ms(s, t, 1 - Math.exp(-e * n));
}
function Ru(s, t = 1) {
  return t - Math.abs(Aa(s, t * 2) - t);
}
function Cu(s, t, e) {
  return s <= t ? 0 : s >= e ? 1 : (s = (s - t) / (e - t), s * s * (3 - 2 * s));
}
function Pu(s, t, e) {
  return s <= t ? 0 : s >= e ? 1 : (s = (s - t) / (e - t), s * s * s * (s * (s * 6 - 15) + 10));
}
function Lu(s, t) {
  return s + Math.floor(Math.random() * (t - s + 1));
}
function Iu(s, t) {
  return s + Math.random() * (t - s);
}
function Du(s) {
  return s * (0.5 - Math.random());
}
function Nu(s) {
  s !== void 0 && (tl = s);
  let t = tl += 1831565813;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function Uu(s) {
  return s * ps;
}
function Fu(s) {
  return s * Xi;
}
function Ou(s) {
  return (s & s - 1) === 0 && s !== 0;
}
function Bu(s) {
  return Math.pow(2, Math.ceil(Math.log(s) / Math.LN2));
}
function ku(s) {
  return Math.pow(2, Math.floor(Math.log(s) / Math.LN2));
}
function zu(s, t, e, n, i) {
  const r = Math.cos, o = Math.sin, a = r(e / 2), l = o(e / 2), c = r((t + n) / 2), h = o((t + n) / 2), u = r((t - n) / 2), d = o((t - n) / 2), f = r((n - t) / 2), g = o((n - t) / 2);
  switch (i) {
    case "XYX":
      s.set(a * h, l * u, l * d, a * c);
      break;
    case "YZY":
      s.set(l * d, a * h, l * u, a * c);
      break;
    case "ZXZ":
      s.set(l * u, l * d, a * h, a * c);
      break;
    case "XZX":
      s.set(a * h, l * g, l * f, a * c);
      break;
    case "YXY":
      s.set(l * f, a * h, l * g, a * c);
      break;
    case "ZYZ":
      s.set(l * g, l * f, a * h, a * c);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function tn(s, t) {
  switch (t.constructor) {
    case Float32Array:
      return s;
    case Uint32Array:
      return s / 4294967295;
    case Uint16Array:
      return s / 65535;
    case Uint8Array:
      return s / 255;
    case Int32Array:
      return Math.max(s / 2147483647, -1);
    case Int16Array:
      return Math.max(s / 32767, -1);
    case Int8Array:
      return Math.max(s / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function ie(s, t) {
  switch (t.constructor) {
    case Float32Array:
      return s;
    case Uint32Array:
      return Math.round(s * 4294967295);
    case Uint16Array:
      return Math.round(s * 65535);
    case Uint8Array:
      return Math.round(s * 255);
    case Int32Array:
      return Math.round(s * 2147483647);
    case Int16Array:
      return Math.round(s * 32767);
    case Int8Array:
      return Math.round(s * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const zc = { DEG2RAD: ps, RAD2DEG: Xi, generateUUID: je, clamp: Ht, euclideanModulo: Aa, mapLinear: bu, inverseLerp: Tu, lerp: ms, damp: wu, pingpong: Ru, smoothstep: Cu, smootherstep: Pu, randInt: Lu, randFloat: Iu, randFloatSpread: Du, seededRandom: Nu, degToRad: Uu, radToDeg: Fu, isPowerOfTwo: Ou, ceilPowerOfTwo: Bu, floorPowerOfTwo: ku, setQuaternionFromProperEuler: zu, normalize: ie, denormalize: tn };
class Q {
  constructor(t = 0, e = 0) {
    Q.prototype.isVector2 = true, this.x = t, this.y = e;
  }
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  set(t, e) {
    return this.x = t, this.y = e, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  applyMatrix3(t) {
    const e = this.x, n = this.y, i = t.elements;
    return this.x = i[0] * e + i[3] * n + i[6], this.y = i[1] * e + i[4] * n + i[7], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
  }
  clamp(t, e) {
    return this.x = Ht(this.x, t.x, e.x), this.y = Ht(this.y, t.y, e.y), this;
  }
  clampScalar(t, e) {
    return this.x = Ht(this.x, t, e), this.y = Ht(this.y, t, e), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ht(n, t, e));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  cross(t) {
    return this.x * t.y - this.y * t.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(Ht(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, n = this.y - t.y;
    return e * e + n * n;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this;
  }
  rotateAround(t, e) {
    const n = Math.cos(e), i = Math.sin(e), r = this.x - t.x, o = this.y - t.y;
    return this.x = r * n - o * i + t.x, this.y = r * i + o * n + t.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class zt {
  constructor(t, e, n, i, r, o, a, l, c) {
    zt.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], t !== void 0 && this.set(t, e, n, i, r, o, a, l, c);
  }
  set(t, e, n, i, r, o, a, l, c) {
    const h = this.elements;
    return h[0] = t, h[1] = i, h[2] = a, h[3] = e, h[4] = r, h[5] = l, h[6] = n, h[7] = o, h[8] = c, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(t) {
    const e = this.elements, n = t.elements;
    return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this;
  }
  extractBasis(t, e, n) {
    return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(t) {
    const e = t.elements;
    return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements, i = e.elements, r = this.elements, o = n[0], a = n[3], l = n[6], c = n[1], h = n[4], u = n[7], d = n[2], f = n[5], g = n[8], _ = i[0], m = i[3], p = i[6], b = i[1], S = i[4], x = i[7], L = i[2], R = i[5], C = i[8];
    return r[0] = o * _ + a * b + l * L, r[3] = o * m + a * S + l * R, r[6] = o * p + a * x + l * C, r[1] = c * _ + h * b + u * L, r[4] = c * m + h * S + u * R, r[7] = c * p + h * x + u * C, r[2] = d * _ + f * b + g * L, r[5] = d * m + f * S + g * R, r[8] = d * p + f * x + g * C, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], n = t[1], i = t[2], r = t[3], o = t[4], a = t[5], l = t[6], c = t[7], h = t[8];
    return e * o * h - e * a * c - n * r * h + n * a * l + i * r * c - i * o * l;
  }
  invert() {
    const t = this.elements, e = t[0], n = t[1], i = t[2], r = t[3], o = t[4], a = t[5], l = t[6], c = t[7], h = t[8], u = h * o - a * c, d = a * l - h * r, f = c * r - o * l, g = e * u + n * d + i * f;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / g;
    return t[0] = u * _, t[1] = (i * c - h * n) * _, t[2] = (a * n - i * o) * _, t[3] = d * _, t[4] = (h * e - i * l) * _, t[5] = (i * r - a * e) * _, t[6] = f * _, t[7] = (n * l - c * e) * _, t[8] = (o * e - n * r) * _, this;
  }
  transpose() {
    let t;
    const e = this.elements;
    return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this;
  }
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  transposeIntoArray(t) {
    const e = this.elements;
    return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this;
  }
  setUvTransform(t, e, n, i, r, o, a) {
    const l = Math.cos(r), c = Math.sin(r);
    return this.set(n * l, n * c, -n * (l * o + c * a) + o + t, -i * c, i * l, -i * (-c * o + l * a) + a + e, 0, 0, 1), this;
  }
  scale(t, e) {
    return this.premultiply(Lr.makeScale(t, e)), this;
  }
  rotate(t) {
    return this.premultiply(Lr.makeRotation(-t)), this;
  }
  translate(t, e) {
    return this.premultiply(Lr.makeTranslation(t, e)), this;
  }
  makeTranslation(t, e) {
    return t.isVector2 ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1) : this.set(1, 0, t, 0, 1, e, 0, 0, 1), this;
  }
  makeRotation(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(e, -n, 0, n, e, 0, 0, 0, 1), this;
  }
  makeScale(t, e) {
    return this.set(t, 0, 0, 0, e, 0, 0, 0, 1), this;
  }
  equals(t) {
    const e = this.elements, n = t.elements;
    for (let i = 0; i < 9; i++) if (e[i] !== n[i]) return false;
    return true;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Lr = new zt();
function Hc(s) {
  for (let t = s.length - 1; t >= 0; --t) if (s[t] >= 65535) return true;
  return false;
}
function Ss(s) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", s);
}
function Hu() {
  const s = Ss("canvas");
  return s.style.display = "block", s;
}
const el = {};
function Ri(s) {
  s in el || (el[s] = true, console.warn(s));
}
function Vu(s, t, e) {
  return new Promise(function(n, i) {
    function r() {
      switch (s.clientWaitSync(t, s.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case s.WAIT_FAILED:
          i();
          break;
        case s.TIMEOUT_EXPIRED:
          setTimeout(r, e);
          break;
        default:
          n();
      }
    }
    setTimeout(r, e);
  });
}
function Gu(s) {
  const t = s.elements;
  t[2] = 0.5 * t[2] + 0.5 * t[3], t[6] = 0.5 * t[6] + 0.5 * t[7], t[10] = 0.5 * t[10] + 0.5 * t[11], t[14] = 0.5 * t[14] + 0.5 * t[15];
}
function Wu(s) {
  const t = s.elements;
  t[11] === -1 ? (t[10] = -t[10] - 1, t[14] = -t[14]) : (t[10] = -t[10], t[14] = -t[14] + 1);
}
const nl = new zt().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), il = new zt().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function Xu() {
  const s = { enabled: true, workingColorSpace: Ie, spaces: {}, convert: function(i, r, o) {
    return this.enabled === false || r === o || !r || !o || (this.spaces[r].transfer === se && (i.r = An(i.r), i.g = An(i.g), i.b = An(i.b)), this.spaces[r].primaries !== this.spaces[o].primaries && (i.applyMatrix3(this.spaces[r].toXYZ), i.applyMatrix3(this.spaces[o].fromXYZ)), this.spaces[o].transfer === se && (i.r = Oi(i.r), i.g = Oi(i.g), i.b = Oi(i.b))), i;
  }, fromWorkingColorSpace: function(i, r) {
    return this.convert(i, this.workingColorSpace, r);
  }, toWorkingColorSpace: function(i, r) {
    return this.convert(i, r, this.workingColorSpace);
  }, getPrimaries: function(i) {
    return this.spaces[i].primaries;
  }, getTransfer: function(i) {
    return i === Fn ? yr : this.spaces[i].transfer;
  }, getLuminanceCoefficients: function(i, r = this.workingColorSpace) {
    return i.fromArray(this.spaces[r].luminanceCoefficients);
  }, define: function(i) {
    Object.assign(this.spaces, i);
  }, _getMatrix: function(i, r, o) {
    return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ);
  }, _getDrawingBufferColorSpace: function(i) {
    return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace;
  }, _getUnpackColorSpace: function(i = this.workingColorSpace) {
    return this.spaces[i].workingColorSpaceConfig.unpackColorSpace;
  } }, t = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], e = [0.2126, 0.7152, 0.0722], n = [0.3127, 0.329];
  return s.define({ [Ie]: { primaries: t, whitePoint: n, transfer: yr, toXYZ: nl, fromXYZ: il, luminanceCoefficients: e, workingColorSpaceConfig: { unpackColorSpace: Me }, outputColorSpaceConfig: { drawingBufferColorSpace: Me } }, [Me]: { primaries: t, whitePoint: n, transfer: se, toXYZ: nl, fromXYZ: il, luminanceCoefficients: e, outputColorSpaceConfig: { drawingBufferColorSpace: Me } } }), s;
}
const qt = Xu();
function An(s) {
  return s < 0.04045 ? s * 0.0773993808 : Math.pow(s * 0.9478672986 + 0.0521327014, 2.4);
}
function Oi(s) {
  return s < 31308e-7 ? s * 12.92 : 1.055 * Math.pow(s, 0.41666) - 0.055;
}
let pi;
class Yu {
  static getDataURL(t) {
    if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u") return t.src;
    let e;
    if (t instanceof HTMLCanvasElement) e = t;
    else {
      pi === void 0 && (pi = Ss("canvas")), pi.width = t.width, pi.height = t.height;
      const n = pi.getContext("2d");
      t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height), e = pi;
    }
    return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", 0.6)) : e.toDataURL("image/png");
  }
  static sRGBToLinear(t) {
    if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
      const e = Ss("canvas");
      e.width = t.width, e.height = t.height;
      const n = e.getContext("2d");
      n.drawImage(t, 0, 0, t.width, t.height);
      const i = n.getImageData(0, 0, t.width, t.height), r = i.data;
      for (let o = 0; o < r.length; o++) r[o] = An(r[o] / 255) * 255;
      return n.putImageData(i, 0, 0), e;
    } else if (t.data) {
      const e = t.data.slice(0);
      for (let n = 0; n < e.length; n++) e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[n] = Math.floor(An(e[n] / 255) * 255) : e[n] = An(e[n]);
      return { data: e, width: t.width, height: t.height };
    } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
  }
}
let qu = 0;
class Vc {
  constructor(t = null) {
    this.isSource = true, Object.defineProperty(this, "id", { value: qu++ }), this.uuid = je(), this.data = t, this.dataReady = true, this.version = 0;
  }
  set needsUpdate(t) {
    t === true && this.version++;
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.images[this.uuid] !== void 0) return t.images[this.uuid];
    const n = { uuid: this.uuid, url: "" }, i = this.data;
    if (i !== null) {
      let r;
      if (Array.isArray(i)) {
        r = [];
        for (let o = 0, a = i.length; o < a; o++) i[o].isDataTexture ? r.push(Ir(i[o].image)) : r.push(Ir(i[o]));
      } else r = Ir(i);
      n.url = r;
    }
    return e || (t.images[this.uuid] = n), n;
  }
}
function Ir(s) {
  return typeof HTMLImageElement < "u" && s instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && s instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && s instanceof ImageBitmap ? Yu.getDataURL(s) : s.data ? { data: Array.from(s.data), width: s.width, height: s.height, type: s.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let ju = 0;
class xe extends Gn {
  constructor(t = xe.DEFAULT_IMAGE, e = xe.DEFAULT_MAPPING, n = On, i = On, r = ze, o = Sn, a = qe, l = Tn, c = xe.DEFAULT_ANISOTROPY, h = Fn) {
    super(), this.isTexture = true, Object.defineProperty(this, "id", { value: ju++ }), this.uuid = je(), this.name = "", this.source = new Vc(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = o, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new Q(0, 0), this.repeat = new Q(1, 1), this.center = new Q(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new zt(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = false, this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(t = null) {
    this.source.data = t;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = true, this;
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.textures[this.uuid] !== void 0) return t.textures[this.uuid];
    const n = { metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(t).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), e || (t.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(t) {
    if (this.mapping !== wc) return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
      case Vi:
        t.x = t.x - Math.floor(t.x);
        break;
      case On:
        t.x = t.x < 0 ? 0 : 1;
        break;
      case vr:
        Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
        break;
    }
    if (t.y < 0 || t.y > 1) switch (this.wrapT) {
      case Vi:
        t.y = t.y - Math.floor(t.y);
        break;
      case On:
        t.y = t.y < 0 ? 0 : 1;
        break;
      case vr:
        Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
        break;
    }
    return this.flipY && (t.y = 1 - t.y), t;
  }
  set needsUpdate(t) {
    t === true && (this.version++, this.source.needsUpdate = true);
  }
  set needsPMREMUpdate(t) {
    t === true && this.pmremVersion++;
  }
}
xe.DEFAULT_IMAGE = null;
xe.DEFAULT_MAPPING = wc;
xe.DEFAULT_ANISOTROPY = 1;
class Zt {
  constructor(t = 0, e = 0, n = 0, i = 1) {
    Zt.prototype.isVector4 = true, this.x = t, this.y = e, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(t) {
    this.z = t;
  }
  get height() {
    return this.w;
  }
  set height(t) {
    this.w = t;
  }
  set(t, e, n, i) {
    return this.x = t, this.y = e, this.z = n, this.w = i, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this.w = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setW(t) {
    return this.w = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      case 3:
        this.w = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w !== void 0 ? t.w : 1, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this.w += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
  }
  applyMatrix4(t) {
    const e = this.x, n = this.y, i = this.z, r = this.w, o = t.elements;
    return this.x = o[0] * e + o[4] * n + o[8] * i + o[12] * r, this.y = o[1] * e + o[5] * n + o[9] * i + o[13] * r, this.z = o[2] * e + o[6] * n + o[10] * i + o[14] * r, this.w = o[3] * e + o[7] * n + o[11] * i + o[15] * r, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this.w /= t.w, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  setAxisAngleFromQuaternion(t) {
    this.w = 2 * Math.acos(t.w);
    const e = Math.sqrt(1 - t.w * t.w);
    return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this;
  }
  setAxisAngleFromRotationMatrix(t) {
    let e, n, i, r;
    const l = t.elements, c = l[0], h = l[4], u = l[8], d = l[1], f = l[5], g = l[9], _ = l[2], m = l[6], p = l[10];
    if (Math.abs(h - d) < 0.01 && Math.abs(u - _) < 0.01 && Math.abs(g - m) < 0.01) {
      if (Math.abs(h + d) < 0.1 && Math.abs(u + _) < 0.1 && Math.abs(g + m) < 0.1 && Math.abs(c + f + p - 3) < 0.1) return this.set(1, 0, 0, 0), this;
      e = Math.PI;
      const S = (c + 1) / 2, x = (f + 1) / 2, L = (p + 1) / 2, R = (h + d) / 4, C = (u + _) / 4, I = (g + m) / 4;
      return S > x && S > L ? S < 0.01 ? (n = 0, i = 0.707106781, r = 0.707106781) : (n = Math.sqrt(S), i = R / n, r = C / n) : x > L ? x < 0.01 ? (n = 0.707106781, i = 0, r = 0.707106781) : (i = Math.sqrt(x), n = R / i, r = I / i) : L < 0.01 ? (n = 0.707106781, i = 0.707106781, r = 0) : (r = Math.sqrt(L), n = C / r, i = I / r), this.set(n, i, r, e), this;
    }
    let b = Math.sqrt((m - g) * (m - g) + (u - _) * (u - _) + (d - h) * (d - h));
    return Math.abs(b) < 1e-3 && (b = 1), this.x = (m - g) / b, this.y = (u - _) / b, this.z = (d - h) / b, this.w = Math.acos((c + f + p - 1) / 2), this;
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this.w = e[15], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
  }
  clamp(t, e) {
    return this.x = Ht(this.x, t.x, e.x), this.y = Ht(this.y, t.y, e.y), this.z = Ht(this.z, t.z, e.z), this.w = Ht(this.w, t.w, e.w), this;
  }
  clampScalar(t, e) {
    return this.x = Ht(this.x, t, e), this.y = Ht(this.y, t, e), this.z = Ht(this.z, t, e), this.w = Ht(this.w, t, e), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ht(n, t, e));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class $u extends Gn {
  constructor(t = 1, e = 1, n = {}) {
    super(), this.isRenderTarget = true, this.width = t, this.height = e, this.depth = 1, this.scissor = new Zt(0, 0, t, e), this.scissorTest = false, this.viewport = new Zt(0, 0, t, e);
    const i = { width: t, height: e, depth: 1 };
    n = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: ze, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1 }, n);
    const r = new xe(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
    r.flipY = false, r.generateMipmaps = n.generateMipmaps, r.internalFormat = n.internalFormat, this.textures = [];
    const o = n.count;
    for (let a = 0; a < o; a++) this.textures[a] = r.clone(), this.textures[a].isRenderTargetTexture = true;
    this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(t) {
    this.textures[0] = t;
  }
  setSize(t, e, n = 1) {
    if (this.width !== t || this.height !== e || this.depth !== n) {
      this.width = t, this.height = e, this.depth = n;
      for (let i = 0, r = this.textures.length; i < r; i++) this.textures[i].image.width = t, this.textures[i].image.height = e, this.textures[i].image.depth = n;
      this.dispose();
    }
    this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.width = t.width, this.height = t.height, this.depth = t.depth, this.scissor.copy(t.scissor), this.scissorTest = t.scissorTest, this.viewport.copy(t.viewport), this.textures.length = 0;
    for (let n = 0, i = t.textures.length; n < i; n++) this.textures[n] = t.textures[n].clone(), this.textures[n].isRenderTargetTexture = true;
    const e = Object.assign({}, t.texture.image);
    return this.texture.source = new Vc(e), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.resolveDepthBuffer = t.resolveDepthBuffer, this.resolveStencilBuffer = t.resolveStencilBuffer, t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class ci extends $u {
  constructor(t = 1, e = 1, n = {}) {
    super(t, e, n), this.isWebGLRenderTarget = true;
  }
}
class Gc extends xe {
  constructor(t = null, e = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = true, this.image = { data: t, width: e, height: n, depth: i }, this.magFilter = Ce, this.minFilter = Ce, this.wrapR = On, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(t) {
    this.layerUpdates.add(t);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Ku extends xe {
  constructor(t = null, e = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = true, this.image = { data: t, width: e, height: n, depth: i }, this.magFilter = Ce, this.minFilter = Ce, this.wrapR = On, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
class Pe {
  constructor(t = 0, e = 0, n = 0, i = 1) {
    this.isQuaternion = true, this._x = t, this._y = e, this._z = n, this._w = i;
  }
  static slerpFlat(t, e, n, i, r, o, a) {
    let l = n[i + 0], c = n[i + 1], h = n[i + 2], u = n[i + 3];
    const d = r[o + 0], f = r[o + 1], g = r[o + 2], _ = r[o + 3];
    if (a === 0) {
      t[e + 0] = l, t[e + 1] = c, t[e + 2] = h, t[e + 3] = u;
      return;
    }
    if (a === 1) {
      t[e + 0] = d, t[e + 1] = f, t[e + 2] = g, t[e + 3] = _;
      return;
    }
    if (u !== _ || l !== d || c !== f || h !== g) {
      let m = 1 - a;
      const p = l * d + c * f + h * g + u * _, b = p >= 0 ? 1 : -1, S = 1 - p * p;
      if (S > Number.EPSILON) {
        const L = Math.sqrt(S), R = Math.atan2(L, p * b);
        m = Math.sin(m * R) / L, a = Math.sin(a * R) / L;
      }
      const x = a * b;
      if (l = l * m + d * x, c = c * m + f * x, h = h * m + g * x, u = u * m + _ * x, m === 1 - a) {
        const L = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
        l *= L, c *= L, h *= L, u *= L;
      }
    }
    t[e] = l, t[e + 1] = c, t[e + 2] = h, t[e + 3] = u;
  }
  static multiplyQuaternionsFlat(t, e, n, i, r, o) {
    const a = n[i], l = n[i + 1], c = n[i + 2], h = n[i + 3], u = r[o], d = r[o + 1], f = r[o + 2], g = r[o + 3];
    return t[e] = a * g + h * u + l * f - c * d, t[e + 1] = l * g + h * d + c * u - a * f, t[e + 2] = c * g + h * f + a * d - l * u, t[e + 3] = h * g - a * u - l * d - c * f, t;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(t) {
    this._w = t, this._onChangeCallback();
  }
  set(t, e, n, i) {
    return this._x = t, this._y = e, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(t) {
    return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
  }
  setFromEuler(t, e = true) {
    const n = t._x, i = t._y, r = t._z, o = t._order, a = Math.cos, l = Math.sin, c = a(n / 2), h = a(i / 2), u = a(r / 2), d = l(n / 2), f = l(i / 2), g = l(r / 2);
    switch (o) {
      case "XYZ":
        this._x = d * h * u + c * f * g, this._y = c * f * u - d * h * g, this._z = c * h * g + d * f * u, this._w = c * h * u - d * f * g;
        break;
      case "YXZ":
        this._x = d * h * u + c * f * g, this._y = c * f * u - d * h * g, this._z = c * h * g - d * f * u, this._w = c * h * u + d * f * g;
        break;
      case "ZXY":
        this._x = d * h * u - c * f * g, this._y = c * f * u + d * h * g, this._z = c * h * g + d * f * u, this._w = c * h * u - d * f * g;
        break;
      case "ZYX":
        this._x = d * h * u - c * f * g, this._y = c * f * u + d * h * g, this._z = c * h * g - d * f * u, this._w = c * h * u + d * f * g;
        break;
      case "YZX":
        this._x = d * h * u + c * f * g, this._y = c * f * u + d * h * g, this._z = c * h * g - d * f * u, this._w = c * h * u - d * f * g;
        break;
      case "XZY":
        this._x = d * h * u - c * f * g, this._y = c * f * u - d * h * g, this._z = c * h * g + d * f * u, this._w = c * h * u + d * f * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
    }
    return e === true && this._onChangeCallback(), this;
  }
  setFromAxisAngle(t, e) {
    const n = e / 2, i = Math.sin(n);
    return this._x = t.x * i, this._y = t.y * i, this._z = t.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t) {
    const e = t.elements, n = e[0], i = e[4], r = e[8], o = e[1], a = e[5], l = e[9], c = e[2], h = e[6], u = e[10], d = n + a + u;
    if (d > 0) {
      const f = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / f, this._x = (h - l) * f, this._y = (r - c) * f, this._z = (o - i) * f;
    } else if (n > a && n > u) {
      const f = 2 * Math.sqrt(1 + n - a - u);
      this._w = (h - l) / f, this._x = 0.25 * f, this._y = (i + o) / f, this._z = (r + c) / f;
    } else if (a > u) {
      const f = 2 * Math.sqrt(1 + a - n - u);
      this._w = (r - c) / f, this._x = (i + o) / f, this._y = 0.25 * f, this._z = (l + h) / f;
    } else {
      const f = 2 * Math.sqrt(1 + u - n - a);
      this._w = (o - i) / f, this._x = (r + c) / f, this._y = (l + h) / f, this._z = 0.25 * f;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(t, e) {
    let n = t.dot(e) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize();
  }
  angleTo(t) {
    return 2 * Math.acos(Math.abs(Ht(this.dot(t), -1, 1)));
  }
  rotateTowards(t, e) {
    const n = this.angleTo(t);
    if (n === 0) return this;
    const i = Math.min(1, e / n);
    return this.slerp(t, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(t) {
    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let t = this.length();
    return t === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
  }
  multiply(t) {
    return this.multiplyQuaternions(this, t);
  }
  premultiply(t) {
    return this.multiplyQuaternions(t, this);
  }
  multiplyQuaternions(t, e) {
    const n = t._x, i = t._y, r = t._z, o = t._w, a = e._x, l = e._y, c = e._z, h = e._w;
    return this._x = n * h + o * a + i * c - r * l, this._y = i * h + o * l + r * a - n * c, this._z = r * h + o * c + n * l - i * a, this._w = o * h - n * a - i * l - r * c, this._onChangeCallback(), this;
  }
  slerp(t, e) {
    if (e === 0) return this;
    if (e === 1) return this.copy(t);
    const n = this._x, i = this._y, r = this._z, o = this._w;
    let a = o * t._w + n * t._x + i * t._y + r * t._z;
    if (a < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, a = -a) : this.copy(t), a >= 1) return this._w = o, this._x = n, this._y = i, this._z = r, this;
    const l = 1 - a * a;
    if (l <= Number.EPSILON) {
      const f = 1 - e;
      return this._w = f * o + e * this._w, this._x = f * n + e * this._x, this._y = f * i + e * this._y, this._z = f * r + e * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), h = Math.atan2(c, a), u = Math.sin((1 - e) * h) / c, d = Math.sin(e * h) / c;
    return this._w = o * u + this._w * d, this._x = n * u + this._x * d, this._y = i * u + this._y * d, this._z = r * u + this._z * d, this._onChangeCallback(), this;
  }
  slerpQuaternions(t, e, n) {
    return this.copy(t).slerp(e, n);
  }
  random() {
    const t = 2 * Math.PI * Math.random(), e = 2 * Math.PI * Math.random(), n = Math.random(), i = Math.sqrt(1 - n), r = Math.sqrt(n);
    return this.set(i * Math.sin(t), i * Math.cos(t), r * Math.sin(e), r * Math.cos(e));
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
  }
  fromArray(t, e = 0) {
    return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
  }
  fromBufferAttribute(t, e) {
    return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class w {
  constructor(t = 0, e = 0, n = 0) {
    w.prototype.isVector3 = true, this.x = t, this.y = e, this.z = n;
  }
  set(t, e, n) {
    return n === void 0 && (n = this.z), this.x = t, this.y = e, this.z = n, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this;
  }
  multiplyVectors(t, e) {
    return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
  }
  applyEuler(t) {
    return this.applyQuaternion(sl.setFromEuler(t));
  }
  applyAxisAngle(t, e) {
    return this.applyQuaternion(sl.setFromAxisAngle(t, e));
  }
  applyMatrix3(t) {
    const e = this.x, n = this.y, i = this.z, r = t.elements;
    return this.x = r[0] * e + r[3] * n + r[6] * i, this.y = r[1] * e + r[4] * n + r[7] * i, this.z = r[2] * e + r[5] * n + r[8] * i, this;
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    const e = this.x, n = this.y, i = this.z, r = t.elements, o = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
    return this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * o, this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * o, this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * o, this;
  }
  applyQuaternion(t) {
    const e = this.x, n = this.y, i = this.z, r = t.x, o = t.y, a = t.z, l = t.w, c = 2 * (o * i - a * n), h = 2 * (a * e - r * i), u = 2 * (r * n - o * e);
    return this.x = e + l * c + o * u - a * h, this.y = n + l * h + a * c - r * u, this.z = i + l * u + r * h - o * c, this;
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
  }
  transformDirection(t) {
    const e = this.x, n = this.y, i = this.z, r = t.elements;
    return this.x = r[0] * e + r[4] * n + r[8] * i, this.y = r[1] * e + r[5] * n + r[9] * i, this.z = r[2] * e + r[6] * n + r[10] * i, this.normalize();
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
  }
  clamp(t, e) {
    return this.x = Ht(this.x, t.x, e.x), this.y = Ht(this.y, t.y, e.y), this.z = Ht(this.z, t.z, e.z), this;
  }
  clampScalar(t, e) {
    return this.x = Ht(this.x, t, e), this.y = Ht(this.y, t, e), this.z = Ht(this.z, t, e), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ht(n, t, e));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this;
  }
  cross(t) {
    return this.crossVectors(this, t);
  }
  crossVectors(t, e) {
    const n = t.x, i = t.y, r = t.z, o = e.x, a = e.y, l = e.z;
    return this.x = i * l - r * a, this.y = r * o - n * l, this.z = n * a - i * o, this;
  }
  projectOnVector(t) {
    const e = t.lengthSq();
    if (e === 0) return this.set(0, 0, 0);
    const n = t.dot(this) / e;
    return this.copy(t).multiplyScalar(n);
  }
  projectOnPlane(t) {
    return Dr.copy(this).projectOnVector(t), this.sub(Dr);
  }
  reflect(t) {
    return this.sub(Dr.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(Ht(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, n = this.y - t.y, i = this.z - t.z;
    return e * e + n * n + i * i;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  setFromSphericalCoords(t, e, n) {
    const i = Math.sin(e) * t;
    return this.x = i * Math.sin(n), this.y = Math.cos(e) * t, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  setFromCylindricalCoords(t, e, n) {
    return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this;
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this;
  }
  setFromMatrixScale(t) {
    const e = this.setFromMatrixColumn(t, 0).length(), n = this.setFromMatrixColumn(t, 1).length(), i = this.setFromMatrixColumn(t, 2).length();
    return this.x = e, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(t, e) {
    return this.fromArray(t.elements, e * 4);
  }
  setFromMatrix3Column(t, e) {
    return this.fromArray(t.elements, e * 3);
  }
  setFromEuler(t) {
    return this.x = t._x, this.y = t._y, this.z = t._z, this;
  }
  setFromColor(t) {
    return this.x = t.r, this.y = t.g, this.z = t.b, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const t = Math.random() * Math.PI * 2, e = Math.random() * 2 - 1, n = Math.sqrt(1 - e * e);
    return this.x = n * Math.cos(t), this.y = e, this.z = n * Math.sin(t), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Dr = new w(), sl = new Pe();
class wn {
  constructor(t = new w(1 / 0, 1 / 0, 1 / 0), e = new w(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = true, this.min = t, this.max = e;
  }
  set(t, e) {
    return this.min.copy(t), this.max.copy(e), this;
  }
  setFromArray(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e += 3) this.expandByPoint(Ze.fromArray(t, e));
    return this;
  }
  setFromBufferAttribute(t) {
    this.makeEmpty();
    for (let e = 0, n = t.count; e < n; e++) this.expandByPoint(Ze.fromBufferAttribute(t, e));
    return this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
    return this;
  }
  setFromCenterAndSize(t, e) {
    const n = Ze.copy(e).multiplyScalar(0.5);
    return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
  }
  setFromObject(t, e = false) {
    return this.makeEmpty(), this.expandByObject(t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.min.copy(t.min), this.max.copy(t.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
  }
  expandByPoint(t) {
    return this.min.min(t), this.max.max(t), this;
  }
  expandByVector(t) {
    return this.min.sub(t), this.max.add(t), this;
  }
  expandByScalar(t) {
    return this.min.addScalar(-t), this.max.addScalar(t), this;
  }
  expandByObject(t, e = false) {
    t.updateWorldMatrix(false, false);
    const n = t.geometry;
    if (n !== void 0) {
      const r = n.getAttribute("position");
      if (e === true && r !== void 0 && t.isInstancedMesh !== true) for (let o = 0, a = r.count; o < a; o++) t.isMesh === true ? t.getVertexPosition(o, Ze) : Ze.fromBufferAttribute(r, o), Ze.applyMatrix4(t.matrixWorld), this.expandByPoint(Ze);
      else t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(), Is.copy(t.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Is.copy(n.boundingBox)), Is.applyMatrix4(t.matrixWorld), this.union(Is);
    }
    const i = t.children;
    for (let r = 0, o = i.length; r < o; r++) this.expandByObject(i[r], e);
    return this;
  }
  containsPoint(t) {
    return t.x >= this.min.x && t.x <= this.max.x && t.y >= this.min.y && t.y <= this.max.y && t.z >= this.min.z && t.z <= this.max.z;
  }
  containsBox(t) {
    return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
  }
  getParameter(t, e) {
    return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(t) {
    return t.max.x >= this.min.x && t.min.x <= this.max.x && t.max.y >= this.min.y && t.min.y <= this.max.y && t.max.z >= this.min.z && t.min.z <= this.max.z;
  }
  intersectsSphere(t) {
    return this.clampPoint(t.center, Ze), Ze.distanceToSquared(t.center) <= t.radius * t.radius;
  }
  intersectsPlane(t) {
    let e, n;
    return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant;
  }
  intersectsTriangle(t) {
    if (this.isEmpty()) return false;
    this.getCenter(ns), Ds.subVectors(this.max, ns), mi.subVectors(t.a, ns), gi.subVectors(t.b, ns), _i.subVectors(t.c, ns), Rn.subVectors(gi, mi), Cn.subVectors(_i, gi), Yn.subVectors(mi, _i);
    let e = [0, -Rn.z, Rn.y, 0, -Cn.z, Cn.y, 0, -Yn.z, Yn.y, Rn.z, 0, -Rn.x, Cn.z, 0, -Cn.x, Yn.z, 0, -Yn.x, -Rn.y, Rn.x, 0, -Cn.y, Cn.x, 0, -Yn.y, Yn.x, 0];
    return !Nr(e, mi, gi, _i, Ds) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Nr(e, mi, gi, _i, Ds)) ? false : (Ns.crossVectors(Rn, Cn), e = [Ns.x, Ns.y, Ns.z], Nr(e, mi, gi, _i, Ds));
  }
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return this.clampPoint(t, Ze).distanceTo(t);
  }
  getBoundingSphere(t) {
    return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = this.getSize(Ze).length() * 0.5), t;
  }
  intersect(t) {
    return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  applyMatrix4(t) {
    return this.isEmpty() ? this : (pn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), pn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), pn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), pn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), pn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), pn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), pn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), pn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(pn), this);
  }
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
}
const pn = [new w(), new w(), new w(), new w(), new w(), new w(), new w(), new w()], Ze = new w(), Is = new wn(), mi = new w(), gi = new w(), _i = new w(), Rn = new w(), Cn = new w(), Yn = new w(), ns = new w(), Ds = new w(), Ns = new w(), qn = new w();
function Nr(s, t, e, n, i) {
  for (let r = 0, o = s.length - 3; r <= o; r += 3) {
    qn.fromArray(s, r);
    const a = i.x * Math.abs(qn.x) + i.y * Math.abs(qn.y) + i.z * Math.abs(qn.z), l = t.dot(qn), c = e.dot(qn), h = n.dot(qn);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > a) return false;
  }
  return true;
}
const Zu = new wn(), is = new w(), Ur = new w();
class cn {
  constructor(t = new w(), e = -1) {
    this.isSphere = true, this.center = t, this.radius = e;
  }
  set(t, e) {
    return this.center.copy(t), this.radius = e, this;
  }
  setFromPoints(t, e) {
    const n = this.center;
    e !== void 0 ? n.copy(e) : Zu.setFromPoints(t).getCenter(n);
    let i = 0;
    for (let r = 0, o = t.length; r < o; r++) i = Math.max(i, n.distanceToSquared(t[r]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(t) {
    return this.center.copy(t.center), this.radius = t.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(t) {
    return t.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(t) {
    return t.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(t) {
    const e = this.radius + t.radius;
    return t.center.distanceToSquared(this.center) <= e * e;
  }
  intersectsBox(t) {
    return t.intersectsSphere(this);
  }
  intersectsPlane(t) {
    return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(t, e) {
    const n = this.center.distanceToSquared(t);
    return e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
  }
  getBoundingBox(t) {
    return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
  }
  applyMatrix4(t) {
    return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this;
  }
  translate(t) {
    return this.center.add(t), this;
  }
  expandByPoint(t) {
    if (this.isEmpty()) return this.center.copy(t), this.radius = 0, this;
    is.subVectors(t, this.center);
    const e = is.lengthSq();
    if (e > this.radius * this.radius) {
      const n = Math.sqrt(e), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(is, i / n), this.radius += i;
    }
    return this;
  }
  union(t) {
    return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === true ? this.radius = Math.max(this.radius, t.radius) : (Ur.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(is.copy(t.center).add(Ur)), this.expandByPoint(is.copy(t.center).sub(Ur))), this);
  }
  equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const mn = new w(), Fr = new w(), Us = new w(), Pn = new w(), Or = new w(), Fs = new w(), Br = new w();
class Ki {
  constructor(t = new w(), e = new w(0, 0, -1)) {
    this.origin = t, this.direction = e;
  }
  set(t, e) {
    return this.origin.copy(t), this.direction.copy(e), this;
  }
  copy(t) {
    return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
  }
  at(t, e) {
    return e.copy(this.origin).addScaledVector(this.direction, t);
  }
  lookAt(t) {
    return this.direction.copy(t).sub(this.origin).normalize(), this;
  }
  recast(t) {
    return this.origin.copy(this.at(t, mn)), this;
  }
  closestPointToPoint(t, e) {
    e.subVectors(t, this.origin);
    const n = e.dot(this.direction);
    return n < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(t) {
    return Math.sqrt(this.distanceSqToPoint(t));
  }
  distanceSqToPoint(t) {
    const e = mn.subVectors(t, this.origin).dot(this.direction);
    return e < 0 ? this.origin.distanceToSquared(t) : (mn.copy(this.origin).addScaledVector(this.direction, e), mn.distanceToSquared(t));
  }
  distanceSqToSegment(t, e, n, i) {
    Fr.copy(t).add(e).multiplyScalar(0.5), Us.copy(e).sub(t).normalize(), Pn.copy(this.origin).sub(Fr);
    const r = t.distanceTo(e) * 0.5, o = -this.direction.dot(Us), a = Pn.dot(this.direction), l = -Pn.dot(Us), c = Pn.lengthSq(), h = Math.abs(1 - o * o);
    let u, d, f, g;
    if (h > 0) if (u = o * l - a, d = o * a - l, g = r * h, u >= 0) if (d >= -g) if (d <= g) {
      const _ = 1 / h;
      u *= _, d *= _, f = u * (u + o * d + 2 * a) + d * (o * u + d + 2 * l) + c;
    } else d = r, u = Math.max(0, -(o * d + a)), f = -u * u + d * (d + 2 * l) + c;
    else d = -r, u = Math.max(0, -(o * d + a)), f = -u * u + d * (d + 2 * l) + c;
    else d <= -g ? (u = Math.max(0, -(-o * r + a)), d = u > 0 ? -r : Math.min(Math.max(-r, -l), r), f = -u * u + d * (d + 2 * l) + c) : d <= g ? (u = 0, d = Math.min(Math.max(-r, -l), r), f = d * (d + 2 * l) + c) : (u = Math.max(0, -(o * r + a)), d = u > 0 ? r : Math.min(Math.max(-r, -l), r), f = -u * u + d * (d + 2 * l) + c);
    else d = o > 0 ? -r : r, u = Math.max(0, -(o * d + a)), f = -u * u + d * (d + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(Fr).addScaledVector(Us, d), f;
  }
  intersectSphere(t, e) {
    mn.subVectors(t.center, this.origin);
    const n = mn.dot(this.direction), i = mn.dot(mn) - n * n, r = t.radius * t.radius;
    if (i > r) return null;
    const o = Math.sqrt(r - i), a = n - o, l = n + o;
    return l < 0 ? null : a < 0 ? this.at(l, e) : this.at(a, e);
  }
  intersectsSphere(t) {
    return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
  }
  distanceToPlane(t) {
    const e = t.normal.dot(this.direction);
    if (e === 0) return t.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(t.normal) + t.constant) / e;
    return n >= 0 ? n : null;
  }
  intersectPlane(t, e) {
    const n = this.distanceToPlane(t);
    return n === null ? null : this.at(n, e);
  }
  intersectsPlane(t) {
    const e = t.distanceToPoint(this.origin);
    return e === 0 || t.normal.dot(this.direction) * e < 0;
  }
  intersectBox(t, e) {
    let n, i, r, o, a, l;
    const c = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
    return c >= 0 ? (n = (t.min.x - d.x) * c, i = (t.max.x - d.x) * c) : (n = (t.max.x - d.x) * c, i = (t.min.x - d.x) * c), h >= 0 ? (r = (t.min.y - d.y) * h, o = (t.max.y - d.y) * h) : (r = (t.max.y - d.y) * h, o = (t.min.y - d.y) * h), n > o || r > i || ((r > n || isNaN(n)) && (n = r), (o < i || isNaN(i)) && (i = o), u >= 0 ? (a = (t.min.z - d.z) * u, l = (t.max.z - d.z) * u) : (a = (t.max.z - d.z) * u, l = (t.min.z - d.z) * u), n > l || a > i) || ((a > n || n !== n) && (n = a), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, e);
  }
  intersectsBox(t) {
    return this.intersectBox(t, mn) !== null;
  }
  intersectTriangle(t, e, n, i, r) {
    Or.subVectors(e, t), Fs.subVectors(n, t), Br.crossVectors(Or, Fs);
    let o = this.direction.dot(Br), a;
    if (o > 0) {
      if (i) return null;
      a = 1;
    } else if (o < 0) a = -1, o = -o;
    else return null;
    Pn.subVectors(this.origin, t);
    const l = a * this.direction.dot(Fs.crossVectors(Pn, Fs));
    if (l < 0) return null;
    const c = a * this.direction.dot(Or.cross(Pn));
    if (c < 0 || l + c > o) return null;
    const h = -a * Pn.dot(Br);
    return h < 0 ? null : this.at(h / o, r);
  }
  applyMatrix4(t) {
    return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
  }
  equals(t) {
    return t.origin.equals(this.origin) && t.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ot {
  constructor(t, e, n, i, r, o, a, l, c, h, u, d, f, g, _, m) {
    Ot.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], t !== void 0 && this.set(t, e, n, i, r, o, a, l, c, h, u, d, f, g, _, m);
  }
  set(t, e, n, i, r, o, a, l, c, h, u, d, f, g, _, m) {
    const p = this.elements;
    return p[0] = t, p[4] = e, p[8] = n, p[12] = i, p[1] = r, p[5] = o, p[9] = a, p[13] = l, p[2] = c, p[6] = h, p[10] = u, p[14] = d, p[3] = f, p[7] = g, p[11] = _, p[15] = m, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new Ot().fromArray(this.elements);
  }
  copy(t) {
    const e = this.elements, n = t.elements;
    return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this;
  }
  copyPosition(t) {
    const e = this.elements, n = t.elements;
    return e[12] = n[12], e[13] = n[13], e[14] = n[14], this;
  }
  setFromMatrix3(t) {
    const e = t.elements;
    return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(t, e, n) {
    return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(t, e, n) {
    return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(t) {
    const e = this.elements, n = t.elements, i = 1 / vi.setFromMatrixColumn(t, 0).length(), r = 1 / vi.setFromMatrixColumn(t, 1).length(), o = 1 / vi.setFromMatrixColumn(t, 2).length();
    return e[0] = n[0] * i, e[1] = n[1] * i, e[2] = n[2] * i, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * o, e[9] = n[9] * o, e[10] = n[10] * o, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromEuler(t) {
    const e = this.elements, n = t.x, i = t.y, r = t.z, o = Math.cos(n), a = Math.sin(n), l = Math.cos(i), c = Math.sin(i), h = Math.cos(r), u = Math.sin(r);
    if (t.order === "XYZ") {
      const d = o * h, f = o * u, g = a * h, _ = a * u;
      e[0] = l * h, e[4] = -l * u, e[8] = c, e[1] = f + g * c, e[5] = d - _ * c, e[9] = -a * l, e[2] = _ - d * c, e[6] = g + f * c, e[10] = o * l;
    } else if (t.order === "YXZ") {
      const d = l * h, f = l * u, g = c * h, _ = c * u;
      e[0] = d + _ * a, e[4] = g * a - f, e[8] = o * c, e[1] = o * u, e[5] = o * h, e[9] = -a, e[2] = f * a - g, e[6] = _ + d * a, e[10] = o * l;
    } else if (t.order === "ZXY") {
      const d = l * h, f = l * u, g = c * h, _ = c * u;
      e[0] = d - _ * a, e[4] = -o * u, e[8] = g + f * a, e[1] = f + g * a, e[5] = o * h, e[9] = _ - d * a, e[2] = -o * c, e[6] = a, e[10] = o * l;
    } else if (t.order === "ZYX") {
      const d = o * h, f = o * u, g = a * h, _ = a * u;
      e[0] = l * h, e[4] = g * c - f, e[8] = d * c + _, e[1] = l * u, e[5] = _ * c + d, e[9] = f * c - g, e[2] = -c, e[6] = a * l, e[10] = o * l;
    } else if (t.order === "YZX") {
      const d = o * l, f = o * c, g = a * l, _ = a * c;
      e[0] = l * h, e[4] = _ - d * u, e[8] = g * u + f, e[1] = u, e[5] = o * h, e[9] = -a * h, e[2] = -c * h, e[6] = f * u + g, e[10] = d - _ * u;
    } else if (t.order === "XZY") {
      const d = o * l, f = o * c, g = a * l, _ = a * c;
      e[0] = l * h, e[4] = -u, e[8] = c * h, e[1] = d * u + _, e[5] = o * h, e[9] = f * u - g, e[2] = g * u - f, e[6] = a * h, e[10] = _ * u + d;
    }
    return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromQuaternion(t) {
    return this.compose(Ju, t, Qu);
  }
  lookAt(t, e, n) {
    const i = this.elements;
    return Be.subVectors(t, e), Be.lengthSq() === 0 && (Be.z = 1), Be.normalize(), Ln.crossVectors(n, Be), Ln.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Be.x += 1e-4 : Be.z += 1e-4, Be.normalize(), Ln.crossVectors(n, Be)), Ln.normalize(), Os.crossVectors(Be, Ln), i[0] = Ln.x, i[4] = Os.x, i[8] = Be.x, i[1] = Ln.y, i[5] = Os.y, i[9] = Be.y, i[2] = Ln.z, i[6] = Os.z, i[10] = Be.z, this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements, i = e.elements, r = this.elements, o = n[0], a = n[4], l = n[8], c = n[12], h = n[1], u = n[5], d = n[9], f = n[13], g = n[2], _ = n[6], m = n[10], p = n[14], b = n[3], S = n[7], x = n[11], L = n[15], R = i[0], C = i[4], I = i[8], E = i[12], y = i[1], P = i[5], V = i[9], O = i[13], z = i[2], j = i[6], H = i[10], nt = i[14], G = i[3], at = i[7], mt = i[11], Mt = i[15];
    return r[0] = o * R + a * y + l * z + c * G, r[4] = o * C + a * P + l * j + c * at, r[8] = o * I + a * V + l * H + c * mt, r[12] = o * E + a * O + l * nt + c * Mt, r[1] = h * R + u * y + d * z + f * G, r[5] = h * C + u * P + d * j + f * at, r[9] = h * I + u * V + d * H + f * mt, r[13] = h * E + u * O + d * nt + f * Mt, r[2] = g * R + _ * y + m * z + p * G, r[6] = g * C + _ * P + m * j + p * at, r[10] = g * I + _ * V + m * H + p * mt, r[14] = g * E + _ * O + m * nt + p * Mt, r[3] = b * R + S * y + x * z + L * G, r[7] = b * C + S * P + x * j + L * at, r[11] = b * I + S * V + x * H + L * mt, r[15] = b * E + S * O + x * nt + L * Mt, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], n = t[4], i = t[8], r = t[12], o = t[1], a = t[5], l = t[9], c = t[13], h = t[2], u = t[6], d = t[10], f = t[14], g = t[3], _ = t[7], m = t[11], p = t[15];
    return g * (+r * l * u - i * c * u - r * a * d + n * c * d + i * a * f - n * l * f) + _ * (+e * l * f - e * c * d + r * o * d - i * o * f + i * c * h - r * l * h) + m * (+e * c * u - e * a * f - r * o * u + n * o * f + r * a * h - n * c * h) + p * (-i * a * h - e * l * u + e * a * d + i * o * u - n * o * d + n * l * h);
  }
  transpose() {
    const t = this.elements;
    let e;
    return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this;
  }
  setPosition(t, e, n) {
    const i = this.elements;
    return t.isVector3 ? (i[12] = t.x, i[13] = t.y, i[14] = t.z) : (i[12] = t, i[13] = e, i[14] = n), this;
  }
  invert() {
    const t = this.elements, e = t[0], n = t[1], i = t[2], r = t[3], o = t[4], a = t[5], l = t[6], c = t[7], h = t[8], u = t[9], d = t[10], f = t[11], g = t[12], _ = t[13], m = t[14], p = t[15], b = u * m * c - _ * d * c + _ * l * f - a * m * f - u * l * p + a * d * p, S = g * d * c - h * m * c - g * l * f + o * m * f + h * l * p - o * d * p, x = h * _ * c - g * u * c + g * a * f - o * _ * f - h * a * p + o * u * p, L = g * u * l - h * _ * l - g * a * d + o * _ * d + h * a * m - o * u * m, R = e * b + n * S + i * x + r * L;
    if (R === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const C = 1 / R;
    return t[0] = b * C, t[1] = (_ * d * r - u * m * r - _ * i * f + n * m * f + u * i * p - n * d * p) * C, t[2] = (a * m * r - _ * l * r + _ * i * c - n * m * c - a * i * p + n * l * p) * C, t[3] = (u * l * r - a * d * r - u * i * c + n * d * c + a * i * f - n * l * f) * C, t[4] = S * C, t[5] = (h * m * r - g * d * r + g * i * f - e * m * f - h * i * p + e * d * p) * C, t[6] = (g * l * r - o * m * r - g * i * c + e * m * c + o * i * p - e * l * p) * C, t[7] = (o * d * r - h * l * r + h * i * c - e * d * c - o * i * f + e * l * f) * C, t[8] = x * C, t[9] = (g * u * r - h * _ * r - g * n * f + e * _ * f + h * n * p - e * u * p) * C, t[10] = (o * _ * r - g * a * r + g * n * c - e * _ * c - o * n * p + e * a * p) * C, t[11] = (h * a * r - o * u * r - h * n * c + e * u * c + o * n * f - e * a * f) * C, t[12] = L * C, t[13] = (h * _ * i - g * u * i + g * n * d - e * _ * d - h * n * m + e * u * m) * C, t[14] = (g * a * i - o * _ * i - g * n * l + e * _ * l + o * n * m - e * a * m) * C, t[15] = (o * u * i - h * a * i + h * n * l - e * u * l - o * n * d + e * a * d) * C, this;
  }
  scale(t) {
    const e = this.elements, n = t.x, i = t.y, r = t.z;
    return e[0] *= n, e[4] *= i, e[8] *= r, e[1] *= n, e[5] *= i, e[9] *= r, e[2] *= n, e[6] *= i, e[10] *= r, e[3] *= n, e[7] *= i, e[11] *= r, this;
  }
  getMaxScaleOnAxis() {
    const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(e, n, i));
  }
  makeTranslation(t, e, n) {
    return t.isVector3 ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1) : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this;
  }
  makeRotationX(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(t, e) {
    const n = Math.cos(e), i = Math.sin(e), r = 1 - n, o = t.x, a = t.y, l = t.z, c = r * o, h = r * a;
    return this.set(c * o + n, c * a - i * l, c * l + i * a, 0, c * a + i * l, h * a + n, h * l - i * o, 0, c * l - i * a, h * l + i * o, r * l * l + n, 0, 0, 0, 0, 1), this;
  }
  makeScale(t, e, n) {
    return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(t, e, n, i, r, o) {
    return this.set(1, n, r, 0, t, 1, o, 0, e, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(t, e, n) {
    const i = this.elements, r = e._x, o = e._y, a = e._z, l = e._w, c = r + r, h = o + o, u = a + a, d = r * c, f = r * h, g = r * u, _ = o * h, m = o * u, p = a * u, b = l * c, S = l * h, x = l * u, L = n.x, R = n.y, C = n.z;
    return i[0] = (1 - (_ + p)) * L, i[1] = (f + x) * L, i[2] = (g - S) * L, i[3] = 0, i[4] = (f - x) * R, i[5] = (1 - (d + p)) * R, i[6] = (m + b) * R, i[7] = 0, i[8] = (g + S) * C, i[9] = (m - b) * C, i[10] = (1 - (d + _)) * C, i[11] = 0, i[12] = t.x, i[13] = t.y, i[14] = t.z, i[15] = 1, this;
  }
  decompose(t, e, n) {
    const i = this.elements;
    let r = vi.set(i[0], i[1], i[2]).length();
    const o = vi.set(i[4], i[5], i[6]).length(), a = vi.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r), t.x = i[12], t.y = i[13], t.z = i[14], Je.copy(this);
    const c = 1 / r, h = 1 / o, u = 1 / a;
    return Je.elements[0] *= c, Je.elements[1] *= c, Je.elements[2] *= c, Je.elements[4] *= h, Je.elements[5] *= h, Je.elements[6] *= h, Je.elements[8] *= u, Je.elements[9] *= u, Je.elements[10] *= u, e.setFromRotationMatrix(Je), n.x = r, n.y = o, n.z = a, this;
  }
  makePerspective(t, e, n, i, r, o, a = En) {
    const l = this.elements, c = 2 * r / (e - t), h = 2 * r / (n - i), u = (e + t) / (e - t), d = (n + i) / (n - i);
    let f, g;
    if (a === En) f = -(o + r) / (o - r), g = -2 * o * r / (o - r);
    else if (a === Mr) f = -o / (o - r), g = -o * r / (o - r);
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
    return l[0] = c, l[4] = 0, l[8] = u, l[12] = 0, l[1] = 0, l[5] = h, l[9] = d, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = f, l[14] = g, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(t, e, n, i, r, o, a = En) {
    const l = this.elements, c = 1 / (e - t), h = 1 / (n - i), u = 1 / (o - r), d = (e + t) * c, f = (n + i) * h;
    let g, _;
    if (a === En) g = (o + r) * u, _ = -2 * u;
    else if (a === Mr) g = r * u, _ = -1 * u;
    else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -d, l[1] = 0, l[5] = 2 * h, l[9] = 0, l[13] = -f, l[2] = 0, l[6] = 0, l[10] = _, l[14] = -g, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(t) {
    const e = this.elements, n = t.elements;
    for (let i = 0; i < 16; i++) if (e[i] !== n[i]) return false;
    return true;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t;
  }
}
const vi = new w(), Je = new Ot(), Ju = new w(0, 0, 0), Qu = new w(1, 1, 1), Ln = new w(), Os = new w(), Be = new w(), rl = new Ot(), ol = new Pe();
class rn {
  constructor(t = 0, e = 0, n = 0, i = rn.DEFAULT_ORDER) {
    this.isEuler = true, this._x = t, this._y = e, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(t) {
    this._order = t, this._onChangeCallback();
  }
  set(t, e, n, i = this._order) {
    return this._x = t, this._y = e, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(t) {
    return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t, e = this._order, n = true) {
    const i = t.elements, r = i[0], o = i[4], a = i[8], l = i[1], c = i[5], h = i[9], u = i[2], d = i[6], f = i[10];
    switch (e) {
      case "XYZ":
        this._y = Math.asin(Ht(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-h, f), this._z = Math.atan2(-o, r)) : (this._x = Math.atan2(d, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Ht(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(a, f), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Ht(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-u, f), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, r));
        break;
      case "ZYX":
        this._y = Math.asin(-Ht(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-o, c));
        break;
      case "YZX":
        this._z = Math.asin(Ht(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, r)) : (this._x = 0, this._y = Math.atan2(a, f));
        break;
      case "XZY":
        this._z = Math.asin(-Ht(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-h, f), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
    }
    return this._order = e, n === true && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, e, n) {
    return rl.makeRotationFromQuaternion(t), this.setFromRotationMatrix(rl, e, n);
  }
  setFromVector3(t, e = this._order) {
    return this.set(t.x, t.y, t.z, e);
  }
  reorder(t) {
    return ol.setFromEuler(this), this.setFromQuaternion(ol, t);
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
  }
  fromArray(t) {
    return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t;
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
rn.DEFAULT_ORDER = "XYZ";
class ba {
  constructor() {
    this.mask = 1;
  }
  set(t) {
    this.mask = (1 << t | 0) >>> 0;
  }
  enable(t) {
    this.mask |= 1 << t | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(t) {
    this.mask ^= 1 << t | 0;
  }
  disable(t) {
    this.mask &= ~(1 << t | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(t) {
    return (this.mask & t.mask) !== 0;
  }
  isEnabled(t) {
    return (this.mask & (1 << t | 0)) !== 0;
  }
}
let td = 0;
const al = new w(), xi = new Pe(), gn = new Ot(), Bs = new w(), ss = new w(), ed = new w(), nd = new Pe(), ll = new w(1, 0, 0), cl = new w(0, 1, 0), hl = new w(0, 0, 1), ul = { type: "added" }, id = { type: "removed" }, yi = { type: "childadded", child: null }, kr = { type: "childremoved", child: null };
class ae extends Gn {
  constructor() {
    super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: td++ }), this.uuid = je(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ae.DEFAULT_UP.clone();
    const t = new w(), e = new rn(), n = new Pe(), i = new w(1, 1, 1);
    function r() {
      n.setFromEuler(e, false);
    }
    function o() {
      e.setFromQuaternion(n, void 0, false);
    }
    e._onChange(r), n._onChange(o), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: t }, rotation: { configurable: true, enumerable: true, value: e }, quaternion: { configurable: true, enumerable: true, value: n }, scale: { configurable: true, enumerable: true, value: i }, modelViewMatrix: { value: new Ot() }, normalMatrix: { value: new zt() } }), this.matrix = new Ot(), this.matrixWorld = new Ot(), this.matrixAutoUpdate = ae.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new ba(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(t) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(t) {
    return this.quaternion.premultiply(t), this;
  }
  setRotationFromAxisAngle(t, e) {
    this.quaternion.setFromAxisAngle(t, e);
  }
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, true);
  }
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t);
  }
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t);
  }
  rotateOnAxis(t, e) {
    return xi.setFromAxisAngle(t, e), this.quaternion.multiply(xi), this;
  }
  rotateOnWorldAxis(t, e) {
    return xi.setFromAxisAngle(t, e), this.quaternion.premultiply(xi), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(ll, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(cl, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(hl, t);
  }
  translateOnAxis(t, e) {
    return al.copy(t).applyQuaternion(this.quaternion), this.position.add(al.multiplyScalar(e)), this;
  }
  translateX(t) {
    return this.translateOnAxis(ll, t);
  }
  translateY(t) {
    return this.translateOnAxis(cl, t);
  }
  translateZ(t) {
    return this.translateOnAxis(hl, t);
  }
  localToWorld(t) {
    return this.updateWorldMatrix(true, false), t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return this.updateWorldMatrix(true, false), t.applyMatrix4(gn.copy(this.matrixWorld).invert());
  }
  lookAt(t, e, n) {
    t.isVector3 ? Bs.copy(t) : Bs.set(t, e, n);
    const i = this.parent;
    this.updateWorldMatrix(true, false), ss.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? gn.lookAt(ss, Bs, this.up) : gn.lookAt(Bs, ss, this.up), this.quaternion.setFromRotationMatrix(gn), i && (gn.extractRotation(i.matrixWorld), xi.setFromRotationMatrix(gn), this.quaternion.premultiply(xi.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
      return this;
    }
    return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(ul), yi.child = t, this.dispatchEvent(yi), yi.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const e = this.children.indexOf(t);
    return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(id), kr.child = t, this.dispatchEvent(kr), kr.child = null), this;
  }
  removeFromParent() {
    const t = this.parent;
    return t !== null && t.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(t) {
    return this.updateWorldMatrix(true, false), gn.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(true, false), gn.multiply(t.parent.matrixWorld)), t.applyMatrix4(gn), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(false, true), t.dispatchEvent(ul), yi.child = t, this.dispatchEvent(yi), yi.child = null, this;
  }
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  getObjectByProperty(t, e) {
    if (this[t] === e) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const o = this.children[n].getObjectByProperty(t, e);
      if (o !== void 0) return o;
    }
  }
  getObjectsByProperty(t, e, n = []) {
    this[t] === e && n.push(this);
    const i = this.children;
    for (let r = 0, o = i.length; r < o; r++) i[r].getObjectsByProperty(t, e, n);
    return n;
  }
  getWorldPosition(t) {
    return this.updateWorldMatrix(true, false), t.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(t) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(ss, t, ed), t;
  }
  getWorldScale(t) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(ss, nd, t), t;
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(true, false);
    const e = this.matrixWorld.elements;
    return t.set(e[8], e[9], e[10]).normalize();
  }
  raycast() {
  }
  traverse(t) {
    t(this);
    const e = this.children;
    for (let n = 0, i = e.length; n < i; n++) e[n].traverse(t);
  }
  traverseVisible(t) {
    if (this.visible === false) return;
    t(this);
    const e = this.children;
    for (let n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t);
  }
  traverseAncestors(t) {
    const e = this.parent;
    e !== null && (t(e), e.traverseAncestors(t));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = true;
  }
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, t = true);
    const e = this.children;
    for (let n = 0, i = e.length; n < i; n++) e[n].updateMatrixWorld(t);
  }
  updateWorldMatrix(t, e) {
    const n = this.parent;
    if (t === true && n !== null && n.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), e === true) {
      const i = this.children;
      for (let r = 0, o = i.length; r < o; r++) i[r].updateWorldMatrix(false, true);
    }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string", n = {};
    e && (t = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.6, type: "Object", generator: "Object3D.toJSON" });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === true && (i.castShadow = true), this.receiveShadow === true && (i.receiveShadow = true), this.visible === false && (i.visible = false), this.frustumCulled === false && (i.frustumCulled = false), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === false && (i.matrixAutoUpdate = false), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.visibility = this._visibility, i.active = this._active, i.bounds = this._bounds.map((a) => ({ boxInitialized: a.boxInitialized, boxMin: a.box.min.toArray(), boxMax: a.box.max.toArray(), sphereInitialized: a.sphereInitialized, sphereRadius: a.sphere.radius, sphereCenter: a.sphere.center.toArray() })), i.maxInstanceCount = this._maxInstanceCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.geometryCount = this._geometryCount, i.matricesTexture = this._matricesTexture.toJSON(t), this._colorsTexture !== null && (i.colorsTexture = this._colorsTexture.toJSON(t)), this.boundingSphere !== null && (i.boundingSphere = { center: i.boundingSphere.center.toArray(), radius: i.boundingSphere.radius }), this.boundingBox !== null && (i.boundingBox = { min: i.boundingBox.min.toArray(), max: i.boundingBox.max.toArray() }));
    function r(a, l) {
      return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(t)), l.uuid;
    }
    if (this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (i.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(t.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const l = a.shapes;
        if (Array.isArray(l)) for (let c = 0, h = l.length; c < h; c++) {
          const u = l[c];
          r(t.shapes, u);
        }
        else r(t.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(t.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
      const a = [];
      for (let l = 0, c = this.material.length; l < c; l++) a.push(r(t.materials, this.material[l]));
      i.material = a;
    } else i.material = r(t.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let a = 0; a < this.children.length; a++) i.children.push(this.children[a].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const l = this.animations[a];
        i.animations.push(r(t.animations, l));
      }
    }
    if (e) {
      const a = o(t.geometries), l = o(t.materials), c = o(t.textures), h = o(t.images), u = o(t.shapes), d = o(t.skeletons), f = o(t.animations), g = o(t.nodes);
      a.length > 0 && (n.geometries = a), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), d.length > 0 && (n.skeletons = d), f.length > 0 && (n.animations = f), g.length > 0 && (n.nodes = g);
    }
    return n.object = i, n;
    function o(a) {
      const l = [];
      for (const c in a) {
        const h = a[c];
        delete h.metadata, l.push(h);
      }
      return l;
    }
  }
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  copy(t, e = true) {
    if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.animations = t.animations.slice(), this.userData = JSON.parse(JSON.stringify(t.userData)), e === true) for (let n = 0; n < t.children.length; n++) {
      const i = t.children[n];
      this.add(i.clone());
    }
    return this;
  }
}
ae.DEFAULT_UP = new w(0, 1, 0);
ae.DEFAULT_MATRIX_AUTO_UPDATE = true;
ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
const Qe = new w(), _n = new w(), zr = new w(), vn = new w(), Mi = new w(), Si = new w(), dl = new w(), Hr = new w(), Vr = new w(), Gr = new w(), Wr = new Zt(), Xr = new Zt(), Yr = new Zt();
class en {
  constructor(t = new w(), e = new w(), n = new w()) {
    this.a = t, this.b = e, this.c = n;
  }
  static getNormal(t, e, n, i) {
    i.subVectors(n, e), Qe.subVectors(t, e), i.cross(Qe);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  static getBarycoord(t, e, n, i, r) {
    Qe.subVectors(i, e), _n.subVectors(n, e), zr.subVectors(t, e);
    const o = Qe.dot(Qe), a = Qe.dot(_n), l = Qe.dot(zr), c = _n.dot(_n), h = _n.dot(zr), u = o * c - a * a;
    if (u === 0) return r.set(0, 0, 0), null;
    const d = 1 / u, f = (c * l - a * h) * d, g = (o * h - a * l) * d;
    return r.set(1 - f - g, g, f);
  }
  static containsPoint(t, e, n, i) {
    return this.getBarycoord(t, e, n, i, vn) === null ? false : vn.x >= 0 && vn.y >= 0 && vn.x + vn.y <= 1;
  }
  static getInterpolation(t, e, n, i, r, o, a, l) {
    return this.getBarycoord(t, e, n, i, vn) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(r, vn.x), l.addScaledVector(o, vn.y), l.addScaledVector(a, vn.z), l);
  }
  static getInterpolatedAttribute(t, e, n, i, r, o) {
    return Wr.setScalar(0), Xr.setScalar(0), Yr.setScalar(0), Wr.fromBufferAttribute(t, e), Xr.fromBufferAttribute(t, n), Yr.fromBufferAttribute(t, i), o.setScalar(0), o.addScaledVector(Wr, r.x), o.addScaledVector(Xr, r.y), o.addScaledVector(Yr, r.z), o;
  }
  static isFrontFacing(t, e, n, i) {
    return Qe.subVectors(n, e), _n.subVectors(t, e), Qe.cross(_n).dot(i) < 0;
  }
  set(t, e, n) {
    return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
  }
  setFromPointsAndIndices(t, e, n, i) {
    return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this;
  }
  setFromAttributeAndIndices(t, e, n, i) {
    return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, n), this.c.fromBufferAttribute(t, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
  }
  getArea() {
    return Qe.subVectors(this.c, this.b), _n.subVectors(this.a, this.b), Qe.cross(_n).length() * 0.5;
  }
  getMidpoint(t) {
    return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(t) {
    return en.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, e) {
    return en.getBarycoord(t, this.a, this.b, this.c, e);
  }
  getInterpolation(t, e, n, i, r) {
    return en.getInterpolation(t, this.a, this.b, this.c, e, n, i, r);
  }
  containsPoint(t) {
    return en.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return en.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  closestPointToPoint(t, e) {
    const n = this.a, i = this.b, r = this.c;
    let o, a;
    Mi.subVectors(i, n), Si.subVectors(r, n), Hr.subVectors(t, n);
    const l = Mi.dot(Hr), c = Si.dot(Hr);
    if (l <= 0 && c <= 0) return e.copy(n);
    Vr.subVectors(t, i);
    const h = Mi.dot(Vr), u = Si.dot(Vr);
    if (h >= 0 && u <= h) return e.copy(i);
    const d = l * u - h * c;
    if (d <= 0 && l >= 0 && h <= 0) return o = l / (l - h), e.copy(n).addScaledVector(Mi, o);
    Gr.subVectors(t, r);
    const f = Mi.dot(Gr), g = Si.dot(Gr);
    if (g >= 0 && f <= g) return e.copy(r);
    const _ = f * c - l * g;
    if (_ <= 0 && c >= 0 && g <= 0) return a = c / (c - g), e.copy(n).addScaledVector(Si, a);
    const m = h * g - f * u;
    if (m <= 0 && u - h >= 0 && f - g >= 0) return dl.subVectors(r, i), a = (u - h) / (u - h + (f - g)), e.copy(i).addScaledVector(dl, a);
    const p = 1 / (m + _ + d);
    return o = _ * p, a = d * p, e.copy(n).addScaledVector(Mi, o).addScaledVector(Si, a);
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}
const Wc = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, In = { h: 0, s: 0, l: 0 }, ks = { h: 0, s: 0, l: 0 };
function qr(s, t, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? s + (t - s) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? s + (t - s) * 6 * (2 / 3 - e) : s;
}
class It {
  constructor(t, e, n) {
    return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(t, e, n);
  }
  set(t, e, n) {
    if (e === void 0 && n === void 0) {
      const i = t;
      i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i);
    } else this.setRGB(t, e, n);
    return this;
  }
  setScalar(t) {
    return this.r = t, this.g = t, this.b = t, this;
  }
  setHex(t, e = Me) {
    return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, qt.toWorkingColorSpace(this, e), this;
  }
  setRGB(t, e, n, i = qt.workingColorSpace) {
    return this.r = t, this.g = e, this.b = n, qt.toWorkingColorSpace(this, i), this;
  }
  setHSL(t, e, n, i = qt.workingColorSpace) {
    if (t = Aa(t, 1), e = Ht(e, 0, 1), n = Ht(n, 0, 1), e === 0) this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + e) : n + e - n * e, o = 2 * n - r;
      this.r = qr(o, r, t + 1 / 3), this.g = qr(o, r, t), this.b = qr(o, r, t - 1 / 3);
    }
    return qt.toWorkingColorSpace(this, i), this;
  }
  setStyle(t, e = Me) {
    function n(r) {
      r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(t)) {
      let r;
      const o = i[1], a = i[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(r[4]), this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, e);
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(r[4]), this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, e);
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(r[4]), this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, e);
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + t);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(t)) {
      const r = i[1], o = r.length;
      if (o === 3) return this.setRGB(parseInt(r.charAt(0), 16) / 15, parseInt(r.charAt(1), 16) / 15, parseInt(r.charAt(2), 16) / 15, e);
      if (o === 6) return this.setHex(parseInt(r, 16), e);
      console.warn("THREE.Color: Invalid hex color " + t);
    } else if (t && t.length > 0) return this.setColorName(t, e);
    return this;
  }
  setColorName(t, e = Me) {
    const n = Wc[t.toLowerCase()];
    return n !== void 0 ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(t) {
    return this.r = t.r, this.g = t.g, this.b = t.b, this;
  }
  copySRGBToLinear(t) {
    return this.r = An(t.r), this.g = An(t.g), this.b = An(t.b), this;
  }
  copyLinearToSRGB(t) {
    return this.r = Oi(t.r), this.g = Oi(t.g), this.b = Oi(t.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(t = Me) {
    return qt.fromWorkingColorSpace(Ae.copy(this), t), Math.round(Ht(Ae.r * 255, 0, 255)) * 65536 + Math.round(Ht(Ae.g * 255, 0, 255)) * 256 + Math.round(Ht(Ae.b * 255, 0, 255));
  }
  getHexString(t = Me) {
    return ("000000" + this.getHex(t).toString(16)).slice(-6);
  }
  getHSL(t, e = qt.workingColorSpace) {
    qt.fromWorkingColorSpace(Ae.copy(this), e);
    const n = Ae.r, i = Ae.g, r = Ae.b, o = Math.max(n, i, r), a = Math.min(n, i, r);
    let l, c;
    const h = (a + o) / 2;
    if (a === o) l = 0, c = 0;
    else {
      const u = o - a;
      switch (c = h <= 0.5 ? u / (o + a) : u / (2 - o - a), o) {
        case n:
          l = (i - r) / u + (i < r ? 6 : 0);
          break;
        case i:
          l = (r - n) / u + 2;
          break;
        case r:
          l = (n - i) / u + 4;
          break;
      }
      l /= 6;
    }
    return t.h = l, t.s = c, t.l = h, t;
  }
  getRGB(t, e = qt.workingColorSpace) {
    return qt.fromWorkingColorSpace(Ae.copy(this), e), t.r = Ae.r, t.g = Ae.g, t.b = Ae.b, t;
  }
  getStyle(t = Me) {
    qt.fromWorkingColorSpace(Ae.copy(this), t);
    const e = Ae.r, n = Ae.g, i = Ae.b;
    return t !== Me ? "color(".concat(t, " ").concat(e.toFixed(3), " ").concat(n.toFixed(3), " ").concat(i.toFixed(3), ")") : "rgb(".concat(Math.round(e * 255), ",").concat(Math.round(n * 255), ",").concat(Math.round(i * 255), ")");
  }
  offsetHSL(t, e, n) {
    return this.getHSL(In), this.setHSL(In.h + t, In.s + e, In.l + n);
  }
  add(t) {
    return this.r += t.r, this.g += t.g, this.b += t.b, this;
  }
  addColors(t, e) {
    return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this;
  }
  addScalar(t) {
    return this.r += t, this.g += t, this.b += t, this;
  }
  sub(t) {
    return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
  }
  multiply(t) {
    return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
  }
  multiplyScalar(t) {
    return this.r *= t, this.g *= t, this.b *= t, this;
  }
  lerp(t, e) {
    return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this;
  }
  lerpColors(t, e, n) {
    return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, this;
  }
  lerpHSL(t, e) {
    this.getHSL(In), t.getHSL(ks);
    const n = ms(In.h, ks.h, e), i = ms(In.s, ks.s, e), r = ms(In.l, ks.l, e);
    return this.setHSL(n, i, r), this;
  }
  setFromVector3(t) {
    return this.r = t.x, this.g = t.y, this.b = t.z, this;
  }
  applyMatrix3(t) {
    const e = this.r, n = this.g, i = this.b, r = t.elements;
    return this.r = r[0] * e + r[3] * n + r[6] * i, this.g = r[1] * e + r[4] * n + r[7] * i, this.b = r[2] * e + r[5] * n + r[8] * i, this;
  }
  equals(t) {
    return t.r === this.r && t.g === this.g && t.b === this.b;
  }
  fromArray(t, e = 0) {
    return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t;
  }
  fromBufferAttribute(t, e) {
    return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Ae = new It();
It.NAMES = Wc;
let sd = 0;
class sn extends Gn {
  constructor() {
    super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: sd++ }), this.uuid = je(), this.name = "", this.type = "Material", this.blending = Ui, this.side = bn, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = vo, this.blendDst = xo, this.blendEquation = si, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new It(0, 0, 0), this.blendAlpha = 0, this.depthFunc = ki, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = Ja, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = fi, this.stencilZFail = fi, this.stencilZPass = fi, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(t) {
    this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t;
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(t) {
    if (t !== void 0) for (const e in t) {
      const n = t[e];
      if (n === void 0) {
        console.warn("THREE.Material: parameter '".concat(e, "' has value of undefined."));
        continue;
      }
      const i = this[e];
      if (i === void 0) {
        console.warn("THREE.Material: '".concat(e, "' is not a property of THREE.").concat(this.type, "."));
        continue;
      }
      i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n;
    }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    e && (t = { textures: {}, images: {} });
    const n = { metadata: { version: 4.6, type: "Material", generator: "Material.toJSON" } };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Ui && (n.blending = this.blending), this.side !== bn && (n.side = this.side), this.vertexColors === true && (n.vertexColors = true), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === true && (n.transparent = true), this.blendSrc !== vo && (n.blendSrc = this.blendSrc), this.blendDst !== xo && (n.blendDst = this.blendDst), this.blendEquation !== si && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== ki && (n.depthFunc = this.depthFunc), this.depthTest === false && (n.depthTest = this.depthTest), this.depthWrite === false && (n.depthWrite = this.depthWrite), this.colorWrite === false && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== Ja && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== fi && (n.stencilFail = this.stencilFail), this.stencilZFail !== fi && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== fi && (n.stencilZPass = this.stencilZPass), this.stencilWrite === true && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === true && (n.polygonOffset = true), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === true && (n.dithering = true), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === true && (n.alphaHash = true), this.alphaToCoverage === true && (n.alphaToCoverage = true), this.premultipliedAlpha === true && (n.premultipliedAlpha = true), this.forceSinglePass === true && (n.forceSinglePass = true), this.wireframe === true && (n.wireframe = true), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (n.flatShading = true), this.visible === false && (n.visible = false), this.toneMapped === false && (n.toneMapped = false), this.fog === false && (n.fog = false), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(r) {
      const o = [];
      for (const a in r) {
        const l = r[a];
        delete l.metadata, o.push(l);
      }
      return o;
    }
    if (e) {
      const r = i(t.textures), o = i(t.images);
      r.length > 0 && (n.textures = r), o.length > 0 && (n.images = o);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.blendColor.copy(t.blendColor), this.blendAlpha = t.blendAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
    const e = t.clippingPlanes;
    let n = null;
    if (e !== null) {
      const i = e.length;
      n = new Array(i);
      for (let r = 0; r !== i; ++r) n[r] = e[r].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaHash = t.alphaHash, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.forceSinglePass = t.forceSinglePass, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(t) {
    t === true && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class oi extends sn {
  constructor(t) {
    super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new It(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new rn(), this.combine = pa, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
  }
}
const pe = new w(), zs = new Q();
class Le {
  constructor(t, e, n = false) {
    if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = true, this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = n, this.usage = na, this.updateRanges = [], this.gpuType = nn, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(t) {
    t === true && this.version++;
  }
  setUsage(t) {
    return this.usage = t, this;
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(t) {
    return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this.gpuType = t.gpuType, this;
  }
  copyAt(t, e, n) {
    t *= this.itemSize, n *= e.itemSize;
    for (let i = 0, r = this.itemSize; i < r; i++) this.array[t + i] = e.array[n + i];
    return this;
  }
  copyArray(t) {
    return this.array.set(t), this;
  }
  applyMatrix3(t) {
    if (this.itemSize === 2) for (let e = 0, n = this.count; e < n; e++) zs.fromBufferAttribute(this, e), zs.applyMatrix3(t), this.setXY(e, zs.x, zs.y);
    else if (this.itemSize === 3) for (let e = 0, n = this.count; e < n; e++) pe.fromBufferAttribute(this, e), pe.applyMatrix3(t), this.setXYZ(e, pe.x, pe.y, pe.z);
    return this;
  }
  applyMatrix4(t) {
    for (let e = 0, n = this.count; e < n; e++) pe.fromBufferAttribute(this, e), pe.applyMatrix4(t), this.setXYZ(e, pe.x, pe.y, pe.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++) pe.fromBufferAttribute(this, e), pe.applyNormalMatrix(t), this.setXYZ(e, pe.x, pe.y, pe.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++) pe.fromBufferAttribute(this, e), pe.transformDirection(t), this.setXYZ(e, pe.x, pe.y, pe.z);
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  getComponent(t, e) {
    let n = this.array[t * this.itemSize + e];
    return this.normalized && (n = tn(n, this.array)), n;
  }
  setComponent(t, e, n) {
    return this.normalized && (n = ie(n, this.array)), this.array[t * this.itemSize + e] = n, this;
  }
  getX(t) {
    let e = this.array[t * this.itemSize];
    return this.normalized && (e = tn(e, this.array)), e;
  }
  setX(t, e) {
    return this.normalized && (e = ie(e, this.array)), this.array[t * this.itemSize] = e, this;
  }
  getY(t) {
    let e = this.array[t * this.itemSize + 1];
    return this.normalized && (e = tn(e, this.array)), e;
  }
  setY(t, e) {
    return this.normalized && (e = ie(e, this.array)), this.array[t * this.itemSize + 1] = e, this;
  }
  getZ(t) {
    let e = this.array[t * this.itemSize + 2];
    return this.normalized && (e = tn(e, this.array)), e;
  }
  setZ(t, e) {
    return this.normalized && (e = ie(e, this.array)), this.array[t * this.itemSize + 2] = e, this;
  }
  getW(t) {
    let e = this.array[t * this.itemSize + 3];
    return this.normalized && (e = tn(e, this.array)), e;
  }
  setW(t, e) {
    return this.normalized && (e = ie(e, this.array)), this.array[t * this.itemSize + 3] = e, this;
  }
  setXY(t, e, n) {
    return t *= this.itemSize, this.normalized && (e = ie(e, this.array), n = ie(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this;
  }
  setXYZ(t, e, n, i) {
    return t *= this.itemSize, this.normalized && (e = ie(e, this.array), n = ie(n, this.array), i = ie(i, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this;
  }
  setXYZW(t, e, n, i, r) {
    return t *= this.itemSize, this.normalized && (e = ie(e, this.array), n = ie(n, this.array), i = ie(i, this.array), r = ie(r, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this.array[t + 3] = r, this;
  }
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const t = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
    return this.name !== "" && (t.name = this.name), this.usage !== na && (t.usage = this.usage), t;
  }
}
class Xc extends Le {
  constructor(t, e, n) {
    super(new Uint16Array(t), e, n);
  }
}
class Yc extends Le {
  constructor(t, e, n) {
    super(new Uint32Array(t), e, n);
  }
}
class le extends Le {
  constructor(t, e, n) {
    super(new Float32Array(t), e, n);
  }
}
let rd = 0;
const We = new Ot(), jr = new ae(), Ei = new w(), ke = new wn(), rs = new wn(), ve = new w();
class be extends Gn {
  constructor() {
    super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: rd++ }), this.uuid = je(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return Array.isArray(t) ? this.index = new (Hc(t) ? Yc : Xc)(t, 1) : this.index = t, this;
  }
  setIndirect(t) {
    return this.indirect = t, this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  setAttribute(t, e) {
    return this.attributes[t] = e, this;
  }
  deleteAttribute(t) {
    return delete this.attributes[t], this;
  }
  hasAttribute(t) {
    return this.attributes[t] !== void 0;
  }
  addGroup(t, e, n = 0) {
    this.groups.push({ start: t, count: e, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(t, e) {
    this.drawRange.start = t, this.drawRange.count = e;
  }
  applyMatrix4(t) {
    const e = this.attributes.position;
    e !== void 0 && (e.applyMatrix4(t), e.needsUpdate = true);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new zt().getNormalMatrix(t);
      n.applyNormalMatrix(r), n.needsUpdate = true;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(t), i.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(t) {
    return We.makeRotationFromQuaternion(t), this.applyMatrix4(We), this;
  }
  rotateX(t) {
    return We.makeRotationX(t), this.applyMatrix4(We), this;
  }
  rotateY(t) {
    return We.makeRotationY(t), this.applyMatrix4(We), this;
  }
  rotateZ(t) {
    return We.makeRotationZ(t), this.applyMatrix4(We), this;
  }
  translate(t, e, n) {
    return We.makeTranslation(t, e, n), this.applyMatrix4(We), this;
  }
  scale(t, e, n) {
    return We.makeScale(t, e, n), this.applyMatrix4(We), this;
  }
  lookAt(t) {
    return jr.lookAt(t), jr.updateMatrix(), this.applyMatrix4(jr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Ei).negate(), this.translate(Ei.x, Ei.y, Ei.z), this;
  }
  setFromPoints(t) {
    const e = this.getAttribute("position");
    if (e === void 0) {
      const n = [];
      for (let i = 0, r = t.length; i < r; i++) {
        const o = t[i];
        n.push(o.x, o.y, o.z || 0);
      }
      this.setAttribute("position", new le(n, 3));
    } else {
      const n = Math.min(t.length, e.count);
      for (let i = 0; i < n; i++) {
        const r = t[i];
        e.setXYZ(i, r.x, r.y, r.z || 0);
      }
      t.length > e.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), e.needsUpdate = true;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new wn());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new w(-1 / 0, -1 / 0, -1 / 0), new w(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (t !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(t), e) for (let n = 0, i = e.length; n < i; n++) {
        const r = e[n];
        ke.setFromBufferAttribute(r), this.morphTargetsRelative ? (ve.addVectors(this.boundingBox.min, ke.min), this.boundingBox.expandByPoint(ve), ve.addVectors(this.boundingBox.max, ke.max), this.boundingBox.expandByPoint(ve)) : (this.boundingBox.expandByPoint(ke.min), this.boundingBox.expandByPoint(ke.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new cn());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new w(), 1 / 0);
      return;
    }
    if (t) {
      const n = this.boundingSphere.center;
      if (ke.setFromBufferAttribute(t), e) for (let r = 0, o = e.length; r < o; r++) {
        const a = e[r];
        rs.setFromBufferAttribute(a), this.morphTargetsRelative ? (ve.addVectors(ke.min, rs.min), ke.expandByPoint(ve), ve.addVectors(ke.max, rs.max), ke.expandByPoint(ve)) : (ke.expandByPoint(rs.min), ke.expandByPoint(rs.max));
      }
      ke.getCenter(n);
      let i = 0;
      for (let r = 0, o = t.count; r < o; r++) ve.fromBufferAttribute(t, r), i = Math.max(i, n.distanceToSquared(ve));
      if (e) for (let r = 0, o = e.length; r < o; r++) {
        const a = e[r], l = this.morphTargetsRelative;
        for (let c = 0, h = a.count; c < h; c++) ve.fromBufferAttribute(a, c), l && (Ei.fromBufferAttribute(t, c), ve.add(Ei)), i = Math.max(i, n.distanceToSquared(ve));
      }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const t = this.index, e = this.attributes;
    if (t === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.position, i = e.normal, r = e.uv;
    this.hasAttribute("tangent") === false && this.setAttribute("tangent", new Le(new Float32Array(4 * n.count), 4));
    const o = this.getAttribute("tangent"), a = [], l = [];
    for (let I = 0; I < n.count; I++) a[I] = new w(), l[I] = new w();
    const c = new w(), h = new w(), u = new w(), d = new Q(), f = new Q(), g = new Q(), _ = new w(), m = new w();
    function p(I, E, y) {
      c.fromBufferAttribute(n, I), h.fromBufferAttribute(n, E), u.fromBufferAttribute(n, y), d.fromBufferAttribute(r, I), f.fromBufferAttribute(r, E), g.fromBufferAttribute(r, y), h.sub(c), u.sub(c), f.sub(d), g.sub(d);
      const P = 1 / (f.x * g.y - g.x * f.y);
      isFinite(P) && (_.copy(h).multiplyScalar(g.y).addScaledVector(u, -f.y).multiplyScalar(P), m.copy(u).multiplyScalar(f.x).addScaledVector(h, -g.x).multiplyScalar(P), a[I].add(_), a[E].add(_), a[y].add(_), l[I].add(m), l[E].add(m), l[y].add(m));
    }
    let b = this.groups;
    b.length === 0 && (b = [{ start: 0, count: t.count }]);
    for (let I = 0, E = b.length; I < E; ++I) {
      const y = b[I], P = y.start, V = y.count;
      for (let O = P, z = P + V; O < z; O += 3) p(t.getX(O + 0), t.getX(O + 1), t.getX(O + 2));
    }
    const S = new w(), x = new w(), L = new w(), R = new w();
    function C(I) {
      L.fromBufferAttribute(i, I), R.copy(L);
      const E = a[I];
      S.copy(E), S.sub(L.multiplyScalar(L.dot(E))).normalize(), x.crossVectors(R, E);
      const P = x.dot(l[I]) < 0 ? -1 : 1;
      o.setXYZW(I, S.x, S.y, S.z, P);
    }
    for (let I = 0, E = b.length; I < E; ++I) {
      const y = b[I], P = y.start, V = y.count;
      for (let O = P, z = P + V; O < z; O += 3) C(t.getX(O + 0)), C(t.getX(O + 1)), C(t.getX(O + 2));
    }
  }
  computeVertexNormals() {
    const t = this.index, e = this.getAttribute("position");
    if (e !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0) n = new Le(new Float32Array(e.count * 3), 3), this.setAttribute("normal", n);
      else for (let d = 0, f = n.count; d < f; d++) n.setXYZ(d, 0, 0, 0);
      const i = new w(), r = new w(), o = new w(), a = new w(), l = new w(), c = new w(), h = new w(), u = new w();
      if (t) for (let d = 0, f = t.count; d < f; d += 3) {
        const g = t.getX(d + 0), _ = t.getX(d + 1), m = t.getX(d + 2);
        i.fromBufferAttribute(e, g), r.fromBufferAttribute(e, _), o.fromBufferAttribute(e, m), h.subVectors(o, r), u.subVectors(i, r), h.cross(u), a.fromBufferAttribute(n, g), l.fromBufferAttribute(n, _), c.fromBufferAttribute(n, m), a.add(h), l.add(h), c.add(h), n.setXYZ(g, a.x, a.y, a.z), n.setXYZ(_, l.x, l.y, l.z), n.setXYZ(m, c.x, c.y, c.z);
      }
      else for (let d = 0, f = e.count; d < f; d += 3) i.fromBufferAttribute(e, d + 0), r.fromBufferAttribute(e, d + 1), o.fromBufferAttribute(e, d + 2), h.subVectors(o, r), u.subVectors(i, r), h.cross(u), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = true;
    }
  }
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let e = 0, n = t.count; e < n; e++) ve.fromBufferAttribute(t, e), ve.normalize(), t.setXYZ(e, ve.x, ve.y, ve.z);
  }
  toNonIndexed() {
    function t(a, l) {
      const c = a.array, h = a.itemSize, u = a.normalized, d = new c.constructor(l.length * h);
      let f = 0, g = 0;
      for (let _ = 0, m = l.length; _ < m; _++) {
        a.isInterleavedBufferAttribute ? f = l[_] * a.data.stride + a.offset : f = l[_] * h;
        for (let p = 0; p < h; p++) d[g++] = c[f++];
      }
      return new Le(d, h, u);
    }
    if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const e = new be(), n = this.index.array, i = this.attributes;
    for (const a in i) {
      const l = i[a], c = t(l, n);
      e.setAttribute(a, c);
    }
    const r = this.morphAttributes;
    for (const a in r) {
      const l = [], c = r[a];
      for (let h = 0, u = c.length; h < u; h++) {
        const d = c[h], f = t(d, n);
        l.push(f);
      }
      e.morphAttributes[a] = l;
    }
    e.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, l = o.length; a < l; a++) {
      const c = o[a];
      e.addGroup(c.start, c.count, c.materialIndex);
    }
    return e;
  }
  toJSON() {
    const t = { metadata: { version: 4.6, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
    if (t.uuid = this.uuid, t.type = this.type, this.name !== "" && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (t[c] = l[c]);
      return t;
    }
    t.data = { attributes: {} };
    const e = this.index;
    e !== null && (t.data.index = { type: e.array.constructor.name, array: Array.prototype.slice.call(e.array) });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      t.data.attributes[l] = c.toJSON(t.data);
    }
    const i = {};
    let r = false;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], h = [];
      for (let u = 0, d = c.length; u < d; u++) {
        const f = c[u];
        h.push(f.toJSON(t.data));
      }
      h.length > 0 && (i[l] = h, r = true);
    }
    r && (t.data.morphAttributes = i, t.data.morphTargetsRelative = this.morphTargetsRelative);
    const o = this.groups;
    o.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return a !== null && (t.data.boundingSphere = { center: a.center.toArray(), radius: a.radius }), t;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const e = {};
    this.name = t.name;
    const n = t.index;
    n !== null && this.setIndex(n.clone(e));
    const i = t.attributes;
    for (const c in i) {
      const h = i[c];
      this.setAttribute(c, h.clone(e));
    }
    const r = t.morphAttributes;
    for (const c in r) {
      const h = [], u = r[c];
      for (let d = 0, f = u.length; d < f; d++) h.push(u[d].clone(e));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const o = t.groups;
    for (let c = 0, h = o.length; c < h; c++) {
      const u = o[c];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const a = t.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const l = t.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const fl = new Ot(), jn = new Ki(), Hs = new cn(), pl = new w(), Vs = new w(), Gs = new w(), Ws = new w(), $r = new w(), Xs = new w(), ml = new w(), Ys = new w();
class He extends ae {
  constructor(t = new be(), e = new oi()) {
    super(), this.isMesh = true, this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), t.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, n = Object.keys(e);
    if (n.length > 0) {
      const i = e[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = i.length; r < o; r++) {
          const a = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
  getVertexPosition(t, e) {
    const n = this.geometry, i = n.attributes.position, r = n.morphAttributes.position, o = n.morphTargetsRelative;
    e.fromBufferAttribute(i, t);
    const a = this.morphTargetInfluences;
    if (r && a) {
      Xs.set(0, 0, 0);
      for (let l = 0, c = r.length; l < c; l++) {
        const h = a[l], u = r[l];
        h !== 0 && ($r.fromBufferAttribute(u, t), o ? Xs.addScaledVector($r, h) : Xs.addScaledVector($r.sub(e), h));
      }
      e.add(Xs);
    }
    return e;
  }
  raycast(t, e) {
    const n = this.geometry, i = this.material, r = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Hs.copy(n.boundingSphere), Hs.applyMatrix4(r), jn.copy(t.ray).recast(t.near), !(Hs.containsPoint(jn.origin) === false && (jn.intersectSphere(Hs, pl) === null || jn.origin.distanceToSquared(pl) > (t.far - t.near) ** 2)) && (fl.copy(r).invert(), jn.copy(t.ray).applyMatrix4(fl), !(n.boundingBox !== null && jn.intersectsBox(n.boundingBox) === false) && this._computeIntersections(t, e, jn)));
  }
  _computeIntersections(t, e, n) {
    let i;
    const r = this.geometry, o = this.material, a = r.index, l = r.attributes.position, c = r.attributes.uv, h = r.attributes.uv1, u = r.attributes.normal, d = r.groups, f = r.drawRange;
    if (a !== null) if (Array.isArray(o)) for (let g = 0, _ = d.length; g < _; g++) {
      const m = d[g], p = o[m.materialIndex], b = Math.max(m.start, f.start), S = Math.min(a.count, Math.min(m.start + m.count, f.start + f.count));
      for (let x = b, L = S; x < L; x += 3) {
        const R = a.getX(x), C = a.getX(x + 1), I = a.getX(x + 2);
        i = qs(this, p, t, n, c, h, u, R, C, I), i && (i.faceIndex = Math.floor(x / 3), i.face.materialIndex = m.materialIndex, e.push(i));
      }
    }
    else {
      const g = Math.max(0, f.start), _ = Math.min(a.count, f.start + f.count);
      for (let m = g, p = _; m < p; m += 3) {
        const b = a.getX(m), S = a.getX(m + 1), x = a.getX(m + 2);
        i = qs(this, o, t, n, c, h, u, b, S, x), i && (i.faceIndex = Math.floor(m / 3), e.push(i));
      }
    }
    else if (l !== void 0) if (Array.isArray(o)) for (let g = 0, _ = d.length; g < _; g++) {
      const m = d[g], p = o[m.materialIndex], b = Math.max(m.start, f.start), S = Math.min(l.count, Math.min(m.start + m.count, f.start + f.count));
      for (let x = b, L = S; x < L; x += 3) {
        const R = x, C = x + 1, I = x + 2;
        i = qs(this, p, t, n, c, h, u, R, C, I), i && (i.faceIndex = Math.floor(x / 3), i.face.materialIndex = m.materialIndex, e.push(i));
      }
    }
    else {
      const g = Math.max(0, f.start), _ = Math.min(l.count, f.start + f.count);
      for (let m = g, p = _; m < p; m += 3) {
        const b = m, S = m + 1, x = m + 2;
        i = qs(this, o, t, n, c, h, u, b, S, x), i && (i.faceIndex = Math.floor(m / 3), e.push(i));
      }
    }
  }
}
function od(s, t, e, n, i, r, o, a) {
  let l;
  if (t.side === Fe ? l = n.intersectTriangle(o, r, i, true, a) : l = n.intersectTriangle(i, r, o, t.side === bn, a), l === null) return null;
  Ys.copy(a), Ys.applyMatrix4(s.matrixWorld);
  const c = e.ray.origin.distanceTo(Ys);
  return c < e.near || c > e.far ? null : { distance: c, point: Ys.clone(), object: s };
}
function qs(s, t, e, n, i, r, o, a, l, c) {
  s.getVertexPosition(a, Vs), s.getVertexPosition(l, Gs), s.getVertexPosition(c, Ws);
  const h = od(s, t, e, n, Vs, Gs, Ws, ml);
  if (h) {
    const u = new w();
    en.getBarycoord(ml, Vs, Gs, Ws, u), i && (h.uv = en.getInterpolatedAttribute(i, a, l, c, u, new Q())), r && (h.uv1 = en.getInterpolatedAttribute(r, a, l, c, u, new Q())), o && (h.normal = en.getInterpolatedAttribute(o, a, l, c, u, new w()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const d = { a, b: l, c, normal: new w(), materialIndex: 0 };
    en.getNormal(Vs, Gs, Ws, d.normal), h.face = d, h.barycoord = u;
  }
  return h;
}
class Zi extends be {
  constructor(t = 1, e = 1, n = 1, i = 1, r = 1, o = 1) {
    super(), this.type = "BoxGeometry", this.parameters = { width: t, height: e, depth: n, widthSegments: i, heightSegments: r, depthSegments: o };
    const a = this;
    i = Math.floor(i), r = Math.floor(r), o = Math.floor(o);
    const l = [], c = [], h = [], u = [];
    let d = 0, f = 0;
    g("z", "y", "x", -1, -1, n, e, t, o, r, 0), g("z", "y", "x", 1, -1, n, e, -t, o, r, 1), g("x", "z", "y", 1, 1, t, n, e, i, o, 2), g("x", "z", "y", 1, -1, t, n, -e, i, o, 3), g("x", "y", "z", 1, -1, t, e, n, i, r, 4), g("x", "y", "z", -1, -1, t, e, -n, i, r, 5), this.setIndex(l), this.setAttribute("position", new le(c, 3)), this.setAttribute("normal", new le(h, 3)), this.setAttribute("uv", new le(u, 2));
    function g(_, m, p, b, S, x, L, R, C, I, E) {
      const y = x / C, P = L / I, V = x / 2, O = L / 2, z = R / 2, j = C + 1, H = I + 1;
      let nt = 0, G = 0;
      const at = new w();
      for (let mt = 0; mt < H; mt++) {
        const Mt = mt * P - O;
        for (let Bt = 0; Bt < j; Bt++) {
          const Jt = Bt * y - V;
          at[_] = Jt * b, at[m] = Mt * S, at[p] = z, c.push(at.x, at.y, at.z), at[_] = 0, at[m] = 0, at[p] = R > 0 ? 1 : -1, h.push(at.x, at.y, at.z), u.push(Bt / C), u.push(1 - mt / I), nt += 1;
        }
      }
      for (let mt = 0; mt < I; mt++) for (let Mt = 0; Mt < C; Mt++) {
        const Bt = d + Mt + j * mt, Jt = d + Mt + j * (mt + 1), q = d + (Mt + 1) + j * (mt + 1), st = d + (Mt + 1) + j * mt;
        l.push(Bt, Jt, st), l.push(Jt, q, st), G += 6;
      }
      a.addGroup(f, G, E), f += G, d += nt;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Zi(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
  }
}
function Yi(s) {
  const t = {};
  for (const e in s) {
    t[e] = {};
    for (const n in s[e]) {
      const i = s[e][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[e][n] = null) : t[e][n] = i.clone() : Array.isArray(i) ? t[e][n] = i.slice() : t[e][n] = i;
    }
  }
  return t;
}
function Re(s) {
  const t = {};
  for (let e = 0; e < s.length; e++) {
    const n = Yi(s[e]);
    for (const i in n) t[i] = n[i];
  }
  return t;
}
function ad(s) {
  const t = [];
  for (let e = 0; e < s.length; e++) t.push(s[e].clone());
  return t;
}
function qc(s) {
  const t = s.getRenderTarget();
  return t === null ? s.outputColorSpace : t.isXRRenderTarget === true ? t.texture.colorSpace : qt.workingColorSpace;
}
const ld = { clone: Yi, merge: Re };
var cd = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", hd = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";
class Vn extends sn {
  constructor(t) {
    super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = cd, this.fragmentShader = hd, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, t !== void 0 && this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = Yi(t.uniforms), this.uniformsGroups = ad(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    e.glslVersion = this.glslVersion, e.uniforms = {};
    for (const i in this.uniforms) {
      const o = this.uniforms[i].value;
      o && o.isTexture ? e.uniforms[i] = { type: "t", value: o.toJSON(t).uuid } : o && o.isColor ? e.uniforms[i] = { type: "c", value: o.getHex() } : o && o.isVector2 ? e.uniforms[i] = { type: "v2", value: o.toArray() } : o && o.isVector3 ? e.uniforms[i] = { type: "v3", value: o.toArray() } : o && o.isVector4 ? e.uniforms[i] = { type: "v4", value: o.toArray() } : o && o.isMatrix3 ? e.uniforms[i] = { type: "m3", value: o.toArray() } : o && o.isMatrix4 ? e.uniforms[i] = { type: "m4", value: o.toArray() } : e.uniforms[i] = { value: o };
    }
    Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e.lights = this.lights, e.clipping = this.clipping;
    const n = {};
    for (const i in this.extensions) this.extensions[i] === true && (n[i] = true);
    return Object.keys(n).length > 0 && (e.extensions = n), e;
  }
}
class jc extends ae {
  constructor() {
    super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new Ot(), this.projectionMatrix = new Ot(), this.projectionMatrixInverse = new Ot(), this.coordinateSystem = En;
  }
  copy(t, e) {
    return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this.coordinateSystem = t.coordinateSystem, this;
  }
  getWorldDirection(t) {
    return super.getWorldDirection(t).negate();
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(t, e) {
    super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Dn = new w(), gl = new Q(), _l = new Q();
class Ue extends jc {
  constructor(t = 50, e = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = t.view === null ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this;
  }
  setFocalLength(t) {
    const e = 0.5 * this.getFilmHeight() / t;
    this.fov = Xi * 2 * Math.atan(e), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const t = Math.tan(ps * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / t;
  }
  getEffectiveFOV() {
    return Xi * 2 * Math.atan(Math.tan(ps * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(t, e, n) {
    Dn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), e.set(Dn.x, Dn.y).multiplyScalar(-t / Dn.z), Dn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(Dn.x, Dn.y).multiplyScalar(-t / Dn.z);
  }
  getViewSize(t, e) {
    return this.getViewBounds(t, gl, _l), e.subVectors(_l, gl);
  }
  setViewOffset(t, e, n, i, r, o) {
    this.aspect = t / e, this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = this.near;
    let e = t * Math.tan(ps * 0.5 * this.fov) / this.zoom, n = 2 * e, i = this.aspect * n, r = -0.5 * i;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = o.fullWidth, c = o.fullHeight;
      r += o.offsetX * i / l, e -= o.offsetY * n / c, i *= o.width / l, n *= o.height / c;
    }
    const a = this.filmOffset;
    a !== 0 && (r += t * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, this.view !== null && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
  }
}
const Ai = -90, bi = 1;
class ud extends ae {
  constructor(t, e, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const i = new Ue(Ai, bi, t, e);
    i.layers = this.layers, this.add(i);
    const r = new Ue(Ai, bi, t, e);
    r.layers = this.layers, this.add(r);
    const o = new Ue(Ai, bi, t, e);
    o.layers = this.layers, this.add(o);
    const a = new Ue(Ai, bi, t, e);
    a.layers = this.layers, this.add(a);
    const l = new Ue(Ai, bi, t, e);
    l.layers = this.layers, this.add(l);
    const c = new Ue(Ai, bi, t, e);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const t = this.coordinateSystem, e = this.children.concat(), [n, i, r, o, a, l] = e;
    for (const c of e) this.remove(c);
    if (t === En) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (t === Mr) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t);
    for (const c of e) this.add(c), c.updateMatrixWorld();
  }
  update(t, e) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== t.coordinateSystem && (this.coordinateSystem = t.coordinateSystem, this.updateCoordinateSystem());
    const [r, o, a, l, c, h] = this.children, u = t.getRenderTarget(), d = t.getActiveCubeFace(), f = t.getActiveMipmapLevel(), g = t.xr.enabled;
    t.xr.enabled = false;
    const _ = n.texture.generateMipmaps;
    n.texture.generateMipmaps = false, t.setRenderTarget(n, 0, i), t.render(e, r), t.setRenderTarget(n, 1, i), t.render(e, o), t.setRenderTarget(n, 2, i), t.render(e, a), t.setRenderTarget(n, 3, i), t.render(e, l), t.setRenderTarget(n, 4, i), t.render(e, c), n.texture.generateMipmaps = _, t.setRenderTarget(n, 5, i), t.render(e, h), t.setRenderTarget(u, d, f), t.xr.enabled = g, n.texture.needsPMREMUpdate = true;
  }
}
class $c extends xe {
  constructor(t, e, n, i, r, o, a, l, c, h) {
    t = t !== void 0 ? t : [], e = e !== void 0 ? e : zi, super(t, e, n, i, r, o, a, l, c, h), this.isCubeTexture = true, this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(t) {
    this.image = t;
  }
}
class dd extends ci {
  constructor(t = 1, e = {}) {
    super(t, t, e), this.isWebGLCubeRenderTarget = true;
    const n = { width: t, height: t, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new $c(i, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.colorSpace), this.texture.isRenderTargetTexture = true, this.texture.generateMipmaps = e.generateMipmaps !== void 0 ? e.generateMipmaps : false, this.texture.minFilter = e.minFilter !== void 0 ? e.minFilter : ze;
  }
  fromEquirectangularTexture(t, e) {
    this.texture.type = e.type, this.texture.colorSpace = e.colorSpace, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
    const n = { uniforms: { tEquirect: { value: null } }, vertexShader: "\n\n				varying vec3 vWorldDirection;\n\n				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n				}\n\n				void main() {\n\n					vWorldDirection = transformDirection( position, modelMatrix );\n\n					#include <begin_vertex>\n					#include <project_vertex>\n\n				}\n			", fragmentShader: "\n\n				uniform sampler2D tEquirect;\n\n				varying vec3 vWorldDirection;\n\n				#include <common>\n\n				void main() {\n\n					vec3 direction = normalize( vWorldDirection );\n\n					vec2 sampleUV = equirectUv( direction );\n\n					gl_FragColor = texture2D( tEquirect, sampleUV );\n\n				}\n			" }, i = new Zi(5, 5, 5), r = new Vn({ name: "CubemapFromEquirect", uniforms: Yi(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: Fe, blending: kn });
    r.uniforms.tEquirect.value = e;
    const o = new He(i, r), a = e.minFilter;
    return e.minFilter === Sn && (e.minFilter = ze), new ud(1, 10, this).update(t, o), e.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(t, e, n, i) {
    const r = t.getRenderTarget();
    for (let o = 0; o < 6; o++) t.setRenderTarget(this, o), t.clear(e, n, i);
    t.setRenderTarget(r);
  }
}
class Rx extends ae {
  constructor() {
    super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new rn(), this.environmentIntensity = 1, this.environmentRotation = new rn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(t, e) {
    return super.copy(t, e), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, this.backgroundRotation.copy(t.backgroundRotation), this.environmentIntensity = t.environmentIntensity, this.environmentRotation.copy(t.environmentRotation), t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.fog !== null && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity), e.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (e.object.environmentIntensity = this.environmentIntensity), e.object.environmentRotation = this.environmentRotation.toArray(), e;
  }
}
class fd {
  constructor(t, e) {
    this.isInterleavedBuffer = true, this.array = t, this.stride = e, this.count = t !== void 0 ? t.length / e : 0, this.usage = na, this.updateRanges = [], this.version = 0, this.uuid = je();
  }
  onUploadCallback() {
  }
  set needsUpdate(t) {
    t === true && this.version++;
  }
  setUsage(t) {
    return this.usage = t, this;
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(t) {
    return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.usage = t.usage, this;
  }
  copyAt(t, e, n) {
    t *= this.stride, n *= e.stride;
    for (let i = 0, r = this.stride; i < r; i++) this.array[t + i] = e.array[n + i];
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  clone(t) {
    t.arrayBuffers === void 0 && (t.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = je()), t.arrayBuffers[this.array.buffer._uuid] === void 0 && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const e = new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(e, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  toJSON(t) {
    return t.arrayBuffers === void 0 && (t.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = je()), t.arrayBuffers[this.array.buffer._uuid] === void 0 && (t.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), { uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride };
  }
}
const we = new w();
class Ta {
  constructor(t, e, n, i = false) {
    this.isInterleavedBufferAttribute = true, this.name = "", this.data = t, this.itemSize = e, this.offset = n, this.normalized = i;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(t) {
    this.data.needsUpdate = t;
  }
  applyMatrix4(t) {
    for (let e = 0, n = this.data.count; e < n; e++) we.fromBufferAttribute(this, e), we.applyMatrix4(t), this.setXYZ(e, we.x, we.y, we.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++) we.fromBufferAttribute(this, e), we.applyNormalMatrix(t), this.setXYZ(e, we.x, we.y, we.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++) we.fromBufferAttribute(this, e), we.transformDirection(t), this.setXYZ(e, we.x, we.y, we.z);
    return this;
  }
  getComponent(t, e) {
    let n = this.array[t * this.data.stride + this.offset + e];
    return this.normalized && (n = tn(n, this.array)), n;
  }
  setComponent(t, e, n) {
    return this.normalized && (n = ie(n, this.array)), this.data.array[t * this.data.stride + this.offset + e] = n, this;
  }
  setX(t, e) {
    return this.normalized && (e = ie(e, this.array)), this.data.array[t * this.data.stride + this.offset] = e, this;
  }
  setY(t, e) {
    return this.normalized && (e = ie(e, this.array)), this.data.array[t * this.data.stride + this.offset + 1] = e, this;
  }
  setZ(t, e) {
    return this.normalized && (e = ie(e, this.array)), this.data.array[t * this.data.stride + this.offset + 2] = e, this;
  }
  setW(t, e) {
    return this.normalized && (e = ie(e, this.array)), this.data.array[t * this.data.stride + this.offset + 3] = e, this;
  }
  getX(t) {
    let e = this.data.array[t * this.data.stride + this.offset];
    return this.normalized && (e = tn(e, this.array)), e;
  }
  getY(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 1];
    return this.normalized && (e = tn(e, this.array)), e;
  }
  getZ(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 2];
    return this.normalized && (e = tn(e, this.array)), e;
  }
  getW(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 3];
    return this.normalized && (e = tn(e, this.array)), e;
  }
  setXY(t, e, n) {
    return t = t * this.data.stride + this.offset, this.normalized && (e = ie(e, this.array), n = ie(n, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this;
  }
  setXYZ(t, e, n, i) {
    return t = t * this.data.stride + this.offset, this.normalized && (e = ie(e, this.array), n = ie(n, this.array), i = ie(i, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this;
  }
  setXYZW(t, e, n, i, r) {
    return t = t * this.data.stride + this.offset, this.normalized && (e = ie(e, this.array), n = ie(n, this.array), i = ie(i, this.array), r = ie(r, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this.data.array[t + 3] = r, this;
  }
  clone(t) {
    if (t === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const e = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) e.push(this.data.array[i + r]);
      }
      return new Le(new this.array.constructor(e), this.itemSize, this.normalized);
    } else return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new Ta(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(t) {
    if (t === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const e = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) e.push(this.data.array[i + r]);
      }
      return { itemSize: this.itemSize, type: this.array.constructor.name, array: e, normalized: this.normalized };
    } else return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)), { isInterleavedBufferAttribute: true, itemSize: this.itemSize, data: this.data.uuid, offset: this.offset, normalized: this.normalized };
  }
}
const vl = new w(), xl = new Zt(), yl = new Zt(), pd = new w(), Ml = new Ot(), js = new w(), Kr = new cn(), Sl = new Ot(), Zr = new Ki();
class md extends He {
  constructor(t, e) {
    super(t, e), this.isSkinnedMesh = true, this.type = "SkinnedMesh", this.bindMode = Za, this.bindMatrix = new Ot(), this.bindMatrixInverse = new Ot(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const t = this.geometry;
    this.boundingBox === null && (this.boundingBox = new wn()), this.boundingBox.makeEmpty();
    const e = t.getAttribute("position");
    for (let n = 0; n < e.count; n++) this.getVertexPosition(n, js), this.boundingBox.expandByPoint(js);
  }
  computeBoundingSphere() {
    const t = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new cn()), this.boundingSphere.makeEmpty();
    const e = t.getAttribute("position");
    for (let n = 0; n < e.count; n++) this.getVertexPosition(n, js), this.boundingSphere.expandByPoint(js);
  }
  copy(t, e) {
    return super.copy(t, e), this.bindMode = t.bindMode, this.bindMatrix.copy(t.bindMatrix), this.bindMatrixInverse.copy(t.bindMatrixInverse), this.skeleton = t.skeleton, t.boundingBox !== null && (this.boundingBox = t.boundingBox.clone()), t.boundingSphere !== null && (this.boundingSphere = t.boundingSphere.clone()), this;
  }
  raycast(t, e) {
    const n = this.material, i = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Kr.copy(this.boundingSphere), Kr.applyMatrix4(i), t.ray.intersectsSphere(Kr) !== false && (Sl.copy(i).invert(), Zr.copy(t.ray).applyMatrix4(Sl), !(this.boundingBox !== null && Zr.intersectsBox(this.boundingBox) === false) && this._computeIntersections(t, e, Zr)));
  }
  getVertexPosition(t, e) {
    return super.getVertexPosition(t, e), this.applyBoneTransform(t, e), e;
  }
  bind(t, e) {
    this.skeleton = t, e === void 0 && (this.updateMatrixWorld(true), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.copy(e).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const t = new Zt(), e = this.geometry.attributes.skinWeight;
    for (let n = 0, i = e.count; n < i; n++) {
      t.fromBufferAttribute(e, n);
      const r = 1 / t.manhattanLength();
      r !== 1 / 0 ? t.multiplyScalar(r) : t.set(1, 0, 0, 0), e.setXYZW(n, t.x, t.y, t.z, t.w);
    }
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t), this.bindMode === Za ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === cu ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(t, e) {
    const n = this.skeleton, i = this.geometry;
    xl.fromBufferAttribute(i.attributes.skinIndex, t), yl.fromBufferAttribute(i.attributes.skinWeight, t), vl.copy(e).applyMatrix4(this.bindMatrix), e.set(0, 0, 0);
    for (let r = 0; r < 4; r++) {
      const o = yl.getComponent(r);
      if (o !== 0) {
        const a = xl.getComponent(r);
        Ml.multiplyMatrices(n.bones[a].matrixWorld, n.boneInverses[a]), e.addScaledVector(pd.copy(vl).applyMatrix4(Ml), o);
      }
    }
    return e.applyMatrix4(this.bindMatrixInverse);
  }
}
class Kc extends ae {
  constructor() {
    super(), this.isBone = true, this.type = "Bone";
  }
}
class Zc extends xe {
  constructor(t = null, e = 1, n = 1, i, r, o, a, l, c = Ce, h = Ce, u, d) {
    super(null, o, a, l, c, h, i, r, u, d), this.isDataTexture = true, this.image = { data: t, width: e, height: n }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
const El = new Ot(), gd = new Ot();
class wa {
  constructor(t = [], e = []) {
    this.uuid = je(), this.bones = t.slice(0), this.boneInverses = e, this.boneMatrices = null, this.boneTexture = null, this.init();
  }
  init() {
    const t = this.bones, e = this.boneInverses;
    if (this.boneMatrices = new Float32Array(t.length * 16), e.length === 0) this.calculateInverses();
    else if (t.length !== e.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, i = this.bones.length; n < i; n++) this.boneInverses.push(new Ot());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let t = 0, e = this.bones.length; t < e; t++) {
      const n = new Ot();
      this.bones[t] && n.copy(this.bones[t].matrixWorld).invert(), this.boneInverses.push(n);
    }
  }
  pose() {
    for (let t = 0, e = this.bones.length; t < e; t++) {
      const n = this.bones[t];
      n && n.matrixWorld.copy(this.boneInverses[t]).invert();
    }
    for (let t = 0, e = this.bones.length; t < e; t++) {
      const n = this.bones[t];
      n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const t = this.bones, e = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
    for (let r = 0, o = t.length; r < o; r++) {
      const a = t[r] ? t[r].matrixWorld : gd;
      El.multiplyMatrices(a, e[r]), El.toArray(n, r * 16);
    }
    i !== null && (i.needsUpdate = true);
  }
  clone() {
    return new wa(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let t = Math.sqrt(this.bones.length * 4);
    t = Math.ceil(t / 4) * 4, t = Math.max(t, 4);
    const e = new Float32Array(t * t * 4);
    e.set(this.boneMatrices);
    const n = new Zc(e, t, t, qe, nn);
    return n.needsUpdate = true, this.boneMatrices = e, this.boneTexture = n, this;
  }
  getBoneByName(t) {
    for (let e = 0, n = this.bones.length; e < n; e++) {
      const i = this.bones[e];
      if (i.name === t) return i;
    }
  }
  dispose() {
    this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
  }
  fromJSON(t, e) {
    this.uuid = t.uuid;
    for (let n = 0, i = t.bones.length; n < i; n++) {
      const r = t.bones[n];
      let o = e[r];
      o === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", r), o = new Kc()), this.bones.push(o), this.boneInverses.push(new Ot().fromArray(t.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const t = { metadata: { version: 4.6, type: "Skeleton", generator: "Skeleton.toJSON" }, bones: [], boneInverses: [] };
    t.uuid = this.uuid;
    const e = this.bones, n = this.boneInverses;
    for (let i = 0, r = e.length; i < r; i++) {
      const o = e[i];
      t.bones.push(o.uuid);
      const a = n[i];
      t.boneInverses.push(a.toArray());
    }
    return t;
  }
}
class ia extends Le {
  constructor(t, e, n, i = 1) {
    super(t, e, n), this.isInstancedBufferAttribute = true, this.meshPerAttribute = i;
  }
  copy(t) {
    return super.copy(t), this.meshPerAttribute = t.meshPerAttribute, this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.meshPerAttribute = this.meshPerAttribute, t.isInstancedBufferAttribute = true, t;
  }
}
const Ti = new Ot(), Al = new Ot(), $s = [], bl = new wn(), _d = new Ot(), os = new He(), as = new cn();
class vd extends He {
  constructor(t, e, n) {
    super(t, e), this.isInstancedMesh = true, this.instanceMatrix = new ia(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++) this.setMatrixAt(i, _d);
  }
  computeBoundingBox() {
    const t = this.geometry, e = this.count;
    this.boundingBox === null && (this.boundingBox = new wn()), t.boundingBox === null && t.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < e; n++) this.getMatrixAt(n, Ti), bl.copy(t.boundingBox).applyMatrix4(Ti), this.boundingBox.union(bl);
  }
  computeBoundingSphere() {
    const t = this.geometry, e = this.count;
    this.boundingSphere === null && (this.boundingSphere = new cn()), t.boundingSphere === null && t.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < e; n++) this.getMatrixAt(n, Ti), as.copy(t.boundingSphere).applyMatrix4(Ti), this.boundingSphere.union(as);
  }
  copy(t, e) {
    return super.copy(t, e), this.instanceMatrix.copy(t.instanceMatrix), t.morphTexture !== null && (this.morphTexture = t.morphTexture.clone()), t.instanceColor !== null && (this.instanceColor = t.instanceColor.clone()), this.count = t.count, t.boundingBox !== null && (this.boundingBox = t.boundingBox.clone()), t.boundingSphere !== null && (this.boundingSphere = t.boundingSphere.clone()), this;
  }
  getColorAt(t, e) {
    e.fromArray(this.instanceColor.array, t * 3);
  }
  getMatrixAt(t, e) {
    e.fromArray(this.instanceMatrix.array, t * 16);
  }
  getMorphAt(t, e) {
    const n = e.morphTargetInfluences, i = this.morphTexture.source.data.data, r = n.length + 1, o = t * r + 1;
    for (let a = 0; a < n.length; a++) n[a] = i[o + a];
  }
  raycast(t, e) {
    const n = this.matrixWorld, i = this.count;
    if (os.geometry = this.geometry, os.material = this.material, os.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), as.copy(this.boundingSphere), as.applyMatrix4(n), t.ray.intersectsSphere(as) !== false)) for (let r = 0; r < i; r++) {
      this.getMatrixAt(r, Ti), Al.multiplyMatrices(n, Ti), os.matrixWorld = Al, os.raycast(t, $s);
      for (let o = 0, a = $s.length; o < a; o++) {
        const l = $s[o];
        l.instanceId = r, l.object = this, e.push(l);
      }
      $s.length = 0;
    }
  }
  setColorAt(t, e) {
    this.instanceColor === null && (this.instanceColor = new ia(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), e.toArray(this.instanceColor.array, t * 3);
  }
  setMatrixAt(t, e) {
    e.toArray(this.instanceMatrix.array, t * 16);
  }
  setMorphAt(t, e) {
    const n = e.morphTargetInfluences, i = n.length + 1;
    this.morphTexture === null && (this.morphTexture = new Zc(new Float32Array(i * this.count), i, this.count, va, nn));
    const r = this.morphTexture.source.data.data;
    let o = 0;
    for (let c = 0; c < n.length; c++) o += n[c];
    const a = this.geometry.morphTargetsRelative ? 1 : 1 - o, l = i * t;
    r[l] = a, r.set(n, l + 1);
  }
  updateMorphTargets() {
  }
  dispose() {
    return this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null), this;
  }
}
const Jr = new w(), xd = new w(), yd = new zt();
class Un {
  constructor(t = new w(1, 0, 0), e = 0) {
    this.isPlane = true, this.normal = t, this.constant = e;
  }
  set(t, e) {
    return this.normal.copy(t), this.constant = e, this;
  }
  setComponents(t, e, n, i) {
    return this.normal.set(t, e, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(t, e) {
    return this.normal.copy(t), this.constant = -e.dot(this.normal), this;
  }
  setFromCoplanarPoints(t, e, n) {
    const i = Jr.subVectors(n, e).cross(xd.subVectors(t, e)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, t), this;
  }
  copy(t) {
    return this.normal.copy(t.normal), this.constant = t.constant, this;
  }
  normalize() {
    const t = 1 / this.normal.length();
    return this.normal.multiplyScalar(t), this.constant *= t, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(t) {
    return this.normal.dot(t) + this.constant;
  }
  distanceToSphere(t) {
    return this.distanceToPoint(t.center) - t.radius;
  }
  projectPoint(t, e) {
    return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t));
  }
  intersectLine(t, e) {
    const n = t.delta(Jr), i = this.normal.dot(n);
    if (i === 0) return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null;
    const r = -(t.start.dot(this.normal) + this.constant) / i;
    return r < 0 || r > 1 ? null : e.copy(t.start).addScaledVector(n, r);
  }
  intersectsLine(t) {
    const e = this.distanceToPoint(t.start), n = this.distanceToPoint(t.end);
    return e < 0 && n > 0 || n < 0 && e > 0;
  }
  intersectsBox(t) {
    return t.intersectsPlane(this);
  }
  intersectsSphere(t) {
    return t.intersectsPlane(this);
  }
  coplanarPoint(t) {
    return t.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(t, e) {
    const n = e || yd.getNormalMatrix(t), i = this.coplanarPoint(Jr).applyMatrix4(t), r = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(r), this;
  }
  translate(t) {
    return this.constant -= t.dot(this.normal), this;
  }
  equals(t) {
    return t.normal.equals(this.normal) && t.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const $n = new cn(), Ks = new w();
class Ra {
  constructor(t = new Un(), e = new Un(), n = new Un(), i = new Un(), r = new Un(), o = new Un()) {
    this.planes = [t, e, n, i, r, o];
  }
  set(t, e, n, i, r, o) {
    const a = this.planes;
    return a[0].copy(t), a[1].copy(e), a[2].copy(n), a[3].copy(i), a[4].copy(r), a[5].copy(o), this;
  }
  copy(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]);
    return this;
  }
  setFromProjectionMatrix(t, e = En) {
    const n = this.planes, i = t.elements, r = i[0], o = i[1], a = i[2], l = i[3], c = i[4], h = i[5], u = i[6], d = i[7], f = i[8], g = i[9], _ = i[10], m = i[11], p = i[12], b = i[13], S = i[14], x = i[15];
    if (n[0].setComponents(l - r, d - c, m - f, x - p).normalize(), n[1].setComponents(l + r, d + c, m + f, x + p).normalize(), n[2].setComponents(l + o, d + h, m + g, x + b).normalize(), n[3].setComponents(l - o, d - h, m - g, x - b).normalize(), n[4].setComponents(l - a, d - u, m - _, x - S).normalize(), e === En) n[5].setComponents(l + a, d + u, m + _, x + S).normalize();
    else if (e === Mr) n[5].setComponents(a, u, _, S).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e);
    return this;
  }
  intersectsObject(t) {
    if (t.boundingSphere !== void 0) t.boundingSphere === null && t.computeBoundingSphere(), $n.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
    else {
      const e = t.geometry;
      e.boundingSphere === null && e.computeBoundingSphere(), $n.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);
    }
    return this.intersectsSphere($n);
  }
  intersectsSprite(t) {
    return $n.center.set(0, 0, 0), $n.radius = 0.7071067811865476, $n.applyMatrix4(t.matrixWorld), this.intersectsSphere($n);
  }
  intersectsSphere(t) {
    const e = this.planes, n = t.center, i = -t.radius;
    for (let r = 0; r < 6; r++) if (e[r].distanceToPoint(n) < i) return false;
    return true;
  }
  intersectsBox(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = e[n];
      if (Ks.x = i.normal.x > 0 ? t.max.x : t.min.x, Ks.y = i.normal.y > 0 ? t.max.y : t.min.y, Ks.z = i.normal.z > 0 ? t.max.z : t.min.z, i.distanceToPoint(Ks) < 0) return false;
    }
    return true;
  }
  containsPoint(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) if (e[n].distanceToPoint(t) < 0) return false;
    return true;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Jc extends sn {
  constructor(t) {
    super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new It(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.fog = t.fog, this;
  }
}
const Sr = new w(), Er = new w(), Tl = new Ot(), ls = new Ki(), Zs = new cn(), Qr = new w(), wl = new w();
class Ca extends ae {
  constructor(t = new be(), e = new Jc()) {
    super(), this.isLine = true, this.type = "Line", this.geometry = t, this.material = e, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const e = t.attributes.position, n = [0];
      for (let i = 1, r = e.count; i < r; i++) Sr.fromBufferAttribute(e, i - 1), Er.fromBufferAttribute(e, i), n[i] = n[i - 1], n[i] += Sr.distanceTo(Er);
      t.setAttribute("lineDistance", new le(n, 1));
    } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(t, e) {
    const n = this.geometry, i = this.matrixWorld, r = t.params.Line.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Zs.copy(n.boundingSphere), Zs.applyMatrix4(i), Zs.radius += r, t.ray.intersectsSphere(Zs) === false) return;
    Tl.copy(i).invert(), ls.copy(t.ray).applyMatrix4(Tl);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = this.isLineSegments ? 2 : 1, h = n.index, d = n.attributes.position;
    if (h !== null) {
      const f = Math.max(0, o.start), g = Math.min(h.count, o.start + o.count);
      for (let _ = f, m = g - 1; _ < m; _ += c) {
        const p = h.getX(_), b = h.getX(_ + 1), S = Js(this, t, ls, l, p, b);
        S && e.push(S);
      }
      if (this.isLineLoop) {
        const _ = h.getX(g - 1), m = h.getX(f), p = Js(this, t, ls, l, _, m);
        p && e.push(p);
      }
    } else {
      const f = Math.max(0, o.start), g = Math.min(d.count, o.start + o.count);
      for (let _ = f, m = g - 1; _ < m; _ += c) {
        const p = Js(this, t, ls, l, _, _ + 1);
        p && e.push(p);
      }
      if (this.isLineLoop) {
        const _ = Js(this, t, ls, l, g - 1, f);
        _ && e.push(_);
      }
    }
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, n = Object.keys(e);
    if (n.length > 0) {
      const i = e[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = i.length; r < o; r++) {
          const a = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
}
function Js(s, t, e, n, i, r) {
  const o = s.geometry.attributes.position;
  if (Sr.fromBufferAttribute(o, i), Er.fromBufferAttribute(o, r), e.distanceSqToSegment(Sr, Er, Qr, wl) > n) return;
  Qr.applyMatrix4(s.matrixWorld);
  const l = t.ray.origin.distanceTo(Qr);
  if (!(l < t.near || l > t.far)) return { distance: l, point: wl.clone().applyMatrix4(s.matrixWorld), index: i, face: null, faceIndex: null, barycoord: null, object: s };
}
const Rl = new w(), Cl = new w();
class Md extends Ca {
  constructor(t, e) {
    super(t, e), this.isLineSegments = true, this.type = "LineSegments";
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const e = t.attributes.position, n = [];
      for (let i = 0, r = e.count; i < r; i += 2) Rl.fromBufferAttribute(e, i), Cl.fromBufferAttribute(e, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + Rl.distanceTo(Cl);
      t.setAttribute("lineDistance", new le(n, 1));
    } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Sd extends Ca {
  constructor(t, e) {
    super(t, e), this.isLineLoop = true, this.type = "LineLoop";
  }
}
class Qc extends sn {
  constructor(t) {
    super(), this.isPointsMaterial = true, this.type = "PointsMaterial", this.color = new It(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = true, this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this;
  }
}
const Pl = new Ot(), sa = new Ki(), Qs = new cn(), tr = new w();
class Ed extends ae {
  constructor(t = new be(), e = new Qc()) {
    super(), this.isPoints = true, this.type = "Points", this.geometry = t, this.material = e, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  raycast(t, e) {
    const n = this.geometry, i = this.matrixWorld, r = t.params.Points.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Qs.copy(n.boundingSphere), Qs.applyMatrix4(i), Qs.radius += r, t.ray.intersectsSphere(Qs) === false) return;
    Pl.copy(i).invert(), sa.copy(t.ray).applyMatrix4(Pl);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = n.index, u = n.attributes.position;
    if (c !== null) {
      const d = Math.max(0, o.start), f = Math.min(c.count, o.start + o.count);
      for (let g = d, _ = f; g < _; g++) {
        const m = c.getX(g);
        tr.fromBufferAttribute(u, m), Ll(tr, m, l, i, t, e, this);
      }
    } else {
      const d = Math.max(0, o.start), f = Math.min(u.count, o.start + o.count);
      for (let g = d, _ = f; g < _; g++) tr.fromBufferAttribute(u, g), Ll(tr, g, l, i, t, e, this);
    }
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, n = Object.keys(e);
    if (n.length > 0) {
      const i = e[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = i.length; r < o; r++) {
          const a = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
}
function Ll(s, t, e, n, i, r, o) {
  const a = sa.distanceSqToPoint(s);
  if (a < e) {
    const l = new w();
    sa.closestPointToPoint(s, l), l.applyMatrix4(n);
    const c = i.ray.origin.distanceTo(l);
    if (c < i.near || c > i.far) return;
    r.push({ distance: c, distanceToRay: Math.sqrt(a), point: l, index: t, face: null, faceIndex: null, barycoord: null, object: o });
  }
}
class ai extends ae {
  constructor() {
    super(), this.isGroup = true, this.type = "Group";
  }
}
class th extends xe {
  constructor(t, e, n, i, r, o, a, l, c, h = Fi) {
    if (h !== Fi && h !== Wi) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === Fi && (n = li), n === void 0 && h === Wi && (n = Gi), super(null, i, r, o, a, l, h, n, c), this.isDepthTexture = true, this.image = { width: t, height: e }, this.magFilter = a !== void 0 ? a : Ce, this.minFilter = l !== void 0 ? l : Ce, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
  }
  copy(t) {
    return super.copy(t), this.compareFunction = t.compareFunction, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.compareFunction !== null && (e.compareFunction = this.compareFunction), e;
  }
}
class hn {
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200;
  }
  getPoint() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  }
  getPointAt(t, e) {
    const n = this.getUtoTmapping(t);
    return this.getPoint(n, e);
  }
  getPoints(t = 5) {
    const e = [];
    for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
    return e;
  }
  getSpacedPoints(t = 5) {
    const e = [];
    for (let n = 0; n <= t; n++) e.push(this.getPointAt(n / t));
    return e;
  }
  getLength() {
    const t = this.getLengths();
    return t[t.length - 1];
  }
  getLengths(t = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
    this.needsUpdate = false;
    const e = [];
    let n, i = this.getPoint(0), r = 0;
    e.push(0);
    for (let o = 1; o <= t; o++) n = this.getPoint(o / t), r += n.distanceTo(i), e.push(r), i = n;
    return this.cacheArcLengths = e, e;
  }
  updateArcLengths() {
    this.needsUpdate = true, this.getLengths();
  }
  getUtoTmapping(t, e) {
    const n = this.getLengths();
    let i = 0;
    const r = n.length;
    let o;
    e ? o = e : o = t * n[r - 1];
    let a = 0, l = r - 1, c;
    for (; a <= l; ) if (i = Math.floor(a + (l - a) / 2), c = n[i] - o, c < 0) a = i + 1;
    else if (c > 0) l = i - 1;
    else {
      l = i;
      break;
    }
    if (i = l, n[i] === o) return i / (r - 1);
    const h = n[i], d = n[i + 1] - h, f = (o - h) / d;
    return (i + f) / (r - 1);
  }
  getTangent(t, e) {
    let i = t - 1e-4, r = t + 1e-4;
    i < 0 && (i = 0), r > 1 && (r = 1);
    const o = this.getPoint(i), a = this.getPoint(r), l = e || (o.isVector2 ? new Q() : new w());
    return l.copy(a).sub(o).normalize(), l;
  }
  getTangentAt(t, e) {
    const n = this.getUtoTmapping(t);
    return this.getTangent(n, e);
  }
  computeFrenetFrames(t, e) {
    const n = new w(), i = [], r = [], o = [], a = new w(), l = new Ot();
    for (let f = 0; f <= t; f++) {
      const g = f / t;
      i[f] = this.getTangentAt(g, new w());
    }
    r[0] = new w(), o[0] = new w();
    let c = Number.MAX_VALUE;
    const h = Math.abs(i[0].x), u = Math.abs(i[0].y), d = Math.abs(i[0].z);
    h <= c && (c = h, n.set(1, 0, 0)), u <= c && (c = u, n.set(0, 1, 0)), d <= c && n.set(0, 0, 1), a.crossVectors(i[0], n).normalize(), r[0].crossVectors(i[0], a), o[0].crossVectors(i[0], r[0]);
    for (let f = 1; f <= t; f++) {
      if (r[f] = r[f - 1].clone(), o[f] = o[f - 1].clone(), a.crossVectors(i[f - 1], i[f]), a.length() > Number.EPSILON) {
        a.normalize();
        const g = Math.acos(Ht(i[f - 1].dot(i[f]), -1, 1));
        r[f].applyMatrix4(l.makeRotationAxis(a, g));
      }
      o[f].crossVectors(i[f], r[f]);
    }
    if (e === true) {
      let f = Math.acos(Ht(r[0].dot(r[t]), -1, 1));
      f /= t, i[0].dot(a.crossVectors(r[0], r[t])) > 0 && (f = -f);
      for (let g = 1; g <= t; g++) r[g].applyMatrix4(l.makeRotationAxis(i[g], f * g)), o[g].crossVectors(i[g], r[g]);
    }
    return { tangents: i, normals: r, binormals: o };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.arcLengthDivisions = t.arcLengthDivisions, this;
  }
  toJSON() {
    const t = { metadata: { version: 4.6, type: "Curve", generator: "Curve.toJSON" } };
    return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t;
  }
  fromJSON(t) {
    return this.arcLengthDivisions = t.arcLengthDivisions, this;
  }
}
class Pa extends hn {
  constructor(t = 0, e = 0, n = 1, i = 1, r = 0, o = Math.PI * 2, a = false, l = 0) {
    super(), this.isEllipseCurve = true, this.type = "EllipseCurve", this.aX = t, this.aY = e, this.xRadius = n, this.yRadius = i, this.aStartAngle = r, this.aEndAngle = o, this.aClockwise = a, this.aRotation = l;
  }
  getPoint(t, e = new Q()) {
    const n = e, i = Math.PI * 2;
    let r = this.aEndAngle - this.aStartAngle;
    const o = Math.abs(r) < Number.EPSILON;
    for (; r < 0; ) r += i;
    for (; r > i; ) r -= i;
    r < Number.EPSILON && (o ? r = 0 : r = i), this.aClockwise === true && !o && (r === i ? r = -i : r = r - i);
    const a = this.aStartAngle + t * r;
    let l = this.aX + this.xRadius * Math.cos(a), c = this.aY + this.yRadius * Math.sin(a);
    if (this.aRotation !== 0) {
      const h = Math.cos(this.aRotation), u = Math.sin(this.aRotation), d = l - this.aX, f = c - this.aY;
      l = d * h - f * u + this.aX, c = d * u + f * h + this.aY;
    }
    return n.set(l, c);
  }
  copy(t) {
    return super.copy(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
  }
}
class Ad extends Pa {
  constructor(t, e, n, i, r, o) {
    super(t, e, n, n, i, r, o), this.isArcCurve = true, this.type = "ArcCurve";
  }
}
function La() {
  let s = 0, t = 0, e = 0, n = 0;
  function i(r, o, a, l) {
    s = r, t = a, e = -3 * r + 3 * o - 2 * a - l, n = 2 * r - 2 * o + a + l;
  }
  return { initCatmullRom: function(r, o, a, l, c) {
    i(o, a, c * (a - r), c * (l - o));
  }, initNonuniformCatmullRom: function(r, o, a, l, c, h, u) {
    let d = (o - r) / c - (a - r) / (c + h) + (a - o) / h, f = (a - o) / h - (l - o) / (h + u) + (l - a) / u;
    d *= h, f *= h, i(o, a, d, f);
  }, calc: function(r) {
    const o = r * r, a = o * r;
    return s + t * r + e * o + n * a;
  } };
}
const er = new w(), to = new La(), eo = new La(), no = new La();
class bd extends hn {
  constructor(t = [], e = false, n = "centripetal", i = 0.5) {
    super(), this.isCatmullRomCurve3 = true, this.type = "CatmullRomCurve3", this.points = t, this.closed = e, this.curveType = n, this.tension = i;
  }
  getPoint(t, e = new w()) {
    const n = e, i = this.points, r = i.length, o = (r - (this.closed ? 0 : 1)) * t;
    let a = Math.floor(o), l = o - a;
    this.closed ? a += a > 0 ? 0 : (Math.floor(Math.abs(a) / r) + 1) * r : l === 0 && a === r - 1 && (a = r - 2, l = 1);
    let c, h;
    this.closed || a > 0 ? c = i[(a - 1) % r] : (er.subVectors(i[0], i[1]).add(i[0]), c = er);
    const u = i[a % r], d = i[(a + 1) % r];
    if (this.closed || a + 2 < r ? h = i[(a + 2) % r] : (er.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), h = er), this.curveType === "centripetal" || this.curveType === "chordal") {
      const f = this.curveType === "chordal" ? 0.5 : 0.25;
      let g = Math.pow(c.distanceToSquared(u), f), _ = Math.pow(u.distanceToSquared(d), f), m = Math.pow(d.distanceToSquared(h), f);
      _ < 1e-4 && (_ = 1), g < 1e-4 && (g = _), m < 1e-4 && (m = _), to.initNonuniformCatmullRom(c.x, u.x, d.x, h.x, g, _, m), eo.initNonuniformCatmullRom(c.y, u.y, d.y, h.y, g, _, m), no.initNonuniformCatmullRom(c.z, u.z, d.z, h.z, g, _, m);
    } else this.curveType === "catmullrom" && (to.initCatmullRom(c.x, u.x, d.x, h.x, this.tension), eo.initCatmullRom(c.y, u.y, d.y, h.y, this.tension), no.initCatmullRom(c.z, u.z, d.z, h.z, this.tension));
    return n.set(to.calc(l), eo.calc(l), no.calc(l)), n;
  }
  copy(t) {
    super.copy(t), this.points = [];
    for (let e = 0, n = t.points.length; e < n; e++) {
      const i = t.points[e];
      this.points.push(i.clone());
    }
    return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
  }
  toJSON() {
    const t = super.toJSON();
    t.points = [];
    for (let e = 0, n = this.points.length; e < n; e++) {
      const i = this.points[e];
      t.points.push(i.toArray());
    }
    return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.points = [];
    for (let e = 0, n = t.points.length; e < n; e++) {
      const i = t.points[e];
      this.points.push(new w().fromArray(i));
    }
    return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
  }
}
function Il(s, t, e, n, i) {
  const r = (n - t) * 0.5, o = (i - e) * 0.5, a = s * s, l = s * a;
  return (2 * e - 2 * n + r + o) * l + (-3 * e + 3 * n - 2 * r - o) * a + r * s + e;
}
function Td(s, t) {
  const e = 1 - s;
  return e * e * t;
}
function wd(s, t) {
  return 2 * (1 - s) * s * t;
}
function Rd(s, t) {
  return s * s * t;
}
function gs(s, t, e, n) {
  return Td(s, t) + wd(s, e) + Rd(s, n);
}
function Cd(s, t) {
  const e = 1 - s;
  return e * e * e * t;
}
function Pd(s, t) {
  const e = 1 - s;
  return 3 * e * e * s * t;
}
function Ld(s, t) {
  return 3 * (1 - s) * s * s * t;
}
function Id(s, t) {
  return s * s * s * t;
}
function _s(s, t, e, n, i) {
  return Cd(s, t) + Pd(s, e) + Ld(s, n) + Id(s, i);
}
class eh extends hn {
  constructor(t = new Q(), e = new Q(), n = new Q(), i = new Q()) {
    super(), this.isCubicBezierCurve = true, this.type = "CubicBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = i;
  }
  getPoint(t, e = new Q()) {
    const n = e, i = this.v0, r = this.v1, o = this.v2, a = this.v3;
    return n.set(_s(t, i.x, r.x, o.x, a.x), _s(t, i.y, r.y, o.y, a.y)), n;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
  }
}
class Dd extends hn {
  constructor(t = new w(), e = new w(), n = new w(), i = new w()) {
    super(), this.isCubicBezierCurve3 = true, this.type = "CubicBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = i;
  }
  getPoint(t, e = new w()) {
    const n = e, i = this.v0, r = this.v1, o = this.v2, a = this.v3;
    return n.set(_s(t, i.x, r.x, o.x, a.x), _s(t, i.y, r.y, o.y, a.y), _s(t, i.z, r.z, o.z, a.z)), n;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
  }
}
class nh extends hn {
  constructor(t = new Q(), e = new Q()) {
    super(), this.isLineCurve = true, this.type = "LineCurve", this.v1 = t, this.v2 = e;
  }
  getPoint(t, e = new Q()) {
    const n = e;
    return t === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
  }
  getPointAt(t, e) {
    return this.getPoint(t, e);
  }
  getTangent(t, e = new Q()) {
    return e.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(t, e) {
    return this.getTangent(t, e);
  }
  copy(t) {
    return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
class Nd extends hn {
  constructor(t = new w(), e = new w()) {
    super(), this.isLineCurve3 = true, this.type = "LineCurve3", this.v1 = t, this.v2 = e;
  }
  getPoint(t, e = new w()) {
    const n = e;
    return t === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
  }
  getPointAt(t, e) {
    return this.getPoint(t, e);
  }
  getTangent(t, e = new w()) {
    return e.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(t, e) {
    return this.getTangent(t, e);
  }
  copy(t) {
    return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
class ih extends hn {
  constructor(t = new Q(), e = new Q(), n = new Q()) {
    super(), this.isQuadraticBezierCurve = true, this.type = "QuadraticBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n;
  }
  getPoint(t, e = new Q()) {
    const n = e, i = this.v0, r = this.v1, o = this.v2;
    return n.set(gs(t, i.x, r.x, o.x), gs(t, i.y, r.y, o.y)), n;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
class Ud extends hn {
  constructor(t = new w(), e = new w(), n = new w()) {
    super(), this.isQuadraticBezierCurve3 = true, this.type = "QuadraticBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n;
  }
  getPoint(t, e = new w()) {
    const n = e, i = this.v0, r = this.v1, o = this.v2;
    return n.set(gs(t, i.x, r.x, o.x), gs(t, i.y, r.y, o.y), gs(t, i.z, r.z, o.z)), n;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
class sh extends hn {
  constructor(t = []) {
    super(), this.isSplineCurve = true, this.type = "SplineCurve", this.points = t;
  }
  getPoint(t, e = new Q()) {
    const n = e, i = this.points, r = (i.length - 1) * t, o = Math.floor(r), a = r - o, l = i[o === 0 ? o : o - 1], c = i[o], h = i[o > i.length - 2 ? i.length - 1 : o + 1], u = i[o > i.length - 3 ? i.length - 1 : o + 2];
    return n.set(Il(a, l.x, c.x, h.x, u.x), Il(a, l.y, c.y, h.y, u.y)), n;
  }
  copy(t) {
    super.copy(t), this.points = [];
    for (let e = 0, n = t.points.length; e < n; e++) {
      const i = t.points[e];
      this.points.push(i.clone());
    }
    return this;
  }
  toJSON() {
    const t = super.toJSON();
    t.points = [];
    for (let e = 0, n = this.points.length; e < n; e++) {
      const i = this.points[e];
      t.points.push(i.toArray());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.points = [];
    for (let e = 0, n = t.points.length; e < n; e++) {
      const i = t.points[e];
      this.points.push(new Q().fromArray(i));
    }
    return this;
  }
}
var ra = Object.freeze({ __proto__: null, ArcCurve: Ad, CatmullRomCurve3: bd, CubicBezierCurve: eh, CubicBezierCurve3: Dd, EllipseCurve: Pa, LineCurve: nh, LineCurve3: Nd, QuadraticBezierCurve: ih, QuadraticBezierCurve3: Ud, SplineCurve: sh });
class Fd extends hn {
  constructor() {
    super(), this.type = "CurvePath", this.curves = [], this.autoClose = false;
  }
  add(t) {
    this.curves.push(t);
  }
  closePath() {
    const t = this.curves[0].getPoint(0), e = this.curves[this.curves.length - 1].getPoint(1);
    if (!t.equals(e)) {
      const n = t.isVector2 === true ? "LineCurve" : "LineCurve3";
      this.curves.push(new ra[n](e, t));
    }
    return this;
  }
  getPoint(t, e) {
    const n = t * this.getLength(), i = this.getCurveLengths();
    let r = 0;
    for (; r < i.length; ) {
      if (i[r] >= n) {
        const o = i[r] - n, a = this.curves[r], l = a.getLength(), c = l === 0 ? 0 : 1 - o / l;
        return a.getPointAt(c, e);
      }
      r++;
    }
    return null;
  }
  getLength() {
    const t = this.getCurveLengths();
    return t[t.length - 1];
  }
  updateArcLengths() {
    this.needsUpdate = true, this.cacheLengths = null, this.getCurveLengths();
  }
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
    const t = [];
    let e = 0;
    for (let n = 0, i = this.curves.length; n < i; n++) e += this.curves[n].getLength(), t.push(e);
    return this.cacheLengths = t, t;
  }
  getSpacedPoints(t = 40) {
    const e = [];
    for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
    return this.autoClose && e.push(e[0]), e;
  }
  getPoints(t = 12) {
    const e = [];
    let n;
    for (let i = 0, r = this.curves; i < r.length; i++) {
      const o = r[i], a = o.isEllipseCurve ? t * 2 : o.isLineCurve || o.isLineCurve3 ? 1 : o.isSplineCurve ? t * o.points.length : t, l = o.getPoints(a);
      for (let c = 0; c < l.length; c++) {
        const h = l[c];
        n && n.equals(h) || (e.push(h), n = h);
      }
    }
    return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e;
  }
  copy(t) {
    super.copy(t), this.curves = [];
    for (let e = 0, n = t.curves.length; e < n; e++) {
      const i = t.curves[e];
      this.curves.push(i.clone());
    }
    return this.autoClose = t.autoClose, this;
  }
  toJSON() {
    const t = super.toJSON();
    t.autoClose = this.autoClose, t.curves = [];
    for (let e = 0, n = this.curves.length; e < n; e++) {
      const i = this.curves[e];
      t.curves.push(i.toJSON());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.autoClose = t.autoClose, this.curves = [];
    for (let e = 0, n = t.curves.length; e < n; e++) {
      const i = t.curves[e];
      this.curves.push(new ra[i.type]().fromJSON(i));
    }
    return this;
  }
}
class Dl extends Fd {
  constructor(t) {
    super(), this.type = "Path", this.currentPoint = new Q(), t && this.setFromPoints(t);
  }
  setFromPoints(t) {
    this.moveTo(t[0].x, t[0].y);
    for (let e = 1, n = t.length; e < n; e++) this.lineTo(t[e].x, t[e].y);
    return this;
  }
  moveTo(t, e) {
    return this.currentPoint.set(t, e), this;
  }
  lineTo(t, e) {
    const n = new nh(this.currentPoint.clone(), new Q(t, e));
    return this.curves.push(n), this.currentPoint.set(t, e), this;
  }
  quadraticCurveTo(t, e, n, i) {
    const r = new ih(this.currentPoint.clone(), new Q(t, e), new Q(n, i));
    return this.curves.push(r), this.currentPoint.set(n, i), this;
  }
  bezierCurveTo(t, e, n, i, r, o) {
    const a = new eh(this.currentPoint.clone(), new Q(t, e), new Q(n, i), new Q(r, o));
    return this.curves.push(a), this.currentPoint.set(r, o), this;
  }
  splineThru(t) {
    const e = [this.currentPoint.clone()].concat(t), n = new sh(e);
    return this.curves.push(n), this.currentPoint.copy(t[t.length - 1]), this;
  }
  arc(t, e, n, i, r, o) {
    const a = this.currentPoint.x, l = this.currentPoint.y;
    return this.absarc(t + a, e + l, n, i, r, o), this;
  }
  absarc(t, e, n, i, r, o) {
    return this.absellipse(t, e, n, n, i, r, o), this;
  }
  ellipse(t, e, n, i, r, o, a, l) {
    const c = this.currentPoint.x, h = this.currentPoint.y;
    return this.absellipse(t + c, e + h, n, i, r, o, a, l), this;
  }
  absellipse(t, e, n, i, r, o, a, l) {
    const c = new Pa(t, e, n, i, r, o, a, l);
    if (this.curves.length > 0) {
      const u = c.getPoint(0);
      u.equals(this.currentPoint) || this.lineTo(u.x, u.y);
    }
    this.curves.push(c);
    const h = c.getPoint(1);
    return this.currentPoint.copy(h), this;
  }
  copy(t) {
    return super.copy(t), this.currentPoint.copy(t.currentPoint), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.currentPoint = this.currentPoint.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.currentPoint.fromArray(t.currentPoint), this;
  }
}
class rh extends be {
  constructor(t = 1, e = 32, n = 0, i = Math.PI * 2) {
    super(), this.type = "CircleGeometry", this.parameters = { radius: t, segments: e, thetaStart: n, thetaLength: i }, e = Math.max(3, e);
    const r = [], o = [], a = [], l = [], c = new w(), h = new Q();
    o.push(0, 0, 0), a.push(0, 0, 1), l.push(0.5, 0.5);
    for (let u = 0, d = 3; u <= e; u++, d += 3) {
      const f = n + u / e * i;
      c.x = t * Math.cos(f), c.y = t * Math.sin(f), o.push(c.x, c.y, c.z), a.push(0, 0, 1), h.x = (o[d] / t + 1) / 2, h.y = (o[d + 1] / t + 1) / 2, l.push(h.x, h.y);
    }
    for (let u = 1; u <= e; u++) r.push(u, u + 1, 0);
    this.setIndex(r), this.setAttribute("position", new le(o, 3)), this.setAttribute("normal", new le(a, 3)), this.setAttribute("uv", new le(l, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new rh(t.radius, t.segments, t.thetaStart, t.thetaLength);
  }
}
class oh extends be {
  constructor(t = 1, e = 1, n = 1, i = 32, r = 1, o = false, a = 0, l = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = { radiusTop: t, radiusBottom: e, height: n, radialSegments: i, heightSegments: r, openEnded: o, thetaStart: a, thetaLength: l };
    const c = this;
    i = Math.floor(i), r = Math.floor(r);
    const h = [], u = [], d = [], f = [];
    let g = 0;
    const _ = [], m = n / 2;
    let p = 0;
    b(), o === false && (t > 0 && S(true), e > 0 && S(false)), this.setIndex(h), this.setAttribute("position", new le(u, 3)), this.setAttribute("normal", new le(d, 3)), this.setAttribute("uv", new le(f, 2));
    function b() {
      const x = new w(), L = new w();
      let R = 0;
      const C = (e - t) / n;
      for (let I = 0; I <= r; I++) {
        const E = [], y = I / r, P = y * (e - t) + t;
        for (let V = 0; V <= i; V++) {
          const O = V / i, z = O * l + a, j = Math.sin(z), H = Math.cos(z);
          L.x = P * j, L.y = -y * n + m, L.z = P * H, u.push(L.x, L.y, L.z), x.set(j, C, H).normalize(), d.push(x.x, x.y, x.z), f.push(O, 1 - y), E.push(g++);
        }
        _.push(E);
      }
      for (let I = 0; I < i; I++) for (let E = 0; E < r; E++) {
        const y = _[E][I], P = _[E + 1][I], V = _[E + 1][I + 1], O = _[E][I + 1];
        (t > 0 || E !== 0) && (h.push(y, P, O), R += 3), (e > 0 || E !== r - 1) && (h.push(P, V, O), R += 3);
      }
      c.addGroup(p, R, 0), p += R;
    }
    function S(x) {
      const L = g, R = new Q(), C = new w();
      let I = 0;
      const E = x === true ? t : e, y = x === true ? 1 : -1;
      for (let V = 1; V <= i; V++) u.push(0, m * y, 0), d.push(0, y, 0), f.push(0.5, 0.5), g++;
      const P = g;
      for (let V = 0; V <= i; V++) {
        const z = V / i * l + a, j = Math.cos(z), H = Math.sin(z);
        C.x = E * H, C.y = m * y, C.z = E * j, u.push(C.x, C.y, C.z), d.push(0, y, 0), R.x = j * 0.5 + 0.5, R.y = H * 0.5 * y + 0.5, f.push(R.x, R.y), g++;
      }
      for (let V = 0; V < i; V++) {
        const O = L + V, z = P + V;
        x === true ? h.push(z, z + 1, O) : h.push(z + 1, z, O), I += 3;
      }
      c.addGroup(p, I, x === true ? 1 : 2), p += I;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new oh(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
}
class ah extends Dl {
  constructor(t) {
    super(t), this.uuid = je(), this.type = "Shape", this.holes = [];
  }
  getPointsHoles(t) {
    const e = [];
    for (let n = 0, i = this.holes.length; n < i; n++) e[n] = this.holes[n].getPoints(t);
    return e;
  }
  extractPoints(t) {
    return { shape: this.getPoints(t), holes: this.getPointsHoles(t) };
  }
  copy(t) {
    super.copy(t), this.holes = [];
    for (let e = 0, n = t.holes.length; e < n; e++) {
      const i = t.holes[e];
      this.holes.push(i.clone());
    }
    return this;
  }
  toJSON() {
    const t = super.toJSON();
    t.uuid = this.uuid, t.holes = [];
    for (let e = 0, n = this.holes.length; e < n; e++) {
      const i = this.holes[e];
      t.holes.push(i.toJSON());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.uuid = t.uuid, this.holes = [];
    for (let e = 0, n = t.holes.length; e < n; e++) {
      const i = t.holes[e];
      this.holes.push(new Dl().fromJSON(i));
    }
    return this;
  }
}
const Od = { triangulate: function(s, t, e = 2) {
  const n = t && t.length, i = n ? t[0] * e : s.length;
  let r = lh(s, 0, i, e, true);
  const o = [];
  if (!r || r.next === r.prev) return o;
  let a, l, c, h, u, d, f;
  if (n && (r = Vd(s, t, r, e)), s.length > 80 * e) {
    a = c = s[0], l = h = s[1];
    for (let g = e; g < i; g += e) u = s[g], d = s[g + 1], u < a && (a = u), d < l && (l = d), u > c && (c = u), d > h && (h = d);
    f = Math.max(c - a, h - l), f = f !== 0 ? 32767 / f : 0;
  }
  return Es(r, o, e, a, l, f, 0), o;
} };
function lh(s, t, e, n, i) {
  let r, o;
  if (i === Qd(s, t, e, n) > 0) for (r = t; r < e; r += n) o = Nl(r, s[r], s[r + 1], o);
  else for (r = e - n; r >= t; r -= n) o = Nl(r, s[r], s[r + 1], o);
  return o && br(o, o.next) && (bs(o), o = o.next), o;
}
function hi(s, t) {
  if (!s) return s;
  t || (t = s);
  let e = s, n;
  do
    if (n = false, !e.steiner && (br(e, e.next) || he(e.prev, e, e.next) === 0)) {
      if (bs(e), e = t = e.prev, e === e.next) break;
      n = true;
    } else e = e.next;
  while (n || e !== t);
  return t;
}
function Es(s, t, e, n, i, r, o) {
  if (!s) return;
  !o && r && qd(s, n, i, r);
  let a = s, l, c;
  for (; s.prev !== s.next; ) {
    if (l = s.prev, c = s.next, r ? kd(s, n, i, r) : Bd(s)) {
      t.push(l.i / e | 0), t.push(s.i / e | 0), t.push(c.i / e | 0), bs(s), s = c.next, a = c.next;
      continue;
    }
    if (s = c, s === a) {
      o ? o === 1 ? (s = zd(hi(s), t, e), Es(s, t, e, n, i, r, 2)) : o === 2 && Hd(s, t, e, n, i, r) : Es(hi(s), t, e, n, i, r, 1);
      break;
    }
  }
}
function Bd(s) {
  const t = s.prev, e = s, n = s.next;
  if (he(t, e, n) >= 0) return false;
  const i = t.x, r = e.x, o = n.x, a = t.y, l = e.y, c = n.y, h = i < r ? i < o ? i : o : r < o ? r : o, u = a < l ? a < c ? a : c : l < c ? l : c, d = i > r ? i > o ? i : o : r > o ? r : o, f = a > l ? a > c ? a : c : l > c ? l : c;
  let g = n.next;
  for (; g !== t; ) {
    if (g.x >= h && g.x <= d && g.y >= u && g.y <= f && Ii(i, a, r, l, o, c, g.x, g.y) && he(g.prev, g, g.next) >= 0) return false;
    g = g.next;
  }
  return true;
}
function kd(s, t, e, n) {
  const i = s.prev, r = s, o = s.next;
  if (he(i, r, o) >= 0) return false;
  const a = i.x, l = r.x, c = o.x, h = i.y, u = r.y, d = o.y, f = a < l ? a < c ? a : c : l < c ? l : c, g = h < u ? h < d ? h : d : u < d ? u : d, _ = a > l ? a > c ? a : c : l > c ? l : c, m = h > u ? h > d ? h : d : u > d ? u : d, p = oa(f, g, t, e, n), b = oa(_, m, t, e, n);
  let S = s.prevZ, x = s.nextZ;
  for (; S && S.z >= p && x && x.z <= b; ) {
    if (S.x >= f && S.x <= _ && S.y >= g && S.y <= m && S !== i && S !== o && Ii(a, h, l, u, c, d, S.x, S.y) && he(S.prev, S, S.next) >= 0 || (S = S.prevZ, x.x >= f && x.x <= _ && x.y >= g && x.y <= m && x !== i && x !== o && Ii(a, h, l, u, c, d, x.x, x.y) && he(x.prev, x, x.next) >= 0)) return false;
    x = x.nextZ;
  }
  for (; S && S.z >= p; ) {
    if (S.x >= f && S.x <= _ && S.y >= g && S.y <= m && S !== i && S !== o && Ii(a, h, l, u, c, d, S.x, S.y) && he(S.prev, S, S.next) >= 0) return false;
    S = S.prevZ;
  }
  for (; x && x.z <= b; ) {
    if (x.x >= f && x.x <= _ && x.y >= g && x.y <= m && x !== i && x !== o && Ii(a, h, l, u, c, d, x.x, x.y) && he(x.prev, x, x.next) >= 0) return false;
    x = x.nextZ;
  }
  return true;
}
function zd(s, t, e) {
  let n = s;
  do {
    const i = n.prev, r = n.next.next;
    !br(i, r) && ch(i, n, n.next, r) && As(i, r) && As(r, i) && (t.push(i.i / e | 0), t.push(n.i / e | 0), t.push(r.i / e | 0), bs(n), bs(n.next), n = s = r), n = n.next;
  } while (n !== s);
  return hi(n);
}
function Hd(s, t, e, n, i, r) {
  let o = s;
  do {
    let a = o.next.next;
    for (; a !== o.prev; ) {
      if (o.i !== a.i && Kd(o, a)) {
        let l = hh(o, a);
        o = hi(o, o.next), l = hi(l, l.next), Es(o, t, e, n, i, r, 0), Es(l, t, e, n, i, r, 0);
        return;
      }
      a = a.next;
    }
    o = o.next;
  } while (o !== s);
}
function Vd(s, t, e, n) {
  const i = [];
  let r, o, a, l, c;
  for (r = 0, o = t.length; r < o; r++) a = t[r] * n, l = r < o - 1 ? t[r + 1] * n : s.length, c = lh(s, a, l, n, false), c === c.next && (c.steiner = true), i.push($d(c));
  for (i.sort(Gd), r = 0; r < i.length; r++) e = Wd(i[r], e);
  return e;
}
function Gd(s, t) {
  return s.x - t.x;
}
function Wd(s, t) {
  const e = Xd(s, t);
  if (!e) return t;
  const n = hh(e, s);
  return hi(n, n.next), hi(e, e.next);
}
function Xd(s, t) {
  let e = t, n = -1 / 0, i;
  const r = s.x, o = s.y;
  do {
    if (o <= e.y && o >= e.next.y && e.next.y !== e.y) {
      const d = e.x + (o - e.y) * (e.next.x - e.x) / (e.next.y - e.y);
      if (d <= r && d > n && (n = d, i = e.x < e.next.x ? e : e.next, d === r)) return i;
    }
    e = e.next;
  } while (e !== t);
  if (!i) return null;
  const a = i, l = i.x, c = i.y;
  let h = 1 / 0, u;
  e = i;
  do
    r >= e.x && e.x >= l && r !== e.x && Ii(o < c ? r : n, o, l, c, o < c ? n : r, o, e.x, e.y) && (u = Math.abs(o - e.y) / (r - e.x), As(e, s) && (u < h || u === h && (e.x > i.x || e.x === i.x && Yd(i, e))) && (i = e, h = u)), e = e.next;
  while (e !== a);
  return i;
}
function Yd(s, t) {
  return he(s.prev, s, t.prev) < 0 && he(t.next, s, s.next) < 0;
}
function qd(s, t, e, n) {
  let i = s;
  do
    i.z === 0 && (i.z = oa(i.x, i.y, t, e, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
  while (i !== s);
  i.prevZ.nextZ = null, i.prevZ = null, jd(i);
}
function jd(s) {
  let t, e, n, i, r, o, a, l, c = 1;
  do {
    for (e = s, s = null, r = null, o = 0; e; ) {
      for (o++, n = e, a = 0, t = 0; t < c && (a++, n = n.nextZ, !!n); t++) ;
      for (l = c; a > 0 || l > 0 && n; ) a !== 0 && (l === 0 || !n || e.z <= n.z) ? (i = e, e = e.nextZ, a--) : (i = n, n = n.nextZ, l--), r ? r.nextZ = i : s = i, i.prevZ = r, r = i;
      e = n;
    }
    r.nextZ = null, c *= 2;
  } while (o > 1);
  return s;
}
function oa(s, t, e, n, i) {
  return s = (s - e) * i | 0, t = (t - n) * i | 0, s = (s | s << 8) & 16711935, s = (s | s << 4) & 252645135, s = (s | s << 2) & 858993459, s = (s | s << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, s | t << 1;
}
function $d(s) {
  let t = s, e = s;
  do
    (t.x < e.x || t.x === e.x && t.y < e.y) && (e = t), t = t.next;
  while (t !== s);
  return e;
}
function Ii(s, t, e, n, i, r, o, a) {
  return (i - o) * (t - a) >= (s - o) * (r - a) && (s - o) * (n - a) >= (e - o) * (t - a) && (e - o) * (r - a) >= (i - o) * (n - a);
}
function Kd(s, t) {
  return s.next.i !== t.i && s.prev.i !== t.i && !Zd(s, t) && (As(s, t) && As(t, s) && Jd(s, t) && (he(s.prev, s, t.prev) || he(s, t.prev, t)) || br(s, t) && he(s.prev, s, s.next) > 0 && he(t.prev, t, t.next) > 0);
}
function he(s, t, e) {
  return (t.y - s.y) * (e.x - t.x) - (t.x - s.x) * (e.y - t.y);
}
function br(s, t) {
  return s.x === t.x && s.y === t.y;
}
function ch(s, t, e, n) {
  const i = ir(he(s, t, e)), r = ir(he(s, t, n)), o = ir(he(e, n, s)), a = ir(he(e, n, t));
  return !!(i !== r && o !== a || i === 0 && nr(s, e, t) || r === 0 && nr(s, n, t) || o === 0 && nr(e, s, n) || a === 0 && nr(e, t, n));
}
function nr(s, t, e) {
  return t.x <= Math.max(s.x, e.x) && t.x >= Math.min(s.x, e.x) && t.y <= Math.max(s.y, e.y) && t.y >= Math.min(s.y, e.y);
}
function ir(s) {
  return s > 0 ? 1 : s < 0 ? -1 : 0;
}
function Zd(s, t) {
  let e = s;
  do {
    if (e.i !== s.i && e.next.i !== s.i && e.i !== t.i && e.next.i !== t.i && ch(e, e.next, s, t)) return true;
    e = e.next;
  } while (e !== s);
  return false;
}
function As(s, t) {
  return he(s.prev, s, s.next) < 0 ? he(s, t, s.next) >= 0 && he(s, s.prev, t) >= 0 : he(s, t, s.prev) < 0 || he(s, s.next, t) < 0;
}
function Jd(s, t) {
  let e = s, n = false;
  const i = (s.x + t.x) / 2, r = (s.y + t.y) / 2;
  do
    e.y > r != e.next.y > r && e.next.y !== e.y && i < (e.next.x - e.x) * (r - e.y) / (e.next.y - e.y) + e.x && (n = !n), e = e.next;
  while (e !== s);
  return n;
}
function hh(s, t) {
  const e = new aa(s.i, s.x, s.y), n = new aa(t.i, t.x, t.y), i = s.next, r = t.prev;
  return s.next = t, t.prev = s, e.next = i, i.prev = e, n.next = e, e.prev = n, r.next = n, n.prev = r, n;
}
function Nl(s, t, e, n) {
  const i = new aa(s, t, e);
  return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i;
}
function bs(s) {
  s.next.prev = s.prev, s.prev.next = s.next, s.prevZ && (s.prevZ.nextZ = s.nextZ), s.nextZ && (s.nextZ.prevZ = s.prevZ);
}
function aa(s, t, e) {
  this.i = s, this.x = t, this.y = e, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = false;
}
function Qd(s, t, e, n) {
  let i = 0;
  for (let r = t, o = e - n; r < e; r += n) i += (s[o] - s[r]) * (s[r + 1] + s[o + 1]), o = r;
  return i;
}
class Hn {
  static area(t) {
    const e = t.length;
    let n = 0;
    for (let i = e - 1, r = 0; r < e; i = r++) n += t[i].x * t[r].y - t[r].x * t[i].y;
    return n * 0.5;
  }
  static isClockWise(t) {
    return Hn.area(t) < 0;
  }
  static triangulateShape(t, e) {
    const n = [], i = [], r = [];
    Ul(t), Fl(n, t);
    let o = t.length;
    e.forEach(Ul);
    for (let l = 0; l < e.length; l++) i.push(o), o += e[l].length, Fl(n, e[l]);
    const a = Od.triangulate(n, i);
    for (let l = 0; l < a.length; l += 3) r.push(a.slice(l, l + 3));
    return r;
  }
}
function Ul(s) {
  const t = s.length;
  t > 2 && s[t - 1].equals(s[0]) && s.pop();
}
function Fl(s, t) {
  for (let e = 0; e < t.length; e++) s.push(t[e].x), s.push(t[e].y);
}
class uh extends be {
  constructor(t = new ah([new Q(0.5, 0.5), new Q(-0.5, 0.5), new Q(-0.5, -0.5), new Q(0.5, -0.5)]), e = {}) {
    super(), this.type = "ExtrudeGeometry", this.parameters = { shapes: t, options: e }, t = Array.isArray(t) ? t : [t];
    const n = this, i = [], r = [];
    for (let a = 0, l = t.length; a < l; a++) {
      const c = t[a];
      o(c);
    }
    this.setAttribute("position", new le(i, 3)), this.setAttribute("uv", new le(r, 2)), this.computeVertexNormals();
    function o(a) {
      const l = [], c = e.curveSegments !== void 0 ? e.curveSegments : 12, h = e.steps !== void 0 ? e.steps : 1, u = e.depth !== void 0 ? e.depth : 1;
      let d = e.bevelEnabled !== void 0 ? e.bevelEnabled : true, f = e.bevelThickness !== void 0 ? e.bevelThickness : 0.2, g = e.bevelSize !== void 0 ? e.bevelSize : f - 0.1, _ = e.bevelOffset !== void 0 ? e.bevelOffset : 0, m = e.bevelSegments !== void 0 ? e.bevelSegments : 3;
      const p = e.extrudePath, b = e.UVGenerator !== void 0 ? e.UVGenerator : tf;
      let S, x = false, L, R, C, I;
      p && (S = p.getSpacedPoints(h), x = true, d = false, L = p.computeFrenetFrames(h, false), R = new w(), C = new w(), I = new w()), d || (m = 0, f = 0, g = 0, _ = 0);
      const E = a.extractPoints(c);
      let y = E.shape;
      const P = E.holes;
      if (!Hn.isClockWise(y)) {
        y = y.reverse();
        for (let K = 0, it = P.length; K < it; K++) {
          const T = P[K];
          Hn.isClockWise(T) && (P[K] = T.reverse());
        }
      }
      const O = Hn.triangulateShape(y, P), z = y;
      for (let K = 0, it = P.length; K < it; K++) {
        const T = P[K];
        y = y.concat(T);
      }
      function j(K, it, T) {
        return it || console.error("THREE.ExtrudeGeometry: vec does not exist"), K.clone().addScaledVector(it, T);
      }
      const H = y.length, nt = O.length;
      function G(K, it, T) {
        let bt, J, _t;
        const rt = K.x - it.x, Pt = K.y - it.y, ft = T.x - K.x, A = T.y - K.y, v = rt * rt + Pt * Pt, F = rt * A - Pt * ft;
        if (Math.abs(F) > Number.EPSILON) {
          const X = Math.sqrt(v), Z = Math.sqrt(ft * ft + A * A), Y = it.x - Pt / X, At = it.y + rt / X, ct = T.x - A / Z, gt = T.y + ft / Z, Xt = ((ct - Y) * A - (gt - At) * ft) / (rt * A - Pt * ft);
          bt = Y + rt * Xt - K.x, J = At + Pt * Xt - K.y;
          const et = bt * bt + J * J;
          if (et <= 2) return new Q(bt, J);
          _t = Math.sqrt(et / 2);
        } else {
          let X = false;
          rt > Number.EPSILON ? ft > Number.EPSILON && (X = true) : rt < -Number.EPSILON ? ft < -Number.EPSILON && (X = true) : Math.sign(Pt) === Math.sign(A) && (X = true), X ? (bt = -Pt, J = rt, _t = Math.sqrt(v)) : (bt = rt, J = Pt, _t = Math.sqrt(v / 2));
        }
        return new Q(bt / _t, J / _t);
      }
      const at = [];
      for (let K = 0, it = z.length, T = it - 1, bt = K + 1; K < it; K++, T++, bt++) T === it && (T = 0), bt === it && (bt = 0), at[K] = G(z[K], z[T], z[bt]);
      const mt = [];
      let Mt, Bt = at.concat();
      for (let K = 0, it = P.length; K < it; K++) {
        const T = P[K];
        Mt = [];
        for (let bt = 0, J = T.length, _t = J - 1, rt = bt + 1; bt < J; bt++, _t++, rt++) _t === J && (_t = 0), rt === J && (rt = 0), Mt[bt] = G(T[bt], T[_t], T[rt]);
        mt.push(Mt), Bt = Bt.concat(Mt);
      }
      for (let K = 0; K < m; K++) {
        const it = K / m, T = f * Math.cos(it * Math.PI / 2), bt = g * Math.sin(it * Math.PI / 2) + _;
        for (let J = 0, _t = z.length; J < _t; J++) {
          const rt = j(z[J], at[J], bt);
          ot(rt.x, rt.y, -T);
        }
        for (let J = 0, _t = P.length; J < _t; J++) {
          const rt = P[J];
          Mt = mt[J];
          for (let Pt = 0, ft = rt.length; Pt < ft; Pt++) {
            const A = j(rt[Pt], Mt[Pt], bt);
            ot(A.x, A.y, -T);
          }
        }
      }
      const Jt = g + _;
      for (let K = 0; K < H; K++) {
        const it = d ? j(y[K], Bt[K], Jt) : y[K];
        x ? (C.copy(L.normals[0]).multiplyScalar(it.x), R.copy(L.binormals[0]).multiplyScalar(it.y), I.copy(S[0]).add(C).add(R), ot(I.x, I.y, I.z)) : ot(it.x, it.y, 0);
      }
      for (let K = 1; K <= h; K++) for (let it = 0; it < H; it++) {
        const T = d ? j(y[it], Bt[it], Jt) : y[it];
        x ? (C.copy(L.normals[K]).multiplyScalar(T.x), R.copy(L.binormals[K]).multiplyScalar(T.y), I.copy(S[K]).add(C).add(R), ot(I.x, I.y, I.z)) : ot(T.x, T.y, u / h * K);
      }
      for (let K = m - 1; K >= 0; K--) {
        const it = K / m, T = f * Math.cos(it * Math.PI / 2), bt = g * Math.sin(it * Math.PI / 2) + _;
        for (let J = 0, _t = z.length; J < _t; J++) {
          const rt = j(z[J], at[J], bt);
          ot(rt.x, rt.y, u + T);
        }
        for (let J = 0, _t = P.length; J < _t; J++) {
          const rt = P[J];
          Mt = mt[J];
          for (let Pt = 0, ft = rt.length; Pt < ft; Pt++) {
            const A = j(rt[Pt], Mt[Pt], bt);
            x ? ot(A.x, A.y + S[h - 1].y, S[h - 1].x + T) : ot(A.x, A.y, u + T);
          }
        }
      }
      q(), st();
      function q() {
        const K = i.length / 3;
        if (d) {
          let it = 0, T = H * it;
          for (let bt = 0; bt < nt; bt++) {
            const J = O[bt];
            Tt(J[2] + T, J[1] + T, J[0] + T);
          }
          it = h + m * 2, T = H * it;
          for (let bt = 0; bt < nt; bt++) {
            const J = O[bt];
            Tt(J[0] + T, J[1] + T, J[2] + T);
          }
        } else {
          for (let it = 0; it < nt; it++) {
            const T = O[it];
            Tt(T[2], T[1], T[0]);
          }
          for (let it = 0; it < nt; it++) {
            const T = O[it];
            Tt(T[0] + H * h, T[1] + H * h, T[2] + H * h);
          }
        }
        n.addGroup(K, i.length / 3 - K, 0);
      }
      function st() {
        const K = i.length / 3;
        let it = 0;
        Et(z, it), it += z.length;
        for (let T = 0, bt = P.length; T < bt; T++) {
          const J = P[T];
          Et(J, it), it += J.length;
        }
        n.addGroup(K, i.length / 3 - K, 1);
      }
      function Et(K, it) {
        let T = K.length;
        for (; --T >= 0; ) {
          const bt = T;
          let J = T - 1;
          J < 0 && (J = K.length - 1);
          for (let _t = 0, rt = h + m * 2; _t < rt; _t++) {
            const Pt = H * _t, ft = H * (_t + 1), A = it + bt + Pt, v = it + J + Pt, F = it + J + ft, X = it + bt + ft;
            Ut(A, v, F, X);
          }
        }
      }
      function ot(K, it, T) {
        l.push(K), l.push(it), l.push(T);
      }
      function Tt(K, it, T) {
        Lt(K), Lt(it), Lt(T);
        const bt = i.length / 3, J = b.generateTopUV(n, i, bt - 3, bt - 2, bt - 1);
        jt(J[0]), jt(J[1]), jt(J[2]);
      }
      function Ut(K, it, T, bt) {
        Lt(K), Lt(it), Lt(bt), Lt(it), Lt(T), Lt(bt);
        const J = i.length / 3, _t = b.generateSideWallUV(n, i, J - 6, J - 3, J - 2, J - 1);
        jt(_t[0]), jt(_t[1]), jt(_t[3]), jt(_t[1]), jt(_t[2]), jt(_t[3]);
      }
      function Lt(K) {
        i.push(l[K * 3 + 0]), i.push(l[K * 3 + 1]), i.push(l[K * 3 + 2]);
      }
      function jt(K) {
        r.push(K.x), r.push(K.y);
      }
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  toJSON() {
    const t = super.toJSON(), e = this.parameters.shapes, n = this.parameters.options;
    return ef(e, n, t);
  }
  static fromJSON(t, e) {
    const n = [];
    for (let r = 0, o = t.shapes.length; r < o; r++) {
      const a = e[t.shapes[r]];
      n.push(a);
    }
    const i = t.options.extrudePath;
    return i !== void 0 && (t.options.extrudePath = new ra[i.type]().fromJSON(i)), new uh(n, t.options);
  }
}
const tf = { generateTopUV: function(s, t, e, n, i) {
  const r = t[e * 3], o = t[e * 3 + 1], a = t[n * 3], l = t[n * 3 + 1], c = t[i * 3], h = t[i * 3 + 1];
  return [new Q(r, o), new Q(a, l), new Q(c, h)];
}, generateSideWallUV: function(s, t, e, n, i, r) {
  const o = t[e * 3], a = t[e * 3 + 1], l = t[e * 3 + 2], c = t[n * 3], h = t[n * 3 + 1], u = t[n * 3 + 2], d = t[i * 3], f = t[i * 3 + 1], g = t[i * 3 + 2], _ = t[r * 3], m = t[r * 3 + 1], p = t[r * 3 + 2];
  return Math.abs(a - h) < Math.abs(o - c) ? [new Q(o, 1 - l), new Q(c, 1 - u), new Q(d, 1 - g), new Q(_, 1 - p)] : [new Q(a, 1 - l), new Q(h, 1 - u), new Q(f, 1 - g), new Q(m, 1 - p)];
} };
function ef(s, t, e) {
  if (e.shapes = [], Array.isArray(s)) for (let n = 0, i = s.length; n < i; n++) {
    const r = s[n];
    e.shapes.push(r.uuid);
  }
  else e.shapes.push(s.uuid);
  return e.options = Object.assign({}, t), t.extrudePath !== void 0 && (e.options.extrudePath = t.extrudePath.toJSON()), e;
}
class Tr extends be {
  constructor(t = 1, e = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = { width: t, height: e, widthSegments: n, heightSegments: i };
    const r = t / 2, o = e / 2, a = Math.floor(n), l = Math.floor(i), c = a + 1, h = l + 1, u = t / a, d = e / l, f = [], g = [], _ = [], m = [];
    for (let p = 0; p < h; p++) {
      const b = p * d - o;
      for (let S = 0; S < c; S++) {
        const x = S * u - r;
        g.push(x, -b, 0), _.push(0, 0, 1), m.push(S / a), m.push(1 - p / l);
      }
    }
    for (let p = 0; p < l; p++) for (let b = 0; b < a; b++) {
      const S = b + c * p, x = b + c * (p + 1), L = b + 1 + c * (p + 1), R = b + 1 + c * p;
      f.push(S, x, R), f.push(x, L, R);
    }
    this.setIndex(f), this.setAttribute("position", new le(g, 3)), this.setAttribute("normal", new le(_, 3)), this.setAttribute("uv", new le(m, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Tr(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}
class dh extends be {
  constructor(t = new ah([new Q(0, 0.5), new Q(-0.5, -0.5), new Q(0.5, -0.5)]), e = 12) {
    super(), this.type = "ShapeGeometry", this.parameters = { shapes: t, curveSegments: e };
    const n = [], i = [], r = [], o = [];
    let a = 0, l = 0;
    if (Array.isArray(t) === false) c(t);
    else for (let h = 0; h < t.length; h++) c(t[h]), this.addGroup(a, l, h), a += l, l = 0;
    this.setIndex(n), this.setAttribute("position", new le(i, 3)), this.setAttribute("normal", new le(r, 3)), this.setAttribute("uv", new le(o, 2));
    function c(h) {
      const u = i.length / 3, d = h.extractPoints(e);
      let f = d.shape;
      const g = d.holes;
      Hn.isClockWise(f) === false && (f = f.reverse());
      for (let m = 0, p = g.length; m < p; m++) {
        const b = g[m];
        Hn.isClockWise(b) === true && (g[m] = b.reverse());
      }
      const _ = Hn.triangulateShape(f, g);
      for (let m = 0, p = g.length; m < p; m++) {
        const b = g[m];
        f = f.concat(b);
      }
      for (let m = 0, p = f.length; m < p; m++) {
        const b = f[m];
        i.push(b.x, b.y, 0), r.push(0, 0, 1), o.push(b.x, b.y);
      }
      for (let m = 0, p = _.length; m < p; m++) {
        const b = _[m], S = b[0] + u, x = b[1] + u, L = b[2] + u;
        n.push(S, x, L), l += 3;
      }
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  toJSON() {
    const t = super.toJSON(), e = this.parameters.shapes;
    return nf(e, t);
  }
  static fromJSON(t, e) {
    const n = [];
    for (let i = 0, r = t.shapes.length; i < r; i++) {
      const o = e[t.shapes[i]];
      n.push(o);
    }
    return new dh(n, t.curveSegments);
  }
}
function nf(s, t) {
  if (t.shapes = [], Array.isArray(s)) for (let e = 0, n = s.length; e < n; e++) {
    const i = s[e];
    t.shapes.push(i.uuid);
  }
  else t.shapes.push(s.uuid);
  return t;
}
class fh extends be {
  constructor(t = 1, e = 32, n = 16, i = 0, r = Math.PI * 2, o = 0, a = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = { radius: t, widthSegments: e, heightSegments: n, phiStart: i, phiLength: r, thetaStart: o, thetaLength: a }, e = Math.max(3, Math.floor(e)), n = Math.max(2, Math.floor(n));
    const l = Math.min(o + a, Math.PI);
    let c = 0;
    const h = [], u = new w(), d = new w(), f = [], g = [], _ = [], m = [];
    for (let p = 0; p <= n; p++) {
      const b = [], S = p / n;
      let x = 0;
      p === 0 && o === 0 ? x = 0.5 / e : p === n && l === Math.PI && (x = -0.5 / e);
      for (let L = 0; L <= e; L++) {
        const R = L / e;
        u.x = -t * Math.cos(i + R * r) * Math.sin(o + S * a), u.y = t * Math.cos(o + S * a), u.z = t * Math.sin(i + R * r) * Math.sin(o + S * a), g.push(u.x, u.y, u.z), d.copy(u).normalize(), _.push(d.x, d.y, d.z), m.push(R + x, 1 - S), b.push(c++);
      }
      h.push(b);
    }
    for (let p = 0; p < n; p++) for (let b = 0; b < e; b++) {
      const S = h[p][b + 1], x = h[p][b], L = h[p + 1][b], R = h[p + 1][b + 1];
      (p !== 0 || o > 0) && f.push(S, x, R), (p !== n - 1 || l < Math.PI) && f.push(x, L, R);
    }
    this.setIndex(f), this.setAttribute("position", new le(g, 3)), this.setAttribute("normal", new le(_, 3)), this.setAttribute("uv", new le(m, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new fh(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
  }
}
class ph extends be {
  constructor(t = 1, e = 0.4, n = 12, i = 48, r = Math.PI * 2) {
    super(), this.type = "TorusGeometry", this.parameters = { radius: t, tube: e, radialSegments: n, tubularSegments: i, arc: r }, n = Math.floor(n), i = Math.floor(i);
    const o = [], a = [], l = [], c = [], h = new w(), u = new w(), d = new w();
    for (let f = 0; f <= n; f++) for (let g = 0; g <= i; g++) {
      const _ = g / i * r, m = f / n * Math.PI * 2;
      u.x = (t + e * Math.cos(m)) * Math.cos(_), u.y = (t + e * Math.cos(m)) * Math.sin(_), u.z = e * Math.sin(m), a.push(u.x, u.y, u.z), h.x = t * Math.cos(_), h.y = t * Math.sin(_), d.subVectors(u, h).normalize(), l.push(d.x, d.y, d.z), c.push(g / i), c.push(f / n);
    }
    for (let f = 1; f <= n; f++) for (let g = 1; g <= i; g++) {
      const _ = (i + 1) * f + g - 1, m = (i + 1) * (f - 1) + g - 1, p = (i + 1) * (f - 1) + g, b = (i + 1) * f + g;
      o.push(_, m, b), o.push(m, p, b);
    }
    this.setIndex(o), this.setAttribute("position", new le(a, 3)), this.setAttribute("normal", new le(l, 3)), this.setAttribute("uv", new le(c, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new ph(t.radius, t.tube, t.radialSegments, t.tubularSegments, t.arc);
  }
}
class Ia extends sn {
  constructor(t) {
    super(), this.isMeshStandardMaterial = true, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new It(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new It(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Ea, this.normalScale = new Q(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new rn(), this.envMapIntensity = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.defines = { STANDARD: "" }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.envMapIntensity = t.envMapIntensity, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this;
  }
}
class un extends Ia {
  constructor(t) {
    super(), this.isMeshPhysicalMaterial = true, this.defines = { STANDARD: "", PHYSICAL: "" }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Q(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", { get: function() {
      return Ht(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
    }, set: function(e) {
      this.ior = (1 + 0.4 * e) / (1 - 0.4 * e);
    } }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new It(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new It(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new It(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(t);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(t) {
    this._anisotropy > 0 != t > 0 && this.version++, this._anisotropy = t;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(t) {
    this._clearcoat > 0 != t > 0 && this.version++, this._clearcoat = t;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(t) {
    this._iridescence > 0 != t > 0 && this.version++, this._iridescence = t;
  }
  get dispersion() {
    return this._dispersion;
  }
  set dispersion(t) {
    this._dispersion > 0 != t > 0 && this.version++, this._dispersion = t;
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(t) {
    this._sheen > 0 != t > 0 && this.version++, this._sheen = t;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(t) {
    this._transmission > 0 != t > 0 && this.version++, this._transmission = t;
  }
  copy(t) {
    return super.copy(t), this.defines = { STANDARD: "", PHYSICAL: "" }, this.anisotropy = t.anisotropy, this.anisotropyRotation = t.anisotropyRotation, this.anisotropyMap = t.anisotropyMap, this.clearcoat = t.clearcoat, this.clearcoatMap = t.clearcoatMap, this.clearcoatRoughness = t.clearcoatRoughness, this.clearcoatRoughnessMap = t.clearcoatRoughnessMap, this.clearcoatNormalMap = t.clearcoatNormalMap, this.clearcoatNormalScale.copy(t.clearcoatNormalScale), this.dispersion = t.dispersion, this.ior = t.ior, this.iridescence = t.iridescence, this.iridescenceMap = t.iridescenceMap, this.iridescenceIOR = t.iridescenceIOR, this.iridescenceThicknessRange = [...t.iridescenceThicknessRange], this.iridescenceThicknessMap = t.iridescenceThicknessMap, this.sheen = t.sheen, this.sheenColor.copy(t.sheenColor), this.sheenColorMap = t.sheenColorMap, this.sheenRoughness = t.sheenRoughness, this.sheenRoughnessMap = t.sheenRoughnessMap, this.transmission = t.transmission, this.transmissionMap = t.transmissionMap, this.thickness = t.thickness, this.thicknessMap = t.thicknessMap, this.attenuationDistance = t.attenuationDistance, this.attenuationColor.copy(t.attenuationColor), this.specularIntensity = t.specularIntensity, this.specularIntensityMap = t.specularIntensityMap, this.specularColor.copy(t.specularColor), this.specularColorMap = t.specularColorMap, this;
  }
}
class Cx extends sn {
  constructor(t) {
    super(), this.isMeshPhongMaterial = true, this.type = "MeshPhongMaterial", this.color = new It(16777215), this.specular = new It(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new It(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Ea, this.normalScale = new Q(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new rn(), this.combine = pa, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this;
  }
}
class sf extends sn {
  constructor(t) {
    super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = mu, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
  }
}
class rf extends sn {
  constructor(t) {
    super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this;
  }
}
function sr(s, t, e) {
  return !s || !e && s.constructor === t ? s : typeof t.BYTES_PER_ELEMENT == "number" ? new t(s) : Array.prototype.slice.call(s);
}
function of(s) {
  return ArrayBuffer.isView(s) && !(s instanceof DataView);
}
function af(s) {
  function t(i, r) {
    return s[i] - s[r];
  }
  const e = s.length, n = new Array(e);
  for (let i = 0; i !== e; ++i) n[i] = i;
  return n.sort(t), n;
}
function Ol(s, t, e) {
  const n = s.length, i = new s.constructor(n);
  for (let r = 0, o = 0; o !== n; ++r) {
    const a = e[r] * t;
    for (let l = 0; l !== t; ++l) i[o++] = s[a + l];
  }
  return i;
}
function mh(s, t, e, n) {
  let i = 1, r = s[0];
  for (; r !== void 0 && r[n] === void 0; ) r = s[i++];
  if (r === void 0) return;
  let o = r[n];
  if (o !== void 0) if (Array.isArray(o)) do
    o = r[n], o !== void 0 && (t.push(r.time), e.push.apply(e, o)), r = s[i++];
  while (r !== void 0);
  else if (o.toArray !== void 0) do
    o = r[n], o !== void 0 && (t.push(r.time), o.toArray(e, e.length)), r = s[i++];
  while (r !== void 0);
  else do
    o = r[n], o !== void 0 && (t.push(r.time), e.push(o)), r = s[i++];
  while (r !== void 0);
}
class Rs {
  constructor(t, e, n, i) {
    this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new e.constructor(n), this.sampleValues = e, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(t) {
    const e = this.parameterPositions;
    let n = this._cachedIndex, i = e[n], r = e[n - 1];
    t: {
      e: {
        let o;
        n: {
          i: if (!(t < i)) {
            for (let a = n + 2; ; ) {
              if (i === void 0) {
                if (t < r) break i;
                return n = e.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
              }
              if (n === a) break;
              if (r = i, i = e[++n], t < i) break e;
            }
            o = e.length;
            break n;
          }
          if (!(t >= r)) {
            const a = e[1];
            t < a && (n = 2, r = a);
            for (let l = n - 2; ; ) {
              if (r === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === l) break;
              if (i = r, r = e[--n - 1], t >= r) break e;
            }
            o = n, n = 0;
            break n;
          }
          break t;
        }
        for (; n < o; ) {
          const a = n + o >>> 1;
          t < e[a] ? o = a : n = a + 1;
        }
        if (i = e[n], r = e[n - 1], r === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
        if (i === void 0) return n = e.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, r, i);
    }
    return this.interpolate_(n, r, t, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(t) {
    const e = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = t * i;
    for (let o = 0; o !== i; ++o) e[o] = n[r + o];
    return e;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class lf extends Rs {
  constructor(t, e, n, i) {
    super(t, e, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: Pi, endingEnd: Pi };
  }
  intervalChanged_(t, e, n) {
    const i = this.parameterPositions;
    let r = t - 2, o = t + 1, a = i[r], l = i[o];
    if (a === void 0) switch (this.getSettings_().endingStart) {
      case Li:
        r = t, a = 2 * e - n;
        break;
      case xr:
        r = i.length - 2, a = e + i[r] - i[r + 1];
        break;
      default:
        r = t, a = n;
    }
    if (l === void 0) switch (this.getSettings_().endingEnd) {
      case Li:
        o = t, l = 2 * n - e;
        break;
      case xr:
        o = 1, l = n + i[1] - i[0];
        break;
      default:
        o = t - 1, l = e;
    }
    const c = (n - e) * 0.5, h = this.valueSize;
    this._weightPrev = c / (e - a), this._weightNext = c / (l - n), this._offsetPrev = r * h, this._offsetNext = o * h;
  }
  interpolate_(t, e, n, i) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = t * a, c = l - a, h = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, f = this._weightNext, g = (n - e) / (i - e), _ = g * g, m = _ * g, p = -d * m + 2 * d * _ - d * g, b = (1 + d) * m + (-1.5 - 2 * d) * _ + (-0.5 + d) * g + 1, S = (-1 - f) * m + (1.5 + f) * _ + 0.5 * g, x = f * m - f * _;
    for (let L = 0; L !== a; ++L) r[L] = p * o[h + L] + b * o[c + L] + S * o[l + L] + x * o[u + L];
    return r;
  }
}
class gh extends Rs {
  constructor(t, e, n, i) {
    super(t, e, n, i);
  }
  interpolate_(t, e, n, i) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = t * a, c = l - a, h = (n - e) / (i - e), u = 1 - h;
    for (let d = 0; d !== a; ++d) r[d] = o[c + d] * u + o[l + d] * h;
    return r;
  }
}
class cf extends Rs {
  constructor(t, e, n, i) {
    super(t, e, n, i);
  }
  interpolate_(t) {
    return this.copySampleValue_(t - 1);
  }
}
class dn {
  constructor(t, e, n, i) {
    if (t === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (e === void 0 || e.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
    this.name = t, this.times = sr(e, this.TimeBufferType), this.values = sr(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(t) {
    const e = t.constructor;
    let n;
    if (e.toJSON !== this.toJSON) n = e.toJSON(t);
    else {
      n = { name: t.name, times: sr(t.times, Array), values: sr(t.values, Array) };
      const i = t.getInterpolation();
      i !== t.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = t.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(t) {
    return new cf(this.times, this.values, this.getValueSize(), t);
  }
  InterpolantFactoryMethodLinear(t) {
    return new gh(this.times, this.values, this.getValueSize(), t);
  }
  InterpolantFactoryMethodSmooth(t) {
    return new lf(this.times, this.values, this.getValueSize(), t);
  }
  setInterpolation(t) {
    let e;
    switch (t) {
      case ys:
        e = this.InterpolantFactoryMethodDiscrete;
        break;
      case Ms:
        e = this.InterpolantFactoryMethodLinear;
        break;
      case Pr:
        e = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (e === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0) if (t !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
      else throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = e, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return ys;
      case this.InterpolantFactoryMethodLinear:
        return Ms;
      case this.InterpolantFactoryMethodSmooth:
        return Pr;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(t) {
    if (t !== 0) {
      const e = this.times;
      for (let n = 0, i = e.length; n !== i; ++n) e[n] += t;
    }
    return this;
  }
  scale(t) {
    if (t !== 1) {
      const e = this.times;
      for (let n = 0, i = e.length; n !== i; ++n) e[n] *= t;
    }
    return this;
  }
  trim(t, e) {
    const n = this.times, i = n.length;
    let r = 0, o = i - 1;
    for (; r !== i && n[r] < t; ) ++r;
    for (; o !== -1 && n[o] > e; ) --o;
    if (++o, r !== 0 || o !== i) {
      r >= o && (o = Math.max(o, 1), r = o - 1);
      const a = this.getValueSize();
      this.times = n.slice(r, o), this.values = this.values.slice(r * a, o * a);
    }
    return this;
  }
  validate() {
    let t = true;
    const e = this.getValueSize();
    e - Math.floor(e) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = false);
    const n = this.times, i = this.values, r = n.length;
    r === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = false);
    let o = null;
    for (let a = 0; a !== r; a++) {
      const l = n[a];
      if (typeof l == "number" && isNaN(l)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, a, l), t = false;
        break;
      }
      if (o !== null && o > l) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, a, l, o), t = false;
        break;
      }
      o = l;
    }
    if (i !== void 0 && of(i)) for (let a = 0, l = i.length; a !== l; ++a) {
      const c = i[a];
      if (isNaN(c)) {
        console.error("THREE.KeyframeTrack: Value is not a valid number.", this, a, c), t = false;
        break;
      }
    }
    return t;
  }
  optimize() {
    const t = this.times.slice(), e = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === Pr, r = t.length - 1;
    let o = 1;
    for (let a = 1; a < r; ++a) {
      let l = false;
      const c = t[a], h = t[a + 1];
      if (c !== h && (a !== 1 || c !== t[0])) if (i) l = true;
      else {
        const u = a * n, d = u - n, f = u + n;
        for (let g = 0; g !== n; ++g) {
          const _ = e[u + g];
          if (_ !== e[d + g] || _ !== e[f + g]) {
            l = true;
            break;
          }
        }
      }
      if (l) {
        if (a !== o) {
          t[o] = t[a];
          const u = a * n, d = o * n;
          for (let f = 0; f !== n; ++f) e[d + f] = e[u + f];
        }
        ++o;
      }
    }
    if (r > 0) {
      t[o] = t[r];
      for (let a = r * n, l = o * n, c = 0; c !== n; ++c) e[l + c] = e[a + c];
      ++o;
    }
    return o !== t.length ? (this.times = t.slice(0, o), this.values = e.slice(0, o * n)) : (this.times = t, this.values = e), this;
  }
  clone() {
    const t = this.times.slice(), e = this.values.slice(), n = this.constructor, i = new n(this.name, t, e);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
dn.prototype.TimeBufferType = Float32Array;
dn.prototype.ValueBufferType = Float32Array;
dn.prototype.DefaultInterpolation = Ms;
class Ji extends dn {
  constructor(t, e, n) {
    super(t, e, n);
  }
}
Ji.prototype.ValueTypeName = "bool";
Ji.prototype.ValueBufferType = Array;
Ji.prototype.DefaultInterpolation = ys;
Ji.prototype.InterpolantFactoryMethodLinear = void 0;
Ji.prototype.InterpolantFactoryMethodSmooth = void 0;
class _h extends dn {
}
_h.prototype.ValueTypeName = "color";
class qi extends dn {
}
qi.prototype.ValueTypeName = "number";
class hf extends Rs {
  constructor(t, e, n, i) {
    super(t, e, n, i);
  }
  interpolate_(t, e, n, i) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = (n - e) / (i - e);
    let c = t * a;
    for (let h = c + a; c !== h; c += 4) Pe.slerpFlat(r, 0, o, c - a, o, c, l);
    return r;
  }
}
class ji extends dn {
  InterpolantFactoryMethodLinear(t) {
    return new hf(this.times, this.values, this.getValueSize(), t);
  }
}
ji.prototype.ValueTypeName = "quaternion";
ji.prototype.InterpolantFactoryMethodSmooth = void 0;
class Qi extends dn {
  constructor(t, e, n) {
    super(t, e, n);
  }
}
Qi.prototype.ValueTypeName = "string";
Qi.prototype.ValueBufferType = Array;
Qi.prototype.DefaultInterpolation = ys;
Qi.prototype.InterpolantFactoryMethodLinear = void 0;
Qi.prototype.InterpolantFactoryMethodSmooth = void 0;
class $i extends dn {
}
$i.prototype.ValueTypeName = "vector";
class la {
  constructor(t = "", e = -1, n = [], i = Sa) {
    this.name = t, this.tracks = n, this.duration = e, this.blendMode = i, this.uuid = je(), this.duration < 0 && this.resetDuration();
  }
  static parse(t) {
    const e = [], n = t.tracks, i = 1 / (t.fps || 1);
    for (let o = 0, a = n.length; o !== a; ++o) e.push(df(n[o]).scale(i));
    const r = new this(t.name, t.duration, e, t.blendMode);
    return r.uuid = t.uuid, r;
  }
  static toJSON(t) {
    const e = [], n = t.tracks, i = { name: t.name, duration: t.duration, tracks: e, uuid: t.uuid, blendMode: t.blendMode };
    for (let r = 0, o = n.length; r !== o; ++r) e.push(dn.toJSON(n[r]));
    return i;
  }
  static CreateFromMorphTargetSequence(t, e, n, i) {
    const r = e.length, o = [];
    for (let a = 0; a < r; a++) {
      let l = [], c = [];
      l.push((a + r - 1) % r, a, (a + 1) % r), c.push(0, 1, 0);
      const h = af(l);
      l = Ol(l, 1, h), c = Ol(c, 1, h), !i && l[0] === 0 && (l.push(r), c.push(c[0])), o.push(new qi(".morphTargetInfluences[" + e[a].name + "]", l, c).scale(1 / n));
    }
    return new this(t, -1, o);
  }
  static findByName(t, e) {
    let n = t;
    if (!Array.isArray(t)) {
      const i = t;
      n = i.geometry && i.geometry.animations || i.animations;
    }
    for (let i = 0; i < n.length; i++) if (n[i].name === e) return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(t, e, n) {
    const i = {}, r = /^([\w-]*?)([\d]+)$/;
    for (let a = 0, l = t.length; a < l; a++) {
      const c = t[a], h = c.name.match(r);
      if (h && h.length > 1) {
        const u = h[1];
        let d = i[u];
        d || (i[u] = d = []), d.push(c);
      }
    }
    const o = [];
    for (const a in i) o.push(this.CreateFromMorphTargetSequence(a, i[a], e, n));
    return o;
  }
  static parseAnimation(t, e) {
    if (!t) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(u, d, f, g, _) {
      if (f.length !== 0) {
        const m = [], p = [];
        mh(f, m, p, g), m.length !== 0 && _.push(new u(d, m, p));
      }
    }, i = [], r = t.name || "default", o = t.fps || 30, a = t.blendMode;
    let l = t.length || -1;
    const c = t.hierarchy || [];
    for (let u = 0; u < c.length; u++) {
      const d = c[u].keys;
      if (!(!d || d.length === 0)) if (d[0].morphTargets) {
        const f = {};
        let g;
        for (g = 0; g < d.length; g++) if (d[g].morphTargets) for (let _ = 0; _ < d[g].morphTargets.length; _++) f[d[g].morphTargets[_]] = -1;
        for (const _ in f) {
          const m = [], p = [];
          for (let b = 0; b !== d[g].morphTargets.length; ++b) {
            const S = d[g];
            m.push(S.time), p.push(S.morphTarget === _ ? 1 : 0);
          }
          i.push(new qi(".morphTargetInfluence[" + _ + "]", m, p));
        }
        l = f.length * o;
      } else {
        const f = ".bones[" + e[u].name + "]";
        n($i, f + ".position", d, "pos", i), n(ji, f + ".quaternion", d, "rot", i), n($i, f + ".scale", d, "scl", i);
      }
    }
    return i.length === 0 ? null : new this(r, l, i, a);
  }
  resetDuration() {
    const t = this.tracks;
    let e = 0;
    for (let n = 0, i = t.length; n !== i; ++n) {
      const r = this.tracks[n];
      e = Math.max(e, r.times[r.times.length - 1]);
    }
    return this.duration = e, this;
  }
  trim() {
    for (let t = 0; t < this.tracks.length; t++) this.tracks[t].trim(0, this.duration);
    return this;
  }
  validate() {
    let t = true;
    for (let e = 0; e < this.tracks.length; e++) t = t && this.tracks[e].validate();
    return t;
  }
  optimize() {
    for (let t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
    return this;
  }
  clone() {
    const t = [];
    for (let e = 0; e < this.tracks.length; e++) t.push(this.tracks[e].clone());
    return new this.constructor(this.name, this.duration, t, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function uf(s) {
  switch (s.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return qi;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return $i;
    case "color":
      return _h;
    case "quaternion":
      return ji;
    case "bool":
    case "boolean":
      return Ji;
    case "string":
      return Qi;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + s);
}
function df(s) {
  if (s.type === void 0) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const t = uf(s.type);
  if (s.times === void 0) {
    const e = [], n = [];
    mh(s.keys, e, n, "value"), s.times = e, s.values = n;
  }
  return t.parse !== void 0 ? t.parse(s) : new t(s.name, s.times, s.values, s.interpolation);
}
const Bn = { enabled: false, files: {}, add: function(s, t) {
  this.enabled !== false && (this.files[s] = t);
}, get: function(s) {
  if (this.enabled !== false) return this.files[s];
}, remove: function(s) {
  delete this.files[s];
}, clear: function() {
  this.files = {};
} };
class ff {
  constructor(t, e, n) {
    const i = this;
    let r = false, o = 0, a = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.itemStart = function(h) {
      a++, r === false && i.onStart !== void 0 && i.onStart(h, o, a), r = true;
    }, this.itemEnd = function(h) {
      o++, i.onProgress !== void 0 && i.onProgress(h, o, a), o === a && (r = false, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(h) {
      i.onError !== void 0 && i.onError(h);
    }, this.resolveURL = function(h) {
      return l ? l(h) : h;
    }, this.setURLModifier = function(h) {
      return l = h, this;
    }, this.addHandler = function(h, u) {
      return c.push(h, u), this;
    }, this.removeHandler = function(h) {
      const u = c.indexOf(h);
      return u !== -1 && c.splice(u, 2), this;
    }, this.getHandler = function(h) {
      for (let u = 0, d = c.length; u < d; u += 2) {
        const f = c[u], g = c[u + 1];
        if (f.global && (f.lastIndex = 0), f.test(h)) return g;
      }
      return null;
    };
  }
}
const pf = new ff();
class ui {
  constructor(t) {
    this.manager = t !== void 0 ? t : pf, this.crossOrigin = "anonymous", this.withCredentials = false, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(t, e) {
    const n = this;
    return new Promise(function(i, r) {
      n.load(t, i, e, r);
    });
  }
  parse() {
  }
  setCrossOrigin(t) {
    return this.crossOrigin = t, this;
  }
  setWithCredentials(t) {
    return this.withCredentials = t, this;
  }
  setPath(t) {
    return this.path = t, this;
  }
  setResourcePath(t) {
    return this.resourcePath = t, this;
  }
  setRequestHeader(t) {
    return this.requestHeader = t, this;
  }
}
ui.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const xn = {};
class mf extends Error {
  constructor(t, e) {
    super(t), this.response = e;
  }
}
class Da extends ui {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    t === void 0 && (t = ""), this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t);
    const r = Bn.get(t);
    if (r !== void 0) return this.manager.itemStart(t), setTimeout(() => {
      e && e(r), this.manager.itemEnd(t);
    }, 0), r;
    if (xn[t] !== void 0) {
      xn[t].push({ onLoad: e, onProgress: n, onError: i });
      return;
    }
    xn[t] = [], xn[t].push({ onLoad: e, onProgress: n, onError: i });
    const o = new Request(t, { headers: new Headers(this.requestHeader), credentials: this.withCredentials ? "include" : "same-origin" }), a = this.mimeType, l = this.responseType;
    fetch(o).then((c) => {
      if (c.status === 200 || c.status === 0) {
        if (c.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || c.body === void 0 || c.body.getReader === void 0) return c;
        const h = xn[t], u = c.body.getReader(), d = c.headers.get("X-File-Size") || c.headers.get("Content-Length"), f = d ? parseInt(d) : 0, g = f !== 0;
        let _ = 0;
        const m = new ReadableStream({ start(p) {
          b();
          function b() {
            u.read().then(({ done: S, value: x }) => {
              if (S) p.close();
              else {
                _ += x.byteLength;
                const L = new ProgressEvent("progress", { lengthComputable: g, loaded: _, total: f });
                for (let R = 0, C = h.length; R < C; R++) {
                  const I = h[R];
                  I.onProgress && I.onProgress(L);
                }
                p.enqueue(x), b();
              }
            }, (S) => {
              p.error(S);
            });
          }
        } });
        return new Response(m);
      } else throw new mf('fetch for "'.concat(c.url, '" responded with ').concat(c.status, ": ").concat(c.statusText), c);
    }).then((c) => {
      switch (l) {
        case "arraybuffer":
          return c.arrayBuffer();
        case "blob":
          return c.blob();
        case "document":
          return c.text().then((h) => new DOMParser().parseFromString(h, a));
        case "json":
          return c.json();
        default:
          if (a === void 0) return c.text();
          {
            const u = /charset="?([^;"\s]*)"?/i.exec(a), d = u && u[1] ? u[1].toLowerCase() : void 0, f = new TextDecoder(d);
            return c.arrayBuffer().then((g) => f.decode(g));
          }
      }
    }).then((c) => {
      Bn.add(t, c);
      const h = xn[t];
      delete xn[t];
      for (let u = 0, d = h.length; u < d; u++) {
        const f = h[u];
        f.onLoad && f.onLoad(c);
      }
    }).catch((c) => {
      const h = xn[t];
      if (h === void 0) throw this.manager.itemError(t), c;
      delete xn[t];
      for (let u = 0, d = h.length; u < d; u++) {
        const f = h[u];
        f.onError && f.onError(c);
      }
      this.manager.itemError(t);
    }).finally(() => {
      this.manager.itemEnd(t);
    }), this.manager.itemStart(t);
  }
  setResponseType(t) {
    return this.responseType = t, this;
  }
  setMimeType(t) {
    return this.mimeType = t, this;
  }
}
class gf extends ui {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t);
    const r = this, o = Bn.get(t);
    if (o !== void 0) return r.manager.itemStart(t), setTimeout(function() {
      e && e(o), r.manager.itemEnd(t);
    }, 0), o;
    const a = Ss("img");
    function l() {
      h(), Bn.add(t, this), e && e(this), r.manager.itemEnd(t);
    }
    function c(u) {
      h(), i && i(u), r.manager.itemError(t), r.manager.itemEnd(t);
    }
    function h() {
      a.removeEventListener("load", l, false), a.removeEventListener("error", c, false);
    }
    return a.addEventListener("load", l, false), a.addEventListener("error", c, false), t.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(t), a.src = t, a;
  }
}
class _f extends ui {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    const r = new xe(), o = new gf(this.manager);
    return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(t, function(a) {
      r.image = a, r.needsUpdate = true, e !== void 0 && e(r);
    }, n, i), r;
  }
}
class Cs extends ae {
  constructor(t, e = 1) {
    super(), this.isLight = true, this.type = "Light", this.color = new It(t), this.intensity = e;
  }
  dispose() {
  }
  copy(t, e) {
    return super.copy(t, e), this.color.copy(t.color), this.intensity = t.intensity, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, this.groundColor !== void 0 && (e.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (e.object.distance = this.distance), this.angle !== void 0 && (e.object.angle = this.angle), this.decay !== void 0 && (e.object.decay = this.decay), this.penumbra !== void 0 && (e.object.penumbra = this.penumbra), this.shadow !== void 0 && (e.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (e.object.target = this.target.uuid), e;
  }
}
class Px extends Cs {
  constructor(t, e, n) {
    super(t, n), this.isHemisphereLight = true, this.type = "HemisphereLight", this.position.copy(ae.DEFAULT_UP), this.updateMatrix(), this.groundColor = new It(e);
  }
  copy(t, e) {
    return super.copy(t, e), this.groundColor.copy(t.groundColor), this;
  }
}
const io = new Ot(), Bl = new w(), kl = new w();
class Na {
  constructor(t) {
    this.camera = t, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Q(512, 512), this.map = null, this.mapPass = null, this.matrix = new Ot(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new Ra(), this._frameExtents = new Q(1, 1), this._viewportCount = 1, this._viewports = [new Zt(0, 0, 1, 1)];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(t) {
    const e = this.camera, n = this.matrix;
    Bl.setFromMatrixPosition(t.matrixWorld), e.position.copy(Bl), kl.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(kl), e.updateMatrixWorld(), io.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(io), n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), n.multiply(io);
  }
  getViewport(t) {
    return this._viewports[t];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(t) {
    return this.camera = t.camera.clone(), this.intensity = t.intensity, this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const t = {};
    return this.intensity !== 1 && (t.intensity = this.intensity), this.bias !== 0 && (t.bias = this.bias), this.normalBias !== 0 && (t.normalBias = this.normalBias), this.radius !== 1 && (t.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(false).object, delete t.camera.matrix, t;
  }
}
class vf extends Na {
  constructor() {
    super(new Ue(50, 1, 0.5, 500)), this.isSpotLightShadow = true, this.focus = 1;
  }
  updateMatrices(t) {
    const e = this.camera, n = Xi * 2 * t.angle * this.focus, i = this.mapSize.width / this.mapSize.height, r = t.distance || e.far;
    (n !== e.fov || i !== e.aspect || r !== e.far) && (e.fov = n, e.aspect = i, e.far = r, e.updateProjectionMatrix()), super.updateMatrices(t);
  }
  copy(t) {
    return super.copy(t), this.focus = t.focus, this;
  }
}
class xf extends Cs {
  constructor(t, e, n = 0, i = Math.PI / 3, r = 0, o = 2) {
    super(t, e), this.isSpotLight = true, this.type = "SpotLight", this.position.copy(ae.DEFAULT_UP), this.updateMatrix(), this.target = new ae(), this.distance = n, this.angle = i, this.penumbra = r, this.decay = o, this.map = null, this.shadow = new vf();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(t) {
    this.intensity = t / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t, e) {
    return super.copy(t, e), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
  }
}
const zl = new Ot(), cs = new w(), so = new w();
class yf extends Na {
  constructor() {
    super(new Ue(90, 1, 0.5, 500)), this.isPointLightShadow = true, this._frameExtents = new Q(4, 2), this._viewportCount = 6, this._viewports = [new Zt(2, 1, 1, 1), new Zt(0, 1, 1, 1), new Zt(3, 1, 1, 1), new Zt(1, 1, 1, 1), new Zt(3, 0, 1, 1), new Zt(1, 0, 1, 1)], this._cubeDirections = [new w(1, 0, 0), new w(-1, 0, 0), new w(0, 0, 1), new w(0, 0, -1), new w(0, 1, 0), new w(0, -1, 0)], this._cubeUps = [new w(0, 1, 0), new w(0, 1, 0), new w(0, 1, 0), new w(0, 1, 0), new w(0, 0, 1), new w(0, 0, -1)];
  }
  updateMatrices(t, e = 0) {
    const n = this.camera, i = this.matrix, r = t.distance || n.far;
    r !== n.far && (n.far = r, n.updateProjectionMatrix()), cs.setFromMatrixPosition(t.matrixWorld), n.position.copy(cs), so.copy(n.position), so.add(this._cubeDirections[e]), n.up.copy(this._cubeUps[e]), n.lookAt(so), n.updateMatrixWorld(), i.makeTranslation(-cs.x, -cs.y, -cs.z), zl.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(zl);
  }
}
class Mf extends Cs {
  constructor(t, e, n = 0, i = 2) {
    super(t, e), this.isPointLight = true, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new yf();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(t) {
    this.intensity = t / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t, e) {
    return super.copy(t, e), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this;
  }
}
class Ua extends jc {
  constructor(t = -1, e = 1, n = 1, i = -1, r = 0.1, o = 2e3) {
    super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = i, this.near = r, this.far = o, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = t.view === null ? null : Object.assign({}, t.view), this;
  }
  setViewOffset(t, e, n, i, r, o) {
    this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let r = n - t, o = n + t, a = i + e, l = i - e;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += c * this.view.offsetX, o = r + c * this.view.width, a -= h * this.view.offsetY, l = a - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, o, a, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, this.view !== null && (e.object.view = Object.assign({}, this.view)), e;
  }
}
class Sf extends Na {
  constructor() {
    super(new Ua(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
  }
}
class Ef extends Cs {
  constructor(t, e) {
    super(t, e), this.isDirectionalLight = true, this.type = "DirectionalLight", this.position.copy(ae.DEFAULT_UP), this.updateMatrix(), this.target = new ae(), this.shadow = new Sf();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t) {
    return super.copy(t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
  }
}
class Lx extends Cs {
  constructor(t, e) {
    super(t, e), this.isAmbientLight = true, this.type = "AmbientLight";
  }
}
class vs {
  static decodeText(t) {
    if (console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."), typeof TextDecoder < "u") return new TextDecoder().decode(t);
    let e = "";
    for (let n = 0, i = t.length; n < i; n++) e += String.fromCharCode(t[n]);
    try {
      return decodeURIComponent(escape(e));
    } catch (e2) {
      return e;
    }
  }
  static extractUrlBase(t) {
    const e = t.lastIndexOf("/");
    return e === -1 ? "./" : t.slice(0, e + 1);
  }
  static resolveURL(t, e) {
    return typeof t != "string" || t === "" ? "" : (/^https?:\/\//i.test(e) && /^\//.test(t) && (e = e.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(t) || /^data:.*,.*$/i.test(t) || /^blob:.*$/i.test(t) ? t : e + t);
  }
}
class Af extends ui {
  constructor(t) {
    super(t), this.isImageBitmapLoader = true, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(t) {
    return this.options = t, this;
  }
  load(t, e, n, i) {
    t === void 0 && (t = ""), this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t);
    const r = this, o = Bn.get(t);
    if (o !== void 0) {
      if (r.manager.itemStart(t), o.then) {
        o.then((c) => {
          e && e(c), r.manager.itemEnd(t);
        }).catch((c) => {
          i && i(c);
        });
        return;
      }
      return setTimeout(function() {
        e && e(o), r.manager.itemEnd(t);
      }, 0), o;
    }
    const a = {};
    a.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", a.headers = this.requestHeader;
    const l = fetch(t, a).then(function(c) {
      return c.blob();
    }).then(function(c) {
      return createImageBitmap(c, Object.assign(r.options, { colorSpaceConversion: "none" }));
    }).then(function(c) {
      return Bn.add(t, c), e && e(c), r.manager.itemEnd(t), c;
    }).catch(function(c) {
      i && i(c), Bn.remove(t), r.manager.itemError(t), r.manager.itemEnd(t);
    });
    Bn.add(t, l), r.manager.itemStart(t);
  }
}
let rr;
class vh {
  static getContext() {
    return rr === void 0 && (rr = new (window.AudioContext || window.webkitAudioContext)()), rr;
  }
  static setContext(t) {
    rr = t;
  }
}
class Ix extends ui {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    const r = this, o = new Da(this.manager);
    o.setResponseType("arraybuffer"), o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(t, function(l) {
      try {
        const c = l.slice(0);
        vh.getContext().decodeAudioData(c, function(u) {
          e(u);
        }).catch(a);
      } catch (c) {
        a(c);
      }
    }, n, i);
    function a(l) {
      i ? i(l) : console.error(l), r.manager.itemError(t);
    }
  }
}
class bf extends Ue {
  constructor(t = []) {
    super(), this.isArrayCamera = true, this.cameras = t;
  }
}
class Tf {
  constructor(t = true) {
    this.autoStart = t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = false;
  }
  start() {
    this.startTime = Hl(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = true;
  }
  stop() {
    this.getElapsedTime(), this.running = false, this.autoStart = false;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let t = 0;
    if (this.autoStart && !this.running) return this.start(), 0;
    if (this.running) {
      const e = Hl();
      t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t;
    }
    return t;
  }
}
function Hl() {
  return performance.now();
}
const Kn = new w(), Vl = new Pe(), wf = new w(), Zn = new w();
class Dx extends ae {
  constructor() {
    super(), this.type = "AudioListener", this.context = vh.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new Tf();
  }
  getInput() {
    return this.gain;
  }
  removeFilter() {
    return this.filter !== null && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this;
  }
  getFilter() {
    return this.filter;
  }
  setFilter(t) {
    return this.filter !== null ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = t, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this;
  }
  getMasterVolume() {
    return this.gain.gain.value;
  }
  setMasterVolume(t) {
    return this.gain.gain.setTargetAtTime(t, this.context.currentTime, 0.01), this;
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t);
    const e = this.context.listener, n = this.up;
    if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(Kn, Vl, wf), Zn.set(0, 0, -1).applyQuaternion(Vl), e.positionX) {
      const i = this.context.currentTime + this.timeDelta;
      e.positionX.linearRampToValueAtTime(Kn.x, i), e.positionY.linearRampToValueAtTime(Kn.y, i), e.positionZ.linearRampToValueAtTime(Kn.z, i), e.forwardX.linearRampToValueAtTime(Zn.x, i), e.forwardY.linearRampToValueAtTime(Zn.y, i), e.forwardZ.linearRampToValueAtTime(Zn.z, i), e.upX.linearRampToValueAtTime(n.x, i), e.upY.linearRampToValueAtTime(n.y, i), e.upZ.linearRampToValueAtTime(n.z, i);
    } else e.setPosition(Kn.x, Kn.y, Kn.z), e.setOrientation(Zn.x, Zn.y, Zn.z, n.x, n.y, n.z);
  }
}
class Rf extends ae {
  constructor(t) {
    super(), this.type = "Audio", this.listener = t, this.context = t.context, this.gain = this.context.createGain(), this.gain.connect(t.getInput()), this.autoplay = false, this.buffer = null, this.detune = 0, this.loop = false, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = false, this.hasPlaybackControl = true, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = false, this.filters = [];
  }
  getOutput() {
    return this.gain;
  }
  setNodeSource(t) {
    return this.hasPlaybackControl = false, this.sourceType = "audioNode", this.source = t, this.connect(), this;
  }
  setMediaElementSource(t) {
    return this.hasPlaybackControl = false, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(t), this.connect(), this;
  }
  setMediaStreamSource(t) {
    return this.hasPlaybackControl = false, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(t), this.connect(), this;
  }
  setBuffer(t) {
    return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this;
  }
  play(t = 0) {
    if (this.isPlaying === true) {
      console.warn("THREE.Audio: Audio is already playing.");
      return;
    }
    if (this.hasPlaybackControl === false) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    this._startedAt = this.context.currentTime + t;
    const e = this.context.createBufferSource();
    return e.buffer = this.buffer, e.loop = this.loop, e.loopStart = this.loopStart, e.loopEnd = this.loopEnd, e.onended = this.onEnded.bind(this), e.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = true, this.source = e, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect();
  }
  pause() {
    if (this.hasPlaybackControl === false) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.isPlaying === true && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, this.loop === true && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = false), this;
  }
  stop(t = 0) {
    if (this.hasPlaybackControl === false) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this._progress = 0, this.source !== null && (this.source.stop(this.context.currentTime + t), this.source.onended = null), this.isPlaying = false, this;
  }
  connect() {
    if (this.filters.length > 0) {
      this.source.connect(this.filters[0]);
      for (let t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].connect(this.filters[t]);
      this.filters[this.filters.length - 1].connect(this.getOutput());
    } else this.source.connect(this.getOutput());
    return this._connected = true, this;
  }
  disconnect() {
    if (this._connected !== false) {
      if (this.filters.length > 0) {
        this.source.disconnect(this.filters[0]);
        for (let t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].disconnect(this.filters[t]);
        this.filters[this.filters.length - 1].disconnect(this.getOutput());
      } else this.source.disconnect(this.getOutput());
      return this._connected = false, this;
    }
  }
  getFilters() {
    return this.filters;
  }
  setFilters(t) {
    return t || (t = []), this._connected === true ? (this.disconnect(), this.filters = t.slice(), this.connect()) : this.filters = t.slice(), this;
  }
  setDetune(t) {
    return this.detune = t, this.isPlaying === true && this.source.detune !== void 0 && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, 0.01), this;
  }
  getDetune() {
    return this.detune;
  }
  getFilter() {
    return this.getFilters()[0];
  }
  setFilter(t) {
    return this.setFilters(t ? [t] : []);
  }
  setPlaybackRate(t) {
    if (this.hasPlaybackControl === false) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.playbackRate = t, this.isPlaying === true && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, 0.01), this;
  }
  getPlaybackRate() {
    return this.playbackRate;
  }
  onEnded() {
    this.isPlaying = false, this._progress = 0;
  }
  getLoop() {
    return this.hasPlaybackControl === false ? (console.warn("THREE.Audio: this Audio has no playback control."), false) : this.loop;
  }
  setLoop(t) {
    if (this.hasPlaybackControl === false) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.loop = t, this.isPlaying === true && (this.source.loop = this.loop), this;
  }
  setLoopStart(t) {
    return this.loopStart = t, this;
  }
  setLoopEnd(t) {
    return this.loopEnd = t, this;
  }
  getVolume() {
    return this.gain.gain.value;
  }
  setVolume(t) {
    return this.gain.gain.setTargetAtTime(t, this.context.currentTime, 0.01), this;
  }
  copy(t, e) {
    return super.copy(t, e), t.sourceType !== "buffer" ? (console.warn("THREE.Audio: Audio source type cannot be copied."), this) : (this.autoplay = t.autoplay, this.buffer = t.buffer, this.detune = t.detune, this.loop = t.loop, this.loopStart = t.loopStart, this.loopEnd = t.loopEnd, this.offset = t.offset, this.duration = t.duration, this.playbackRate = t.playbackRate, this.hasPlaybackControl = t.hasPlaybackControl, this.sourceType = t.sourceType, this.filters = t.filters.slice(), this);
  }
  clone(t) {
    return new this.constructor(this.listener).copy(this, t);
  }
}
const Jn = new w(), Gl = new Pe(), Cf = new w(), Qn = new w();
class Nx extends Rf {
  constructor(t) {
    super(t), this.panner = this.context.createPanner(), this.panner.panningModel = "HRTF", this.panner.connect(this.gain);
  }
  connect() {
    super.connect(), this.panner.connect(this.gain);
  }
  disconnect() {
    super.disconnect(), this.panner.disconnect(this.gain);
  }
  getOutput() {
    return this.panner;
  }
  getRefDistance() {
    return this.panner.refDistance;
  }
  setRefDistance(t) {
    return this.panner.refDistance = t, this;
  }
  getRolloffFactor() {
    return this.panner.rolloffFactor;
  }
  setRolloffFactor(t) {
    return this.panner.rolloffFactor = t, this;
  }
  getDistanceModel() {
    return this.panner.distanceModel;
  }
  setDistanceModel(t) {
    return this.panner.distanceModel = t, this;
  }
  getMaxDistance() {
    return this.panner.maxDistance;
  }
  setMaxDistance(t) {
    return this.panner.maxDistance = t, this;
  }
  setDirectionalCone(t, e, n) {
    return this.panner.coneInnerAngle = t, this.panner.coneOuterAngle = e, this.panner.coneOuterGain = n, this;
  }
  updateMatrixWorld(t) {
    if (super.updateMatrixWorld(t), this.hasPlaybackControl === true && this.isPlaying === false) return;
    this.matrixWorld.decompose(Jn, Gl, Cf), Qn.set(0, 0, 1).applyQuaternion(Gl);
    const e = this.panner;
    if (e.positionX) {
      const n = this.context.currentTime + this.listener.timeDelta;
      e.positionX.linearRampToValueAtTime(Jn.x, n), e.positionY.linearRampToValueAtTime(Jn.y, n), e.positionZ.linearRampToValueAtTime(Jn.z, n), e.orientationX.linearRampToValueAtTime(Qn.x, n), e.orientationY.linearRampToValueAtTime(Qn.y, n), e.orientationZ.linearRampToValueAtTime(Qn.z, n);
    } else e.setPosition(Jn.x, Jn.y, Jn.z), e.setOrientation(Qn.x, Qn.y, Qn.z);
  }
}
class Pf {
  constructor(t, e, n) {
    this.binding = t, this.valueSize = n;
    let i, r, o;
    switch (e) {
      case "quaternion":
        i = this._slerp, r = this._slerpAdditive, o = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(n * 6), this._workIndex = 5;
        break;
      case "string":
      case "bool":
        i = this._select, r = this._select, o = this._setAdditiveIdentityOther, this.buffer = new Array(n * 5);
        break;
      default:
        i = this._lerp, r = this._lerpAdditive, o = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(n * 5);
    }
    this._mixBufferRegion = i, this._mixBufferRegionAdditive = r, this._setIdentity = o, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
  }
  accumulate(t, e) {
    const n = this.buffer, i = this.valueSize, r = t * i + i;
    let o = this.cumulativeWeight;
    if (o === 0) {
      for (let a = 0; a !== i; ++a) n[r + a] = n[a];
      o = e;
    } else {
      o += e;
      const a = e / o;
      this._mixBufferRegion(n, r, 0, a, i);
    }
    this.cumulativeWeight = o;
  }
  accumulateAdditive(t) {
    const e = this.buffer, n = this.valueSize, i = n * this._addIndex;
    this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(e, i, 0, t, n), this.cumulativeWeightAdditive += t;
  }
  apply(t) {
    const e = this.valueSize, n = this.buffer, i = t * e + e, r = this.cumulativeWeight, o = this.cumulativeWeightAdditive, a = this.binding;
    if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, r < 1) {
      const l = e * this._origIndex;
      this._mixBufferRegion(n, i, l, 1 - r, e);
    }
    o > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * e, 1, e);
    for (let l = e, c = e + e; l !== c; ++l) if (n[l] !== n[l + e]) {
      a.setValue(n, i);
      break;
    }
  }
  saveOriginalState() {
    const t = this.binding, e = this.buffer, n = this.valueSize, i = n * this._origIndex;
    t.getValue(e, i);
    for (let r = n, o = i; r !== o; ++r) e[r] = e[i + r % n];
    this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
  }
  restoreOriginalState() {
    const t = this.valueSize * 3;
    this.binding.setValue(this.buffer, t);
  }
  _setAdditiveIdentityNumeric() {
    const t = this._addIndex * this.valueSize, e = t + this.valueSize;
    for (let n = t; n < e; n++) this.buffer[n] = 0;
  }
  _setAdditiveIdentityQuaternion() {
    this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
  }
  _setAdditiveIdentityOther() {
    const t = this._origIndex * this.valueSize, e = this._addIndex * this.valueSize;
    for (let n = 0; n < this.valueSize; n++) this.buffer[e + n] = this.buffer[t + n];
  }
  _select(t, e, n, i, r) {
    if (i >= 0.5) for (let o = 0; o !== r; ++o) t[e + o] = t[n + o];
  }
  _slerp(t, e, n, i) {
    Pe.slerpFlat(t, e, t, e, t, n, i);
  }
  _slerpAdditive(t, e, n, i, r) {
    const o = this._workIndex * r;
    Pe.multiplyQuaternionsFlat(t, o, t, e, t, n), Pe.slerpFlat(t, e, t, e, t, o, i);
  }
  _lerp(t, e, n, i, r) {
    const o = 1 - i;
    for (let a = 0; a !== r; ++a) {
      const l = e + a;
      t[l] = t[l] * o + t[n + a] * i;
    }
  }
  _lerpAdditive(t, e, n, i, r) {
    for (let o = 0; o !== r; ++o) {
      const a = e + o;
      t[a] = t[a] + t[n + o] * i;
    }
  }
}
const Fa = "\\[\\]\\.:\\/", Lf = new RegExp("[" + Fa + "]", "g"), Oa = "[^" + Fa + "]", If = "[^" + Fa.replace("\\.", "") + "]", Df = /((?:WC+[\/:])*)/.source.replace("WC", Oa), Nf = /(WCOD+)?/.source.replace("WCOD", If), Uf = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Oa), Ff = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Oa), Of = new RegExp("^" + Df + Nf + Uf + Ff + "$"), Bf = ["material", "materials", "bones", "map"];
class kf {
  constructor(t, e, n) {
    const i = n || ee.parseTrackName(e);
    this._targetGroup = t, this._bindings = t.subscribe_(e, i);
  }
  getValue(t, e) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
    i !== void 0 && i.getValue(t, e);
  }
  setValue(t, e) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i) n[i].setValue(t, e);
  }
  bind() {
    const t = this._bindings;
    for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].bind();
  }
  unbind() {
    const t = this._bindings;
    for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].unbind();
  }
}
class ee {
  constructor(t, e, n) {
    this.path = e, this.parsedPath = n || ee.parseTrackName(e), this.node = ee.findNode(t, this.parsedPath.nodeName), this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(t, e, n) {
    return t && t.isAnimationObjectGroup ? new ee.Composite(t, e, n) : new ee(t, e, n);
  }
  static sanitizeNodeName(t) {
    return t.replace(/\s/g, "_").replace(Lf, "");
  }
  static parseTrackName(t) {
    const e = Of.exec(t);
    if (e === null) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
    const n = { nodeName: e[2], objectName: e[3], objectIndex: e[4], propertyName: e[5], propertyIndex: e[6] }, i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const r = n.nodeName.substring(i + 1);
      Bf.indexOf(r) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = r);
    }
    if (n.propertyName === null || n.propertyName.length === 0) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
    return n;
  }
  static findNode(t, e) {
    if (e === void 0 || e === "" || e === "." || e === -1 || e === t.name || e === t.uuid) return t;
    if (t.skeleton) {
      const n = t.skeleton.getBoneByName(e);
      if (n !== void 0) return n;
    }
    if (t.children) {
      const n = function(r) {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          if (a.name === e || a.uuid === e) return a;
          const l = n(a.children);
          if (l) return l;
        }
        return null;
      }, i = n(t.children);
      if (i) return i;
    }
    return null;
  }
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  _getValue_direct(t, e) {
    t[e] = this.targetObject[this.propertyName];
  }
  _getValue_array(t, e) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) t[e++] = n[i];
  }
  _getValue_arrayElement(t, e) {
    t[e] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(t, e) {
    this.resolvedProperty.toArray(t, e);
  }
  _setValue_direct(t, e) {
    this.targetObject[this.propertyName] = t[e];
  }
  _setValue_direct_setNeedsUpdate(t, e) {
    this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = true;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
    this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_array(t, e) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
  }
  _setValue_array_setNeedsUpdate(t, e) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
    this.targetObject.needsUpdate = true;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_arrayElement(t, e) {
    this.resolvedProperty[this.propertyIndex] = t[e];
  }
  _setValue_arrayElement_setNeedsUpdate(t, e) {
    this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = true;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
    this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_fromArray(t, e) {
    this.resolvedProperty.fromArray(t, e);
  }
  _setValue_fromArray_setNeedsUpdate(t, e) {
    this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = true;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
    this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _getValue_unbound(t, e) {
    this.bind(), this.getValue(t, e);
  }
  _setValue_unbound(t, e) {
    this.bind(), this.setValue(t, e);
  }
  bind() {
    let t = this.node;
    const e = this.parsedPath, n = e.objectName, i = e.propertyName;
    let r = e.propertyIndex;
    if (t || (t = ee.findNode(this.rootNode, e.nodeName), this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) {
      console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (n) {
      let c = e.objectIndex;
      switch (n) {
        case "materials":
          if (!t.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!t.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          t = t.material.materials;
          break;
        case "bones":
          if (!t.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          t = t.skeleton.bones;
          for (let h = 0; h < t.length; h++) if (t[h].name === c) {
            c = h;
            break;
          }
          break;
        case "map":
          if ("map" in t) {
            t = t.map;
            break;
          }
          if (!t.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!t.material.map) {
            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          t = t.material.map;
          break;
        default:
          if (t[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          t = t[n];
      }
      if (c !== void 0) {
        if (t[c] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
          return;
        }
        t = t[c];
      }
    }
    const o = t[i];
    if (o === void 0) {
      const c = e.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + i + " but it wasn't found.", t);
      return;
    }
    let a = this.Versioning.None;
    this.targetObject = t, t.needsUpdate !== void 0 ? a = this.Versioning.NeedsUpdate : t.matrixWorldNeedsUpdate !== void 0 && (a = this.Versioning.MatrixWorldNeedsUpdate);
    let l = this.BindingType.Direct;
    if (r !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!t.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!t.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        t.morphTargetDictionary[r] !== void 0 && (r = t.morphTargetDictionary[r]);
      }
      l = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = r;
    } else o.fromArray !== void 0 && o.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (l = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][a];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
ee.Composite = kf;
ee.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 };
ee.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 };
ee.prototype.GetterByBindingType = [ee.prototype._getValue_direct, ee.prototype._getValue_array, ee.prototype._getValue_arrayElement, ee.prototype._getValue_toArray];
ee.prototype.SetterByBindingTypeAndVersioning = [[ee.prototype._setValue_direct, ee.prototype._setValue_direct_setNeedsUpdate, ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [ee.prototype._setValue_array, ee.prototype._setValue_array_setNeedsUpdate, ee.prototype._setValue_array_setMatrixWorldNeedsUpdate], [ee.prototype._setValue_arrayElement, ee.prototype._setValue_arrayElement_setNeedsUpdate, ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [ee.prototype._setValue_fromArray, ee.prototype._setValue_fromArray_setNeedsUpdate, ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
class zf {
  constructor(t, e, n = null, i = e.blendMode) {
    this._mixer = t, this._clip = e, this._localRoot = n, this.blendMode = i;
    const r = e.tracks, o = r.length, a = new Array(o), l = { endingStart: Pi, endingEnd: Pi };
    for (let c = 0; c !== o; ++c) {
      const h = r[c].createInterpolant(null);
      a[c] = h, h.settings = l;
    }
    this._interpolantSettings = l, this._interpolants = a, this._propertyBindings = new Array(o), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = uu, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = false, this.enabled = true, this.clampWhenFinished = false, this.zeroSlopeAtStart = true, this.zeroSlopeAtEnd = true;
  }
  play() {
    return this._mixer._activateAction(this), this;
  }
  stop() {
    return this._mixer._deactivateAction(this), this.reset();
  }
  reset() {
    return this.paused = false, this.enabled = true, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
  }
  isRunning() {
    return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this);
  }
  isScheduled() {
    return this._mixer._isActiveAction(this);
  }
  startAt(t) {
    return this._startTime = t, this;
  }
  setLoop(t, e) {
    return this.loop = t, this.repetitions = e, this;
  }
  setEffectiveWeight(t) {
    return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading();
  }
  getEffectiveWeight() {
    return this._effectiveWeight;
  }
  fadeIn(t) {
    return this._scheduleFading(t, 0, 1);
  }
  fadeOut(t) {
    return this._scheduleFading(t, 1, 0);
  }
  crossFadeFrom(t, e, n) {
    if (t.fadeOut(e), this.fadeIn(e), n) {
      const i = this._clip.duration, r = t._clip.duration, o = r / i, a = i / r;
      t.warp(1, o, e), this.warp(a, 1, e);
    }
    return this;
  }
  crossFadeTo(t, e, n) {
    return t.crossFadeFrom(this, e, n);
  }
  stopFading() {
    const t = this._weightInterpolant;
    return t !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this;
  }
  setEffectiveTimeScale(t) {
    return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping();
  }
  getEffectiveTimeScale() {
    return this._effectiveTimeScale;
  }
  setDuration(t) {
    return this.timeScale = this._clip.duration / t, this.stopWarping();
  }
  syncWith(t) {
    return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping();
  }
  halt(t) {
    return this.warp(this._effectiveTimeScale, 0, t);
  }
  warp(t, e, n) {
    const i = this._mixer, r = i.time, o = this.timeScale;
    let a = this._timeScaleInterpolant;
    a === null && (a = i._lendControlInterpolant(), this._timeScaleInterpolant = a);
    const l = a.parameterPositions, c = a.sampleValues;
    return l[0] = r, l[1] = r + n, c[0] = t / o, c[1] = e / o, this;
  }
  stopWarping() {
    const t = this._timeScaleInterpolant;
    return t !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this;
  }
  getMixer() {
    return this._mixer;
  }
  getClip() {
    return this._clip;
  }
  getRoot() {
    return this._localRoot || this._mixer._root;
  }
  _update(t, e, n, i) {
    if (!this.enabled) {
      this._updateWeight(t);
      return;
    }
    const r = this._startTime;
    if (r !== null) {
      const l = (t - r) * n;
      l < 0 || n === 0 ? e = 0 : (this._startTime = null, e = n * l);
    }
    e *= this._updateTimeScale(t);
    const o = this._updateTime(e), a = this._updateWeight(t);
    if (a > 0) {
      const l = this._interpolants, c = this._propertyBindings;
      switch (this.blendMode) {
        case fu:
          for (let h = 0, u = l.length; h !== u; ++h) l[h].evaluate(o), c[h].accumulateAdditive(a);
          break;
        case Sa:
        default:
          for (let h = 0, u = l.length; h !== u; ++h) l[h].evaluate(o), c[h].accumulate(i, a);
      }
    }
  }
  _updateWeight(t) {
    let e = 0;
    if (this.enabled) {
      e = this.weight;
      const n = this._weightInterpolant;
      if (n !== null) {
        const i = n.evaluate(t)[0];
        e *= i, t > n.parameterPositions[1] && (this.stopFading(), i === 0 && (this.enabled = false));
      }
    }
    return this._effectiveWeight = e, e;
  }
  _updateTimeScale(t) {
    let e = 0;
    if (!this.paused) {
      e = this.timeScale;
      const n = this._timeScaleInterpolant;
      if (n !== null) {
        const i = n.evaluate(t)[0];
        e *= i, t > n.parameterPositions[1] && (this.stopWarping(), e === 0 ? this.paused = true : this.timeScale = e);
      }
    }
    return this._effectiveTimeScale = e, e;
  }
  _updateTime(t) {
    const e = this._clip.duration, n = this.loop;
    let i = this.time + t, r = this._loopCount;
    const o = n === du;
    if (t === 0) return r === -1 ? i : o && (r & 1) === 1 ? e - i : i;
    if (n === hu) {
      r === -1 && (this._loopCount = 0, this._setEndings(true, true, false));
      t: {
        if (i >= e) i = e;
        else if (i < 0) i = 0;
        else {
          this.time = i;
          break t;
        }
        this.clampWhenFinished ? this.paused = true : this.enabled = false, this.time = i, this._mixer.dispatchEvent({ type: "finished", action: this, direction: t < 0 ? -1 : 1 });
      }
    } else {
      if (r === -1 && (t >= 0 ? (r = 0, this._setEndings(true, this.repetitions === 0, o)) : this._setEndings(this.repetitions === 0, true, o)), i >= e || i < 0) {
        const a = Math.floor(i / e);
        i -= e * a, r += Math.abs(a);
        const l = this.repetitions - r;
        if (l <= 0) this.clampWhenFinished ? this.paused = true : this.enabled = false, i = t > 0 ? e : 0, this.time = i, this._mixer.dispatchEvent({ type: "finished", action: this, direction: t > 0 ? 1 : -1 });
        else {
          if (l === 1) {
            const c = t < 0;
            this._setEndings(c, !c, o);
          } else this._setEndings(false, false, o);
          this._loopCount = r, this.time = i, this._mixer.dispatchEvent({ type: "loop", action: this, loopDelta: a });
        }
      } else this.time = i;
      if (o && (r & 1) === 1) return e - i;
    }
    return i;
  }
  _setEndings(t, e, n) {
    const i = this._interpolantSettings;
    n ? (i.endingStart = Li, i.endingEnd = Li) : (t ? i.endingStart = this.zeroSlopeAtStart ? Li : Pi : i.endingStart = xr, e ? i.endingEnd = this.zeroSlopeAtEnd ? Li : Pi : i.endingEnd = xr);
  }
  _scheduleFading(t, e, n) {
    const i = this._mixer, r = i.time;
    let o = this._weightInterpolant;
    o === null && (o = i._lendControlInterpolant(), this._weightInterpolant = o);
    const a = o.parameterPositions, l = o.sampleValues;
    return a[0] = r, l[0] = e, a[1] = r + t, l[1] = n, this;
  }
}
const Hf = new Float32Array(1);
class Ux extends Gn {
  constructor(t) {
    super(), this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
  }
  _bindAction(t, e) {
    const n = t._localRoot || this._root, i = t._clip.tracks, r = i.length, o = t._propertyBindings, a = t._interpolants, l = n.uuid, c = this._bindingsByRootAndName;
    let h = c[l];
    h === void 0 && (h = {}, c[l] = h);
    for (let u = 0; u !== r; ++u) {
      const d = i[u], f = d.name;
      let g = h[f];
      if (g !== void 0) ++g.referenceCount, o[u] = g;
      else {
        if (g = o[u], g !== void 0) {
          g._cacheIndex === null && (++g.referenceCount, this._addInactiveBinding(g, l, f));
          continue;
        }
        const _ = e && e._propertyBindings[u].binding.parsedPath;
        g = new Pf(ee.create(n, f, _), d.ValueTypeName, d.getValueSize()), ++g.referenceCount, this._addInactiveBinding(g, l, f), o[u] = g;
      }
      a[u].resultBuffer = g.buffer;
    }
  }
  _activateAction(t) {
    if (!this._isActiveAction(t)) {
      if (t._cacheIndex === null) {
        const n = (t._localRoot || this._root).uuid, i = t._clip.uuid, r = this._actionsByClip[i];
        this._bindAction(t, r && r.knownActions[0]), this._addInactiveAction(t, i, n);
      }
      const e = t._propertyBindings;
      for (let n = 0, i = e.length; n !== i; ++n) {
        const r = e[n];
        r.useCount++ === 0 && (this._lendBinding(r), r.saveOriginalState());
      }
      this._lendAction(t);
    }
  }
  _deactivateAction(t) {
    if (this._isActiveAction(t)) {
      const e = t._propertyBindings;
      for (let n = 0, i = e.length; n !== i; ++n) {
        const r = e[n];
        --r.useCount === 0 && (r.restoreOriginalState(), this._takeBackBinding(r));
      }
      this._takeBackAction(t);
    }
  }
  _initMemoryManager() {
    this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
    const t = this;
    this.stats = { actions: { get total() {
      return t._actions.length;
    }, get inUse() {
      return t._nActiveActions;
    } }, bindings: { get total() {
      return t._bindings.length;
    }, get inUse() {
      return t._nActiveBindings;
    } }, controlInterpolants: { get total() {
      return t._controlInterpolants.length;
    }, get inUse() {
      return t._nActiveControlInterpolants;
    } } };
  }
  _isActiveAction(t) {
    const e = t._cacheIndex;
    return e !== null && e < this._nActiveActions;
  }
  _addInactiveAction(t, e, n) {
    const i = this._actions, r = this._actionsByClip;
    let o = r[e];
    if (o === void 0) o = { knownActions: [t], actionByRoot: {} }, t._byClipCacheIndex = 0, r[e] = o;
    else {
      const a = o.knownActions;
      t._byClipCacheIndex = a.length, a.push(t);
    }
    t._cacheIndex = i.length, i.push(t), o.actionByRoot[n] = t;
  }
  _removeInactiveAction(t) {
    const e = this._actions, n = e[e.length - 1], i = t._cacheIndex;
    n._cacheIndex = i, e[i] = n, e.pop(), t._cacheIndex = null;
    const r = t._clip.uuid, o = this._actionsByClip, a = o[r], l = a.knownActions, c = l[l.length - 1], h = t._byClipCacheIndex;
    c._byClipCacheIndex = h, l[h] = c, l.pop(), t._byClipCacheIndex = null;
    const u = a.actionByRoot, d = (t._localRoot || this._root).uuid;
    delete u[d], l.length === 0 && delete o[r], this._removeInactiveBindingsForAction(t);
  }
  _removeInactiveBindingsForAction(t) {
    const e = t._propertyBindings;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const r = e[n];
      --r.referenceCount === 0 && this._removeInactiveBinding(r);
    }
  }
  _lendAction(t) {
    const e = this._actions, n = t._cacheIndex, i = this._nActiveActions++, r = e[i];
    t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r;
  }
  _takeBackAction(t) {
    const e = this._actions, n = t._cacheIndex, i = --this._nActiveActions, r = e[i];
    t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r;
  }
  _addInactiveBinding(t, e, n) {
    const i = this._bindingsByRootAndName, r = this._bindings;
    let o = i[e];
    o === void 0 && (o = {}, i[e] = o), o[n] = t, t._cacheIndex = r.length, r.push(t);
  }
  _removeInactiveBinding(t) {
    const e = this._bindings, n = t.binding, i = n.rootNode.uuid, r = n.path, o = this._bindingsByRootAndName, a = o[i], l = e[e.length - 1], c = t._cacheIndex;
    l._cacheIndex = c, e[c] = l, e.pop(), delete a[r], Object.keys(a).length === 0 && delete o[i];
  }
  _lendBinding(t) {
    const e = this._bindings, n = t._cacheIndex, i = this._nActiveBindings++, r = e[i];
    t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r;
  }
  _takeBackBinding(t) {
    const e = this._bindings, n = t._cacheIndex, i = --this._nActiveBindings, r = e[i];
    t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r;
  }
  _lendControlInterpolant() {
    const t = this._controlInterpolants, e = this._nActiveControlInterpolants++;
    let n = t[e];
    return n === void 0 && (n = new gh(new Float32Array(2), new Float32Array(2), 1, Hf), n.__cacheIndex = e, t[e] = n), n;
  }
  _takeBackControlInterpolant(t) {
    const e = this._controlInterpolants, n = t.__cacheIndex, i = --this._nActiveControlInterpolants, r = e[i];
    t.__cacheIndex = i, e[i] = t, r.__cacheIndex = n, e[n] = r;
  }
  clipAction(t, e, n) {
    const i = e || this._root, r = i.uuid;
    let o = typeof t == "string" ? la.findByName(i, t) : t;
    const a = o !== null ? o.uuid : t, l = this._actionsByClip[a];
    let c = null;
    if (n === void 0 && (o !== null ? n = o.blendMode : n = Sa), l !== void 0) {
      const u = l.actionByRoot[r];
      if (u !== void 0 && u.blendMode === n) return u;
      c = l.knownActions[0], o === null && (o = c._clip);
    }
    if (o === null) return null;
    const h = new zf(this, o, e, n);
    return this._bindAction(h, c), this._addInactiveAction(h, a, r), h;
  }
  existingAction(t, e) {
    const n = e || this._root, i = n.uuid, r = typeof t == "string" ? la.findByName(n, t) : t, o = r ? r.uuid : t, a = this._actionsByClip[o];
    return a !== void 0 && a.actionByRoot[i] || null;
  }
  stopAllAction() {
    const t = this._actions, e = this._nActiveActions;
    for (let n = e - 1; n >= 0; --n) t[n].stop();
    return this;
  }
  update(t) {
    t *= this.timeScale;
    const e = this._actions, n = this._nActiveActions, i = this.time += t, r = Math.sign(t), o = this._accuIndex ^= 1;
    for (let c = 0; c !== n; ++c) e[c]._update(i, t, r, o);
    const a = this._bindings, l = this._nActiveBindings;
    for (let c = 0; c !== l; ++c) a[c].apply(o);
    return this;
  }
  setTime(t) {
    this.time = 0;
    for (let e = 0; e < this._actions.length; e++) this._actions[e].time = 0;
    return this.update(t);
  }
  getRoot() {
    return this._root;
  }
  uncacheClip(t) {
    const e = this._actions, n = t.uuid, i = this._actionsByClip, r = i[n];
    if (r !== void 0) {
      const o = r.knownActions;
      for (let a = 0, l = o.length; a !== l; ++a) {
        const c = o[a];
        this._deactivateAction(c);
        const h = c._cacheIndex, u = e[e.length - 1];
        c._cacheIndex = null, c._byClipCacheIndex = null, u._cacheIndex = h, e[h] = u, e.pop(), this._removeInactiveBindingsForAction(c);
      }
      delete i[n];
    }
  }
  uncacheRoot(t) {
    const e = t.uuid, n = this._actionsByClip;
    for (const o in n) {
      const a = n[o].actionByRoot, l = a[e];
      l !== void 0 && (this._deactivateAction(l), this._removeInactiveAction(l));
    }
    const i = this._bindingsByRootAndName, r = i[e];
    if (r !== void 0) for (const o in r) {
      const a = r[o];
      a.restoreOriginalState(), this._removeInactiveBinding(a);
    }
  }
  uncacheAction(t, e) {
    const n = this.existingAction(t, e);
    n !== null && (this._deactivateAction(n), this._removeInactiveAction(n));
  }
}
const Wl = new Ot();
class Fx {
  constructor(t, e, n = 0, i = 1 / 0) {
    this.ray = new Ki(t, e), this.near = n, this.far = i, this.camera = null, this.layers = new ba(), this.params = { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} };
  }
  set(t, e) {
    this.ray.set(t, e);
  }
  setFromCamera(t, e) {
    e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, 0.5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type: " + e.type);
  }
  setFromXRController(t) {
    return Wl.identity().extractRotation(t.matrixWorld), this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(Wl), this;
  }
  intersectObject(t, e = true, n = []) {
    return ca(t, this, n, e), n.sort(Xl), n;
  }
  intersectObjects(t, e = true, n = []) {
    for (let i = 0, r = t.length; i < r; i++) ca(t[i], this, n, e);
    return n.sort(Xl), n;
  }
}
function Xl(s, t) {
  return s.distance - t.distance;
}
function ca(s, t, e, n) {
  let i = true;
  if (s.layers.test(t.layers) && s.raycast(t, e) === false && (i = false), i === true && n === true) {
    const r = s.children;
    for (let o = 0, a = r.length; o < a; o++) ca(r[o], t, e, true);
  }
}
class Yl {
  constructor(t = 1, e = 0, n = 0) {
    return this.radius = t, this.phi = e, this.theta = n, this;
  }
  set(t, e, n) {
    return this.radius = t, this.phi = e, this.theta = n, this;
  }
  copy(t) {
    return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this;
  }
  makeSafe() {
    return this.phi = Ht(this.phi, 1e-6, Math.PI - 1e-6), this;
  }
  setFromVector3(t) {
    return this.setFromCartesianCoords(t.x, t.y, t.z);
  }
  setFromCartesianCoords(t, e, n) {
    return this.radius = Math.sqrt(t * t + e * e + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(Ht(e / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Vf extends Gn {
  constructor(t, e = null) {
    super(), this.object = t, this.domElement = e, this.enabled = true, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
  }
  connect() {
  }
  disconnect() {
  }
  dispose() {
  }
  update() {
  }
}
function ql(s, t, e, n) {
  const i = Gf(n);
  switch (e) {
    case Ic:
      return s * t;
    case Nc:
      return s * t;
    case Uc:
      return s * t * 2;
    case va:
      return s * t / i.components * i.byteLength;
    case xa:
      return s * t / i.components * i.byteLength;
    case Fc:
      return s * t * 2 / i.components * i.byteLength;
    case ya:
      return s * t * 2 / i.components * i.byteLength;
    case Dc:
      return s * t * 3 / i.components * i.byteLength;
    case qe:
      return s * t * 4 / i.components * i.byteLength;
    case Ma:
      return s * t * 4 / i.components * i.byteLength;
    case ur:
    case dr:
      return Math.floor((s + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case fr:
    case pr:
      return Math.floor((s + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Po:
    case Io:
      return Math.max(s, 16) * Math.max(t, 8) / 4;
    case Co:
    case Lo:
      return Math.max(s, 8) * Math.max(t, 8) / 2;
    case Do:
    case No:
      return Math.floor((s + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Uo:
      return Math.floor((s + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Fo:
      return Math.floor((s + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Oo:
      return Math.floor((s + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case Bo:
      return Math.floor((s + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case ko:
      return Math.floor((s + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case zo:
      return Math.floor((s + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case Ho:
      return Math.floor((s + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case Vo:
      return Math.floor((s + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case Go:
      return Math.floor((s + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case Wo:
      return Math.floor((s + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case Xo:
      return Math.floor((s + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case Yo:
      return Math.floor((s + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case qo:
      return Math.floor((s + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case jo:
      return Math.floor((s + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case $o:
      return Math.floor((s + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    case mr:
    case Ko:
    case Zo:
      return Math.ceil(s / 4) * Math.ceil(t / 4) * 16;
    case Oc:
    case Jo:
      return Math.ceil(s / 4) * Math.ceil(t / 4) * 8;
    case Qo:
    case ta:
      return Math.ceil(s / 4) * Math.ceil(t / 4) * 16;
  }
  throw new Error("Unable to determine texture byte length for ".concat(e, " format."));
}
function Gf(s) {
  switch (s) {
    case Tn:
    case Cc:
      return { byteLength: 1, components: 1 };
    case xs:
    case Pc:
    case ws:
      return { byteLength: 2, components: 1 };
    case ga:
    case _a:
      return { byteLength: 2, components: 4 };
    case li:
    case ma:
    case nn:
      return { byteLength: 4, components: 1 };
    case Lc:
      return { byteLength: 4, components: 3 };
  }
  throw new Error("Unknown texture type ".concat(s, "."));
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "171" } }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "171");
/**
* @license
* Copyright 2010-2024 Three.js Authors
* SPDX-License-Identifier: MIT
*/
function xh() {
  let s = null, t = false, e = null, n = null;
  function i(r, o) {
    e(r, o), n = s.requestAnimationFrame(i);
  }
  return { start: function() {
    t !== true && e !== null && (n = s.requestAnimationFrame(i), t = true);
  }, stop: function() {
    s.cancelAnimationFrame(n), t = false;
  }, setAnimationLoop: function(r) {
    e = r;
  }, setContext: function(r) {
    s = r;
  } };
}
function Wf(s) {
  const t = /* @__PURE__ */ new WeakMap();
  function e(a, l) {
    const c = a.array, h = a.usage, u = c.byteLength, d = s.createBuffer();
    s.bindBuffer(l, d), s.bufferData(l, c, h), a.onUploadCallback();
    let f;
    if (c instanceof Float32Array) f = s.FLOAT;
    else if (c instanceof Uint16Array) a.isFloat16BufferAttribute ? f = s.HALF_FLOAT : f = s.UNSIGNED_SHORT;
    else if (c instanceof Int16Array) f = s.SHORT;
    else if (c instanceof Uint32Array) f = s.UNSIGNED_INT;
    else if (c instanceof Int32Array) f = s.INT;
    else if (c instanceof Int8Array) f = s.BYTE;
    else if (c instanceof Uint8Array) f = s.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray) f = s.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return { buffer: d, type: f, bytesPerElement: c.BYTES_PER_ELEMENT, version: a.version, size: u };
  }
  function n(a, l, c) {
    const h = l.array, u = l.updateRanges;
    if (s.bindBuffer(c, a), u.length === 0) s.bufferSubData(c, 0, h);
    else {
      u.sort((f, g) => f.start - g.start);
      let d = 0;
      for (let f = 1; f < u.length; f++) {
        const g = u[d], _ = u[f];
        _.start <= g.start + g.count + 1 ? g.count = Math.max(g.count, _.start + _.count - g.start) : (++d, u[d] = _);
      }
      u.length = d + 1;
      for (let f = 0, g = u.length; f < g; f++) {
        const _ = u[f];
        s.bufferSubData(c, _.start * h.BYTES_PER_ELEMENT, h, _.start, _.count);
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function i(a) {
    return a.isInterleavedBufferAttribute && (a = a.data), t.get(a);
  }
  function r(a) {
    a.isInterleavedBufferAttribute && (a = a.data);
    const l = t.get(a);
    l && (s.deleteBuffer(l.buffer), t.delete(a));
  }
  function o(a, l) {
    if (a.isInterleavedBufferAttribute && (a = a.data), a.isGLBufferAttribute) {
      const h = t.get(a);
      (!h || h.version < a.version) && t.set(a, { buffer: a.buffer, type: a.type, bytesPerElement: a.elementSize, version: a.version });
      return;
    }
    const c = t.get(a);
    if (c === void 0) t.set(a, e(a, l));
    else if (c.version < a.version) {
      if (c.size !== a.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(c.buffer, a, l), c.version = a.version;
    }
  }
  return { get: i, remove: r, update: o };
}
var Xf = "#ifdef USE_ALPHAHASH\n	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif", Yf = "#ifdef USE_ALPHAHASH\n	const float ALPHA_HASH_SCALE = 0.05;\n	float hash2D( vec2 value ) {\n		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n	}\n	float hash3D( vec3 value ) {\n		return hash2D( vec2( hash2D( value.xy ), value.z ) );\n	}\n	float getAlphaHashThreshold( vec3 position ) {\n		float maxDeriv = max(\n			length( dFdx( position.xyz ) ),\n			length( dFdy( position.xyz ) )\n		);\n		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n		vec2 pixScales = vec2(\n			exp2( floor( log2( pixScale ) ) ),\n			exp2( ceil( log2( pixScale ) ) )\n		);\n		vec2 alpha = vec2(\n			hash3D( floor( pixScales.x * position.xyz ) ),\n			hash3D( floor( pixScales.y * position.xyz ) )\n		);\n		float lerpFactor = fract( log2( pixScale ) );\n		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n		float a = min( lerpFactor, 1.0 - lerpFactor );\n		vec3 cases = vec3(\n			x * x / ( 2.0 * a * ( 1.0 - a ) ),\n			( x - 0.5 * a ) / ( 1.0 - a ),\n			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n		);\n		float threshold = ( x < ( 1.0 - a ) )\n			? ( ( x < a ) ? cases.x : cases.y )\n			: cases.z;\n		return clamp( threshold , 1.0e-6, 1.0 );\n	}\n#endif", qf = "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif", jf = "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif", $f = "#ifdef USE_ALPHATEST\n	#ifdef ALPHA_TO_COVERAGE\n	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n	if ( diffuseColor.a == 0.0 ) discard;\n	#else\n	if ( diffuseColor.a < alphaTest ) discard;\n	#endif\n#endif", Kf = "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif", Zf = "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_CLEARCOAT ) \n		clearcoatSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_SHEEN ) \n		sheenSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif", Jf = "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif", Qf = "#ifdef USE_BATCHING\n	#if ! defined( GL_ANGLE_multi_draw )\n	#define gl_DrawID _gl_DrawID\n	uniform int _gl_DrawID;\n	#endif\n	uniform highp sampler2D batchingTexture;\n	uniform highp usampler2D batchingIdTexture;\n	mat4 getBatchingMatrix( const in float i ) {\n		int size = textureSize( batchingTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n	float getIndirectIndex( const in int i ) {\n		int size = textureSize( batchingIdTexture, 0 ).x;\n		int x = i % size;\n		int y = i / size;\n		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );\n	}\n#endif\n#ifdef USE_BATCHING_COLOR\n	uniform sampler2D batchingColorTexture;\n	vec3 getBatchingColor( const in float i ) {\n		int size = textureSize( batchingColorTexture, 0 ).x;\n		int j = int( i );\n		int x = j % size;\n		int y = j / size;\n		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;\n	}\n#endif", tp = "#ifdef USE_BATCHING\n	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );\n#endif", ep = "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n	vPosition = vec3( position );\n#endif", np = "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif", ip = "float G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n} // validated", sp = "#ifdef USE_IRIDESCENCE\n	const mat3 XYZ_TO_REC709 = mat3(\n		 3.2404542, -0.9692660,  0.0556434,\n		-1.5371385,  1.8760108, -0.2040259,\n		-0.4985314,  0.0415560,  1.0572252\n	);\n	vec3 Fresnel0ToIor( vec3 fresnel0 ) {\n		vec3 sqrtF0 = sqrt( fresnel0 );\n		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n	}\n	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n	}\n	float IorToFresnel0( float transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n	}\n	vec3 evalSensitivity( float OPD, vec3 shift ) {\n		float phase = 2.0 * PI * OPD * 1.0e-9;\n		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n		xyz /= 1.0685e-7;\n		vec3 rgb = XYZ_TO_REC709 * xyz;\n		return rgb;\n	}\n	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n		vec3 I;\n		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n		float cosTheta2Sq = 1.0 - sinTheta2Sq;\n		if ( cosTheta2Sq < 0.0 ) {\n			return vec3( 1.0 );\n		}\n		float cosTheta2 = sqrt( cosTheta2Sq );\n		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n		float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n		float T121 = 1.0 - R12;\n		float phi12 = 0.0;\n		if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n		float phi21 = PI - phi12;\n		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n		vec3 phi23 = vec3( 0.0 );\n		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n		vec3 phi = vec3( phi21 ) + phi23;\n		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n		vec3 r123 = sqrt( R123 );\n		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n		vec3 C0 = R12 + Rs;\n		I = C0;\n		vec3 Cm = Rs - T121;\n		for ( int m = 1; m <= 2; ++ m ) {\n			Cm *= r123;\n			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n			I += Cm * Sm;\n		}\n		return max( I, vec3( 0.0 ) );\n	}\n#endif", rp = "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vBumpMapUv );\n		vec2 dSTdy = dFdy( vBumpMapUv );\n		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif", op = "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#ifdef ALPHA_TO_COVERAGE\n		float distanceToPlane, distanceGradient;\n		float clipOpacity = 1.0;\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n			distanceGradient = fwidth( distanceToPlane ) / 2.0;\n			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			if ( clipOpacity == 0.0 ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			float unionClipOpacity = 1.0;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n				distanceGradient = fwidth( distanceToPlane ) / 2.0;\n				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			}\n			#pragma unroll_loop_end\n			clipOpacity *= 1.0 - unionClipOpacity;\n		#endif\n		diffuseColor.a *= clipOpacity;\n		if ( diffuseColor.a == 0.0 ) discard;\n	#else\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			bool clipped = true;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n			}\n			#pragma unroll_loop_end\n			if ( clipped ) discard;\n		#endif\n	#endif\n#endif", ap = "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif", lp = "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif", cp = "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif", hp = "#if defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#elif defined( USE_COLOR )\n	diffuseColor.rgb *= vColor;\n#endif", up = "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR )\n	varying vec3 vColor;\n#endif", dp = "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	varying vec3 vColor;\n#endif", fp = "#if defined( USE_COLOR_ALPHA )\n	vColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	vColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n	vColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.xyz *= instanceColor.xyz;\n#endif\n#ifdef USE_BATCHING_COLOR\n	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );\n	vColor.xyz *= batchingColor.xyz;\n#endif", pp = "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n	varying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n	mat3 tmp;\n	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n	return tmp;\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated", mp = "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define cubeUV_r0 1.0\n	#define cubeUV_m0 - 2.0\n	#define cubeUV_r1 0.8\n	#define cubeUV_m1 - 1.0\n	#define cubeUV_r4 0.4\n	#define cubeUV_m4 2.0\n	#define cubeUV_r5 0.305\n	#define cubeUV_m5 3.0\n	#define cubeUV_r6 0.21\n	#define cubeUV_m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= cubeUV_r1 ) {\n			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n		} else if ( roughness >= cubeUV_r4 ) {\n			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n		} else if ( roughness >= cubeUV_r5 ) {\n			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n		} else if ( roughness >= cubeUV_r6 ) {\n			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif", gp = "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n	vec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n	mat3 bm = mat3( batchingMatrix );\n	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n	transformedNormal = bm * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = bm * transformedTangent;\n	#endif\n#endif\n#ifdef USE_INSTANCING\n	mat3 im = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n	transformedNormal = im * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = im * transformedTangent;\n	#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n	#ifdef FLIP_SIDED\n		transformedTangent = - transformedTangent;\n	#endif\n#endif", _p = "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif", vp = "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif", xp = "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE\n		emissiveColor = sRGBTransferEOTF( emissiveColor );\n	#endif\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif", yp = "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif", Mp = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Sp = "vec4 LinearTransferOETF( in vec4 value ) {\n	return value;\n}\nvec4 sRGBTransferEOTF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}", Ep = "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#else\n		vec4 envColor = vec4( 0.0 );\n	#endif\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif", Ap = "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform float flipEnvMap;\n	uniform mat3 envMapRotation;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	\n#endif", bp = "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif", Tp = "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif", wp = "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif", Rp = "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif", Cp = "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif", Pp = "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif", Lp = "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif", Ip = "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		vec2 fw = fwidth( coord ) * 0.5;\n		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n	#endif\n}", Dp = "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif", Np = "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;", Up = "varying vec3 vViewPosition;\nstruct LambertMaterial {\n	vec3 diffuseColor;\n	float specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Lambert\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert", Fp = "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n	uniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n	if ( cutoffDistance > 0.0 ) {\n		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n	}\n	return distanceFalloff;\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif", Op = "#ifdef USE_ENVMAP\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	#ifdef USE_ANISOTROPY\n		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n			#ifdef ENVMAP_TYPE_CUBE_UV\n				vec3 bentNormal = cross( bitangent, viewDir );\n				bentNormal = normalize( cross( bentNormal, bitangent ) );\n				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n				return getIBLRadiance( viewDir, bentNormal, roughness );\n			#else\n				return vec3( 0.0 );\n			#endif\n		}\n	#endif\n#endif", Bp = "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;", kp = "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon", zp = "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;", Hp = "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong", Vp = "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	material.ior = ior;\n	#ifdef USE_SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULAR_COLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n		#endif\n		#ifdef USE_SPECULAR_INTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_DISPERSION\n	material.dispersion = dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n	#ifdef USE_IRIDESCENCEMAP\n		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n	#endif\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n	#else\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n	#endif\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEEN_COLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	#ifdef USE_ANISOTROPYMAP\n		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n	#else\n		vec2 anisotropyV = anisotropyVector;\n	#endif\n	material.anisotropy = length( anisotropyV );\n	if( material.anisotropy == 0.0 ) {\n		anisotropyV = vec2( 1.0, 0.0 );\n	} else {\n		anisotropyV /= material.anisotropy;\n		material.anisotropy = saturate( material.anisotropy );\n	}\n	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif", Gp = "struct PhysicalMaterial {\n	vec3 diffuseColor;\n	float roughness;\n	vec3 specularColor;\n	float specularF90;\n	float dispersion;\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_IRIDESCENCE\n		float iridescence;\n		float iridescenceIOR;\n		float iridescenceThickness;\n		vec3 iridescenceFresnel;\n		vec3 iridescenceF0;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n	#ifdef IOR\n		float ior;\n	#endif\n	#ifdef USE_TRANSMISSION\n		float transmission;\n		float transmissionAlpha;\n		float thickness;\n		float attenuationDistance;\n		vec3 attenuationColor;\n	#endif\n	#ifdef USE_ANISOTROPY\n		float anisotropy;\n		float alphaT;\n		vec3 anisotropyT;\n		vec3 anisotropyB;\n	#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n		float v = 0.5 / ( gv + gl );\n		return saturate(v);\n	}\n	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n		float a2 = alphaT * alphaB;\n		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n		highp float v2 = dot( v, v );\n		float w2 = a2 / v2;\n		return RECIPROCAL_PI * a2 * pow2 ( w2 );\n	}\n#endif\n#ifdef USE_CLEARCOAT\n	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n		vec3 f0 = material.clearcoatF0;\n		float f90 = material.clearcoatF90;\n		float roughness = material.clearcoatRoughness;\n		float alpha = pow2( roughness );\n		vec3 halfDir = normalize( lightDir + viewDir );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float dotNH = saturate( dot( normal, halfDir ) );\n		float dotVH = saturate( dot( viewDir, halfDir ) );\n		vec3 F = F_Schlick( f0, f90, dotVH );\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n		return F * ( V * D );\n	}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 f0 = material.specularColor;\n	float f90 = material.specularF90;\n	float roughness = material.roughness;\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	#ifdef USE_IRIDESCENCE\n		F = mix( F, material.iridescenceFresnel, material.iridescence );\n	#endif\n	#ifdef USE_ANISOTROPY\n		float dotTL = dot( material.anisotropyT, lightDir );\n		float dotTV = dot( material.anisotropyT, viewDir );\n		float dotTH = dot( material.anisotropyT, halfDir );\n		float dotBL = dot( material.anisotropyB, lightDir );\n		float dotBV = dot( material.anisotropyB, viewDir );\n		float dotBH = dot( material.anisotropyB, halfDir );\n		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n	#else\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n	#endif\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n	return saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n	return fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	return specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	#ifdef USE_IRIDESCENCE\n		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n	#else\n		vec3 Fr = specularColor;\n	#endif\n	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometryNormal;\n		vec3 viewDir = geometryViewDir;\n		vec3 position = geometryPosition;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n	#endif\n	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n	#endif\n	vec3 singleScattering = vec3( 0.0 );\n	vec3 multiScattering = vec3( 0.0 );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n	#else\n		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n	#endif\n	vec3 totalScattering = singleScattering + multiScattering;\n	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n	reflectedLight.indirectSpecular += radiance * singleScattering;\n	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}", Wp = "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n	geometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n	float dotNVi = saturate( dot( normal, geometryViewDir ) );\n	if ( material.iridescenceThickness == 0.0 ) {\n		material.iridescence = 0.0;\n	} else {\n		material.iridescence = saturate( material.iridescence );\n	}\n	if ( material.iridescence > 0.0 ) {\n		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n	}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometryPosition, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	vec4 spotColor;\n	vec3 spotLightCoord;\n	bool inSpotLightMap;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometryPosition, directLight );\n		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n		#else\n		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#endif\n		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n		#endif\n		#undef SPOT_LIGHT_MAP_INDEX\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	#if defined( USE_LIGHT_PROBES )\n		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n	#endif\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif", Xp = "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n		iblIrradiance += getIBLIrradiance( geometryNormal );\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	#ifdef USE_ANISOTROPY\n		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n	#else\n		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n	#endif\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif", Yp = "#if defined( RE_IndirectDiffuse )\n	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif", qp = "#if defined( USE_LOGDEPTHBUF )\n	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif", jp = "#if defined( USE_LOGDEPTHBUF )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif", $p = "#ifdef USE_LOGDEPTHBUF\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif", Kp = "#ifdef USE_LOGDEPTHBUF\n	vFragDepth = 1.0 + gl_Position.w;\n	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n#endif", Zp = "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif", Jp = "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif", Qp = "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	#if defined( USE_POINTS_UV )\n		vec2 uv = vUv;\n	#else\n		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n	#endif\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif", tm = "#if defined( USE_POINTS_UV )\n	varying vec2 vUv;\n#else\n	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n		uniform mat3 uvTransform;\n	#endif\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif", em = "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n	metalnessFactor *= texelMetalness.b;\n#endif", nm = "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif", im = "#ifdef USE_INSTANCING_MORPH\n	float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n	}\n#endif", sm = "#if defined( USE_MORPHCOLORS )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif", rm = "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif", om = "#ifdef USE_MORPHTARGETS\n	#ifndef USE_INSTANCING_MORPH\n		uniform float morphTargetBaseInfluence;\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	#endif\n	uniform sampler2DArray morphTargetsTexture;\n	uniform ivec2 morphTargetsTextureSize;\n	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n		int y = texelIndex / morphTargetsTextureSize.x;\n		int x = texelIndex - y * morphTargetsTextureSize.x;\n		ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n		return texelFetch( morphTargetsTexture, morphUV, 0 );\n	}\n#endif", am = "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif", lm = "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal *= faceDirection;\n	#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n	#ifdef USE_TANGENT\n		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn = getTangentFrame( - vViewPosition, normal,\n		#if defined( USE_NORMALMAP )\n			vNormalMapUv\n		#elif defined( USE_CLEARCOAT_NORMALMAP )\n			vClearcoatNormalMapUv\n		#else\n			vUv\n		#endif\n		);\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn[0] *= faceDirection;\n		tbn[1] *= faceDirection;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	#ifdef USE_TANGENT\n		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn2[0] *= faceDirection;\n		tbn2[1] *= faceDirection;\n	#endif\n#endif\nvec3 nonPerturbedNormal = normal;", cm = "#ifdef USE_NORMALMAP_OBJECTSPACE\n	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	mapN.xy *= normalScale;\n	normal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif", hm = "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif", um = "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif", dm = "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif", fm = "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( uv.st );\n		vec2 st1 = dFdy( uv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n		return mat3( T * scale, B * scale, N );\n	}\n#endif", pm = "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = nonPerturbedNormal;\n#endif", mm = "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	clearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif", gm = "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif", _m = "#ifdef USE_IRIDESCENCEMAP\n	uniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform sampler2D iridescenceThicknessMap;\n#endif", vm = "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );", xm = "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;\nconst float Inv255 = 1. / 255.;\nconst vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );\nconst vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );\nconst vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );\nconst vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );\nvec4 packDepthToRGBA( const in float v ) {\n	if( v <= 0.0 )\n		return vec4( 0., 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec4( 1., 1., 1., 1. );\n	float vuf;\n	float af = modf( v * PackFactors.a, vuf );\n	float bf = modf( vuf * ShiftRight8, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );\n}\nvec3 packDepthToRGB( const in float v ) {\n	if( v <= 0.0 )\n		return vec3( 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec3( 1., 1., 1. );\n	float vuf;\n	float bf = modf( v * PackFactors.b, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec3( vuf * Inv255, gf * PackUpscale, bf );\n}\nvec2 packDepthToRG( const in float v ) {\n	if( v <= 0.0 )\n		return vec2( 0., 0. );\n	if( v >= 1.0 )\n		return vec2( 1., 1. );\n	float vuf;\n	float gf = modf( v * 256., vuf );\n	return vec2( vuf * Inv255, gf );\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors4 );\n}\nfloat unpackRGBToDepth( const in vec3 v ) {\n	return dot( v, UnpackFactors3 );\n}\nfloat unpackRGToDepth( const in vec2 v ) {\n	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;\n}\nvec4 pack2HalfToRGBA( const in vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( const in vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	return depth * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	return ( near * far ) / ( ( far - near ) * depth - far );\n}", ym = "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif", Mm = "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n	mvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;", Sm = "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif", Em = "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif", Am = "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n	roughnessFactor *= texelRoughness.g;\n#endif", bm = "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif", Tm = "#if NUM_SPOT_LIGHT_COORDS > 0\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n	}\n	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n		return unpackRGBATo2Half( texture2D( shadow, uv ) );\n	}\n	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n		float occlusion = 1.0;\n		vec2 distribution = texture2DDistribution( shadow, uv );\n		float hard_shadow = step( compare , distribution.x );\n		if (hard_shadow != 1.0 ) {\n			float distance = compare - distribution.x ;\n			float variance = max( 0.00000, distribution.y * distribution.y );\n			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n		}\n		return occlusion;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		float shadow = 1.0;\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			float dx2 = dx0 / 2.0;\n			float dy2 = dy0 / 2.0;\n			float dx3 = dx1 / 2.0;\n			float dy3 = dy1 / 2.0;\n			shadow = (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 17.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx = texelSize.x;\n			float dy = texelSize.y;\n			vec2 uv = shadowCoord.xy;\n			vec2 f = fract( uv * shadowMapSize + 0.5 );\n			uv -= f * texelSize;\n			shadow = (\n				texture2DCompare( shadowMap, uv, shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n						  f.x ),\n					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n						  f.x ),\n					 f.y )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_VSM )\n			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#else\n			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		\n		float lightToPositionLength = length( lightToPosition );\n		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {\n			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;\n			vec3 bd3D = normalize( lightToPosition );\n			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n				shadow = (\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n				) * ( 1.0 / 9.0 );\n			#else\n				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n			#endif\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n#endif", wm = "#if NUM_SPOT_LIGHT_COORDS > 0\n	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif", Rm = "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n	vec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n		shadowWorldPosition = worldPosition;\n		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n		#endif\n		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n#endif", Cm = "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}", Pm = "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif", Lm = "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	mat4 getBoneMatrix( const in float i ) {\n		int size = textureSize( boneTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n#endif", Im = "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif", Dm = "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif", Nm = "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif", Um = "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif", Fm = "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif", Om = "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 CineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n	vec3( 1.6605, - 0.1246, - 0.0182 ),\n	vec3( - 0.5876, 1.1329, - 0.1006 ),\n	vec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n	vec3( 0.6274, 0.0691, 0.0164 ),\n	vec3( 0.3293, 0.9195, 0.0880 ),\n	vec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n	vec3 x2 = x * x;\n	vec3 x4 = x2 * x2;\n	return + 15.5 * x4 * x2\n		- 40.14 * x4 * x\n		+ 31.96 * x4\n		- 6.868 * x2 * x\n		+ 0.4298 * x2\n		+ 0.1191 * x\n		- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n	const mat3 AgXInsetMatrix = mat3(\n		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n	);\n	const mat3 AgXOutsetMatrix = mat3(\n		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n	);\n	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;\n	color *= toneMappingExposure;\n	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n	color = AgXInsetMatrix * color;\n	color = max( color, 1e-10 );	color = log2( color );\n	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n	color = clamp( color, 0.0, 1.0 );\n	color = agxDefaultContrastApprox( color );\n	color = AgXOutsetMatrix * color;\n	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n	color = clamp( color, 0.0, 1.0 );\n	return color;\n}\nvec3 NeutralToneMapping( vec3 color ) {\n	const float StartCompression = 0.8 - 0.04;\n	const float Desaturation = 0.15;\n	color *= toneMappingExposure;\n	float x = min( color.r, min( color.g, color.b ) );\n	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n	color -= offset;\n	float peak = max( color.r, max( color.g, color.b ) );\n	if ( peak < StartCompression ) return color;\n	float d = 1. - StartCompression;\n	float newPeak = 1. - d * d / ( peak + d - StartCompression );\n	color *= newPeak / peak;\n	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );\n	return mix( color, vec3( newPeak ), g );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }", Bm = "#ifdef USE_TRANSMISSION\n	material.transmission = transmission;\n	material.transmissionAlpha = 1.0;\n	material.thickness = thickness;\n	material.attenuationDistance = attenuationDistance;\n	material.attenuationColor = attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = inverseTransformDirection( normal, viewMatrix );\n	vec4 transmitted = getIBLVolumeRefraction(\n		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,\n		material.attenuationColor, material.attenuationDistance );\n	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif", km = "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	float w0( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n	}\n	float w1( float a ) {\n		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n	}\n	float w2( float a ){\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n	}\n	float w3( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * a * a );\n	}\n	float g0( float a ) {\n		return w0( a ) + w1( a );\n	}\n	float g1( float a ) {\n		return w2( a ) + w3( a );\n	}\n	float h0( float a ) {\n		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n	}\n	float h1( float a ) {\n		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n	}\n	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n		uv = uv * texelSize.zw + 0.5;\n		vec2 iuv = floor( uv );\n		vec2 fuv = fract( uv );\n		float g0x = g0( fuv.x );\n		float g1x = g1( fuv.x );\n		float h0x = h0( fuv.x );\n		float h1x = h1( fuv.x );\n		float h0y = h0( fuv.y );\n		float h1y = h1( fuv.y );\n		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n	}\n	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n		vec2 fLodSizeInv = 1.0 / fLodSize;\n		vec2 cLodSizeInv = 1.0 / cLodSize;\n		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n		return mix( fSample, cSample, fract( lod ) );\n	}\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n	}\n	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( isinf( attenuationDistance ) ) {\n			return vec3( 1.0 );\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec4 transmittedLight;\n		vec3 transmittance;\n		#ifdef USE_DISPERSION\n			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;\n			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );\n			for ( int i = 0; i < 3; i ++ ) {\n				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );\n				vec3 refractedRayExit = position + transmissionRay;\n		\n				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n				vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n				refractionCoords += 1.0;\n				refractionCoords /= 2.0;\n		\n				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );\n				transmittedLight[ i ] = transmissionSample[ i ];\n				transmittedLight.a += transmissionSample.a;\n				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];\n			}\n			transmittedLight.a /= 3.0;\n		\n		#else\n		\n			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n			vec3 refractedRayExit = position + transmissionRay;\n			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n			vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n			refractionCoords += 1.0;\n			refractionCoords /= 2.0;\n			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n		\n		#endif\n		vec3 attenuatedColor = transmittance * transmittedLight.rgb;\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n	}\n#endif", zm = "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif", Hm = "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	uniform mat3 mapTransform;\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform mat3 alphaMapTransform;\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	uniform mat3 lightMapTransform;\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	uniform mat3 aoMapTransform;\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	uniform mat3 bumpMapTransform;\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	uniform mat3 normalMapTransform;\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	uniform mat3 displacementMapTransform;\n	varying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	uniform mat3 emissiveMapTransform;\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	uniform mat3 metalnessMapTransform;\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	uniform mat3 roughnessMapTransform;\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	uniform mat3 anisotropyMapTransform;\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	uniform mat3 clearcoatMapTransform;\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform mat3 clearcoatNormalMapTransform;\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform mat3 clearcoatRoughnessMapTransform;\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	uniform mat3 sheenColorMapTransform;\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	uniform mat3 sheenRoughnessMapTransform;\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	uniform mat3 iridescenceMapTransform;\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform mat3 iridescenceThicknessMapTransform;\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	uniform mat3 specularMapTransform;\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	uniform mat3 specularColorMapTransform;\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	uniform mat3 specularIntensityMapTransform;\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif", Vm = "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	vUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif", Gm = "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_BATCHING\n		worldPosition = batchingMatrix * worldPosition;\n	#endif\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif";
const Wm = "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}", Xm = "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", Ym = "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}", qm = "#ifdef ENVMAP_TYPE_CUBE\n	uniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n	uniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );\n	#else\n		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", jm = "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}", $m = "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n	gl_FragColor = texColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", Km = "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}", Zm = "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <logdepthbuf_fragment>\n	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#elif DEPTH_PACKING == 3202\n		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );\n	#elif DEPTH_PACKING == 3203\n		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );\n	#endif\n}", Jm = "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}", Qm = "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = packDepthToRGBA( dist );\n}", tg = "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}", eg = "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", ng = "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}", ig = "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}", sg = "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}", rg = "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", og = "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", ag = "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_lambert_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", lg = "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}", cg = "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", hg = "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}", ug = "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}", dg = "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", fg = "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", pg = "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}", mg = "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef USE_SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULAR_COLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n	#ifdef USE_SPECULAR_INTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_DISPERSION\n	uniform float dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	uniform float iridescence;\n	uniform float iridescenceIOR;\n	uniform float iridescenceThicknessMinimum;\n	uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEEN_COLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	uniform vec2 anisotropyVector;\n	#ifdef USE_ANISOTROPYMAP\n		uniform sampler2D anisotropyMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;\n	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n	#endif\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", gg = "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", _g = "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", vg = "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n	varying vec2 vUv;\n	uniform mat3 uvTransform;\n#endif\nvoid main() {\n	#ifdef USE_POINTS_UV\n		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	#endif\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}", xg = "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}", yg = "#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", Mg = "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	#include <logdepthbuf_fragment>\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}", Sg = "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix[ 3 ];\n	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}", Eg = "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}", Gt = { alphahash_fragment: Xf, alphahash_pars_fragment: Yf, alphamap_fragment: qf, alphamap_pars_fragment: jf, alphatest_fragment: $f, alphatest_pars_fragment: Kf, aomap_fragment: Zf, aomap_pars_fragment: Jf, batching_pars_vertex: Qf, batching_vertex: tp, begin_vertex: ep, beginnormal_vertex: np, bsdfs: ip, iridescence_fragment: sp, bumpmap_pars_fragment: rp, clipping_planes_fragment: op, clipping_planes_pars_fragment: ap, clipping_planes_pars_vertex: lp, clipping_planes_vertex: cp, color_fragment: hp, color_pars_fragment: up, color_pars_vertex: dp, color_vertex: fp, common: pp, cube_uv_reflection_fragment: mp, defaultnormal_vertex: gp, displacementmap_pars_vertex: _p, displacementmap_vertex: vp, emissivemap_fragment: xp, emissivemap_pars_fragment: yp, colorspace_fragment: Mp, colorspace_pars_fragment: Sp, envmap_fragment: Ep, envmap_common_pars_fragment: Ap, envmap_pars_fragment: bp, envmap_pars_vertex: Tp, envmap_physical_pars_fragment: Op, envmap_vertex: wp, fog_vertex: Rp, fog_pars_vertex: Cp, fog_fragment: Pp, fog_pars_fragment: Lp, gradientmap_pars_fragment: Ip, lightmap_pars_fragment: Dp, lights_lambert_fragment: Np, lights_lambert_pars_fragment: Up, lights_pars_begin: Fp, lights_toon_fragment: Bp, lights_toon_pars_fragment: kp, lights_phong_fragment: zp, lights_phong_pars_fragment: Hp, lights_physical_fragment: Vp, lights_physical_pars_fragment: Gp, lights_fragment_begin: Wp, lights_fragment_maps: Xp, lights_fragment_end: Yp, logdepthbuf_fragment: qp, logdepthbuf_pars_fragment: jp, logdepthbuf_pars_vertex: $p, logdepthbuf_vertex: Kp, map_fragment: Zp, map_pars_fragment: Jp, map_particle_fragment: Qp, map_particle_pars_fragment: tm, metalnessmap_fragment: em, metalnessmap_pars_fragment: nm, morphinstance_vertex: im, morphcolor_vertex: sm, morphnormal_vertex: rm, morphtarget_pars_vertex: om, morphtarget_vertex: am, normal_fragment_begin: lm, normal_fragment_maps: cm, normal_pars_fragment: hm, normal_pars_vertex: um, normal_vertex: dm, normalmap_pars_fragment: fm, clearcoat_normal_fragment_begin: pm, clearcoat_normal_fragment_maps: mm, clearcoat_pars_fragment: gm, iridescence_pars_fragment: _m, opaque_fragment: vm, packing: xm, premultiplied_alpha_fragment: ym, project_vertex: Mm, dithering_fragment: Sm, dithering_pars_fragment: Em, roughnessmap_fragment: Am, roughnessmap_pars_fragment: bm, shadowmap_pars_fragment: Tm, shadowmap_pars_vertex: wm, shadowmap_vertex: Rm, shadowmask_pars_fragment: Cm, skinbase_vertex: Pm, skinning_pars_vertex: Lm, skinning_vertex: Im, skinnormal_vertex: Dm, specularmap_fragment: Nm, specularmap_pars_fragment: Um, tonemapping_fragment: Fm, tonemapping_pars_fragment: Om, transmission_fragment: Bm, transmission_pars_fragment: km, uv_pars_fragment: zm, uv_pars_vertex: Hm, uv_vertex: Vm, worldpos_vertex: Gm, background_vert: Wm, background_frag: Xm, backgroundCube_vert: Ym, backgroundCube_frag: qm, cube_vert: jm, cube_frag: $m, depth_vert: Km, depth_frag: Zm, distanceRGBA_vert: Jm, distanceRGBA_frag: Qm, equirect_vert: tg, equirect_frag: eg, linedashed_vert: ng, linedashed_frag: ig, meshbasic_vert: sg, meshbasic_frag: rg, meshlambert_vert: og, meshlambert_frag: ag, meshmatcap_vert: lg, meshmatcap_frag: cg, meshnormal_vert: hg, meshnormal_frag: ug, meshphong_vert: dg, meshphong_frag: fg, meshphysical_vert: pg, meshphysical_frag: mg, meshtoon_vert: gg, meshtoon_frag: _g, points_vert: vg, points_frag: xg, shadow_vert: yg, shadow_frag: Mg, sprite_vert: Sg, sprite_frag: Eg }, lt = { common: { diffuse: { value: new It(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new zt() }, alphaMap: { value: null }, alphaMapTransform: { value: new zt() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new zt() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new zt() }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new zt() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new zt() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new zt() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new zt() }, normalScale: { value: new Q(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new zt() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new zt() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new zt() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new zt() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new It(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new It(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new zt() }, alphaTest: { value: 0 }, uvTransform: { value: new zt() } }, sprite: { diffuse: { value: new It(16777215) }, opacity: { value: 1 }, center: { value: new Q(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new zt() }, alphaMap: { value: null }, alphaMapTransform: { value: new zt() }, alphaTest: { value: 0 } } }, on = { basic: { uniforms: Re([lt.common, lt.specularmap, lt.envmap, lt.aomap, lt.lightmap, lt.fog]), vertexShader: Gt.meshbasic_vert, fragmentShader: Gt.meshbasic_frag }, lambert: { uniforms: Re([lt.common, lt.specularmap, lt.envmap, lt.aomap, lt.lightmap, lt.emissivemap, lt.bumpmap, lt.normalmap, lt.displacementmap, lt.fog, lt.lights, { emissive: { value: new It(0) } }]), vertexShader: Gt.meshlambert_vert, fragmentShader: Gt.meshlambert_frag }, phong: { uniforms: Re([lt.common, lt.specularmap, lt.envmap, lt.aomap, lt.lightmap, lt.emissivemap, lt.bumpmap, lt.normalmap, lt.displacementmap, lt.fog, lt.lights, { emissive: { value: new It(0) }, specular: { value: new It(1118481) }, shininess: { value: 30 } }]), vertexShader: Gt.meshphong_vert, fragmentShader: Gt.meshphong_frag }, standard: { uniforms: Re([lt.common, lt.envmap, lt.aomap, lt.lightmap, lt.emissivemap, lt.bumpmap, lt.normalmap, lt.displacementmap, lt.roughnessmap, lt.metalnessmap, lt.fog, lt.lights, { emissive: { value: new It(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Gt.meshphysical_vert, fragmentShader: Gt.meshphysical_frag }, toon: { uniforms: Re([lt.common, lt.aomap, lt.lightmap, lt.emissivemap, lt.bumpmap, lt.normalmap, lt.displacementmap, lt.gradientmap, lt.fog, lt.lights, { emissive: { value: new It(0) } }]), vertexShader: Gt.meshtoon_vert, fragmentShader: Gt.meshtoon_frag }, matcap: { uniforms: Re([lt.common, lt.bumpmap, lt.normalmap, lt.displacementmap, lt.fog, { matcap: { value: null } }]), vertexShader: Gt.meshmatcap_vert, fragmentShader: Gt.meshmatcap_frag }, points: { uniforms: Re([lt.points, lt.fog]), vertexShader: Gt.points_vert, fragmentShader: Gt.points_frag }, dashed: { uniforms: Re([lt.common, lt.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Gt.linedashed_vert, fragmentShader: Gt.linedashed_frag }, depth: { uniforms: Re([lt.common, lt.displacementmap]), vertexShader: Gt.depth_vert, fragmentShader: Gt.depth_frag }, normal: { uniforms: Re([lt.common, lt.bumpmap, lt.normalmap, lt.displacementmap, { opacity: { value: 1 } }]), vertexShader: Gt.meshnormal_vert, fragmentShader: Gt.meshnormal_frag }, sprite: { uniforms: Re([lt.sprite, lt.fog]), vertexShader: Gt.sprite_vert, fragmentShader: Gt.sprite_frag }, background: { uniforms: { uvTransform: { value: new zt() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Gt.background_vert, fragmentShader: Gt.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new zt() } }, vertexShader: Gt.backgroundCube_vert, fragmentShader: Gt.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Gt.cube_vert, fragmentShader: Gt.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Gt.equirect_vert, fragmentShader: Gt.equirect_frag }, distanceRGBA: { uniforms: Re([lt.common, lt.displacementmap, { referencePosition: { value: new w() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Gt.distanceRGBA_vert, fragmentShader: Gt.distanceRGBA_frag }, shadow: { uniforms: Re([lt.lights, lt.fog, { color: { value: new It(0) }, opacity: { value: 1 } }]), vertexShader: Gt.shadow_vert, fragmentShader: Gt.shadow_frag } };
on.physical = { uniforms: Re([on.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new zt() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new zt() }, clearcoatNormalScale: { value: new Q(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new zt() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new zt() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new zt() }, sheen: { value: 0 }, sheenColor: { value: new It(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new zt() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new zt() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new zt() }, transmissionSamplerSize: { value: new Q() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new zt() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new It(0) }, specularColor: { value: new It(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new zt() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new zt() }, anisotropyVector: { value: new Q() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new zt() } }]), vertexShader: Gt.meshphysical_vert, fragmentShader: Gt.meshphysical_frag };
const or = { r: 0, b: 0, g: 0 }, ti = new rn(), Ag = new Ot();
function bg(s, t, e, n, i, r, o) {
  const a = new It(0);
  let l = r === true ? 0 : 1, c, h, u = null, d = 0, f = null;
  function g(S) {
    let x = S.isScene === true ? S.background : null;
    return x && x.isTexture && (x = (S.backgroundBlurriness > 0 ? e : t).get(x)), x;
  }
  function _(S) {
    let x = false;
    const L = g(S);
    L === null ? p(a, l) : L && L.isColor && (p(L, 1), x = true);
    const R = s.xr.getEnvironmentBlendMode();
    R === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, o) : R === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, o), (s.autoClear || x) && (n.buffers.depth.setTest(true), n.buffers.depth.setMask(true), n.buffers.color.setMask(true), s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil));
  }
  function m(S, x) {
    const L = g(x);
    L && (L.isCubeTexture || L.mapping === Ar) ? (h === void 0 && (h = new He(new Zi(1, 1, 1), new Vn({ name: "BackgroundCubeMaterial", uniforms: Yi(on.backgroundCube.uniforms), vertexShader: on.backgroundCube.vertexShader, fragmentShader: on.backgroundCube.fragmentShader, side: Fe, depthTest: false, depthWrite: false, fog: false })), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(R, C, I) {
      this.matrixWorld.copyPosition(I.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), i.update(h)), ti.copy(x.backgroundRotation), ti.x *= -1, ti.y *= -1, ti.z *= -1, L.isCubeTexture && L.isRenderTargetTexture === false && (ti.y *= -1, ti.z *= -1), h.material.uniforms.envMap.value = L, h.material.uniforms.flipEnvMap.value = L.isCubeTexture && L.isRenderTargetTexture === false ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = x.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = x.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ag.makeRotationFromEuler(ti)), h.material.toneMapped = qt.getTransfer(L.colorSpace) !== se, (u !== L || d !== L.version || f !== s.toneMapping) && (h.material.needsUpdate = true, u = L, d = L.version, f = s.toneMapping), h.layers.enableAll(), S.unshift(h, h.geometry, h.material, 0, 0, null)) : L && L.isTexture && (c === void 0 && (c = new He(new Tr(2, 2), new Vn({ name: "BackgroundMaterial", uniforms: Yi(on.background.uniforms), vertexShader: on.background.vertexShader, fragmentShader: on.background.fragmentShader, side: bn, depthTest: false, depthWrite: false, fog: false })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), i.update(c)), c.material.uniforms.t2D.value = L, c.material.uniforms.backgroundIntensity.value = x.backgroundIntensity, c.material.toneMapped = qt.getTransfer(L.colorSpace) !== se, L.matrixAutoUpdate === true && L.updateMatrix(), c.material.uniforms.uvTransform.value.copy(L.matrix), (u !== L || d !== L.version || f !== s.toneMapping) && (c.material.needsUpdate = true, u = L, d = L.version, f = s.toneMapping), c.layers.enableAll(), S.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function p(S, x) {
    S.getRGB(or, qc(s)), n.buffers.color.setClear(or.r, or.g, or.b, x, o);
  }
  function b() {
    h !== void 0 && (h.geometry.dispose(), h.material.dispose()), c !== void 0 && (c.geometry.dispose(), c.material.dispose());
  }
  return { getClearColor: function() {
    return a;
  }, setClearColor: function(S, x = 1) {
    a.set(S), l = x, p(a, l);
  }, getClearAlpha: function() {
    return l;
  }, setClearAlpha: function(S) {
    l = S, p(a, l);
  }, render: _, addToRenderList: m, dispose: b };
}
function Tg(s, t) {
  const e = s.getParameter(s.MAX_VERTEX_ATTRIBS), n = {}, i = d(null);
  let r = i, o = false;
  function a(y, P, V, O, z) {
    let j = false;
    const H = u(O, V, P);
    r !== H && (r = H, c(r.object)), j = f(y, O, V, z), j && g(y, O, V, z), z !== null && t.update(z, s.ELEMENT_ARRAY_BUFFER), (j || o) && (o = false, x(y, P, V, O), z !== null && s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, t.get(z).buffer));
  }
  function l() {
    return s.createVertexArray();
  }
  function c(y) {
    return s.bindVertexArray(y);
  }
  function h(y) {
    return s.deleteVertexArray(y);
  }
  function u(y, P, V) {
    const O = V.wireframe === true;
    let z = n[y.id];
    z === void 0 && (z = {}, n[y.id] = z);
    let j = z[P.id];
    j === void 0 && (j = {}, z[P.id] = j);
    let H = j[O];
    return H === void 0 && (H = d(l()), j[O] = H), H;
  }
  function d(y) {
    const P = [], V = [], O = [];
    for (let z = 0; z < e; z++) P[z] = 0, V[z] = 0, O[z] = 0;
    return { geometry: null, program: null, wireframe: false, newAttributes: P, enabledAttributes: V, attributeDivisors: O, object: y, attributes: {}, index: null };
  }
  function f(y, P, V, O) {
    const z = r.attributes, j = P.attributes;
    let H = 0;
    const nt = V.getAttributes();
    for (const G in nt) if (nt[G].location >= 0) {
      const mt = z[G];
      let Mt = j[G];
      if (Mt === void 0 && (G === "instanceMatrix" && y.instanceMatrix && (Mt = y.instanceMatrix), G === "instanceColor" && y.instanceColor && (Mt = y.instanceColor)), mt === void 0 || mt.attribute !== Mt || Mt && mt.data !== Mt.data) return true;
      H++;
    }
    return r.attributesNum !== H || r.index !== O;
  }
  function g(y, P, V, O) {
    const z = {}, j = P.attributes;
    let H = 0;
    const nt = V.getAttributes();
    for (const G in nt) if (nt[G].location >= 0) {
      let mt = j[G];
      mt === void 0 && (G === "instanceMatrix" && y.instanceMatrix && (mt = y.instanceMatrix), G === "instanceColor" && y.instanceColor && (mt = y.instanceColor));
      const Mt = {};
      Mt.attribute = mt, mt && mt.data && (Mt.data = mt.data), z[G] = Mt, H++;
    }
    r.attributes = z, r.attributesNum = H, r.index = O;
  }
  function _() {
    const y = r.newAttributes;
    for (let P = 0, V = y.length; P < V; P++) y[P] = 0;
  }
  function m(y) {
    p(y, 0);
  }
  function p(y, P) {
    const V = r.newAttributes, O = r.enabledAttributes, z = r.attributeDivisors;
    V[y] = 1, O[y] === 0 && (s.enableVertexAttribArray(y), O[y] = 1), z[y] !== P && (s.vertexAttribDivisor(y, P), z[y] = P);
  }
  function b() {
    const y = r.newAttributes, P = r.enabledAttributes;
    for (let V = 0, O = P.length; V < O; V++) P[V] !== y[V] && (s.disableVertexAttribArray(V), P[V] = 0);
  }
  function S(y, P, V, O, z, j, H) {
    H === true ? s.vertexAttribIPointer(y, P, V, z, j) : s.vertexAttribPointer(y, P, V, O, z, j);
  }
  function x(y, P, V, O) {
    _();
    const z = O.attributes, j = V.getAttributes(), H = P.defaultAttributeValues;
    for (const nt in j) {
      const G = j[nt];
      if (G.location >= 0) {
        let at = z[nt];
        if (at === void 0 && (nt === "instanceMatrix" && y.instanceMatrix && (at = y.instanceMatrix), nt === "instanceColor" && y.instanceColor && (at = y.instanceColor)), at !== void 0) {
          const mt = at.normalized, Mt = at.itemSize, Bt = t.get(at);
          if (Bt === void 0) continue;
          const Jt = Bt.buffer, q = Bt.type, st = Bt.bytesPerElement, Et = q === s.INT || q === s.UNSIGNED_INT || at.gpuType === ma;
          if (at.isInterleavedBufferAttribute) {
            const ot = at.data, Tt = ot.stride, Ut = at.offset;
            if (ot.isInstancedInterleavedBuffer) {
              for (let Lt = 0; Lt < G.locationSize; Lt++) p(G.location + Lt, ot.meshPerAttribute);
              y.isInstancedMesh !== true && O._maxInstanceCount === void 0 && (O._maxInstanceCount = ot.meshPerAttribute * ot.count);
            } else for (let Lt = 0; Lt < G.locationSize; Lt++) m(G.location + Lt);
            s.bindBuffer(s.ARRAY_BUFFER, Jt);
            for (let Lt = 0; Lt < G.locationSize; Lt++) S(G.location + Lt, Mt / G.locationSize, q, mt, Tt * st, (Ut + Mt / G.locationSize * Lt) * st, Et);
          } else {
            if (at.isInstancedBufferAttribute) {
              for (let ot = 0; ot < G.locationSize; ot++) p(G.location + ot, at.meshPerAttribute);
              y.isInstancedMesh !== true && O._maxInstanceCount === void 0 && (O._maxInstanceCount = at.meshPerAttribute * at.count);
            } else for (let ot = 0; ot < G.locationSize; ot++) m(G.location + ot);
            s.bindBuffer(s.ARRAY_BUFFER, Jt);
            for (let ot = 0; ot < G.locationSize; ot++) S(G.location + ot, Mt / G.locationSize, q, mt, Mt * st, Mt / G.locationSize * ot * st, Et);
          }
        } else if (H !== void 0) {
          const mt = H[nt];
          if (mt !== void 0) switch (mt.length) {
            case 2:
              s.vertexAttrib2fv(G.location, mt);
              break;
            case 3:
              s.vertexAttrib3fv(G.location, mt);
              break;
            case 4:
              s.vertexAttrib4fv(G.location, mt);
              break;
            default:
              s.vertexAttrib1fv(G.location, mt);
          }
        }
      }
    }
    b();
  }
  function L() {
    I();
    for (const y in n) {
      const P = n[y];
      for (const V in P) {
        const O = P[V];
        for (const z in O) h(O[z].object), delete O[z];
        delete P[V];
      }
      delete n[y];
    }
  }
  function R(y) {
    if (n[y.id] === void 0) return;
    const P = n[y.id];
    for (const V in P) {
      const O = P[V];
      for (const z in O) h(O[z].object), delete O[z];
      delete P[V];
    }
    delete n[y.id];
  }
  function C(y) {
    for (const P in n) {
      const V = n[P];
      if (V[y.id] === void 0) continue;
      const O = V[y.id];
      for (const z in O) h(O[z].object), delete O[z];
      delete V[y.id];
    }
  }
  function I() {
    E(), o = true, r !== i && (r = i, c(r.object));
  }
  function E() {
    i.geometry = null, i.program = null, i.wireframe = false;
  }
  return { setup: a, reset: I, resetDefaultState: E, dispose: L, releaseStatesOfGeometry: R, releaseStatesOfProgram: C, initAttributes: _, enableAttribute: m, disableUnusedAttributes: b };
}
function wg(s, t, e) {
  let n;
  function i(c) {
    n = c;
  }
  function r(c, h) {
    s.drawArrays(n, c, h), e.update(h, n, 1);
  }
  function o(c, h, u) {
    u !== 0 && (s.drawArraysInstanced(n, c, h, u), e.update(h, n, u));
  }
  function a(c, h, u) {
    if (u === 0) return;
    t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, h, 0, u);
    let f = 0;
    for (let g = 0; g < u; g++) f += h[g];
    e.update(f, n, 1);
  }
  function l(c, h, u, d) {
    if (u === 0) return;
    const f = t.get("WEBGL_multi_draw");
    if (f === null) for (let g = 0; g < c.length; g++) o(c[g], h[g], d[g]);
    else {
      f.multiDrawArraysInstancedWEBGL(n, c, 0, h, 0, d, 0, u);
      let g = 0;
      for (let _ = 0; _ < u; _++) g += h[_] * d[_];
      e.update(g, n, 1);
    }
  }
  this.setMode = i, this.render = r, this.renderInstances = o, this.renderMultiDraw = a, this.renderMultiDrawInstances = l;
}
function Rg(s, t, e, n) {
  let i;
  function r() {
    if (i !== void 0) return i;
    if (t.has("EXT_texture_filter_anisotropic") === true) {
      const C = t.get("EXT_texture_filter_anisotropic");
      i = s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else i = 0;
    return i;
  }
  function o(C) {
    return !(C !== qe && n.convert(C) !== s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function a(C) {
    const I = C === ws && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
    return !(C !== Tn && n.convert(C) !== s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE) && C !== nn && !I);
  }
  function l(C) {
    if (C === "highp") {
      if (s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.HIGH_FLOAT).precision > 0 && s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_FLOAT).precision > 0) return "highp";
      C = "mediump";
    }
    return C === "mediump" && s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.MEDIUM_FLOAT).precision > 0 && s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = e.precision !== void 0 ? e.precision : "highp";
  const h = l(c);
  h !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", h, "instead."), c = h);
  const u = e.logarithmicDepthBuffer === true, d = e.reverseDepthBuffer === true && t.has("EXT_clip_control"), f = s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS), g = s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS), _ = s.getParameter(s.MAX_TEXTURE_SIZE), m = s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE), p = s.getParameter(s.MAX_VERTEX_ATTRIBS), b = s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS), S = s.getParameter(s.MAX_VARYING_VECTORS), x = s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS), L = g > 0, R = s.getParameter(s.MAX_SAMPLES);
  return { isWebGL2: true, getMaxAnisotropy: r, getMaxPrecision: l, textureFormatReadable: o, textureTypeReadable: a, precision: c, logarithmicDepthBuffer: u, reverseDepthBuffer: d, maxTextures: f, maxVertexTextures: g, maxTextureSize: _, maxCubemapSize: m, maxAttributes: p, maxVertexUniforms: b, maxVaryings: S, maxFragmentUniforms: x, vertexTextures: L, maxSamples: R };
}
function Cg(s) {
  const t = this;
  let e = null, n = 0, i = false, r = false;
  const o = new Un(), a = new zt(), l = { value: null, needsUpdate: false };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, d) {
    const f = u.length !== 0 || d || n !== 0 || i;
    return i = d, n = u.length, f;
  }, this.beginShadows = function() {
    r = true, h(null);
  }, this.endShadows = function() {
    r = false;
  }, this.setGlobalState = function(u, d) {
    e = h(u, d, 0);
  }, this.setState = function(u, d, f) {
    const g = u.clippingPlanes, _ = u.clipIntersection, m = u.clipShadows, p = s.get(u);
    if (!i || g === null || g.length === 0 || r && !m) r ? h(null) : c();
    else {
      const b = r ? 0 : n, S = b * 4;
      let x = p.clippingState || null;
      l.value = x, x = h(g, d, S, f);
      for (let L = 0; L !== S; ++L) x[L] = e[L];
      p.clippingState = x, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += b;
    }
  };
  function c() {
    l.value !== e && (l.value = e, l.needsUpdate = n > 0), t.numPlanes = n, t.numIntersection = 0;
  }
  function h(u, d, f, g) {
    const _ = u !== null ? u.length : 0;
    let m = null;
    if (_ !== 0) {
      if (m = l.value, g !== true || m === null) {
        const p = f + _ * 4, b = d.matrixWorldInverse;
        a.getNormalMatrix(b), (m === null || m.length < p) && (m = new Float32Array(p));
        for (let S = 0, x = f; S !== _; ++S, x += 4) o.copy(u[S]).applyMatrix4(b, a), o.normal.toArray(m, x), m[x + 3] = o.constant;
      }
      l.value = m, l.needsUpdate = true;
    }
    return t.numPlanes = _, t.numIntersection = 0, m;
  }
}
function Pg(s) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(o, a) {
    return a === wo ? o.mapping = zi : a === Ro && (o.mapping = Hi), o;
  }
  function n(o) {
    if (o && o.isTexture) {
      const a = o.mapping;
      if (a === wo || a === Ro) if (t.has(o)) {
        const l = t.get(o).texture;
        return e(l, o.mapping);
      } else {
        const l = o.image;
        if (l && l.height > 0) {
          const c = new dd(l.height);
          return c.fromEquirectangularTexture(s, o), t.set(o, c), o.addEventListener("dispose", i), e(c.texture, o.mapping);
        } else return null;
      }
    }
    return o;
  }
  function i(o) {
    const a = o.target;
    a.removeEventListener("dispose", i);
    const l = t.get(a);
    l !== void 0 && (t.delete(a), l.dispose());
  }
  function r() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return { get: n, dispose: r };
}
const Di = 4, jl = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], ri = 20, ro = new Ua(), $l = new It();
let oo = null, ao = 0, lo = 0, co = false;
const ii = (1 + Math.sqrt(5)) / 2, wi = 1 / ii, Kl = [new w(-ii, wi, 0), new w(ii, wi, 0), new w(-wi, 0, ii), new w(wi, 0, ii), new w(0, ii, -wi), new w(0, ii, wi), new w(-1, 1, -1), new w(1, 1, -1), new w(-1, 1, 1), new w(1, 1, 1)];
class Zl {
  constructor(t) {
    this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(t, e = 0, n = 0.1, i = 100) {
    oo = this._renderer.getRenderTarget(), ao = this._renderer.getActiveCubeFace(), lo = this._renderer.getActiveMipmapLevel(), co = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(256);
    const r = this._allocateTargets();
    return r.depthBuffer = true, this._sceneToCubeUV(t, n, i, r), e > 0 && this._blur(r, 0, 0, e), this._applyPMREM(r), this._cleanup(r), r;
  }
  fromEquirectangular(t, e = null) {
    return this._fromTexture(t, e);
  }
  fromCubemap(t, e = null) {
    return this._fromTexture(t, e);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = tc(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Ql(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(t) {
    this._lodMax = Math.floor(Math.log2(t)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let t = 0; t < this._lodPlanes.length; t++) this._lodPlanes[t].dispose();
  }
  _cleanup(t) {
    this._renderer.setRenderTarget(oo, ao, lo), this._renderer.xr.enabled = co, t.scissorTest = false, ar(t, 0, 0, t.width, t.height);
  }
  _fromTexture(t, e) {
    t.mapping === zi || t.mapping === Hi ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), oo = this._renderer.getRenderTarget(), ao = this._renderer.getActiveCubeFace(), lo = this._renderer.getActiveMipmapLevel(), co = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
    const n = e || this._allocateTargets();
    return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const t = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, n = { magFilter: ze, minFilter: ze, generateMipmaps: false, type: ws, format: qe, colorSpace: Ie, depthBuffer: false }, i = Jl(t, e, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Jl(t, e, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Lg(r)), this._blurMaterial = Ig(r, t, e);
    }
    return i;
  }
  _compileMaterial(t) {
    const e = new He(this._lodPlanes[0], t);
    this._renderer.compile(e, ro);
  }
  _sceneToCubeUV(t, e, n, i) {
    const a = new Ue(90, 1, e, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, d = h.toneMapping;
    h.getClearColor($l), h.toneMapping = zn, h.autoClear = false;
    const f = new oi({ name: "PMREM.Background", side: Fe, depthWrite: false, depthTest: false }), g = new He(new Zi(), f);
    let _ = false;
    const m = t.background;
    m ? m.isColor && (f.color.copy(m), t.background = null, _ = true) : (f.color.copy($l), _ = true);
    for (let p = 0; p < 6; p++) {
      const b = p % 3;
      b === 0 ? (a.up.set(0, l[p], 0), a.lookAt(c[p], 0, 0)) : b === 1 ? (a.up.set(0, 0, l[p]), a.lookAt(0, c[p], 0)) : (a.up.set(0, l[p], 0), a.lookAt(0, 0, c[p]));
      const S = this._cubeSize;
      ar(i, b * S, p > 2 ? S : 0, S, S), h.setRenderTarget(i), _ && h.render(g, a), h.render(t, a);
    }
    g.geometry.dispose(), g.material.dispose(), h.toneMapping = d, h.autoClear = u, t.background = m;
  }
  _textureToCubeUV(t, e) {
    const n = this._renderer, i = t.mapping === zi || t.mapping === Hi;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = tc()), this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Ql());
    const r = i ? this._cubemapMaterial : this._equirectMaterial, o = new He(this._lodPlanes[0], r), a = r.uniforms;
    a.envMap.value = t;
    const l = this._cubeSize;
    ar(e, 0, 0, 3 * l, 2 * l), n.setRenderTarget(e), n.render(o, ro);
  }
  _applyPMREM(t) {
    const e = this._renderer, n = e.autoClear;
    e.autoClear = false;
    const i = this._lodPlanes.length;
    for (let r = 1; r < i; r++) {
      const o = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), a = Kl[(i - r - 1) % Kl.length];
      this._blur(t, r - 1, r, o, a);
    }
    e.autoClear = n;
  }
  _blur(t, e, n, i, r) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(t, o, e, n, i, "latitudinal", r), this._halfBlur(o, t, n, n, i, "longitudinal", r);
  }
  _halfBlur(t, e, n, i, r, o, a) {
    const l = this._renderer, c = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
    const h = 3, u = new He(this._lodPlanes[i], c), d = c.uniforms, f = this._sizeLods[n] - 1, g = isFinite(r) ? Math.PI / (2 * f) : 2 * Math.PI / (2 * ri - 1), _ = r / g, m = isFinite(r) ? 1 + Math.floor(h * _) : ri;
    m > ri && console.warn("sigmaRadians, ".concat(r, ", is too large and will clip, as it requested ").concat(m, " samples when the maximum is set to ").concat(ri));
    const p = [];
    let b = 0;
    for (let C = 0; C < ri; ++C) {
      const I = C / _, E = Math.exp(-I * I / 2);
      p.push(E), C === 0 ? b += E : C < m && (b += 2 * E);
    }
    for (let C = 0; C < p.length; C++) p[C] = p[C] / b;
    d.envMap.value = t.texture, d.samples.value = m, d.weights.value = p, d.latitudinal.value = o === "latitudinal", a && (d.poleAxis.value = a);
    const { _lodMax: S } = this;
    d.dTheta.value = g, d.mipInt.value = S - n;
    const x = this._sizeLods[i], L = 3 * x * (i > S - Di ? i - S + Di : 0), R = 4 * (this._cubeSize - x);
    ar(e, L, R, 3 * x, 2 * x), l.setRenderTarget(e), l.render(u, ro);
  }
}
function Lg(s) {
  const t = [], e = [], n = [];
  let i = s;
  const r = s - Di + 1 + jl.length;
  for (let o = 0; o < r; o++) {
    const a = Math.pow(2, i);
    e.push(a);
    let l = 1 / a;
    o > s - Di ? l = jl[o - s + Di - 1] : o === 0 && (l = 0), n.push(l);
    const c = 1 / (a - 2), h = -c, u = 1 + c, d = [h, h, u, h, u, u, h, h, u, u, h, u], f = 6, g = 6, _ = 3, m = 2, p = 1, b = new Float32Array(_ * g * f), S = new Float32Array(m * g * f), x = new Float32Array(p * g * f);
    for (let R = 0; R < f; R++) {
      const C = R % 3 * 2 / 3 - 1, I = R > 2 ? 0 : -1, E = [C, I, 0, C + 2 / 3, I, 0, C + 2 / 3, I + 1, 0, C, I, 0, C + 2 / 3, I + 1, 0, C, I + 1, 0];
      b.set(E, _ * g * R), S.set(d, m * g * R);
      const y = [R, R, R, R, R, R];
      x.set(y, p * g * R);
    }
    const L = new be();
    L.setAttribute("position", new Le(b, _)), L.setAttribute("uv", new Le(S, m)), L.setAttribute("faceIndex", new Le(x, p)), t.push(L), i > Di && i--;
  }
  return { lodPlanes: t, sizeLods: e, sigmas: n };
}
function Jl(s, t, e) {
  const n = new ci(s, t, e);
  return n.texture.mapping = Ar, n.texture.name = "PMREM.cubeUv", n.scissorTest = true, n;
}
function ar(s, t, e, n, i) {
  s.viewport.set(t, e, n, i), s.scissor.set(t, e, n, i);
}
function Ig(s, t, e) {
  const n = new Float32Array(ri), i = new w(0, 1, 0);
  return new Vn({ name: "SphericalGaussianBlur", defines: { n: ri, CUBEUV_TEXEL_WIDTH: 1 / t, CUBEUV_TEXEL_HEIGHT: 1 / e, CUBEUV_MAX_MIP: "".concat(s, ".0") }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: i } }, vertexShader: Ba(), fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform int samples;\n			uniform float weights[ n ];\n			uniform bool latitudinal;\n			uniform float dTheta;\n			uniform float mipInt;\n			uniform vec3 poleAxis;\n\n			#define ENVMAP_TYPE_CUBE_UV\n			#include <cube_uv_reflection_fragment>\n\n			vec3 getSample( float theta, vec3 axis ) {\n\n				float cosTheta = cos( theta );\n				// Rodrigues' axis-angle rotation\n				vec3 sampleDirection = vOutputDirection * cosTheta\n					+ cross( axis, vOutputDirection ) * sin( theta )\n					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n				return bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n			}\n\n			void main() {\n\n				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n				}\n\n				axis = normalize( axis );\n\n				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n				for ( int i = 1; i < n; i++ ) {\n\n					if ( i >= samples ) {\n\n						break;\n\n					}\n\n					float theta = dTheta * float( i );\n					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n				}\n\n			}\n		", blending: kn, depthTest: false, depthWrite: false });
}
function Ql() {
  return new Vn({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: Ba(), fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n\n			#include <common>\n\n			void main() {\n\n				vec3 outputDirection = normalize( vOutputDirection );\n				vec2 uv = equirectUv( outputDirection );\n\n				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n			}\n		", blending: kn, depthTest: false, depthWrite: false });
}
function tc() {
  return new Vn({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: Ba(), fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			uniform float flipEnvMap;\n\n			varying vec3 vOutputDirection;\n\n			uniform samplerCube envMap;\n\n			void main() {\n\n				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n			}\n		", blending: kn, depthTest: false, depthWrite: false });
}
function Ba() {
  return "\n\n		precision mediump float;\n		precision mediump int;\n\n		attribute float faceIndex;\n\n		varying vec3 vOutputDirection;\n\n		// RH coordinate system; PMREM face-indexing convention\n		vec3 getDirection( vec2 uv, float face ) {\n\n			uv = 2.0 * uv - 1.0;\n\n			vec3 direction = vec3( uv, 1.0 );\n\n			if ( face == 0.0 ) {\n\n				direction = direction.zyx; // ( 1, v, u ) pos x\n\n			} else if ( face == 1.0 ) {\n\n				direction = direction.xzy;\n				direction.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n			} else if ( face == 2.0 ) {\n\n				direction.x *= -1.0; // ( -u, v, 1 ) pos z\n\n			} else if ( face == 3.0 ) {\n\n				direction = direction.zyx;\n				direction.xz *= -1.0; // ( -1, v, -u ) neg x\n\n			} else if ( face == 4.0 ) {\n\n				direction = direction.xzy;\n				direction.xy *= -1.0; // ( -u, -1, v ) neg y\n\n			} else if ( face == 5.0 ) {\n\n				direction.z *= -1.0; // ( u, v, -1 ) neg z\n\n			}\n\n			return direction;\n\n		}\n\n		void main() {\n\n			vOutputDirection = getDirection( uv, faceIndex );\n			gl_Position = vec4( position, 1.0 );\n\n		}\n	";
}
function Dg(s) {
  let t = /* @__PURE__ */ new WeakMap(), e = null;
  function n(a) {
    if (a && a.isTexture) {
      const l = a.mapping, c = l === wo || l === Ro, h = l === zi || l === Hi;
      if (c || h) {
        let u = t.get(a);
        const d = u !== void 0 ? u.texture.pmremVersion : 0;
        if (a.isRenderTargetTexture && a.pmremVersion !== d) return e === null && (e = new Zl(s)), u = c ? e.fromEquirectangular(a, u) : e.fromCubemap(a, u), u.texture.pmremVersion = a.pmremVersion, t.set(a, u), u.texture;
        if (u !== void 0) return u.texture;
        {
          const f = a.image;
          return c && f && f.height > 0 || h && f && i(f) ? (e === null && (e = new Zl(s)), u = c ? e.fromEquirectangular(a) : e.fromCubemap(a), u.texture.pmremVersion = a.pmremVersion, t.set(a, u), a.addEventListener("dispose", r), u.texture) : null;
        }
      }
    }
    return a;
  }
  function i(a) {
    let l = 0;
    const c = 6;
    for (let h = 0; h < c; h++) a[h] !== void 0 && l++;
    return l === c;
  }
  function r(a) {
    const l = a.target;
    l.removeEventListener("dispose", r);
    const c = t.get(l);
    c !== void 0 && (t.delete(l), c.dispose());
  }
  function o() {
    t = /* @__PURE__ */ new WeakMap(), e !== null && (e.dispose(), e = null);
  }
  return { get: n, dispose: o };
}
function Ng(s) {
  const t = {};
  function e(n) {
    if (t[n] !== void 0) return t[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = s.getExtension("WEBGL_depth_texture") || s.getExtension("MOZ_WEBGL_depth_texture") || s.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = s.getExtension("EXT_texture_filter_anisotropic") || s.getExtension("MOZ_EXT_texture_filter_anisotropic") || s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = s.getExtension("WEBGL_compressed_texture_s3tc") || s.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = s.getExtension("WEBGL_compressed_texture_pvrtc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = s.getExtension(n);
    }
    return t[n] = i, i;
  }
  return { has: function(n) {
    return e(n) !== null;
  }, init: function() {
    e("EXT_color_buffer_float"), e("WEBGL_clip_cull_distance"), e("OES_texture_float_linear"), e("EXT_color_buffer_half_float"), e("WEBGL_multisampled_render_to_texture"), e("WEBGL_render_shared_exponent");
  }, get: function(n) {
    const i = e(n);
    return i === null && Ri("THREE.WebGLRenderer: " + n + " extension not supported."), i;
  } };
}
function Ug(s, t, e, n) {
  const i = {}, r = /* @__PURE__ */ new WeakMap();
  function o(u) {
    const d = u.target;
    d.index !== null && t.remove(d.index);
    for (const g in d.attributes) t.remove(d.attributes[g]);
    d.removeEventListener("dispose", o), delete i[d.id];
    const f = r.get(d);
    f && (t.remove(f), r.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === true && delete d._maxInstanceCount, e.memory.geometries--;
  }
  function a(u, d) {
    return i[d.id] === true || (d.addEventListener("dispose", o), i[d.id] = true, e.memory.geometries++), d;
  }
  function l(u) {
    const d = u.attributes;
    for (const f in d) t.update(d[f], s.ARRAY_BUFFER);
  }
  function c(u) {
    const d = [], f = u.index, g = u.attributes.position;
    let _ = 0;
    if (f !== null) {
      const b = f.array;
      _ = f.version;
      for (let S = 0, x = b.length; S < x; S += 3) {
        const L = b[S + 0], R = b[S + 1], C = b[S + 2];
        d.push(L, R, R, C, C, L);
      }
    } else if (g !== void 0) {
      const b = g.array;
      _ = g.version;
      for (let S = 0, x = b.length / 3 - 1; S < x; S += 3) {
        const L = S + 0, R = S + 1, C = S + 2;
        d.push(L, R, R, C, C, L);
      }
    } else return;
    const m = new (Hc(d) ? Yc : Xc)(d, 1);
    m.version = _;
    const p = r.get(u);
    p && t.remove(p), r.set(u, m);
  }
  function h(u) {
    const d = r.get(u);
    if (d) {
      const f = u.index;
      f !== null && d.version < f.version && c(u);
    } else c(u);
    return r.get(u);
  }
  return { get: a, update: l, getWireframeAttribute: h };
}
function Fg(s, t, e) {
  let n;
  function i(d) {
    n = d;
  }
  let r, o;
  function a(d) {
    r = d.type, o = d.bytesPerElement;
  }
  function l(d, f) {
    s.drawElements(n, f, r, d * o), e.update(f, n, 1);
  }
  function c(d, f, g) {
    g !== 0 && (s.drawElementsInstanced(n, f, r, d * o, g), e.update(f, n, g));
  }
  function h(d, f, g) {
    if (g === 0) return;
    t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, f, 0, r, d, 0, g);
    let m = 0;
    for (let p = 0; p < g; p++) m += f[p];
    e.update(m, n, 1);
  }
  function u(d, f, g, _) {
    if (g === 0) return;
    const m = t.get("WEBGL_multi_draw");
    if (m === null) for (let p = 0; p < d.length; p++) c(d[p] / o, f[p], _[p]);
    else {
      m.multiDrawElementsInstancedWEBGL(n, f, 0, r, d, 0, _, 0, g);
      let p = 0;
      for (let b = 0; b < g; b++) p += f[b] * _[b];
      e.update(p, n, 1);
    }
  }
  this.setMode = i, this.setIndex = a, this.render = l, this.renderInstances = c, this.renderMultiDraw = h, this.renderMultiDrawInstances = u;
}
function Og(s) {
  const t = { geometries: 0, textures: 0 }, e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(r, o, a) {
    switch (e.calls++, o) {
      case s.TRIANGLES:
        e.triangles += a * (r / 3);
        break;
      case s.LINES:
        e.lines += a * (r / 2);
        break;
      case s.LINE_STRIP:
        e.lines += a * (r - 1);
        break;
      case s.LINE_LOOP:
        e.lines += a * r;
        break;
      case s.POINTS:
        e.points += a * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function i() {
    e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
  }
  return { memory: t, render: e, programs: null, autoReset: true, reset: i, update: n };
}
function Bg(s, t, e) {
  const n = /* @__PURE__ */ new WeakMap(), i = new Zt();
  function r(o, a, l) {
    const c = o.morphTargetInfluences, h = a.morphAttributes.position || a.morphAttributes.normal || a.morphAttributes.color, u = h !== void 0 ? h.length : 0;
    let d = n.get(a);
    if (d === void 0 || d.count !== u) {
      let E = function() {
        C.dispose(), n.delete(a), a.removeEventListener("dispose", E);
      };
      d !== void 0 && d.texture.dispose();
      const f = a.morphAttributes.position !== void 0, g = a.morphAttributes.normal !== void 0, _ = a.morphAttributes.color !== void 0, m = a.morphAttributes.position || [], p = a.morphAttributes.normal || [], b = a.morphAttributes.color || [];
      let S = 0;
      f === true && (S = 1), g === true && (S = 2), _ === true && (S = 3);
      let x = a.attributes.position.count * S, L = 1;
      x > t.maxTextureSize && (L = Math.ceil(x / t.maxTextureSize), x = t.maxTextureSize);
      const R = new Float32Array(x * L * 4 * u), C = new Gc(R, x, L, u);
      C.type = nn, C.needsUpdate = true;
      const I = S * 4;
      for (let y = 0; y < u; y++) {
        const P = m[y], V = p[y], O = b[y], z = x * L * 4 * y;
        for (let j = 0; j < P.count; j++) {
          const H = j * I;
          f === true && (i.fromBufferAttribute(P, j), R[z + H + 0] = i.x, R[z + H + 1] = i.y, R[z + H + 2] = i.z, R[z + H + 3] = 0), g === true && (i.fromBufferAttribute(V, j), R[z + H + 4] = i.x, R[z + H + 5] = i.y, R[z + H + 6] = i.z, R[z + H + 7] = 0), _ === true && (i.fromBufferAttribute(O, j), R[z + H + 8] = i.x, R[z + H + 9] = i.y, R[z + H + 10] = i.z, R[z + H + 11] = O.itemSize === 4 ? i.w : 1);
        }
      }
      d = { count: u, texture: C, size: new Q(x, L) }, n.set(a, d), a.addEventListener("dispose", E);
    }
    if (o.isInstancedMesh === true && o.morphTexture !== null) l.getUniforms().setValue(s, "morphTexture", o.morphTexture, e);
    else {
      let f = 0;
      for (let _ = 0; _ < c.length; _++) f += c[_];
      const g = a.morphTargetsRelative ? 1 : 1 - f;
      l.getUniforms().setValue(s, "morphTargetBaseInfluence", g), l.getUniforms().setValue(s, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(s, "morphTargetsTexture", d.texture, e), l.getUniforms().setValue(s, "morphTargetsTextureSize", d.size);
  }
  return { update: r };
}
function kg(s, t, e, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function r(l) {
    const c = n.render.frame, h = l.geometry, u = t.get(l, h);
    if (i.get(u) !== c && (t.update(u), i.set(u, c)), l.isInstancedMesh && (l.hasEventListener("dispose", a) === false && l.addEventListener("dispose", a), i.get(l) !== c && (e.update(l.instanceMatrix, s.ARRAY_BUFFER), l.instanceColor !== null && e.update(l.instanceColor, s.ARRAY_BUFFER), i.set(l, c))), l.isSkinnedMesh) {
      const d = l.skeleton;
      i.get(d) !== c && (d.update(), i.set(d, c));
    }
    return u;
  }
  function o() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function a(l) {
    const c = l.target;
    c.removeEventListener("dispose", a), e.remove(c.instanceMatrix), c.instanceColor !== null && e.remove(c.instanceColor);
  }
  return { update: r, dispose: o };
}
const yh = new xe(), ec = new th(1, 1), Mh = new Gc(), Sh = new Ku(), Eh = new $c(), nc = [], ic = [], sc = new Float32Array(16), rc = new Float32Array(9), oc = new Float32Array(4);
function ts(s, t, e) {
  const n = s[0];
  if (n <= 0 || n > 0) return s;
  const i = t * e;
  let r = nc[i];
  if (r === void 0 && (r = new Float32Array(i), nc[i] = r), t !== 0) {
    n.toArray(r, 0);
    for (let o = 1, a = 0; o !== t; ++o) a += e, s[o].toArray(r, a);
  }
  return r;
}
function ge(s, t) {
  if (s.length !== t.length) return false;
  for (let e = 0, n = s.length; e < n; e++) if (s[e] !== t[e]) return false;
  return true;
}
function _e(s, t) {
  for (let e = 0, n = t.length; e < n; e++) s[e] = t[e];
}
function wr(s, t) {
  let e = ic[t];
  e === void 0 && (e = new Int32Array(t), ic[t] = e);
  for (let n = 0; n !== t; ++n) e[n] = s.allocateTextureUnit();
  return e;
}
function zg(s, t) {
  const e = this.cache;
  e[0] !== t && (s.uniform1f(this.addr, t), e[0] = t);
}
function Hg(s, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (s.uniform2f(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (ge(e, t)) return;
    s.uniform2fv(this.addr, t), _e(e, t);
  }
}
function Vg(s, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (s.uniform3f(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else if (t.r !== void 0) (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (s.uniform3f(this.addr, t.r, t.g, t.b), e[0] = t.r, e[1] = t.g, e[2] = t.b);
  else {
    if (ge(e, t)) return;
    s.uniform3fv(this.addr, t), _e(e, t);
  }
}
function Gg(s, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (s.uniform4f(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (ge(e, t)) return;
    s.uniform4fv(this.addr, t), _e(e, t);
  }
}
function Wg(s, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (ge(e, t)) return;
    s.uniformMatrix2fv(this.addr, false, t), _e(e, t);
  } else {
    if (ge(e, n)) return;
    oc.set(n), s.uniformMatrix2fv(this.addr, false, oc), _e(e, n);
  }
}
function Xg(s, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (ge(e, t)) return;
    s.uniformMatrix3fv(this.addr, false, t), _e(e, t);
  } else {
    if (ge(e, n)) return;
    rc.set(n), s.uniformMatrix3fv(this.addr, false, rc), _e(e, n);
  }
}
function Yg(s, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (ge(e, t)) return;
    s.uniformMatrix4fv(this.addr, false, t), _e(e, t);
  } else {
    if (ge(e, n)) return;
    sc.set(n), s.uniformMatrix4fv(this.addr, false, sc), _e(e, n);
  }
}
function qg(s, t) {
  const e = this.cache;
  e[0] !== t && (s.uniform1i(this.addr, t), e[0] = t);
}
function jg(s, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (s.uniform2i(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (ge(e, t)) return;
    s.uniform2iv(this.addr, t), _e(e, t);
  }
}
function $g(s, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (s.uniform3i(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (ge(e, t)) return;
    s.uniform3iv(this.addr, t), _e(e, t);
  }
}
function Kg(s, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (s.uniform4i(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (ge(e, t)) return;
    s.uniform4iv(this.addr, t), _e(e, t);
  }
}
function Zg(s, t) {
  const e = this.cache;
  e[0] !== t && (s.uniform1ui(this.addr, t), e[0] = t);
}
function Jg(s, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (s.uniform2ui(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (ge(e, t)) return;
    s.uniform2uiv(this.addr, t), _e(e, t);
  }
}
function Qg(s, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (s.uniform3ui(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (ge(e, t)) return;
    s.uniform3uiv(this.addr, t), _e(e, t);
  }
}
function t_(s, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (s.uniform4ui(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (ge(e, t)) return;
    s.uniform4uiv(this.addr, t), _e(e, t);
  }
}
function e_(s, t, e) {
  const n = this.cache, i = e.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i);
  let r;
  this.type === s.SAMPLER_2D_SHADOW ? (ec.compareFunction = kc, r = ec) : r = yh, e.setTexture2D(t || r, i);
}
function n_(s, t, e) {
  const n = this.cache, i = e.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), e.setTexture3D(t || Sh, i);
}
function i_(s, t, e) {
  const n = this.cache, i = e.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), e.setTextureCube(t || Eh, i);
}
function s_(s, t, e) {
  const n = this.cache, i = e.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), e.setTexture2DArray(t || Mh, i);
}
function r_(s) {
  switch (s) {
    case 5126:
      return zg;
    case 35664:
      return Hg;
    case 35665:
      return Vg;
    case 35666:
      return Gg;
    case 35674:
      return Wg;
    case 35675:
      return Xg;
    case 35676:
      return Yg;
    case 5124:
    case 35670:
      return qg;
    case 35667:
    case 35671:
      return jg;
    case 35668:
    case 35672:
      return $g;
    case 35669:
    case 35673:
      return Kg;
    case 5125:
      return Zg;
    case 36294:
      return Jg;
    case 36295:
      return Qg;
    case 36296:
      return t_;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return e_;
    case 35679:
    case 36299:
    case 36307:
      return n_;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return i_;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return s_;
  }
}
function o_(s, t) {
  s.uniform1fv(this.addr, t);
}
function a_(s, t) {
  const e = ts(t, this.size, 2);
  s.uniform2fv(this.addr, e);
}
function l_(s, t) {
  const e = ts(t, this.size, 3);
  s.uniform3fv(this.addr, e);
}
function c_(s, t) {
  const e = ts(t, this.size, 4);
  s.uniform4fv(this.addr, e);
}
function h_(s, t) {
  const e = ts(t, this.size, 4);
  s.uniformMatrix2fv(this.addr, false, e);
}
function u_(s, t) {
  const e = ts(t, this.size, 9);
  s.uniformMatrix3fv(this.addr, false, e);
}
function d_(s, t) {
  const e = ts(t, this.size, 16);
  s.uniformMatrix4fv(this.addr, false, e);
}
function f_(s, t) {
  s.uniform1iv(this.addr, t);
}
function p_(s, t) {
  s.uniform2iv(this.addr, t);
}
function m_(s, t) {
  s.uniform3iv(this.addr, t);
}
function g_(s, t) {
  s.uniform4iv(this.addr, t);
}
function __(s, t) {
  s.uniform1uiv(this.addr, t);
}
function v_(s, t) {
  s.uniform2uiv(this.addr, t);
}
function x_(s, t) {
  s.uniform3uiv(this.addr, t);
}
function y_(s, t) {
  s.uniform4uiv(this.addr, t);
}
function M_(s, t, e) {
  const n = this.cache, i = t.length, r = wr(e, i);
  ge(n, r) || (s.uniform1iv(this.addr, r), _e(n, r));
  for (let o = 0; o !== i; ++o) e.setTexture2D(t[o] || yh, r[o]);
}
function S_(s, t, e) {
  const n = this.cache, i = t.length, r = wr(e, i);
  ge(n, r) || (s.uniform1iv(this.addr, r), _e(n, r));
  for (let o = 0; o !== i; ++o) e.setTexture3D(t[o] || Sh, r[o]);
}
function E_(s, t, e) {
  const n = this.cache, i = t.length, r = wr(e, i);
  ge(n, r) || (s.uniform1iv(this.addr, r), _e(n, r));
  for (let o = 0; o !== i; ++o) e.setTextureCube(t[o] || Eh, r[o]);
}
function A_(s, t, e) {
  const n = this.cache, i = t.length, r = wr(e, i);
  ge(n, r) || (s.uniform1iv(this.addr, r), _e(n, r));
  for (let o = 0; o !== i; ++o) e.setTexture2DArray(t[o] || Mh, r[o]);
}
function b_(s) {
  switch (s) {
    case 5126:
      return o_;
    case 35664:
      return a_;
    case 35665:
      return l_;
    case 35666:
      return c_;
    case 35674:
      return h_;
    case 35675:
      return u_;
    case 35676:
      return d_;
    case 5124:
    case 35670:
      return f_;
    case 35667:
    case 35671:
      return p_;
    case 35668:
    case 35672:
      return m_;
    case 35669:
    case 35673:
      return g_;
    case 5125:
      return __;
    case 36294:
      return v_;
    case 36295:
      return x_;
    case 36296:
      return y_;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return M_;
    case 35679:
    case 36299:
    case 36307:
      return S_;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return E_;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return A_;
  }
}
class T_ {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.setValue = r_(e.type);
  }
}
class w_ {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.size = e.size, this.setValue = b_(e.type);
  }
}
class R_ {
  constructor(t) {
    this.id = t, this.seq = [], this.map = {};
  }
  setValue(t, e, n) {
    const i = this.seq;
    for (let r = 0, o = i.length; r !== o; ++r) {
      const a = i[r];
      a.setValue(t, e[a.id], n);
    }
  }
}
const ho = /(\w+)(\])?(\[|\.)?/g;
function ac(s, t) {
  s.seq.push(t), s.map[t.id] = t;
}
function C_(s, t, e) {
  const n = s.name, i = n.length;
  for (ho.lastIndex = 0; ; ) {
    const r = ho.exec(n), o = ho.lastIndex;
    let a = r[1];
    const l = r[2] === "]", c = r[3];
    if (l && (a = a | 0), c === void 0 || c === "[" && o + 2 === i) {
      ac(e, c === void 0 ? new T_(a, s, t) : new w_(a, s, t));
      break;
    } else {
      let u = e.map[a];
      u === void 0 && (u = new R_(a), ac(e, u)), e = u;
    }
  }
}
class gr {
  constructor(t, e) {
    this.seq = [], this.map = {};
    const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const r = t.getActiveUniform(e, i), o = t.getUniformLocation(e, r.name);
      C_(r, o, this);
    }
  }
  setValue(t, e, n, i) {
    const r = this.map[e];
    r !== void 0 && r.setValue(t, n, i);
  }
  setOptional(t, e, n) {
    const i = e[n];
    i !== void 0 && this.setValue(t, n, i);
  }
  static upload(t, e, n, i) {
    for (let r = 0, o = e.length; r !== o; ++r) {
      const a = e[r], l = n[a.id];
      l.needsUpdate !== false && a.setValue(t, l.value, i);
    }
  }
  static seqWithValue(t, e) {
    const n = [];
    for (let i = 0, r = t.length; i !== r; ++i) {
      const o = t[i];
      o.id in e && n.push(o);
    }
    return n;
  }
}
function lc(s, t, e) {
  const n = s.createShader(t);
  return s.shaderSource(n, e), s.compileShader(n), n;
}
const P_ = 37297;
let L_ = 0;
function I_(s, t) {
  const e = s.split("\n"), n = [], i = Math.max(t - 6, 0), r = Math.min(t + 6, e.length);
  for (let o = i; o < r; o++) {
    const a = o + 1;
    n.push("".concat(a === t ? ">" : " ", " ").concat(a, ": ").concat(e[o]));
  }
  return n.join("\n");
}
const cc = new zt();
function D_(s) {
  qt._getMatrix(cc, qt.workingColorSpace, s);
  const t = "mat3( ".concat(cc.elements.map((e) => e.toFixed(4)), " )");
  switch (qt.getTransfer(s)) {
    case yr:
      return [t, "LinearTransferOETF"];
    case se:
      return [t, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", s), [t, "LinearTransferOETF"];
  }
}
function hc(s, t, e) {
  const n = s.getShaderParameter(t, s.COMPILE_STATUS), i = s.getShaderInfoLog(t).trim();
  if (n && i === "") return "";
  const r = /ERROR: 0:(\d+)/.exec(i);
  if (r) {
    const o = parseInt(r[1]);
    return e.toUpperCase() + "\n\n" + i + "\n\n" + I_(s.getShaderSource(t), o);
  } else return i;
}
function N_(s, t) {
  const e = D_(t);
  return ["vec4 ".concat(s, "( vec4 value ) {"), "	return ".concat(e[1], "( vec4( value.rgb * ").concat(e[0], ", value.a ) );"), "}"].join("\n");
}
function U_(s, t) {
  let e;
  switch (t) {
    case nu:
      e = "Linear";
      break;
    case iu:
      e = "Reinhard";
      break;
    case su:
      e = "Cineon";
      break;
    case ru:
      e = "ACESFilmic";
      break;
    case au:
      e = "AgX";
      break;
    case lu:
      e = "Neutral";
      break;
    case ou:
      e = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), e = "Linear";
  }
  return "vec3 " + s + "( vec3 color ) { return " + e + "ToneMapping( color ); }";
}
const lr = new w();
function F_() {
  qt.getLuminanceCoefficients(lr);
  const s = lr.x.toFixed(4), t = lr.y.toFixed(4), e = lr.z.toFixed(4);
  return ["float luminance( const in vec3 rgb ) {", "	const vec3 weights = vec3( ".concat(s, ", ").concat(t, ", ").concat(e, " );"), "	return dot( weights, rgb );", "}"].join("\n");
}
function O_(s) {
  return [s.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", s.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(fs).join("\n");
}
function B_(s) {
  const t = [];
  for (const e in s) {
    const n = s[e];
    n !== false && t.push("#define " + e + " " + n);
  }
  return t.join("\n");
}
function k_(s, t) {
  const e = {}, n = s.getProgramParameter(t, s.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const r = s.getActiveAttrib(t, i), o = r.name;
    let a = 1;
    r.type === s.FLOAT_MAT2 && (a = 2), r.type === s.FLOAT_MAT3 && (a = 3), r.type === s.FLOAT_MAT4 && (a = 4), e[o] = { type: r.type, location: s.getAttribLocation(t, o), locationSize: a };
  }
  return e;
}
function fs(s) {
  return s !== "";
}
function uc(s, t) {
  const e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return s.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function dc(s, t) {
  return s.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
const z_ = /^[ \t]*#include +<([\w\d./]+)>/gm;
function ha(s) {
  return s.replace(z_, V_);
}
const H_ = /* @__PURE__ */ new Map();
function V_(s, t) {
  let e = Gt[t];
  if (e === void 0) {
    const n = H_.get(t);
    if (n !== void 0) e = Gt[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, n);
    else throw new Error("Can not resolve #include <" + t + ">");
  }
  return ha(e);
}
const G_ = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function fc(s) {
  return s.replace(G_, W_);
}
function W_(s, t, e, n) {
  let i = "";
  for (let r = parseInt(t); r < parseInt(e); r++) i += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function pc(s) {
  let t = "precision ".concat(s.precision, " float;\n	precision ").concat(s.precision, " int;\n	precision ").concat(s.precision, " sampler2D;\n	precision ").concat(s.precision, " samplerCube;\n	precision ").concat(s.precision, " sampler3D;\n	precision ").concat(s.precision, " sampler2DArray;\n	precision ").concat(s.precision, " sampler2DShadow;\n	precision ").concat(s.precision, " samplerCubeShadow;\n	precision ").concat(s.precision, " sampler2DArrayShadow;\n	precision ").concat(s.precision, " isampler2D;\n	precision ").concat(s.precision, " isampler3D;\n	precision ").concat(s.precision, " isamplerCube;\n	precision ").concat(s.precision, " isampler2DArray;\n	precision ").concat(s.precision, " usampler2D;\n	precision ").concat(s.precision, " usampler3D;\n	precision ").concat(s.precision, " usamplerCube;\n	precision ").concat(s.precision, " usampler2DArray;\n	");
  return s.precision === "highp" ? t += "\n#define HIGH_PRECISION" : s.precision === "mediump" ? t += "\n#define MEDIUM_PRECISION" : s.precision === "lowp" && (t += "\n#define LOW_PRECISION"), t;
}
function X_(s) {
  let t = "SHADOWMAP_TYPE_BASIC";
  return s.shadowMapType === Tc ? t = "SHADOWMAP_TYPE_PCF" : s.shadowMapType === Uh ? t = "SHADOWMAP_TYPE_PCF_SOFT" : s.shadowMapType === yn && (t = "SHADOWMAP_TYPE_VSM"), t;
}
function Y_(s) {
  let t = "ENVMAP_TYPE_CUBE";
  if (s.envMap) switch (s.envMapMode) {
    case zi:
    case Hi:
      t = "ENVMAP_TYPE_CUBE";
      break;
    case Ar:
      t = "ENVMAP_TYPE_CUBE_UV";
      break;
  }
  return t;
}
function q_(s) {
  let t = "ENVMAP_MODE_REFLECTION";
  if (s.envMap) switch (s.envMapMode) {
    case Hi:
      t = "ENVMAP_MODE_REFRACTION";
      break;
  }
  return t;
}
function j_(s) {
  let t = "ENVMAP_BLENDING_NONE";
  if (s.envMap) switch (s.combine) {
    case pa:
      t = "ENVMAP_BLENDING_MULTIPLY";
      break;
    case tu:
      t = "ENVMAP_BLENDING_MIX";
      break;
    case eu:
      t = "ENVMAP_BLENDING_ADD";
      break;
  }
  return t;
}
function $_(s) {
  const t = s.envMapCubeUVHeight;
  if (t === null) return null;
  const e = Math.log2(t) - 2, n = 1 / t;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 112)), texelHeight: n, maxMip: e };
}
function K_(s, t, e, n) {
  const i = s.getContext(), r = e.defines;
  let o = e.vertexShader, a = e.fragmentShader;
  const l = X_(e), c = Y_(e), h = q_(e), u = j_(e), d = $_(e), f = O_(e), g = B_(r), _ = i.createProgram();
  let m, p, b = e.glslVersion ? "#version " + e.glslVersion + "\n" : "";
  e.isRawShaderMaterial ? (m = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, g].filter(fs).join("\n"), m.length > 0 && (m += "\n"), p = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, g].filter(fs).join("\n"), p.length > 0 && (p += "\n")) : (m = [pc(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, g, e.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", e.batching ? "#define USE_BATCHING" : "", e.batchingColor ? "#define USE_BATCHING_COLOR" : "", e.instancing ? "#define USE_INSTANCING" : "", e.instancingColor ? "#define USE_INSTANCING_COLOR" : "", e.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.map ? "#define USE_MAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + h : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.mapUv ? "#define MAP_UV " + e.mapUv : "", e.alphaMapUv ? "#define ALPHAMAP_UV " + e.alphaMapUv : "", e.lightMapUv ? "#define LIGHTMAP_UV " + e.lightMapUv : "", e.aoMapUv ? "#define AOMAP_UV " + e.aoMapUv : "", e.emissiveMapUv ? "#define EMISSIVEMAP_UV " + e.emissiveMapUv : "", e.bumpMapUv ? "#define BUMPMAP_UV " + e.bumpMapUv : "", e.normalMapUv ? "#define NORMALMAP_UV " + e.normalMapUv : "", e.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + e.displacementMapUv : "", e.metalnessMapUv ? "#define METALNESSMAP_UV " + e.metalnessMapUv : "", e.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + e.roughnessMapUv : "", e.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + e.anisotropyMapUv : "", e.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + e.clearcoatMapUv : "", e.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + e.clearcoatNormalMapUv : "", e.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + e.clearcoatRoughnessMapUv : "", e.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + e.iridescenceMapUv : "", e.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + e.iridescenceThicknessMapUv : "", e.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + e.sheenColorMapUv : "", e.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + e.sheenRoughnessMapUv : "", e.specularMapUv ? "#define SPECULARMAP_UV " + e.specularMapUv : "", e.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + e.specularColorMapUv : "", e.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + e.specularIntensityMapUv : "", e.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + e.transmissionMapUv : "", e.thicknessMapUv ? "#define THICKNESSMAP_UV " + e.thicknessMapUv : "", e.vertexTangents && e.flatShading === false ? "#define USE_TANGENT" : "", e.vertexColors ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.skinning ? "#define USE_SKINNING" : "", e.morphTargets ? "#define USE_MORPHTARGETS" : "", e.morphNormals && e.flatShading === false ? "#define USE_MORPHNORMALS" : "", e.morphColors ? "#define USE_MORPHCOLORS" : "", e.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + e.morphTextureStride : "", e.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + l : "", e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", e.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", "\n"].filter(fs).join("\n"), p = [pc(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, g, e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", e.map ? "#define USE_MAP" : "", e.matcap ? "#define USE_MATCAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + c : "", e.envMap ? "#define " + h : "", e.envMap ? "#define " + u : "", d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "", d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "", d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoat ? "#define USE_CLEARCOAT" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.dispersion ? "#define USE_DISPERSION" : "", e.iridescence ? "#define USE_IRIDESCENCE" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaTest ? "#define USE_ALPHATEST" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.sheen ? "#define USE_SHEEN" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.vertexTangents && e.flatShading === false ? "#define USE_TANGENT" : "", e.vertexColors || e.instancingColor || e.batchingColor ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.gradientMap ? "#define USE_GRADIENTMAP" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + l : "", e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", e.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", e.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", e.toneMapping !== zn ? "#define TONE_MAPPING" : "", e.toneMapping !== zn ? Gt.tonemapping_pars_fragment : "", e.toneMapping !== zn ? U_("toneMapping", e.toneMapping) : "", e.dithering ? "#define DITHERING" : "", e.opaque ? "#define OPAQUE" : "", Gt.colorspace_pars_fragment, N_("linearToOutputTexel", e.outputColorSpace), F_(), e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "", "\n"].filter(fs).join("\n")), o = ha(o), o = uc(o, e), o = dc(o, e), a = ha(a), a = uc(a, e), a = dc(a, e), o = fc(o), a = fc(a), e.isRawShaderMaterial !== true && (b = "#version 300 es\n", m = [f, "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + m, p = ["#define varying in", e.glslVersion === Qa ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", e.glslVersion === Qa ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + p);
  const S = b + m + o, x = b + p + a, L = lc(i, i.VERTEX_SHADER, S), R = lc(i, i.FRAGMENT_SHADER, x);
  i.attachShader(_, L), i.attachShader(_, R), e.index0AttributeName !== void 0 ? i.bindAttribLocation(_, 0, e.index0AttributeName) : e.morphTargets === true && i.bindAttribLocation(_, 0, "position"), i.linkProgram(_);
  function C(P) {
    if (s.debug.checkShaderErrors) {
      const V = i.getProgramInfoLog(_).trim(), O = i.getShaderInfoLog(L).trim(), z = i.getShaderInfoLog(R).trim();
      let j = true, H = true;
      if (i.getProgramParameter(_, i.LINK_STATUS) === false) if (j = false, typeof s.debug.onShaderError == "function") s.debug.onShaderError(i, _, L, R);
      else {
        const nt = hc(i, L, "vertex"), G = hc(i, R, "fragment");
        console.error("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(_, i.VALIDATE_STATUS) + "\n\nMaterial Name: " + P.name + "\nMaterial Type: " + P.type + "\n\nProgram Info Log: " + V + "\n" + nt + "\n" + G);
      }
      else V !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", V) : (O === "" || z === "") && (H = false);
      H && (P.diagnostics = { runnable: j, programLog: V, vertexShader: { log: O, prefix: m }, fragmentShader: { log: z, prefix: p } });
    }
    i.deleteShader(L), i.deleteShader(R), I = new gr(i, _), E = k_(i, _);
  }
  let I;
  this.getUniforms = function() {
    return I === void 0 && C(this), I;
  };
  let E;
  this.getAttributes = function() {
    return E === void 0 && C(this), E;
  };
  let y = e.rendererExtensionParallelShaderCompile === false;
  return this.isReady = function() {
    return y === false && (y = i.getProgramParameter(_, P_)), y;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(_), this.program = void 0;
  }, this.type = e.shaderType, this.name = e.shaderName, this.id = L_++, this.cacheKey = t, this.usedTimes = 1, this.program = _, this.vertexShader = L, this.fragmentShader = R, this;
}
let Z_ = 0;
class J_ {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(t) {
    const e = t.vertexShader, n = t.fragmentShader, i = this._getShaderStage(e), r = this._getShaderStage(n), o = this._getShaderCacheForMaterial(t);
    return o.has(i) === false && (o.add(i), i.usedTimes++), o.has(r) === false && (o.add(r), r.usedTimes++), this;
  }
  remove(t) {
    const e = this.materialCache.get(t);
    for (const n of e) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(t), this;
  }
  getVertexShaderID(t) {
    return this._getShaderStage(t.vertexShader).id;
  }
  getFragmentShaderID(t) {
    return this._getShaderStage(t.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(t) {
    const e = this.materialCache;
    let n = e.get(t);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), e.set(t, n)), n;
  }
  _getShaderStage(t) {
    const e = this.shaderCache;
    let n = e.get(t);
    return n === void 0 && (n = new Q_(t), e.set(t, n)), n;
  }
}
class Q_ {
  constructor(t) {
    this.id = Z_++, this.code = t, this.usedTimes = 0;
  }
}
function tv(s, t, e, n, i, r, o) {
  const a = new ba(), l = new J_(), c = /* @__PURE__ */ new Set(), h = [], u = i.logarithmicDepthBuffer, d = i.vertexTextures;
  let f = i.precision;
  const g = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
  function _(E) {
    return c.add(E), E === 0 ? "uv" : "uv".concat(E);
  }
  function m(E, y, P, V, O) {
    const z = V.fog, j = O.geometry, H = E.isMeshStandardMaterial ? V.environment : null, nt = (E.isMeshStandardMaterial ? e : t).get(E.envMap || H), G = nt && nt.mapping === Ar ? nt.image.height : null, at = g[E.type];
    E.precision !== null && (f = i.getMaxPrecision(E.precision), f !== E.precision && console.warn("THREE.WebGLProgram.getParameters:", E.precision, "not supported, using", f, "instead."));
    const mt = j.morphAttributes.position || j.morphAttributes.normal || j.morphAttributes.color, Mt = mt !== void 0 ? mt.length : 0;
    let Bt = 0;
    j.morphAttributes.position !== void 0 && (Bt = 1), j.morphAttributes.normal !== void 0 && (Bt = 2), j.morphAttributes.color !== void 0 && (Bt = 3);
    let Jt, q, st, Et;
    if (at) {
      const ne = on[at];
      Jt = ne.vertexShader, q = ne.fragmentShader;
    } else Jt = E.vertexShader, q = E.fragmentShader, l.update(E), st = l.getVertexShaderID(E), Et = l.getFragmentShaderID(E);
    const ot = s.getRenderTarget(), Tt = s.state.buffers.depth.getReversed(), Ut = O.isInstancedMesh === true, Lt = O.isBatchedMesh === true, jt = !!E.map, K = !!E.matcap, it = !!nt, T = !!E.aoMap, bt = !!E.lightMap, J = !!E.bumpMap, _t = !!E.normalMap, rt = !!E.displacementMap, Pt = !!E.emissiveMap, ft = !!E.metalnessMap, A = !!E.roughnessMap, v = E.anisotropy > 0, F = E.clearcoat > 0, X = E.dispersion > 0, Z = E.iridescence > 0, Y = E.sheen > 0, At = E.transmission > 0, ct = v && !!E.anisotropyMap, gt = F && !!E.clearcoatMap, Xt = F && !!E.clearcoatNormalMap, et = F && !!E.clearcoatRoughnessMap, xt = Z && !!E.iridescenceMap, Ct = Z && !!E.iridescenceThicknessMap, Dt = Y && !!E.sheenColorMap, yt = Y && !!E.sheenRoughnessMap, Yt = !!E.specularMap, Vt = !!E.specularColorMap, oe = !!E.specularIntensityMap, D = At && !!E.transmissionMap, ht = At && !!E.thicknessMap, W = !!E.gradientMap, $ = !!E.alphaMap, pt = E.alphaTest > 0, dt = !!E.alphaHash, kt = !!E.extensions;
    let ue = zn;
    E.toneMapped && (ot === null || ot.isXRRenderTarget === true) && (ue = s.toneMapping);
    const Se = { shaderID: at, shaderType: E.type, shaderName: E.name, vertexShader: Jt, fragmentShader: q, defines: E.defines, customVertexShaderID: st, customFragmentShaderID: Et, isRawShaderMaterial: E.isRawShaderMaterial === true, glslVersion: E.glslVersion, precision: f, batching: Lt, batchingColor: Lt && O._colorsTexture !== null, instancing: Ut, instancingColor: Ut && O.instanceColor !== null, instancingMorph: Ut && O.morphTexture !== null, supportsVertexTextures: d, outputColorSpace: ot === null ? s.outputColorSpace : ot.isXRRenderTarget === true ? ot.texture.colorSpace : Ie, alphaToCoverage: !!E.alphaToCoverage, map: jt, matcap: K, envMap: it, envMapMode: it && nt.mapping, envMapCubeUVHeight: G, aoMap: T, lightMap: bt, bumpMap: J, normalMap: _t, displacementMap: d && rt, emissiveMap: Pt, normalMapObjectSpace: _t && E.normalMapType === _u, normalMapTangentSpace: _t && E.normalMapType === Ea, metalnessMap: ft, roughnessMap: A, anisotropy: v, anisotropyMap: ct, clearcoat: F, clearcoatMap: gt, clearcoatNormalMap: Xt, clearcoatRoughnessMap: et, dispersion: X, iridescence: Z, iridescenceMap: xt, iridescenceThicknessMap: Ct, sheen: Y, sheenColorMap: Dt, sheenRoughnessMap: yt, specularMap: Yt, specularColorMap: Vt, specularIntensityMap: oe, transmission: At, transmissionMap: D, thicknessMap: ht, gradientMap: W, opaque: E.transparent === false && E.blending === Ui && E.alphaToCoverage === false, alphaMap: $, alphaTest: pt, alphaHash: dt, combine: E.combine, mapUv: jt && _(E.map.channel), aoMapUv: T && _(E.aoMap.channel), lightMapUv: bt && _(E.lightMap.channel), bumpMapUv: J && _(E.bumpMap.channel), normalMapUv: _t && _(E.normalMap.channel), displacementMapUv: rt && _(E.displacementMap.channel), emissiveMapUv: Pt && _(E.emissiveMap.channel), metalnessMapUv: ft && _(E.metalnessMap.channel), roughnessMapUv: A && _(E.roughnessMap.channel), anisotropyMapUv: ct && _(E.anisotropyMap.channel), clearcoatMapUv: gt && _(E.clearcoatMap.channel), clearcoatNormalMapUv: Xt && _(E.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: et && _(E.clearcoatRoughnessMap.channel), iridescenceMapUv: xt && _(E.iridescenceMap.channel), iridescenceThicknessMapUv: Ct && _(E.iridescenceThicknessMap.channel), sheenColorMapUv: Dt && _(E.sheenColorMap.channel), sheenRoughnessMapUv: yt && _(E.sheenRoughnessMap.channel), specularMapUv: Yt && _(E.specularMap.channel), specularColorMapUv: Vt && _(E.specularColorMap.channel), specularIntensityMapUv: oe && _(E.specularIntensityMap.channel), transmissionMapUv: D && _(E.transmissionMap.channel), thicknessMapUv: ht && _(E.thicknessMap.channel), alphaMapUv: $ && _(E.alphaMap.channel), vertexTangents: !!j.attributes.tangent && (_t || v), vertexColors: E.vertexColors, vertexAlphas: E.vertexColors === true && !!j.attributes.color && j.attributes.color.itemSize === 4, pointsUvs: O.isPoints === true && !!j.attributes.uv && (jt || $), fog: !!z, useFog: E.fog === true, fogExp2: !!z && z.isFogExp2, flatShading: E.flatShading === true, sizeAttenuation: E.sizeAttenuation === true, logarithmicDepthBuffer: u, reverseDepthBuffer: Tt, skinning: O.isSkinnedMesh === true, morphTargets: j.morphAttributes.position !== void 0, morphNormals: j.morphAttributes.normal !== void 0, morphColors: j.morphAttributes.color !== void 0, morphTargetsCount: Mt, morphTextureStride: Bt, numDirLights: y.directional.length, numPointLights: y.point.length, numSpotLights: y.spot.length, numSpotLightMaps: y.spotLightMap.length, numRectAreaLights: y.rectArea.length, numHemiLights: y.hemi.length, numDirLightShadows: y.directionalShadowMap.length, numPointLightShadows: y.pointShadowMap.length, numSpotLightShadows: y.spotShadowMap.length, numSpotLightShadowsWithMaps: y.numSpotLightShadowsWithMaps, numLightProbes: y.numLightProbes, numClippingPlanes: o.numPlanes, numClipIntersection: o.numIntersection, dithering: E.dithering, shadowMapEnabled: s.shadowMap.enabled && P.length > 0, shadowMapType: s.shadowMap.type, toneMapping: ue, decodeVideoTexture: jt && E.map.isVideoTexture === true && qt.getTransfer(E.map.colorSpace) === se, decodeVideoTextureEmissive: Pt && E.emissiveMap.isVideoTexture === true && qt.getTransfer(E.emissiveMap.colorSpace) === se, premultipliedAlpha: E.premultipliedAlpha, doubleSided: E.side === an, flipSided: E.side === Fe, useDepthPacking: E.depthPacking >= 0, depthPacking: E.depthPacking || 0, index0AttributeName: E.index0AttributeName, extensionClipCullDistance: kt && E.extensions.clipCullDistance === true && n.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (kt && E.extensions.multiDraw === true || Lt) && n.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"), customProgramCacheKey: E.customProgramCacheKey() };
    return Se.vertexUv1s = c.has(1), Se.vertexUv2s = c.has(2), Se.vertexUv3s = c.has(3), c.clear(), Se;
  }
  function p(E) {
    const y = [];
    if (E.shaderID ? y.push(E.shaderID) : (y.push(E.customVertexShaderID), y.push(E.customFragmentShaderID)), E.defines !== void 0) for (const P in E.defines) y.push(P), y.push(E.defines[P]);
    return E.isRawShaderMaterial === false && (b(y, E), S(y, E), y.push(s.outputColorSpace)), y.push(E.customProgramCacheKey), y.join();
  }
  function b(E, y) {
    E.push(y.precision), E.push(y.outputColorSpace), E.push(y.envMapMode), E.push(y.envMapCubeUVHeight), E.push(y.mapUv), E.push(y.alphaMapUv), E.push(y.lightMapUv), E.push(y.aoMapUv), E.push(y.bumpMapUv), E.push(y.normalMapUv), E.push(y.displacementMapUv), E.push(y.emissiveMapUv), E.push(y.metalnessMapUv), E.push(y.roughnessMapUv), E.push(y.anisotropyMapUv), E.push(y.clearcoatMapUv), E.push(y.clearcoatNormalMapUv), E.push(y.clearcoatRoughnessMapUv), E.push(y.iridescenceMapUv), E.push(y.iridescenceThicknessMapUv), E.push(y.sheenColorMapUv), E.push(y.sheenRoughnessMapUv), E.push(y.specularMapUv), E.push(y.specularColorMapUv), E.push(y.specularIntensityMapUv), E.push(y.transmissionMapUv), E.push(y.thicknessMapUv), E.push(y.combine), E.push(y.fogExp2), E.push(y.sizeAttenuation), E.push(y.morphTargetsCount), E.push(y.morphAttributeCount), E.push(y.numDirLights), E.push(y.numPointLights), E.push(y.numSpotLights), E.push(y.numSpotLightMaps), E.push(y.numHemiLights), E.push(y.numRectAreaLights), E.push(y.numDirLightShadows), E.push(y.numPointLightShadows), E.push(y.numSpotLightShadows), E.push(y.numSpotLightShadowsWithMaps), E.push(y.numLightProbes), E.push(y.shadowMapType), E.push(y.toneMapping), E.push(y.numClippingPlanes), E.push(y.numClipIntersection), E.push(y.depthPacking);
  }
  function S(E, y) {
    a.disableAll(), y.supportsVertexTextures && a.enable(0), y.instancing && a.enable(1), y.instancingColor && a.enable(2), y.instancingMorph && a.enable(3), y.matcap && a.enable(4), y.envMap && a.enable(5), y.normalMapObjectSpace && a.enable(6), y.normalMapTangentSpace && a.enable(7), y.clearcoat && a.enable(8), y.iridescence && a.enable(9), y.alphaTest && a.enable(10), y.vertexColors && a.enable(11), y.vertexAlphas && a.enable(12), y.vertexUv1s && a.enable(13), y.vertexUv2s && a.enable(14), y.vertexUv3s && a.enable(15), y.vertexTangents && a.enable(16), y.anisotropy && a.enable(17), y.alphaHash && a.enable(18), y.batching && a.enable(19), y.dispersion && a.enable(20), y.batchingColor && a.enable(21), E.push(a.mask), a.disableAll(), y.fog && a.enable(0), y.useFog && a.enable(1), y.flatShading && a.enable(2), y.logarithmicDepthBuffer && a.enable(3), y.reverseDepthBuffer && a.enable(4), y.skinning && a.enable(5), y.morphTargets && a.enable(6), y.morphNormals && a.enable(7), y.morphColors && a.enable(8), y.premultipliedAlpha && a.enable(9), y.shadowMapEnabled && a.enable(10), y.doubleSided && a.enable(11), y.flipSided && a.enable(12), y.useDepthPacking && a.enable(13), y.dithering && a.enable(14), y.transmission && a.enable(15), y.sheen && a.enable(16), y.opaque && a.enable(17), y.pointsUvs && a.enable(18), y.decodeVideoTexture && a.enable(19), y.decodeVideoTextureEmissive && a.enable(20), y.alphaToCoverage && a.enable(21), E.push(a.mask);
  }
  function x(E) {
    const y = g[E.type];
    let P;
    if (y) {
      const V = on[y];
      P = ld.clone(V.uniforms);
    } else P = E.uniforms;
    return P;
  }
  function L(E, y) {
    let P;
    for (let V = 0, O = h.length; V < O; V++) {
      const z = h[V];
      if (z.cacheKey === y) {
        P = z, ++P.usedTimes;
        break;
      }
    }
    return P === void 0 && (P = new K_(s, y, E, r), h.push(P)), P;
  }
  function R(E) {
    if (--E.usedTimes === 0) {
      const y = h.indexOf(E);
      h[y] = h[h.length - 1], h.pop(), E.destroy();
    }
  }
  function C(E) {
    l.remove(E);
  }
  function I() {
    l.dispose();
  }
  return { getParameters: m, getProgramCacheKey: p, getUniforms: x, acquireProgram: L, releaseProgram: R, releaseShaderCache: C, programs: h, dispose: I };
}
function ev() {
  let s = /* @__PURE__ */ new WeakMap();
  function t(o) {
    return s.has(o);
  }
  function e(o) {
    let a = s.get(o);
    return a === void 0 && (a = {}, s.set(o, a)), a;
  }
  function n(o) {
    s.delete(o);
  }
  function i(o, a, l) {
    s.get(o)[a] = l;
  }
  function r() {
    s = /* @__PURE__ */ new WeakMap();
  }
  return { has: t, get: e, remove: n, update: i, dispose: r };
}
function nv(s, t) {
  return s.groupOrder !== t.groupOrder ? s.groupOrder - t.groupOrder : s.renderOrder !== t.renderOrder ? s.renderOrder - t.renderOrder : s.material.id !== t.material.id ? s.material.id - t.material.id : s.z !== t.z ? s.z - t.z : s.id - t.id;
}
function mc(s, t) {
  return s.groupOrder !== t.groupOrder ? s.groupOrder - t.groupOrder : s.renderOrder !== t.renderOrder ? s.renderOrder - t.renderOrder : s.z !== t.z ? t.z - s.z : s.id - t.id;
}
function gc() {
  const s = [];
  let t = 0;
  const e = [], n = [], i = [];
  function r() {
    t = 0, e.length = 0, n.length = 0, i.length = 0;
  }
  function o(u, d, f, g, _, m) {
    let p = s[t];
    return p === void 0 ? (p = { id: u.id, object: u, geometry: d, material: f, groupOrder: g, renderOrder: u.renderOrder, z: _, group: m }, s[t] = p) : (p.id = u.id, p.object = u, p.geometry = d, p.material = f, p.groupOrder = g, p.renderOrder = u.renderOrder, p.z = _, p.group = m), t++, p;
  }
  function a(u, d, f, g, _, m) {
    const p = o(u, d, f, g, _, m);
    f.transmission > 0 ? n.push(p) : f.transparent === true ? i.push(p) : e.push(p);
  }
  function l(u, d, f, g, _, m) {
    const p = o(u, d, f, g, _, m);
    f.transmission > 0 ? n.unshift(p) : f.transparent === true ? i.unshift(p) : e.unshift(p);
  }
  function c(u, d) {
    e.length > 1 && e.sort(u || nv), n.length > 1 && n.sort(d || mc), i.length > 1 && i.sort(d || mc);
  }
  function h() {
    for (let u = t, d = s.length; u < d; u++) {
      const f = s[u];
      if (f.id === null) break;
      f.id = null, f.object = null, f.geometry = null, f.material = null, f.group = null;
    }
  }
  return { opaque: e, transmissive: n, transparent: i, init: r, push: a, unshift: l, finish: h, sort: c };
}
function iv() {
  let s = /* @__PURE__ */ new WeakMap();
  function t(n, i) {
    const r = s.get(n);
    let o;
    return r === void 0 ? (o = new gc(), s.set(n, [o])) : i >= r.length ? (o = new gc(), r.push(o)) : o = r[i], o;
  }
  function e() {
    s = /* @__PURE__ */ new WeakMap();
  }
  return { get: t, dispose: e };
}
function sv() {
  const s = {};
  return { get: function(t) {
    if (s[t.id] !== void 0) return s[t.id];
    let e;
    switch (t.type) {
      case "DirectionalLight":
        e = { direction: new w(), color: new It() };
        break;
      case "SpotLight":
        e = { position: new w(), direction: new w(), color: new It(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
        break;
      case "PointLight":
        e = { position: new w(), color: new It(), distance: 0, decay: 0 };
        break;
      case "HemisphereLight":
        e = { direction: new w(), skyColor: new It(), groundColor: new It() };
        break;
      case "RectAreaLight":
        e = { color: new It(), position: new w(), halfWidth: new w(), halfHeight: new w() };
        break;
    }
    return s[t.id] = e, e;
  } };
}
function rv() {
  const s = {};
  return { get: function(t) {
    if (s[t.id] !== void 0) return s[t.id];
    let e;
    switch (t.type) {
      case "DirectionalLight":
        e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Q() };
        break;
      case "SpotLight":
        e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Q() };
        break;
      case "PointLight":
        e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Q(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        break;
    }
    return s[t.id] = e, e;
  } };
}
let ov = 0;
function av(s, t) {
  return (t.castShadow ? 2 : 0) - (s.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (s.map ? 1 : 0);
}
function lv(s) {
  const t = new sv(), e = rv(), n = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
  for (let c = 0; c < 9; c++) n.probe.push(new w());
  const i = new w(), r = new Ot(), o = new Ot();
  function a(c) {
    let h = 0, u = 0, d = 0;
    for (let E = 0; E < 9; E++) n.probe[E].set(0, 0, 0);
    let f = 0, g = 0, _ = 0, m = 0, p = 0, b = 0, S = 0, x = 0, L = 0, R = 0, C = 0;
    c.sort(av);
    for (let E = 0, y = c.length; E < y; E++) {
      const P = c[E], V = P.color, O = P.intensity, z = P.distance, j = P.shadow && P.shadow.map ? P.shadow.map.texture : null;
      if (P.isAmbientLight) h += V.r * O, u += V.g * O, d += V.b * O;
      else if (P.isLightProbe) {
        for (let H = 0; H < 9; H++) n.probe[H].addScaledVector(P.sh.coefficients[H], O);
        C++;
      } else if (P.isDirectionalLight) {
        const H = t.get(P);
        if (H.color.copy(P.color).multiplyScalar(P.intensity), P.castShadow) {
          const nt = P.shadow, G = e.get(P);
          G.shadowIntensity = nt.intensity, G.shadowBias = nt.bias, G.shadowNormalBias = nt.normalBias, G.shadowRadius = nt.radius, G.shadowMapSize = nt.mapSize, n.directionalShadow[f] = G, n.directionalShadowMap[f] = j, n.directionalShadowMatrix[f] = P.shadow.matrix, b++;
        }
        n.directional[f] = H, f++;
      } else if (P.isSpotLight) {
        const H = t.get(P);
        H.position.setFromMatrixPosition(P.matrixWorld), H.color.copy(V).multiplyScalar(O), H.distance = z, H.coneCos = Math.cos(P.angle), H.penumbraCos = Math.cos(P.angle * (1 - P.penumbra)), H.decay = P.decay, n.spot[_] = H;
        const nt = P.shadow;
        if (P.map && (n.spotLightMap[L] = P.map, L++, nt.updateMatrices(P), P.castShadow && R++), n.spotLightMatrix[_] = nt.matrix, P.castShadow) {
          const G = e.get(P);
          G.shadowIntensity = nt.intensity, G.shadowBias = nt.bias, G.shadowNormalBias = nt.normalBias, G.shadowRadius = nt.radius, G.shadowMapSize = nt.mapSize, n.spotShadow[_] = G, n.spotShadowMap[_] = j, x++;
        }
        _++;
      } else if (P.isRectAreaLight) {
        const H = t.get(P);
        H.color.copy(V).multiplyScalar(O), H.halfWidth.set(P.width * 0.5, 0, 0), H.halfHeight.set(0, P.height * 0.5, 0), n.rectArea[m] = H, m++;
      } else if (P.isPointLight) {
        const H = t.get(P);
        if (H.color.copy(P.color).multiplyScalar(P.intensity), H.distance = P.distance, H.decay = P.decay, P.castShadow) {
          const nt = P.shadow, G = e.get(P);
          G.shadowIntensity = nt.intensity, G.shadowBias = nt.bias, G.shadowNormalBias = nt.normalBias, G.shadowRadius = nt.radius, G.shadowMapSize = nt.mapSize, G.shadowCameraNear = nt.camera.near, G.shadowCameraFar = nt.camera.far, n.pointShadow[g] = G, n.pointShadowMap[g] = j, n.pointShadowMatrix[g] = P.shadow.matrix, S++;
        }
        n.point[g] = H, g++;
      } else if (P.isHemisphereLight) {
        const H = t.get(P);
        H.skyColor.copy(P.color).multiplyScalar(O), H.groundColor.copy(P.groundColor).multiplyScalar(O), n.hemi[p] = H, p++;
      }
    }
    m > 0 && (s.has("OES_texture_float_linear") === true ? (n.rectAreaLTC1 = lt.LTC_FLOAT_1, n.rectAreaLTC2 = lt.LTC_FLOAT_2) : (n.rectAreaLTC1 = lt.LTC_HALF_1, n.rectAreaLTC2 = lt.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = u, n.ambient[2] = d;
    const I = n.hash;
    (I.directionalLength !== f || I.pointLength !== g || I.spotLength !== _ || I.rectAreaLength !== m || I.hemiLength !== p || I.numDirectionalShadows !== b || I.numPointShadows !== S || I.numSpotShadows !== x || I.numSpotMaps !== L || I.numLightProbes !== C) && (n.directional.length = f, n.spot.length = _, n.rectArea.length = m, n.point.length = g, n.hemi.length = p, n.directionalShadow.length = b, n.directionalShadowMap.length = b, n.pointShadow.length = S, n.pointShadowMap.length = S, n.spotShadow.length = x, n.spotShadowMap.length = x, n.directionalShadowMatrix.length = b, n.pointShadowMatrix.length = S, n.spotLightMatrix.length = x + L - R, n.spotLightMap.length = L, n.numSpotLightShadowsWithMaps = R, n.numLightProbes = C, I.directionalLength = f, I.pointLength = g, I.spotLength = _, I.rectAreaLength = m, I.hemiLength = p, I.numDirectionalShadows = b, I.numPointShadows = S, I.numSpotShadows = x, I.numSpotMaps = L, I.numLightProbes = C, n.version = ov++);
  }
  function l(c, h) {
    let u = 0, d = 0, f = 0, g = 0, _ = 0;
    const m = h.matrixWorldInverse;
    for (let p = 0, b = c.length; p < b; p++) {
      const S = c[p];
      if (S.isDirectionalLight) {
        const x = n.directional[u];
        x.direction.setFromMatrixPosition(S.matrixWorld), i.setFromMatrixPosition(S.target.matrixWorld), x.direction.sub(i), x.direction.transformDirection(m), u++;
      } else if (S.isSpotLight) {
        const x = n.spot[f];
        x.position.setFromMatrixPosition(S.matrixWorld), x.position.applyMatrix4(m), x.direction.setFromMatrixPosition(S.matrixWorld), i.setFromMatrixPosition(S.target.matrixWorld), x.direction.sub(i), x.direction.transformDirection(m), f++;
      } else if (S.isRectAreaLight) {
        const x = n.rectArea[g];
        x.position.setFromMatrixPosition(S.matrixWorld), x.position.applyMatrix4(m), o.identity(), r.copy(S.matrixWorld), r.premultiply(m), o.extractRotation(r), x.halfWidth.set(S.width * 0.5, 0, 0), x.halfHeight.set(0, S.height * 0.5, 0), x.halfWidth.applyMatrix4(o), x.halfHeight.applyMatrix4(o), g++;
      } else if (S.isPointLight) {
        const x = n.point[d];
        x.position.setFromMatrixPosition(S.matrixWorld), x.position.applyMatrix4(m), d++;
      } else if (S.isHemisphereLight) {
        const x = n.hemi[_];
        x.direction.setFromMatrixPosition(S.matrixWorld), x.direction.transformDirection(m), _++;
      }
    }
  }
  return { setup: a, setupView: l, state: n };
}
function _c(s) {
  const t = new lv(s), e = [], n = [];
  function i(h) {
    c.camera = h, e.length = 0, n.length = 0;
  }
  function r(h) {
    e.push(h);
  }
  function o(h) {
    n.push(h);
  }
  function a() {
    t.setup(e);
  }
  function l(h) {
    t.setupView(e, h);
  }
  const c = { lightsArray: e, shadowsArray: n, camera: null, lights: t, transmissionRenderTarget: {} };
  return { init: i, state: c, setupLights: a, setupLightsView: l, pushLight: r, pushShadow: o };
}
function cv(s) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(i, r = 0) {
    const o = t.get(i);
    let a;
    return o === void 0 ? (a = new _c(s), t.set(i, [a])) : r >= o.length ? (a = new _c(s), o.push(a)) : a = o[r], a;
  }
  function n() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return { get: e, dispose: n };
}
const hv = "void main() {\n	gl_Position = vec4( position, 1.0 );\n}", uv = "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( squared_mean - mean * mean );\n	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}";
function dv(s, t, e) {
  let n = new Ra();
  const i = new Q(), r = new Q(), o = new Zt(), a = new sf({ depthPacking: gu }), l = new rf(), c = {}, h = e.maxTextureSize, u = { [bn]: Fe, [Fe]: bn, [an]: an }, d = new Vn({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new Q() }, radius: { value: 4 } }, vertexShader: hv, fragmentShader: uv }), f = d.clone();
  f.defines.HORIZONTAL_PASS = 1;
  const g = new be();
  g.setAttribute("position", new Le(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const _ = new He(g, d), m = this;
  this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = Tc;
  let p = this.type;
  this.render = function(R, C, I) {
    if (m.enabled === false || m.autoUpdate === false && m.needsUpdate === false || R.length === 0) return;
    const E = s.getRenderTarget(), y = s.getActiveCubeFace(), P = s.getActiveMipmapLevel(), V = s.state;
    V.setBlending(kn), V.buffers.color.setClear(1, 1, 1, 1), V.buffers.depth.setTest(true), V.setScissorTest(false);
    const O = p !== yn && this.type === yn, z = p === yn && this.type !== yn;
    for (let j = 0, H = R.length; j < H; j++) {
      const nt = R[j], G = nt.shadow;
      if (G === void 0) {
        console.warn("THREE.WebGLShadowMap:", nt, "has no shadow.");
        continue;
      }
      if (G.autoUpdate === false && G.needsUpdate === false) continue;
      i.copy(G.mapSize);
      const at = G.getFrameExtents();
      if (i.multiply(at), r.copy(G.mapSize), (i.x > h || i.y > h) && (i.x > h && (r.x = Math.floor(h / at.x), i.x = r.x * at.x, G.mapSize.x = r.x), i.y > h && (r.y = Math.floor(h / at.y), i.y = r.y * at.y, G.mapSize.y = r.y)), G.map === null || O === true || z === true) {
        const Mt = this.type !== yn ? { minFilter: Ce, magFilter: Ce } : {};
        G.map !== null && G.map.dispose(), G.map = new ci(i.x, i.y, Mt), G.map.texture.name = nt.name + ".shadowMap", G.camera.updateProjectionMatrix();
      }
      s.setRenderTarget(G.map), s.clear();
      const mt = G.getViewportCount();
      for (let Mt = 0; Mt < mt; Mt++) {
        const Bt = G.getViewport(Mt);
        o.set(r.x * Bt.x, r.y * Bt.y, r.x * Bt.z, r.y * Bt.w), V.viewport(o), G.updateMatrices(nt, Mt), n = G.getFrustum(), x(C, I, G.camera, nt, this.type);
      }
      G.isPointLightShadow !== true && this.type === yn && b(G, I), G.needsUpdate = false;
    }
    p = this.type, m.needsUpdate = false, s.setRenderTarget(E, y, P);
  };
  function b(R, C) {
    const I = t.update(_);
    d.defines.VSM_SAMPLES !== R.blurSamples && (d.defines.VSM_SAMPLES = R.blurSamples, f.defines.VSM_SAMPLES = R.blurSamples, d.needsUpdate = true, f.needsUpdate = true), R.mapPass === null && (R.mapPass = new ci(i.x, i.y)), d.uniforms.shadow_pass.value = R.map.texture, d.uniforms.resolution.value = R.mapSize, d.uniforms.radius.value = R.radius, s.setRenderTarget(R.mapPass), s.clear(), s.renderBufferDirect(C, null, I, d, _, null), f.uniforms.shadow_pass.value = R.mapPass.texture, f.uniforms.resolution.value = R.mapSize, f.uniforms.radius.value = R.radius, s.setRenderTarget(R.map), s.clear(), s.renderBufferDirect(C, null, I, f, _, null);
  }
  function S(R, C, I, E) {
    let y = null;
    const P = I.isPointLight === true ? R.customDistanceMaterial : R.customDepthMaterial;
    if (P !== void 0) y = P;
    else if (y = I.isPointLight === true ? l : a, s.localClippingEnabled && C.clipShadows === true && Array.isArray(C.clippingPlanes) && C.clippingPlanes.length !== 0 || C.displacementMap && C.displacementScale !== 0 || C.alphaMap && C.alphaTest > 0 || C.map && C.alphaTest > 0) {
      const V = y.uuid, O = C.uuid;
      let z = c[V];
      z === void 0 && (z = {}, c[V] = z);
      let j = z[O];
      j === void 0 && (j = y.clone(), z[O] = j, C.addEventListener("dispose", L)), y = j;
    }
    if (y.visible = C.visible, y.wireframe = C.wireframe, E === yn ? y.side = C.shadowSide !== null ? C.shadowSide : C.side : y.side = C.shadowSide !== null ? C.shadowSide : u[C.side], y.alphaMap = C.alphaMap, y.alphaTest = C.alphaTest, y.map = C.map, y.clipShadows = C.clipShadows, y.clippingPlanes = C.clippingPlanes, y.clipIntersection = C.clipIntersection, y.displacementMap = C.displacementMap, y.displacementScale = C.displacementScale, y.displacementBias = C.displacementBias, y.wireframeLinewidth = C.wireframeLinewidth, y.linewidth = C.linewidth, I.isPointLight === true && y.isMeshDistanceMaterial === true) {
      const V = s.properties.get(y);
      V.light = I;
    }
    return y;
  }
  function x(R, C, I, E, y) {
    if (R.visible === false) return;
    if (R.layers.test(C.layers) && (R.isMesh || R.isLine || R.isPoints) && (R.castShadow || R.receiveShadow && y === yn) && (!R.frustumCulled || n.intersectsObject(R))) {
      R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse, R.matrixWorld);
      const O = t.update(R), z = R.material;
      if (Array.isArray(z)) {
        const j = O.groups;
        for (let H = 0, nt = j.length; H < nt; H++) {
          const G = j[H], at = z[G.materialIndex];
          if (at && at.visible) {
            const mt = S(R, at, E, y);
            R.onBeforeShadow(s, R, C, I, O, mt, G), s.renderBufferDirect(I, null, O, mt, R, G), R.onAfterShadow(s, R, C, I, O, mt, G);
          }
        }
      } else if (z.visible) {
        const j = S(R, z, E, y);
        R.onBeforeShadow(s, R, C, I, O, j, null), s.renderBufferDirect(I, null, O, j, R, null), R.onAfterShadow(s, R, C, I, O, j, null);
      }
    }
    const V = R.children;
    for (let O = 0, z = V.length; O < z; O++) x(V[O], C, I, E, y);
  }
  function L(R) {
    R.target.removeEventListener("dispose", L);
    for (const I in c) {
      const E = c[I], y = R.target.uuid;
      y in E && (E[y].dispose(), delete E[y]);
    }
  }
}
const fv = { [yo]: Mo, [So]: bo, [Eo]: To, [ki]: Ao, [Mo]: yo, [bo]: So, [To]: Eo, [Ao]: ki };
function pv(s, t) {
  function e() {
    let D = false;
    const ht = new Zt();
    let W = null;
    const $ = new Zt(0, 0, 0, 0);
    return { setMask: function(pt) {
      W !== pt && !D && (s.colorMask(pt, pt, pt, pt), W = pt);
    }, setLocked: function(pt) {
      D = pt;
    }, setClear: function(pt, dt, kt, ue, Se) {
      Se === true && (pt *= ue, dt *= ue, kt *= ue), ht.set(pt, dt, kt, ue), $.equals(ht) === false && (s.clearColor(pt, dt, kt, ue), $.copy(ht));
    }, reset: function() {
      D = false, W = null, $.set(-1, 0, 0, 0);
    } };
  }
  function n() {
    let D = false, ht = false, W = null, $ = null, pt = null;
    return { setReversed: function(dt) {
      if (ht !== dt) {
        const kt = t.get("EXT_clip_control");
        ht ? kt.clipControlEXT(kt.LOWER_LEFT_EXT, kt.ZERO_TO_ONE_EXT) : kt.clipControlEXT(kt.LOWER_LEFT_EXT, kt.NEGATIVE_ONE_TO_ONE_EXT);
        const ue = pt;
        pt = null, this.setClear(ue);
      }
      ht = dt;
    }, getReversed: function() {
      return ht;
    }, setTest: function(dt) {
      dt ? ot(s.DEPTH_TEST) : Tt(s.DEPTH_TEST);
    }, setMask: function(dt) {
      W !== dt && !D && (s.depthMask(dt), W = dt);
    }, setFunc: function(dt) {
      if (ht && (dt = fv[dt]), $ !== dt) {
        switch (dt) {
          case yo:
            s.depthFunc(s.NEVER);
            break;
          case Mo:
            s.depthFunc(s.ALWAYS);
            break;
          case So:
            s.depthFunc(s.LESS);
            break;
          case ki:
            s.depthFunc(s.LEQUAL);
            break;
          case Eo:
            s.depthFunc(s.EQUAL);
            break;
          case Ao:
            s.depthFunc(s.GEQUAL);
            break;
          case bo:
            s.depthFunc(s.GREATER);
            break;
          case To:
            s.depthFunc(s.NOTEQUAL);
            break;
          default:
            s.depthFunc(s.LEQUAL);
        }
        $ = dt;
      }
    }, setLocked: function(dt) {
      D = dt;
    }, setClear: function(dt) {
      pt !== dt && (ht && (dt = 1 - dt), s.clearDepth(dt), pt = dt);
    }, reset: function() {
      D = false, W = null, $ = null, pt = null, ht = false;
    } };
  }
  function i() {
    let D = false, ht = null, W = null, $ = null, pt = null, dt = null, kt = null, ue = null, Se = null;
    return { setTest: function(ne) {
      D || (ne ? ot(s.STENCIL_TEST) : Tt(s.STENCIL_TEST));
    }, setMask: function(ne) {
      ht !== ne && !D && (s.stencilMask(ne), ht = ne);
    }, setFunc: function(ne, $e, fn) {
      (W !== ne || $ !== $e || pt !== fn) && (s.stencilFunc(ne, $e, fn), W = ne, $ = $e, pt = fn);
    }, setOp: function(ne, $e, fn) {
      (dt !== ne || kt !== $e || ue !== fn) && (s.stencilOp(ne, $e, fn), dt = ne, kt = $e, ue = fn);
    }, setLocked: function(ne) {
      D = ne;
    }, setClear: function(ne) {
      Se !== ne && (s.clearStencil(ne), Se = ne);
    }, reset: function() {
      D = false, ht = null, W = null, $ = null, pt = null, dt = null, kt = null, ue = null, Se = null;
    } };
  }
  const r = new e(), o = new n(), a = new i(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
  let h = {}, u = {}, d = /* @__PURE__ */ new WeakMap(), f = [], g = null, _ = false, m = null, p = null, b = null, S = null, x = null, L = null, R = null, C = new It(0, 0, 0), I = 0, E = false, y = null, P = null, V = null, O = null, z = null;
  const j = s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let H = false, nt = 0;
  const G = s.getParameter(s.VERSION);
  G.indexOf("WebGL") !== -1 ? (nt = parseFloat(/^WebGL (\d)/.exec(G)[1]), H = nt >= 1) : G.indexOf("OpenGL ES") !== -1 && (nt = parseFloat(/^OpenGL ES (\d)/.exec(G)[1]), H = nt >= 2);
  let at = null, mt = {};
  const Mt = s.getParameter(s.SCISSOR_BOX), Bt = s.getParameter(s.VIEWPORT), Jt = new Zt().fromArray(Mt), q = new Zt().fromArray(Bt);
  function st(D, ht, W, $) {
    const pt = new Uint8Array(4), dt = s.createTexture();
    s.bindTexture(D, dt), s.texParameteri(D, s.TEXTURE_MIN_FILTER, s.NEAREST), s.texParameteri(D, s.TEXTURE_MAG_FILTER, s.NEAREST);
    for (let kt = 0; kt < W; kt++) D === s.TEXTURE_3D || D === s.TEXTURE_2D_ARRAY ? s.texImage3D(ht, 0, s.RGBA, 1, 1, $, 0, s.RGBA, s.UNSIGNED_BYTE, pt) : s.texImage2D(ht + kt, 0, s.RGBA, 1, 1, 0, s.RGBA, s.UNSIGNED_BYTE, pt);
    return dt;
  }
  const Et = {};
  Et[s.TEXTURE_2D] = st(s.TEXTURE_2D, s.TEXTURE_2D, 1), Et[s.TEXTURE_CUBE_MAP] = st(s.TEXTURE_CUBE_MAP, s.TEXTURE_CUBE_MAP_POSITIVE_X, 6), Et[s.TEXTURE_2D_ARRAY] = st(s.TEXTURE_2D_ARRAY, s.TEXTURE_2D_ARRAY, 1, 1), Et[s.TEXTURE_3D] = st(s.TEXTURE_3D, s.TEXTURE_3D, 1, 1), r.setClear(0, 0, 0, 1), o.setClear(1), a.setClear(0), ot(s.DEPTH_TEST), o.setFunc(ki), J(false), _t(qa), ot(s.CULL_FACE), T(kn);
  function ot(D) {
    h[D] !== true && (s.enable(D), h[D] = true);
  }
  function Tt(D) {
    h[D] !== false && (s.disable(D), h[D] = false);
  }
  function Ut(D, ht) {
    return u[D] !== ht ? (s.bindFramebuffer(D, ht), u[D] = ht, D === s.DRAW_FRAMEBUFFER && (u[s.FRAMEBUFFER] = ht), D === s.FRAMEBUFFER && (u[s.DRAW_FRAMEBUFFER] = ht), true) : false;
  }
  function Lt(D, ht) {
    let W = f, $ = false;
    if (D) {
      W = d.get(ht), W === void 0 && (W = [], d.set(ht, W));
      const pt = D.textures;
      if (W.length !== pt.length || W[0] !== s.COLOR_ATTACHMENT0) {
        for (let dt = 0, kt = pt.length; dt < kt; dt++) W[dt] = s.COLOR_ATTACHMENT0 + dt;
        W.length = pt.length, $ = true;
      }
    } else W[0] !== s.BACK && (W[0] = s.BACK, $ = true);
    $ && s.drawBuffers(W);
  }
  function jt(D) {
    return g !== D ? (s.useProgram(D), g = D, true) : false;
  }
  const K = { [si]: s.FUNC_ADD, [Oh]: s.FUNC_SUBTRACT, [Bh]: s.FUNC_REVERSE_SUBTRACT };
  K[kh] = s.MIN, K[zh] = s.MAX;
  const it = { [Hh]: s.ZERO, [Vh]: s.ONE, [Gh]: s.SRC_COLOR, [vo]: s.SRC_ALPHA, [$h]: s.SRC_ALPHA_SATURATE, [qh]: s.DST_COLOR, [Xh]: s.DST_ALPHA, [Wh]: s.ONE_MINUS_SRC_COLOR, [xo]: s.ONE_MINUS_SRC_ALPHA, [jh]: s.ONE_MINUS_DST_COLOR, [Yh]: s.ONE_MINUS_DST_ALPHA, [Kh]: s.CONSTANT_COLOR, [Zh]: s.ONE_MINUS_CONSTANT_COLOR, [Jh]: s.CONSTANT_ALPHA, [Qh]: s.ONE_MINUS_CONSTANT_ALPHA };
  function T(D, ht, W, $, pt, dt, kt, ue, Se, ne) {
    if (D === kn) {
      _ === true && (Tt(s.BLEND), _ = false);
      return;
    }
    if (_ === false && (ot(s.BLEND), _ = true), D !== Fh) {
      if (D !== m || ne !== E) {
        if ((p !== si || x !== si) && (s.blendEquation(s.FUNC_ADD), p = si, x = si), ne) switch (D) {
          case Ui:
            s.blendFuncSeparate(s.ONE, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA);
            break;
          case ja:
            s.blendFunc(s.ONE, s.ONE);
            break;
          case $a:
            s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
            break;
          case Ka:
            s.blendFuncSeparate(s.ZERO, s.SRC_COLOR, s.ZERO, s.SRC_ALPHA);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", D);
            break;
        }
        else switch (D) {
          case Ui:
            s.blendFuncSeparate(s.SRC_ALPHA, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA);
            break;
          case ja:
            s.blendFunc(s.SRC_ALPHA, s.ONE);
            break;
          case $a:
            s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
            break;
          case Ka:
            s.blendFunc(s.ZERO, s.SRC_COLOR);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", D);
            break;
        }
        b = null, S = null, L = null, R = null, C.set(0, 0, 0), I = 0, m = D, E = ne;
      }
      return;
    }
    pt = pt || ht, dt = dt || W, kt = kt || $, (ht !== p || pt !== x) && (s.blendEquationSeparate(K[ht], K[pt]), p = ht, x = pt), (W !== b || $ !== S || dt !== L || kt !== R) && (s.blendFuncSeparate(it[W], it[$], it[dt], it[kt]), b = W, S = $, L = dt, R = kt), (ue.equals(C) === false || Se !== I) && (s.blendColor(ue.r, ue.g, ue.b, Se), C.copy(ue), I = Se), m = D, E = false;
  }
  function bt(D, ht) {
    D.side === an ? Tt(s.CULL_FACE) : ot(s.CULL_FACE);
    let W = D.side === Fe;
    ht && (W = !W), J(W), D.blending === Ui && D.transparent === false ? T(kn) : T(D.blending, D.blendEquation, D.blendSrc, D.blendDst, D.blendEquationAlpha, D.blendSrcAlpha, D.blendDstAlpha, D.blendColor, D.blendAlpha, D.premultipliedAlpha), o.setFunc(D.depthFunc), o.setTest(D.depthTest), o.setMask(D.depthWrite), r.setMask(D.colorWrite);
    const $ = D.stencilWrite;
    a.setTest($), $ && (a.setMask(D.stencilWriteMask), a.setFunc(D.stencilFunc, D.stencilRef, D.stencilFuncMask), a.setOp(D.stencilFail, D.stencilZFail, D.stencilZPass)), Pt(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits), D.alphaToCoverage === true ? ot(s.SAMPLE_ALPHA_TO_COVERAGE) : Tt(s.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function J(D) {
    y !== D && (D ? s.frontFace(s.CW) : s.frontFace(s.CCW), y = D);
  }
  function _t(D) {
    D !== Dh ? (ot(s.CULL_FACE), D !== P && (D === qa ? s.cullFace(s.BACK) : D === Nh ? s.cullFace(s.FRONT) : s.cullFace(s.FRONT_AND_BACK))) : Tt(s.CULL_FACE), P = D;
  }
  function rt(D) {
    D !== V && (H && s.lineWidth(D), V = D);
  }
  function Pt(D, ht, W) {
    D ? (ot(s.POLYGON_OFFSET_FILL), (O !== ht || z !== W) && (s.polygonOffset(ht, W), O = ht, z = W)) : Tt(s.POLYGON_OFFSET_FILL);
  }
  function ft(D) {
    D ? ot(s.SCISSOR_TEST) : Tt(s.SCISSOR_TEST);
  }
  function A(D) {
    D === void 0 && (D = s.TEXTURE0 + j - 1), at !== D && (s.activeTexture(D), at = D);
  }
  function v(D, ht, W) {
    W === void 0 && (at === null ? W = s.TEXTURE0 + j - 1 : W = at);
    let $ = mt[W];
    $ === void 0 && ($ = { type: void 0, texture: void 0 }, mt[W] = $), ($.type !== D || $.texture !== ht) && (at !== W && (s.activeTexture(W), at = W), s.bindTexture(D, ht || Et[D]), $.type = D, $.texture = ht);
  }
  function F() {
    const D = mt[at];
    D !== void 0 && D.type !== void 0 && (s.bindTexture(D.type, null), D.type = void 0, D.texture = void 0);
  }
  function X() {
    try {
      s.compressedTexImage2D.apply(s, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Z() {
    try {
      s.compressedTexImage3D.apply(s, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Y() {
    try {
      s.texSubImage2D.apply(s, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function At() {
    try {
      s.texSubImage3D.apply(s, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function ct() {
    try {
      s.compressedTexSubImage2D.apply(s, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function gt() {
    try {
      s.compressedTexSubImage3D.apply(s, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Xt() {
    try {
      s.texStorage2D.apply(s, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function et() {
    try {
      s.texStorage3D.apply(s, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function xt() {
    try {
      s.texImage2D.apply(s, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Ct() {
    try {
      s.texImage3D.apply(s, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Dt(D) {
    Jt.equals(D) === false && (s.scissor(D.x, D.y, D.z, D.w), Jt.copy(D));
  }
  function yt(D) {
    q.equals(D) === false && (s.viewport(D.x, D.y, D.z, D.w), q.copy(D));
  }
  function Yt(D, ht) {
    let W = c.get(ht);
    W === void 0 && (W = /* @__PURE__ */ new WeakMap(), c.set(ht, W));
    let $ = W.get(D);
    $ === void 0 && ($ = s.getUniformBlockIndex(ht, D.name), W.set(D, $));
  }
  function Vt(D, ht) {
    const $ = c.get(ht).get(D);
    l.get(ht) !== $ && (s.uniformBlockBinding(ht, $, D.__bindingPointIndex), l.set(ht, $));
  }
  function oe() {
    s.disable(s.BLEND), s.disable(s.CULL_FACE), s.disable(s.DEPTH_TEST), s.disable(s.POLYGON_OFFSET_FILL), s.disable(s.SCISSOR_TEST), s.disable(s.STENCIL_TEST), s.disable(s.SAMPLE_ALPHA_TO_COVERAGE), s.blendEquation(s.FUNC_ADD), s.blendFunc(s.ONE, s.ZERO), s.blendFuncSeparate(s.ONE, s.ZERO, s.ONE, s.ZERO), s.blendColor(0, 0, 0, 0), s.colorMask(true, true, true, true), s.clearColor(0, 0, 0, 0), s.depthMask(true), s.depthFunc(s.LESS), o.setReversed(false), s.clearDepth(1), s.stencilMask(4294967295), s.stencilFunc(s.ALWAYS, 0, 4294967295), s.stencilOp(s.KEEP, s.KEEP, s.KEEP), s.clearStencil(0), s.cullFace(s.BACK), s.frontFace(s.CCW), s.polygonOffset(0, 0), s.activeTexture(s.TEXTURE0), s.bindFramebuffer(s.FRAMEBUFFER, null), s.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), s.bindFramebuffer(s.READ_FRAMEBUFFER, null), s.useProgram(null), s.lineWidth(1), s.scissor(0, 0, s.canvas.width, s.canvas.height), s.viewport(0, 0, s.canvas.width, s.canvas.height), h = {}, at = null, mt = {}, u = {}, d = /* @__PURE__ */ new WeakMap(), f = [], g = null, _ = false, m = null, p = null, b = null, S = null, x = null, L = null, R = null, C = new It(0, 0, 0), I = 0, E = false, y = null, P = null, V = null, O = null, z = null, Jt.set(0, 0, s.canvas.width, s.canvas.height), q.set(0, 0, s.canvas.width, s.canvas.height), r.reset(), o.reset(), a.reset();
  }
  return { buffers: { color: r, depth: o, stencil: a }, enable: ot, disable: Tt, bindFramebuffer: Ut, drawBuffers: Lt, useProgram: jt, setBlending: T, setMaterial: bt, setFlipSided: J, setCullFace: _t, setLineWidth: rt, setPolygonOffset: Pt, setScissorTest: ft, activeTexture: A, bindTexture: v, unbindTexture: F, compressedTexImage2D: X, compressedTexImage3D: Z, texImage2D: xt, texImage3D: Ct, updateUBOMapping: Yt, uniformBlockBinding: Vt, texStorage2D: Xt, texStorage3D: et, texSubImage2D: Y, texSubImage3D: At, compressedTexSubImage2D: ct, compressedTexSubImage3D: gt, scissor: Dt, viewport: yt, reset: oe };
}
function mv(s, t, e, n, i, r, o) {
  const a = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), c = new Q(), h = /* @__PURE__ */ new WeakMap();
  let u;
  const d = /* @__PURE__ */ new WeakMap();
  let f = false;
  try {
    f = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch (e2) {
  }
  function g(A, v) {
    return f ? new OffscreenCanvas(A, v) : Ss("canvas");
  }
  function _(A, v, F) {
    let X = 1;
    const Z = ft(A);
    if ((Z.width > F || Z.height > F) && (X = F / Math.max(Z.width, Z.height)), X < 1) if (typeof HTMLImageElement < "u" && A instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && A instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && A instanceof ImageBitmap || typeof VideoFrame < "u" && A instanceof VideoFrame) {
      const Y = Math.floor(X * Z.width), At = Math.floor(X * Z.height);
      u === void 0 && (u = g(Y, At));
      const ct = v ? g(Y, At) : u;
      return ct.width = Y, ct.height = At, ct.getContext("2d").drawImage(A, 0, 0, Y, At), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + Z.width + "x" + Z.height + ") to (" + Y + "x" + At + ")."), ct;
    } else return "data" in A && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + Z.width + "x" + Z.height + ")."), A;
    return A;
  }
  function m(A) {
    return A.generateMipmaps;
  }
  function p(A) {
    s.generateMipmap(A);
  }
  function b(A) {
    return A.isWebGLCubeRenderTarget ? s.TEXTURE_CUBE_MAP : A.isWebGL3DRenderTarget ? s.TEXTURE_3D : A.isWebGLArrayRenderTarget || A.isCompressedArrayTexture ? s.TEXTURE_2D_ARRAY : s.TEXTURE_2D;
  }
  function S(A, v, F, X, Z = false) {
    if (A !== null) {
      if (s[A] !== void 0) return s[A];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + A + "'");
    }
    let Y = v;
    if (v === s.RED && (F === s.FLOAT && (Y = s.R32F), F === s.HALF_FLOAT && (Y = s.R16F), F === s.UNSIGNED_BYTE && (Y = s.R8)), v === s.RED_INTEGER && (F === s.UNSIGNED_BYTE && (Y = s.R8UI), F === s.UNSIGNED_SHORT && (Y = s.R16UI), F === s.UNSIGNED_INT && (Y = s.R32UI), F === s.BYTE && (Y = s.R8I), F === s.SHORT && (Y = s.R16I), F === s.INT && (Y = s.R32I)), v === s.RG && (F === s.FLOAT && (Y = s.RG32F), F === s.HALF_FLOAT && (Y = s.RG16F), F === s.UNSIGNED_BYTE && (Y = s.RG8)), v === s.RG_INTEGER && (F === s.UNSIGNED_BYTE && (Y = s.RG8UI), F === s.UNSIGNED_SHORT && (Y = s.RG16UI), F === s.UNSIGNED_INT && (Y = s.RG32UI), F === s.BYTE && (Y = s.RG8I), F === s.SHORT && (Y = s.RG16I), F === s.INT && (Y = s.RG32I)), v === s.RGB_INTEGER && (F === s.UNSIGNED_BYTE && (Y = s.RGB8UI), F === s.UNSIGNED_SHORT && (Y = s.RGB16UI), F === s.UNSIGNED_INT && (Y = s.RGB32UI), F === s.BYTE && (Y = s.RGB8I), F === s.SHORT && (Y = s.RGB16I), F === s.INT && (Y = s.RGB32I)), v === s.RGBA_INTEGER && (F === s.UNSIGNED_BYTE && (Y = s.RGBA8UI), F === s.UNSIGNED_SHORT && (Y = s.RGBA16UI), F === s.UNSIGNED_INT && (Y = s.RGBA32UI), F === s.BYTE && (Y = s.RGBA8I), F === s.SHORT && (Y = s.RGBA16I), F === s.INT && (Y = s.RGBA32I)), v === s.RGB && F === s.UNSIGNED_INT_5_9_9_9_REV && (Y = s.RGB9_E5), v === s.RGBA) {
      const At = Z ? yr : qt.getTransfer(X);
      F === s.FLOAT && (Y = s.RGBA32F), F === s.HALF_FLOAT && (Y = s.RGBA16F), F === s.UNSIGNED_BYTE && (Y = At === se ? s.SRGB8_ALPHA8 : s.RGBA8), F === s.UNSIGNED_SHORT_4_4_4_4 && (Y = s.RGBA4), F === s.UNSIGNED_SHORT_5_5_5_1 && (Y = s.RGB5_A1);
    }
    return (Y === s.R16F || Y === s.R32F || Y === s.RG16F || Y === s.RG32F || Y === s.RGBA16F || Y === s.RGBA32F) && t.get("EXT_color_buffer_float"), Y;
  }
  function x(A, v) {
    let F;
    return A ? v === null || v === li || v === Gi ? F = s.DEPTH24_STENCIL8 : v === nn ? F = s.DEPTH32F_STENCIL8 : v === xs && (F = s.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : v === null || v === li || v === Gi ? F = s.DEPTH_COMPONENT24 : v === nn ? F = s.DEPTH_COMPONENT32F : v === xs && (F = s.DEPTH_COMPONENT16), F;
  }
  function L(A, v) {
    return m(A) === true || A.isFramebufferTexture && A.minFilter !== Ce && A.minFilter !== ze ? Math.log2(Math.max(v.width, v.height)) + 1 : A.mipmaps !== void 0 && A.mipmaps.length > 0 ? A.mipmaps.length : A.isCompressedTexture && Array.isArray(A.image) ? v.mipmaps.length : 1;
  }
  function R(A) {
    const v = A.target;
    v.removeEventListener("dispose", R), I(v), v.isVideoTexture && h.delete(v);
  }
  function C(A) {
    const v = A.target;
    v.removeEventListener("dispose", C), y(v);
  }
  function I(A) {
    const v = n.get(A);
    if (v.__webglInit === void 0) return;
    const F = A.source, X = d.get(F);
    if (X) {
      const Z = X[v.__cacheKey];
      Z.usedTimes--, Z.usedTimes === 0 && E(A), Object.keys(X).length === 0 && d.delete(F);
    }
    n.remove(A);
  }
  function E(A) {
    const v = n.get(A);
    s.deleteTexture(v.__webglTexture);
    const F = A.source, X = d.get(F);
    delete X[v.__cacheKey], o.memory.textures--;
  }
  function y(A) {
    const v = n.get(A);
    if (A.depthTexture && (A.depthTexture.dispose(), n.remove(A.depthTexture)), A.isWebGLCubeRenderTarget) for (let X = 0; X < 6; X++) {
      if (Array.isArray(v.__webglFramebuffer[X])) for (let Z = 0; Z < v.__webglFramebuffer[X].length; Z++) s.deleteFramebuffer(v.__webglFramebuffer[X][Z]);
      else s.deleteFramebuffer(v.__webglFramebuffer[X]);
      v.__webglDepthbuffer && s.deleteRenderbuffer(v.__webglDepthbuffer[X]);
    }
    else {
      if (Array.isArray(v.__webglFramebuffer)) for (let X = 0; X < v.__webglFramebuffer.length; X++) s.deleteFramebuffer(v.__webglFramebuffer[X]);
      else s.deleteFramebuffer(v.__webglFramebuffer);
      if (v.__webglDepthbuffer && s.deleteRenderbuffer(v.__webglDepthbuffer), v.__webglMultisampledFramebuffer && s.deleteFramebuffer(v.__webglMultisampledFramebuffer), v.__webglColorRenderbuffer) for (let X = 0; X < v.__webglColorRenderbuffer.length; X++) v.__webglColorRenderbuffer[X] && s.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);
      v.__webglDepthRenderbuffer && s.deleteRenderbuffer(v.__webglDepthRenderbuffer);
    }
    const F = A.textures;
    for (let X = 0, Z = F.length; X < Z; X++) {
      const Y = n.get(F[X]);
      Y.__webglTexture && (s.deleteTexture(Y.__webglTexture), o.memory.textures--), n.remove(F[X]);
    }
    n.remove(A);
  }
  let P = 0;
  function V() {
    P = 0;
  }
  function O() {
    const A = P;
    return A >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + A + " texture units while this GPU supports only " + i.maxTextures), P += 1, A;
  }
  function z(A) {
    const v = [];
    return v.push(A.wrapS), v.push(A.wrapT), v.push(A.wrapR || 0), v.push(A.magFilter), v.push(A.minFilter), v.push(A.anisotropy), v.push(A.internalFormat), v.push(A.format), v.push(A.type), v.push(A.generateMipmaps), v.push(A.premultiplyAlpha), v.push(A.flipY), v.push(A.unpackAlignment), v.push(A.colorSpace), v.join();
  }
  function j(A, v) {
    const F = n.get(A);
    if (A.isVideoTexture && rt(A), A.isRenderTargetTexture === false && A.version > 0 && F.__version !== A.version) {
      const X = A.image;
      if (X === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (X.complete === false) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        q(F, A, v);
        return;
      }
    }
    e.bindTexture(s.TEXTURE_2D, F.__webglTexture, s.TEXTURE0 + v);
  }
  function H(A, v) {
    const F = n.get(A);
    if (A.version > 0 && F.__version !== A.version) {
      q(F, A, v);
      return;
    }
    e.bindTexture(s.TEXTURE_2D_ARRAY, F.__webglTexture, s.TEXTURE0 + v);
  }
  function nt(A, v) {
    const F = n.get(A);
    if (A.version > 0 && F.__version !== A.version) {
      q(F, A, v);
      return;
    }
    e.bindTexture(s.TEXTURE_3D, F.__webglTexture, s.TEXTURE0 + v);
  }
  function G(A, v) {
    const F = n.get(A);
    if (A.version > 0 && F.__version !== A.version) {
      st(F, A, v);
      return;
    }
    e.bindTexture(s.TEXTURE_CUBE_MAP, F.__webglTexture, s.TEXTURE0 + v);
  }
  const at = { [Vi]: s.REPEAT, [On]: s.CLAMP_TO_EDGE, [vr]: s.MIRRORED_REPEAT }, mt = { [Ce]: s.NEAREST, [Rc]: s.NEAREST_MIPMAP_NEAREST, [ds]: s.NEAREST_MIPMAP_LINEAR, [ze]: s.LINEAR, [hr]: s.LINEAR_MIPMAP_NEAREST, [Sn]: s.LINEAR_MIPMAP_LINEAR }, Mt = { [vu]: s.NEVER, [Au]: s.ALWAYS, [xu]: s.LESS, [kc]: s.LEQUAL, [yu]: s.EQUAL, [Eu]: s.GEQUAL, [Mu]: s.GREATER, [Su]: s.NOTEQUAL };
  function Bt(A, v) {
    if (v.type === nn && t.has("OES_texture_float_linear") === false && (v.magFilter === ze || v.magFilter === hr || v.magFilter === ds || v.magFilter === Sn || v.minFilter === ze || v.minFilter === hr || v.minFilter === ds || v.minFilter === Sn) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), s.texParameteri(A, s.TEXTURE_WRAP_S, at[v.wrapS]), s.texParameteri(A, s.TEXTURE_WRAP_T, at[v.wrapT]), (A === s.TEXTURE_3D || A === s.TEXTURE_2D_ARRAY) && s.texParameteri(A, s.TEXTURE_WRAP_R, at[v.wrapR]), s.texParameteri(A, s.TEXTURE_MAG_FILTER, mt[v.magFilter]), s.texParameteri(A, s.TEXTURE_MIN_FILTER, mt[v.minFilter]), v.compareFunction && (s.texParameteri(A, s.TEXTURE_COMPARE_MODE, s.COMPARE_REF_TO_TEXTURE), s.texParameteri(A, s.TEXTURE_COMPARE_FUNC, Mt[v.compareFunction])), t.has("EXT_texture_filter_anisotropic") === true) {
      if (v.magFilter === Ce || v.minFilter !== ds && v.minFilter !== Sn || v.type === nn && t.has("OES_texture_float_linear") === false) return;
      if (v.anisotropy > 1 || n.get(v).__currentAnisotropy) {
        const F = t.get("EXT_texture_filter_anisotropic");
        s.texParameterf(A, F.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(v.anisotropy, i.getMaxAnisotropy())), n.get(v).__currentAnisotropy = v.anisotropy;
      }
    }
  }
  function Jt(A, v) {
    let F = false;
    A.__webglInit === void 0 && (A.__webglInit = true, v.addEventListener("dispose", R));
    const X = v.source;
    let Z = d.get(X);
    Z === void 0 && (Z = {}, d.set(X, Z));
    const Y = z(v);
    if (Y !== A.__cacheKey) {
      Z[Y] === void 0 && (Z[Y] = { texture: s.createTexture(), usedTimes: 0 }, o.memory.textures++, F = true), Z[Y].usedTimes++;
      const At = Z[A.__cacheKey];
      At !== void 0 && (Z[A.__cacheKey].usedTimes--, At.usedTimes === 0 && E(v)), A.__cacheKey = Y, A.__webglTexture = Z[Y].texture;
    }
    return F;
  }
  function q(A, v, F) {
    let X = s.TEXTURE_2D;
    (v.isDataArrayTexture || v.isCompressedArrayTexture) && (X = s.TEXTURE_2D_ARRAY), v.isData3DTexture && (X = s.TEXTURE_3D);
    const Z = Jt(A, v), Y = v.source;
    e.bindTexture(X, A.__webglTexture, s.TEXTURE0 + F);
    const At = n.get(Y);
    if (Y.version !== At.__version || Z === true) {
      e.activeTexture(s.TEXTURE0 + F);
      const ct = qt.getPrimaries(qt.workingColorSpace), gt = v.colorSpace === Fn ? null : qt.getPrimaries(v.colorSpace), Xt = v.colorSpace === Fn || ct === gt ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, v.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, v.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, Xt);
      let et = _(v.image, false, i.maxTextureSize);
      et = Pt(v, et);
      const xt = r.convert(v.format, v.colorSpace), Ct = r.convert(v.type);
      let Dt = S(v.internalFormat, xt, Ct, v.colorSpace, v.isVideoTexture);
      Bt(X, v);
      let yt;
      const Yt = v.mipmaps, Vt = v.isVideoTexture !== true, oe = At.__version === void 0 || Z === true, D = Y.dataReady, ht = L(v, et);
      if (v.isDepthTexture) Dt = x(v.format === Wi, v.type), oe && (Vt ? e.texStorage2D(s.TEXTURE_2D, 1, Dt, et.width, et.height) : e.texImage2D(s.TEXTURE_2D, 0, Dt, et.width, et.height, 0, xt, Ct, null));
      else if (v.isDataTexture) if (Yt.length > 0) {
        Vt && oe && e.texStorage2D(s.TEXTURE_2D, ht, Dt, Yt[0].width, Yt[0].height);
        for (let W = 0, $ = Yt.length; W < $; W++) yt = Yt[W], Vt ? D && e.texSubImage2D(s.TEXTURE_2D, W, 0, 0, yt.width, yt.height, xt, Ct, yt.data) : e.texImage2D(s.TEXTURE_2D, W, Dt, yt.width, yt.height, 0, xt, Ct, yt.data);
        v.generateMipmaps = false;
      } else Vt ? (oe && e.texStorage2D(s.TEXTURE_2D, ht, Dt, et.width, et.height), D && e.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, et.width, et.height, xt, Ct, et.data)) : e.texImage2D(s.TEXTURE_2D, 0, Dt, et.width, et.height, 0, xt, Ct, et.data);
      else if (v.isCompressedTexture) if (v.isCompressedArrayTexture) {
        Vt && oe && e.texStorage3D(s.TEXTURE_2D_ARRAY, ht, Dt, Yt[0].width, Yt[0].height, et.depth);
        for (let W = 0, $ = Yt.length; W < $; W++) if (yt = Yt[W], v.format !== qe) if (xt !== null) if (Vt) {
          if (D) if (v.layerUpdates.size > 0) {
            const pt = ql(yt.width, yt.height, v.format, v.type);
            for (const dt of v.layerUpdates) {
              const kt = yt.data.subarray(dt * pt / yt.data.BYTES_PER_ELEMENT, (dt + 1) * pt / yt.data.BYTES_PER_ELEMENT);
              e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY, W, 0, 0, dt, yt.width, yt.height, 1, xt, kt);
            }
            v.clearLayerUpdates();
          } else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY, W, 0, 0, 0, yt.width, yt.height, et.depth, xt, yt.data);
        } else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY, W, Dt, yt.width, yt.height, et.depth, 0, yt.data, 0, 0);
        else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
        else Vt ? D && e.texSubImage3D(s.TEXTURE_2D_ARRAY, W, 0, 0, 0, yt.width, yt.height, et.depth, xt, Ct, yt.data) : e.texImage3D(s.TEXTURE_2D_ARRAY, W, Dt, yt.width, yt.height, et.depth, 0, xt, Ct, yt.data);
      } else {
        Vt && oe && e.texStorage2D(s.TEXTURE_2D, ht, Dt, Yt[0].width, Yt[0].height);
        for (let W = 0, $ = Yt.length; W < $; W++) yt = Yt[W], v.format !== qe ? xt !== null ? Vt ? D && e.compressedTexSubImage2D(s.TEXTURE_2D, W, 0, 0, yt.width, yt.height, xt, yt.data) : e.compressedTexImage2D(s.TEXTURE_2D, W, Dt, yt.width, yt.height, 0, yt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Vt ? D && e.texSubImage2D(s.TEXTURE_2D, W, 0, 0, yt.width, yt.height, xt, Ct, yt.data) : e.texImage2D(s.TEXTURE_2D, W, Dt, yt.width, yt.height, 0, xt, Ct, yt.data);
      }
      else if (v.isDataArrayTexture) if (Vt) {
        if (oe && e.texStorage3D(s.TEXTURE_2D_ARRAY, ht, Dt, et.width, et.height, et.depth), D) if (v.layerUpdates.size > 0) {
          const W = ql(et.width, et.height, v.format, v.type);
          for (const $ of v.layerUpdates) {
            const pt = et.data.subarray($ * W / et.data.BYTES_PER_ELEMENT, ($ + 1) * W / et.data.BYTES_PER_ELEMENT);
            e.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, $, et.width, et.height, 1, xt, Ct, pt);
          }
          v.clearLayerUpdates();
        } else e.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, 0, et.width, et.height, et.depth, xt, Ct, et.data);
      } else e.texImage3D(s.TEXTURE_2D_ARRAY, 0, Dt, et.width, et.height, et.depth, 0, xt, Ct, et.data);
      else if (v.isData3DTexture) Vt ? (oe && e.texStorage3D(s.TEXTURE_3D, ht, Dt, et.width, et.height, et.depth), D && e.texSubImage3D(s.TEXTURE_3D, 0, 0, 0, 0, et.width, et.height, et.depth, xt, Ct, et.data)) : e.texImage3D(s.TEXTURE_3D, 0, Dt, et.width, et.height, et.depth, 0, xt, Ct, et.data);
      else if (v.isFramebufferTexture) {
        if (oe) if (Vt) e.texStorage2D(s.TEXTURE_2D, ht, Dt, et.width, et.height);
        else {
          let W = et.width, $ = et.height;
          for (let pt = 0; pt < ht; pt++) e.texImage2D(s.TEXTURE_2D, pt, Dt, W, $, 0, xt, Ct, null), W >>= 1, $ >>= 1;
        }
      } else if (Yt.length > 0) {
        if (Vt && oe) {
          const W = ft(Yt[0]);
          e.texStorage2D(s.TEXTURE_2D, ht, Dt, W.width, W.height);
        }
        for (let W = 0, $ = Yt.length; W < $; W++) yt = Yt[W], Vt ? D && e.texSubImage2D(s.TEXTURE_2D, W, 0, 0, xt, Ct, yt) : e.texImage2D(s.TEXTURE_2D, W, Dt, xt, Ct, yt);
        v.generateMipmaps = false;
      } else if (Vt) {
        if (oe) {
          const W = ft(et);
          e.texStorage2D(s.TEXTURE_2D, ht, Dt, W.width, W.height);
        }
        D && e.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, xt, Ct, et);
      } else e.texImage2D(s.TEXTURE_2D, 0, Dt, xt, Ct, et);
      m(v) && p(X), At.__version = Y.version, v.onUpdate && v.onUpdate(v);
    }
    A.__version = v.version;
  }
  function st(A, v, F) {
    if (v.image.length !== 6) return;
    const X = Jt(A, v), Z = v.source;
    e.bindTexture(s.TEXTURE_CUBE_MAP, A.__webglTexture, s.TEXTURE0 + F);
    const Y = n.get(Z);
    if (Z.version !== Y.__version || X === true) {
      e.activeTexture(s.TEXTURE0 + F);
      const At = qt.getPrimaries(qt.workingColorSpace), ct = v.colorSpace === Fn ? null : qt.getPrimaries(v.colorSpace), gt = v.colorSpace === Fn || At === ct ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, v.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, v.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, gt);
      const Xt = v.isCompressedTexture || v.image[0].isCompressedTexture, et = v.image[0] && v.image[0].isDataTexture, xt = [];
      for (let $ = 0; $ < 6; $++) !Xt && !et ? xt[$] = _(v.image[$], true, i.maxCubemapSize) : xt[$] = et ? v.image[$].image : v.image[$], xt[$] = Pt(v, xt[$]);
      const Ct = xt[0], Dt = r.convert(v.format, v.colorSpace), yt = r.convert(v.type), Yt = S(v.internalFormat, Dt, yt, v.colorSpace), Vt = v.isVideoTexture !== true, oe = Y.__version === void 0 || X === true, D = Z.dataReady;
      let ht = L(v, Ct);
      Bt(s.TEXTURE_CUBE_MAP, v);
      let W;
      if (Xt) {
        Vt && oe && e.texStorage2D(s.TEXTURE_CUBE_MAP, ht, Yt, Ct.width, Ct.height);
        for (let $ = 0; $ < 6; $++) {
          W = xt[$].mipmaps;
          for (let pt = 0; pt < W.length; pt++) {
            const dt = W[pt];
            v.format !== qe ? Dt !== null ? Vt ? D && e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + $, pt, 0, 0, dt.width, dt.height, Dt, dt.data) : e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + $, pt, Yt, dt.width, dt.height, 0, dt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Vt ? D && e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + $, pt, 0, 0, dt.width, dt.height, Dt, yt, dt.data) : e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + $, pt, Yt, dt.width, dt.height, 0, Dt, yt, dt.data);
          }
        }
      } else {
        if (W = v.mipmaps, Vt && oe) {
          W.length > 0 && ht++;
          const $ = ft(xt[0]);
          e.texStorage2D(s.TEXTURE_CUBE_MAP, ht, Yt, $.width, $.height);
        }
        for (let $ = 0; $ < 6; $++) if (et) {
          Vt ? D && e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, 0, 0, xt[$].width, xt[$].height, Dt, yt, xt[$].data) : e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, Yt, xt[$].width, xt[$].height, 0, Dt, yt, xt[$].data);
          for (let pt = 0; pt < W.length; pt++) {
            const kt = W[pt].image[$].image;
            Vt ? D && e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + $, pt + 1, 0, 0, kt.width, kt.height, Dt, yt, kt.data) : e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + $, pt + 1, Yt, kt.width, kt.height, 0, Dt, yt, kt.data);
          }
        } else {
          Vt ? D && e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, 0, 0, Dt, yt, xt[$]) : e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, Yt, Dt, yt, xt[$]);
          for (let pt = 0; pt < W.length; pt++) {
            const dt = W[pt];
            Vt ? D && e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + $, pt + 1, 0, 0, Dt, yt, dt.image[$]) : e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + $, pt + 1, Yt, Dt, yt, dt.image[$]);
          }
        }
      }
      m(v) && p(s.TEXTURE_CUBE_MAP), Y.__version = Z.version, v.onUpdate && v.onUpdate(v);
    }
    A.__version = v.version;
  }
  function Et(A, v, F, X, Z, Y) {
    const At = r.convert(F.format, F.colorSpace), ct = r.convert(F.type), gt = S(F.internalFormat, At, ct, F.colorSpace), Xt = n.get(v), et = n.get(F);
    if (et.__renderTarget = v, !Xt.__hasExternalTextures) {
      const xt = Math.max(1, v.width >> Y), Ct = Math.max(1, v.height >> Y);
      Z === s.TEXTURE_3D || Z === s.TEXTURE_2D_ARRAY ? e.texImage3D(Z, Y, gt, xt, Ct, v.depth, 0, At, ct, null) : e.texImage2D(Z, Y, gt, xt, Ct, 0, At, ct, null);
    }
    e.bindFramebuffer(s.FRAMEBUFFER, A), _t(v) ? a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, X, Z, et.__webglTexture, 0, J(v)) : (Z === s.TEXTURE_2D || Z >= s.TEXTURE_CUBE_MAP_POSITIVE_X && Z <= s.TEXTURE_CUBE_MAP_NEGATIVE_Z) && s.framebufferTexture2D(s.FRAMEBUFFER, X, Z, et.__webglTexture, Y), e.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function ot(A, v, F) {
    if (s.bindRenderbuffer(s.RENDERBUFFER, A), v.depthBuffer) {
      const X = v.depthTexture, Z = X && X.isDepthTexture ? X.type : null, Y = x(v.stencilBuffer, Z), At = v.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, ct = J(v);
      _t(v) ? a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, ct, Y, v.width, v.height) : F ? s.renderbufferStorageMultisample(s.RENDERBUFFER, ct, Y, v.width, v.height) : s.renderbufferStorage(s.RENDERBUFFER, Y, v.width, v.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, At, s.RENDERBUFFER, A);
    } else {
      const X = v.textures;
      for (let Z = 0; Z < X.length; Z++) {
        const Y = X[Z], At = r.convert(Y.format, Y.colorSpace), ct = r.convert(Y.type), gt = S(Y.internalFormat, At, ct, Y.colorSpace), Xt = J(v);
        F && _t(v) === false ? s.renderbufferStorageMultisample(s.RENDERBUFFER, Xt, gt, v.width, v.height) : _t(v) ? a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, Xt, gt, v.width, v.height) : s.renderbufferStorage(s.RENDERBUFFER, gt, v.width, v.height);
      }
    }
    s.bindRenderbuffer(s.RENDERBUFFER, null);
  }
  function Tt(A, v) {
    if (v && v.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (e.bindFramebuffer(s.FRAMEBUFFER, A), !(v.depthTexture && v.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const X = n.get(v.depthTexture);
    X.__renderTarget = v, (!X.__webglTexture || v.depthTexture.image.width !== v.width || v.depthTexture.image.height !== v.height) && (v.depthTexture.image.width = v.width, v.depthTexture.image.height = v.height, v.depthTexture.needsUpdate = true), j(v.depthTexture, 0);
    const Z = X.__webglTexture, Y = J(v);
    if (v.depthTexture.format === Fi) _t(v) ? a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, Z, 0, Y) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, Z, 0);
    else if (v.depthTexture.format === Wi) _t(v) ? a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, Z, 0, Y) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, Z, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function Ut(A) {
    const v = n.get(A), F = A.isWebGLCubeRenderTarget === true;
    if (v.__boundDepthTexture !== A.depthTexture) {
      const X = A.depthTexture;
      if (v.__depthDisposeCallback && v.__depthDisposeCallback(), X) {
        const Z = () => {
          delete v.__boundDepthTexture, delete v.__depthDisposeCallback, X.removeEventListener("dispose", Z);
        };
        X.addEventListener("dispose", Z), v.__depthDisposeCallback = Z;
      }
      v.__boundDepthTexture = X;
    }
    if (A.depthTexture && !v.__autoAllocateDepthBuffer) {
      if (F) throw new Error("target.depthTexture not supported in Cube render targets");
      Tt(v.__webglFramebuffer, A);
    } else if (F) {
      v.__webglDepthbuffer = [];
      for (let X = 0; X < 6; X++) if (e.bindFramebuffer(s.FRAMEBUFFER, v.__webglFramebuffer[X]), v.__webglDepthbuffer[X] === void 0) v.__webglDepthbuffer[X] = s.createRenderbuffer(), ot(v.__webglDepthbuffer[X], A, false);
      else {
        const Z = A.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, Y = v.__webglDepthbuffer[X];
        s.bindRenderbuffer(s.RENDERBUFFER, Y), s.framebufferRenderbuffer(s.FRAMEBUFFER, Z, s.RENDERBUFFER, Y);
      }
    } else if (e.bindFramebuffer(s.FRAMEBUFFER, v.__webglFramebuffer), v.__webglDepthbuffer === void 0) v.__webglDepthbuffer = s.createRenderbuffer(), ot(v.__webglDepthbuffer, A, false);
    else {
      const X = A.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, Z = v.__webglDepthbuffer;
      s.bindRenderbuffer(s.RENDERBUFFER, Z), s.framebufferRenderbuffer(s.FRAMEBUFFER, X, s.RENDERBUFFER, Z);
    }
    e.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function Lt(A, v, F) {
    const X = n.get(A);
    v !== void 0 && Et(X.__webglFramebuffer, A, A.texture, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, 0), F !== void 0 && Ut(A);
  }
  function jt(A) {
    const v = A.texture, F = n.get(A), X = n.get(v);
    A.addEventListener("dispose", C);
    const Z = A.textures, Y = A.isWebGLCubeRenderTarget === true, At = Z.length > 1;
    if (At || (X.__webglTexture === void 0 && (X.__webglTexture = s.createTexture()), X.__version = v.version, o.memory.textures++), Y) {
      F.__webglFramebuffer = [];
      for (let ct = 0; ct < 6; ct++) if (v.mipmaps && v.mipmaps.length > 0) {
        F.__webglFramebuffer[ct] = [];
        for (let gt = 0; gt < v.mipmaps.length; gt++) F.__webglFramebuffer[ct][gt] = s.createFramebuffer();
      } else F.__webglFramebuffer[ct] = s.createFramebuffer();
    } else {
      if (v.mipmaps && v.mipmaps.length > 0) {
        F.__webglFramebuffer = [];
        for (let ct = 0; ct < v.mipmaps.length; ct++) F.__webglFramebuffer[ct] = s.createFramebuffer();
      } else F.__webglFramebuffer = s.createFramebuffer();
      if (At) for (let ct = 0, gt = Z.length; ct < gt; ct++) {
        const Xt = n.get(Z[ct]);
        Xt.__webglTexture === void 0 && (Xt.__webglTexture = s.createTexture(), o.memory.textures++);
      }
      if (A.samples > 0 && _t(A) === false) {
        F.__webglMultisampledFramebuffer = s.createFramebuffer(), F.__webglColorRenderbuffer = [], e.bindFramebuffer(s.FRAMEBUFFER, F.__webglMultisampledFramebuffer);
        for (let ct = 0; ct < Z.length; ct++) {
          const gt = Z[ct];
          F.__webglColorRenderbuffer[ct] = s.createRenderbuffer(), s.bindRenderbuffer(s.RENDERBUFFER, F.__webglColorRenderbuffer[ct]);
          const Xt = r.convert(gt.format, gt.colorSpace), et = r.convert(gt.type), xt = S(gt.internalFormat, Xt, et, gt.colorSpace, A.isXRRenderTarget === true), Ct = J(A);
          s.renderbufferStorageMultisample(s.RENDERBUFFER, Ct, xt, A.width, A.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + ct, s.RENDERBUFFER, F.__webglColorRenderbuffer[ct]);
        }
        s.bindRenderbuffer(s.RENDERBUFFER, null), A.depthBuffer && (F.__webglDepthRenderbuffer = s.createRenderbuffer(), ot(F.__webglDepthRenderbuffer, A, true)), e.bindFramebuffer(s.FRAMEBUFFER, null);
      }
    }
    if (Y) {
      e.bindTexture(s.TEXTURE_CUBE_MAP, X.__webglTexture), Bt(s.TEXTURE_CUBE_MAP, v);
      for (let ct = 0; ct < 6; ct++) if (v.mipmaps && v.mipmaps.length > 0) for (let gt = 0; gt < v.mipmaps.length; gt++) Et(F.__webglFramebuffer[ct][gt], A, v, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + ct, gt);
      else Et(F.__webglFramebuffer[ct], A, v, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + ct, 0);
      m(v) && p(s.TEXTURE_CUBE_MAP), e.unbindTexture();
    } else if (At) {
      for (let ct = 0, gt = Z.length; ct < gt; ct++) {
        const Xt = Z[ct], et = n.get(Xt);
        e.bindTexture(s.TEXTURE_2D, et.__webglTexture), Bt(s.TEXTURE_2D, Xt), Et(F.__webglFramebuffer, A, Xt, s.COLOR_ATTACHMENT0 + ct, s.TEXTURE_2D, 0), m(Xt) && p(s.TEXTURE_2D);
      }
      e.unbindTexture();
    } else {
      let ct = s.TEXTURE_2D;
      if ((A.isWebGL3DRenderTarget || A.isWebGLArrayRenderTarget) && (ct = A.isWebGL3DRenderTarget ? s.TEXTURE_3D : s.TEXTURE_2D_ARRAY), e.bindTexture(ct, X.__webglTexture), Bt(ct, v), v.mipmaps && v.mipmaps.length > 0) for (let gt = 0; gt < v.mipmaps.length; gt++) Et(F.__webglFramebuffer[gt], A, v, s.COLOR_ATTACHMENT0, ct, gt);
      else Et(F.__webglFramebuffer, A, v, s.COLOR_ATTACHMENT0, ct, 0);
      m(v) && p(ct), e.unbindTexture();
    }
    A.depthBuffer && Ut(A);
  }
  function K(A) {
    const v = A.textures;
    for (let F = 0, X = v.length; F < X; F++) {
      const Z = v[F];
      if (m(Z)) {
        const Y = b(A), At = n.get(Z).__webglTexture;
        e.bindTexture(Y, At), p(Y), e.unbindTexture();
      }
    }
  }
  const it = [], T = [];
  function bt(A) {
    if (A.samples > 0) {
      if (_t(A) === false) {
        const v = A.textures, F = A.width, X = A.height;
        let Z = s.COLOR_BUFFER_BIT;
        const Y = A.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, At = n.get(A), ct = v.length > 1;
        if (ct) for (let gt = 0; gt < v.length; gt++) e.bindFramebuffer(s.FRAMEBUFFER, At.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + gt, s.RENDERBUFFER, null), e.bindFramebuffer(s.FRAMEBUFFER, At.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + gt, s.TEXTURE_2D, null, 0);
        e.bindFramebuffer(s.READ_FRAMEBUFFER, At.__webglMultisampledFramebuffer), e.bindFramebuffer(s.DRAW_FRAMEBUFFER, At.__webglFramebuffer);
        for (let gt = 0; gt < v.length; gt++) {
          if (A.resolveDepthBuffer && (A.depthBuffer && (Z |= s.DEPTH_BUFFER_BIT), A.stencilBuffer && A.resolveStencilBuffer && (Z |= s.STENCIL_BUFFER_BIT)), ct) {
            s.framebufferRenderbuffer(s.READ_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.RENDERBUFFER, At.__webglColorRenderbuffer[gt]);
            const Xt = n.get(v[gt]).__webglTexture;
            s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, Xt, 0);
          }
          s.blitFramebuffer(0, 0, F, X, 0, 0, F, X, Z, s.NEAREST), l === true && (it.length = 0, T.length = 0, it.push(s.COLOR_ATTACHMENT0 + gt), A.depthBuffer && A.resolveDepthBuffer === false && (it.push(Y), T.push(Y), s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, T)), s.invalidateFramebuffer(s.READ_FRAMEBUFFER, it));
        }
        if (e.bindFramebuffer(s.READ_FRAMEBUFFER, null), e.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), ct) for (let gt = 0; gt < v.length; gt++) {
          e.bindFramebuffer(s.FRAMEBUFFER, At.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + gt, s.RENDERBUFFER, At.__webglColorRenderbuffer[gt]);
          const Xt = n.get(v[gt]).__webglTexture;
          e.bindFramebuffer(s.FRAMEBUFFER, At.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + gt, s.TEXTURE_2D, Xt, 0);
        }
        e.bindFramebuffer(s.DRAW_FRAMEBUFFER, At.__webglMultisampledFramebuffer);
      } else if (A.depthBuffer && A.resolveDepthBuffer === false && l) {
        const v = A.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT;
        s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, [v]);
      }
    }
  }
  function J(A) {
    return Math.min(i.maxSamples, A.samples);
  }
  function _t(A) {
    const v = n.get(A);
    return A.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === true && v.__useRenderToTexture !== false;
  }
  function rt(A) {
    const v = o.render.frame;
    h.get(A) !== v && (h.set(A, v), A.update());
  }
  function Pt(A, v) {
    const F = A.colorSpace, X = A.format, Z = A.type;
    return A.isCompressedTexture === true || A.isVideoTexture === true || F !== Ie && F !== Fn && (qt.getTransfer(F) === se ? (X !== qe || Z !== Tn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", F)), v;
  }
  function ft(A) {
    return typeof HTMLImageElement < "u" && A instanceof HTMLImageElement ? (c.width = A.naturalWidth || A.width, c.height = A.naturalHeight || A.height) : typeof VideoFrame < "u" && A instanceof VideoFrame ? (c.width = A.displayWidth, c.height = A.displayHeight) : (c.width = A.width, c.height = A.height), c;
  }
  this.allocateTextureUnit = O, this.resetTextureUnits = V, this.setTexture2D = j, this.setTexture2DArray = H, this.setTexture3D = nt, this.setTextureCube = G, this.rebindTextures = Lt, this.setupRenderTarget = jt, this.updateRenderTargetMipmap = K, this.updateMultisampleRenderTarget = bt, this.setupDepthRenderbuffer = Ut, this.setupFrameBufferTexture = Et, this.useMultisampledRTT = _t;
}
function gv(s, t) {
  function e(n, i = Fn) {
    let r;
    const o = qt.getTransfer(i);
    if (n === Tn) return s.UNSIGNED_BYTE;
    if (n === ga) return s.UNSIGNED_SHORT_4_4_4_4;
    if (n === _a) return s.UNSIGNED_SHORT_5_5_5_1;
    if (n === Lc) return s.UNSIGNED_INT_5_9_9_9_REV;
    if (n === Cc) return s.BYTE;
    if (n === Pc) return s.SHORT;
    if (n === xs) return s.UNSIGNED_SHORT;
    if (n === ma) return s.INT;
    if (n === li) return s.UNSIGNED_INT;
    if (n === nn) return s.FLOAT;
    if (n === ws) return s.HALF_FLOAT;
    if (n === Ic) return s.ALPHA;
    if (n === Dc) return s.RGB;
    if (n === qe) return s.RGBA;
    if (n === Nc) return s.LUMINANCE;
    if (n === Uc) return s.LUMINANCE_ALPHA;
    if (n === Fi) return s.DEPTH_COMPONENT;
    if (n === Wi) return s.DEPTH_STENCIL;
    if (n === va) return s.RED;
    if (n === xa) return s.RED_INTEGER;
    if (n === Fc) return s.RG;
    if (n === ya) return s.RG_INTEGER;
    if (n === Ma) return s.RGBA_INTEGER;
    if (n === ur || n === dr || n === fr || n === pr) if (o === se) if (r = t.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) {
      if (n === ur) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      if (n === dr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      if (n === fr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      if (n === pr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    } else return null;
    else if (r = t.get("WEBGL_compressed_texture_s3tc"), r !== null) {
      if (n === ur) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (n === dr) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (n === fr) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (n === pr) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    } else return null;
    if (n === Co || n === Po || n === Lo || n === Io) if (r = t.get("WEBGL_compressed_texture_pvrtc"), r !== null) {
      if (n === Co) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (n === Po) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (n === Lo) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (n === Io) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    } else return null;
    if (n === Do || n === No || n === Uo) if (r = t.get("WEBGL_compressed_texture_etc"), r !== null) {
      if (n === Do || n === No) return o === se ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
      if (n === Uo) return o === se ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
    } else return null;
    if (n === Fo || n === Oo || n === Bo || n === ko || n === zo || n === Ho || n === Vo || n === Go || n === Wo || n === Xo || n === Yo || n === qo || n === jo || n === $o) if (r = t.get("WEBGL_compressed_texture_astc"), r !== null) {
      if (n === Fo) return o === se ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
      if (n === Oo) return o === se ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
      if (n === Bo) return o === se ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
      if (n === ko) return o === se ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
      if (n === zo) return o === se ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
      if (n === Ho) return o === se ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
      if (n === Vo) return o === se ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
      if (n === Go) return o === se ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
      if (n === Wo) return o === se ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
      if (n === Xo) return o === se ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
      if (n === Yo) return o === se ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
      if (n === qo) return o === se ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
      if (n === jo) return o === se ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
      if (n === $o) return o === se ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
    } else return null;
    if (n === mr || n === Ko || n === Zo) if (r = t.get("EXT_texture_compression_bptc"), r !== null) {
      if (n === mr) return o === se ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      if (n === Ko) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
      if (n === Zo) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    } else return null;
    if (n === Oc || n === Jo || n === Qo || n === ta) if (r = t.get("EXT_texture_compression_rgtc"), r !== null) {
      if (n === mr) return r.COMPRESSED_RED_RGTC1_EXT;
      if (n === Jo) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      if (n === Qo) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
      if (n === ta) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    } else return null;
    return n === Gi ? s.UNSIGNED_INT_24_8 : s[n] !== void 0 ? s[n] : null;
  }
  return { convert: e };
}
const _v = { type: "move" };
class uo {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new ai(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new ai(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new w(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new w()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new ai(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new w(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new w()), this._grip;
  }
  dispatchEvent(t) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(t), this._grip !== null && this._grip.dispatchEvent(t), this._hand !== null && this._hand.dispatchEvent(t), this;
  }
  connect(t) {
    if (t && t.hand) {
      const e = this._hand;
      if (e) for (const n of t.hand.values()) this._getHandJoint(e, n);
    }
    return this.dispatchEvent({ type: "connected", data: t }), this;
  }
  disconnect(t) {
    return this.dispatchEvent({ type: "disconnected", data: t }), this._targetRay !== null && (this._targetRay.visible = false), this._grip !== null && (this._grip.visible = false), this._hand !== null && (this._hand.visible = false), this;
  }
  update(t, e, n) {
    let i = null, r = null, o = null;
    const a = this._targetRay, l = this._grip, c = this._hand;
    if (t && e.session.visibilityState !== "visible-blurred") {
      if (c && t.hand) {
        o = true;
        for (const _ of t.hand.values()) {
          const m = e.getJointPose(_, n), p = this._getHandJoint(c, _);
          m !== null && (p.matrix.fromArray(m.transform.matrix), p.matrix.decompose(p.position, p.rotation, p.scale), p.matrixWorldNeedsUpdate = true, p.jointRadius = m.radius), p.visible = m !== null;
        }
        const h = c.joints["index-finger-tip"], u = c.joints["thumb-tip"], d = h.position.distanceTo(u.position), f = 0.02, g = 5e-3;
        c.inputState.pinching && d > f + g ? (c.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: t.handedness, target: this })) : !c.inputState.pinching && d <= f - g && (c.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: t.handedness, target: this }));
      } else l !== null && t.gripSpace && (r = e.getPose(t.gripSpace, n), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = true, r.linearVelocity ? (l.hasLinearVelocity = true, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = false, r.angularVelocity ? (l.hasAngularVelocity = true, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = false));
      a !== null && (i = e.getPose(t.targetRaySpace, n), i === null && r !== null && (i = r), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = true, i.linearVelocity ? (a.hasLinearVelocity = true, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = false, i.angularVelocity ? (a.hasAngularVelocity = true, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = false, this.dispatchEvent(_v)));
    }
    return a !== null && (a.visible = i !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = o !== null), this;
  }
  _getHandJoint(t, e) {
    if (t.joints[e.jointName] === void 0) {
      const n = new ai();
      n.matrixAutoUpdate = false, n.visible = false, t.joints[e.jointName] = n, t.add(n);
    }
    return t.joints[e.jointName];
  }
}
const vv = "\nvoid main() {\n\n	gl_Position = vec4( position, 1.0 );\n\n}", xv = "\nuniform sampler2DArray depthColor;\nuniform float depthWidth;\nuniform float depthHeight;\n\nvoid main() {\n\n	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );\n\n	if ( coord.x >= 1.0 ) {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;\n\n	} else {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;\n\n	}\n\n}";
class yv {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(t, e, n) {
    if (this.texture === null) {
      const i = new xe(), r = t.properties.get(i);
      r.__webglTexture = e.texture, (e.depthNear != n.depthNear || e.depthFar != n.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = i;
    }
  }
  getMesh(t) {
    if (this.texture !== null && this.mesh === null) {
      const e = t.cameras[0].viewport, n = new Vn({ vertexShader: vv, fragmentShader: xv, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: e.z }, depthHeight: { value: e.w } } });
      this.mesh = new He(new Tr(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class Mv extends Gn {
  constructor(t, e) {
    super();
    const n = this;
    let i = null, r = 1, o = null, a = "local-floor", l = 1, c = null, h = null, u = null, d = null, f = null, g = null;
    const _ = new yv(), m = e.getContextAttributes();
    let p = null, b = null;
    const S = [], x = [], L = new Q();
    let R = null;
    const C = new Ue();
    C.viewport = new Zt();
    const I = new Ue();
    I.viewport = new Zt();
    const E = [C, I], y = new bf();
    let P = null, V = null;
    this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(q) {
      let st = S[q];
      return st === void 0 && (st = new uo(), S[q] = st), st.getTargetRaySpace();
    }, this.getControllerGrip = function(q) {
      let st = S[q];
      return st === void 0 && (st = new uo(), S[q] = st), st.getGripSpace();
    }, this.getHand = function(q) {
      let st = S[q];
      return st === void 0 && (st = new uo(), S[q] = st), st.getHandSpace();
    };
    function O(q) {
      const st = x.indexOf(q.inputSource);
      if (st === -1) return;
      const Et = S[st];
      Et !== void 0 && (Et.update(q.inputSource, q.frame, c || o), Et.dispatchEvent({ type: q.type, data: q.inputSource }));
    }
    function z() {
      i.removeEventListener("select", O), i.removeEventListener("selectstart", O), i.removeEventListener("selectend", O), i.removeEventListener("squeeze", O), i.removeEventListener("squeezestart", O), i.removeEventListener("squeezeend", O), i.removeEventListener("end", z), i.removeEventListener("inputsourceschange", j);
      for (let q = 0; q < S.length; q++) {
        const st = x[q];
        st !== null && (x[q] = null, S[q].disconnect(st));
      }
      P = null, V = null, _.reset(), t.setRenderTarget(p), f = null, d = null, u = null, i = null, b = null, Jt.stop(), n.isPresenting = false, t.setPixelRatio(R), t.setSize(L.width, L.height, false), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(q) {
      r = q, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(q) {
      a = q, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || o;
    }, this.setReferenceSpace = function(q) {
      c = q;
    }, this.getBaseLayer = function() {
      return d !== null ? d : f;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(q) {
      if (i = q, i !== null) {
        if (p = t.getRenderTarget(), i.addEventListener("select", O), i.addEventListener("selectstart", O), i.addEventListener("selectend", O), i.addEventListener("squeeze", O), i.addEventListener("squeezestart", O), i.addEventListener("squeezeend", O), i.addEventListener("end", z), i.addEventListener("inputsourceschange", j), m.xrCompatible !== true && await e.makeXRCompatible(), R = t.getPixelRatio(), t.getSize(L), i.renderState.layers === void 0) {
          const st = { antialias: m.antialias, alpha: true, depth: m.depth, stencil: m.stencil, framebufferScaleFactor: r };
          f = new XRWebGLLayer(i, e, st), i.updateRenderState({ baseLayer: f }), t.setPixelRatio(1), t.setSize(f.framebufferWidth, f.framebufferHeight, false), b = new ci(f.framebufferWidth, f.framebufferHeight, { format: qe, type: Tn, colorSpace: t.outputColorSpace, stencilBuffer: m.stencil });
        } else {
          let st = null, Et = null, ot = null;
          m.depth && (ot = m.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, st = m.stencil ? Wi : Fi, Et = m.stencil ? Gi : li);
          const Tt = { colorFormat: e.RGBA8, depthFormat: ot, scaleFactor: r };
          u = new XRWebGLBinding(i, e), d = u.createProjectionLayer(Tt), i.updateRenderState({ layers: [d] }), t.setPixelRatio(1), t.setSize(d.textureWidth, d.textureHeight, false), b = new ci(d.textureWidth, d.textureHeight, { format: qe, type: Tn, depthTexture: new th(d.textureWidth, d.textureHeight, Et, void 0, void 0, void 0, void 0, void 0, void 0, st), stencilBuffer: m.stencil, colorSpace: t.outputColorSpace, samples: m.antialias ? 4 : 0, resolveDepthBuffer: d.ignoreDepthValues === false });
        }
        b.isXRRenderTarget = true, this.setFoveation(l), c = null, o = await i.requestReferenceSpace(a), Jt.setContext(i), Jt.start(), n.isPresenting = true, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null) return i.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return _.getDepthTexture();
    };
    function j(q) {
      for (let st = 0; st < q.removed.length; st++) {
        const Et = q.removed[st], ot = x.indexOf(Et);
        ot >= 0 && (x[ot] = null, S[ot].disconnect(Et));
      }
      for (let st = 0; st < q.added.length; st++) {
        const Et = q.added[st];
        let ot = x.indexOf(Et);
        if (ot === -1) {
          for (let Ut = 0; Ut < S.length; Ut++) if (Ut >= x.length) {
            x.push(Et), ot = Ut;
            break;
          } else if (x[Ut] === null) {
            x[Ut] = Et, ot = Ut;
            break;
          }
          if (ot === -1) break;
        }
        const Tt = S[ot];
        Tt && Tt.connect(Et);
      }
    }
    const H = new w(), nt = new w();
    function G(q, st, Et) {
      H.setFromMatrixPosition(st.matrixWorld), nt.setFromMatrixPosition(Et.matrixWorld);
      const ot = H.distanceTo(nt), Tt = st.projectionMatrix.elements, Ut = Et.projectionMatrix.elements, Lt = Tt[14] / (Tt[10] - 1), jt = Tt[14] / (Tt[10] + 1), K = (Tt[9] + 1) / Tt[5], it = (Tt[9] - 1) / Tt[5], T = (Tt[8] - 1) / Tt[0], bt = (Ut[8] + 1) / Ut[0], J = Lt * T, _t = Lt * bt, rt = ot / (-T + bt), Pt = rt * -T;
      if (st.matrixWorld.decompose(q.position, q.quaternion, q.scale), q.translateX(Pt), q.translateZ(rt), q.matrixWorld.compose(q.position, q.quaternion, q.scale), q.matrixWorldInverse.copy(q.matrixWorld).invert(), Tt[10] === -1) q.projectionMatrix.copy(st.projectionMatrix), q.projectionMatrixInverse.copy(st.projectionMatrixInverse);
      else {
        const ft = Lt + rt, A = jt + rt, v = J - Pt, F = _t + (ot - Pt), X = K * jt / A * ft, Z = it * jt / A * ft;
        q.projectionMatrix.makePerspective(v, F, X, Z, ft, A), q.projectionMatrixInverse.copy(q.projectionMatrix).invert();
      }
    }
    function at(q, st) {
      st === null ? q.matrixWorld.copy(q.matrix) : q.matrixWorld.multiplyMatrices(st.matrixWorld, q.matrix), q.matrixWorldInverse.copy(q.matrixWorld).invert();
    }
    this.updateCamera = function(q) {
      if (i === null) return;
      let st = q.near, Et = q.far;
      _.texture !== null && (_.depthNear > 0 && (st = _.depthNear), _.depthFar > 0 && (Et = _.depthFar)), y.near = I.near = C.near = st, y.far = I.far = C.far = Et, (P !== y.near || V !== y.far) && (i.updateRenderState({ depthNear: y.near, depthFar: y.far }), P = y.near, V = y.far), C.layers.mask = q.layers.mask | 2, I.layers.mask = q.layers.mask | 4, y.layers.mask = C.layers.mask | I.layers.mask;
      const ot = q.parent, Tt = y.cameras;
      at(y, ot);
      for (let Ut = 0; Ut < Tt.length; Ut++) at(Tt[Ut], ot);
      Tt.length === 2 ? G(y, C, I) : y.projectionMatrix.copy(C.projectionMatrix), mt(q, y, ot);
    };
    function mt(q, st, Et) {
      Et === null ? q.matrix.copy(st.matrixWorld) : (q.matrix.copy(Et.matrixWorld), q.matrix.invert(), q.matrix.multiply(st.matrixWorld)), q.matrix.decompose(q.position, q.quaternion, q.scale), q.updateMatrixWorld(true), q.projectionMatrix.copy(st.projectionMatrix), q.projectionMatrixInverse.copy(st.projectionMatrixInverse), q.isPerspectiveCamera && (q.fov = Xi * 2 * Math.atan(1 / q.projectionMatrix.elements[5]), q.zoom = 1);
    }
    this.getCamera = function() {
      return y;
    }, this.getFoveation = function() {
      if (!(d === null && f === null)) return l;
    }, this.setFoveation = function(q) {
      l = q, d !== null && (d.fixedFoveation = q), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = q);
    }, this.hasDepthSensing = function() {
      return _.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return _.getMesh(y);
    };
    let Mt = null;
    function Bt(q, st) {
      if (h = st.getViewerPose(c || o), g = st, h !== null) {
        const Et = h.views;
        f !== null && (t.setRenderTargetFramebuffer(b, f.framebuffer), t.setRenderTarget(b));
        let ot = false;
        Et.length !== y.cameras.length && (y.cameras.length = 0, ot = true);
        for (let Ut = 0; Ut < Et.length; Ut++) {
          const Lt = Et[Ut];
          let jt = null;
          if (f !== null) jt = f.getViewport(Lt);
          else {
            const it = u.getViewSubImage(d, Lt);
            jt = it.viewport, Ut === 0 && (t.setRenderTargetTextures(b, it.colorTexture, d.ignoreDepthValues ? void 0 : it.depthStencilTexture), t.setRenderTarget(b));
          }
          let K = E[Ut];
          K === void 0 && (K = new Ue(), K.layers.enable(Ut), K.viewport = new Zt(), E[Ut] = K), K.matrix.fromArray(Lt.transform.matrix), K.matrix.decompose(K.position, K.quaternion, K.scale), K.projectionMatrix.fromArray(Lt.projectionMatrix), K.projectionMatrixInverse.copy(K.projectionMatrix).invert(), K.viewport.set(jt.x, jt.y, jt.width, jt.height), Ut === 0 && (y.matrix.copy(K.matrix), y.matrix.decompose(y.position, y.quaternion, y.scale)), ot === true && y.cameras.push(K);
        }
        const Tt = i.enabledFeatures;
        if (Tt && Tt.includes("depth-sensing")) {
          const Ut = u.getDepthInformation(Et[0]);
          Ut && Ut.isValid && Ut.texture && _.init(t, Ut, i.renderState);
        }
      }
      for (let Et = 0; Et < S.length; Et++) {
        const ot = x[Et], Tt = S[Et];
        ot !== null && Tt !== void 0 && Tt.update(ot, st, c || o);
      }
      Mt && Mt(q, st), st.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: st }), g = null;
    }
    const Jt = new xh();
    Jt.setAnimationLoop(Bt), this.setAnimationLoop = function(q) {
      Mt = q;
    }, this.dispose = function() {
    };
  }
}
const ei = new rn(), Sv = new Ot();
function Ev(s, t) {
  function e(m, p) {
    m.matrixAutoUpdate === true && m.updateMatrix(), p.value.copy(m.matrix);
  }
  function n(m, p) {
    p.color.getRGB(m.fogColor.value, qc(s)), p.isFog ? (m.fogNear.value = p.near, m.fogFar.value = p.far) : p.isFogExp2 && (m.fogDensity.value = p.density);
  }
  function i(m, p, b, S, x) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial ? r(m, p) : p.isMeshToonMaterial ? (r(m, p), u(m, p)) : p.isMeshPhongMaterial ? (r(m, p), h(m, p)) : p.isMeshStandardMaterial ? (r(m, p), d(m, p), p.isMeshPhysicalMaterial && f(m, p, x)) : p.isMeshMatcapMaterial ? (r(m, p), g(m, p)) : p.isMeshDepthMaterial ? r(m, p) : p.isMeshDistanceMaterial ? (r(m, p), _(m, p)) : p.isMeshNormalMaterial ? r(m, p) : p.isLineBasicMaterial ? (o(m, p), p.isLineDashedMaterial && a(m, p)) : p.isPointsMaterial ? l(m, p, b, S) : p.isSpriteMaterial ? c(m, p) : p.isShadowMaterial ? (m.color.value.copy(p.color), m.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = false);
  }
  function r(m, p) {
    m.opacity.value = p.opacity, p.color && m.diffuse.value.copy(p.color), p.emissive && m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (m.map.value = p.map, e(p.map, m.mapTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, e(p.alphaMap, m.alphaMapTransform)), p.bumpMap && (m.bumpMap.value = p.bumpMap, e(p.bumpMap, m.bumpMapTransform), m.bumpScale.value = p.bumpScale, p.side === Fe && (m.bumpScale.value *= -1)), p.normalMap && (m.normalMap.value = p.normalMap, e(p.normalMap, m.normalMapTransform), m.normalScale.value.copy(p.normalScale), p.side === Fe && m.normalScale.value.negate()), p.displacementMap && (m.displacementMap.value = p.displacementMap, e(p.displacementMap, m.displacementMapTransform), m.displacementScale.value = p.displacementScale, m.displacementBias.value = p.displacementBias), p.emissiveMap && (m.emissiveMap.value = p.emissiveMap, e(p.emissiveMap, m.emissiveMapTransform)), p.specularMap && (m.specularMap.value = p.specularMap, e(p.specularMap, m.specularMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
    const b = t.get(p), S = b.envMap, x = b.envMapRotation;
    S && (m.envMap.value = S, ei.copy(x), ei.x *= -1, ei.y *= -1, ei.z *= -1, S.isCubeTexture && S.isRenderTargetTexture === false && (ei.y *= -1, ei.z *= -1), m.envMapRotation.value.setFromMatrix4(Sv.makeRotationFromEuler(ei)), m.flipEnvMap.value = S.isCubeTexture && S.isRenderTargetTexture === false ? -1 : 1, m.reflectivity.value = p.reflectivity, m.ior.value = p.ior, m.refractionRatio.value = p.refractionRatio), p.lightMap && (m.lightMap.value = p.lightMap, m.lightMapIntensity.value = p.lightMapIntensity, e(p.lightMap, m.lightMapTransform)), p.aoMap && (m.aoMap.value = p.aoMap, m.aoMapIntensity.value = p.aoMapIntensity, e(p.aoMap, m.aoMapTransform));
  }
  function o(m, p) {
    m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, p.map && (m.map.value = p.map, e(p.map, m.mapTransform));
  }
  function a(m, p) {
    m.dashSize.value = p.dashSize, m.totalSize.value = p.dashSize + p.gapSize, m.scale.value = p.scale;
  }
  function l(m, p, b, S) {
    m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, m.size.value = p.size * b, m.scale.value = S * 0.5, p.map && (m.map.value = p.map, e(p.map, m.uvTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, e(p.alphaMap, m.alphaMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
  }
  function c(m, p) {
    m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, m.rotation.value = p.rotation, p.map && (m.map.value = p.map, e(p.map, m.mapTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, e(p.alphaMap, m.alphaMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
  }
  function h(m, p) {
    m.specular.value.copy(p.specular), m.shininess.value = Math.max(p.shininess, 1e-4);
  }
  function u(m, p) {
    p.gradientMap && (m.gradientMap.value = p.gradientMap);
  }
  function d(m, p) {
    m.metalness.value = p.metalness, p.metalnessMap && (m.metalnessMap.value = p.metalnessMap, e(p.metalnessMap, m.metalnessMapTransform)), m.roughness.value = p.roughness, p.roughnessMap && (m.roughnessMap.value = p.roughnessMap, e(p.roughnessMap, m.roughnessMapTransform)), p.envMap && (m.envMapIntensity.value = p.envMapIntensity);
  }
  function f(m, p, b) {
    m.ior.value = p.ior, p.sheen > 0 && (m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), m.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (m.sheenColorMap.value = p.sheenColorMap, e(p.sheenColorMap, m.sheenColorMapTransform)), p.sheenRoughnessMap && (m.sheenRoughnessMap.value = p.sheenRoughnessMap, e(p.sheenRoughnessMap, m.sheenRoughnessMapTransform))), p.clearcoat > 0 && (m.clearcoat.value = p.clearcoat, m.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (m.clearcoatMap.value = p.clearcoatMap, e(p.clearcoatMap, m.clearcoatMapTransform)), p.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, e(p.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (m.clearcoatNormalMap.value = p.clearcoatNormalMap, e(p.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === Fe && m.clearcoatNormalScale.value.negate())), p.dispersion > 0 && (m.dispersion.value = p.dispersion), p.iridescence > 0 && (m.iridescence.value = p.iridescence, m.iridescenceIOR.value = p.iridescenceIOR, m.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (m.iridescenceMap.value = p.iridescenceMap, e(p.iridescenceMap, m.iridescenceMapTransform)), p.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = p.iridescenceThicknessMap, e(p.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), p.transmission > 0 && (m.transmission.value = p.transmission, m.transmissionSamplerMap.value = b.texture, m.transmissionSamplerSize.value.set(b.width, b.height), p.transmissionMap && (m.transmissionMap.value = p.transmissionMap, e(p.transmissionMap, m.transmissionMapTransform)), m.thickness.value = p.thickness, p.thicknessMap && (m.thicknessMap.value = p.thicknessMap, e(p.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = p.attenuationDistance, m.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (m.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (m.anisotropyMap.value = p.anisotropyMap, e(p.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = p.specularIntensity, m.specularColor.value.copy(p.specularColor), p.specularColorMap && (m.specularColorMap.value = p.specularColorMap, e(p.specularColorMap, m.specularColorMapTransform)), p.specularIntensityMap && (m.specularIntensityMap.value = p.specularIntensityMap, e(p.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function g(m, p) {
    p.matcap && (m.matcap.value = p.matcap);
  }
  function _(m, p) {
    const b = t.get(p).light;
    m.referencePosition.value.setFromMatrixPosition(b.matrixWorld), m.nearDistance.value = b.shadow.camera.near, m.farDistance.value = b.shadow.camera.far;
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: i };
}
function Av(s, t, e, n) {
  let i = {}, r = {}, o = [];
  const a = s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(b, S) {
    const x = S.program;
    n.uniformBlockBinding(b, x);
  }
  function c(b, S) {
    let x = i[b.id];
    x === void 0 && (g(b), x = h(b), i[b.id] = x, b.addEventListener("dispose", m));
    const L = S.program;
    n.updateUBOMapping(b, L);
    const R = t.render.frame;
    r[b.id] !== R && (d(b), r[b.id] = R);
  }
  function h(b) {
    const S = u();
    b.__bindingPointIndex = S;
    const x = s.createBuffer(), L = b.__size, R = b.usage;
    return s.bindBuffer(s.UNIFORM_BUFFER, x), s.bufferData(s.UNIFORM_BUFFER, L, R), s.bindBuffer(s.UNIFORM_BUFFER, null), s.bindBufferBase(s.UNIFORM_BUFFER, S, x), x;
  }
  function u() {
    for (let b = 0; b < a; b++) if (o.indexOf(b) === -1) return o.push(b), b;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(b) {
    const S = i[b.id], x = b.uniforms, L = b.__cache;
    s.bindBuffer(s.UNIFORM_BUFFER, S);
    for (let R = 0, C = x.length; R < C; R++) {
      const I = Array.isArray(x[R]) ? x[R] : [x[R]];
      for (let E = 0, y = I.length; E < y; E++) {
        const P = I[E];
        if (f(P, R, E, L) === true) {
          const V = P.__offset, O = Array.isArray(P.value) ? P.value : [P.value];
          let z = 0;
          for (let j = 0; j < O.length; j++) {
            const H = O[j], nt = _(H);
            typeof H == "number" || typeof H == "boolean" ? (P.__data[0] = H, s.bufferSubData(s.UNIFORM_BUFFER, V + z, P.__data)) : H.isMatrix3 ? (P.__data[0] = H.elements[0], P.__data[1] = H.elements[1], P.__data[2] = H.elements[2], P.__data[3] = 0, P.__data[4] = H.elements[3], P.__data[5] = H.elements[4], P.__data[6] = H.elements[5], P.__data[7] = 0, P.__data[8] = H.elements[6], P.__data[9] = H.elements[7], P.__data[10] = H.elements[8], P.__data[11] = 0) : (H.toArray(P.__data, z), z += nt.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          s.bufferSubData(s.UNIFORM_BUFFER, V, P.__data);
        }
      }
    }
    s.bindBuffer(s.UNIFORM_BUFFER, null);
  }
  function f(b, S, x, L) {
    const R = b.value, C = S + "_" + x;
    if (L[C] === void 0) return typeof R == "number" || typeof R == "boolean" ? L[C] = R : L[C] = R.clone(), true;
    {
      const I = L[C];
      if (typeof R == "number" || typeof R == "boolean") {
        if (I !== R) return L[C] = R, true;
      } else if (I.equals(R) === false) return I.copy(R), true;
    }
    return false;
  }
  function g(b) {
    const S = b.uniforms;
    let x = 0;
    const L = 16;
    for (let C = 0, I = S.length; C < I; C++) {
      const E = Array.isArray(S[C]) ? S[C] : [S[C]];
      for (let y = 0, P = E.length; y < P; y++) {
        const V = E[y], O = Array.isArray(V.value) ? V.value : [V.value];
        for (let z = 0, j = O.length; z < j; z++) {
          const H = O[z], nt = _(H), G = x % L, at = G % nt.boundary, mt = G + at;
          x += at, mt !== 0 && L - mt < nt.storage && (x += L - mt), V.__data = new Float32Array(nt.storage / Float32Array.BYTES_PER_ELEMENT), V.__offset = x, x += nt.storage;
        }
      }
    }
    const R = x % L;
    return R > 0 && (x += L - R), b.__size = x, b.__cache = {}, this;
  }
  function _(b) {
    const S = { boundary: 0, storage: 0 };
    return typeof b == "number" || typeof b == "boolean" ? (S.boundary = 4, S.storage = 4) : b.isVector2 ? (S.boundary = 8, S.storage = 8) : b.isVector3 || b.isColor ? (S.boundary = 16, S.storage = 12) : b.isVector4 ? (S.boundary = 16, S.storage = 16) : b.isMatrix3 ? (S.boundary = 48, S.storage = 48) : b.isMatrix4 ? (S.boundary = 64, S.storage = 64) : b.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", b), S;
  }
  function m(b) {
    const S = b.target;
    S.removeEventListener("dispose", m);
    const x = o.indexOf(S.__bindingPointIndex);
    o.splice(x, 1), s.deleteBuffer(i[S.id]), delete i[S.id], delete r[S.id];
  }
  function p() {
    for (const b in i) s.deleteBuffer(i[b]);
    o = [], i = {}, r = {};
  }
  return { bind: l, update: c, dispose: p };
}
class Ox {
  constructor(t = {}) {
    const { canvas: e = Hu(), context: n = null, depth: i = true, stencil: r = false, alpha: o = false, antialias: a = false, premultipliedAlpha: l = true, preserveDrawingBuffer: c = false, powerPreference: h = "default", failIfMajorPerformanceCaveat: u = false, reverseDepthBuffer: d = false } = t;
    this.isWebGLRenderer = true;
    let f;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      f = n.getContextAttributes().alpha;
    } else f = o;
    const g = new Uint32Array(4), _ = new Int32Array(4);
    let m = null, p = null;
    const b = [], S = [];
    this.domElement = e, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this._outputColorSpace = Me, this.toneMapping = zn, this.toneMappingExposure = 1;
    const x = this;
    let L = false, R = 0, C = 0, I = null, E = -1, y = null;
    const P = new Zt(), V = new Zt();
    let O = null;
    const z = new It(0);
    let j = 0, H = e.width, nt = e.height, G = 1, at = null, mt = null;
    const Mt = new Zt(0, 0, H, nt), Bt = new Zt(0, 0, H, nt);
    let Jt = false;
    const q = new Ra();
    let st = false, Et = false;
    const ot = new Ot(), Tt = new Ot(), Ut = new w(), Lt = new Zt(), jt = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
    let K = false;
    function it() {
      return I === null ? G : 1;
    }
    let T = n;
    function bt(M, N) {
      return e.getContext(M, N);
    }
    try {
      const M = { alpha: true, depth: i, stencil: r, antialias: a, premultipliedAlpha: l, preserveDrawingBuffer: c, powerPreference: h, failIfMajorPerformanceCaveat: u };
      if ("setAttribute" in e && e.setAttribute("data-engine", "three.js r171"), e.addEventListener("webglcontextlost", $, false), e.addEventListener("webglcontextrestored", pt, false), e.addEventListener("webglcontextcreationerror", dt, false), T === null) {
        const N = "webgl2";
        if (T = bt(N, M), T === null) throw bt(N) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (M) {
      throw console.error("THREE.WebGLRenderer: " + M.message), M;
    }
    let J, _t, rt, Pt, ft, A, v, F, X, Z, Y, At, ct, gt, Xt, et, xt, Ct, Dt, yt, Yt, Vt, oe, D;
    function ht() {
      J = new Ng(T), J.init(), Vt = new gv(T, J), _t = new Rg(T, J, t, Vt), rt = new pv(T, J), _t.reverseDepthBuffer && d && rt.buffers.depth.setReversed(true), Pt = new Og(T), ft = new ev(), A = new mv(T, J, rt, ft, _t, Vt, Pt), v = new Pg(x), F = new Dg(x), X = new Wf(T), oe = new Tg(T, X), Z = new Ug(T, X, Pt, oe), Y = new kg(T, Z, X, Pt), Dt = new Bg(T, _t, A), et = new Cg(ft), At = new tv(x, v, F, J, _t, oe, et), ct = new Ev(x, ft), gt = new iv(), Xt = new cv(J), Ct = new bg(x, v, F, rt, Y, f, l), xt = new dv(x, Y, _t), D = new Av(T, Pt, _t, rt), yt = new wg(T, J, Pt), Yt = new Fg(T, J, Pt), Pt.programs = At.programs, x.capabilities = _t, x.extensions = J, x.properties = ft, x.renderLists = gt, x.shadowMap = xt, x.state = rt, x.info = Pt;
    }
    ht();
    const W = new Mv(x, T);
    this.xr = W, this.getContext = function() {
      return T;
    }, this.getContextAttributes = function() {
      return T.getContextAttributes();
    }, this.forceContextLoss = function() {
      const M = J.get("WEBGL_lose_context");
      M && M.loseContext();
    }, this.forceContextRestore = function() {
      const M = J.get("WEBGL_lose_context");
      M && M.restoreContext();
    }, this.getPixelRatio = function() {
      return G;
    }, this.setPixelRatio = function(M) {
      M !== void 0 && (G = M, this.setSize(H, nt, false));
    }, this.getSize = function(M) {
      return M.set(H, nt);
    }, this.setSize = function(M, N, B = true) {
      if (W.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      H = M, nt = N, e.width = Math.floor(M * G), e.height = Math.floor(N * G), B === true && (e.style.width = M + "px", e.style.height = N + "px"), this.setViewport(0, 0, M, N);
    }, this.getDrawingBufferSize = function(M) {
      return M.set(H * G, nt * G).floor();
    }, this.setDrawingBufferSize = function(M, N, B) {
      H = M, nt = N, G = B, e.width = Math.floor(M * B), e.height = Math.floor(N * B), this.setViewport(0, 0, M, N);
    }, this.getCurrentViewport = function(M) {
      return M.copy(P);
    }, this.getViewport = function(M) {
      return M.copy(Mt);
    }, this.setViewport = function(M, N, B, k) {
      M.isVector4 ? Mt.set(M.x, M.y, M.z, M.w) : Mt.set(M, N, B, k), rt.viewport(P.copy(Mt).multiplyScalar(G).round());
    }, this.getScissor = function(M) {
      return M.copy(Bt);
    }, this.setScissor = function(M, N, B, k) {
      M.isVector4 ? Bt.set(M.x, M.y, M.z, M.w) : Bt.set(M, N, B, k), rt.scissor(V.copy(Bt).multiplyScalar(G).round());
    }, this.getScissorTest = function() {
      return Jt;
    }, this.setScissorTest = function(M) {
      rt.setScissorTest(Jt = M);
    }, this.setOpaqueSort = function(M) {
      at = M;
    }, this.setTransparentSort = function(M) {
      mt = M;
    }, this.getClearColor = function(M) {
      return M.copy(Ct.getClearColor());
    }, this.setClearColor = function() {
      Ct.setClearColor.apply(Ct, arguments);
    }, this.getClearAlpha = function() {
      return Ct.getClearAlpha();
    }, this.setClearAlpha = function() {
      Ct.setClearAlpha.apply(Ct, arguments);
    }, this.clear = function(M = true, N = true, B = true) {
      let k = 0;
      if (M) {
        let U = false;
        if (I !== null) {
          const tt = I.texture.format;
          U = tt === Ma || tt === ya || tt === xa;
        }
        if (U) {
          const tt = I.texture.type, ut = tt === Tn || tt === li || tt === xs || tt === Gi || tt === ga || tt === _a, vt = Ct.getClearColor(), St = Ct.getClearAlpha(), Nt = vt.r, Ft = vt.g, wt = vt.b;
          ut ? (g[0] = Nt, g[1] = Ft, g[2] = wt, g[3] = St, T.clearBufferuiv(T.COLOR, 0, g)) : (_[0] = Nt, _[1] = Ft, _[2] = wt, _[3] = St, T.clearBufferiv(T.COLOR, 0, _));
        } else k |= T.COLOR_BUFFER_BIT;
      }
      N && (k |= T.DEPTH_BUFFER_BIT), B && (k |= T.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), T.clear(k);
    }, this.clearColor = function() {
      this.clear(true, false, false);
    }, this.clearDepth = function() {
      this.clear(false, true, false);
    }, this.clearStencil = function() {
      this.clear(false, false, true);
    }, this.dispose = function() {
      e.removeEventListener("webglcontextlost", $, false), e.removeEventListener("webglcontextrestored", pt, false), e.removeEventListener("webglcontextcreationerror", dt, false), Ct.dispose(), gt.dispose(), Xt.dispose(), ft.dispose(), v.dispose(), F.dispose(), Y.dispose(), oe.dispose(), D.dispose(), At.dispose(), W.dispose(), W.removeEventListener("sessionstart", za), W.removeEventListener("sessionend", Ha), Wn.stop();
    };
    function $(M) {
      M.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), L = true;
    }
    function pt() {
      console.log("THREE.WebGLRenderer: Context Restored."), L = false;
      const M = Pt.autoReset, N = xt.enabled, B = xt.autoUpdate, k = xt.needsUpdate, U = xt.type;
      ht(), Pt.autoReset = M, xt.enabled = N, xt.autoUpdate = B, xt.needsUpdate = k, xt.type = U;
    }
    function dt(M) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", M.statusMessage);
    }
    function kt(M) {
      const N = M.target;
      N.removeEventListener("dispose", kt), ue(N);
    }
    function ue(M) {
      Se(M), ft.remove(M);
    }
    function Se(M) {
      const N = ft.get(M).programs;
      N !== void 0 && (N.forEach(function(B) {
        At.releaseProgram(B);
      }), M.isShaderMaterial && At.releaseShaderCache(M));
    }
    this.renderBufferDirect = function(M, N, B, k, U, tt) {
      N === null && (N = jt);
      const ut = U.isMesh && U.matrixWorld.determinant() < 0, vt = Rh(M, N, B, k, U);
      rt.setMaterial(k, ut);
      let St = B.index, Nt = 1;
      if (k.wireframe === true) {
        if (St = Z.getWireframeAttribute(B), St === void 0) return;
        Nt = 2;
      }
      const Ft = B.drawRange, wt = B.attributes.position;
      let $t = Ft.start * Nt, Qt = (Ft.start + Ft.count) * Nt;
      tt !== null && ($t = Math.max($t, tt.start * Nt), Qt = Math.min(Qt, (tt.start + tt.count) * Nt)), St !== null ? ($t = Math.max($t, 0), Qt = Math.min(Qt, St.count)) : wt != null && ($t = Math.max($t, 0), Qt = Math.min(Qt, wt.count));
      const fe = Qt - $t;
      if (fe < 0 || fe === 1 / 0) return;
      oe.setup(U, k, vt, B, St);
      let de, Kt = yt;
      if (St !== null && (de = X.get(St), Kt = Yt, Kt.setIndex(de)), U.isMesh) k.wireframe === true ? (rt.setLineWidth(k.wireframeLinewidth * it()), Kt.setMode(T.LINES)) : Kt.setMode(T.TRIANGLES);
      else if (U.isLine) {
        let Rt = k.linewidth;
        Rt === void 0 && (Rt = 1), rt.setLineWidth(Rt * it()), U.isLineSegments ? Kt.setMode(T.LINES) : U.isLineLoop ? Kt.setMode(T.LINE_LOOP) : Kt.setMode(T.LINE_STRIP);
      } else U.isPoints ? Kt.setMode(T.POINTS) : U.isSprite && Kt.setMode(T.TRIANGLES);
      if (U.isBatchedMesh) if (U._multiDrawInstances !== null) Kt.renderMultiDrawInstances(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount, U._multiDrawInstances);
      else if (J.get("WEBGL_multi_draw")) Kt.renderMultiDraw(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount);
      else {
        const Rt = U._multiDrawStarts, ye = U._multiDrawCounts, te = U._multiDrawCount, Ke = St ? X.get(St).bytesPerElement : 1, di = ft.get(k).currentProgram.getUniforms();
        for (let Oe = 0; Oe < te; Oe++) di.setValue(T, "_gl_DrawID", Oe), Kt.render(Rt[Oe] / Ke, ye[Oe]);
      }
      else if (U.isInstancedMesh) Kt.renderInstances($t, fe, U.count);
      else if (B.isInstancedBufferGeometry) {
        const Rt = B._maxInstanceCount !== void 0 ? B._maxInstanceCount : 1 / 0, ye = Math.min(B.instanceCount, Rt);
        Kt.renderInstances($t, fe, ye);
      } else Kt.render($t, fe);
    };
    function ne(M, N, B) {
      M.transparent === true && M.side === an && M.forceSinglePass === false ? (M.side = Fe, M.needsUpdate = true, Ls(M, N, B), M.side = bn, M.needsUpdate = true, Ls(M, N, B), M.side = an) : Ls(M, N, B);
    }
    this.compile = function(M, N, B = null) {
      B === null && (B = M), p = Xt.get(B), p.init(N), S.push(p), B.traverseVisible(function(U) {
        U.isLight && U.layers.test(N.layers) && (p.pushLight(U), U.castShadow && p.pushShadow(U));
      }), M !== B && M.traverseVisible(function(U) {
        U.isLight && U.layers.test(N.layers) && (p.pushLight(U), U.castShadow && p.pushShadow(U));
      }), p.setupLights();
      const k = /* @__PURE__ */ new Set();
      return M.traverse(function(U) {
        if (!(U.isMesh || U.isPoints || U.isLine || U.isSprite)) return;
        const tt = U.material;
        if (tt) if (Array.isArray(tt)) for (let ut = 0; ut < tt.length; ut++) {
          const vt = tt[ut];
          ne(vt, B, U), k.add(vt);
        }
        else ne(tt, B, U), k.add(tt);
      }), S.pop(), p = null, k;
    }, this.compileAsync = function(M, N, B = null) {
      const k = this.compile(M, N, B);
      return new Promise((U) => {
        function tt() {
          if (k.forEach(function(ut) {
            ft.get(ut).currentProgram.isReady() && k.delete(ut);
          }), k.size === 0) {
            U(M);
            return;
          }
          setTimeout(tt, 10);
        }
        J.get("KHR_parallel_shader_compile") !== null ? tt() : setTimeout(tt, 10);
      });
    };
    let $e = null;
    function fn(M) {
      $e && $e(M);
    }
    function za() {
      Wn.stop();
    }
    function Ha() {
      Wn.start();
    }
    const Wn = new xh();
    Wn.setAnimationLoop(fn), typeof self < "u" && Wn.setContext(self), this.setAnimationLoop = function(M) {
      $e = M, W.setAnimationLoop(M), M === null ? Wn.stop() : Wn.start();
    }, W.addEventListener("sessionstart", za), W.addEventListener("sessionend", Ha), this.render = function(M, N) {
      if (N !== void 0 && N.isCamera !== true) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (L === true) return;
      if (M.matrixWorldAutoUpdate === true && M.updateMatrixWorld(), N.parent === null && N.matrixWorldAutoUpdate === true && N.updateMatrixWorld(), W.enabled === true && W.isPresenting === true && (W.cameraAutoUpdate === true && W.updateCamera(N), N = W.getCamera()), M.isScene === true && M.onBeforeRender(x, M, N, I), p = Xt.get(M, S.length), p.init(N), S.push(p), Tt.multiplyMatrices(N.projectionMatrix, N.matrixWorldInverse), q.setFromProjectionMatrix(Tt), Et = this.localClippingEnabled, st = et.init(this.clippingPlanes, Et), m = gt.get(M, b.length), m.init(), b.push(m), W.enabled === true && W.isPresenting === true) {
        const tt = x.xr.getDepthSensingMesh();
        tt !== null && Rr(tt, N, -1 / 0, x.sortObjects);
      }
      Rr(M, N, 0, x.sortObjects), m.finish(), x.sortObjects === true && m.sort(at, mt), K = W.enabled === false || W.isPresenting === false || W.hasDepthSensing() === false, K && Ct.addToRenderList(m, M), this.info.render.frame++, st === true && et.beginShadows();
      const B = p.state.shadowsArray;
      xt.render(B, M, N), st === true && et.endShadows(), this.info.autoReset === true && this.info.reset();
      const k = m.opaque, U = m.transmissive;
      if (p.setupLights(), N.isArrayCamera) {
        const tt = N.cameras;
        if (U.length > 0) for (let ut = 0, vt = tt.length; ut < vt; ut++) {
          const St = tt[ut];
          Ga(k, U, M, St);
        }
        K && Ct.render(M);
        for (let ut = 0, vt = tt.length; ut < vt; ut++) {
          const St = tt[ut];
          Va(m, M, St, St.viewport);
        }
      } else U.length > 0 && Ga(k, U, M, N), K && Ct.render(M), Va(m, M, N);
      I !== null && (A.updateMultisampleRenderTarget(I), A.updateRenderTargetMipmap(I)), M.isScene === true && M.onAfterRender(x, M, N), oe.resetDefaultState(), E = -1, y = null, S.pop(), S.length > 0 ? (p = S[S.length - 1], st === true && et.setGlobalState(x.clippingPlanes, p.state.camera)) : p = null, b.pop(), b.length > 0 ? m = b[b.length - 1] : m = null;
    };
    function Rr(M, N, B, k) {
      if (M.visible === false) return;
      if (M.layers.test(N.layers)) {
        if (M.isGroup) B = M.renderOrder;
        else if (M.isLOD) M.autoUpdate === true && M.update(N);
        else if (M.isLight) p.pushLight(M), M.castShadow && p.pushShadow(M);
        else if (M.isSprite) {
          if (!M.frustumCulled || q.intersectsSprite(M)) {
            k && Lt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Tt);
            const ut = Y.update(M), vt = M.material;
            vt.visible && m.push(M, ut, vt, B, Lt.z, null);
          }
        } else if ((M.isMesh || M.isLine || M.isPoints) && (!M.frustumCulled || q.intersectsObject(M))) {
          const ut = Y.update(M), vt = M.material;
          if (k && (M.boundingSphere !== void 0 ? (M.boundingSphere === null && M.computeBoundingSphere(), Lt.copy(M.boundingSphere.center)) : (ut.boundingSphere === null && ut.computeBoundingSphere(), Lt.copy(ut.boundingSphere.center)), Lt.applyMatrix4(M.matrixWorld).applyMatrix4(Tt)), Array.isArray(vt)) {
            const St = ut.groups;
            for (let Nt = 0, Ft = St.length; Nt < Ft; Nt++) {
              const wt = St[Nt], $t = vt[wt.materialIndex];
              $t && $t.visible && m.push(M, ut, $t, B, Lt.z, wt);
            }
          } else vt.visible && m.push(M, ut, vt, B, Lt.z, null);
        }
      }
      const tt = M.children;
      for (let ut = 0, vt = tt.length; ut < vt; ut++) Rr(tt[ut], N, B, k);
    }
    function Va(M, N, B, k) {
      const U = M.opaque, tt = M.transmissive, ut = M.transparent;
      p.setupLightsView(B), st === true && et.setGlobalState(x.clippingPlanes, B), k && rt.viewport(P.copy(k)), U.length > 0 && Ps(U, N, B), tt.length > 0 && Ps(tt, N, B), ut.length > 0 && Ps(ut, N, B), rt.buffers.depth.setTest(true), rt.buffers.depth.setMask(true), rt.buffers.color.setMask(true), rt.setPolygonOffset(false);
    }
    function Ga(M, N, B, k) {
      if ((B.isScene === true ? B.overrideMaterial : null) !== null) return;
      p.state.transmissionRenderTarget[k.id] === void 0 && (p.state.transmissionRenderTarget[k.id] = new ci(1, 1, { generateMipmaps: true, type: J.has("EXT_color_buffer_half_float") || J.has("EXT_color_buffer_float") ? ws : Tn, minFilter: Sn, samples: 4, stencilBuffer: r, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: qt.workingColorSpace }));
      const tt = p.state.transmissionRenderTarget[k.id], ut = k.viewport || P;
      tt.setSize(ut.z, ut.w);
      const vt = x.getRenderTarget();
      x.setRenderTarget(tt), x.getClearColor(z), j = x.getClearAlpha(), j < 1 && x.setClearColor(16777215, 0.5), x.clear(), K && Ct.render(B);
      const St = x.toneMapping;
      x.toneMapping = zn;
      const Nt = k.viewport;
      if (k.viewport !== void 0 && (k.viewport = void 0), p.setupLightsView(k), st === true && et.setGlobalState(x.clippingPlanes, k), Ps(M, B, k), A.updateMultisampleRenderTarget(tt), A.updateRenderTargetMipmap(tt), J.has("WEBGL_multisampled_render_to_texture") === false) {
        let Ft = false;
        for (let wt = 0, $t = N.length; wt < $t; wt++) {
          const Qt = N[wt], fe = Qt.object, de = Qt.geometry, Kt = Qt.material, Rt = Qt.group;
          if (Kt.side === an && fe.layers.test(k.layers)) {
            const ye = Kt.side;
            Kt.side = Fe, Kt.needsUpdate = true, Wa(fe, B, k, de, Kt, Rt), Kt.side = ye, Kt.needsUpdate = true, Ft = true;
          }
        }
        Ft === true && (A.updateMultisampleRenderTarget(tt), A.updateRenderTargetMipmap(tt));
      }
      x.setRenderTarget(vt), x.setClearColor(z, j), Nt !== void 0 && (k.viewport = Nt), x.toneMapping = St;
    }
    function Ps(M, N, B) {
      const k = N.isScene === true ? N.overrideMaterial : null;
      for (let U = 0, tt = M.length; U < tt; U++) {
        const ut = M[U], vt = ut.object, St = ut.geometry, Nt = k === null ? ut.material : k, Ft = ut.group;
        vt.layers.test(B.layers) && Wa(vt, N, B, St, Nt, Ft);
      }
    }
    function Wa(M, N, B, k, U, tt) {
      M.onBeforeRender(x, N, B, k, U, tt), M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse, M.matrixWorld), M.normalMatrix.getNormalMatrix(M.modelViewMatrix), U.onBeforeRender(x, N, B, k, M, tt), U.transparent === true && U.side === an && U.forceSinglePass === false ? (U.side = Fe, U.needsUpdate = true, x.renderBufferDirect(B, N, k, U, M, tt), U.side = bn, U.needsUpdate = true, x.renderBufferDirect(B, N, k, U, M, tt), U.side = an) : x.renderBufferDirect(B, N, k, U, M, tt), M.onAfterRender(x, N, B, k, U, tt);
    }
    function Ls(M, N, B) {
      N.isScene !== true && (N = jt);
      const k = ft.get(M), U = p.state.lights, tt = p.state.shadowsArray, ut = U.state.version, vt = At.getParameters(M, U.state, tt, N, B), St = At.getProgramCacheKey(vt);
      let Nt = k.programs;
      k.environment = M.isMeshStandardMaterial ? N.environment : null, k.fog = N.fog, k.envMap = (M.isMeshStandardMaterial ? F : v).get(M.envMap || k.environment), k.envMapRotation = k.environment !== null && M.envMap === null ? N.environmentRotation : M.envMapRotation, Nt === void 0 && (M.addEventListener("dispose", kt), Nt = /* @__PURE__ */ new Map(), k.programs = Nt);
      let Ft = Nt.get(St);
      if (Ft !== void 0) {
        if (k.currentProgram === Ft && k.lightsStateVersion === ut) return Ya(M, vt), Ft;
      } else vt.uniforms = At.getUniforms(M), M.onBeforeCompile(vt, x), Ft = At.acquireProgram(vt, St), Nt.set(St, Ft), k.uniforms = vt.uniforms;
      const wt = k.uniforms;
      return (!M.isShaderMaterial && !M.isRawShaderMaterial || M.clipping === true) && (wt.clippingPlanes = et.uniform), Ya(M, vt), k.needsLights = Ph(M), k.lightsStateVersion = ut, k.needsLights && (wt.ambientLightColor.value = U.state.ambient, wt.lightProbe.value = U.state.probe, wt.directionalLights.value = U.state.directional, wt.directionalLightShadows.value = U.state.directionalShadow, wt.spotLights.value = U.state.spot, wt.spotLightShadows.value = U.state.spotShadow, wt.rectAreaLights.value = U.state.rectArea, wt.ltc_1.value = U.state.rectAreaLTC1, wt.ltc_2.value = U.state.rectAreaLTC2, wt.pointLights.value = U.state.point, wt.pointLightShadows.value = U.state.pointShadow, wt.hemisphereLights.value = U.state.hemi, wt.directionalShadowMap.value = U.state.directionalShadowMap, wt.directionalShadowMatrix.value = U.state.directionalShadowMatrix, wt.spotShadowMap.value = U.state.spotShadowMap, wt.spotLightMatrix.value = U.state.spotLightMatrix, wt.spotLightMap.value = U.state.spotLightMap, wt.pointShadowMap.value = U.state.pointShadowMap, wt.pointShadowMatrix.value = U.state.pointShadowMatrix), k.currentProgram = Ft, k.uniformsList = null, Ft;
    }
    function Xa(M) {
      if (M.uniformsList === null) {
        const N = M.currentProgram.getUniforms();
        M.uniformsList = gr.seqWithValue(N.seq, M.uniforms);
      }
      return M.uniformsList;
    }
    function Ya(M, N) {
      const B = ft.get(M);
      B.outputColorSpace = N.outputColorSpace, B.batching = N.batching, B.batchingColor = N.batchingColor, B.instancing = N.instancing, B.instancingColor = N.instancingColor, B.instancingMorph = N.instancingMorph, B.skinning = N.skinning, B.morphTargets = N.morphTargets, B.morphNormals = N.morphNormals, B.morphColors = N.morphColors, B.morphTargetsCount = N.morphTargetsCount, B.numClippingPlanes = N.numClippingPlanes, B.numIntersection = N.numClipIntersection, B.vertexAlphas = N.vertexAlphas, B.vertexTangents = N.vertexTangents, B.toneMapping = N.toneMapping;
    }
    function Rh(M, N, B, k, U) {
      N.isScene !== true && (N = jt), A.resetTextureUnits();
      const tt = N.fog, ut = k.isMeshStandardMaterial ? N.environment : null, vt = I === null ? x.outputColorSpace : I.isXRRenderTarget === true ? I.texture.colorSpace : Ie, St = (k.isMeshStandardMaterial ? F : v).get(k.envMap || ut), Nt = k.vertexColors === true && !!B.attributes.color && B.attributes.color.itemSize === 4, Ft = !!B.attributes.tangent && (!!k.normalMap || k.anisotropy > 0), wt = !!B.morphAttributes.position, $t = !!B.morphAttributes.normal, Qt = !!B.morphAttributes.color;
      let fe = zn;
      k.toneMapped && (I === null || I.isXRRenderTarget === true) && (fe = x.toneMapping);
      const de = B.morphAttributes.position || B.morphAttributes.normal || B.morphAttributes.color, Kt = de !== void 0 ? de.length : 0, Rt = ft.get(k), ye = p.state.lights;
      if (st === true && (Et === true || M !== y)) {
        const Te = M === y && k.id === E;
        et.setState(k, M, Te);
      }
      let te = false;
      k.version === Rt.__version ? (Rt.needsLights && Rt.lightsStateVersion !== ye.state.version || Rt.outputColorSpace !== vt || U.isBatchedMesh && Rt.batching === false || !U.isBatchedMesh && Rt.batching === true || U.isBatchedMesh && Rt.batchingColor === true && U.colorTexture === null || U.isBatchedMesh && Rt.batchingColor === false && U.colorTexture !== null || U.isInstancedMesh && Rt.instancing === false || !U.isInstancedMesh && Rt.instancing === true || U.isSkinnedMesh && Rt.skinning === false || !U.isSkinnedMesh && Rt.skinning === true || U.isInstancedMesh && Rt.instancingColor === true && U.instanceColor === null || U.isInstancedMesh && Rt.instancingColor === false && U.instanceColor !== null || U.isInstancedMesh && Rt.instancingMorph === true && U.morphTexture === null || U.isInstancedMesh && Rt.instancingMorph === false && U.morphTexture !== null || Rt.envMap !== St || k.fog === true && Rt.fog !== tt || Rt.numClippingPlanes !== void 0 && (Rt.numClippingPlanes !== et.numPlanes || Rt.numIntersection !== et.numIntersection) || Rt.vertexAlphas !== Nt || Rt.vertexTangents !== Ft || Rt.morphTargets !== wt || Rt.morphNormals !== $t || Rt.morphColors !== Qt || Rt.toneMapping !== fe || Rt.morphTargetsCount !== Kt) && (te = true) : (te = true, Rt.__version = k.version);
      let Ke = Rt.currentProgram;
      te === true && (Ke = Ls(k, N, U));
      let di = false, Oe = false, es = false;
      const ce = Ke.getUniforms(), Ve = Rt.uniforms;
      if (rt.useProgram(Ke.program) && (di = true, Oe = true, es = true), k.id !== E && (E = k.id, Oe = true), di || y !== M) {
        rt.buffers.depth.getReversed() ? (ot.copy(M.projectionMatrix), Gu(ot), Wu(ot), ce.setValue(T, "projectionMatrix", ot)) : ce.setValue(T, "projectionMatrix", M.projectionMatrix), ce.setValue(T, "viewMatrix", M.matrixWorldInverse);
        const De = ce.map.cameraPosition;
        De !== void 0 && De.setValue(T, Ut.setFromMatrixPosition(M.matrixWorld)), _t.logarithmicDepthBuffer && ce.setValue(T, "logDepthBufFC", 2 / (Math.log(M.far + 1) / Math.LN2)), (k.isMeshPhongMaterial || k.isMeshToonMaterial || k.isMeshLambertMaterial || k.isMeshBasicMaterial || k.isMeshStandardMaterial || k.isShaderMaterial) && ce.setValue(T, "isOrthographic", M.isOrthographicCamera === true), y !== M && (y = M, Oe = true, es = true);
      }
      if (U.isSkinnedMesh) {
        ce.setOptional(T, U, "bindMatrix"), ce.setOptional(T, U, "bindMatrixInverse");
        const Te = U.skeleton;
        Te && (Te.boneTexture === null && Te.computeBoneTexture(), ce.setValue(T, "boneTexture", Te.boneTexture, A));
      }
      U.isBatchedMesh && (ce.setOptional(T, U, "batchingTexture"), ce.setValue(T, "batchingTexture", U._matricesTexture, A), ce.setOptional(T, U, "batchingIdTexture"), ce.setValue(T, "batchingIdTexture", U._indirectTexture, A), ce.setOptional(T, U, "batchingColorTexture"), U._colorsTexture !== null && ce.setValue(T, "batchingColorTexture", U._colorsTexture, A));
      const Ge = B.morphAttributes;
      if ((Ge.position !== void 0 || Ge.normal !== void 0 || Ge.color !== void 0) && Dt.update(U, B, Ke), (Oe || Rt.receiveShadow !== U.receiveShadow) && (Rt.receiveShadow = U.receiveShadow, ce.setValue(T, "receiveShadow", U.receiveShadow)), k.isMeshGouraudMaterial && k.envMap !== null && (Ve.envMap.value = St, Ve.flipEnvMap.value = St.isCubeTexture && St.isRenderTargetTexture === false ? -1 : 1), k.isMeshStandardMaterial && k.envMap === null && N.environment !== null && (Ve.envMapIntensity.value = N.environmentIntensity), Oe && (ce.setValue(T, "toneMappingExposure", x.toneMappingExposure), Rt.needsLights && Ch(Ve, es), tt && k.fog === true && ct.refreshFogUniforms(Ve, tt), ct.refreshMaterialUniforms(Ve, k, G, nt, p.state.transmissionRenderTarget[M.id]), gr.upload(T, Xa(Rt), Ve, A)), k.isShaderMaterial && k.uniformsNeedUpdate === true && (gr.upload(T, Xa(Rt), Ve, A), k.uniformsNeedUpdate = false), k.isSpriteMaterial && ce.setValue(T, "center", U.center), ce.setValue(T, "modelViewMatrix", U.modelViewMatrix), ce.setValue(T, "normalMatrix", U.normalMatrix), ce.setValue(T, "modelMatrix", U.matrixWorld), k.isShaderMaterial || k.isRawShaderMaterial) {
        const Te = k.uniformsGroups;
        for (let De = 0, Cr = Te.length; De < Cr; De++) {
          const Xn = Te[De];
          D.update(Xn, Ke), D.bind(Xn, Ke);
        }
      }
      return Ke;
    }
    function Ch(M, N) {
      M.ambientLightColor.needsUpdate = N, M.lightProbe.needsUpdate = N, M.directionalLights.needsUpdate = N, M.directionalLightShadows.needsUpdate = N, M.pointLights.needsUpdate = N, M.pointLightShadows.needsUpdate = N, M.spotLights.needsUpdate = N, M.spotLightShadows.needsUpdate = N, M.rectAreaLights.needsUpdate = N, M.hemisphereLights.needsUpdate = N;
    }
    function Ph(M) {
      return M.isMeshLambertMaterial || M.isMeshToonMaterial || M.isMeshPhongMaterial || M.isMeshStandardMaterial || M.isShadowMaterial || M.isShaderMaterial && M.lights === true;
    }
    this.getActiveCubeFace = function() {
      return R;
    }, this.getActiveMipmapLevel = function() {
      return C;
    }, this.getRenderTarget = function() {
      return I;
    }, this.setRenderTargetTextures = function(M, N, B) {
      ft.get(M.texture).__webglTexture = N, ft.get(M.depthTexture).__webglTexture = B;
      const k = ft.get(M);
      k.__hasExternalTextures = true, k.__autoAllocateDepthBuffer = B === void 0, k.__autoAllocateDepthBuffer || J.has("WEBGL_multisampled_render_to_texture") === true && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), k.__useRenderToTexture = false);
    }, this.setRenderTargetFramebuffer = function(M, N) {
      const B = ft.get(M);
      B.__webglFramebuffer = N, B.__useDefaultFramebuffer = N === void 0;
    }, this.setRenderTarget = function(M, N = 0, B = 0) {
      I = M, R = N, C = B;
      let k = true, U = null, tt = false, ut = false;
      if (M) {
        const St = ft.get(M);
        if (St.__useDefaultFramebuffer !== void 0) rt.bindFramebuffer(T.FRAMEBUFFER, null), k = false;
        else if (St.__webglFramebuffer === void 0) A.setupRenderTarget(M);
        else if (St.__hasExternalTextures) A.rebindTextures(M, ft.get(M.texture).__webglTexture, ft.get(M.depthTexture).__webglTexture);
        else if (M.depthBuffer) {
          const wt = M.depthTexture;
          if (St.__boundDepthTexture !== wt) {
            if (wt !== null && ft.has(wt) && (M.width !== wt.image.width || M.height !== wt.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            A.setupDepthRenderbuffer(M);
          }
        }
        const Nt = M.texture;
        (Nt.isData3DTexture || Nt.isDataArrayTexture || Nt.isCompressedArrayTexture) && (ut = true);
        const Ft = ft.get(M).__webglFramebuffer;
        M.isWebGLCubeRenderTarget ? (Array.isArray(Ft[N]) ? U = Ft[N][B] : U = Ft[N], tt = true) : M.samples > 0 && A.useMultisampledRTT(M) === false ? U = ft.get(M).__webglMultisampledFramebuffer : Array.isArray(Ft) ? U = Ft[B] : U = Ft, P.copy(M.viewport), V.copy(M.scissor), O = M.scissorTest;
      } else P.copy(Mt).multiplyScalar(G).floor(), V.copy(Bt).multiplyScalar(G).floor(), O = Jt;
      if (rt.bindFramebuffer(T.FRAMEBUFFER, U) && k && rt.drawBuffers(M, U), rt.viewport(P), rt.scissor(V), rt.setScissorTest(O), tt) {
        const St = ft.get(M.texture);
        T.framebufferTexture2D(T.FRAMEBUFFER, T.COLOR_ATTACHMENT0, T.TEXTURE_CUBE_MAP_POSITIVE_X + N, St.__webglTexture, B);
      } else if (ut) {
        const St = ft.get(M.texture), Nt = N || 0;
        T.framebufferTextureLayer(T.FRAMEBUFFER, T.COLOR_ATTACHMENT0, St.__webglTexture, B || 0, Nt);
      }
      E = -1;
    }, this.readRenderTargetPixels = function(M, N, B, k, U, tt, ut) {
      if (!(M && M.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let vt = ft.get(M).__webglFramebuffer;
      if (M.isWebGLCubeRenderTarget && ut !== void 0 && (vt = vt[ut]), vt) {
        rt.bindFramebuffer(T.FRAMEBUFFER, vt);
        try {
          const St = M.texture, Nt = St.format, Ft = St.type;
          if (!_t.textureFormatReadable(Nt)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!_t.textureTypeReadable(Ft)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          N >= 0 && N <= M.width - k && B >= 0 && B <= M.height - U && T.readPixels(N, B, k, U, Vt.convert(Nt), Vt.convert(Ft), tt);
        } finally {
          const St = I !== null ? ft.get(I).__webglFramebuffer : null;
          rt.bindFramebuffer(T.FRAMEBUFFER, St);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(M, N, B, k, U, tt, ut) {
      if (!(M && M.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let vt = ft.get(M).__webglFramebuffer;
      if (M.isWebGLCubeRenderTarget && ut !== void 0 && (vt = vt[ut]), vt) {
        const St = M.texture, Nt = St.format, Ft = St.type;
        if (!_t.textureFormatReadable(Nt)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!_t.textureTypeReadable(Ft)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        if (N >= 0 && N <= M.width - k && B >= 0 && B <= M.height - U) {
          rt.bindFramebuffer(T.FRAMEBUFFER, vt);
          const wt = T.createBuffer();
          T.bindBuffer(T.PIXEL_PACK_BUFFER, wt), T.bufferData(T.PIXEL_PACK_BUFFER, tt.byteLength, T.STREAM_READ), T.readPixels(N, B, k, U, Vt.convert(Nt), Vt.convert(Ft), 0);
          const $t = I !== null ? ft.get(I).__webglFramebuffer : null;
          rt.bindFramebuffer(T.FRAMEBUFFER, $t);
          const Qt = T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return T.flush(), await Vu(T, Qt, 4), T.bindBuffer(T.PIXEL_PACK_BUFFER, wt), T.getBufferSubData(T.PIXEL_PACK_BUFFER, 0, tt), T.deleteBuffer(wt), T.deleteSync(Qt), tt;
        } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }
    }, this.copyFramebufferToTexture = function(M, N = null, B = 0) {
      M.isTexture !== true && (Ri("WebGLRenderer: copyFramebufferToTexture function signature has changed."), N = arguments[0] || null, M = arguments[1]);
      const k = Math.pow(2, -B), U = Math.floor(M.image.width * k), tt = Math.floor(M.image.height * k), ut = N !== null ? N.x : 0, vt = N !== null ? N.y : 0;
      A.setTexture2D(M, 0), T.copyTexSubImage2D(T.TEXTURE_2D, B, 0, 0, ut, vt, U, tt), rt.unbindTexture();
    };
    const Lh = T.createFramebuffer(), Ih = T.createFramebuffer();
    this.copyTextureToTexture = function(M, N, B = null, k = null, U = 0, tt = null) {
      M.isTexture !== true && (Ri("WebGLRenderer: copyTextureToTexture function signature has changed."), k = arguments[0] || null, M = arguments[1], N = arguments[2], tt = arguments[3] || 0, B = null), tt === null && (U !== 0 ? (Ri("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), tt = U, U = 0) : tt = 0);
      let ut, vt, St, Nt, Ft, wt, $t, Qt, fe;
      const de = M.isCompressedTexture ? M.mipmaps[tt] : M.image;
      if (B !== null) ut = B.max.x - B.min.x, vt = B.max.y - B.min.y, St = B.isBox3 ? B.max.z - B.min.z : 1, Nt = B.min.x, Ft = B.min.y, wt = B.isBox3 ? B.min.z : 0;
      else {
        const Ge = Math.pow(2, -U);
        ut = Math.floor(de.width * Ge), vt = Math.floor(de.height * Ge), M.isDataArrayTexture ? St = de.depth : M.isData3DTexture ? St = Math.floor(de.depth * Ge) : St = 1, Nt = 0, Ft = 0, wt = 0;
      }
      k !== null ? ($t = k.x, Qt = k.y, fe = k.z) : ($t = 0, Qt = 0, fe = 0);
      const Kt = Vt.convert(N.format), Rt = Vt.convert(N.type);
      let ye;
      N.isData3DTexture ? (A.setTexture3D(N, 0), ye = T.TEXTURE_3D) : N.isDataArrayTexture || N.isCompressedArrayTexture ? (A.setTexture2DArray(N, 0), ye = T.TEXTURE_2D_ARRAY) : (A.setTexture2D(N, 0), ye = T.TEXTURE_2D), T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL, N.flipY), T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL, N.premultiplyAlpha), T.pixelStorei(T.UNPACK_ALIGNMENT, N.unpackAlignment);
      const te = T.getParameter(T.UNPACK_ROW_LENGTH), Ke = T.getParameter(T.UNPACK_IMAGE_HEIGHT), di = T.getParameter(T.UNPACK_SKIP_PIXELS), Oe = T.getParameter(T.UNPACK_SKIP_ROWS), es = T.getParameter(T.UNPACK_SKIP_IMAGES);
      T.pixelStorei(T.UNPACK_ROW_LENGTH, de.width), T.pixelStorei(T.UNPACK_IMAGE_HEIGHT, de.height), T.pixelStorei(T.UNPACK_SKIP_PIXELS, Nt), T.pixelStorei(T.UNPACK_SKIP_ROWS, Ft), T.pixelStorei(T.UNPACK_SKIP_IMAGES, wt);
      const ce = M.isDataArrayTexture || M.isData3DTexture, Ve = N.isDataArrayTexture || N.isData3DTexture;
      if (M.isDepthTexture) {
        const Ge = ft.get(M), Te = ft.get(N), De = ft.get(Ge.__renderTarget), Cr = ft.get(Te.__renderTarget);
        rt.bindFramebuffer(T.READ_FRAMEBUFFER, De.__webglFramebuffer), rt.bindFramebuffer(T.DRAW_FRAMEBUFFER, Cr.__webglFramebuffer);
        for (let Xn = 0; Xn < St; Xn++) ce && (T.framebufferTextureLayer(T.READ_FRAMEBUFFER, T.COLOR_ATTACHMENT0, ft.get(M).__webglTexture, U, wt + Xn), T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER, T.COLOR_ATTACHMENT0, ft.get(N).__webglTexture, tt, fe + Xn)), T.blitFramebuffer(Nt, Ft, ut, vt, $t, Qt, ut, vt, T.DEPTH_BUFFER_BIT, T.NEAREST);
        rt.bindFramebuffer(T.READ_FRAMEBUFFER, null), rt.bindFramebuffer(T.DRAW_FRAMEBUFFER, null);
      } else if (U !== 0 || M.isRenderTargetTexture || ft.has(M)) {
        const Ge = ft.get(M), Te = ft.get(N);
        rt.bindFramebuffer(T.READ_FRAMEBUFFER, Lh), rt.bindFramebuffer(T.DRAW_FRAMEBUFFER, Ih);
        for (let De = 0; De < St; De++) ce ? T.framebufferTextureLayer(T.READ_FRAMEBUFFER, T.COLOR_ATTACHMENT0, Ge.__webglTexture, U, wt + De) : T.framebufferTexture2D(T.READ_FRAMEBUFFER, T.COLOR_ATTACHMENT0, T.TEXTURE_2D, Ge.__webglTexture, U), Ve ? T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER, T.COLOR_ATTACHMENT0, Te.__webglTexture, tt, fe + De) : T.framebufferTexture2D(T.DRAW_FRAMEBUFFER, T.COLOR_ATTACHMENT0, T.TEXTURE_2D, Te.__webglTexture, tt), U !== 0 ? T.blitFramebuffer(Nt, Ft, ut, vt, $t, Qt, ut, vt, T.COLOR_BUFFER_BIT, T.NEAREST) : Ve ? T.copyTexSubImage3D(ye, tt, $t, Qt, fe + De, Nt, Ft, ut, vt) : T.copyTexSubImage2D(ye, tt, $t, Qt, Nt, Ft, ut, vt);
        rt.bindFramebuffer(T.READ_FRAMEBUFFER, null), rt.bindFramebuffer(T.DRAW_FRAMEBUFFER, null);
      } else Ve ? M.isDataTexture || M.isData3DTexture ? T.texSubImage3D(ye, tt, $t, Qt, fe, ut, vt, St, Kt, Rt, de.data) : N.isCompressedArrayTexture ? T.compressedTexSubImage3D(ye, tt, $t, Qt, fe, ut, vt, St, Kt, de.data) : T.texSubImage3D(ye, tt, $t, Qt, fe, ut, vt, St, Kt, Rt, de) : M.isDataTexture ? T.texSubImage2D(T.TEXTURE_2D, tt, $t, Qt, ut, vt, Kt, Rt, de.data) : M.isCompressedTexture ? T.compressedTexSubImage2D(T.TEXTURE_2D, tt, $t, Qt, de.width, de.height, Kt, de.data) : T.texSubImage2D(T.TEXTURE_2D, tt, $t, Qt, ut, vt, Kt, Rt, de);
      T.pixelStorei(T.UNPACK_ROW_LENGTH, te), T.pixelStorei(T.UNPACK_IMAGE_HEIGHT, Ke), T.pixelStorei(T.UNPACK_SKIP_PIXELS, di), T.pixelStorei(T.UNPACK_SKIP_ROWS, Oe), T.pixelStorei(T.UNPACK_SKIP_IMAGES, es), tt === 0 && N.generateMipmaps && T.generateMipmap(ye), rt.unbindTexture();
    }, this.copyTextureToTexture3D = function(M, N, B = null, k = null, U = 0) {
      return M.isTexture !== true && (Ri("WebGLRenderer: copyTextureToTexture3D function signature has changed."), B = arguments[0] || null, k = arguments[1] || null, M = arguments[2], N = arguments[3], U = arguments[4] || 0), Ri('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(M, N, B, k, U);
    }, this.initRenderTarget = function(M) {
      ft.get(M).__webglFramebuffer === void 0 && A.setupRenderTarget(M);
    }, this.initTexture = function(M) {
      M.isCubeTexture ? A.setTextureCube(M, 0) : M.isData3DTexture ? A.setTexture3D(M, 0) : M.isDataArrayTexture || M.isCompressedArrayTexture ? A.setTexture2DArray(M, 0) : A.setTexture2D(M, 0), rt.unbindTexture();
    }, this.resetState = function() {
      R = 0, C = 0, I = null, rt.reset(), oe.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return En;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(t) {
    this._outputColorSpace = t;
    const e = this.getContext();
    e.drawingBufferColorspace = qt._getDrawingBufferColorSpace(t), e.unpackColorSpace = qt._getUnpackColorSpace();
  }
}
/**
* lil-gui
* https://lil-gui.georgealways.com
* @version 0.17.0
* @author George Michael Brower
* @license MIT
*/
class ln {
  constructor(t, e, n, i, r = "div") {
    this.parent = t, this.object = e, this.property = n, this._disabled = false, this._hidden = false, this.initialValue = this.getValue(), this.domElement = document.createElement("div"), this.domElement.classList.add("controller"), this.domElement.classList.add(i), this.$name = document.createElement("div"), this.$name.classList.add("name"), ln.nextNameID = ln.nextNameID || 0, this.$name.id = "lil-gui-name-" + ++ln.nextNameID, this.$widget = document.createElement(r), this.$widget.classList.add("widget"), this.$disable = this.$widget, this.domElement.appendChild(this.$name), this.domElement.appendChild(this.$widget), this.parent.children.push(this), this.parent.controllers.push(this), this.parent.$children.appendChild(this.domElement), this._listenCallback = this._listenCallback.bind(this), this.name(n);
  }
  name(t) {
    return this._name = t, this.$name.innerHTML = t, this;
  }
  onChange(t) {
    return this._onChange = t, this;
  }
  _callOnChange() {
    this.parent._callOnChange(this), this._onChange !== void 0 && this._onChange.call(this, this.getValue()), this._changed = true;
  }
  onFinishChange(t) {
    return this._onFinishChange = t, this;
  }
  _callOnFinishChange() {
    this._changed && (this.parent._callOnFinishChange(this), this._onFinishChange !== void 0 && this._onFinishChange.call(this, this.getValue())), this._changed = false;
  }
  reset() {
    return this.setValue(this.initialValue), this._callOnFinishChange(), this;
  }
  enable(t = true) {
    return this.disable(!t);
  }
  disable(t = true) {
    return t === this._disabled || (this._disabled = t, this.domElement.classList.toggle("disabled", t), this.$disable.toggleAttribute("disabled", t)), this;
  }
  show(t = true) {
    return this._hidden = !t, this.domElement.style.display = this._hidden ? "none" : "", this;
  }
  hide() {
    return this.show(false);
  }
  options(t) {
    const e = this.parent.add(this.object, this.property, t);
    return e.name(this._name), this.destroy(), e;
  }
  min(t) {
    return this;
  }
  max(t) {
    return this;
  }
  step(t) {
    return this;
  }
  decimals(t) {
    return this;
  }
  listen(t = true) {
    return this._listening = t, this._listenCallbackID !== void 0 && (cancelAnimationFrame(this._listenCallbackID), this._listenCallbackID = void 0), this._listening && this._listenCallback(), this;
  }
  _listenCallback() {
    this._listenCallbackID = requestAnimationFrame(this._listenCallback);
    const t = this.save();
    t !== this._listenPrevValue && this.updateDisplay(), this._listenPrevValue = t;
  }
  getValue() {
    return this.object[this.property];
  }
  setValue(t) {
    return this.object[this.property] = t, this._callOnChange(), this.updateDisplay(), this;
  }
  updateDisplay() {
    return this;
  }
  load(t) {
    return this.setValue(t), this._callOnFinishChange(), this;
  }
  save() {
    return this.getValue();
  }
  destroy() {
    this.listen(false), this.parent.children.splice(this.parent.children.indexOf(this), 1), this.parent.controllers.splice(this.parent.controllers.indexOf(this), 1), this.parent.$children.removeChild(this.domElement);
  }
}
class bv extends ln {
  constructor(t, e, n) {
    super(t, e, n, "boolean", "label"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "checkbox"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$widget.appendChild(this.$input), this.$input.addEventListener("change", () => {
      this.setValue(this.$input.checked), this._callOnFinishChange();
    }), this.$disable = this.$input, this.updateDisplay();
  }
  updateDisplay() {
    return this.$input.checked = this.getValue(), this;
  }
}
function ua(s) {
  let t, e;
  return (t = s.match(/(#|0x)?([a-f0-9]{6})/i)) ? e = t[2] : (t = s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/)) ? e = parseInt(t[1]).toString(16).padStart(2, 0) + parseInt(t[2]).toString(16).padStart(2, 0) + parseInt(t[3]).toString(16).padStart(2, 0) : (t = s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i)) && (e = t[1] + t[1] + t[2] + t[2] + t[3] + t[3]), !!e && "#" + e;
}
const Tv = { isPrimitive: true, match: (s) => typeof s == "string", fromHexString: ua, toHexString: ua }, Ts = { isPrimitive: true, match: (s) => typeof s == "number", fromHexString: (s) => parseInt(s.substring(1), 16), toHexString: (s) => "#" + s.toString(16).padStart(6, 0) }, wv = { isPrimitive: false, match: Array.isArray, fromHexString(s, t, e = 1) {
  const n = Ts.fromHexString(s);
  t[0] = (n >> 16 & 255) / 255 * e, t[1] = (n >> 8 & 255) / 255 * e, t[2] = (255 & n) / 255 * e;
}, toHexString: ([s, t, e], n = 1) => Ts.toHexString(s * (n = 255 / n) << 16 ^ t * n << 8 ^ e * n << 0) }, Rv = { isPrimitive: false, match: (s) => Object(s) === s, fromHexString(s, t, e = 1) {
  const n = Ts.fromHexString(s);
  t.r = (n >> 16 & 255) / 255 * e, t.g = (n >> 8 & 255) / 255 * e, t.b = (255 & n) / 255 * e;
}, toHexString: ({ r: s, g: t, b: e }, n = 1) => Ts.toHexString(s * (n = 255 / n) << 16 ^ t * n << 8 ^ e * n << 0) }, Cv = [Tv, Ts, wv, Rv];
class Pv extends ln {
  constructor(t, e, n, i) {
    var r;
    super(t, e, n, "color"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "color"), this.$input.setAttribute("tabindex", -1), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$text = document.createElement("input"), this.$text.setAttribute("type", "text"), this.$text.setAttribute("spellcheck", "false"), this.$text.setAttribute("aria-labelledby", this.$name.id), this.$display = document.createElement("div"), this.$display.classList.add("display"), this.$display.appendChild(this.$input), this.$widget.appendChild(this.$display), this.$widget.appendChild(this.$text), this._format = (r = this.initialValue, Cv.find((o) => o.match(r))), this._rgbScale = i, this._initialValueHexString = this.save(), this._textFocused = false, this.$input.addEventListener("input", () => {
      this._setValueFromHexString(this.$input.value);
    }), this.$input.addEventListener("blur", () => {
      this._callOnFinishChange();
    }), this.$text.addEventListener("input", () => {
      const o = ua(this.$text.value);
      o && this._setValueFromHexString(o);
    }), this.$text.addEventListener("focus", () => {
      this._textFocused = true, this.$text.select();
    }), this.$text.addEventListener("blur", () => {
      this._textFocused = false, this.updateDisplay(), this._callOnFinishChange();
    }), this.$disable = this.$text, this.updateDisplay();
  }
  reset() {
    return this._setValueFromHexString(this._initialValueHexString), this;
  }
  _setValueFromHexString(t) {
    if (this._format.isPrimitive) {
      const e = this._format.fromHexString(t);
      this.setValue(e);
    } else this._format.fromHexString(t, this.getValue(), this._rgbScale), this._callOnChange(), this.updateDisplay();
  }
  save() {
    return this._format.toHexString(this.getValue(), this._rgbScale);
  }
  load(t) {
    return this._setValueFromHexString(t), this._callOnFinishChange(), this;
  }
  updateDisplay() {
    return this.$input.value = this._format.toHexString(this.getValue(), this._rgbScale), this._textFocused || (this.$text.value = this.$input.value.substring(1)), this.$display.style.backgroundColor = this.$input.value, this;
  }
}
class fo extends ln {
  constructor(t, e, n) {
    super(t, e, n, "function"), this.$button = document.createElement("button"), this.$button.appendChild(this.$name), this.$widget.appendChild(this.$button), this.$button.addEventListener("click", (i) => {
      i.preventDefault(), this.getValue().call(this.object);
    }), this.$button.addEventListener("touchstart", () => {
    }, { passive: true }), this.$disable = this.$button;
  }
}
class Lv extends ln {
  constructor(t, e, n, i, r, o) {
    super(t, e, n, "number"), this._initInput(), this.min(i), this.max(r);
    const a = o !== void 0;
    this.step(a ? o : this._getImplicitStep(), a), this.updateDisplay();
  }
  decimals(t) {
    return this._decimals = t, this.updateDisplay(), this;
  }
  min(t) {
    return this._min = t, this._onUpdateMinMax(), this;
  }
  max(t) {
    return this._max = t, this._onUpdateMinMax(), this;
  }
  step(t, e = true) {
    return this._step = t, this._stepExplicit = e, this;
  }
  updateDisplay() {
    const t = this.getValue();
    if (this._hasSlider) {
      let e = (t - this._min) / (this._max - this._min);
      e = Math.max(0, Math.min(e, 1)), this.$fill.style.width = 100 * e + "%";
    }
    return this._inputFocused || (this.$input.value = this._decimals === void 0 ? t : t.toFixed(this._decimals)), this;
  }
  _initInput() {
    this.$input = document.createElement("input"), this.$input.setAttribute("type", "number"), this.$input.setAttribute("step", "any"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$widget.appendChild(this.$input), this.$disable = this.$input;
    const t = (h) => {
      const u = parseFloat(this.$input.value);
      isNaN(u) || (this._snapClampSetValue(u + h), this.$input.value = this.getValue());
    };
    let e, n, i, r, o, a = false;
    const l = (h) => {
      if (a) {
        const u = h.clientX - e, d = h.clientY - n;
        Math.abs(d) > 5 ? (h.preventDefault(), this.$input.blur(), a = false, this._setDraggingStyle(true, "vertical")) : Math.abs(u) > 5 && c();
      }
      if (!a) {
        const u = h.clientY - i;
        o -= u * this._step * this._arrowKeyMultiplier(h), r + o > this._max ? o = this._max - r : r + o < this._min && (o = this._min - r), this._snapClampSetValue(r + o);
      }
      i = h.clientY;
    }, c = () => {
      this._setDraggingStyle(false, "vertical"), this._callOnFinishChange(), window.removeEventListener("mousemove", l), window.removeEventListener("mouseup", c);
    };
    this.$input.addEventListener("input", () => {
      let h = parseFloat(this.$input.value);
      isNaN(h) || (this._stepExplicit && (h = this._snap(h)), this.setValue(this._clamp(h)));
    }), this.$input.addEventListener("keydown", (h) => {
      h.code === "Enter" && this.$input.blur(), h.code === "ArrowUp" && (h.preventDefault(), t(this._step * this._arrowKeyMultiplier(h))), h.code === "ArrowDown" && (h.preventDefault(), t(this._step * this._arrowKeyMultiplier(h) * -1));
    }), this.$input.addEventListener("wheel", (h) => {
      this._inputFocused && (h.preventDefault(), t(this._step * this._normalizeMouseWheel(h)));
    }, { passive: false }), this.$input.addEventListener("mousedown", (h) => {
      e = h.clientX, n = i = h.clientY, a = true, r = this.getValue(), o = 0, window.addEventListener("mousemove", l), window.addEventListener("mouseup", c);
    }), this.$input.addEventListener("focus", () => {
      this._inputFocused = true;
    }), this.$input.addEventListener("blur", () => {
      this._inputFocused = false, this.updateDisplay(), this._callOnFinishChange();
    });
  }
  _initSlider() {
    this._hasSlider = true, this.$slider = document.createElement("div"), this.$slider.classList.add("slider"), this.$fill = document.createElement("div"), this.$fill.classList.add("fill"), this.$slider.appendChild(this.$fill), this.$widget.insertBefore(this.$slider, this.$input), this.domElement.classList.add("hasSlider");
    const t = (d) => {
      const f = this.$slider.getBoundingClientRect();
      let g = (_ = d, m = f.left, p = f.right, b = this._min, S = this._max, (_ - m) / (p - m) * (S - b) + b);
      var _, m, p, b, S;
      this._snapClampSetValue(g);
    }, e = (d) => {
      t(d.clientX);
    }, n = () => {
      this._callOnFinishChange(), this._setDraggingStyle(false), window.removeEventListener("mousemove", e), window.removeEventListener("mouseup", n);
    };
    let i, r, o = false;
    const a = (d) => {
      d.preventDefault(), this._setDraggingStyle(true), t(d.touches[0].clientX), o = false;
    }, l = (d) => {
      if (o) {
        const f = d.touches[0].clientX - i, g = d.touches[0].clientY - r;
        Math.abs(f) > Math.abs(g) ? a(d) : (window.removeEventListener("touchmove", l), window.removeEventListener("touchend", c));
      } else d.preventDefault(), t(d.touches[0].clientX);
    }, c = () => {
      this._callOnFinishChange(), this._setDraggingStyle(false), window.removeEventListener("touchmove", l), window.removeEventListener("touchend", c);
    }, h = this._callOnFinishChange.bind(this);
    let u;
    this.$slider.addEventListener("mousedown", (d) => {
      this._setDraggingStyle(true), t(d.clientX), window.addEventListener("mousemove", e), window.addEventListener("mouseup", n);
    }), this.$slider.addEventListener("touchstart", (d) => {
      d.touches.length > 1 || (this._hasScrollBar ? (i = d.touches[0].clientX, r = d.touches[0].clientY, o = true) : a(d), window.addEventListener("touchmove", l, { passive: false }), window.addEventListener("touchend", c));
    }, { passive: false }), this.$slider.addEventListener("wheel", (d) => {
      if (Math.abs(d.deltaX) < Math.abs(d.deltaY) && this._hasScrollBar) return;
      d.preventDefault();
      const f = this._normalizeMouseWheel(d) * this._step;
      this._snapClampSetValue(this.getValue() + f), this.$input.value = this.getValue(), clearTimeout(u), u = setTimeout(h, 400);
    }, { passive: false });
  }
  _setDraggingStyle(t, e = "horizontal") {
    this.$slider && this.$slider.classList.toggle("active", t), document.body.classList.toggle("lil-gui-dragging", t), document.body.classList.toggle("lil-gui-" + e, t);
  }
  _getImplicitStep() {
    return this._hasMin && this._hasMax ? (this._max - this._min) / 1e3 : 0.1;
  }
  _onUpdateMinMax() {
    !this._hasSlider && this._hasMin && this._hasMax && (this._stepExplicit || this.step(this._getImplicitStep(), false), this._initSlider(), this.updateDisplay());
  }
  _normalizeMouseWheel(t) {
    let { deltaX: e, deltaY: n } = t;
    return Math.floor(t.deltaY) !== t.deltaY && t.wheelDelta && (e = 0, n = -t.wheelDelta / 120, n *= this._stepExplicit ? 1 : 10), e + -n;
  }
  _arrowKeyMultiplier(t) {
    let e = this._stepExplicit ? 1 : 10;
    return t.shiftKey ? e *= 10 : t.altKey && (e /= 10), e;
  }
  _snap(t) {
    const e = Math.round(t / this._step) * this._step;
    return parseFloat(e.toPrecision(15));
  }
  _clamp(t) {
    return t < this._min && (t = this._min), t > this._max && (t = this._max), t;
  }
  _snapClampSetValue(t) {
    this.setValue(this._clamp(this._snap(t)));
  }
  get _hasScrollBar() {
    const t = this.parent.root.$children;
    return t.scrollHeight > t.clientHeight;
  }
  get _hasMin() {
    return this._min !== void 0;
  }
  get _hasMax() {
    return this._max !== void 0;
  }
}
class Iv extends ln {
  constructor(t, e, n, i) {
    super(t, e, n, "option"), this.$select = document.createElement("select"), this.$select.setAttribute("aria-labelledby", this.$name.id), this.$display = document.createElement("div"), this.$display.classList.add("display"), this._values = Array.isArray(i) ? i : Object.values(i), this._names = Array.isArray(i) ? i : Object.keys(i), this._names.forEach((r) => {
      const o = document.createElement("option");
      o.innerHTML = r, this.$select.appendChild(o);
    }), this.$select.addEventListener("change", () => {
      this.setValue(this._values[this.$select.selectedIndex]), this._callOnFinishChange();
    }), this.$select.addEventListener("focus", () => {
      this.$display.classList.add("focus");
    }), this.$select.addEventListener("blur", () => {
      this.$display.classList.remove("focus");
    }), this.$widget.appendChild(this.$select), this.$widget.appendChild(this.$display), this.$disable = this.$select, this.updateDisplay();
  }
  updateDisplay() {
    const t = this.getValue(), e = this._values.indexOf(t);
    return this.$select.selectedIndex = e, this.$display.innerHTML = e === -1 ? t : this._names[e], this;
  }
}
class Dv extends ln {
  constructor(t, e, n) {
    super(t, e, n, "string"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "text"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$input.addEventListener("input", () => {
      this.setValue(this.$input.value);
    }), this.$input.addEventListener("keydown", (i) => {
      i.code === "Enter" && this.$input.blur();
    }), this.$input.addEventListener("blur", () => {
      this._callOnFinishChange();
    }), this.$widget.appendChild(this.$input), this.$disable = this.$input, this.updateDisplay();
  }
  updateDisplay() {
    return this.$input.value = this.getValue(), this;
  }
}
let vc = false;
class Ah {
  constructor({ parent: t, autoPlace: e = t === void 0, container: n, width: i, title: r = "Controls", injectStyles: o = true, touchStyles: a = true } = {}) {
    if (this.parent = t, this.root = t ? t.root : this, this.children = [], this.controllers = [], this.folders = [], this._closed = false, this._hidden = false, this.domElement = document.createElement("div"), this.domElement.classList.add("lil-gui"), this.$title = document.createElement("div"), this.$title.classList.add("title"), this.$title.setAttribute("role", "button"), this.$title.setAttribute("aria-expanded", true), this.$title.setAttribute("tabindex", 0), this.$title.addEventListener("click", () => this.openAnimated(this._closed)), this.$title.addEventListener("keydown", (l) => {
      l.code !== "Enter" && l.code !== "Space" || (l.preventDefault(), this.$title.click());
    }), this.$title.addEventListener("touchstart", () => {
    }, { passive: true }), this.$children = document.createElement("div"), this.$children.classList.add("children"), this.domElement.appendChild(this.$title), this.domElement.appendChild(this.$children), this.title(r), a && this.domElement.classList.add("allow-touch-styles"), this.parent) return this.parent.children.push(this), this.parent.folders.push(this), void this.parent.$children.appendChild(this.domElement);
    this.domElement.classList.add("root"), !vc && o && (function(l) {
      const c = document.createElement("style");
      c.innerHTML = l;
      const h = document.querySelector("head link[rel=stylesheet], head style");
      h ? document.head.insertBefore(c, h) : document.head.appendChild(c);
    }('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"\u2195";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"\u25BE";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"\u25B8"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"\u2713";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'), vc = true), n ? n.appendChild(this.domElement) : e && (this.domElement.classList.add("autoPlace"), document.body.appendChild(this.domElement)), i && this.domElement.style.setProperty("--width", i + "px"), this.domElement.addEventListener("keydown", (l) => l.stopPropagation()), this.domElement.addEventListener("keyup", (l) => l.stopPropagation());
  }
  add(t, e, n, i, r) {
    if (Object(n) === n) return new Iv(this, t, e, n);
    const o = t[e];
    switch (typeof o) {
      case "number":
        return new Lv(this, t, e, n, i, r);
      case "boolean":
        return new bv(this, t, e);
      case "string":
        return new Dv(this, t, e);
      case "function":
        return new fo(this, t, e);
    }
    console.error("gui.add failed\n	property:", e, "\n	object:", t, "\n	value:", o);
  }
  addColor(t, e, n = 1) {
    return new Pv(this, t, e, n);
  }
  addFolder(t) {
    return new Ah({ parent: this, title: t });
  }
  load(t, e = true) {
    return t.controllers && this.controllers.forEach((n) => {
      n instanceof fo || n._name in t.controllers && n.load(t.controllers[n._name]);
    }), e && t.folders && this.folders.forEach((n) => {
      n._title in t.folders && n.load(t.folders[n._title]);
    }), this;
  }
  save(t = true) {
    const e = { controllers: {}, folders: {} };
    return this.controllers.forEach((n) => {
      if (!(n instanceof fo)) {
        if (n._name in e.controllers) throw new Error('Cannot save GUI with duplicate property "'.concat(n._name, '"'));
        e.controllers[n._name] = n.save();
      }
    }), t && this.folders.forEach((n) => {
      if (n._title in e.folders) throw new Error('Cannot save GUI with duplicate folder "'.concat(n._title, '"'));
      e.folders[n._title] = n.save();
    }), e;
  }
  open(t = true) {
    return this._closed = !t, this.$title.setAttribute("aria-expanded", !this._closed), this.domElement.classList.toggle("closed", this._closed), this;
  }
  close() {
    return this.open(false);
  }
  show(t = true) {
    return this._hidden = !t, this.domElement.style.display = this._hidden ? "none" : "", this;
  }
  hide() {
    return this.show(false);
  }
  openAnimated(t = true) {
    return this._closed = !t, this.$title.setAttribute("aria-expanded", !this._closed), requestAnimationFrame(() => {
      const e = this.$children.clientHeight;
      this.$children.style.height = e + "px", this.domElement.classList.add("transition");
      const n = (r) => {
        r.target === this.$children && (this.$children.style.height = "", this.domElement.classList.remove("transition"), this.$children.removeEventListener("transitionend", n));
      };
      this.$children.addEventListener("transitionend", n);
      const i = t ? this.$children.scrollHeight : 0;
      this.domElement.classList.toggle("closed", !t), requestAnimationFrame(() => {
        this.$children.style.height = i + "px";
      });
    }), this;
  }
  title(t) {
    return this._title = t, this.$title.innerHTML = t, this;
  }
  reset(t = true) {
    return (t ? this.controllersRecursive() : this.controllers).forEach((e) => e.reset()), this;
  }
  onChange(t) {
    return this._onChange = t, this;
  }
  _callOnChange(t) {
    this.parent && this.parent._callOnChange(t), this._onChange !== void 0 && this._onChange.call(this, { object: t.object, property: t.property, value: t.getValue(), controller: t });
  }
  onFinishChange(t) {
    return this._onFinishChange = t, this;
  }
  _callOnFinishChange(t) {
    this.parent && this.parent._callOnFinishChange(t), this._onFinishChange !== void 0 && this._onFinishChange.call(this, { object: t.object, property: t.property, value: t.getValue(), controller: t });
  }
  destroy() {
    this.parent && (this.parent.children.splice(this.parent.children.indexOf(this), 1), this.parent.folders.splice(this.parent.folders.indexOf(this), 1)), this.domElement.parentElement && this.domElement.parentElement.removeChild(this.domElement), Array.from(this.children).forEach((t) => t.destroy());
  }
  controllersRecursive() {
    let t = Array.from(this.controllers);
    return this.folders.forEach((e) => {
      t = t.concat(e.controllersRecursive());
    }), t;
  }
  foldersRecursive() {
    let t = Array.from(this.folders);
    return this.folders.forEach((e) => {
      t = t.concat(e.foldersRecursive());
    }), t;
  }
}
var _r = function() {
  var s = 0, t = document.createElement("div");
  t.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", t.addEventListener("click", function(h) {
    h.preventDefault(), n(++s % t.children.length);
  }, false);
  function e(h) {
    return t.appendChild(h.dom), h;
  }
  function n(h) {
    for (var u = 0; u < t.children.length; u++) t.children[u].style.display = u === h ? "block" : "none";
    s = h;
  }
  var i = (performance || Date).now(), r = i, o = 0, a = e(new _r.Panel("FPS", "#0ff", "#002")), l = e(new _r.Panel("MS", "#0f0", "#020"));
  if (self.performance && self.performance.memory) var c = e(new _r.Panel("MB", "#f08", "#201"));
  return n(0), { REVISION: 16, dom: t, addPanel: e, showPanel: n, begin: function() {
    i = (performance || Date).now();
  }, end: function() {
    o++;
    var h = (performance || Date).now();
    if (l.update(h - i, 200), h >= r + 1e3 && (a.update(o * 1e3 / (h - r), 100), r = h, o = 0, c)) {
      var u = performance.memory;
      c.update(u.usedJSHeapSize / 1048576, u.jsHeapSizeLimit / 1048576);
    }
    return h;
  }, update: function() {
    i = this.end();
  }, domElement: t, setMode: n };
};
_r.Panel = function(s, t, e) {
  var n = 1 / 0, i = 0, r = Math.round, o = r(window.devicePixelRatio || 1), a = 80 * o, l = 48 * o, c = 3 * o, h = 2 * o, u = 3 * o, d = 15 * o, f = 74 * o, g = 30 * o, _ = document.createElement("canvas");
  _.width = a, _.height = l, _.style.cssText = "width:80px;height:48px";
  var m = _.getContext("2d");
  return m.font = "bold " + 9 * o + "px Helvetica,Arial,sans-serif", m.textBaseline = "top", m.fillStyle = e, m.fillRect(0, 0, a, l), m.fillStyle = t, m.fillText(s, c, h), m.fillRect(u, d, f, g), m.fillStyle = e, m.globalAlpha = 0.9, m.fillRect(u, d, f, g), { dom: _, update: function(p, b) {
    n = Math.min(n, p), i = Math.max(i, p), m.fillStyle = e, m.globalAlpha = 1, m.fillRect(0, 0, a, d), m.fillStyle = t, m.fillText(r(p) + " " + s + " (" + r(n) + "-" + r(i) + ")", c, h), m.drawImage(_, u + o, d, f - o, g, u, d, f - o, g), m.fillRect(u + f - o, d, o, g), m.fillStyle = e, m.globalAlpha = 0.9, m.fillRect(u + f - o, d, o, r((1 - p / b) * g));
  } };
};
const xc = { type: "change" }, ka = { type: "start" }, bh = { type: "end" }, cr = new Ki(), yc = new Un(), Nv = Math.cos(70 * zc.DEG2RAD), me = new w(), Ne = 2 * Math.PI, re = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 }, po = 1e-6;
class Bx extends Vf {
  constructor(t, e = null) {
    super(t, e), this.state = re.NONE, this.enabled = true, this.target = new w(), this.cursor = new w(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = false, this.dampingFactor = 0.05, this.enableZoom = true, this.zoomSpeed = 1, this.enableRotate = true, this.rotateSpeed = 1, this.enablePan = true, this.panSpeed = 1, this.screenSpacePanning = true, this.keyPanSpeed = 7, this.zoomToCursor = false, this.autoRotate = false, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Ni.ROTATE, MIDDLE: Ni.DOLLY, RIGHT: Ni.PAN }, this.touches = { ONE: Ci.ROTATE, TWO: Ci.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new w(), this._lastQuaternion = new Pe(), this._lastTargetPosition = new w(), this._quat = new Pe().setFromUnitVectors(t.up, new w(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new Yl(), this._sphericalDelta = new Yl(), this._scale = 1, this._panOffset = new w(), this._rotateStart = new Q(), this._rotateEnd = new Q(), this._rotateDelta = new Q(), this._panStart = new Q(), this._panEnd = new Q(), this._panDelta = new Q(), this._dollyStart = new Q(), this._dollyEnd = new Q(), this._dollyDelta = new Q(), this._dollyDirection = new w(), this._mouse = new Q(), this._performCursorZoom = false, this._pointers = [], this._pointerPositions = {}, this._controlActive = false, this._onPointerMove = Fv.bind(this), this._onPointerDown = Uv.bind(this), this._onPointerUp = Ov.bind(this), this._onContextMenu = Wv.bind(this), this._onMouseWheel = zv.bind(this), this._onKeyDown = Hv.bind(this), this._onTouchStart = Vv.bind(this), this._onTouchMove = Gv.bind(this), this._onMouseDown = Bv.bind(this), this._onMouseMove = kv.bind(this), this._interceptControlDown = Xv.bind(this), this._interceptControlUp = Yv.bind(this), this.domElement !== null && this.connect(), this.update();
  }
  connect() {
    this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: false }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, { passive: true, capture: true }), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: true }), this.domElement.style.touchAction = "auto";
  }
  dispose() {
    this.disconnect();
  }
  getPolarAngle() {
    return this._spherical.phi;
  }
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  listenToKeyEvents(t) {
    t.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = t;
  }
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
  }
  saveState() {
    this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
  }
  reset() {
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(xc), this.update(), this.state = re.NONE;
  }
  update(t = null) {
    const e = this.object.position;
    me.copy(e).sub(this.target), me.applyQuaternion(this._quat), this._spherical.setFromVector3(me), this.autoRotate && this.state === re.NONE && this._rotateLeft(this._getAutoRotationAngle(t)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let n = this.minAzimuthAngle, i = this.maxAzimuthAngle;
    isFinite(n) && isFinite(i) && (n < -Math.PI ? n += Ne : n > Math.PI && (n -= Ne), i < -Math.PI ? i += Ne : i > Math.PI && (i -= Ne), n <= i ? this._spherical.theta = Math.max(n, Math.min(i, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + i) / 2 ? Math.max(n, this._spherical.theta) : Math.min(i, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === true ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let r = false;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const o = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), r = o != this._spherical.radius;
    }
    if (me.setFromSpherical(this._spherical), me.applyQuaternion(this._quatInverse), e.copy(this.target).add(me), this.object.lookAt(this.target), this.enableDamping === true ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let o = null;
      if (this.object.isPerspectiveCamera) {
        const a = me.length();
        o = this._clampDistance(a * this._scale);
        const l = a - o;
        this.object.position.addScaledVector(this._dollyDirection, l), this.object.updateMatrixWorld(), r = !!l;
      } else if (this.object.isOrthographicCamera) {
        const a = new w(this._mouse.x, this._mouse.y, 0);
        a.unproject(this.object);
        const l = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), r = l !== this.object.zoom;
        const c = new w(this._mouse.x, this._mouse.y, 0);
        c.unproject(this.object), this.object.position.sub(c).add(a), this.object.updateMatrixWorld(), o = me.length();
      } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = false;
      o !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position) : (cr.origin.copy(this.object.position), cr.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(cr.direction)) < Nv ? this.object.lookAt(this.target) : (yc.setFromNormalAndCoplanarPoint(this.object.up, this.target), cr.intersectPlane(yc, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const o = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), o !== this.object.zoom && (this.object.updateProjectionMatrix(), r = true);
    }
    return this._scale = 1, this._performCursorZoom = false, r || this._lastPosition.distanceToSquared(this.object.position) > po || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > po || this._lastTargetPosition.distanceToSquared(this.target) > po ? (this.dispatchEvent(xc), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), true) : false;
  }
  _getAutoRotationAngle(t) {
    return t !== null ? Ne / 60 * this.autoRotateSpeed * t : Ne / 60 / 60 * this.autoRotateSpeed;
  }
  _getZoomScale(t) {
    const e = Math.abs(t * 0.01);
    return Math.pow(0.95, this.zoomSpeed * e);
  }
  _rotateLeft(t) {
    this._sphericalDelta.theta -= t;
  }
  _rotateUp(t) {
    this._sphericalDelta.phi -= t;
  }
  _panLeft(t, e) {
    me.setFromMatrixColumn(e, 0), me.multiplyScalar(-t), this._panOffset.add(me);
  }
  _panUp(t, e) {
    this.screenSpacePanning === true ? me.setFromMatrixColumn(e, 1) : (me.setFromMatrixColumn(e, 0), me.crossVectors(this.object.up, me)), me.multiplyScalar(t), this._panOffset.add(me);
  }
  _pan(t, e) {
    const n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const i = this.object.position;
      me.copy(i).sub(this.target);
      let r = me.length();
      r *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * t * r / n.clientHeight, this.object.matrix), this._panUp(2 * e * r / n.clientHeight, this.object.matrix);
    } else this.object.isOrthographicCamera ? (this._panLeft(t * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix), this._panUp(e * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = false);
  }
  _dollyOut(t) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
  }
  _dollyIn(t) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
  }
  _updateZoomParameters(t, e) {
    if (!this.zoomToCursor) return;
    this._performCursorZoom = true;
    const n = this.domElement.getBoundingClientRect(), i = t - n.left, r = e - n.top, o = n.width, a = n.height;
    this._mouse.x = i / o * 2 - 1, this._mouse.y = -(r / a) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
  }
  _clampDistance(t) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, t));
  }
  _handleMouseDownRotate(t) {
    this._rotateStart.set(t.clientX, t.clientY);
  }
  _handleMouseDownDolly(t) {
    this._updateZoomParameters(t.clientX, t.clientX), this._dollyStart.set(t.clientX, t.clientY);
  }
  _handleMouseDownPan(t) {
    this._panStart.set(t.clientX, t.clientY);
  }
  _handleMouseMoveRotate(t) {
    this._rotateEnd.set(t.clientX, t.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const e = this.domElement;
    this._rotateLeft(Ne * this._rotateDelta.x / e.clientHeight), this._rotateUp(Ne * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
  }
  _handleMouseMoveDolly(t) {
    this._dollyEnd.set(t.clientX, t.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
  }
  _handleMouseMovePan(t) {
    this._panEnd.set(t.clientX, t.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
  }
  _handleMouseWheel(t) {
    this._updateZoomParameters(t.clientX, t.clientY), t.deltaY < 0 ? this._dollyIn(this._getZoomScale(t.deltaY)) : t.deltaY > 0 && this._dollyOut(this._getZoomScale(t.deltaY)), this.update();
  }
  _handleKeyDown(t) {
    let e = false;
    switch (t.code) {
      case this.keys.UP:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(Ne * this.rotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), e = true;
        break;
      case this.keys.BOTTOM:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(-Ne * this.rotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), e = true;
        break;
      case this.keys.LEFT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(Ne * this.rotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), e = true;
        break;
      case this.keys.RIGHT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(-Ne * this.rotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), e = true;
        break;
    }
    e && (t.preventDefault(), this.update());
  }
  _handleTouchStartRotate(t) {
    if (this._pointers.length === 1) this._rotateStart.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + e.x), i = 0.5 * (t.pageY + e.y);
      this._rotateStart.set(n, i);
    }
  }
  _handleTouchStartPan(t) {
    if (this._pointers.length === 1) this._panStart.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + e.x), i = 0.5 * (t.pageY + e.y);
      this._panStart.set(n, i);
    }
  }
  _handleTouchStartDolly(t) {
    const e = this._getSecondPointerPosition(t), n = t.pageX - e.x, i = t.pageY - e.y, r = Math.sqrt(n * n + i * i);
    this._dollyStart.set(0, r);
  }
  _handleTouchStartDollyPan(t) {
    this.enableZoom && this._handleTouchStartDolly(t), this.enablePan && this._handleTouchStartPan(t);
  }
  _handleTouchStartDollyRotate(t) {
    this.enableZoom && this._handleTouchStartDolly(t), this.enableRotate && this._handleTouchStartRotate(t);
  }
  _handleTouchMoveRotate(t) {
    if (this._pointers.length == 1) this._rotateEnd.set(t.pageX, t.pageY);
    else {
      const n = this._getSecondPointerPosition(t), i = 0.5 * (t.pageX + n.x), r = 0.5 * (t.pageY + n.y);
      this._rotateEnd.set(i, r);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const e = this.domElement;
    this._rotateLeft(Ne * this._rotateDelta.x / e.clientHeight), this._rotateUp(Ne * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(t) {
    if (this._pointers.length === 1) this._panEnd.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + e.x), i = 0.5 * (t.pageY + e.y);
      this._panEnd.set(n, i);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(t) {
    const e = this._getSecondPointerPosition(t), n = t.pageX - e.x, i = t.pageY - e.y, r = Math.sqrt(n * n + i * i);
    this._dollyEnd.set(0, r), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    const o = (t.pageX + e.x) * 0.5, a = (t.pageY + e.y) * 0.5;
    this._updateZoomParameters(o, a);
  }
  _handleTouchMoveDollyPan(t) {
    this.enableZoom && this._handleTouchMoveDolly(t), this.enablePan && this._handleTouchMovePan(t);
  }
  _handleTouchMoveDollyRotate(t) {
    this.enableZoom && this._handleTouchMoveDolly(t), this.enableRotate && this._handleTouchMoveRotate(t);
  }
  _addPointer(t) {
    this._pointers.push(t.pointerId);
  }
  _removePointer(t) {
    delete this._pointerPositions[t.pointerId];
    for (let e = 0; e < this._pointers.length; e++) if (this._pointers[e] == t.pointerId) {
      this._pointers.splice(e, 1);
      return;
    }
  }
  _isTrackingPointer(t) {
    for (let e = 0; e < this._pointers.length; e++) if (this._pointers[e] == t.pointerId) return true;
    return false;
  }
  _trackPointer(t) {
    let e = this._pointerPositions[t.pointerId];
    e === void 0 && (e = new Q(), this._pointerPositions[t.pointerId] = e), e.set(t.pageX, t.pageY);
  }
  _getSecondPointerPosition(t) {
    const e = t.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[e];
  }
  _customWheelEvent(t) {
    const e = t.deltaMode, n = { clientX: t.clientX, clientY: t.clientY, deltaY: t.deltaY };
    switch (e) {
      case 1:
        n.deltaY *= 16;
        break;
      case 2:
        n.deltaY *= 100;
        break;
    }
    return t.ctrlKey && !this._controlActive && (n.deltaY *= 10), n;
  }
}
function Uv(s) {
  this.enabled !== false && (this._pointers.length === 0 && (this.domElement.setPointerCapture(s.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(s) && (this._addPointer(s), s.pointerType === "touch" ? this._onTouchStart(s) : this._onMouseDown(s)));
}
function Fv(s) {
  this.enabled !== false && (s.pointerType === "touch" ? this._onTouchMove(s) : this._onMouseMove(s));
}
function Ov(s) {
  switch (this._removePointer(s), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(s.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(bh), this.state = re.NONE;
      break;
    case 1:
      const t = this._pointers[0], e = this._pointerPositions[t];
      this._onTouchStart({ pointerId: t, pageX: e.x, pageY: e.y });
      break;
  }
}
function Bv(s) {
  let t;
  switch (s.button) {
    case 0:
      t = this.mouseButtons.LEFT;
      break;
    case 1:
      t = this.mouseButtons.MIDDLE;
      break;
    case 2:
      t = this.mouseButtons.RIGHT;
      break;
    default:
      t = -1;
  }
  switch (t) {
    case Ni.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseDownDolly(s), this.state = re.DOLLY;
      break;
    case Ni.ROTATE:
      if (s.ctrlKey || s.metaKey || s.shiftKey) {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(s), this.state = re.PAN;
      } else {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(s), this.state = re.ROTATE;
      }
      break;
    case Ni.PAN:
      if (s.ctrlKey || s.metaKey || s.shiftKey) {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(s), this.state = re.ROTATE;
      } else {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(s), this.state = re.PAN;
      }
      break;
    default:
      this.state = re.NONE;
  }
  this.state !== re.NONE && this.dispatchEvent(ka);
}
function kv(s) {
  switch (this.state) {
    case re.ROTATE:
      if (this.enableRotate === false) return;
      this._handleMouseMoveRotate(s);
      break;
    case re.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseMoveDolly(s);
      break;
    case re.PAN:
      if (this.enablePan === false) return;
      this._handleMouseMovePan(s);
      break;
  }
}
function zv(s) {
  this.enabled === false || this.enableZoom === false || this.state !== re.NONE || (s.preventDefault(), this.dispatchEvent(ka), this._handleMouseWheel(this._customWheelEvent(s)), this.dispatchEvent(bh));
}
function Hv(s) {
  this.enabled !== false && this._handleKeyDown(s);
}
function Vv(s) {
  switch (this._trackPointer(s), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case Ci.ROTATE:
          if (this.enableRotate === false) return;
          this._handleTouchStartRotate(s), this.state = re.TOUCH_ROTATE;
          break;
        case Ci.PAN:
          if (this.enablePan === false) return;
          this._handleTouchStartPan(s), this.state = re.TOUCH_PAN;
          break;
        default:
          this.state = re.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case Ci.DOLLY_PAN:
          if (this.enableZoom === false && this.enablePan === false) return;
          this._handleTouchStartDollyPan(s), this.state = re.TOUCH_DOLLY_PAN;
          break;
        case Ci.DOLLY_ROTATE:
          if (this.enableZoom === false && this.enableRotate === false) return;
          this._handleTouchStartDollyRotate(s), this.state = re.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = re.NONE;
      }
      break;
    default:
      this.state = re.NONE;
  }
  this.state !== re.NONE && this.dispatchEvent(ka);
}
function Gv(s) {
  switch (this._trackPointer(s), this.state) {
    case re.TOUCH_ROTATE:
      if (this.enableRotate === false) return;
      this._handleTouchMoveRotate(s), this.update();
      break;
    case re.TOUCH_PAN:
      if (this.enablePan === false) return;
      this._handleTouchMovePan(s), this.update();
      break;
    case re.TOUCH_DOLLY_PAN:
      if (this.enableZoom === false && this.enablePan === false) return;
      this._handleTouchMoveDollyPan(s), this.update();
      break;
    case re.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === false && this.enableRotate === false) return;
      this._handleTouchMoveDollyRotate(s), this.update();
      break;
    default:
      this.state = re.NONE;
  }
}
function Wv(s) {
  this.enabled !== false && s.preventDefault();
}
function Xv(s) {
  s.key === "Control" && (this._controlActive = true, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
function Yv(s) {
  s.key === "Control" && (this._controlActive = false, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
function Mc(s, t) {
  if (t === pu) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), s;
  if (t === ea || t === Bc) {
    let e = s.getIndex();
    if (e === null) {
      const o = [], a = s.getAttribute("position");
      if (a !== void 0) {
        for (let l = 0; l < a.count; l++) o.push(l);
        s.setIndex(o), e = s.getIndex();
      } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), s;
    }
    const n = e.count - 2, i = [];
    if (t === ea) for (let o = 1; o <= n; o++) i.push(e.getX(0)), i.push(e.getX(o)), i.push(e.getX(o + 1));
    else for (let o = 0; o < n; o++) o % 2 === 0 ? (i.push(e.getX(o)), i.push(e.getX(o + 1)), i.push(e.getX(o + 2))) : (i.push(e.getX(o + 2)), i.push(e.getX(o + 1)), i.push(e.getX(o)));
    i.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const r = s.clone();
    return r.setIndex(i), r.clearGroups(), r;
  } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", t), s;
}
class kx extends ui {
  constructor(t) {
    super(t), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(e) {
      return new Zv(e);
    }), this.register(function(e) {
      return new Jv(e);
    }), this.register(function(e) {
      return new ax(e);
    }), this.register(function(e) {
      return new lx(e);
    }), this.register(function(e) {
      return new cx(e);
    }), this.register(function(e) {
      return new tx(e);
    }), this.register(function(e) {
      return new ex(e);
    }), this.register(function(e) {
      return new nx(e);
    }), this.register(function(e) {
      return new ix(e);
    }), this.register(function(e) {
      return new Kv(e);
    }), this.register(function(e) {
      return new sx(e);
    }), this.register(function(e) {
      return new Qv(e);
    }), this.register(function(e) {
      return new ox(e);
    }), this.register(function(e) {
      return new rx(e);
    }), this.register(function(e) {
      return new jv(e);
    }), this.register(function(e) {
      return new hx(e);
    }), this.register(function(e) {
      return new ux(e);
    });
  }
  load(t, e, n, i) {
    const r = this;
    let o;
    if (this.resourcePath !== "") o = this.resourcePath;
    else if (this.path !== "") {
      const c = vs.extractUrlBase(t);
      o = vs.resolveURL(c, this.path);
    } else o = vs.extractUrlBase(t);
    this.manager.itemStart(t);
    const a = function(c) {
      i ? i(c) : console.error(c), r.manager.itemError(t), r.manager.itemEnd(t);
    }, l = new Da(this.manager);
    l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(t, function(c) {
      try {
        r.parse(c, o, function(h) {
          e(h), r.manager.itemEnd(t);
        }, a);
      } catch (h) {
        a(h);
      }
    }, n, a);
  }
  setDRACOLoader(t) {
    return this.dracoLoader = t, this;
  }
  setKTX2Loader(t) {
    return this.ktx2Loader = t, this;
  }
  setMeshoptDecoder(t) {
    return this.meshoptDecoder = t, this;
  }
  register(t) {
    return this.pluginCallbacks.indexOf(t) === -1 && this.pluginCallbacks.push(t), this;
  }
  unregister(t) {
    return this.pluginCallbacks.indexOf(t) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t), 1), this;
  }
  parse(t, e, n, i) {
    let r;
    const o = {}, a = {}, l = new TextDecoder();
    if (typeof t == "string") r = JSON.parse(t);
    else if (t instanceof ArrayBuffer) if (l.decode(new Uint8Array(t, 0, 4)) === Th) {
      try {
        o[Wt.KHR_BINARY_GLTF] = new dx(t);
      } catch (u) {
        i && i(u);
        return;
      }
      r = JSON.parse(o[Wt.KHR_BINARY_GLTF].content);
    } else r = JSON.parse(l.decode(t));
    else r = t;
    if (r.asset === void 0 || r.asset.version[0] < 2) {
      i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const c = new bx(r, { path: e || this.resourcePath || "", crossOrigin: this.crossOrigin, requestHeader: this.requestHeader, manager: this.manager, ktx2Loader: this.ktx2Loader, meshoptDecoder: this.meshoptDecoder });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let h = 0; h < this.pluginCallbacks.length; h++) {
      const u = this.pluginCallbacks[h](c);
      u.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), a[u.name] = u, o[u.name] = true;
    }
    if (r.extensionsUsed) for (let h = 0; h < r.extensionsUsed.length; ++h) {
      const u = r.extensionsUsed[h], d = r.extensionsRequired || [];
      switch (u) {
        case Wt.KHR_MATERIALS_UNLIT:
          o[u] = new $v();
          break;
        case Wt.KHR_DRACO_MESH_COMPRESSION:
          o[u] = new fx(r, this.dracoLoader);
          break;
        case Wt.KHR_TEXTURE_TRANSFORM:
          o[u] = new px();
          break;
        case Wt.KHR_MESH_QUANTIZATION:
          o[u] = new mx();
          break;
        default:
          d.indexOf(u) >= 0 && a[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
      }
    }
    c.setExtensions(o), c.setPlugins(a), c.parse(n, i);
  }
  parseAsync(t, e) {
    const n = this;
    return new Promise(function(i, r) {
      n.parse(t, e, i, r);
    });
  }
}
function qv() {
  let s = {};
  return { get: function(t) {
    return s[t];
  }, add: function(t, e) {
    s[t] = e;
  }, remove: function(t) {
    delete s[t];
  }, removeAll: function() {
    s = {};
  } };
}
const Wt = { KHR_BINARY_GLTF: "KHR_binary_glTF", KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression", KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual", KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat", KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion", KHR_MATERIALS_IOR: "KHR_materials_ior", KHR_MATERIALS_SHEEN: "KHR_materials_sheen", KHR_MATERIALS_SPECULAR: "KHR_materials_specular", KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission", KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence", KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy", KHR_MATERIALS_UNLIT: "KHR_materials_unlit", KHR_MATERIALS_VOLUME: "KHR_materials_volume", KHR_TEXTURE_BASISU: "KHR_texture_basisu", KHR_TEXTURE_TRANSFORM: "KHR_texture_transform", KHR_MESH_QUANTIZATION: "KHR_mesh_quantization", KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength", EXT_MATERIALS_BUMP: "EXT_materials_bump", EXT_TEXTURE_WEBP: "EXT_texture_webp", EXT_TEXTURE_AVIF: "EXT_texture_avif", EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression", EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing" };
class jv {
  constructor(t) {
    this.parser = t, this.name = Wt.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const t = this.parser, e = this.parser.json.nodes || [];
    for (let n = 0, i = e.length; n < i; n++) {
      const r = e[n];
      r.extensions && r.extensions[this.name] && r.extensions[this.name].light !== void 0 && t._addNodeRef(this.cache, r.extensions[this.name].light);
    }
  }
  _loadLight(t) {
    const e = this.parser, n = "light:" + t;
    let i = e.cache.get(n);
    if (i) return i;
    const r = e.json, l = ((r.extensions && r.extensions[this.name] || {}).lights || [])[t];
    let c;
    const h = new It(16777215);
    l.color !== void 0 && h.setRGB(l.color[0], l.color[1], l.color[2], Ie);
    const u = l.range !== void 0 ? l.range : 0;
    switch (l.type) {
      case "directional":
        c = new Ef(h), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new Mf(h), c.distance = u;
        break;
      case "spot":
        c = new xf(h), c.distance = u, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
    }
    return c.position.set(0, 0, 0), c.decay = 2, Mn(c, l), l.intensity !== void 0 && (c.intensity = l.intensity), c.name = e.createUniqueName(l.name || "light_" + t), i = Promise.resolve(c), e.cache.add(n, i), i;
  }
  getDependency(t, e) {
    if (t === "light") return this._loadLight(e);
  }
  createNodeAttachment(t) {
    const e = this, n = this.parser, r = n.json.nodes[t], a = (r.extensions && r.extensions[this.name] || {}).light;
    return a === void 0 ? null : this._loadLight(a).then(function(l) {
      return n._getNodeRef(e.cache, a, l);
    });
  }
}
class $v {
  constructor() {
    this.name = Wt.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return oi;
  }
  extendParams(t, e, n) {
    const i = [];
    t.color = new It(1, 1, 1), t.opacity = 1;
    const r = e.pbrMetallicRoughness;
    if (r) {
      if (Array.isArray(r.baseColorFactor)) {
        const o = r.baseColorFactor;
        t.color.setRGB(o[0], o[1], o[2], Ie), t.opacity = o[3];
      }
      r.baseColorTexture !== void 0 && i.push(n.assignTexture(t, "map", r.baseColorTexture, Me));
    }
    return Promise.all(i);
  }
}
class Kv {
  constructor(t) {
    this.parser = t, this.name = Wt.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(t, e) {
    const i = this.parser.json.materials[t];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = i.extensions[this.name].emissiveStrength;
    return r !== void 0 && (e.emissiveIntensity = r), Promise.resolve();
  }
}
class Zv {
  constructor(t) {
    this.parser = t, this.name = Wt.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(t) {
    const n = this.parser.json.materials[t];
    return !n.extensions || !n.extensions[this.name] ? null : un;
  }
  extendMaterialParams(t, e) {
    const n = this.parser, i = n.json.materials[t];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    if (o.clearcoatFactor !== void 0 && (e.clearcoat = o.clearcoatFactor), o.clearcoatTexture !== void 0 && r.push(n.assignTexture(e, "clearcoatMap", o.clearcoatTexture)), o.clearcoatRoughnessFactor !== void 0 && (e.clearcoatRoughness = o.clearcoatRoughnessFactor), o.clearcoatRoughnessTexture !== void 0 && r.push(n.assignTexture(e, "clearcoatRoughnessMap", o.clearcoatRoughnessTexture)), o.clearcoatNormalTexture !== void 0 && (r.push(n.assignTexture(e, "clearcoatNormalMap", o.clearcoatNormalTexture)), o.clearcoatNormalTexture.scale !== void 0)) {
      const a = o.clearcoatNormalTexture.scale;
      e.clearcoatNormalScale = new Q(a, a);
    }
    return Promise.all(r);
  }
}
class Jv {
  constructor(t) {
    this.parser = t, this.name = Wt.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(t) {
    const n = this.parser.json.materials[t];
    return !n.extensions || !n.extensions[this.name] ? null : un;
  }
  extendMaterialParams(t, e) {
    const i = this.parser.json.materials[t];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = i.extensions[this.name];
    return e.dispersion = r.dispersion !== void 0 ? r.dispersion : 0, Promise.resolve();
  }
}
class Qv {
  constructor(t) {
    this.parser = t, this.name = Wt.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(t) {
    const n = this.parser.json.materials[t];
    return !n.extensions || !n.extensions[this.name] ? null : un;
  }
  extendMaterialParams(t, e) {
    const n = this.parser, i = n.json.materials[t];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    return o.iridescenceFactor !== void 0 && (e.iridescence = o.iridescenceFactor), o.iridescenceTexture !== void 0 && r.push(n.assignTexture(e, "iridescenceMap", o.iridescenceTexture)), o.iridescenceIor !== void 0 && (e.iridescenceIOR = o.iridescenceIor), e.iridescenceThicknessRange === void 0 && (e.iridescenceThicknessRange = [100, 400]), o.iridescenceThicknessMinimum !== void 0 && (e.iridescenceThicknessRange[0] = o.iridescenceThicknessMinimum), o.iridescenceThicknessMaximum !== void 0 && (e.iridescenceThicknessRange[1] = o.iridescenceThicknessMaximum), o.iridescenceThicknessTexture !== void 0 && r.push(n.assignTexture(e, "iridescenceThicknessMap", o.iridescenceThicknessTexture)), Promise.all(r);
  }
}
class tx {
  constructor(t) {
    this.parser = t, this.name = Wt.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(t) {
    const n = this.parser.json.materials[t];
    return !n.extensions || !n.extensions[this.name] ? null : un;
  }
  extendMaterialParams(t, e) {
    const n = this.parser, i = n.json.materials[t];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [];
    e.sheenColor = new It(0, 0, 0), e.sheenRoughness = 0, e.sheen = 1;
    const o = i.extensions[this.name];
    if (o.sheenColorFactor !== void 0) {
      const a = o.sheenColorFactor;
      e.sheenColor.setRGB(a[0], a[1], a[2], Ie);
    }
    return o.sheenRoughnessFactor !== void 0 && (e.sheenRoughness = o.sheenRoughnessFactor), o.sheenColorTexture !== void 0 && r.push(n.assignTexture(e, "sheenColorMap", o.sheenColorTexture, Me)), o.sheenRoughnessTexture !== void 0 && r.push(n.assignTexture(e, "sheenRoughnessMap", o.sheenRoughnessTexture)), Promise.all(r);
  }
}
class ex {
  constructor(t) {
    this.parser = t, this.name = Wt.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(t) {
    const n = this.parser.json.materials[t];
    return !n.extensions || !n.extensions[this.name] ? null : un;
  }
  extendMaterialParams(t, e) {
    const n = this.parser, i = n.json.materials[t];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    return o.transmissionFactor !== void 0 && (e.transmission = o.transmissionFactor), o.transmissionTexture !== void 0 && r.push(n.assignTexture(e, "transmissionMap", o.transmissionTexture)), Promise.all(r);
  }
}
class nx {
  constructor(t) {
    this.parser = t, this.name = Wt.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(t) {
    const n = this.parser.json.materials[t];
    return !n.extensions || !n.extensions[this.name] ? null : un;
  }
  extendMaterialParams(t, e) {
    const n = this.parser, i = n.json.materials[t];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    e.thickness = o.thicknessFactor !== void 0 ? o.thicknessFactor : 0, o.thicknessTexture !== void 0 && r.push(n.assignTexture(e, "thicknessMap", o.thicknessTexture)), e.attenuationDistance = o.attenuationDistance || 1 / 0;
    const a = o.attenuationColor || [1, 1, 1];
    return e.attenuationColor = new It().setRGB(a[0], a[1], a[2], Ie), Promise.all(r);
  }
}
class ix {
  constructor(t) {
    this.parser = t, this.name = Wt.KHR_MATERIALS_IOR;
  }
  getMaterialType(t) {
    const n = this.parser.json.materials[t];
    return !n.extensions || !n.extensions[this.name] ? null : un;
  }
  extendMaterialParams(t, e) {
    const i = this.parser.json.materials[t];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = i.extensions[this.name];
    return e.ior = r.ior !== void 0 ? r.ior : 1.5, Promise.resolve();
  }
}
class sx {
  constructor(t) {
    this.parser = t, this.name = Wt.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(t) {
    const n = this.parser.json.materials[t];
    return !n.extensions || !n.extensions[this.name] ? null : un;
  }
  extendMaterialParams(t, e) {
    const n = this.parser, i = n.json.materials[t];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    e.specularIntensity = o.specularFactor !== void 0 ? o.specularFactor : 1, o.specularTexture !== void 0 && r.push(n.assignTexture(e, "specularIntensityMap", o.specularTexture));
    const a = o.specularColorFactor || [1, 1, 1];
    return e.specularColor = new It().setRGB(a[0], a[1], a[2], Ie), o.specularColorTexture !== void 0 && r.push(n.assignTexture(e, "specularColorMap", o.specularColorTexture, Me)), Promise.all(r);
  }
}
class rx {
  constructor(t) {
    this.parser = t, this.name = Wt.EXT_MATERIALS_BUMP;
  }
  getMaterialType(t) {
    const n = this.parser.json.materials[t];
    return !n.extensions || !n.extensions[this.name] ? null : un;
  }
  extendMaterialParams(t, e) {
    const n = this.parser, i = n.json.materials[t];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    return e.bumpScale = o.bumpFactor !== void 0 ? o.bumpFactor : 1, o.bumpTexture !== void 0 && r.push(n.assignTexture(e, "bumpMap", o.bumpTexture)), Promise.all(r);
  }
}
class ox {
  constructor(t) {
    this.parser = t, this.name = Wt.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(t) {
    const n = this.parser.json.materials[t];
    return !n.extensions || !n.extensions[this.name] ? null : un;
  }
  extendMaterialParams(t, e) {
    const n = this.parser, i = n.json.materials[t];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    return o.anisotropyStrength !== void 0 && (e.anisotropy = o.anisotropyStrength), o.anisotropyRotation !== void 0 && (e.anisotropyRotation = o.anisotropyRotation), o.anisotropyTexture !== void 0 && r.push(n.assignTexture(e, "anisotropyMap", o.anisotropyTexture)), Promise.all(r);
  }
}
class ax {
  constructor(t) {
    this.parser = t, this.name = Wt.KHR_TEXTURE_BASISU;
  }
  loadTexture(t) {
    const e = this.parser, n = e.json, i = n.textures[t];
    if (!i.extensions || !i.extensions[this.name]) return null;
    const r = i.extensions[this.name], o = e.options.ktx2Loader;
    if (!o) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return e.loadTextureImage(t, r.source, o);
  }
}
class lx {
  constructor(t) {
    this.parser = t, this.name = Wt.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(t) {
    const e = this.name, n = this.parser, i = n.json, r = i.textures[t];
    if (!r.extensions || !r.extensions[e]) return null;
    const o = r.extensions[e], a = i.images[o.source];
    let l = n.textureLoader;
    if (a.uri) {
      const c = n.options.manager.getHandler(a.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return n.loadTextureImage(t, o.source, l);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(e) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return n.loadTexture(t);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(t) {
      const e = new Image();
      e.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", e.onload = e.onerror = function() {
        t(e.height === 1);
      };
    })), this.isSupported;
  }
}
class cx {
  constructor(t) {
    this.parser = t, this.name = Wt.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(t) {
    const e = this.name, n = this.parser, i = n.json, r = i.textures[t];
    if (!r.extensions || !r.extensions[e]) return null;
    const o = r.extensions[e], a = i.images[o.source];
    let l = n.textureLoader;
    if (a.uri) {
      const c = n.options.manager.getHandler(a.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return n.loadTextureImage(t, o.source, l);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(e) >= 0) throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return n.loadTexture(t);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(t) {
      const e = new Image();
      e.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", e.onload = e.onerror = function() {
        t(e.height === 1);
      };
    })), this.isSupported;
  }
}
class hx {
  constructor(t) {
    this.name = Wt.EXT_MESHOPT_COMPRESSION, this.parser = t;
  }
  loadBufferView(t) {
    const e = this.parser.json, n = e.bufferViews[t];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name], r = this.parser.getDependency("buffer", i.buffer), o = this.parser.options.meshoptDecoder;
      if (!o || !o.supported) {
        if (e.extensionsRequired && e.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return r.then(function(a) {
        const l = i.byteOffset || 0, c = i.byteLength || 0, h = i.count, u = i.byteStride, d = new Uint8Array(a, l, c);
        return o.decodeGltfBufferAsync ? o.decodeGltfBufferAsync(h, u, d, i.mode, i.filter).then(function(f) {
          return f.buffer;
        }) : o.ready.then(function() {
          const f = new ArrayBuffer(h * u);
          return o.decodeGltfBuffer(new Uint8Array(f), h, u, d, i.mode, i.filter), f;
        });
      });
    } else return null;
  }
}
class ux {
  constructor(t) {
    this.name = Wt.EXT_MESH_GPU_INSTANCING, this.parser = t;
  }
  createNodeMesh(t) {
    const e = this.parser.json, n = e.nodes[t];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0) return null;
    const i = e.meshes[n.mesh];
    for (const c of i.primitives) if (c.mode !== Ye.TRIANGLES && c.mode !== Ye.TRIANGLE_STRIP && c.mode !== Ye.TRIANGLE_FAN && c.mode !== void 0) return null;
    const o = n.extensions[this.name].attributes, a = [], l = {};
    for (const c in o) a.push(this.parser.getDependency("accessor", o[c]).then((h) => (l[c] = h, l[c])));
    return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(t)), Promise.all(a).then((c) => {
      const h = c.pop(), u = h.isGroup ? h.children : [h], d = c[0].count, f = [];
      for (const g of u) {
        const _ = new Ot(), m = new w(), p = new Pe(), b = new w(1, 1, 1), S = new vd(g.geometry, g.material, d);
        for (let x = 0; x < d; x++) l.TRANSLATION && m.fromBufferAttribute(l.TRANSLATION, x), l.ROTATION && p.fromBufferAttribute(l.ROTATION, x), l.SCALE && b.fromBufferAttribute(l.SCALE, x), S.setMatrixAt(x, _.compose(m, p, b));
        for (const x in l) if (x === "_COLOR_0") {
          const L = l[x];
          S.instanceColor = new ia(L.array, L.itemSize, L.normalized);
        } else x !== "TRANSLATION" && x !== "ROTATION" && x !== "SCALE" && g.geometry.setAttribute(x, l[x]);
        ae.prototype.copy.call(S, g), this.parser.assignFinalMaterial(S), f.push(S);
      }
      return h.isGroup ? (h.clear(), h.add(...f), h) : f[0];
    }));
  }
}
const Th = "glTF", hs = 12, Sc = { JSON: 1313821514, BIN: 5130562 };
class dx {
  constructor(t) {
    this.name = Wt.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const e = new DataView(t, 0, hs), n = new TextDecoder();
    if (this.header = { magic: n.decode(new Uint8Array(t.slice(0, 4))), version: e.getUint32(4, true), length: e.getUint32(8, true) }, this.header.magic !== Th) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - hs, r = new DataView(t, hs);
    let o = 0;
    for (; o < i; ) {
      const a = r.getUint32(o, true);
      o += 4;
      const l = r.getUint32(o, true);
      if (o += 4, l === Sc.JSON) {
        const c = new Uint8Array(t, hs + o, a);
        this.content = n.decode(c);
      } else if (l === Sc.BIN) {
        const c = hs + o;
        this.body = t.slice(c, c + a);
      }
      o += a;
    }
    if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class fx {
  constructor(t, e) {
    if (!e) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = Wt.KHR_DRACO_MESH_COMPRESSION, this.json = t, this.dracoLoader = e, this.dracoLoader.preload();
  }
  decodePrimitive(t, e) {
    const n = this.json, i = this.dracoLoader, r = t.extensions[this.name].bufferView, o = t.extensions[this.name].attributes, a = {}, l = {}, c = {};
    for (const h in o) {
      const u = da[h] || h.toLowerCase();
      a[u] = o[h];
    }
    for (const h in t.attributes) {
      const u = da[h] || h.toLowerCase();
      if (o[h] !== void 0) {
        const d = n.accessors[t.attributes[h]], f = Bi[d.componentType];
        c[u] = f.name, l[u] = d.normalized === true;
      }
    }
    return e.getDependency("bufferView", r).then(function(h) {
      return new Promise(function(u, d) {
        i.decodeDracoFile(h, function(f) {
          for (const g in f.attributes) {
            const _ = f.attributes[g], m = l[g];
            m !== void 0 && (_.normalized = m);
          }
          u(f);
        }, a, c, Ie, d);
      });
    });
  }
}
class px {
  constructor() {
    this.name = Wt.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(t, e) {
    return (e.texCoord === void 0 || e.texCoord === t.channel) && e.offset === void 0 && e.rotation === void 0 && e.scale === void 0 || (t = t.clone(), e.texCoord !== void 0 && (t.channel = e.texCoord), e.offset !== void 0 && t.offset.fromArray(e.offset), e.rotation !== void 0 && (t.rotation = e.rotation), e.scale !== void 0 && t.repeat.fromArray(e.scale), t.needsUpdate = true), t;
  }
}
class mx {
  constructor() {
    this.name = Wt.KHR_MESH_QUANTIZATION;
  }
}
class wh extends Rs {
  constructor(t, e, n, i) {
    super(t, e, n, i);
  }
  copySampleValue_(t) {
    const e = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = t * i * 3 + i;
    for (let o = 0; o !== i; o++) e[o] = n[r + o];
    return e;
  }
  interpolate_(t, e, n, i) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = a * 2, c = a * 3, h = i - e, u = (n - e) / h, d = u * u, f = d * u, g = t * c, _ = g - c, m = -2 * f + 3 * d, p = f - d, b = 1 - m, S = p - d + u;
    for (let x = 0; x !== a; x++) {
      const L = o[_ + x + a], R = o[_ + x + l] * h, C = o[g + x + a], I = o[g + x] * h;
      r[x] = b * L + S * R + m * C + p * I;
    }
    return r;
  }
}
const gx = new Pe();
class _x extends wh {
  interpolate_(t, e, n, i) {
    const r = super.interpolate_(t, e, n, i);
    return gx.fromArray(r).normalize().toArray(r), r;
  }
}
const Ye = { POINTS: 0, LINES: 1, LINE_LOOP: 2, LINE_STRIP: 3, TRIANGLES: 4, TRIANGLE_STRIP: 5, TRIANGLE_FAN: 6 }, Bi = { 5120: Int8Array, 5121: Uint8Array, 5122: Int16Array, 5123: Uint16Array, 5125: Uint32Array, 5126: Float32Array }, Ec = { 9728: Ce, 9729: ze, 9984: Rc, 9985: hr, 9986: ds, 9987: Sn }, Ac = { 33071: On, 33648: vr, 10497: Vi }, mo = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 }, da = { POSITION: "position", NORMAL: "normal", TANGENT: "tangent", TEXCOORD_0: "uv", TEXCOORD_1: "uv1", TEXCOORD_2: "uv2", TEXCOORD_3: "uv3", COLOR_0: "color", WEIGHTS_0: "skinWeight", JOINTS_0: "skinIndex" }, Nn = { scale: "scale", translation: "position", rotation: "quaternion", weights: "morphTargetInfluences" }, vx = { CUBICSPLINE: void 0, LINEAR: Ms, STEP: ys }, go = { OPAQUE: "OPAQUE", MASK: "MASK", BLEND: "BLEND" };
function xx(s) {
  return s.DefaultMaterial === void 0 && (s.DefaultMaterial = new Ia({ color: 16777215, emissive: 0, metalness: 1, roughness: 1, transparent: false, depthTest: true, side: bn })), s.DefaultMaterial;
}
function ni(s, t, e) {
  for (const n in e.extensions) s[n] === void 0 && (t.userData.gltfExtensions = t.userData.gltfExtensions || {}, t.userData.gltfExtensions[n] = e.extensions[n]);
}
function Mn(s, t) {
  t.extras !== void 0 && (typeof t.extras == "object" ? Object.assign(s.userData, t.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras));
}
function yx(s, t, e) {
  let n = false, i = false, r = false;
  for (let c = 0, h = t.length; c < h; c++) {
    const u = t[c];
    if (u.POSITION !== void 0 && (n = true), u.NORMAL !== void 0 && (i = true), u.COLOR_0 !== void 0 && (r = true), n && i && r) break;
  }
  if (!n && !i && !r) return Promise.resolve(s);
  const o = [], a = [], l = [];
  for (let c = 0, h = t.length; c < h; c++) {
    const u = t[c];
    if (n) {
      const d = u.POSITION !== void 0 ? e.getDependency("accessor", u.POSITION) : s.attributes.position;
      o.push(d);
    }
    if (i) {
      const d = u.NORMAL !== void 0 ? e.getDependency("accessor", u.NORMAL) : s.attributes.normal;
      a.push(d);
    }
    if (r) {
      const d = u.COLOR_0 !== void 0 ? e.getDependency("accessor", u.COLOR_0) : s.attributes.color;
      l.push(d);
    }
  }
  return Promise.all([Promise.all(o), Promise.all(a), Promise.all(l)]).then(function(c) {
    const h = c[0], u = c[1], d = c[2];
    return n && (s.morphAttributes.position = h), i && (s.morphAttributes.normal = u), r && (s.morphAttributes.color = d), s.morphTargetsRelative = true, s;
  });
}
function Mx(s, t) {
  if (s.updateMorphTargets(), t.weights !== void 0) for (let e = 0, n = t.weights.length; e < n; e++) s.morphTargetInfluences[e] = t.weights[e];
  if (t.extras && Array.isArray(t.extras.targetNames)) {
    const e = t.extras.targetNames;
    if (s.morphTargetInfluences.length === e.length) {
      s.morphTargetDictionary = {};
      for (let n = 0, i = e.length; n < i; n++) s.morphTargetDictionary[e[n]] = n;
    } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function Sx(s) {
  let t;
  const e = s.extensions && s.extensions[Wt.KHR_DRACO_MESH_COMPRESSION];
  if (e ? t = "draco:" + e.bufferView + ":" + e.indices + ":" + _o(e.attributes) : t = s.indices + ":" + _o(s.attributes) + ":" + s.mode, s.targets !== void 0) for (let n = 0, i = s.targets.length; n < i; n++) t += ":" + _o(s.targets[n]);
  return t;
}
function _o(s) {
  let t = "";
  const e = Object.keys(s).sort();
  for (let n = 0, i = e.length; n < i; n++) t += e[n] + ":" + s[e[n]] + ";";
  return t;
}
function fa(s) {
  switch (s) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function Ex(s) {
  return s.search(/\.jpe?g($|\?)/i) > 0 || s.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : s.search(/\.webp($|\?)/i) > 0 || s.search(/^data\:image\/webp/) === 0 ? "image/webp" : s.search(/\.ktx2($|\?)/i) > 0 || s.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
}
const Ax = new Ot();
class bx {
  constructor(t = {}, e = {}) {
    this.json = t, this.extensions = {}, this.plugins = {}, this.options = e, this.cache = new qv(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = false, i = -1, r = false, o = -1;
    if (typeof navigator < "u") {
      const a = navigator.userAgent;
      n = /^((?!chrome|android).)*safari/i.test(a) === true;
      const l = a.match(/Version\/(\d+)/);
      i = n && l ? parseInt(l[1], 10) : -1, r = a.indexOf("Firefox") > -1, o = r ? a.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || n && i < 17 || r && o < 98 ? this.textureLoader = new _f(this.options.manager) : this.textureLoader = new Af(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Da(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(true);
  }
  setExtensions(t) {
    this.extensions = t;
  }
  setPlugins(t) {
    this.plugins = t;
  }
  parse(t, e) {
    const n = this, i = this.json, r = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(o) {
      return o._markDefs && o._markDefs();
    }), Promise.all(this._invokeAll(function(o) {
      return o.beforeRoot && o.beforeRoot();
    })).then(function() {
      return Promise.all([n.getDependencies("scene"), n.getDependencies("animation"), n.getDependencies("camera")]);
    }).then(function(o) {
      const a = { scene: o[0][i.scene || 0], scenes: o[0], animations: o[1], cameras: o[2], asset: i.asset, parser: n, userData: {} };
      return ni(r, a, i), Mn(a, i), Promise.all(n._invokeAll(function(l) {
        return l.afterRoot && l.afterRoot(a);
      })).then(function() {
        for (const l of a.scenes) l.updateMatrixWorld();
        t(a);
      });
    }).catch(e);
  }
  _markDefs() {
    const t = this.json.nodes || [], e = this.json.skins || [], n = this.json.meshes || [];
    for (let i = 0, r = e.length; i < r; i++) {
      const o = e[i].joints;
      for (let a = 0, l = o.length; a < l; a++) t[o[a]].isBone = true;
    }
    for (let i = 0, r = t.length; i < r; i++) {
      const o = t[i];
      o.mesh !== void 0 && (this._addNodeRef(this.meshCache, o.mesh), o.skin !== void 0 && (n[o.mesh].isSkinnedMesh = true)), o.camera !== void 0 && this._addNodeRef(this.cameraCache, o.camera);
    }
  }
  _addNodeRef(t, e) {
    e !== void 0 && (t.refs[e] === void 0 && (t.refs[e] = t.uses[e] = 0), t.refs[e]++);
  }
  _getNodeRef(t, e, n) {
    if (t.refs[e] <= 1) return n;
    const i = n.clone(), r = (o, a) => {
      const l = this.associations.get(o);
      l != null && this.associations.set(a, l);
      for (const [c, h] of o.children.entries()) r(h, a.children[c]);
    };
    return r(n, i), i.name += "_instance_" + t.uses[e]++, i;
  }
  _invokeOne(t) {
    const e = Object.values(this.plugins);
    e.push(this);
    for (let n = 0; n < e.length; n++) {
      const i = t(e[n]);
      if (i) return i;
    }
    return null;
  }
  _invokeAll(t) {
    const e = Object.values(this.plugins);
    e.unshift(this);
    const n = [];
    for (let i = 0; i < e.length; i++) {
      const r = t(e[i]);
      r && n.push(r);
    }
    return n;
  }
  getDependency(t, e) {
    const n = t + ":" + e;
    let i = this.cache.get(n);
    if (!i) {
      switch (t) {
        case "scene":
          i = this.loadScene(e);
          break;
        case "node":
          i = this._invokeOne(function(r) {
            return r.loadNode && r.loadNode(e);
          });
          break;
        case "mesh":
          i = this._invokeOne(function(r) {
            return r.loadMesh && r.loadMesh(e);
          });
          break;
        case "accessor":
          i = this.loadAccessor(e);
          break;
        case "bufferView":
          i = this._invokeOne(function(r) {
            return r.loadBufferView && r.loadBufferView(e);
          });
          break;
        case "buffer":
          i = this.loadBuffer(e);
          break;
        case "material":
          i = this._invokeOne(function(r) {
            return r.loadMaterial && r.loadMaterial(e);
          });
          break;
        case "texture":
          i = this._invokeOne(function(r) {
            return r.loadTexture && r.loadTexture(e);
          });
          break;
        case "skin":
          i = this.loadSkin(e);
          break;
        case "animation":
          i = this._invokeOne(function(r) {
            return r.loadAnimation && r.loadAnimation(e);
          });
          break;
        case "camera":
          i = this.loadCamera(e);
          break;
        default:
          if (i = this._invokeOne(function(r) {
            return r != this && r.getDependency && r.getDependency(t, e);
          }), !i) throw new Error("Unknown type: " + t);
          break;
      }
      this.cache.add(n, i);
    }
    return i;
  }
  getDependencies(t) {
    let e = this.cache.get(t);
    if (!e) {
      const n = this, i = this.json[t + (t === "mesh" ? "es" : "s")] || [];
      e = Promise.all(i.map(function(r, o) {
        return n.getDependency(t, o);
      })), this.cache.add(t, e);
    }
    return e;
  }
  loadBuffer(t) {
    const e = this.json.buffers[t], n = this.fileLoader;
    if (e.type && e.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + e.type + " buffer type is not supported.");
    if (e.uri === void 0 && t === 0) return Promise.resolve(this.extensions[Wt.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(r, o) {
      n.load(vs.resolveURL(e.uri, i.path), r, void 0, function() {
        o(new Error('THREE.GLTFLoader: Failed to load buffer "' + e.uri + '".'));
      });
    });
  }
  loadBufferView(t) {
    const e = this.json.bufferViews[t];
    return this.getDependency("buffer", e.buffer).then(function(n) {
      const i = e.byteLength || 0, r = e.byteOffset || 0;
      return n.slice(r, r + i);
    });
  }
  loadAccessor(t) {
    const e = this, n = this.json, i = this.json.accessors[t];
    if (i.bufferView === void 0 && i.sparse === void 0) {
      const o = mo[i.type], a = Bi[i.componentType], l = i.normalized === true, c = new a(i.count * o);
      return Promise.resolve(new Le(c, o, l));
    }
    const r = [];
    return i.bufferView !== void 0 ? r.push(this.getDependency("bufferView", i.bufferView)) : r.push(null), i.sparse !== void 0 && (r.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(r).then(function(o) {
      const a = o[0], l = mo[i.type], c = Bi[i.componentType], h = c.BYTES_PER_ELEMENT, u = h * l, d = i.byteOffset || 0, f = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, g = i.normalized === true;
      let _, m;
      if (f && f !== u) {
        const p = Math.floor(d / f), b = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + p + ":" + i.count;
        let S = e.cache.get(b);
        S || (_ = new c(a, p * f, i.count * f / h), S = new fd(_, f / h), e.cache.add(b, S)), m = new Ta(S, l, d % f / h, g);
      } else a === null ? _ = new c(i.count * l) : _ = new c(a, d, i.count * l), m = new Le(_, l, g);
      if (i.sparse !== void 0) {
        const p = mo.SCALAR, b = Bi[i.sparse.indices.componentType], S = i.sparse.indices.byteOffset || 0, x = i.sparse.values.byteOffset || 0, L = new b(o[1], S, i.sparse.count * p), R = new c(o[2], x, i.sparse.count * l);
        a !== null && (m = new Le(m.array.slice(), m.itemSize, m.normalized)), m.normalized = false;
        for (let C = 0, I = L.length; C < I; C++) {
          const E = L[C];
          if (m.setX(E, R[C * l]), l >= 2 && m.setY(E, R[C * l + 1]), l >= 3 && m.setZ(E, R[C * l + 2]), l >= 4 && m.setW(E, R[C * l + 3]), l >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        m.normalized = g;
      }
      return m;
    });
  }
  loadTexture(t) {
    const e = this.json, n = this.options, r = e.textures[t].source, o = e.images[r];
    let a = this.textureLoader;
    if (o.uri) {
      const l = n.manager.getHandler(o.uri);
      l !== null && (a = l);
    }
    return this.loadTextureImage(t, r, a);
  }
  loadTextureImage(t, e, n) {
    const i = this, r = this.json, o = r.textures[t], a = r.images[e], l = (a.uri || a.bufferView) + ":" + o.sampler;
    if (this.textureCache[l]) return this.textureCache[l];
    const c = this.loadImageSource(e, n).then(function(h) {
      h.flipY = false, h.name = o.name || a.name || "", h.name === "" && typeof a.uri == "string" && a.uri.startsWith("data:image/") === false && (h.name = a.uri);
      const d = (r.samplers || {})[o.sampler] || {};
      return h.magFilter = Ec[d.magFilter] || ze, h.minFilter = Ec[d.minFilter] || Sn, h.wrapS = Ac[d.wrapS] || Vi, h.wrapT = Ac[d.wrapT] || Vi, h.generateMipmaps = !h.isCompressedTexture && h.minFilter !== Ce && h.minFilter !== ze, i.associations.set(h, { textures: t }), h;
    }).catch(function() {
      return null;
    });
    return this.textureCache[l] = c, c;
  }
  loadImageSource(t, e) {
    const n = this, i = this.json, r = this.options;
    if (this.sourceCache[t] !== void 0) return this.sourceCache[t].then((u) => u.clone());
    const o = i.images[t], a = self.URL || self.webkitURL;
    let l = o.uri || "", c = false;
    if (o.bufferView !== void 0) l = n.getDependency("bufferView", o.bufferView).then(function(u) {
      c = true;
      const d = new Blob([u], { type: o.mimeType });
      return l = a.createObjectURL(d), l;
    });
    else if (o.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + t + " is missing URI and bufferView");
    const h = Promise.resolve(l).then(function(u) {
      return new Promise(function(d, f) {
        let g = d;
        e.isImageBitmapLoader === true && (g = function(_) {
          const m = new xe(_);
          m.needsUpdate = true, d(m);
        }), e.load(vs.resolveURL(u, r.path), g, void 0, f);
      });
    }).then(function(u) {
      return c === true && a.revokeObjectURL(l), Mn(u, o), u.userData.mimeType = o.mimeType || Ex(o.uri), u;
    }).catch(function(u) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", l), u;
    });
    return this.sourceCache[t] = h, h;
  }
  assignTexture(t, e, n, i) {
    const r = this;
    return this.getDependency("texture", n.index).then(function(o) {
      if (!o) return null;
      if (n.texCoord !== void 0 && n.texCoord > 0 && (o = o.clone(), o.channel = n.texCoord), r.extensions[Wt.KHR_TEXTURE_TRANSFORM]) {
        const a = n.extensions !== void 0 ? n.extensions[Wt.KHR_TEXTURE_TRANSFORM] : void 0;
        if (a) {
          const l = r.associations.get(o);
          o = r.extensions[Wt.KHR_TEXTURE_TRANSFORM].extendTexture(o, a), r.associations.set(o, l);
        }
      }
      return i !== void 0 && (o.colorSpace = i), t[e] = o, o;
    });
  }
  assignFinalMaterial(t) {
    const e = t.geometry;
    let n = t.material;
    const i = e.attributes.tangent === void 0, r = e.attributes.color !== void 0, o = e.attributes.normal === void 0;
    if (t.isPoints) {
      const a = "PointsMaterial:" + n.uuid;
      let l = this.cache.get(a);
      l || (l = new Qc(), sn.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, l.sizeAttenuation = false, this.cache.add(a, l)), n = l;
    } else if (t.isLine) {
      const a = "LineBasicMaterial:" + n.uuid;
      let l = this.cache.get(a);
      l || (l = new Jc(), sn.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, this.cache.add(a, l)), n = l;
    }
    if (i || r || o) {
      let a = "ClonedMaterial:" + n.uuid + ":";
      i && (a += "derivative-tangents:"), r && (a += "vertex-colors:"), o && (a += "flat-shading:");
      let l = this.cache.get(a);
      l || (l = n.clone(), r && (l.vertexColors = true), o && (l.flatShading = true), i && (l.normalScale && (l.normalScale.y *= -1), l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)), this.cache.add(a, l), this.associations.set(l, this.associations.get(n))), n = l;
    }
    t.material = n;
  }
  getMaterialType() {
    return Ia;
  }
  loadMaterial(t) {
    const e = this, n = this.json, i = this.extensions, r = n.materials[t];
    let o;
    const a = {}, l = r.extensions || {}, c = [];
    if (l[Wt.KHR_MATERIALS_UNLIT]) {
      const u = i[Wt.KHR_MATERIALS_UNLIT];
      o = u.getMaterialType(), c.push(u.extendParams(a, r, e));
    } else {
      const u = r.pbrMetallicRoughness || {};
      if (a.color = new It(1, 1, 1), a.opacity = 1, Array.isArray(u.baseColorFactor)) {
        const d = u.baseColorFactor;
        a.color.setRGB(d[0], d[1], d[2], Ie), a.opacity = d[3];
      }
      u.baseColorTexture !== void 0 && c.push(e.assignTexture(a, "map", u.baseColorTexture, Me)), a.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, a.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (c.push(e.assignTexture(a, "metalnessMap", u.metallicRoughnessTexture)), c.push(e.assignTexture(a, "roughnessMap", u.metallicRoughnessTexture))), o = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(t);
      }), c.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(t, a);
      })));
    }
    r.doubleSided === true && (a.side = an);
    const h = r.alphaMode || go.OPAQUE;
    if (h === go.BLEND ? (a.transparent = true, a.depthWrite = false) : (a.transparent = false, h === go.MASK && (a.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)), r.normalTexture !== void 0 && o !== oi && (c.push(e.assignTexture(a, "normalMap", r.normalTexture)), a.normalScale = new Q(1, 1), r.normalTexture.scale !== void 0)) {
      const u = r.normalTexture.scale;
      a.normalScale.set(u, u);
    }
    if (r.occlusionTexture !== void 0 && o !== oi && (c.push(e.assignTexture(a, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && o !== oi) {
      const u = r.emissiveFactor;
      a.emissive = new It().setRGB(u[0], u[1], u[2], Ie);
    }
    return r.emissiveTexture !== void 0 && o !== oi && c.push(e.assignTexture(a, "emissiveMap", r.emissiveTexture, Me)), Promise.all(c).then(function() {
      const u = new o(a);
      return r.name && (u.name = r.name), Mn(u, r), e.associations.set(u, { materials: t }), r.extensions && ni(i, u, r), u;
    });
  }
  createUniqueName(t) {
    const e = ee.sanitizeNodeName(t || "");
    return e in this.nodeNamesUsed ? e + "_" + ++this.nodeNamesUsed[e] : (this.nodeNamesUsed[e] = 0, e);
  }
  loadGeometries(t) {
    const e = this, n = this.extensions, i = this.primitiveCache;
    function r(a) {
      return n[Wt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, e).then(function(l) {
        return bc(l, a, e);
      });
    }
    const o = [];
    for (let a = 0, l = t.length; a < l; a++) {
      const c = t[a], h = Sx(c), u = i[h];
      if (u) o.push(u.promise);
      else {
        let d;
        c.extensions && c.extensions[Wt.KHR_DRACO_MESH_COMPRESSION] ? d = r(c) : d = bc(new be(), c, e), i[h] = { primitive: c, promise: d }, o.push(d);
      }
    }
    return Promise.all(o);
  }
  loadMesh(t) {
    const e = this, n = this.json, i = this.extensions, r = n.meshes[t], o = r.primitives, a = [];
    for (let l = 0, c = o.length; l < c; l++) {
      const h = o[l].material === void 0 ? xx(this.cache) : this.getDependency("material", o[l].material);
      a.push(h);
    }
    return a.push(e.loadGeometries(o)), Promise.all(a).then(function(l) {
      const c = l.slice(0, l.length - 1), h = l[l.length - 1], u = [];
      for (let f = 0, g = h.length; f < g; f++) {
        const _ = h[f], m = o[f];
        let p;
        const b = c[f];
        if (m.mode === Ye.TRIANGLES || m.mode === Ye.TRIANGLE_STRIP || m.mode === Ye.TRIANGLE_FAN || m.mode === void 0) p = r.isSkinnedMesh === true ? new md(_, b) : new He(_, b), p.isSkinnedMesh === true && p.normalizeSkinWeights(), m.mode === Ye.TRIANGLE_STRIP ? p.geometry = Mc(p.geometry, Bc) : m.mode === Ye.TRIANGLE_FAN && (p.geometry = Mc(p.geometry, ea));
        else if (m.mode === Ye.LINES) p = new Md(_, b);
        else if (m.mode === Ye.LINE_STRIP) p = new Ca(_, b);
        else if (m.mode === Ye.LINE_LOOP) p = new Sd(_, b);
        else if (m.mode === Ye.POINTS) p = new Ed(_, b);
        else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + m.mode);
        Object.keys(p.geometry.morphAttributes).length > 0 && Mx(p, r), p.name = e.createUniqueName(r.name || "mesh_" + t), Mn(p, r), m.extensions && ni(i, p, m), e.assignFinalMaterial(p), u.push(p);
      }
      for (let f = 0, g = u.length; f < g; f++) e.associations.set(u[f], { meshes: t, primitives: f });
      if (u.length === 1) return r.extensions && ni(i, u[0], r), u[0];
      const d = new ai();
      r.extensions && ni(i, d, r), e.associations.set(d, { meshes: t });
      for (let f = 0, g = u.length; f < g; f++) d.add(u[f]);
      return d;
    });
  }
  loadCamera(t) {
    let e;
    const n = this.json.cameras[t], i = n[n.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? e = new Ue(zc.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (e = new Ua(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (e.name = this.createUniqueName(n.name)), Mn(e, n), Promise.resolve(e);
  }
  loadSkin(t) {
    const e = this.json.skins[t], n = [];
    for (let i = 0, r = e.joints.length; i < r; i++) n.push(this._loadNodeShallow(e.joints[i]));
    return e.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", e.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(i) {
      const r = i.pop(), o = i, a = [], l = [];
      for (let c = 0, h = o.length; c < h; c++) {
        const u = o[c];
        if (u) {
          a.push(u);
          const d = new Ot();
          r !== null && d.fromArray(r.array, c * 16), l.push(d);
        } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', e.joints[c]);
      }
      return new wa(a, l);
    });
  }
  loadAnimation(t) {
    const e = this.json, n = this, i = e.animations[t], r = i.name ? i.name : "animation_" + t, o = [], a = [], l = [], c = [], h = [];
    for (let u = 0, d = i.channels.length; u < d; u++) {
      const f = i.channels[u], g = i.samplers[f.sampler], _ = f.target, m = _.node, p = i.parameters !== void 0 ? i.parameters[g.input] : g.input, b = i.parameters !== void 0 ? i.parameters[g.output] : g.output;
      _.node !== void 0 && (o.push(this.getDependency("node", m)), a.push(this.getDependency("accessor", p)), l.push(this.getDependency("accessor", b)), c.push(g), h.push(_));
    }
    return Promise.all([Promise.all(o), Promise.all(a), Promise.all(l), Promise.all(c), Promise.all(h)]).then(function(u) {
      const d = u[0], f = u[1], g = u[2], _ = u[3], m = u[4], p = [];
      for (let b = 0, S = d.length; b < S; b++) {
        const x = d[b], L = f[b], R = g[b], C = _[b], I = m[b];
        if (x === void 0) continue;
        x.updateMatrix && x.updateMatrix();
        const E = n._createAnimationTracks(x, L, R, C, I);
        if (E) for (let y = 0; y < E.length; y++) p.push(E[y]);
      }
      return new la(r, void 0, p);
    });
  }
  createNodeMesh(t) {
    const e = this.json, n = this, i = e.nodes[t];
    return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(r) {
      const o = n._getNodeRef(n.meshCache, i.mesh, r);
      return i.weights !== void 0 && o.traverse(function(a) {
        if (a.isMesh) for (let l = 0, c = i.weights.length; l < c; l++) a.morphTargetInfluences[l] = i.weights[l];
      }), o;
    });
  }
  loadNode(t) {
    const e = this.json, n = this, i = e.nodes[t], r = n._loadNodeShallow(t), o = [], a = i.children || [];
    for (let c = 0, h = a.length; c < h; c++) o.push(n.getDependency("node", a[c]));
    const l = i.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", i.skin);
    return Promise.all([r, Promise.all(o), l]).then(function(c) {
      const h = c[0], u = c[1], d = c[2];
      d !== null && h.traverse(function(f) {
        f.isSkinnedMesh && f.bind(d, Ax);
      });
      for (let f = 0, g = u.length; f < g; f++) h.add(u[f]);
      return h;
    });
  }
  _loadNodeShallow(t) {
    const e = this.json, n = this.extensions, i = this;
    if (this.nodeCache[t] !== void 0) return this.nodeCache[t];
    const r = e.nodes[t], o = r.name ? i.createUniqueName(r.name) : "", a = [], l = i._invokeOne(function(c) {
      return c.createNodeMesh && c.createNodeMesh(t);
    });
    return l && a.push(l), r.camera !== void 0 && a.push(i.getDependency("camera", r.camera).then(function(c) {
      return i._getNodeRef(i.cameraCache, r.camera, c);
    })), i._invokeAll(function(c) {
      return c.createNodeAttachment && c.createNodeAttachment(t);
    }).forEach(function(c) {
      a.push(c);
    }), this.nodeCache[t] = Promise.all(a).then(function(c) {
      let h;
      if (r.isBone === true ? h = new Kc() : c.length > 1 ? h = new ai() : c.length === 1 ? h = c[0] : h = new ae(), h !== c[0]) for (let u = 0, d = c.length; u < d; u++) h.add(c[u]);
      if (r.name && (h.userData.name = r.name, h.name = o), Mn(h, r), r.extensions && ni(n, h, r), r.matrix !== void 0) {
        const u = new Ot();
        u.fromArray(r.matrix), h.applyMatrix4(u);
      } else r.translation !== void 0 && h.position.fromArray(r.translation), r.rotation !== void 0 && h.quaternion.fromArray(r.rotation), r.scale !== void 0 && h.scale.fromArray(r.scale);
      return i.associations.has(h) || i.associations.set(h, {}), i.associations.get(h).nodes = t, h;
    }), this.nodeCache[t];
  }
  loadScene(t) {
    const e = this.extensions, n = this.json.scenes[t], i = this, r = new ai();
    n.name && (r.name = i.createUniqueName(n.name)), Mn(r, n), n.extensions && ni(e, r, n);
    const o = n.nodes || [], a = [];
    for (let l = 0, c = o.length; l < c; l++) a.push(i.getDependency("node", o[l]));
    return Promise.all(a).then(function(l) {
      for (let h = 0, u = l.length; h < u; h++) r.add(l[h]);
      const c = (h) => {
        const u = /* @__PURE__ */ new Map();
        for (const [d, f] of i.associations) (d instanceof sn || d instanceof xe) && u.set(d, f);
        return h.traverse((d) => {
          const f = i.associations.get(d);
          f != null && u.set(d, f);
        }), u;
      };
      return i.associations = c(r), r;
    });
  }
  _createAnimationTracks(t, e, n, i, r) {
    const o = [], a = t.name ? t.name : t.uuid, l = [];
    Nn[r.path] === Nn.weights ? t.traverse(function(d) {
      d.morphTargetInfluences && l.push(d.name ? d.name : d.uuid);
    }) : l.push(a);
    let c;
    switch (Nn[r.path]) {
      case Nn.weights:
        c = qi;
        break;
      case Nn.rotation:
        c = ji;
        break;
      case Nn.position:
      case Nn.scale:
        c = $i;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            c = qi;
            break;
          case 2:
          case 3:
          default:
            c = $i;
            break;
        }
        break;
    }
    const h = i.interpolation !== void 0 ? vx[i.interpolation] : Ms, u = this._getArrayFromAccessor(n);
    for (let d = 0, f = l.length; d < f; d++) {
      const g = new c(l[d] + "." + Nn[r.path], e.array, u, h);
      i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(g), o.push(g);
    }
    return o;
  }
  _getArrayFromAccessor(t) {
    let e = t.array;
    if (t.normalized) {
      const n = fa(e.constructor), i = new Float32Array(e.length);
      for (let r = 0, o = e.length; r < o; r++) i[r] = e[r] * n;
      e = i;
    }
    return e;
  }
  _createCubicSplineTrackInterpolant(t) {
    t.createInterpolant = function(n) {
      const i = this instanceof ji ? _x : wh;
      return new i(this.times, this.values, this.getValueSize() / 3, n);
    }, t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;
  }
}
function Tx(s, t, e) {
  const n = t.attributes, i = new wn();
  if (n.POSITION !== void 0) {
    const a = e.json.accessors[n.POSITION], l = a.min, c = a.max;
    if (l !== void 0 && c !== void 0) {
      if (i.set(new w(l[0], l[1], l[2]), new w(c[0], c[1], c[2])), a.normalized) {
        const h = fa(Bi[a.componentType]);
        i.min.multiplyScalar(h), i.max.multiplyScalar(h);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else return;
  const r = t.targets;
  if (r !== void 0) {
    const a = new w(), l = new w();
    for (let c = 0, h = r.length; c < h; c++) {
      const u = r[c];
      if (u.POSITION !== void 0) {
        const d = e.json.accessors[u.POSITION], f = d.min, g = d.max;
        if (f !== void 0 && g !== void 0) {
          if (l.setX(Math.max(Math.abs(f[0]), Math.abs(g[0]))), l.setY(Math.max(Math.abs(f[1]), Math.abs(g[1]))), l.setZ(Math.max(Math.abs(f[2]), Math.abs(g[2]))), d.normalized) {
            const _ = fa(Bi[d.componentType]);
            l.multiplyScalar(_);
          }
          a.max(l);
        } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    i.expandByVector(a);
  }
  s.boundingBox = i;
  const o = new cn();
  i.getCenter(o.center), o.radius = i.min.distanceTo(i.max) / 2, s.boundingSphere = o;
}
function bc(s, t, e) {
  const n = t.attributes, i = [];
  function r(o, a) {
    return e.getDependency("accessor", o).then(function(l) {
      s.setAttribute(a, l);
    });
  }
  for (const o in n) {
    const a = da[o] || o.toLowerCase();
    a in s.attributes || i.push(r(n[o], a));
  }
  if (t.indices !== void 0 && !s.index) {
    const o = e.getDependency("accessor", t.indices).then(function(a) {
      s.setIndex(a);
    });
    i.push(o);
  }
  return qt.workingColorSpace !== Ie && "COLOR_0" in n && console.warn('THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "'.concat(qt.workingColorSpace, '" not supported.')), Mn(s, t), Tx(s, t, e), Promise.all(i).then(function() {
    return t.targets !== void 0 ? yx(s, t.targets, e) : s;
  });
}
const us = new w();
function Xe(s, t, e, n, i, r) {
  const o = 2 * Math.PI * i / 4, a = Math.max(r - 2 * i, 0), l = Math.PI / 4;
  us.copy(t), us[n] = 0, us.normalize();
  const c = 0.5 * o / (o + a), h = 1 - us.angleTo(s) / l;
  return Math.sign(us[e]) === 1 ? h * c : a / (o + a) + c + c * (1 - h);
}
class zx extends Zi {
  constructor(t = 1, e = 1, n = 1, i = 2, r = 0.1) {
    if (i = i * 2 + 1, r = Math.min(t / 2, e / 2, n / 2, r), super(1, 1, 1, i, i, i), i === 1) return;
    const o = this.toNonIndexed();
    this.index = null, this.attributes.position = o.attributes.position, this.attributes.normal = o.attributes.normal, this.attributes.uv = o.attributes.uv;
    const a = new w(), l = new w(), c = new w(t, e, n).divideScalar(2).subScalar(r), h = this.attributes.position.array, u = this.attributes.normal.array, d = this.attributes.uv.array, f = h.length / 6, g = new w(), _ = 0.5 / i;
    for (let m = 0, p = 0; m < h.length; m += 3, p += 2) switch (a.fromArray(h, m), l.copy(a), l.x -= Math.sign(l.x) * _, l.y -= Math.sign(l.y) * _, l.z -= Math.sign(l.z) * _, l.normalize(), h[m + 0] = c.x * Math.sign(a.x) + l.x * r, h[m + 1] = c.y * Math.sign(a.y) + l.y * r, h[m + 2] = c.z * Math.sign(a.z) + l.z * r, u[m + 0] = l.x, u[m + 1] = l.y, u[m + 2] = l.z, Math.floor(m / f)) {
      case 0:
        g.set(1, 0, 0), d[p + 0] = Xe(g, l, "z", "y", r, n), d[p + 1] = 1 - Xe(g, l, "y", "z", r, e);
        break;
      case 1:
        g.set(-1, 0, 0), d[p + 0] = 1 - Xe(g, l, "z", "y", r, n), d[p + 1] = 1 - Xe(g, l, "y", "z", r, e);
        break;
      case 2:
        g.set(0, 1, 0), d[p + 0] = 1 - Xe(g, l, "x", "z", r, t), d[p + 1] = Xe(g, l, "z", "x", r, n);
        break;
      case 3:
        g.set(0, -1, 0), d[p + 0] = 1 - Xe(g, l, "x", "z", r, t), d[p + 1] = 1 - Xe(g, l, "z", "x", r, n);
        break;
      case 4:
        g.set(0, 0, 1), d[p + 0] = 1 - Xe(g, l, "x", "y", r, t), d[p + 1] = 1 - Xe(g, l, "y", "x", r, e);
        break;
      case 5:
        g.set(0, 0, -1), d[p + 0] = Xe(g, l, "x", "y", r, t), d[p + 1] = 1 - Xe(g, l, "y", "x", r, e);
        break;
    }
  }
}
export {
  ru as A,
  wn as B,
  Tf as C,
  an as D,
  uh as E,
  dh as F,
  kx as G,
  Px as H,
  rn as I,
  vd as J,
  wx as K,
  Ah as L,
  Ot as M,
  Bx as O,
  Ue as P,
  Fx as R,
  Rx as S,
  _f as T,
  w as V,
  Ox as W,
  _r as a,
  yn as b,
  Me as c,
  zc as d,
  Dx as e,
  Ix as f,
  Nx as g,
  Ia as h,
  Ux as i,
  Q as j,
  Un as k,
  Zi as l,
  He as m,
  ai as n,
  un as o,
  oi as p,
  ph as q,
  rh as r,
  fh as s,
  Cx as t,
  ah as u,
  Lx as v,
  Ef as w,
  zx as x,
  oh as y,
  It as z
};
