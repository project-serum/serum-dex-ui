(window.webpackJsonp = window.webpackJsonp || []).push([
  [21],
  {
    GOhO: function (e, n, t) {
      'use strict';
      var r = t('+DwS');
      t('tc+8');
      var i = t('m/cY');
      function o(e) {
        for (var n = [], t = 1; t < arguments.length; t++)
          n[t - 1] = arguments[t];
        for (
          var r = function () {
              return e.apply(
                void 0,
                n.map(function (e) {
                  return e.value();
                }),
              );
            },
            o = Object(i.a)(r()),
            u = function () {
              return o.setValue(r());
            },
            c = {},
            s = 0,
            a = n;
          s < a.length;
          s++
        ) {
          var p = a[s];
          p.subscribe(c, u);
        }
        return (
          (o.destroy = function () {
            n.forEach(function (e) {
              return e.unsubscribeAll(c);
            });
          }),
          o
        );
      }
      t.d(n, 'b', function () {
        return r.a;
      }),
        t.d(n, 'a', function () {
          return o;
        });
    },
    HSjo: function (e, n, t) {
      'use strict';
      var r = t('mrSG');
      function i(e, n) {
        return Object(r.__assign)({ propType: 'checkable', properties: e }, n);
      }
      function o(e, n, t) {
        return Object(r.__assign)(
          { propType: 'checkableSet', properties: e, childrenDefinitions: t },
          n,
        );
      }
      function u(e, n) {
        return Object(r.__assign)(
          { propType: 'color', properties: e, noAlpha: !1 },
          n,
        );
      }
      var c = t('a7Ha'),
        s = t('8Uy/'),
        a = [s.LINESTYLE_SOLID, s.LINESTYLE_DOTTED, s.LINESTYLE_DASHED],
        p = [1, 2, 3, 4],
        l = [c.LineEnd.Normal, c.LineEnd.Arrow];
      function f(e, n) {
        var t = Object(r.__assign)({ propType: 'line', properties: e }, n);
        return (
          void 0 !== t.properties.style && (t.styleValues = a),
          void 0 !== t.properties.width && (t.widthValues = p),
          (void 0 === t.properties.leftEnd &&
            void 0 === t.properties.rightEnd) ||
            void 0 !== t.endsValues ||
            (t.endsValues = l),
          void 0 !== t.properties.value &&
            void 0 === t.valueType &&
            (t.valueType = 1),
          t
        );
      }
      var d = [s.LINESTYLE_SOLID, s.LINESTYLE_DOTTED, s.LINESTYLE_DASHED],
        v = [1, 2, 3, 4];
      function b(e, n) {
        var t = Object(r.__assign)(
          { propType: 'leveledLine', properties: e },
          n,
        );
        return (
          void 0 !== t.properties.style && (t.styleValues = d),
          void 0 !== t.properties.width && (t.widthValues = v),
          t
        );
      }
      function g(e, n) {
        return Object(r.__assign)(
          { propType: 'number', properties: e, type: 1 },
          n,
        );
      }
      function y(e, n) {
        return Object(r.__assign)({ propType: 'options', properties: e }, n);
      }
      function w(e, n) {
        return Object(r.__assign)({ propType: 'twoOptions', properties: e }, n);
      }
      t('YFKU');
      var T = [
          { value: 'bottom', title: window.t('Top') },
          { value: 'middle', title: window.t('Middle') },
          { value: 'top', title: window.t('Bottom') },
        ],
        _ = [
          { value: 'left', title: window.t('Left') },
          { value: 'center', title: window.t('Center') },
          { value: 'right', title: window.t('Right') },
        ],
        m = [
          { value: 'horizontal', title: window.t('Horizontal') },
          { value: 'vertical', title: window.t('Vertical') },
        ],
        O = [10, 11, 12, 14, 16, 20, 24, 28, 32, 40].map(function (e) {
          return { title: String(e), value: e };
        }),
        h = [1, 2, 3, 4],
        E = window.t('Text alignment'),
        j = window.t('Text orientation');
      function V(e, n) {
        var t = Object(r.__assign)(
          Object(r.__assign)({ propType: 'text', properties: e }, n),
          { isEditable: n.isEditable || !1 },
        );
        return (
          void 0 !== t.properties.size &&
            void 0 === t.sizeItems &&
            (t.sizeItems = O),
          void 0 !== t.properties.alignmentVertical &&
            void 0 === t.alignmentVerticalItems &&
            (t.alignmentVerticalItems = T),
          void 0 !== t.properties.alignmentHorizontal &&
            void 0 === t.alignmentHorizontalItems &&
            (t.alignmentHorizontalItems = _),
          (t.alignmentVerticalItems || t.alignmentHorizontalItems) &&
            void 0 === t.alignmentTitle &&
            (t.alignmentTitle = E),
          void 0 !== t.properties.orientation &&
            (void 0 === t.orientationItems && (t.orientationItems = m),
            void 0 === t.orientationTitle && (t.orientationTitle = j)),
          void 0 !== t.properties.borderWidth &&
            void 0 === t.borderWidthItems &&
            (t.borderWidthItems = h),
          t
        );
      }
      function S(e, n) {
        return Object(r.__assign)(
          { propType: 'twoColors', properties: e, noAlpha1: !1, noAlpha2: !1 },
          n,
        );
      }
      function I(e, n) {
        return Object(r.__assign)(
          { propType: 'coordinates', properties: e },
          n,
        );
      }
      function L(e, n) {
        return Object(r.__assign)({ propType: 'range', properties: e }, n);
      }
      function A(e, n) {
        return Object(r.__assign)(
          { propType: 'transparency', properties: e },
          n,
        );
      }
      function D(e, n) {
        return Object(r.__assign)({ propType: 'symbol', properties: e }, n);
      }
      function H(e, n) {
        return Object(r.__assign)({ propType: 'session', properties: e }, n);
      }
      var z = t('hY0g'),
        Y = t.n(z);
      function k(e, n, t) {
        return {
          id: n,
          title: t,
          groupType: 'general',
          definitions: new Y.a(e),
        };
      }
      function N(e, n, t) {
        return {
          id: n,
          title: t,
          groupType: 'leveledLines',
          definitions: new Y.a(e),
        };
      }
      function P(e, n) {
        var t = new Map(),
          r =
            void 0 !== n
              ? n[0]
              : function (e) {
                  return e;
                },
          i =
            void 0 !== n
              ? void 0 !== n[1]
                ? n[1]
                : n[0]
              : function (e) {
                  return e;
                },
          o = {
            value: function () {
              return r(e.value());
            },
            setValue: function (n) {
              e.setValue(i(n));
            },
            subscribe: function (n, r) {
              var i = function (e) {
                r(o);
              };
              t.set(r, i), e.subscribe(n, i);
            },
            unsubscribe: function (n, r) {
              var i = t.get(r);
              i && (e.unsubscribe(n, i), t.delete(r));
            },
            unsubscribeAll: function (n) {
              e.unsubscribeAll(n), t.clear();
            },
          };
        return o;
      }
      function M(e, n, t, r) {
        var i = P(n, r),
          o =
            void 0 !== r
              ? void 0 !== r[1]
                ? r[1]
                : r[0]
              : function (e) {
                  return e;
                };
        return (
          (i.setValue = function (r) {
            return e.setProperty(n, o(r), t);
          }),
          i
        );
      }
      function x(e, n, t, r) {
        var i = (function (e, n) {
            var t = new Map(),
              r =
                void 0 !== n
                  ? n[0]
                  : function (e) {
                      return e;
                    },
              i =
                void 0 !== n
                  ? void 0 !== n[1]
                    ? n[1]
                    : n[0]
                  : function (e) {
                      return e;
                    },
              o = {
                value: function () {
                  return r(e.value());
                },
                setValue: function (n) {
                  e.setValue(i(n));
                },
                subscribe: function (n, r) {
                  var i = function () {
                      r(o);
                    },
                    u = t.get(n);
                  void 0 === u
                    ? ((u = new Map()).set(r, i), t.set(n, u))
                    : u.set(r, i),
                    e.subscribe(i);
                },
                unsubscribe: function (n, r) {
                  var i = t.get(n);
                  if (void 0 !== i) {
                    var o = i.get(r);
                    void 0 !== o && (e.unsubscribe(o), i.delete(r));
                  }
                },
                unsubscribeAll: function (n) {
                  var r = t.get(n);
                  void 0 !== r &&
                    (r.forEach(function (n, t) {
                      e.unsubscribe(n);
                    }),
                    r.clear());
                },
              };
            return o;
          })(n, r),
          o =
            void 0 !== r
              ? void 0 !== r[1]
                ? r[1]
                : r[0]
              : function (e) {
                  return e;
                };
        return (
          (i.setValue = function (r) {
            return e.undoHistory().setWatchedValue(n, o(r), t);
          }),
          i
        );
      }
      function W(e, n) {
        var t = P(n);
        return (
          (t.setValue = function (n) {
            return e.setPriceScaleSelectionStrategy(n);
          }),
          t
        );
      }
      function C(e, n, t, r) {
        var i = P(n);
        return (
          (i.setValue = function (n) {
            var i = { lockScale: n };
            e.setPriceScaleMode(i, t, r);
          }),
          i
        );
      }
      function G(e, n, t, r) {
        var i = P(n, r);
        return (
          (i.setValue = function (r) {
            e.setScaleRatioProperty(n, r, t);
          }),
          i
        );
      }
      var J = t('eJTA'),
        R = t('Tmoa'),
        U = t('GOhO');
      function q(e, n) {
        if (Object(R.isHexColor)(e)) {
          var t = Object(J.parseRgb)(e);
          return Object(J.rgbaToString)(Object(J.rgba)(t, (100 - n) / 100));
        }
        return e;
      }
      function B(e, n, t, r) {
        var i;
        null !== t
          ? (i = (function (e) {
              var n = P(e);
              return (
                (n.destroy = function () {
                  e.destroy();
                }),
                n
              );
            })(Object(U.a)(q, n, t)))
          : (i = P(n, [
              function () {
                return q(n.value(), 0);
              },
              function (e) {
                return e;
              },
            ]));
        return (
          (i.setValue = function (t) {
            e.setProperty(n, t, r);
          }),
          i
        );
      }
      function F(e, n, t, r, i) {
        var o,
          u,
          c = M(e, n, i, [
            ((o = t),
            (u = n),
            function (e) {
              var n = o(u);
              if (e === u.value() && null !== n) {
                var t = n.ticker || n.full_name;
                if (t) return t;
              }
              return e;
            }),
            function (e) {
              return e;
            },
          ]),
          s = new Map();
        (c.subscribe = function (e, t) {
          var r = function (e) {
            t(c);
          };
          s.set(t, r), n.subscribe(e, r);
        }),
          (c.unsubscribe = function (e, t) {
            var r = s.get(t);
            r && (n.unsubscribe(e, r), s.delete(t));
          });
        var a = {};
        return (
          r.subscribe(a, function () {
            s.forEach(function (e, n) {
              e(c);
            });
          }),
          (c.destroy = function () {
            r.unsubscribeAll(a), s.clear();
          }),
          c
        );
      }
      function K(e) {
        return e.hasOwnProperty('groupType');
      }
      function Q(e) {
        e.forEach(function (e) {
          e.hasOwnProperty('propType')
            ? Object.keys(e.properties).forEach(function (n) {
                var t = e.properties[n];
                void 0 !== t && void 0 !== t.destroy && t.destroy();
              })
            : Q(e.definitions.value());
        });
      }
      t.d(n, 'z', function () {
        return K;
      }),
        t.d(n, 't', function () {
          return Q;
        }),
        t.d(n, 'c', function () {
          return i;
        }),
        t.d(n, 'd', function () {
          return o;
        }),
        t.d(n, 'e', function () {
          return u;
        }),
        t.d(n, 'h', function () {
          return f;
        }),
        t.d(n, 'g', function () {
          return b;
        }),
        t.d(n, 'i', function () {
          return g;
        }),
        t.d(n, 'j', function () {
          return y;
        }),
        t.d(n, 's', function () {
          return w;
        }),
        t.d(n, 'p', function () {
          return V;
        }),
        t.d(n, 'r', function () {
          return S;
        }),
        t.d(n, 'f', function () {
          return I;
        }),
        t.d(n, 'm', function () {
          return L;
        }),
        t.d(n, 'q', function () {
          return A;
        }),
        t.d(n, 'o', function () {
          return D;
        }),
        t.d(n, 'n', function () {
          return H;
        }),
        t.d(n, 'k', function () {
          return k;
        }),
        t.d(n, 'l', function () {
          return N;
        }),
        t.d(n, 'b', function () {
          return M;
        }),
        t.d(n, 'a', function () {
          return x;
        }),
        t.d(n, 'w', function () {
          return W;
        }),
        t.d(n, 'v', function () {
          return C;
        }),
        t.d(n, 'x', function () {
          return G;
        }),
        t.d(n, 'u', function () {
          return B;
        }),
        t.d(n, 'y', function () {
          return F;
        });
    },
  },
]);
