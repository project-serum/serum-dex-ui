(window.webpackJsonp = window.webpackJsonp || []).push([
  [24],
  {
    GOhO: function (e, t, n) {
      'use strict';
      var r = n('+DwS');
      n('tc+8');
      var i = n('m/cY');
      function o(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        for (
          var r = function () {
              return e.apply(
                void 0,
                t.map(function (e) {
                  return e.value();
                }),
              );
            },
            o = Object(i.a)(r()),
            u = function () {
              return o.setValue(r());
            },
            c = {},
            a = 0,
            s = t;
          a < s.length;
          a++
        ) {
          var p = s[a];
          p.subscribe(c, u);
        }
        return (
          (o.destroy = function () {
            t.forEach(function (e) {
              return e.unsubscribeAll(c);
            });
          }),
          o
        );
      }
      n.d(t, 'b', function () {
        return r.a;
      }),
        n.d(t, 'a', function () {
          return o;
        });
    },
    HSjo: function (e, t, n) {
      'use strict';
      var r = n('mrSG');
      function i(e, t) {
        return Object(r.a)({ propType: 'checkable', properties: e }, t);
      }
      function o(e, t, n) {
        return Object(r.a)(
          { propType: 'checkableSet', properties: e, childrenDefinitions: n },
          t,
        );
      }
      function u(e, t) {
        return Object(r.a)(
          { propType: 'color', properties: e, noAlpha: !1 },
          t,
        );
      }
      var c = n('a7Ha'),
        a = n('8Uy/'),
        s = [a.LINESTYLE_SOLID, a.LINESTYLE_DOTTED, a.LINESTYLE_DASHED],
        p = [1, 2, 3, 4],
        l = [c.LineEnd.Normal, c.LineEnd.Arrow];
      function d(e, t) {
        var n = Object(r.a)({ propType: 'line', properties: e }, t);
        return (
          void 0 !== n.properties.style && (n.styleValues = s),
          void 0 !== n.properties.width && (n.widthValues = p),
          (void 0 === n.properties.leftEnd &&
            void 0 === n.properties.rightEnd) ||
            void 0 !== n.endsValues ||
            (n.endsValues = l),
          void 0 !== n.properties.value &&
            void 0 === n.valueType &&
            (n.valueType = 1),
          n
        );
      }
      var f = [a.LINESTYLE_SOLID, a.LINESTYLE_DOTTED, a.LINESTYLE_DASHED],
        v = [1, 2, 3, 4];
      function b(e, t) {
        var n = Object(r.a)({ propType: 'leveledLine', properties: e }, t);
        return (
          void 0 !== n.properties.style && (n.styleValues = f),
          void 0 !== n.properties.width && (n.widthValues = v),
          n
        );
      }
      function y(e, t) {
        return Object(r.a)({ propType: 'number', properties: e, type: 1 }, t);
      }
      function w(e, t) {
        return Object(r.a)({ propType: 'options', properties: e }, t);
      }
      function T(e, t) {
        return Object(r.a)({ propType: 'twoOptions', properties: e }, t);
      }
      n('YFKU');
      var g = [
          { value: 'bottom', title: window.t('Top') },
          { value: 'middle', title: window.t('Middle') },
          { value: 'top', title: window.t('Bottom') },
        ],
        m = [
          { value: 'left', title: window.t('Left') },
          { value: 'center', title: window.t('Center') },
          { value: 'right', title: window.t('Right') },
        ],
        O = [
          { value: 'horizontal', title: window.t('Horizontal') },
          { value: 'vertical', title: window.t('Vertical') },
        ],
        h = [10, 11, 12, 14, 16, 20, 24, 28, 32, 40].map(function (e) {
          return { title: String(e), value: e };
        }),
        E = [1, 2, 3, 4],
        j = window.t('Text alignment'),
        V = window.t('Text orientation');
      function S(e, t) {
        var n = Object(r.a)(
          Object(r.a)({ propType: 'text', properties: e }, t),
          { isEditable: t.isEditable || !1 },
        );
        return (
          void 0 !== n.properties.size &&
            void 0 === n.sizeItems &&
            (n.sizeItems = h),
          void 0 !== n.properties.alignmentVertical &&
            void 0 === n.alignmentVerticalItems &&
            (n.alignmentVerticalItems = g),
          void 0 !== n.properties.alignmentHorizontal &&
            void 0 === n.alignmentHorizontalItems &&
            (n.alignmentHorizontalItems = m),
          (n.alignmentVerticalItems || n.alignmentHorizontalItems) &&
            void 0 === n.alignmentTitle &&
            (n.alignmentTitle = j),
          void 0 !== n.properties.orientation &&
            (void 0 === n.orientationItems && (n.orientationItems = O),
            void 0 === n.orientationTitle && (n.orientationTitle = V)),
          void 0 !== n.properties.borderWidth &&
            void 0 === n.borderWidthItems &&
            (n.borderWidthItems = E),
          n
        );
      }
      function I(e, t) {
        return Object(r.a)(
          { propType: 'twoColors', properties: e, noAlpha1: !1, noAlpha2: !1 },
          t,
        );
      }
      function L(e, t) {
        return Object(r.a)({ propType: 'coordinates', properties: e }, t);
      }
      function A(e, t) {
        return Object(r.a)({ propType: 'range', properties: e }, t);
      }
      function D(e, t) {
        return Object(r.a)({ propType: 'transparency', properties: e }, t);
      }
      function H(e, t) {
        return Object(r.a)({ propType: 'symbol', properties: e }, t);
      }
      function z(e, t) {
        return Object(r.a)({ propType: 'session', properties: e }, t);
      }
      var Y = n('hY0g'),
        k = n.n(Y);
      function M(e, t, n) {
        return {
          id: t,
          title: n,
          groupType: 'general',
          definitions: new k.a(e),
        };
      }
      function N(e, t, n) {
        return {
          id: t,
          title: n,
          groupType: 'leveledLines',
          definitions: new k.a(e),
        };
      }
      function P(e, t) {
        var n = new Map(),
          r =
            void 0 !== t
              ? t[0]
              : function (e) {
                  return e;
                },
          i =
            void 0 !== t
              ? void 0 !== t[1]
                ? t[1]
                : t[0]
              : function (e) {
                  return e;
                },
          o = {
            value: function () {
              return r(e.value());
            },
            setValue: function (t) {
              e.setValue(i(t));
            },
            subscribe: function (t, r) {
              var i = function (e) {
                r(o);
              };
              n.set(r, i), e.subscribe(t, i);
            },
            unsubscribe: function (t, r) {
              var i = n.get(r);
              i && (e.unsubscribe(t, i), n.delete(r));
            },
            unsubscribeAll: function (t) {
              e.unsubscribeAll(t), n.clear();
            },
          };
        return o;
      }
      function _(e, t, n, r) {
        var i = P(t, r),
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
            return e.setProperty(t, o(r), n);
          }),
          i
        );
      }
      function x(e, t, n, r) {
        var i = (function (e, t) {
            var n = new Map(),
              r =
                void 0 !== t
                  ? t[0]
                  : function (e) {
                      return e;
                    },
              i =
                void 0 !== t
                  ? void 0 !== t[1]
                    ? t[1]
                    : t[0]
                  : function (e) {
                      return e;
                    },
              o = {
                value: function () {
                  return r(e.value());
                },
                setValue: function (t) {
                  e.setValue(i(t));
                },
                subscribe: function (t, r) {
                  var i = function () {
                      r(o);
                    },
                    u = n.get(t);
                  void 0 === u
                    ? ((u = new Map()).set(r, i), n.set(t, u))
                    : u.set(r, i),
                    e.subscribe(i);
                },
                unsubscribe: function (t, r) {
                  var i = n.get(t);
                  if (void 0 !== i) {
                    var o = i.get(r);
                    void 0 !== o && (e.unsubscribe(o), i.delete(r));
                  }
                },
                unsubscribeAll: function (t) {
                  var r = n.get(t);
                  void 0 !== r &&
                    (r.forEach(function (t, n) {
                      e.unsubscribe(t);
                    }),
                    r.clear());
                },
              };
            return o;
          })(t, r),
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
            return e.undoHistory().setWatchedValue(t, o(r), n);
          }),
          i
        );
      }
      function U(e, t) {
        var n = P(t);
        return (
          (n.setValue = function (t) {
            return e.setPriceScaleSelectionStrategy(t);
          }),
          n
        );
      }
      function W(e, t, n, r) {
        var i = P(t);
        return (
          (i.setValue = function (t) {
            var i = { lockScale: t };
            e.setPriceScaleMode(i, n, r);
          }),
          i
        );
      }
      function C(e, t, n, r) {
        var i = P(t, r);
        return (
          (i.setValue = function (r) {
            e.setScaleRatioProperty(t, r, n);
          }),
          i
        );
      }
      var G = n('eJTA'),
        J = n('Tmoa'),
        R = n('GOhO');
      function q(e, t) {
        if (Object(J.isHexColor)(e)) {
          var n = Object(G.parseRgb)(e);
          return Object(G.rgbaToString)(Object(G.rgba)(n, (100 - t) / 100));
        }
        return e;
      }
      function B(e, t, n, r, i) {
        var o;
        null !== n
          ? (o = (function (e) {
              var t = P(e);
              return (
                (t.destroy = function () {
                  e.destroy();
                }),
                t
              );
            })(Object(R.a)(q, t, n)))
          : (o = P(t, [
              function () {
                return q(t.value(), 0);
              },
              function (e) {
                return e;
              },
            ]));
        return (
          (o.setValue = function (n) {
            i && e.beginUndoMacro(r),
              e.setProperty(t, n, r),
              i && e.endUndoMacro();
          }),
          o
        );
      }
      function F(e, t, n, r, i, o) {
        var u,
          c,
          a = [
            ((u = n),
            (c = t),
            function (e) {
              var t = u(c);
              if (e === c.value() && null !== t) {
                var n = t.ticker || t.full_name;
                if (n) return n;
              }
              return e;
            }),
            function (e) {
              return e;
            },
          ],
          s = _(e, t, i, a);
        o && (s.setValue = o);
        var p = new Map();
        (s.subscribe = function (e, n) {
          var r = function (e) {
            n(s);
          };
          p.set(n, r), t.subscribe(e, r);
        }),
          (s.unsubscribe = function (e, n) {
            var r = p.get(n);
            r && (t.unsubscribe(e, r), p.delete(n));
          });
        var l = {};
        return (
          r.subscribe(l, function () {
            p.forEach(function (e, t) {
              e(s);
            });
          }),
          (s.destroy = function () {
            r.unsubscribeAll(l), p.clear();
          }),
          s
        );
      }
      function K(e) {
        return e.hasOwnProperty('groupType');
      }
      function Q(e) {
        e.forEach(function (e) {
          e.hasOwnProperty('propType')
            ? Object.keys(e.properties).forEach(function (t) {
                var n = e.properties[t];
                void 0 !== n && void 0 !== n.destroy && n.destroy();
              })
            : Q(e.definitions.value());
        });
      }
      n.d(t, 'z', function () {
        return K;
      }),
        n.d(t, 't', function () {
          return Q;
        }),
        n.d(t, 'c', function () {
          return i;
        }),
        n.d(t, 'd', function () {
          return o;
        }),
        n.d(t, 'e', function () {
          return u;
        }),
        n.d(t, 'h', function () {
          return d;
        }),
        n.d(t, 'g', function () {
          return b;
        }),
        n.d(t, 'i', function () {
          return y;
        }),
        n.d(t, 'j', function () {
          return w;
        }),
        n.d(t, 's', function () {
          return T;
        }),
        n.d(t, 'p', function () {
          return S;
        }),
        n.d(t, 'r', function () {
          return I;
        }),
        n.d(t, 'f', function () {
          return L;
        }),
        n.d(t, 'm', function () {
          return A;
        }),
        n.d(t, 'q', function () {
          return D;
        }),
        n.d(t, 'o', function () {
          return H;
        }),
        n.d(t, 'n', function () {
          return z;
        }),
        n.d(t, 'k', function () {
          return M;
        }),
        n.d(t, 'l', function () {
          return N;
        }),
        n.d(t, 'b', function () {
          return _;
        }),
        n.d(t, 'a', function () {
          return x;
        }),
        n.d(t, 'w', function () {
          return U;
        }),
        n.d(t, 'v', function () {
          return W;
        }),
        n.d(t, 'x', function () {
          return C;
        }),
        n.d(t, 'u', function () {
          return B;
        }),
        n.d(t, 'y', function () {
          return F;
        });
    },
  },
]);
