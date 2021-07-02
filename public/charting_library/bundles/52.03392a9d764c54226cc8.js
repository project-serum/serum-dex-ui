(window.webpackJsonp = window.webpackJsonp || []).push([
  [52],
  {
    '+8gn': function (e, t, n) {
      'use strict';
      n.d(t, 'b', function () {
        return s;
      }),
        n.d(t, 'a', function () {
          return c;
        });
      var r = n('mrSG'),
        o = n('q1tI'),
        a = n('Eyy1'),
        u = n('txPx'),
        i = Object(u.getLogger)('Platform.GUI.StudyInputPropertyContainer'),
        s = o.createContext(null),
        c = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            n._setValue = function (e, t, r) {
              var o = n.props,
                u = o.property,
                s = o.model,
                c = Object(a.ensureDefined)(u.child(e));
              i.logNormal(
                'Changing property "' +
                  e +
                  '" value from "' +
                  u.value() +
                  '" to "' +
                  t +
                  '"',
              ),
                s.setProperty(c, t, 'Change ' + r);
            };
            var r = t.property,
              o = {};
            return (
              r.childNames().forEach(function (e) {
                var t = Object(a.ensureDefined)(r.child(e));
                o.hasOwnProperty(e) || (o[e] = t.value());
              }),
              (n.state = o),
              n
            );
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this,
                t = this.props.property;
              t.childNames().forEach(function (n) {
                Object(a.ensureDefined)(t.child(n)).subscribe(e, function (t) {
                  var r,
                    o = t.value();
                  i.logNormal(
                    'Property "' + n + '" updated to value "' + o + '"',
                  ),
                    e.setState((((r = {})[n] = o), r));
                });
              });
            }),
            (t.prototype.componentWillUnmount = function () {
              var e = this,
                t = this.props.property;
              t.childNames().forEach(function (n) {
                Object(a.ensureDefined)(t.child(n)).unsubscribeAll(e);
              });
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.study,
                n = e.model,
                r = e.children,
                a = {
                  study: t,
                  model: n,
                  values: this.state,
                  setValue: this._setValue,
                };
              return o.createElement(s.Provider, { value: a }, r);
            }),
            t
          );
        })(o.PureComponent);
    },
    '5Ssy': function (e, t, n) {
      'use strict';
      var r,
        o = n('mrSG'),
        a = n('YFKU'),
        u = n('q1tI'),
        i = n.n(u),
        s = n('+8gn'),
        c = n('rJEJ'),
        l = n('h5Dg'),
        p = n('Q+1u'),
        d = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.label,
                n = e.input;
              return u.createElement(
                p.a.Row,
                null,
                u.createElement(
                  p.a.Cell,
                  { placement: 'first', colSpan: 2 },
                  u.createElement(l.a, { label: t, input: n }),
                ),
              );
            }),
            t
          );
        })(u.PureComponent),
        f = n('0W35'),
        h = n('TSYQ'),
        m = n('b8Mn');
      n('GZ2k');
      const v = Object(f.b)(
        (((r = class extends u.PureComponent {
          constructor() {
            super(...arguments),
              (this._onChange = () => {
                this.props.onChange && this.props.onChange(this.props.value);
              });
          }
          render() {
            const e = h(this.props.className, m.radio, {
                [m.reverse]: Boolean(this.props.labelPositionReverse),
              }),
              t = h(m.label, { [m.disabled]: this.props.disabled }),
              n = h(m.box, { [m.noOutline]: -1 === this.props.tabIndex });
            let r = null;
            return (
              this.props.label &&
                (r = u.createElement(
                  'span',
                  { className: t },
                  this.props.label,
                )),
              u.createElement(
                'label',
                { className: e },
                u.createElement(
                  'span',
                  { className: m.wrapper, title: this.props.title },
                  u.createElement('input', {
                    id: this.props.id,
                    tabIndex: this.props.tabIndex,
                    autoFocus: this.props.autoFocus,
                    role: this.props.role,
                    className: m.input,
                    type: 'radio',
                    name: this.props.name,
                    checked: this.props.checked,
                    disabled: this.props.disabled,
                    value: this.props.value,
                    onChange: this._onChange,
                    ref: this.props.reference,
                  }),
                  u.createElement('span', { className: n }),
                ),
                r,
              )
            );
          }
        }).defaultProps = { value: 'on' }),
        r),
      );
      var b = n('Eyy1'),
        y = n('fV01'),
        g = n('HfwS'),
        O = n('tDS2');
      function C(e) {
        var t = e.children,
          n = e.input,
          r = e.disabled,
          c = e.onChange,
          l = e.grouped,
          d = Object(u.useContext)(s.b),
          h = Object(b.ensureNotNull)(d),
          m = h.values,
          y = h.setValue,
          C = m[n.id],
          S = Object(u.useState)(C ? 'another-symbol' : 'main-symbol'),
          _ = S[0],
          E = S[1],
          w = Object(u.useRef)(null);
        return i.a.createElement(
          f.a,
          {
            name: 'symbol-source-' + n.id,
            values: [_],
            onChange: function (e) {
              E(e),
                'main-symbol' === e
                  ? Object(g.b)(y)('', n.id, n.name)
                  : Object(b.ensureNotNull)(w.current).updateSymbol();
            },
          },
          i.a.createElement(
            p.a.Row,
            null,
            i.a.createElement(
              p.a.Cell,
              { colSpan: 2, placement: 'first', grouped: l },
              i.a.createElement(v, {
                value: 'main-symbol',
                className: O.checkbox,
                disabled: r,
                label: i.a.createElement(
                  'span',
                  { className: O.label },
                  Object(a.t)('Main chart symbol', { context: 'input' }),
                ),
              }),
            ),
          ),
          i.a.createElement(
            p.a.Row,
            null,
            i.a.createElement(
              p.a.Cell,
              { placement: 'first', grouped: l },
              i.a.createElement(v, {
                value: 'another-symbol',
                className: O.checkbox,
                disabled: r,
                label: i.a.createElement(
                  'span',
                  { className: O.label },
                  Object(a.t)('Another symbol', { context: 'input' }),
                ),
              }),
            ),
            i.a.createElement(
              p.a.Cell,
              { placement: 'last', grouped: l },
              t ||
                i.a.createElement(
                  j,
                  Object(o.a)(
                    {},
                    { reference: w },
                    {
                      input: Object(b.ensureDefined)(n),
                      onChange: c,
                      disabled: r || 'main-symbol' === _,
                      autofocus: 'another-symbol' === _,
                    },
                  ),
                ),
            ),
          ),
        );
      }
      var j = Object(g.a)(function (e) {
        var t = Object(u.useContext)(s.b),
          n = Object(b.ensureNotNull)(t).study,
          r = e.value,
          a = void 0 === r ? '' : r,
          c = e.reference;
        return i.a.createElement(
          y.b,
          Object(o.a)({}, e, {
            allowEmpty: !0,
            value: Object(y.c)(a, n),
            study: n,
            ref: c,
          }),
        );
      });
      n.d(t, 'a', function () {
        return _;
      });
      var S = { offset: window.t('Offset') },
        _ = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.reference,
                r = t.inputs,
                o = t.property,
                a = t.study,
                i = t.model,
                s = o.offset,
                c = o.offsets;
              return u.createElement(
                p.a,
                { reference: n },
                u.createElement(E, {
                  study: a,
                  model: i,
                  property: o.inputs,
                  inputs: r,
                }),
                s && this._createOffsetSection(s),
                c &&
                  c.childNames().map(function (t) {
                    var n = c.childs()[t];
                    return e._createOffsetSection(n);
                  }),
              );
            }),
            (t.prototype._createOffsetSection = function (e) {
              var t = e.childs();
              return u.createElement(E, {
                key: 'offset_' + t.title.value(),
                study: this.props.study,
                model: this.props.model,
                inputs: [w(t)],
                property: e,
              });
            }),
            t
          );
        })(u.PureComponent);
      function E(e) {
        var t = e.study,
          n = e.model,
          r = e.inputs,
          o = e.property;
        return u.createElement(
          s.a,
          { property: o, study: t, model: n },
          r.map(function (e) {
            return 'symbol' === e.type && e.optional
              ? u.createElement(C, { key: e.id, input: e })
              : 'bool' === e.type
              ? u.createElement(d, {
                  key: e.id,
                  label: window.t(e.name, { context: 'input' }),
                  input: e,
                })
              : u.createElement(c.a, {
                  labelAlign: 'session' === e.type ? 'adaptive' : void 0,
                  key: e.id,
                  input: e,
                });
          }),
        );
      }
      function w(e) {
        return {
          id: 'val',
          name: e.title.value() || S.offset,
          defval: e.val.value(),
          type: 'integer',
          min: e.min.value(),
          max: e.max.value(),
        };
      }
    },
    '5YG5': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      });
      n('CW80');
      var r = n('3ClC');
      function o(e) {
        if (Object(r.isStudy)(e)) return e;
        if ('isInputsStudy' in e) return e;
        throw new TypeError('Unsupported source type.');
      }
    },
    '9XXR': function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'splitThousands', function () {
          return o;
        });
      var r = n('ivNn');
      function o(e, t) {
        void 0 === t && (t = '&nbsp;');
        var n = e + '';
        -1 !== n.indexOf('e') &&
          (n = (function (e) {
            return Object(r.fixComputationError)(e)
              .toFixed(10)
              .replace(/\.?0+$/, '');
          })(Number(e)));
        var o = n.split('.');
        return (
          o[0].replace(/\B(?=(\d{3})+(?!\d))/g, t) + (o[1] ? '.' + o[1] : '')
        );
      }
    },
    GZ2k: function (e, t, n) {},
    HGyE: function (e, t, n) {
      'use strict';
      n.d(t, 'b', function () {
        return s;
      }),
        n.d(t, 'a', function () {
          return c;
        });
      var r = n('mrSG'),
        o = n('q1tI'),
        a = n('H172'),
        u = n('HfwS'),
        i = n('tDS2'),
        s = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._onChange = function (e) {
                var n = t.props,
                  r = n.input,
                  o = r.id,
                  a = r.name;
                (0, n.onChange)(e, o, a);
              }),
              t
            );
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.input,
                n = t.defval,
                r = t.options,
                u = t.optionsTitles,
                s = e.value,
                c = e.disabled,
                l = r.map(function (e) {
                  var t = u && u[e] ? u[e] : e;
                  return {
                    value: e,
                    content: window.t(t, { context: 'input' }),
                  };
                }),
                p = void 0 !== s && r.includes(s) ? s : n;
              return o.createElement(a.a, {
                className: i.input,
                menuClassName: i.dropdownMenu,
                value: p,
                items: l,
                onChange: this._onChange,
                disabled: c,
              });
            }),
            t
          );
        })(o.PureComponent),
        c = Object(u.a)(s);
    },
    HfwS: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return u;
      }),
        n.d(t, 'b', function () {
          return i;
        });
      var r = n('mrSG'),
        o = n('q1tI'),
        a = n('+8gn');
      function u(e) {
        var t;
        return (
          ((t = (function (t) {
            function n() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e._getTimezoneName = function (e) {
                  var t = e.model().timezone();
                  if ('exchange' !== t) return t;
                  var n = e.model().mainSeries().symbolInfo();
                  return null == n ? void 0 : n.timezone;
                }),
                (e._onChange = function (t, n, r) {
                  i(e.context.setValue, e.props.onChange)(t, n, r);
                }),
                e
              );
            }
            return (
              Object(r.c)(n, t),
              (n.prototype.render = function () {
                var t = this.props.input,
                  n = this.context,
                  a = n.values,
                  u = n.model;
                return o.createElement(
                  e,
                  Object(r.a)({}, this.props, {
                    value: a[t.id],
                    tzName: this._getTimezoneName(u),
                    onChange: this._onChange,
                  }),
                );
              }),
              n
            );
          })(o.PureComponent)).contextType = a.b),
          t
        );
      }
      function i(e, t) {
        return function (n, r, o) {
          e(r, n, o), t && t(n, r, o);
        };
      }
    },
    KJt4: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return a;
      }),
        n.d(t, 'b', function () {
          return u;
        });
      var r = n('mrSG'),
        o = n('q1tI'),
        a = o.createContext(null);
      function u(e, t) {
        return o.createElement(a.Consumer, null, function (n) {
          return n
            ? o.createElement(
                e,
                Object(r.a)({}, Object.assign({ model: n }, t)),
              )
            : null;
        });
      }
    },
    OL6p: function (e, t, n) {
      e.exports = { icon: 'icon-1NLCncqj' };
    },
    PjdP: function (e, t, n) {
      'use strict';
      var r = n('mrSG'),
        o = n('q1tI'),
        a = n.n(o),
        u = n('kk0y'),
        i = n('YS4w'),
        s = n('h5Dg'),
        c = n('3G1X'),
        l = n('HfwS'),
        p = n('Yi2Q'),
        d = n('tDS2'),
        f = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._onChange = function (e) {
                var n = t.props,
                  r = n.input,
                  o = r.id,
                  a = r.name;
                (0, n.onChange)(e.currentTarget.value, o, a);
              }),
              t
            );
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.input.defval,
                n = e.value,
                r = e.disabled,
                a = e.onBlur,
                u = e.onKeyDown;
              return o.createElement(c.b, {
                className: d.input,
                value: void 0 === n ? t : n,
                onChange: this._onChange,
                onBlur: a,
                onKeyDown: u,
                disabled: r,
              });
            }),
            t
          );
        })(o.PureComponent),
        h = Object(p.a)(f),
        m = Object(l.a)(h),
        v = n('fV01'),
        b = n('TSYQ'),
        y = n.n(b),
        g = n('Eyy1'),
        O = n('XDrA'),
        C = n('qFKp'),
        j = n('v4Hi'),
        S = n('Iivm'),
        _ = n('OL6p'),
        E = n('yd0C');
      function w(e) {
        return o.createElement(S.a, {
          className: _.icon,
          icon: E,
        });
      }
      var N = n('Oi2w'),
        x = n('wnq4');
      var k,
        P = n('8Rai'),
        I = n('Hr11'),
        T =
          (((k = {})[0] = { pattern: /\d/ }),
          (k[9] = { pattern: /\d/, optional: !0 }),
          (k['#'] = { pattern: /\d/, recursive: !0 }),
          (k.A = { pattern: /[a-zA-Z0-9]/ }),
          (k.S = { pattern: /[a-zA-Z]/ }),
          k);
      function V(e, t, n) {
        for (
          var r,
            o = [],
            a = n,
            u = 0,
            i = 0,
            s = e.length,
            c = a.length,
            l = -1,
            p = 0,
            d = [],
            f = s - 1,
            h = [];
          u < s && i < c;

        ) {
          var m = e.charAt(u),
            v = a.charAt(i),
            b = T[m];
          b
            ? (v.match(b.pattern)
                ? (o.push(v),
                  b.recursive &&
                    (-1 === l ? (l = u) : u === f && u !== l && (u = l - 1),
                    f === l && (u -= 1)),
                  (u += 1))
                : v === r
                ? (p--, (r = void 0))
                : b.optional
                ? ((u += 1), (i -= 1))
                : b.fallback
                ? (o.push(b.fallback), (u += 1), (i -= 1))
                : h.push({ p: i, v, e: b.pattern }),
              (i += 1))
            : (t || o.push(m),
              v === m ? (d.push(i), (i += 1)) : ((r = m), d.push(i + p), p++),
              (u += 1));
        }
        var y = e.charAt(f);
        s !== c + 1 || T[y] || o.push(y);
        var g = o.join('');
        return [
          g,
          (function (e, t) {
            for (var n = {}, r = 0; r < t.length; r++) n[t[r] + 0] = 1;
            return n;
          })(0, d),
          h,
        ];
      }
      function D(e, t, n) {
        var r = (function (e) {
            for (var t = !0, n = 0; n < e.length; n++) {
              var r = T[e.charAt(n)];
              if (r && r.recursive) {
                t = !1;
                break;
              }
            }
            return t ? e.length : void 0;
          })(e),
          a = V(e, !1, t),
          u = a[0],
          i = a[1],
          s = Object(o.useState)(u),
          c = s[0],
          l = s[1],
          p = Object(o.useState)(0),
          d = p[0],
          f = p[1],
          h = Object(o.useState)(!1),
          m = h[0],
          v = h[1],
          b = Object(o.useRef)(i),
          y = Object(o.useRef)(c);
        return (
          Object(o.useEffect)(
            function () {
              var n = V(e, !1, t),
                r = n[0],
                o = n[1];
              l(r), O(o);
            },
            [t, e],
          ),
          Object(o.useLayoutEffect)(
            function () {
              var e = Object(g.ensureNotNull)(n.current);
              m && (e.setSelectionRange(d, d), v(!1)), f(R(e));
            },
            [m],
          ),
          [
            t,
            y,
            {
              onChange: function () {
                var t = Object(g.ensureNotNull)(n.current),
                  r = t.value,
                  o = V(e, !1, r),
                  a = o[0],
                  u = o[1];
                l(a), (y.current = a);
                var i = O(u),
                  s = (function (e, t, n, r, o, a) {
                    if (e !== t) {
                      var u = t.length,
                        i = e.length,
                        s = 0,
                        c = 0,
                        l = 0,
                        p = 0,
                        d = 0;
                      for (d = r; d < u && o[d]; d++) c++;
                      for (d = r - 1; d >= 0 && o[d]; d--) s++;
                      for (d = r - 1; d >= 0; d--) o[d] && l++;
                      for (d = n - 1; d >= 0; d--) a[d] && p++;
                      if (r > i) r = 10 * u;
                      else if (n >= r && n !== i) {
                        if (a[r]) {
                          var f = r;
                          (r -= p - l), o[(r -= s)] && (r = f);
                        }
                      } else r > n && ((r += l - p), (r += c));
                    }
                    return r;
                  })(c, a, d, R(t), u, i);
                f(s), v(!0);
              },
              onSelect: function () {
                var e = Object(g.ensureNotNull)(n.current);
                f(R(e));
              },
              maxLength: r,
            },
          ]
        );
        function O(e) {
          var t = b.current;
          return (b.current = e), t;
        }
      }
      function R(e) {
        return e.selectionStart || 0;
      }
      function B(e) {
        var t = e.value,
          n = e.mask,
          u = e.onChange,
          i = Object(r.e)(e, ['value', 'mask', 'onChange']),
          s = Object(o.useRef)(null),
          l = D(n, t, s),
          p = l[0],
          d = l[1],
          f = l[2];
        return (
          Object(o.useLayoutEffect)(
            function () {
              void 0 !== e.reference && (e.reference.current = s.current);
            },
            [e.reference],
          ),
          a.a.createElement(
            c.b,
            Object(r.a)({}, i, {
              maxLength: f.maxLength,
              value: p,
              autoComplete: 'off',
              reference: function (e) {
                s.current = e;
              },
              onChange: function () {
                f.onChange(), u(d.current);
              },
              onSelect: f.onSelect,
            }),
          )
        );
      }
      var F = n('/3z9'),
        M = n('9dlw'),
        H = n('N5tr'),
        G = n('Y7w9'),
        K = (function () {
          for (var e = [], t = 0; t < 24; ++t)
            for (var n = 0; n < 60; n += 15) {
              var r = [L(t.toString()), L(n.toString())],
                o = r[0] + ':' + r[1],
                a = U(o) ? o : Y(o);
              e.push(a);
            }
          return e;
        })();
      function A(e) {
        var t = !1,
          n = Object(o.useRef)(null),
          u = Object(o.useRef)(null),
          i = Object(o.useRef)(null),
          s = Object(o.useRef)(null),
          c = Object(N.a)(),
          l = c[0],
          p = c[1],
          d = Object(o.useState)(e.value),
          f = d[0],
          h = d[1],
          m = q(f),
          v = U(m) ? m : Y(m),
          b = Object(o.useState)(v),
          O = b[0],
          S = b[1],
          _ =
            l ||
            L().some(function (e) {
              return null !== e && e.contains(document.activeElement);
            });
        Object(o.useLayoutEffect)(
          function () {
            return h(e.value);
          },
          [e.value],
        ),
          Object(o.useLayoutEffect)(
            function () {
              return S(v);
            },
            [f, _],
          ),
          Object(o.useEffect)(
            function () {
              return W(O === v ? 'auto' : 'smooth');
            },
            [O],
          );
        var E = Object(G.lowerbound)(K, v, function (e, t) {
            return e < t;
          }),
          x = K;
        K[E] !== v && (x = Object(r.f)(K)).splice(E, 0, v);
        var k = Object(P.a)({
          mouseDown: !0,
          touchStart: !0,
          handler: function (e) {
            null !== u.current &&
              _ &&
              e.target instanceof Node &&
              null !== i.current &&
              !i.current.contains(e.target) &&
              u.current.blur();
          },
        });
        return a.a.createElement(
          'div',
          {
            className: y()(e.className),
            onKeyDown: function (e) {
              if (e.defaultPrevented) return;
              var t = Object(F.hashFromEvent)(e.nativeEvent);
              if (38 === t) {
                e.preventDefault();
                var n = (x.indexOf(O) + x.length - 1) % x.length;
                S(x[n]);
              }
              if (40 === t) {
                e.preventDefault();
                n = (x.indexOf(O) + x.length + 1) % x.length;
                S(x[n]);
              }
            },
            onFocus: function (e) {
              R(e) || p.onFocus(e);
            },
            onBlur: function (e) {
              R(e) || p.onBlur(e);
            },
            ref: k,
          },
          a.a.createElement(B, {
            name: e.name,
            endSlot: a.a.createElement(
              j.b,
              { icon: !0 },
              a.a.createElement(w, null),
            ),
            reference: u,
            containerReference: n,
            mask: '09:00',
            value: f,
            onFocus: function (e) {
              setTimeout(z, 0);
            },
            onBlur: function (e) {
              R(e) || T(f);
            },
            onChange: function (t) {
              h(t), e.onInput && e.onInput(t);
            },
            onKeyDown: function (e) {
              if (e.defaultPrevented) return;
              var t = Object(F.hashFromEvent)(e.nativeEvent);
              13 === t &&
                (e.preventDefault(),
                T(O),
                Object(g.ensureNotNull)(u.current).blur());
              27 === t &&
                (e.preventDefault(), Object(g.ensureNotNull)(u.current).blur());
            },
          }),
          a.a.createElement(
            M.a,
            {
              onOpen: function () {
                W();
              },
              onClose: function () {},
              position: function () {
                var e = Object(g.ensureNotNull)(
                    n.current,
                  ).getBoundingClientRect(),
                  t = window.innerHeight - e.bottom,
                  r = e.top,
                  o = 231,
                  a = e.bottom;
                if (o > r && o > t) {
                  var u = Object(I.clamp)(o, 0, r),
                    i = Object(I.clamp)(o, 0, t);
                  (o = Math.max(u, i)), (a = u > i ? e.top - u : e.bottom);
                } else o > t && (a = e.top - o);
                return {
                  x: e.left,
                  y: a,
                  overrideWidth: e.width,
                  overrideHeight: o,
                };
              },
              closeOnClickOutside: !1,
              isOpened: _,
              tabIndex: -1,
              reference: i,
            },
            x.map(function (e) {
              return a.a.createElement(H.b, {
                key: e,
                label: e,
                isActive: e === v,
                isHovered: e === O,
                reference: e === O ? V : void 0,
                onClick: D,
                onClickArg: e,
              });
            }),
          ),
        );
        function T(n) {
          var r = q(n),
            o = U(r) ? r : Y(r);
          h(o), t || ((t = !0), e.onChange(o));
        }
        function V(e) {
          s.current = e;
        }
        function D(e) {
          if ((T(Object(g.ensureDefined)(e)), C.isIE)) {
            var t = window.document.activeElement;
            t instanceof Node && HTMLElement.prototype.blur.call(t);
          } else Object(g.ensureNotNull)(i.current).blur();
        }
        function R(e) {
          return (
            l &&
            (null !== A(document.activeElement) || null !== A(e.relatedTarget))
          );
        }
        function A(e) {
          return (
            (e instanceof Node &&
              L().find(function (t) {
                return null !== t && t.contains(e);
              })) ||
            null
          );
        }
        function L() {
          return [i.current, u.current];
        }
        function W(e) {
          if ((void 0 === e && (e = 'auto'), null !== s.current)) {
            var t = Object(g.ensureNotNull)(i.current).getBoundingClientRect(),
              n = s.current.getBoundingClientRect();
            (t.top > n.top || t.bottom < n.bottom) &&
              s.current.scrollIntoView({ behavior: e });
          }
        }
        function z() {
          var e = u.current;
          if (null !== e) {
            var t = e.value || '';
            e.setSelectionRange(0, t.length);
          }
        }
      }
      function q(e) {
        var t = e.split(':'),
          n = t[0],
          r = void 0 === n ? '' : n,
          o = t[1],
          a = void 0 === o ? '' : o,
          u = [L(r), W(a)];
        return u[0] + ':' + u[1];
      }
      function U(e) {
        return /^(0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/g.test(e);
      }
      function Y(e) {
        var t = e.split(':'),
          n = t[0],
          r = t[1],
          o = [
            Object(I.clamp)(parseInt(n), 0, 23),
            Object(I.clamp)(parseInt(r), 0, 59),
          ],
          a = o[1],
          u = [L(o[0].toString()), W(a.toString())];
        return u[0] + ':' + u[1];
      }
      function L(e) {
        return e.slice(0, 2).padStart(2, '0');
      }
      function W(e) {
        return e.slice(0, 2).padEnd(2, '0');
      }
      var z = C.CheckMobile.any()
        ? function (e) {
            var t = e.onChange,
              n = e.onFocus,
              u = e.value,
              i = e.className,
              s = Object(r.e)(e, ['onChange', 'onFocus', 'value', 'className']),
              l = Object(o.useRef)(null),
              p = Object(N.a)(),
              d = p[0],
              f = p[1];
            return a.a.createElement(
              'div',
              { className: y()(x.wrap, i) },
              a.a.createElement(
                c.b,
                Object(r.a)({}, s, {
                  type: 'text',
                  endSlot: a.a.createElement(
                    j.b,
                    { icon: !0 },
                    a.a.createElement(w, null),
                  ),
                  value: u,
                  highlight: d,
                  intent: d ? 'primary' : void 0,
                  onFocus: function (e) {
                    Object(g.ensureNotNull)(l.current).focus(), n && n(e);
                  },
                  onChange: function () {},
                }),
              ),
              a.a.createElement(
                'input',
                Object(r.a)({}, f, {
                  className: x.input,
                  type: 'time',
                  onChange: function (e) {
                    t && t(e.currentTarget.value);
                  },
                  value: u,
                  ref: l,
                }),
              ),
            );
          }
        : A;
      function X(e) {
        void 0 === e && (e = '');
        var t = Array.from(e.match(/^(\d\d)(\d\d)-(\d\d)(\d\d)/) || []),
          n = t[1],
          r = void 0 === n ? '' : n,
          o = t[2],
          a = void 0 === o ? '' : o,
          u = t[3],
          i = void 0 === u ? '' : u,
          s = t[4];
        return [r + ':' + a, i + ':' + (void 0 === s ? '' : s)];
      }
      var J = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            (n._onStartPick = function (e) {
              n.setState({ startTime: e }, n._onChange);
            }),
              (n._onEndPick = function (e) {
                n.setState({ endTime: e }, n._onChange);
              }),
              (n._onChange = function () {
                var e = n.props,
                  t = e.input,
                  r = t.id,
                  o = t.name,
                  a = e.onChange,
                  u = n.state,
                  i = u.startTime,
                  s = u.endTime;
                a(i.replace(':', '') + '-' + s.replace(':', ''), r, o);
              });
            var r = t.value || t.input.defval,
              o = X(r),
              a = o[0],
              u = o[1];
            return (n.state = { prevValue: r, startTime: a, endTime: u }), n;
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.render = function () {
              var e = this.state,
                t = e.startTime,
                n = e.endTime;
              return o.createElement(
                O.a,
                null,
                o.createElement(
                  'div',
                  { className: d.sessionStart },
                  o.createElement(z, {
                    className: y()(d.input, d.sessionInputContainer),
                    name: 'start',
                    value: Object(g.ensureDefined)(t),
                    onChange: this._onStartPick,
                  }),
                  o.createElement('span', { className: d.sessionDash }, ' — '),
                ),
                o.createElement(
                  'div',
                  { className: d.sessionEnd },
                  o.createElement(z, {
                    className: y()(d.input, d.sessionInputContainer),
                    name: 'end',
                    value: Object(g.ensureDefined)(n),
                    onChange: this._onEndPick,
                  }),
                ),
              );
            }),
            (t.getDerivedStateFromProps = function (e, t) {
              if (e.value === t.prevValue) return t;
              var n = X(e.value),
                r = n[0],
                o = n[1];
              return { prevValue: e.value, startTime: r, endTime: o };
            }),
            t
          );
        })(o.PureComponent),
        Q = Object(l.a)(J),
        Z = n('YFKU'),
        $ = n('Kxc7'),
        ee = n('0YCj'),
        te = n.n(ee),
        ne = n('+8gn'),
        re = n('HGyE'),
        oe = n('5YG5'),
        ae = {
          open: window.t('open'),
          high: window.t('high'),
          low: window.t('low'),
          close: window.t('close'),
          hl2: window.t('hl2'),
          hlc3: window.t('hlc3'),
          ohlc4: window.t('ohlc4'),
        },
        ue = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.render = function () {
              var e = this.props.input,
                t = this.context,
                n = t.study,
                a = t.model,
                u = Object(r.a)({}, ae),
                i = Object(oe.a)(n);
              if (n && this._isStudy(n) && n.isChildStudy()) {
                var s = i.parentSource(),
                  c = s.title(),
                  l = te.a.getChildSourceInputTitles(e, s.metaInfo(), c);
                u = Object(r.a)(Object(r.a)({}, u), l);
              }
              if (
                $.enabled('study_on_study') &&
                n &&
                this._isStudy(n) &&
                (n.isChildStudy() || te.a.canBeChild(n.metaInfo()))
              ) {
                var p = Object(r.f)([n], i.getAllChildren());
                a.model()
                  .allStudies()
                  .filter(function (e) {
                    return e.canHaveChildren() && !p.includes(e);
                  })
                  .forEach(function (e) {
                    var t = e.title(!0, void 0, !0),
                      n = e.sourceId() || '#' + e.id(),
                      o = e.metaInfo(),
                      a = o.styles,
                      i = o.plots || [];
                    if (1 === i.length) u[n + '$0'] = t;
                    else if (i.length > 1) {
                      var s = i.reduce(function (e, o, u) {
                        var i, s;
                        if (!te.a.canPlotBeSourceOfChildStudy(o.type)) return e;
                        try {
                          s = Object(g.ensureDefined)(
                            Object(g.ensureDefined)(a)[o.id],
                          ).title;
                        } catch (c) {
                          s = o.id;
                        }
                        return Object(r.a)(
                          Object(r.a)({}, e),
                          (((i = {})[n + '$' + u] = t + ': ' + s), i),
                        );
                      }, {});
                      u = Object(r.a)(Object(r.a)({}, u), s);
                    }
                  });
              }
              var d = Object(r.a)(Object(r.a)({}, e), {
                type: 'text',
                options: Object.keys(u),
                optionsTitles: u,
              });
              return o.createElement(
                re.a,
                Object(r.a)({}, this.props, { input: d }),
              );
            }),
            (t.prototype._isStudy = function (e) {
              return !e.hasOwnProperty('isInputsStudy');
            }),
            (t.contextType = ne.b),
            t
          );
        })(o.PureComponent),
        ie = n('LxhU'),
        se = n('pPtI'),
        ce = n('H172'),
        le = void 0,
        pe = [
          '1',
          '3',
          '5',
          '15',
          '30',
          '45',
          '60',
          '120',
          '180',
          '240',
          '1D',
          '1W',
          '1M',
        ],
        de = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._onChange = function (e) {
                var n = t.props,
                  r = n.input,
                  o = r.id,
                  a = r.name;
                (0, n.onChange)(e, o, a);
              }),
              t
            );
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.render = function () {
              var e,
                t = this.props,
                n = t.input,
                r = t.value,
                a = t.disabled,
                u = ie.Interval.parse(void 0 === r ? n.defval : r),
                i = u.multiplier(),
                s = u.value(),
                c = le
                  ? le.get().filter(function (e) {
                      return !ie.Interval.parse(e).isRange();
                    })
                  : [],
                l = Object(se.mergeResolutions)(pe, c);
              return (
                l.unshift(''),
                (i && l.includes(s)) || (s = l[0]),
                o.createElement(ce.a, {
                  className: y()(d.input, d.resolution),
                  menuClassName: y()(d.dropdownMenu, d.resolution),
                  items:
                    ((e = l),
                    e.map(function (e) {
                      return {
                        value: e,
                        content:
                          '' === e
                            ? Object(Z.t)('Same as chart')
                            : Object(se.getTranslatedResolutionModel)(e).hint,
                      };
                    })),
                  value: s,
                  onChange: this._onChange,
                  disabled: a,
                })
              );
            }),
            t
          );
        })(o.PureComponent);
      var fe = Object(l.a)(de),
        he = n('lkVX'),
        me = n('Z1Tk'),
        ve = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.render = function () {
              var e = this;
              return o.createElement(ne.b.Consumer, null, function (t) {
                return t ? e._getColorInputWithContext(t) : null;
              });
            }),
            (t.prototype._getColorInputWithContext = function (e) {
              var t,
                n = this.props,
                r = n.input.id,
                a = n.disabled,
                u = e.model,
                i = e.study;
              if ('properties' in i || 'tempProperties' in i) {
                var s =
                  'properties' in i
                    ? i.properties().inputs[r]
                    : null === (t = i.tempProperties) || void 0 === t
                    ? void 0
                    : t.inputs.child(r);
                return o.createElement(
                  me.a,
                  { model: u, property: s },
                  o.createElement(he.a, { color: s, disabled: a }),
                );
              }
              return null;
            }),
            t
          );
        })(o.PureComponent);
      n.d(t, 'a', function () {
        return be;
      });
      var be = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.render = function () {
            var e,
              t = this.props,
              n = t.input,
              r = t.disabled,
              a = t.onChange;
            t.tzName;
            if (
              ['text', 'integer', 'float', 'session', 'resolution'].includes(
                (e = n).type,
              ) &&
              e.hasOwnProperty('options')
            )
              return o.createElement(re.a, {
                input: n,
                disabled: r,
                onChange: a,
              });
            switch (n.type) {
              case 'integer':
                return o.createElement(u.a, {
                  input: n,
                  disabled: r,
                  onChange: a,
                });
              case 'float':
                return o.createElement(i.a, {
                  input: n,
                  disabled: r,
                  onChange: a,
                });
              case 'bool':
                return o.createElement(s.a, {
                  input: n,
                  disabled: r,
                  onChange: a,
                });
              case 'text':
                return o.createElement(m, {
                  input: n,
                  disabled: r,
                  onChange: a,
                });
              case 'symbol':
                return o.createElement(v.a, {
                  input: n,
                  disabled: r,
                  onChange: a,
                });
              case 'session':
                return o.createElement(Q, {
                  input: n,
                  disabled: r,
                  onChange: a,
                });
              case 'source':
                return o.createElement(ue, {
                  input: n,
                  disabled: r,
                  onChange: a,
                });
              case 'resolution':
                return o.createElement(fe, {
                  input: n,
                  disabled: r,
                  onChange: a,
                });
              case 'time':
                return null;
              case 'color':
                return o.createElement(ve, {
                  input: n,
                  disabled: r,
                  onChange: a,
                });
              default:
                return null;
            }
          }),
          t
        );
      })(o.PureComponent);
    },
    S0KV: function (e, t, n) {
      'use strict';
      function r(e) {
        return Array.isArray(e) ? e[0].value() : e.value();
      }
      function o(e, t) {
        if (Array.isArray(e))
          for (var n = 0, r = e; n < r.length; n++) {
            t(r[n]);
          }
        else t(e);
      }
      n.d(t, 'a', function () {
        return r;
      }),
        n.d(t, 'b', function () {
          return o;
        });
    },
    UYhW: function (e, t, n) {
      'use strict';
      var r = n('mrSG'),
        o = n('q1tI'),
        a = n.n(o),
        u = n('Eyy1'),
        i = (n('YFKU'), n('WboT')),
        s = n('9XXR'),
        c = n('Ialn'),
        l = n('qFKp'),
        p = (function () {
          function e(e) {
            void 0 === e && (e = ' '), (this._divider = e);
          }
          return (
            (e.prototype.format = function (e) {
              var t = Object(s.splitThousands)(e, this._divider);
              return Object(c.isRtl)() && l.isChrome
                ? Object(c.startWithLTR)(t)
                : t;
            }),
            (e.prototype.parse = function (e) {
              var t = Object(c.stripLTRMarks)(e).split(this._divider).join(''),
                n = Number(t);
              return isNaN(n) || /e/i.test(t)
                ? { res: !1 }
                : { res: !0, value: n, suggest: this.format(n) };
            }),
            e
          );
        })(),
        d = n('zXvd'),
        f = n('nc0P'),
        h = n('Hr11'),
        m = window.t('Number format is invalid.'),
        v = window.t('Specified value is less than the instrument minimum.'),
        b = window.t('Specified value is more than the instrument maximum.'),
        y = new p(),
        g = /^-?[0-9]*$/,
        O = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            (n._onFocus = function (e) {
              n.setState({ focused: !0 }),
                n.props.onFocus && n.props.onFocus(e);
            }),
              (n._onBlur = function (e) {
                n.setState({
                  displayValue: C(n.props, n.props.value),
                  focused: !1,
                }),
                  n.props.errorHandler && n.props.errorHandler(!1),
                  n.props.onBlur && n.props.onBlur(e);
              }),
              (n._onValueChange = function (e) {
                var t = e.target.value;
                if (
                  (void 0 !== n.props.onEmptyString &&
                    '' === t &&
                    n.props.onEmptyString(),
                  'integer' !== n.props.mode || g.test(t))
                ) {
                  var r = j(t, n.props.formatter),
                    o = r.res
                      ? n._checkValueBoundaries(r.value)
                      : { value: !1 },
                    a = r.res && !o.value,
                    u = r.res && r.suggest && !n.state.focused ? r.suggest : t,
                    i = a && o.msg ? o.msg : m;
                  n.setState({ displayValue: u, errorMsg: i }),
                    r.res && o.value && n.props.onValueChange(r.value, 'input'),
                    n.props.errorHandler && n.props.errorHandler(!r.res || a);
                }
              }),
              (n._onValueByStepChange = function (e) {
                var t = n.props,
                  r = t.roundByStep,
                  o = void 0 === r || r,
                  a = t.step,
                  u = void 0 === a ? 1 : a,
                  i = t.formatter,
                  s = j(n.state.displayValue, i),
                  c = u;
                if (s.res) {
                  var l = new f.Big(s.value),
                    p = new f.Big(u),
                    d = l.mod(p),
                    h = l.plus(e * u);
                  !d.eq(0) && o && (h = h.plus((e > 0 ? 0 : 1) * u).minus(d)),
                    (c = Number(h));
                }
                n._checkValueBoundaries(c).value &&
                  (n.setState({ displayValue: C(n.props, c) }),
                  n.props.onValueChange(c, 'step')),
                  n.props.errorHandler && n.props.errorHandler(!1);
              });
            var r = t.value;
            return (
              (n.state = {
                value: r,
                displayValue: C(t, r),
                focused: !1,
                errorMsg: m,
              }),
              n
            );
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.render = function () {
              return a.a.createElement(i.a, {
                inputMode: this.props.inputMode,
                borderStyle: this.props.borderStyle,
                inputStyle: this.props.inputStyle,
                fontSizeStyle: this.props.fontSizeStyle,
                value: this.state.displayValue,
                forceShowControls: this.props.forceShowControls,
                className: this.props.className,
                button: this.props.button,
                placeholder: this.props.placeholder,
                innerLabel: this.props.innerLabel,
                disabled: this.props.disabled,
                error: this.props.error,
                errorMessage: this.props.errorMessage || this.state.errorMsg,
                onValueChange: this._onValueChange,
                onValueByStepChange: this._onValueByStepChange,
                containerReference: this.props.containerReference,
                inputReference: this.props.inputReference,
                onClick: this.props.onClick,
                onFocus: this._onFocus,
                onBlur: this._onBlur,
                onKeyDown: this.props.onKeyDown,
                controlDecKeyCodes: this.props.controlDecKeyCodes,
                controlIncKeyCodes: this.props.controlIncKeyCodes,
              });
            }),
            (t.prototype.getClampedValue = function () {
              var e = this.props,
                t = e.min,
                n = void 0 === t ? -1 / 0 : t,
                r = e.max,
                o = void 0 === r ? 9e15 : r,
                a = j(this.state.displayValue, this.props.formatter);
              return a.res ? Object(h.clamp)(a.value, n, o) : null;
            }),
            (t.getDerivedStateFromProps = function (e, t) {
              var n = e.alwaysUpdateValueFromProps,
                r = e.value;
              return (t.focused && !n) || t.value === r
                ? null
                : { value: r, displayValue: C(e, r) };
            }),
            (t.prototype._checkValueBoundaries = function (e) {
              var t = this.props,
                n = t.min,
                r = void 0 === n ? -1 / 0 : n,
                o = t.max,
                a = (function (e, t, n) {
                  var r = e >= t,
                    o = e <= n;
                  return {
                    passMin: r,
                    passMax: o,
                    pass: r && o,
                    clamped: Object(h.clamp)(e, t, n),
                  };
                })(e, r, void 0 === o ? 9e15 : o),
                u = a.passMax ? (a.passMin ? void 0 : v) : b;
              return { value: a.pass, msg: u };
            }),
            t
          );
        })(a.a.PureComponent);
      function C(e, t) {
        var n = e.useFormatter,
          r = void 0 === n || n,
          o = e.formatter,
          a = e.mode;
        return r && 'integer' !== a
          ? (function (e, t) {
              void 0 === t && (t = y);
              return null !== e ? t.format(e) : '';
            })(t, o)
          : (function (e) {
              if (null === e) return '';
              return d.NumericFormatter.formatNoE(e);
            })(t);
      }
      function j(e, t) {
        return (
          void 0 === t && (t = y),
          t.parse
            ? t.parse(e)
            : { res: !1, error: 'Formatter does not support parse' }
        );
      }
      n.d(t, 'a', function () {
        return S;
      });
      var S = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            (t._container = null),
            (t._handleContainerRef = function (e) {
              return (t._container = e);
            }),
            (t._onChange = function (e, n) {
              var r = t.props,
                o = r.input,
                a = o.id,
                u = o.name,
                i = r.onChange,
                s = r.onBlur;
              i(e, a, u), 'step' === n && s && s();
            }),
            (t._onBlur = function (e) {
              var n = t.props.onBlur;
              if (n) {
                var r = Object(u.ensureNotNull)(t._container);
                r.contains(document.activeElement) ||
                  r.contains(e.relatedTarget) ||
                  n();
              }
            }),
            t
          );
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.render = function () {
            var e = this.props,
              t = e.input,
              n = t.defval,
              r = t.min,
              a = t.max,
              u = t.step,
              i = e.value,
              s = e.disabled,
              c = e.onKeyDown,
              p = e.className,
              d = e.mode;
            return o.createElement(O, {
              className: p,
              value: Number(void 0 === i ? n : i),
              min: r,
              max: a,
              step: u,
              mode: d,
              onBlur: this._onBlur,
              onValueChange: this._onChange,
              onKeyDown: c,
              disabled: s,
              containerReference: this._handleContainerRef,
              inputMode: l.CheckMobile.iOS() ? void 0 : 'numeric',
              fontSizeStyle: 'medium',
              roundByStep: !1,
            });
          }),
          t
        );
      })(o.PureComponent);
    },
    XDrA: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return a;
      });
      var r = n('q1tI'),
        o = n('tDS2');
      function a(e) {
        return r.createElement('div', { className: o.inputGroup }, e.children);
      }
    },
    YS4w: function (e, t, n) {
      'use strict';
      n.d(t, 'b', function () {
        return l;
      }),
        n.d(t, 'a', function () {
          return p;
        });
      var r = n('mrSG'),
        o = n('q1tI'),
        a = n('UYhW'),
        u = n('HfwS'),
        i = n('Yi2Q'),
        s = n('tDS2'),
        c = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.render = function () {
              return o.createElement(
                a.a,
                Object(r.a)({}, this.props, { className: s.input }),
              );
            }),
            t
          );
        })(o.PureComponent),
        l = Object(i.a)(c, { change: 1 / 0, commit: 0, blur: 0 }),
        p = Object(u.a)(l);
    },
    Yi2Q: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return u;
      });
      var r = n('mrSG'),
        o = n('q1tI'),
        a = { blur: 0, commit: 0, change: 1 / 0 };
      function u(e, t) {
        return (
          void 0 === t && (t = a),
          (function (n) {
            function a(e) {
              var r = n.call(this, e) || this;
              return (
                (r._onChange = function (e, n, o) {
                  var a = t.change;
                  a
                    ? (clearTimeout(r._timeout),
                      r.setState({ value: e }, function () {
                        a !== 1 / 0 &&
                          (r._timeout = setTimeout(function () {
                            return r._flush();
                          }, a));
                      }))
                    : r._flush(e);
                }),
                (r._onBlur = function () {
                  r._debounce(t.blur);
                  var e = r.props.onBlur;
                  e && e();
                }),
                (r._onKeyDown = function (e) {
                  13 === e.keyCode && r._debounce(t.commit);
                }),
                (r.state = { prevValue: e.value, value: e.value }),
                r
              );
            }
            return (
              Object(r.c)(a, n),
              (a.prototype.componentWillUnmount = function () {
                this._flush();
              }),
              (a.prototype.render = function () {
                var t = this.state.value;
                return o.createElement(
                  e,
                  Object(r.a)({}, this.props, {
                    value: t,
                    onChange: this._onChange,
                    onBlur: this._onBlur,
                    onKeyDown: this._onKeyDown,
                  }),
                );
              }),
              (a.getDerivedStateFromProps = function (e, t) {
                return e.value === t.prevValue
                  ? t
                  : { prevValue: e.value, value: e.value };
              }),
              (a.prototype._debounce = function (e) {
                var t = this;
                e
                  ? (clearTimeout(this._timeout),
                    e !== 1 / 0 &&
                      (this._timeout = setTimeout(function () {
                        return t._flush();
                      }, e)))
                  : this.setState(function (e) {
                      t._flush(e.value);
                    });
              }),
              (a.prototype._flush = function (e) {
                var t = this.props,
                  n = t.input,
                  r = n.id,
                  o = n.name,
                  a = t.onChange,
                  u = this.state,
                  i = u.prevValue,
                  s = u.value;
                clearTimeout(this._timeout);
                var c = void 0 !== e ? e : s;
                a && void 0 !== c && c !== i && a(c, r, o);
              }),
              a
            );
          })(o.PureComponent)
        );
      }
    },
    Z1Tk: function (e, t, n) {
      'use strict';
      n.d(t, 'b', function () {
        return u;
      }),
        n.d(t, 'a', function () {
          return i;
        }),
        n.d(t, 'c', function () {
          return s;
        });
      var r = n('mrSG'),
        o = n('q1tI'),
        a = n('KJt4'),
        u = o.createContext(null),
        i = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._setValue = function (e, n, r) {
                t.props.model.setProperty(e, n, r);
              }),
              t
            );
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this;
              this.props.property.subscribe(this, function () {
                return e.forceUpdate();
              });
            }),
            (t.prototype.componentWillUnmount = function () {
              this.props.property.unsubscribeAll(this);
            }),
            (t.prototype.render = function () {
              var e = { setValue: this._setValue };
              return o.createElement(
                u.Provider,
                { value: e },
                this.props.children,
              );
            }),
            t
          );
        })(o.PureComponent);
      function s(e, t) {
        return Object(a.b)(function (n) {
          var a = n.model;
          return o.createElement(
            i,
            { model: a, property: t.property },
            o.createElement(e, Object(r.a)({}, t)),
          );
        }, t);
      }
    },
    b8Mn: function (e) {
      e.exports = JSON.parse(
        '{"radio":"radio-1cZENBYk","input":"input-303BGOua","box":"box-3rMRS-wv","reverse":"reverse-39E2s_WA","label":"label-3Xg_J0oJ","wrapper":"wrapper-1Law0ttl","noOutline":"noOutline-3-BkNnru"}',
      );
    },
    fV01: function (e, t, n) {
      'use strict';
      n.d(t, 'c', function () {
        return g;
      }),
        n.d(t, 'b', function () {
          return O;
        }),
        n.d(t, 'a', function () {
          return C;
        });
      var r = n('mrSG'),
        o = n('q1tI'),
        a = n.n(o),
        u = n('TSYQ'),
        i = n.n(u),
        s = n('Eyy1'),
        c = n('pZll'),
        l = n('3G1X'),
        p = n('+8gn'),
        d = n('HfwS'),
        f = n('e3/o'),
        h = n('jAh7'),
        m = n('+EG+'),
        v = n('RgaO'),
        b = n('5YG5'),
        y = n('tDS2');
      function g(e, t) {
        var n = Object(b.a)(t).resolvedSymbolInfoBySymbol(e);
        return n && (n.ticker || n.full_name) ? n.ticker || n.full_name : e;
      }
      var O = (function (e) {
        function t(t) {
          var n = e.call(this, t) || this;
          (n._input = null),
            (n._popup = null),
            (n._uuid = Object(f.guid)()),
            (n._updateSymbolName = function () {
              n._onSetSymbol(n.state.value);
            }),
            (n._onSetSymbol = function (e) {
              var t = g(e, n.props.study),
                r = n.props,
                o = r.input,
                a = o.id,
                u = o.name;
              (0, r.onChange)(t, a, u), n.setState({ value: t });
            }),
            (n._refInput = function (e) {
              n._input = e;
            }),
            (n._handleOutsideClick = function (e) {
              null !== n._input &&
                document.activeElement === n._input &&
                e.target instanceof Node &&
                null !== n._popup &&
                !n._popup.contains(e.target) &&
                n._input.blur();
            });
          var r = t.study,
            o = t.value;
          return (
            (n._adapter = Object(b.a)(r)),
            (n.state = { value: o || '', expanded: !1 }),
            n
          );
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.componentDidMount = function () {
            var e = this,
              t = this.context || Object(h.getRootOverlapManager)();
            Object(c.symbolSearchUIService)().bindToInput(
              Object(s.ensureNotNull)(this._input),
              {
                syncWithChartWidget: !1,
                syncOnBlur: !0,
                callback: this._onSetSymbol,
                onPopupOpen: function (n) {
                  (e._popup = t.ensureWindow(e._uuid)),
                    e.setState({ expanded: !0 }),
                    n.appendTo(e._popup);
                },
                onPopupClose: function () {
                  (e._popup = null),
                    e.setState({ expanded: !1 }),
                    t.removeWindow(e._uuid),
                    e._input && e._input.focus();
                },
                keepFocus: !0,
              },
            ),
              this._adapter
                .symbolsResolved()
                .subscribe(this, this._updateSymbolName);
          }),
          (t.prototype.componentDidUpdate = function (e) {
            var t = this.props.autofocus;
            e.autofocus !== t && t && this._input && this._input.focus();
          }),
          (t.prototype.componentWillUnmount = function () {
            this._adapter
              .symbolsResolved()
              .unsubscribe(this, this._updateSymbolName);
          }),
          (t.prototype.render = function () {
            var e = this,
              t = this.props.disabled,
              n = this.state,
              r = n.value,
              o = n.expanded;
            return a.a.createElement(
              v.a,
              {
                mouseDown: !0,
                touchStart: !0,
                handler: this._handleOutsideClick,
              },
              function (n) {
                return a.a.createElement(l.b, {
                  className: i()(y.input, y.symbol),
                  defaultValue: r,
                  disabled: t,
                  reference: e._refInput,
                  containerReference: n,
                  'data-haspopup': !0,
                  'data-expanded': o,
                });
              },
            );
          }),
          (t.prototype.updateSymbol = function () {
            this._onSetSymbol(this.state.value);
          }),
          (t.contextType = m.b),
          t
        );
      })(a.a.PureComponent);
      var C = Object(d.a)(function (e) {
        var t = Object(o.useContext)(p.b),
          n = Object(s.ensureNotNull)(t).study,
          u = e.input.defval,
          i = e.value;
        return a.a.createElement(
          O,
          Object(r.a)({}, e, { value: g(i || u || '', n), study: n }),
        );
      });
    },
    h5Dg: function (e, t, n) {
      'use strict';
      n.d(t, 'b', function () {
        return c;
      }),
        n.d(t, 'a', function () {
          return l;
        });
      var r = n('mrSG'),
        o = n('q1tI'),
        a = n('fV0y'),
        u = n('qFKp'),
        i = n('HfwS'),
        s = n('tDS2'),
        c = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._onChange = function () {
                var e = t.props,
                  n = e.input,
                  r = n.id,
                  o = n.name,
                  a = e.value;
                (0, e.onChange)(!a, r, o);
              }),
              t
            );
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.input.defval,
                n = e.value,
                r = e.disabled,
                i = e.label,
                c = void 0 === n ? t : n;
              return o.createElement(a.a, {
                className: s.checkbox,
                disabled: r,
                checked: c,
                onChange: this._onChange,
                label: o.createElement('span', { className: s.label }, i),
                labelAlignBaseline: !u.isIE,
              });
            }),
            t
          );
        })(o.PureComponent),
        l = Object(i.a)(c);
    },
    kk0y: function (e, t, n) {
      'use strict';
      n.d(t, 'b', function () {
        return l;
      }),
        n.d(t, 'a', function () {
          return p;
        });
      var r = n('mrSG'),
        o = n('q1tI'),
        a = n('HfwS'),
        u = n('Yi2Q'),
        i = n('UYhW'),
        s = n('tDS2'),
        c = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.render = function () {
              return o.createElement(
                i.a,
                Object(r.a)({}, this.props, {
                  mode: 'integer',
                  className: s.input,
                }),
              );
            }),
            t
          );
        })(o.PureComponent),
        l = Object(u.a)(c, { change: 1 / 0, commit: 0, blur: 0 }),
        p = Object(a.a)(l);
    },
    lkVX: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return v;
      });
      var r = n('mrSG'),
        o = (n('YFKU'), n('q1tI')),
        a = n.n(o),
        u = n('eJTA'),
        i = n('Tmoa'),
        s = n('Z1Tk'),
        c = n('7MId'),
        l = n('S0KV'),
        p = n('JWMC'),
        d = window.t('Change Thickness'),
        f = window.t('Change Color'),
        h = window.t('Change Opacity'),
        m = [1, 2, 3, 4],
        v = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._trackEventLabel = null),
              (t._getTransparencyValue = function () {
                var e = t.props.transparency;
                return e ? e.value() : 0;
              }),
              (t._getOpacityValue = function () {
                var e = t.props.color,
                  n = Object(l.a)(e);
                if (n)
                  return Object(i.isHexColor)(n)
                    ? Object(i.transparencyToAlpha)(t._getTransparencyValue())
                    : Object(u.parseRgba)(n)[3];
              }),
              (t._getColorValueInHex = function () {
                var e = t.props.color,
                  n = Object(l.a)(e);
                return n
                  ? Object(i.isHexColor)(n)
                    ? n
                    : Object(u.rgbToHexString)(Object(u.parseRgb)(n))
                  : null;
              }),
              (t._onThicknessChange = function (e) {
                var n = t.props.thickness;
                void 0 !== n && t._setProperty(n, e, d);
              }),
              (t._onColorChange = function (e) {
                var n = t.props,
                  r = n.color,
                  o = n.isPaletteColor,
                  a = Object(l.a)(r),
                  s = 0;
                a &&
                  (s = Object(i.isHexColor)(a)
                    ? t._getTransparencyValue()
                    : Object(i.alphaToTransparency)(Object(u.parseRgba)(a)[3])),
                  t._setProperty(
                    r,
                    Object(i.generateColor)(String(e), s, !0),
                    f,
                  ),
                  (t._trackEventLabel =
                    'Plot color > ' + (o ? 'Palette' : 'Single'));
              }),
              (t._onOpacityChange = function (e) {
                var n = t.props.color,
                  r = Object(l.a)(n);
                t._setProperty(
                  n,
                  Object(i.generateColor)(
                    r,
                    Object(i.alphaToTransparency)(e),
                    !0,
                  ),
                  h,
                );
              }),
              (t._onPopupClose = function () {
                t._trackEventLabel &&
                  (Object(p.trackEvent)(
                    'GUI',
                    'Study settings',
                    t._trackEventLabel,
                  ),
                  (t._trackEventLabel = null));
              }),
              t
            );
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.componentWillUnmount = function () {
              this._onPopupClose();
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.selectOpacity,
                n = void 0 === t || t,
                r = e.disabled;
              return a.a.createElement(c.a, {
                disabled: r,
                color: this._getColorValueInHex(),
                selectOpacity: n,
                opacity: this._getOpacityValue(),
                thickness: this._getThicknessValue(),
                thicknessItems: m,
                onColorChange: this._onColorChange,
                onOpacityChange: this._onOpacityChange,
                onThicknessChange: this._onThicknessChange,
                onPopupClose: this._onPopupClose,
              });
            }),
            (t.prototype._getThicknessValue = function () {
              var e = this.props.thickness;
              return e ? Object(l.a)(e) : void 0;
            }),
            (t.prototype._setProperty = function (e, t, n) {
              var r = this.context.setValue;
              Object(l.b)(e, function (e) {
                return r(e, t, n);
              });
            }),
            (t.contextType = s.b),
            t
          );
        })(a.a.PureComponent);
    },
    rJEJ: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return s;
      });
      var r = n('mrSG'),
        o = (n('YFKU'), n('q1tI')),
        a = n('Eyy1'),
        u = n('PjdP'),
        i = n('Q+1u'),
        s = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.label,
                n = e.children,
                r = e.input,
                s = e.disabled,
                c = e.onChange,
                l = e.labelAlign,
                p = e.grouped;
              return o.createElement(
                i.a.Row,
                null,
                o.createElement(
                  i.a.Cell,
                  { placement: 'first', verticalAlign: l, grouped: p },
                  void 0 !== t
                    ? t
                    : window.t(Object(a.ensureDefined)(r).name, {
                        context: 'input',
                      }),
                ),
                o.createElement(
                  i.a.Cell,
                  { placement: 'last', grouped: p },
                  n ||
                    o.createElement(u.a, {
                      input: Object(a.ensureDefined)(r),
                      onChange: c,
                      disabled: s,
                    }),
                ),
              );
            }),
            t
          );
        })(o.PureComponent);
    },
    tDS2: function (e, t, n) {
      e.exports = {
        input: 'input-2M6pUl-Q',
        resolution: 'resolution-2qfO1lUf',
        symbol: 'symbol-1be49jiU',
        checkbox: 'checkbox-15VqCFje',
        label: 'label-3rCCk0Td',
        symbolInput: 'symbolInput-1r0O05gG',
        isFocused: 'isFocused-3ps_uNFG',
        readonly: 'readonly-3HE9PFCu',
        disabled: 'disabled-3omO9UCm',
        error: 'error-3HEkUG-H',
        dropdownMenu: 'dropdownMenu-sPl98nIf',
        sessionStart: 'sessionStart-20Y_zZKF',
        sessionEnd: 'sessionEnd-Biyt0SRM',
        sessionInputContainer: 'sessionInputContainer-3fr-ovpl',
        sessionDash: 'sessionDash-3i8ftDqe',
        inputGroup: 'inputGroup-13um8mnj',
      };
    },
    wnq4: function (e, t, n) {
      e.exports = { wrap: 'wrap-3UffnxXt', input: 'input-1Xqn_2Yr' };
    },
    yd0C: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17"><path fill="currentColor" d="M1 8.5a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0zM8.5 0a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM9 9V3H8v5H5v1h4z"/></svg>';
    },
  },
]);
