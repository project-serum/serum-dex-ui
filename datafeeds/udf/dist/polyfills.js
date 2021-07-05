!(function () {
  'use strict';
  function n() {}
  function i(t) {
    if ('object' != typeof this)
      throw new TypeError('Promises must be constructed via new');
    if ('function' != typeof t) throw new TypeError('not a function');
    (this._state = 0),
      (this._handled = !1),
      (this._value = void 0),
      (this._deferreds = []),
      h(t, this);
  }
  function o(r, n) {
    for (; 3 === r._state; ) r = r._value;
    0 !== r._state
      ? ((r._handled = !0),
        i._immediateFn(function () {
          var t,
            e = 1 === r._state ? n.onFulfilled : n.onRejected;
          if (null !== e) {
            try {
              t = e(r._value);
            } catch (t) {
              return void a(n.promise, t);
            }
            s(n.promise, t);
          } else (1 === r._state ? s : a)(n.promise, r._value);
        }))
      : r._deferreds.push(n);
  }
  function s(e, t) {
    try {
      if (t === e)
        throw new TypeError('A promise cannot be resolved with itself.');
      if (t && ('object' == typeof t || 'function' == typeof t)) {
        var r = t.then;
        if (t instanceof i) return (e._state = 3), (e._value = t), void u(e);
        if ('function' == typeof r)
          return void h(
            ((n = r),
            (o = t),
            function () {
              n.apply(o, arguments);
            }),
            e,
          );
      }
      (e._state = 1), (e._value = t), u(e);
    } catch (t) {
      a(e, t);
    }
    var n, o;
  }
  function a(t, e) {
    (t._state = 2), (t._value = e), u(t);
  }
  function u(t) {
    2 === t._state &&
      0 === t._deferreds.length &&
      i._immediateFn(function () {
        t._handled || i._unhandledRejectionFn(t._value);
      });
    for (var e = 0, r = t._deferreds.length; e < r; e++) o(t, t._deferreds[e]);
    t._deferreds = null;
  }
  function f(t, e, r) {
    (this.onFulfilled = 'function' == typeof t ? t : null),
      (this.onRejected = 'function' == typeof e ? e : null),
      (this.promise = r);
  }
  function h(t, e) {
    var r = !1;
    try {
      t(
        function (t) {
          r || ((r = !0), s(e, t));
        },
        function (t) {
          r || ((r = !0), a(e, t));
        },
      );
    } catch (t) {
      if (r) return;
      (r = !0), a(e, t);
    }
  }
  var e, t, r, d, c, l, y, p, b, m, w, _;
  function v(t) {
    if (
      ('string' != typeof t && (t = String(t)),
      /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))
    )
      throw new TypeError('Invalid character in header field name');
    return t.toLowerCase();
  }
  function A(t) {
    return 'string' != typeof t && (t = String(t)), t;
  }
  function T(e) {
    var t = {
      next: function () {
        var t = e.shift();
        return { done: void 0 === t, value: t };
      },
    };
    return (
      d &&
        (t[Symbol.iterator] = function () {
          return t;
        }),
      t
    );
  }
  function B(e) {
    (this.map = {}),
      e instanceof B
        ? e.forEach(function (t, e) {
            this.append(e, t);
          }, this)
        : Array.isArray(e)
        ? e.forEach(function (t) {
            this.append(t[0], t[1]);
          }, this)
        : e &&
          Object.getOwnPropertyNames(e).forEach(function (t) {
            this.append(t, e[t]);
          }, this);
  }
  function E(t) {
    if (t.bodyUsed) return Promise.reject(new TypeError('Already read'));
    t.bodyUsed = !0;
  }
  function P(r) {
    return new Promise(function (t, e) {
      (r.onload = function () {
        t(r.result);
      }),
        (r.onerror = function () {
          e(r.error);
        });
    });
  }
  function j(t) {
    var e = new FileReader(),
      r = P(e);
    return e.readAsArrayBuffer(t), r;
  }
  function g(t) {
    if (t.slice) return t.slice(0);
    var e = new Uint8Array(t.byteLength);
    return e.set(new Uint8Array(t)), e.buffer;
  }
  function x() {
    return (
      (this.bodyUsed = !1),
      (this._initBody = function (t) {
        if ((this._bodyInit = t))
          if ('string' == typeof t) this._bodyText = t;
          else if (c && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
          else if (l && FormData.prototype.isPrototypeOf(t))
            this._bodyFormData = t;
          else if (r && URLSearchParams.prototype.isPrototypeOf(t))
            this._bodyText = t.toString();
          else if (y && c && b(t))
            (this._bodyArrayBuffer = g(t.buffer)),
              (this._bodyInit = new Blob([this._bodyArrayBuffer]));
          else {
            if (!y || (!ArrayBuffer.prototype.isPrototypeOf(t) && !m(t)))
              throw new Error('unsupported BodyInit type');
            this._bodyArrayBuffer = g(t);
          }
        else this._bodyText = '';
        this.headers.get('content-type') ||
          ('string' == typeof t
            ? this.headers.set('content-type', 'text/plain;charset=UTF-8')
            : this._bodyBlob && this._bodyBlob.type
            ? this.headers.set('content-type', this._bodyBlob.type)
            : r &&
              URLSearchParams.prototype.isPrototypeOf(t) &&
              this.headers.set(
                'content-type',
                'application/x-www-form-urlencoded;charset=UTF-8',
              ));
      }),
      c &&
        ((this.blob = function () {
          var t = E(this);
          if (t) return t;
          if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          if (this._bodyFormData)
            throw new Error('could not read FormData body as blob');
          return Promise.resolve(new Blob([this._bodyText]));
        }),
        (this.arrayBuffer = function () {
          return this._bodyArrayBuffer
            ? E(this) || Promise.resolve(this._bodyArrayBuffer)
            : this.blob().then(j);
        })),
      (this.text = function () {
        var t,
          e,
          r = E(this);
        if (r) return r;
        if (this._bodyBlob)
          return (
            (t = this._bodyBlob),
            (e = new FileReader()),
            (r = P(e)),
            e.readAsText(t),
            r
          );
        if (this._bodyArrayBuffer)
          return Promise.resolve(
            (function (t) {
              for (
                var e = new Uint8Array(t), r = new Array(e.length), n = 0;
                n < e.length;
                n++
              )
                r[n] = String.fromCharCode(e[n]);
              return r.join('');
            })(this._bodyArrayBuffer),
          );
        if (this._bodyFormData)
          throw new Error('could not read FormData body as text');
        return Promise.resolve(this._bodyText);
      }),
      l &&
        (this.formData = function () {
          return this.text().then(U);
        }),
      (this.json = function () {
        return this.text().then(JSON.parse);
      }),
      this
    );
  }
  function F(t, e) {
    var r,
      n = (e = e || {}).body;
    if (t instanceof F) {
      if (t.bodyUsed) throw new TypeError('Already read');
      (this.url = t.url),
        (this.credentials = t.credentials),
        e.headers || (this.headers = new B(t.headers)),
        (this.method = t.method),
        (this.mode = t.mode),
        n || null == t._bodyInit || ((n = t._bodyInit), (t.bodyUsed = !0));
    } else this.url = String(t);
    if (
      ((this.credentials = e.credentials || this.credentials || 'omit'),
      (!e.headers && this.headers) || (this.headers = new B(e.headers)),
      (this.method =
        ((r = e.method || this.method || 'GET'),
        (t = r.toUpperCase()),
        -1 < w.indexOf(t) ? t : r)),
      (this.mode = e.mode || this.mode || null),
      (this.referrer = null),
      ('GET' === this.method || 'HEAD' === this.method) && n)
    )
      throw new TypeError('Body not allowed for GET or HEAD requests');
    this._initBody(n);
  }
  function U(t) {
    var r = new FormData();
    return (
      t
        .trim()
        .split('&')
        .forEach(function (t) {
          var e;
          t &&
            ((t = (e = t.split('=')).shift().replace(/\+/g, ' ')),
            (e = e.join('=').replace(/\+/g, ' ')),
            r.append(decodeURIComponent(t), decodeURIComponent(e)));
        }),
      r
    );
  }
  function R(t, e) {
    (e = e || {}),
      (this.type = 'default'),
      (this.status = 'status' in e ? e.status : 200),
      (this.ok = 200 <= this.status && this.status < 300),
      (this.statusText = 'statusText' in e ? e.statusText : 'OK'),
      (this.headers = new B(e.headers)),
      (this.url = e.url || ''),
      this._initBody(t);
  }
  (t = window),
    (e = setTimeout),
    (i.prototype.catch = function (t) {
      return this.then(null, t);
    }),
    (i.prototype.then = function (t, e) {
      var r = new this.constructor(n);
      return o(this, new f(t, e, r)), r;
    }),
    (i.all = function (t) {
      var a = Array.prototype.slice.call(t);
      return new i(function (o, i) {
        if (0 === a.length) return o([]);
        var s = a.length;
        for (var t = 0; t < a.length; t++)
          !(function e(r, t) {
            try {
              if (t && ('object' == typeof t || 'function' == typeof t)) {
                var n = t.then;
                if ('function' == typeof n)
                  return void n.call(
                    t,
                    function (t) {
                      e(r, t);
                    },
                    i,
                  );
              }
              (a[r] = t), 0 == --s && o(a);
            } catch (t) {
              i(t);
            }
          })(t, a[t]);
      });
    }),
    (i.resolve = function (e) {
      return e && 'object' == typeof e && e.constructor === i
        ? e
        : new i(function (t) {
            t(e);
          });
    }),
    (i.reject = function (r) {
      return new i(function (t, e) {
        e(r);
      });
    }),
    (i.race = function (o) {
      return new i(function (t, e) {
        for (var r = 0, n = o.length; r < n; r++) o[r].then(t, e);
      });
    }),
    (i._immediateFn =
      'function' == typeof setImmediate
        ? function (t) {
            setImmediate(t);
          }
        : function (t) {
            e(t, 0);
          }),
    (i._unhandledRejectionFn = function (t) {
      'undefined' != typeof console &&
        console &&
        console.warn('Possible Unhandled Promise Rejection:', t);
    }),
    (i._setImmediateFn = function (t) {
      i._immediateFn = t;
    }),
    (i._setUnhandledRejectionFn = function (t) {
      i._unhandledRejectionFn = t;
    }),
    'undefined' != typeof module && module.exports
      ? (module.exports = i)
      : t.Promise || (t.Promise = i),
    (t = 'undefined' != typeof self ? self : window).fetch ||
      ((r = 'URLSearchParams' in t),
      (d = 'Symbol' in t && 'iterator' in Symbol),
      (c =
        'FileReader' in t &&
        'Blob' in t &&
        (function () {
          try {
            return new Blob(), !0;
          } catch (t) {
            return !1;
          }
        })()),
      (l = 'FormData' in t),
      (y = 'ArrayBuffer' in t) &&
        ((p = [
          '[object Int8Array]',
          '[object Uint8Array]',
          '[object Uint8ClampedArray]',
          '[object Int16Array]',
          '[object Uint16Array]',
          '[object Int32Array]',
          '[object Uint32Array]',
          '[object Float32Array]',
          '[object Float64Array]',
        ]),
        (b = function (t) {
          return t && DataView.prototype.isPrototypeOf(t);
        }),
        (m =
          ArrayBuffer.isView ||
          function (t) {
            return t && -1 < p.indexOf(Object.prototype.toString.call(t));
          })),
      (B.prototype.append = function (t, e) {
        (t = v(t)), (e = A(e));
        var r = this.map[t];
        this.map[t] = r ? r + ',' + e : e;
      }),
      (B.prototype.delete = function (t) {
        delete this.map[v(t)];
      }),
      (B.prototype.get = function (t) {
        return (t = v(t)), this.has(t) ? this.map[t] : null;
      }),
      (B.prototype.has = function (t) {
        return this.map.hasOwnProperty(v(t));
      }),
      (B.prototype.set = function (t, e) {
        this.map[v(t)] = A(e);
      }),
      (B.prototype.forEach = function (t, e) {
        for (var r in this.map)
          this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this);
      }),
      (B.prototype.keys = function () {
        var r = [];
        return (
          this.forEach(function (t, e) {
            r.push(e);
          }),
          T(r)
        );
      }),
      (B.prototype.values = function () {
        var e = [];
        return (
          this.forEach(function (t) {
            e.push(t);
          }),
          T(e)
        );
      }),
      (B.prototype.entries = function () {
        var r = [];
        return (
          this.forEach(function (t, e) {
            r.push([e, t]);
          }),
          T(r)
        );
      }),
      d && (B.prototype[Symbol.iterator] = B.prototype.entries),
      (w = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']),
      (F.prototype.clone = function () {
        return new F(this, { body: this._bodyInit });
      }),
      x.call(F.prototype),
      x.call(R.prototype),
      (R.prototype.clone = function () {
        return new R(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new B(this.headers),
          url: this.url,
        });
      }),
      (R.error = function () {
        var t = new R(null, { status: 0, statusText: '' });
        return (t.type = 'error'), t;
      }),
      (_ = [301, 302, 303, 307, 308]),
      (R.redirect = function (t, e) {
        if (-1 === _.indexOf(e)) throw new RangeError('Invalid status code');
        return new R(null, { status: e, headers: { location: t } });
      }),
      (t.Headers = B),
      (t.Request = F),
      (t.Response = R),
      (t.fetch = function (r, i) {
        return new Promise(function (n, t) {
          var e = new F(r, i),
            o = new XMLHttpRequest();
          (o.onload = function () {
            var r,
              t = {
                status: o.status,
                statusText: o.statusText,
                headers:
                  ((e = o.getAllResponseHeaders() || ''),
                  (r = new B()),
                  e.split(/\r?\n/).forEach(function (t) {
                    var e = t.split(':'),
                      t = e.shift().trim();
                    t && ((e = e.join(':').trim()), r.append(t, e));
                  }),
                  r),
              };
            t.url =
              'responseURL' in o
                ? o.responseURL
                : t.headers.get('X-Request-URL');
            var e = 'response' in o ? o.response : o.responseText;
            n(new R(e, t));
          }),
            (o.onerror = function () {
              t(new TypeError('Network request failed'));
            }),
            (o.ontimeout = function () {
              t(new TypeError('Network request failed'));
            }),
            o.open(e.method, e.url, !0),
            'include' === e.credentials && (o.withCredentials = !0),
            'responseType' in o && c && (o.responseType = 'blob'),
            e.headers.forEach(function (t, e) {
              o.setRequestHeader(e, t);
            }),
            o.send(void 0 === e._bodyInit ? null : e._bodyInit);
        });
      }),
      (t.fetch.polyfill = !0));
})();
