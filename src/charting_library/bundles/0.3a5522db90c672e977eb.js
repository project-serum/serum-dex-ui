(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    Nkvk: function (e, t, i) {
      'use strict';
      i.r(t);
      var n,
        r = i('mrSG'),
        o = i('4O8T'),
        s = i.n(o),
        d = i('qocr'),
        a = {
          desktop: 1 / 0,
          desktopHd: 1919,
          phone: 767,
          'phone-vertical': 479,
          tablet: 1019,
        },
        c = function () {
          var e;
          if (void 0 === n) {
            var t = document.createElement('div'),
              i = t.style;
            (i.visibility = 'hidden'),
              (i.width = '100px'),
              (i.msOverflowStyle = 'scrollbar'),
              document.body.appendChild(t);
            var r = t.offsetWidth;
            t.style.overflow = 'scroll';
            var o = document.createElement('div');
            (o.style.width = '100%'), t.appendChild(o);
            var s = o.offsetWidth;
            null === (e = t.parentNode) || void 0 === e || e.removeChild(t),
              (n = r - s);
          }
          return n;
        };
      function h(e, t, i) {
        null !== e && e.style.setProperty(t, i);
      }
      function u(e, t) {
        return getComputedStyle(e, null).getPropertyValue(t);
      }
      function l(e, t) {
        return parseInt(u(e, t));
      }
      i.d(t, 'setFixedBodyState', function () {
        return w;
      }),
        i.d(t, 'mediaState', function () {
          return g;
        });
      var p = (function (e) {
          function t() {
            var t = e.call(this) || this;
            return (
              (t.width = 0),
              (t.height = 0),
              (t.device = null),
              (t.breakpoints = a),
              t._checkDevice(),
              window.addEventListener('resize', t._checkDevice),
              Object.entries(a)
                .sort(function (e, t) {
                  e[0];
                  var i = e[1];
                  t[0];
                  return i - t[1];
                })
                .forEach(function (e, i, n) {
                  var r,
                    o = e[0],
                    s = e[1];
                  0 !== i ? (r = n[i - 1][1] + 1) : (r = 0);
                  var d,
                    a,
                    c =
                      ((d = r),
                      (a = s) === 1 / 0
                        ? window.matchMedia('(min-width: ' + d + 'px)')
                        : window.matchMedia(
                            '(min-width: ' +
                              d +
                              'px) and (max-width: ' +
                              a +
                              'px)',
                          ));
                  c.matches && t._setNewDevice(o),
                    c.addListener(function (e) {
                      e.matches && (t._checkDevice(), t._setNewDevice(o));
                    });
                }),
              Object(d.a)(t._checkDevice.bind(t)),
              t.isPhoneSizeDevice.bind(t),
              t
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.isPhoneSizeDevice = function () {
              return (
                'phone' === this.device || 'phone-vertical' === this.device
              );
            }),
            (t.prototype._checkDevice = function () {
              (this.width = window.innerWidth),
                (this.height = window.innerHeight);
            }),
            (t.prototype._setNewDevice = function (e) {
              var t = this.device;
              (this.device = e), this.trigger('changeDevice', [e, t]);
            }),
            t
          );
        })(s.a),
        v = 0,
        f = !1;
      function w(e) {
        var t = document.body,
          i = t.querySelector('.widgetbar-wrap');
        if (e && 1 == ++v) {
          var n = u(t, 'overflow'),
            r = l(t, 'padding-right');
          'hidden' !== n.toLowerCase() &&
            t.scrollHeight > t.offsetHeight &&
            (h(i, 'right', c() + 'px'),
            (t.style.paddingRight = r + c() + 'px'),
            (f = !0)),
            t.classList.add('i-no-scroll');
        } else if (
          !e &&
          v > 0 &&
          0 == --v &&
          (t.classList.remove('i-no-scroll'), f)
        ) {
          h(i, 'right', '0px');
          var o = Boolean(
            window.widgetbar &&
              window.widgetbar.resizerBridge.fullscreen.value(),
          )
            ? 0
            : (function (e) {
                if (null !== e)
                  return (
                    l(e, 'width') - l(e, 'padding-left') - l(e, 'padding-right')
                  );
              })(i) || 0;
          t.scrollHeight <= t.clientHeight && (o -= c()),
            (t.style.paddingRight = (o < 0 ? 0 : o) + 'px'),
            (f = !1);
        }
      }
      var g = new p();
    },
    jAh7: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'OverlapManager', function () {
          return o;
        }),
        i.d(t, 'getRootOverlapManager', function () {
          return d;
        });
      var n = i('Eyy1'),
        r = (function () {
          function e() {
            this._storage = [];
          }
          return (
            (e.prototype.add = function (e) {
              this._storage.push(e);
            }),
            (e.prototype.remove = function (e) {
              this._storage = this._storage.filter(function (t) {
                return e !== t;
              });
            }),
            (e.prototype.has = function (e) {
              return this._storage.includes(e);
            }),
            (e.prototype.getItems = function () {
              return this._storage;
            }),
            e
          );
        })(),
        o = (function () {
          function e(e) {
            void 0 === e && (e = document),
              (this._storage = new r()),
              (this._windows = new Map()),
              (this._index = 0),
              (this._document = e),
              (this._container = e.createDocumentFragment());
          }
          return (
            (e.prototype.setContainer = function (e) {
              var t = this._container,
                i = null === e ? this._document.createDocumentFragment() : e;
              !(function (e, t) {
                Array.from(e.childNodes).forEach(function (e) {
                  e.nodeType === Node.ELEMENT_NODE && t.appendChild(e);
                });
              })(t, i),
                (this._container = i);
            }),
            (e.prototype.registerWindow = function (e) {
              this._storage.has(e) || this._storage.add(e);
            }),
            (e.prototype.ensureWindow = function (e, t) {
              void 0 === t && (t = { position: 'fixed', direction: 'normal' });
              var i = this._windows.get(e);
              if (void 0 !== i) return i;
              this.registerWindow(e);
              var n = this._document.createElement('div');
              if (
                ((n.style.position = t.position),
                (n.style.zIndex = this._index.toString()),
                (n.dataset.id = e),
                void 0 !== t.index)
              ) {
                var r = this._container.childNodes.length;
                if (t.index >= r) this._container.appendChild(n);
                else if (t.index <= 0)
                  this._container.insertBefore(n, this._container.firstChild);
                else {
                  var o = this._container.childNodes[t.index];
                  this._container.insertBefore(n, o);
                }
              } else
                'reverse' === t.direction
                  ? this._container.insertBefore(n, this._container.firstChild)
                  : this._container.appendChild(n);
              return this._windows.set(e, n), ++this._index, n;
            }),
            (e.prototype.unregisterWindow = function (e) {
              this._storage.remove(e);
              var t = this._windows.get(e);
              void 0 !== t &&
                (null !== t.parentElement && t.parentElement.removeChild(t),
                this._windows.delete(e));
            }),
            (e.prototype.getZindex = function (e) {
              var t = this.ensureWindow(e);
              return parseInt(t.style.zIndex || '0');
            }),
            (e.prototype.moveToTop = function (e) {
              this.getZindex(e) !== this._index &&
                (this.ensureWindow(e).style.zIndex = (++this
                  ._index).toString());
            }),
            (e.prototype.removeWindow = function (e) {
              this.unregisterWindow(e);
            }),
            e
          );
        })(),
        s = new WeakMap();
      function d(e) {
        void 0 === e && (e = document);
        var t = e.getElementById('overlap-manager-root');
        if (null !== t) return Object(n.ensureDefined)(s.get(t));
        var i = new o(e),
          r = (function (e) {
            var t = e.createElement('div');
            return (
              (t.style.position = 'absolute'),
              (t.style.zIndex = (150).toString()),
              (t.style.top = '0px'),
              (t.style.left = '0px'),
              (t.id = 'overlap-manager-root'),
              t
            );
          })(e);
        return s.set(r, i), i.setContainer(r), e.body.appendChild(r), i;
      }
    },
  },
]);
