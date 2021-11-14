(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    bdgK: function (t, e, n) {
      'use strict';
      n.r(e),
        function (t) {
          var n = (function () {
              if ('undefined' != typeof Map) return Map;
              function t(t, e) {
                var n = -1;
                return (
                  t.some(function (t, i) {
                    return t[0] === e && ((n = i), !0);
                  }),
                  n
                );
              }
              return (function () {
                function e() {
                  this.__entries__ = [];
                }
                var n = { size: { configurable: !0 } };
                return (
                  (n.size.get = function () {
                    return this.__entries__.length;
                  }),
                  (e.prototype.get = function (e) {
                    var n = t(this.__entries__, e),
                      i = this.__entries__[n];
                    return i && i[1];
                  }),
                  (e.prototype.set = function (e, n) {
                    var i = t(this.__entries__, e);
                    ~i
                      ? (this.__entries__[i][1] = n)
                      : this.__entries__.push([e, n]);
                  }),
                  (e.prototype.delete = function (e) {
                    var n = this.__entries__,
                      i = t(n, e);
                    ~i && n.splice(i, 1);
                  }),
                  (e.prototype.has = function (e) {
                    return !!~t(this.__entries__, e);
                  }),
                  (e.prototype.clear = function () {
                    this.__entries__.splice(0);
                  }),
                  (e.prototype.forEach = function (t, e) {
                    void 0 === e && (e = null);
                    for (
                      var n = 0, i = this.__entries__;
                      n < i.length;
                      n += 1
                    ) {
                      var r = i[n];
                      t.call(e, r[1], r[0]);
                    }
                  }),
                  Object.defineProperties(e.prototype, n),
                  e
                );
              })();
            })(),
            i =
              'undefined' != typeof window &&
              'undefined' != typeof document &&
              window.document === document,
            r =
              void 0 !== t && t.Math === Math
                ? t
                : 'undefined' != typeof self && self.Math === Math
                ? self
                : 'undefined' != typeof window && window.Math === Math
                ? window
                : Function('return this')(),
            o =
              'function' == typeof requestAnimationFrame
                ? requestAnimationFrame.bind(r)
                : function (t) {
                    return setTimeout(function () {
                      return t(Date.now());
                    }, 1e3 / 60);
                  },
            s = [
              'top',
              'right',
              'bottom',
              'left',
              'width',
              'height',
              'size',
              'weight',
            ],
            c = 'undefined' != typeof MutationObserver,
            a = function () {
              (this.connected_ = !1),
                (this.mutationEventsAdded_ = !1),
                (this.mutationsObserver_ = null),
                (this.observers_ = []),
                (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
                (this.refresh = (function (t, e) {
                  var n = !1,
                    i = !1,
                    r = 0;
                  function s() {
                    n && ((n = !1), t()), i && a();
                  }
                  function c() {
                    o(s);
                  }
                  function a() {
                    var t = Date.now();
                    if (n) {
                      if (t - r < 2) return;
                      i = !0;
                    } else (n = !0), (i = !1), setTimeout(c, e);
                    r = t;
                  }
                  return a;
                })(this.refresh.bind(this), 20));
            };
          (a.prototype.addObserver = function (t) {
            ~this.observers_.indexOf(t) || this.observers_.push(t),
              this.connected_ || this.connect_();
          }),
            (a.prototype.removeObserver = function (t) {
              var e = this.observers_,
                n = e.indexOf(t);
              ~n && e.splice(n, 1),
                !e.length && this.connected_ && this.disconnect_();
            }),
            (a.prototype.refresh = function () {
              this.updateObservers_() && this.refresh();
            }),
            (a.prototype.updateObservers_ = function () {
              var t = this.observers_.filter(function (t) {
                return t.gatherActive(), t.hasActive();
              });
              return (
                t.forEach(function (t) {
                  return t.broadcastActive();
                }),
                t.length > 0
              );
            }),
            (a.prototype.connect_ = function () {
              i &&
                !this.connected_ &&
                (document.addEventListener(
                  'transitionend',
                  this.onTransitionEnd_,
                ),
                window.addEventListener('resize', this.refresh),
                c
                  ? ((this.mutationsObserver_ = new MutationObserver(
                      this.refresh,
                    )),
                    this.mutationsObserver_.observe(document, {
                      attributes: !0,
                      childList: !0,
                      characterData: !0,
                      subtree: !0,
                    }))
                  : (document.addEventListener(
                      'DOMSubtreeModified',
                      this.refresh,
                    ),
                    (this.mutationEventsAdded_ = !0)),
                (this.connected_ = !0));
            }),
            (a.prototype.disconnect_ = function () {
              i &&
                this.connected_ &&
                (document.removeEventListener(
                  'transitionend',
                  this.onTransitionEnd_,
                ),
                window.removeEventListener('resize', this.refresh),
                this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                this.mutationEventsAdded_ &&
                  document.removeEventListener(
                    'DOMSubtreeModified',
                    this.refresh,
                  ),
                (this.mutationsObserver_ = null),
                (this.mutationEventsAdded_ = !1),
                (this.connected_ = !1));
            }),
            (a.prototype.onTransitionEnd_ = function (t) {
              var e = t.propertyName;
              void 0 === e && (e = ''),
                s.some(function (t) {
                  return !!~e.indexOf(t);
                }) && this.refresh();
            }),
            (a.getInstance = function () {
              return (
                this.instance_ || (this.instance_ = new a()), this.instance_
              );
            }),
            (a.instance_ = null);
          var h = function (t, e) {
              for (var n = 0, i = Object.keys(e); n < i.length; n += 1) {
                var r = i[n];
                Object.defineProperty(t, r, {
                  value: e[r],
                  enumerable: !1,
                  writable: !1,
                  configurable: !0,
                });
              }
              return t;
            },
            u = function (t) {
              return (t && t.ownerDocument && t.ownerDocument.defaultView) || r;
            },
            f = b(0, 0, 0, 0);
          function d(t) {
            return parseFloat(t) || 0;
          }
          function p(t) {
            for (var e = [], n = arguments.length - 1; n-- > 0; )
              e[n] = arguments[n + 1];
            return e.reduce(function (e, n) {
              return e + d(t['border-' + n + '-width']);
            }, 0);
          }
          function v(t) {
            var e = t.clientWidth,
              n = t.clientHeight;
            if (!e && !n) return f;
            var i = u(t).getComputedStyle(t),
              r = (function (t) {
                for (
                  var e = {}, n = 0, i = ['top', 'right', 'bottom', 'left'];
                  n < i.length;
                  n += 1
                ) {
                  var r = i[n],
                    o = t['padding-' + r];
                  e[r] = d(o);
                }
                return e;
              })(i),
              o = r.left + r.right,
              s = r.top + r.bottom,
              c = d(i.width),
              a = d(i.height);
            if (
              ('border-box' === i.boxSizing &&
                (Math.round(c + o) !== e && (c -= p(i, 'left', 'right') + o),
                Math.round(a + s) !== n && (a -= p(i, 'top', 'bottom') + s)),
              !(function (t) {
                return t === u(t).document.documentElement;
              })(t))
            ) {
              var h = Math.round(c + o) - e,
                v = Math.round(a + s) - n;
              1 !== Math.abs(h) && (c -= h), 1 !== Math.abs(v) && (a -= v);
            }
            return b(r.left, r.top, c, a);
          }
          var _ =
            'undefined' != typeof SVGGraphicsElement
              ? function (t) {
                  return t instanceof u(t).SVGGraphicsElement;
                }
              : function (t) {
                  return (
                    t instanceof u(t).SVGElement &&
                    'function' == typeof t.getBBox
                  );
                };
          function l(t) {
            return i
              ? _(t)
                ? (function (t) {
                    var e = t.getBBox();
                    return b(0, 0, e.width, e.height);
                  })(t)
                : v(t)
              : f;
          }
          function b(t, e, n, i) {
            return { x: t, y: e, width: n, height: i };
          }
          var m = function (t) {
            (this.broadcastWidth = 0),
              (this.broadcastHeight = 0),
              (this.contentRect_ = b(0, 0, 0, 0)),
              (this.target = t);
          };
          (m.prototype.isActive = function () {
            var t = l(this.target);
            return (
              (this.contentRect_ = t),
              t.width !== this.broadcastWidth ||
                t.height !== this.broadcastHeight
            );
          }),
            (m.prototype.broadcastRect = function () {
              var t = this.contentRect_;
              return (
                (this.broadcastWidth = t.width),
                (this.broadcastHeight = t.height),
                t
              );
            });
          var y = function (t, e) {
              var n,
                i,
                r,
                o,
                s,
                c,
                a,
                u =
                  ((i = (n = e).x),
                  (r = n.y),
                  (o = n.width),
                  (s = n.height),
                  (c =
                    'undefined' != typeof DOMRectReadOnly
                      ? DOMRectReadOnly
                      : Object),
                  (a = Object.create(c.prototype)),
                  h(a, {
                    x: i,
                    y: r,
                    width: o,
                    height: s,
                    top: r,
                    right: i + o,
                    bottom: s + r,
                    left: i,
                  }),
                  a);
              h(this, { target: t, contentRect: u });
            },
            w = function (t, e, i) {
              if (
                ((this.activeObservations_ = []),
                (this.observations_ = new n()),
                'function' != typeof t)
              )
                throw new TypeError(
                  'The callback provided as parameter 1 is not a function.',
                );
              (this.callback_ = t),
                (this.controller_ = e),
                (this.callbackCtx_ = i);
            };
          (w.prototype.observe = function (t) {
            if (!arguments.length)
              throw new TypeError('1 argument required, but only 0 present.');
            if ('undefined' != typeof Element && Element instanceof Object) {
              if (!(t instanceof u(t).Element))
                throw new TypeError('parameter 1 is not of type "Element".');
              var e = this.observations_;
              e.has(t) ||
                (e.set(t, new m(t)),
                this.controller_.addObserver(this),
                this.controller_.refresh());
            }
          }),
            (w.prototype.unobserve = function (t) {
              if (!arguments.length)
                throw new TypeError('1 argument required, but only 0 present.');
              if ('undefined' != typeof Element && Element instanceof Object) {
                if (!(t instanceof u(t).Element))
                  throw new TypeError('parameter 1 is not of type "Element".');
                var e = this.observations_;
                e.has(t) &&
                  (e.delete(t),
                  e.size || this.controller_.removeObserver(this));
              }
            }),
            (w.prototype.disconnect = function () {
              this.clearActive(),
                this.observations_.clear(),
                this.controller_.removeObserver(this);
            }),
            (w.prototype.gatherActive = function () {
              var t = this;
              this.clearActive(),
                this.observations_.forEach(function (e) {
                  e.isActive() && t.activeObservations_.push(e);
                });
            }),
            (w.prototype.broadcastActive = function () {
              if (this.hasActive()) {
                var t = this.callbackCtx_,
                  e = this.activeObservations_.map(function (t) {
                    return new y(t.target, t.broadcastRect());
                  });
                this.callback_.call(t, e, t), this.clearActive();
              }
            }),
            (w.prototype.clearActive = function () {
              this.activeObservations_.splice(0);
            }),
            (w.prototype.hasActive = function () {
              return this.activeObservations_.length > 0;
            });
          var g = 'undefined' != typeof WeakMap ? new WeakMap() : new n(),
            E = function (t) {
              if (!(this instanceof E))
                throw new TypeError('Cannot call a class as a function.');
              if (!arguments.length)
                throw new TypeError('1 argument required, but only 0 present.');
              var e = a.getInstance(),
                n = new w(t, e, this);
              g.set(this, n);
            };
          ['observe', 'unobserve', 'disconnect'].forEach(function (t) {
            E.prototype[t] = function () {
              return (e = g.get(this))[t].apply(e, arguments);
              var e;
            };
          });
          var O = void 0 !== r.ResizeObserver ? r.ResizeObserver : E;
          e.default = O;
        }.call(this, n('yLpj'));
    },
  },
]);
