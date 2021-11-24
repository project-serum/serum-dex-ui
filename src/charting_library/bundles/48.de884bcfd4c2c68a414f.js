(window.webpackJsonp = window.webpackJsonp || []).push([
  [48],
  {
    '4Fxa': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M12.143 20l1.714-12H12V7h5v1h-2.143l-1.714 12H15v1h-5v-1h2.143z"/></svg>';
    },
    '6w4h': function (e, t, n) {
      e.exports = {
        row: 'row-1NK-hr1x',
        wrap: 'wrap-tVR5Scov',
        breakpointNormal: 'breakpointNormal-KzkqSNOX',
        breakpointMedium: 'breakpointMedium-pbm8vBGT',
        breakpointSmall: 'breakpointSmall-32f3vdsC',
      };
    },
    '7EmB': function (e, t, n) {
      e.exports = {
        range: 'range-2i0X47Lu',
        valueInput: 'valueInput-2CKQO1Lv',
        rangeSlider: 'rangeSlider-suG521NL',
        input: 'input-2kx6q_pc',
      };
    },
    '8XTa': function (e, t, n) {
      e.exports = {
        lineEndSelect: 'lineEndSelect-25TizNST',
        right: 'right-3IlPseCZ',
      };
    },
    '9gev': function (e, t, n) {
      e.exports = {
        dropdown: 'dropdown-3Y1U1Nkm',
        normal: 'normal-i7fM20bU',
        big: 'big-2ruaa2z2',
        dropdownMenu: 'dropdownMenu-3UShCdED',
      };
    },
    CaTF: function (e, t, n) {
      e.exports = {
        colorPicker: 'colorPicker-3NIIN0Y8',
        row: 'row-21qTMgcl',
        wrap: 'wrap-1s7U_70a',
        fontStyleButton: 'fontStyleButton-1445FY6N',
        dropdown: 'dropdown-5N0LMJdQ',
        dropdownMenu: 'dropdownMenu-yysG7ZzF',
        textarea: 'textarea-2fko2YtQ',
        normal: 'normal-AMDLZbUS',
        big: 'big-1CfoFALo',
      };
    },
    EJl2: function (e, t, n) {
      e.exports = {
        input: 'input-DGMBjOG0',
        control: 'control-fEqNtKpC',
        item: 'item-1ym_rlZM',
        cell: 'cell-2byf6BGW',
        fragmentCell: 'fragmentCell-1FhKQVpC',
        withTitle: 'withTitle-QRL8YpBY',
        title: 'title-3K1l5aiR',
      };
    },
    FIOl: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M8.5 13.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm0 0H24"/></svg>';
    },
    G7lD: function (e, t, n) {
      e.exports = {
        range: 'range-46to1pZu',
        disabled: 'disabled-v1pYljFO',
        rangeSlider: 'rangeSlider-10OqoFDT',
        rangeSliderMiddleWrap: 'rangeSliderMiddleWrap-3-EULCcf',
        rangeSliderMiddle: 'rangeSliderMiddle-3BlpfHSS',
        dragged: 'dragged-36bXd7Hw',
        pointer: 'pointer-23eauHul',
        rangePointerWrap: 'rangePointerWrap-1vnhGySq',
      };
    },
    K5B3: function (e, t, n) {
      e.exports = { input: 'input-2Cr8E1vs' };
    },
    Q40t: function (e, t, n) {
      e.exports = { titleWrap: 'titleWrap-1bavobjQ' };
    },
    To8B: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" d="M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z"/></svg>';
    },
    ZRxn: function (e, t, n) {
      e.exports = {
        unit: 'unit-b-yYYxjl',
        input: 'input-124DCFwV',
        normal: 'normal-3N4mfpQO',
        big: 'big-1ixMJ1Cb',
        dropdown: 'dropdown-NF5Htz1I',
        dropdownMenu: 'dropdownMenu-36OGqXRr',
      };
    },
    ZcEB: function (e, t, n) {
      e.exports = { dropdown: 'dropdown-2xTnctYy', menu: 'menu-ZFNz6yWw' };
    },
    aSdR: function (e, t, n) {
      e.exports = {
        coordinates: 'coordinates-1KIxFYVo',
        input: 'input-1N6PPaVy',
      };
    },
    aw5J: function (e, t, n) {
      e.exports = {
        container: 'container-1sHZXWOS',
        active: 'active-2c5C-1Pl',
        disabled: 'disabled-1s7-KBqG',
        icon: 'icon-2ux26WKl',
      };
    },
    bvfV: function (e, t, n) {
      'use strict';
      var a = n('mrSG'),
        r = n('q1tI'),
        i = n.n(r),
        o = n('HSjo'),
        l = n('yqnI'),
        c = function (e) {
          var t = 'property' in e ? e.property : void 0,
            n = 'defaultValue' in e ? e.defaultValue : e.property.value(),
            a = Object(r.useState)(t ? t.value() : n),
            i = a[0],
            o = a[1];
          Object(r.useEffect)(
            function () {
              if (t) {
                var n = {};
                return (
                  o(t.value()),
                  t.subscribe(n, function (t) {
                    var n = t.value();
                    e.handler && e.handler(n), o(n);
                  }),
                  function () {
                    return t.unsubscribeAll(n);
                  }
                );
              }
              return function () {};
            },
            [t],
          );
          return [
            i,
            function (e) {
              if (void 0 !== t) {
                var n = t.value();
                l.a.logNormal(
                  'Changing property value from "' + n + '" to "' + e + '"',
                ),
                  t.setValue(e);
              }
            },
          ];
        },
        s = n('Q+1u'),
        u = n('qFKp'),
        d = n('fV0y');
      function p(e) {
        var t = e.property,
          n = Object(a.__rest)(e, ['property']),
          r = c({ property: t }),
          o = r[0],
          l = r[1];
        return i.a.createElement(
          d.Checkbox,
          Object(a.__assign)({}, n, {
            name: 'toggle-enabled',
            checked: o,
            onChange: function () {
              l(!o);
            },
          }),
        );
      }
      var m = n('TSYQ'),
        f = n.n(m),
        h = n('eG6P');
      function b(e) {
        return i.a.createElement(
          'div',
          { className: f()(h.wrap, e.className) },
          e.children,
        );
      }
      var v = n('vxCt');
      function g(e) {
        var t = e.property,
          n = e.disabled,
          a = e.title,
          r = e.className,
          o = e.name,
          l = i.a.createElement('span', { className: v.title }, a);
        return i.a.createElement(
          b,
          { className: r },
          t &&
            i.a.createElement(p, {
              name: o,
              className: v.checkbox,
              property: t,
              disabled: n,
              label: l,
              labelAlignBaseline: !u.isIE,
            }),
          !t && l,
        );
      }
      function E(e) {
        var t = e.id,
          n = e.offset,
          a = e.disabled,
          r = e.checked,
          o = e.title,
          l = e.children;
        return i.a.createElement(
          s.a.Row,
          null,
          i.a.createElement(
            s.a.Cell,
            {
              placement: 'first',
              verticalAlign: 'adaptive',
              offset: n,
              'data-section-name': t,
              colSpan: Boolean(l) ? void 0 : 2,
              checkableTitle: !0,
            },
            i.a.createElement(g, {
              name: 'is-enabled-' + t,
              title: o,
              disabled: a,
              property: r,
            }),
          ),
          Boolean(l) &&
            i.a.createElement(
              s.a.Cell,
              { placement: 'last', 'data-section-name': t },
              l,
            ),
        );
      }
      function _(e) {
        var t = e.definition,
          n = t.id,
          a = t.properties,
          r = a.checked,
          o = a.disabled,
          l = t.title,
          s = e.offset,
          u = c({ property: o, defaultValue: !1 })[0];
        return i.a.createElement(E, {
          id: n,
          offset: s,
          checked: r,
          title: l,
          disabled: e.disabled || u,
        });
      }
      var y = n('KacW');
      function w(e) {
        var t = e.property,
          n = c({ property: t }),
          r = n[0],
          o = n[1];
        return i.a.createElement(
          y.a,
          Object(a.__assign)({}, e, { lineStyle: r, lineStyleChange: o }),
        );
      }
      var N = n('H172'),
        O = n('kJwE'),
        S = [1, 2, 3, 4];
      function j(e) {
        var t,
          n = e.value,
          a = e.items,
          r = void 0 === a ? S : a,
          o = e.disabled,
          l = e.onChange;
        return i.a.createElement(N.a, {
          disabled: o,
          hideArrowButton: !0,
          className: O.lineWidthSelect,
          items:
            ((t = r),
            t.map(function (e) {
              return { value: e, selectedContent: c(e, !0), content: c(e) };
            })),
          value: n,
          onChange: l,
          'data-name': 'line-width-select',
        });
        function c(e, t) {
          var a,
            r = { borderTopWidth: e };
          return i.a.createElement(
            'div',
            { className: O.item },
            i.a.createElement(
              'div',
              {
                className: m(
                  O.bar,
                  ((a = {}), (a[O.isActive] = e === n && !t), a),
                ),
                style: r,
              },
              ' ',
            ),
          );
        }
      }
      function C(e) {
        var t = e.property,
          n = c({ property: t }),
          r = n[0],
          o = n[1];
        return i.a.createElement(
          j,
          Object(a.__assign)({}, e, { value: r, onChange: o }),
        );
      }
      var V = n('nc0P'),
        k = n('Eyy1');
      function x(e, t, n) {
        var a = Object(r.useState)(e),
          i = a[0],
          o = a[1],
          l = Object(r.useRef)(i);
        return (
          Object(r.useEffect)(
            function () {
              o(e);
            },
            [e, n],
          ),
          [
            i,
            function (e) {
              (l.current = e), o(e);
            },
            function () {
              t(l.current);
            },
            function () {
              (l.current = e), o(e);
            },
          ]
        );
      }
      var M = n('/3z9'),
        T = n('WboT'),
        P = n('Hr11'),
        I = n('zXvd');
      function R(e) {
        var t = e.property,
          n = Object(a.__rest)(e, ['property']),
          o = Object(r.useState)(performance.now()),
          l = o[0],
          s = o[1],
          u = c({
            property: t,
            handler: function () {
              return s(performance.now());
            },
          }),
          d = x(u[0], u[1], l);
        return i.a.createElement(
          B,
          Object(a.__assign)({}, n, { valueHash: l, sharedBuffer: d }),
        );
      }
      function B(e) {
        var t = e.sharedBuffer,
          n = e.min,
          o = e.max,
          l = e.step,
          c = Object(a.__rest)(e, ['sharedBuffer', 'min', 'max', 'step']),
          s = t[0],
          d = t[1],
          p = t[2],
          m = t[3],
          f = Object(r.useRef)(null),
          h = Object(r.useRef)(null),
          b = { flushed: !1 };
        return i.a.createElement(
          A,
          Object(a.__assign)({}, c, {
            ref: h,
            onValueChange: function (e, t) {
              d(e), 'step' !== t || b.flushed || (p(), (b.flushed = !0));
            },
            onKeyDown: function (e) {
              if (e.defaultPrevented || b.flushed) return;
              switch (Object(M.hashFromEvent)(e.nativeEvent)) {
                case 27:
                  m(), (b.flushed = !0);
                  break;
                case 13:
                  e.preventDefault();
                  var t = Object(k.ensureNotNull)(h.current).getClampedValue();
                  null !== t && (d(t), p(), (b.flushed = !0));
              }
            },
            onBlur: function (e) {
              var t = Object(k.ensureNotNull)(f.current);
              if (
                !t.contains(document.activeElement) &&
                !t.contains(e.relatedTarget)
              ) {
                var n = Object(k.ensureNotNull)(h.current).getClampedValue();
                null === n || b.flushed || (d(n), p(), (b.flushed = !0));
              }
            },
            value: s,
            roundByStep: !1,
            containerReference: function (e) {
              f.current = e;
            },
            inputMode: u.CheckMobile.iOS() ? void 0 : 'numeric',
            min: n,
            max: o,
            step: l,
          }),
        );
      }
      var F = {
          mode: 'float',
          min: -Number.MAX_VALUE,
          max: Number.MAX_VALUE,
          step: 1,
          precision: 0,
          inheritPrecisionFromStep: !0,
        },
        A = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            (n._selection = null),
              (n._restoreSelection = !1),
              (n._input = null),
              (n._handleSelectionChange = function () {
                n._restoreSelection ||
                  document.activeElement !==
                    Object(k.ensureNotNull)(n._input) ||
                  n._saveSelection(Object(k.ensureNotNull)(n._input));
              }),
              (n._handleInputReference = function (e) {
                (n._input = e),
                  n.props.inputReference && n.props.inputReference(e);
              }),
              (n._onFocus = function (e) {
                n._saveSelection(Object(k.ensureNotNull)(n._input)),
                  n.setState({ focused: !0 }),
                  n.props.onFocus && n.props.onFocus(e);
              }),
              (n._onBlur = function (e) {
                (n._selection = null),
                  n.setState({
                    displayValue: W(n.props, n.props.value, L(n.props)),
                    focused: !1,
                  }),
                  n.props.onBlur && n.props.onBlur(e);
              }),
              (n._onValueChange = function (e) {
                var t,
                  a,
                  r = e.currentTarget,
                  i = r.value,
                  o = (function (e, t, n) {
                    switch (n) {
                      case 'integer':
                        return z.test(t) ? t : e;
                      case 'float':
                        return (t = t.replace(/,/g, '.')), D.test(t) ? t : e;
                    }
                  })(n.state.displayValue, i, n.props.mode),
                  l = H(o),
                  c = n._checkValueBoundaries(l);
                n.setState({ displayValue: o }),
                  o !== i &&
                  ((t = n.state.displayValue),
                  (a = (a = o).replace(/,/g, '.')),
                  (t = t.replace(/,/g, '.')).includes('.') || !a.includes('.'))
                    ? ((n._restoreSelection = !0), n.forceUpdate())
                    : n._saveSelection(r),
                  c.value &&
                    W(n.props, l) === o &&
                    n.props.onValueChange(l, 'input');
              }),
              (n._onValueByStepChange = function (e) {
                var t = n.props,
                  a = t.roundByStep,
                  r = void 0 === a || a,
                  i = t.step,
                  o = void 0 === i ? 1 : i,
                  l = H(n.state.displayValue);
                if (!isNaN(l)) {
                  var c = new V.Big(l),
                    s = new V.Big(o),
                    u = c.mod(s),
                    d = c.plus(e * o);
                  !u.eq(0) && r && (d = d.plus((e > 0 ? 0 : 1) * o).minus(u));
                  var p = Number(d);
                  n._checkValueBoundaries(p).value &&
                    (n.setState({ displayValue: W(n.props, p, L(n.props)) }),
                    n.props.onValueChange(p, 'step'));
                }
              });
            var a = q(n.props.value);
            return (
              (n.state = {
                value: a,
                displayValue: W(n.props, a, L(n.props)),
                focused: !1,
                valueHash: n.props.valueHash,
              }),
              n
            );
          }
          return (
            Object(a.__extends)(t, e),
            (t.prototype.componentDidMount = function () {
              document.addEventListener(
                'selectionchange',
                this._handleSelectionChange,
              );
            }),
            (t.prototype.componentWillUnmount = function () {
              document.removeEventListener(
                'selectionchange',
                this._handleSelectionChange,
              );
            }),
            (t.prototype.componentDidUpdate = function () {
              var e = Object(k.ensureNotNull)(this._input),
                t = this._selection;
              if (
                null !== t &&
                this._restoreSelection &&
                document.activeElement === e
              ) {
                var n = t.start,
                  a = t.end,
                  r = t.direction;
                e.setSelectionRange(n, a, r);
              }
              this._restoreSelection = !1;
            }),
            (t.prototype.render = function () {
              return i.a.createElement(T.a, {
                inputMode: this.props.inputMode,
                name: this.props.name,
                borderStyle: 'thick',
                fontSizeStyle: 'medium',
                value: this.state.displayValue,
                className: this.props.className,
                placeholder: this.props.placeholder,
                disabled: this.props.disabled,
                onValueChange: this._onValueChange,
                onValueByStepChange: this._onValueByStepChange,
                containerReference: this.props.containerReference,
                inputReference: this._handleInputReference,
                onClick: this.props.onClick,
                onFocus: this._onFocus,
                onBlur: this._onBlur,
                onKeyDown: this.props.onKeyDown,
              });
            }),
            (t.prototype.getClampedValue = function () {
              var e = this.props,
                t = e.min,
                n = e.max,
                a = H(this.state.displayValue);
              return isNaN(a) ? null : Object(P.clamp)(a, t, n);
            }),
            (t.getDerivedStateFromProps = function (e, t) {
              var n = e.valueHash,
                a = q(e.value);
              return t.value !== a || t.valueHash !== n
                ? {
                    value: a,
                    valueHash: n,
                    displayValue: W(
                      e,
                      a,
                      t.focused && t.valueHash === n ? void 0 : L(e),
                    ),
                  }
                : null;
            }),
            (t.prototype._saveSelection = function (e) {
              var t = e.selectionStart,
                n = e.selectionEnd,
                a = e.selectionDirection;
              null !== t &&
                null !== n &&
                null !== a &&
                (this._selection = { start: t, end: n, direction: a });
            }),
            (t.prototype._checkValueBoundaries = function (e) {
              var t = this.props;
              return {
                value: (function (e, t, n) {
                  var a = e >= t,
                    r = e <= n;
                  return {
                    passMin: a,
                    passMax: r,
                    pass: a && r,
                    clamped: Object(P.clamp)(e, t, n),
                  };
                })(e, t.min, t.max).pass,
              };
            }),
            (t.defaultProps = F),
            t
          );
        })(i.a.PureComponent),
        z = /^\-?[0-9]*$/,
        D = /^(\-?([0-9]+\.?[0-9]*)|(\-?[0-9]*))$/;
      function W(e, t, n) {
        return (
          null !== (t = q(t)) && void 0 !== n && (n = Math.max(U(t), n)),
          (function (e, t) {
            if (null === e) return '';
            return new I.NumericFormatter(t).format(e);
          })(t, n)
        );
      }
      function L(e) {
        var t = 0;
        return (
          e.inheritPrecisionFromStep && e.step <= 1 && (t = U(e.step)),
          Math.max(e.precision, t) || void 0
        );
      }
      function U(e) {
        var t = Math.trunc(e).toString();
        return Object(P.clamp)(
          I.NumericFormatter.formatNoE(e).length - t.length - 1,
          0,
          15,
        );
      }
      function H(e, t) {
        return new I.NumericFormatter(t).parse(e);
      }
      function q(e) {
        return 'number' == typeof e && Number.isFinite(e) ? e : null;
      }
      var G = n('eJTA'),
        X = n('7MId'),
        K = n('Tmoa');
      function Y(e) {
        var t = e.color,
          n = e.thickness,
          r = e.thicknessItems,
          o = e.noAlpha,
          l = c({ property: t }),
          s = l[0],
          u = l[1],
          d = c(n ? { property: n } : { defaultValue: void 0 }),
          p = d[0],
          m = d[1];
        return i.a.createElement(
          X.a,
          Object(a.__assign)({}, e, {
            color: (function () {
              if (!s) return null;
              return Object(G.rgbToHexString)(Object(G.parseRgb)(s));
            })(),
            onColorChange: function (e) {
              var t = s
                ? Object(K.alphaToTransparency)(Object(G.parseRgba)(s)[3])
                : 0;
              u(Object(K.generateColor)(String(e), t, !0));
            },
            thickness: p,
            thicknessItems: r,
            onThicknessChange: m,
            opacity: o ? void 0 : s ? Object(G.parseRgba)(s)[3] : void 0,
            onOpacityChange: o
              ? void 0
              : function (e) {
                  u(
                    Object(K.generateColor)(
                      s,
                      Object(K.alphaToTransparency)(e),
                      !0,
                    ),
                  );
                },
          }),
        );
      }
      n('YFKU');
      var Q = n('a7Ha'),
        Z = n('CHgb'),
        J = n('QpNh'),
        $ = n('FIOl'),
        ee = n('jAqK'),
        te = n('8XTa'),
        ne = [
          { type: Q.LineEnd.Normal, icon: $, label: window.t('Normal') },
          {
            type: Q.LineEnd.Arrow,
            icon: ee,
            label: window.t('Arrow'),
          },
        ],
        ae = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._items = []),
              (n._items = ne.map(function (e) {
                return {
                  value: e.type,
                  selectedContent: i.a.createElement(Z.a, { icon: e.icon }),
                  content: i.a.createElement(Z.b, {
                    icon: e.icon,
                    iconClassName: f()(t.isRight && te.right),
                    label: e.label,
                  }),
                };
              })),
              n
            );
          }
          return (
            Object(a.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.lineEnd,
                n = e.className,
                r = e.lineEndChange,
                o = e.isRight,
                l = e.disabled;
              return i.a.createElement(
                Z.c,
                Object(a.__assign)(
                  {
                    disabled: l,
                    className: f()(te.lineEndSelect, o && te.right, n),
                    items: this._items,
                    value: t,
                    onChange: r,
                    hideArrowButton: !0,
                  },
                  Object(J.a)(this.props),
                ),
              );
            }),
            t
          );
        })(i.a.PureComponent);
      function re(e) {
        var t = e.property,
          n = c({ property: t }),
          r = n[0],
          o = n[1];
        return i.a.createElement(
          ae,
          Object(a.__assign)({}, e, { lineEnd: r, lineEndChange: o }),
        );
      }
      var ie,
        oe = n('6w4h');
      function le(e) {
        var t = e.children,
          n = e.className,
          a = e.breakPoint,
          i = void 0 === a ? 'Normal' : a;
        return r.createElement(
          b,
          { className: m(oe.wrap, n, oe['breakpoint' + i]) },
          r.Children.map(t, function (e) {
            return r.isValidElement(e)
              ? r.createElement(
                  'span',
                  { key: null === e.key ? void 0 : e.key, className: oe.row },
                  e,
                )
              : e;
          }),
        );
      }
      var ce = (((ie = {})[1] = 'float'), (ie[0] = 'integer'), ie),
        se = n('vqb8'),
        ue = n('eU7S');
      function de(e) {
        var t,
          n,
          a = e.definition,
          o = a.id,
          l = a.properties,
          s = l.checked,
          u = l.disabled,
          d = l.leftEnd,
          p = l.rightEnd,
          f = l.value,
          h = l.extendLeft,
          b = l.extendRight,
          v = a.title,
          g = a.valueMin,
          _ = a.valueMax,
          y = a.valueStep,
          N = a.valueUnit,
          O = a.extendLeftTitle,
          S = a.extendRightTitle,
          j = e.offset,
          V = c({ property: s, defaultValue: !0 })[0],
          k = c({ property: u, defaultValue: !1 })[0],
          x = Object(se.a)({ watchedValue: g, defaultValue: void 0 }),
          M = Object(se.a)({ watchedValue: _, defaultValue: void 0 }),
          T = Object(se.a)({ watchedValue: y, defaultValue: void 0 }),
          P = Object(se.a)({ watchedValue: N, defaultValue: void 0 }),
          I = e.disabled || !V;
        return i.a.createElement(
          r.Fragment,
          null,
          i.a.createElement(
            E,
            {
              id: o,
              offset: j,
              checked: s,
              title: v,
              disabled: e.disabled || k,
            },
            i.a.createElement(
              le,
              { className: ue.line, breakPoint: 'Small' },
              i.a.createElement(
                r.Fragment,
                null,
                (function () {
                  var t = e.definition,
                    n = t.properties,
                    a = n.color,
                    r = n.width,
                    o = t.widthValues;
                  if (a)
                    return i.a.createElement(
                      'span',
                      { className: ue.control },
                      i.a.createElement(Y, {
                        color: a,
                        thickness: r,
                        disabled: I,
                        thicknessItems: o,
                      }),
                    );
                  return (
                    r &&
                    i.a.createElement(
                      'span',
                      { className: ue.control },
                      i.a.createElement(C, {
                        items: o,
                        property: r,
                        disabled: I,
                      }),
                    )
                  );
                })(),
                (n = e.definition.properties.style) &&
                  i.a.createElement(
                    'span',
                    { className: ue.control },
                    i.a.createElement(w, { property: n, disabled: I }),
                  ),
              ),
              (d || p || f) &&
                i.a.createElement(
                  r.Fragment,
                  null,
                  i.a.createElement(
                    r.Fragment,
                    null,
                    d &&
                      i.a.createElement(re, {
                        className: ue.control,
                        property: d,
                        disabled: I,
                        'data-name': 'left-end-select',
                      }),
                    p &&
                      i.a.createElement(re, {
                        className: ue.control,
                        property: p,
                        disabled: I,
                        'data-name': 'right-end-select',
                        isRight: !0,
                      }),
                  ),
                  ((t = e.definition.valueType),
                  f &&
                    i.a.createElement(
                      'span',
                      { className: m(ue.valueInput, ue.control) },
                      i.a.createElement(R, {
                        className: ue.input,
                        property: f,
                        min: x,
                        max: M,
                        step: T,
                        disabled: I,
                        mode: void 0 !== t ? ce[t] : void 0,
                        name: 'line-value-input',
                      }),
                      i.a.createElement('span', { className: ue.valueUnit }, P),
                    )),
                ),
            ),
          ),
          h &&
            i.a.createElement(E, {
              id: o + 'ExtendLeft',
              offset: j,
              checked: h,
              title: O,
              disabled: e.disabled || k,
            }),
          b &&
            i.a.createElement(E, {
              id: o + 'ExtendRight',
              offset: j,
              checked: b,
              title: S,
              disabled: e.disabled || k,
            }),
        );
      }
      function pe(e) {
        var t = e.definition,
          n = t.id,
          a = t.properties,
          r = a.color,
          o = a.checked,
          l = a.disabled,
          s = t.title,
          u = t.noAlpha,
          d = e.offset,
          p = c({ property: o, defaultValue: !0 })[0],
          m = c({ property: l, defaultValue: !1 })[0],
          f = e.disabled || !p;
        return i.a.createElement(
          E,
          { id: n, offset: d, checked: o, title: s, disabled: e.disabled || m },
          i.a.createElement(
            b,
            null,
            i.a.createElement(Y, { color: r, disabled: f, noAlpha: u }),
          ),
        );
      }
      var me = n('U1eG'),
        fe = n('HGP3'),
        he = n('lB1i');
      function be(e) {
        var t,
          n = e.value,
          a = e.disabled,
          r = e.onChange;
        return i.a.createElement(
          'div',
          { className: m(he.wrap, ((t = {}), (t[he.disabled] = a), t)) },
          i.a.createElement(me.a, {
            hideInput: !0,
            color: fe.colorsPalette['color-tv-blue-500'],
            opacity: 1 - n / 100,
            onChange: function (e) {
              a || r(100 - 100 * e);
            },
          }),
        );
      }
      function ve(e) {
        var t = e.property,
          n = Object(a.__rest)(e, ['property']),
          i = c({ property: t }),
          o = i[0],
          l = i[1];
        return r.createElement(
          be,
          Object(a.__assign)({}, n, { value: o, onChange: l }),
        );
      }
      function ge(e) {
        var t = e.definition,
          n = t.id,
          a = t.properties,
          r = a.transparency,
          o = a.checked,
          l = a.disabled,
          s = t.title,
          u = e.offset,
          d = c({ property: o, defaultValue: !0 })[0],
          p = c({ property: l, defaultValue: !1 })[0],
          m = e.disabled || !d;
        return i.a.createElement(
          E,
          { id: n, offset: u, checked: o, title: s, disabled: e.disabled || p },
          i.a.createElement(
            b,
            null,
            i.a.createElement(ve, { property: r, disabled: m }),
          ),
        );
      }
      var Ee = n('oWdB');
      function _e(e) {
        var t = e.definition,
          n = t.id,
          a = t.properties,
          r = a.color1,
          o = a.color2,
          l = a.checked,
          s = a.disabled,
          u = t.title,
          d = t.noAlpha1,
          p = t.noAlpha2,
          m = e.offset,
          f = c({ property: l, defaultValue: !0 })[0],
          h = c({ property: s, defaultValue: !1 })[0],
          v = e.disabled || !f;
        return i.a.createElement(
          E,
          { id: n, offset: m, checked: l, title: u, disabled: e.disabled || h },
          i.a.createElement(b, { className: Ee.twoColors }, g(r, d), g(o, p)),
        );
        function g(e, t) {
          return i.a.createElement(
            'span',
            { className: Ee.colorPicker },
            i.a.createElement(Y, { color: e, disabled: v, noAlpha: t }),
          );
        }
      }
      var ye = n('ybVX'),
        we = n('gla1');
      function Ne(e) {
        var t = e.property,
          n = e.options,
          o = Object(a.__rest)(e, ['property', 'options']),
          l = c({ property: t }),
          s = l[0],
          u = l[1],
          d = Object(we.a)();
        return (
          Object(r.useEffect)(function () {
            var e = function () {
              return d();
            };
            return (
              n.subscribe(e),
              function () {
                return n.unsubscribe(e);
              }
            );
          }, []),
          i.a.createElement(
            N.a,
            Object(a.__assign)({}, o, {
              onChange: u,
              value: s,
              items: n.value().map(function (e) {
                return { content: e.title, value: e.value };
              }),
            }),
          )
        );
      }
      var Oe = n('ZRxn');
      function Se(e) {
        var t = e.definition,
          n = t.id,
          a = t.properties,
          o = a.checked,
          l = a.value,
          s = a.unitOptionsValue,
          u = a.disabled,
          d = t.min,
          p = t.max,
          f = t.step,
          h = t.title,
          v = t.unit,
          g = t.unitOptions,
          _ = t.type,
          y = e.offset,
          w = c({ property: o, defaultValue: !0 })[0],
          N = c({ property: u, defaultValue: !1 })[0],
          O = Object(se.a)({ watchedValue: d, defaultValue: void 0 }),
          S = Object(se.a)({ watchedValue: p, defaultValue: void 0 }),
          j = Object(se.a)({ watchedValue: f, defaultValue: void 0 }),
          C = Object(se.a)({ watchedValue: v, defaultValue: void 0 }),
          V = Object(r.useContext)(ye.b),
          x = e.disabled || !w;
        return i.a.createElement(
          E,
          { id: n, offset: y, checked: o, title: h, disabled: e.disabled || N },
          i.a.createElement(
            b,
            null,
            i.a.createElement(
              le,
              null,
              i.a.createElement(R, {
                className: m(Oe.input, V[n] && Oe[V[n]]),
                property: l,
                min: O,
                max: S,
                step: j,
                disabled: x,
                mode: ce[_],
                name: 'number-input',
              }),
              s &&
                i.a.createElement(Ne, {
                  className: Oe.dropdown,
                  menuClassName: Oe.dropdownMenu,
                  disabled: x,
                  property: s,
                  options: Object(k.ensureDefined)(g),
                  'data-name': 'unit-options-dropdown',
                }),
            ),
            i.a.createElement('span', { className: Oe.unit }, C),
          ),
        );
      }
      function je(e) {
        var t = e.definition,
          n = t.id,
          a = t.properties,
          r = a.checked,
          o = a.disabled,
          l = t.childrenDefinitions,
          s = t.title,
          u = e.offset,
          d = c({ property: r, defaultValue: !0 })[0],
          p = c({ property: o, defaultValue: !1 })[0],
          m = e.disabled || !d;
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(E, {
            id: n,
            offset: u,
            checked: r,
            title: s,
            disabled: e.disabled || p,
          }),
          l.map(function (e) {
            return i.a.createElement(vt, {
              key: e.id,
              disabled: m,
              definition: e,
              offset: !0,
            });
          }),
        );
      }
      var Ce = n('UXjO');
      function Ve(e) {
        var t = e.property,
          n = c({ property: t }),
          r = n[0],
          o = n[1];
        return i.a.createElement(
          Ce.a,
          Object(a.__assign)({}, e, {
            fontSize: r,
            fontSizeChange: o,
            'data-name': 'font-size-select',
          }),
        );
      }
      var ke = n('Iivm'),
        xe = n('aw5J');
      function Me(e) {
        var t = e.className,
          n = e.checked,
          r = e.icon,
          o = e.disabled,
          l = e.onClick;
        return i.a.createElement(
          'div',
          Object(a.__assign)(
            {
              className: f()(
                t,
                xe.container,
                n && !o && xe.active,
                o && xe.disabled,
              ),
              onClick: o ? void 0 : l,
              'data-role': 'button',
            },
            Object(J.a)(e),
          ),
          i.a.createElement(ke.Icon, { className: xe.icon, icon: r }),
        );
      }
      function Te(e) {
        var t = e.icon,
          n = e.className,
          i = e.property,
          o = e.disabled,
          l = c({ property: i }),
          s = l[0],
          u = l[1];
        return r.createElement(
          Me,
          Object(a.__assign)(
            {
              className: n,
              icon: t,
              checked: s,
              onClick: function () {
                u(!s);
              },
              disabled: o,
            },
            Object(J.a)(e),
          ),
        );
      }
      var Pe = n('Wvr1'),
        Ie = n('k+zC'),
        Re = n('jggR');
      function Be(e) {
        var t = e.value,
          n = e.className,
          a = e.onChange,
          i = e.disabled,
          o = e.readonly,
          l = e.name,
          c = e.highlight,
          s = e.onFocus,
          u = e.onBlur,
          d = e.intent,
          p = e.borderStyle,
          f = void 0 === p ? 'thin' : p,
          h = e.size,
          b = void 0 === h ? 'medium' : h,
          v = e.removeRoundBorder,
          g = void 0 === v ? 0 : v,
          E = e.highlightRemoveRoundBorder,
          _ = void 0 === E ? 0 : E,
          y = Object(Pe.a)(g),
          w = Object(Pe.a)(_);
        return r.createElement(
          'span',
          {
            className: m(
              Re.container,
              n,
              Re['intent-' + d],
              Re['border-' + f],
              Re['size-' + b],
              i && Re.disabled,
              o && Re.readonly,
              y,
              c && Re.highlight,
            ),
          },
          r.createElement('textarea', {
            className: Re.textarea,
            value: t,
            onChange: function (e) {
              i || o || a(e.currentTarget.value);
            },
            onFocus: s,
            onBlur: u,
            disabled: i,
            readOnly: o,
            name: l,
          }),
          c && r.createElement('span', { className: m(Re.shadow, w) }),
        );
      }
      function Fe(e) {
        return (
          (e = Object(Ie.a)(e)), r.createElement(Be, Object(a.__assign)({}, e))
        );
      }
      function Ae(e) {
        var t = e.property,
          n = Object(a.__rest)(e, ['property']),
          i = c({ property: t }),
          o = i[0],
          l = i[1];
        return r.createElement(
          Fe,
          Object(a.__assign)({}, n, { value: o, onChange: l }),
        );
      }
      var ze = n('rRJX'),
        De = n('4Fxa'),
        We = n('CaTF'),
        Le = function (e) {
          return { content: e.title, title: e.title, value: e.value };
        },
        Ue = function (e) {
          return { content: e.title, title: e.title, value: e.value };
        };
      function He(e) {
        var t = e.definition,
          n = t.id,
          a = t.properties,
          o = a.color,
          l = a.size,
          u = a.checked,
          d = a.disabled,
          p = a.bold,
          m = a.italic,
          h = a.text,
          v = a.alignmentHorizontal,
          g = a.alignmentVertical,
          _ = a.orientation,
          y = a.backgroundVisible,
          w = a.backgroundColor,
          O = a.borderVisible,
          S = a.borderColor,
          j = a.borderWidth,
          C = a.wrap,
          V = t.title,
          k = t.sizeItems,
          x = t.alignmentTitle,
          M = t.alignmentHorizontalItems,
          T = t.alignmentVerticalItems,
          P = t.orientationTitle,
          I = t.orientationItems,
          R = t.backgroundTitle,
          B = t.borderTitle,
          F = t.borderWidthItems,
          A = t.wrapTitle,
          z = e.offset,
          D = Object(r.useContext)(ye.a),
          W = c({ property: u, defaultValue: !0 })[0],
          L = c({ property: d, defaultValue: !1 })[0],
          U = c({ property: g, defaultValue: void 0 }),
          H = U[0],
          q = U[1],
          G = c({ property: _, defaultValue: 'horizontal' }),
          X = G[0],
          K = G[1],
          Q = c({ property: v, defaultValue: void 0 }),
          Z = Q[0],
          J = Q[1],
          $ = c({ property: y, defaultValue: !1 })[0],
          ee = c({ property: O, defaultValue: !1 })[0],
          te = e.disabled || !W;
        return i.a.createElement(
          r.Fragment,
          null,
          (function () {
            if (V)
              return i.a.createElement(
                E,
                {
                  id: n,
                  offset: z,
                  checked: u,
                  title: V,
                  disabled: e.disabled || L,
                },
                i.a.createElement(le, { breakPoint: 'Small' }, ae(), re()),
              );
            return i.a.createElement(
              s.a.Row,
              null,
              i.a.createElement(
                s.a.Cell,
                {
                  placement: 'first',
                  colSpan: 2,
                  offset: z,
                  'data-section-name': n,
                },
                ae(),
                re(),
              ),
            );
          })(),
          h &&
            i.a.createElement(
              s.a.Row,
              null,
              i.a.createElement(
                s.a.Cell,
                {
                  placement: 'first',
                  colSpan: 2,
                  offset: z,
                  'data-section-name': n,
                },
                i.a.createElement(Ae, {
                  className: f()(We.textarea, D[n] && We[D[n]]),
                  property: h,
                  disabled: te,
                  onFocus: function (e) {
                    e.target.select();
                  },
                  name: 'text-input',
                }),
              ),
            ),
          (v || g) &&
            i.a.createElement(
              s.a.Row,
              null,
              i.a.createElement(
                s.a.Cell,
                {
                  placement: 'first',
                  verticalAlign: 'adaptive',
                  offset: z,
                  'data-section-name': n,
                },
                i.a.createElement(b, null, x),
              ),
              i.a.createElement(
                s.a.Cell,
                {
                  placement: 'last',
                  verticalAlign: 'adaptive',
                  'data-section-name': n,
                },
                i.a.createElement(
                  le,
                  { breakPoint: 'Small' },
                  void 0 !== H &&
                    void 0 !== T &&
                    i.a.createElement(N.a, {
                      className: We.dropdown,
                      menuClassName: We.dropdownMenu,
                      disabled: te,
                      value: H,
                      items: T.map(Le),
                      onChange: q,
                      'data-name': 'alignment-vertical-select',
                    }),
                  void 0 !== Z &&
                    void 0 !== M &&
                    i.a.createElement(N.a, {
                      className: We.dropdown,
                      menuClassName: We.dropdownMenu,
                      disabled: te,
                      value: Z,
                      items: M.map(Le),
                      onChange: J,
                      'data-name': 'alignment-horizontal-select',
                    }),
                ),
              ),
            ),
          void 0 !== _ &&
            void 0 !== I &&
            i.a.createElement(
              s.a.Row,
              null,
              i.a.createElement(
                s.a.Cell,
                {
                  placement: 'first',
                  verticalAlign: 'adaptive',
                  offset: z,
                  'data-section-name': n,
                },
                i.a.createElement(b, null, P),
              ),
              i.a.createElement(
                s.a.Cell,
                {
                  placement: 'last',
                  verticalAlign: 'adaptive',
                  'data-section-name': n,
                },
                i.a.createElement(
                  le,
                  { breakPoint: 'Small' },
                  i.a.createElement(N.a, {
                    className: We.dropdown,
                    menuClassName: We.dropdownMenu,
                    disabled: te,
                    value: X,
                    items: I.map(Ue),
                    onChange: K,
                    'data-name': 'orientation-select',
                  }),
                ),
              ),
            ),
          ie(R, y, w, !!y && !$),
          ie(B, O, S, !!O && !ee, j, F),
          C &&
            i.a.createElement(E, {
              id: n + 'Wrap',
              offset: z,
              checked: C,
              title: A,
              disabled: e.disabled || L,
            }),
        );
        function ne(e, t, n) {
          return e
            ? i.a.createElement(Te, {
                className: We.fontStyleButton,
                icon: t,
                property: e,
                disabled: te,
                'data-name': n,
              })
            : null;
        }
        function ae() {
          return i.a.createElement(
            r.Fragment,
            null,
            o &&
              i.a.createElement(
                'div',
                { className: We.colorPicker },
                i.a.createElement(Y, { color: o, disabled: te }),
              ),
            l &&
              k &&
              i.a.createElement(Ve, {
                property: l,
                fontSizes: k,
                disabled: te,
              }),
          );
        }
        function re() {
          return i.a.createElement(
            r.Fragment,
            null,
            ne(p, ze, 'toggle-bold'),
            ne(m, De, 'toggle-italic'),
          );
        }
        function ie(t, a, r, o, l, c) {
          return r
            ? i.a.createElement(
                E,
                {
                  id: n + 'ColorSelect',
                  offset: z,
                  checked: a,
                  title: t,
                  disabled: e.disabled || L,
                },
                i.a.createElement(Y, {
                  color: r,
                  thickness: l,
                  thicknessItems: c,
                  disabled: te || o,
                }),
              )
            : null;
        }
      }
      var qe = n('3G1X'),
        Ge = n('jAh7'),
        Xe = n('pZll'),
        Ke = n('RgaO'),
        Ye = n('0waE'),
        Qe = n('+EG+'),
        Ze = n('K5B3'),
        Je = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._symbolSearch = null),
              (n._input = null),
              (n._popup = null),
              (n._uuid = Object(Ye.guid)()),
              (n._updateSymbolName = function () {
                var e = n.props.definition,
                  t = e.propType,
                  a = e.properties[t];
                n._symbolSearch &&
                  ((Object(k.ensureNotNull)(n._input).value = a.value()),
                  n._symbolSearch.acceptTypeIn());
              }),
              (n._onSetSymbol = function (e) {
                var t = n.props.definition,
                  a = t.propType;
                t.properties[a].setValue(e);
              }),
              (n._handleOutsideClick = function (e) {
                null !== n._input &&
                  document.activeElement === n._input &&
                  e.target instanceof Node &&
                  null !== n._popup &&
                  !n._popup.contains(e.target) &&
                  n._input.blur();
              }),
              (n._refInput = function (e) {
                n._input = e;
              }),
              (n.state = { expanded: !1 }),
              n
            );
          }
          return (
            Object(a.__extends)(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this,
                t = this.props.definition;
              t.properties[t.propType].subscribe(this, this._updateSymbolName);
              var n = this.context || Object(Ge.getRootOverlapManager)();
              Object(Xe.symbolSearchUIService)()
                .bindToInput(Object(k.ensureNotNull)(this._input), {
                  syncWithChartWidget: !1,
                  syncOnBlur: !0,
                  callback: this._onSetSymbol,
                  onPopupOpen: function (t) {
                    (e._popup = n.ensureWindow(e._uuid)),
                      t.appendTo(e._popup),
                      e.setState({ expanded: !0 });
                  },
                  onPopupClose: function () {
                    (e._popup = null),
                      e.setState({ expanded: !1 }),
                      n.removeWindow(e._uuid),
                      e._input && e._input.focus();
                  },
                  keepFocus: !0,
                })
                .then(function (t) {
                  return (e._symbolSearch = t);
                });
            }),
            (t.prototype.componentWillUnmount = function () {
              var e = this.props.definition;
              e.properties[e.propType].unsubscribe(
                this,
                this._updateSymbolName,
              );
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props.definition,
                n = t.id,
                a = t.title,
                r = void 0 === a ? '' : a,
                o = this.state.expanded,
                l = this.props.definition,
                c = l.propType,
                s = l.properties[c].value() || '';
              return i.a.createElement(
                E,
                { id: n, title: r },
                i.a.createElement(
                  b,
                  null,
                  i.a.createElement(
                    Ke.a,
                    {
                      mouseDown: !0,
                      touchStart: !0,
                      handler: this._handleOutsideClick,
                    },
                    function (t) {
                      return i.a.createElement(qe.b, {
                        className: Ze.input,
                        reference: e._refInput,
                        containerReference: t,
                        defaultValue: s,
                        'data-haspopup': !0,
                        'data-expanded': o,
                      });
                    },
                  ),
                ),
              );
            }),
            (t.contextType = Qe.b),
            t
          );
        })(r.PureComponent),
        $e = n('aSdR');
      function et(e) {
        var t = e.definition,
          n = t.properties,
          a = n.x,
          r = n.y,
          o = n.disabled,
          l = t.id,
          c = t.minX,
          u = t.maxX,
          d = t.stepX,
          p = t.minY,
          m = t.maxY,
          f = t.stepY,
          h = t.title,
          b = t.typeX,
          v = t.typeY,
          g = e.offset,
          E = (o && o.value()) || e.disabled,
          _ = Object(se.a)({ watchedValue: c, defaultValue: void 0 }),
          y = Object(se.a)({ watchedValue: u, defaultValue: void 0 }),
          w = Object(se.a)({ watchedValue: d, defaultValue: void 0 }),
          N = Object(se.a)({ watchedValue: p, defaultValue: void 0 }),
          O = Object(se.a)({ watchedValue: m, defaultValue: void 0 }),
          S = Object(se.a)({ watchedValue: f, defaultValue: void 0 });
        return i.a.createElement(
          s.a.Row,
          null,
          i.a.createElement(
            s.a.Cell,
            {
              verticalAlign: 'adaptive',
              placement: 'first',
              offset: g,
              'data-section-name': l,
            },
            i.a.createElement('span', { className: $e.coordinates }, h),
          ),
          (a || r) &&
            i.a.createElement(
              s.a.Cell,
              { placement: 'last', offset: g, 'data-section-name': l },
              i.a.createElement(
                le,
                { breakPoint: 'Medium' },
                r &&
                  i.a.createElement(R, {
                    className: $e.input,
                    property: r,
                    min: N,
                    max: O,
                    step: S,
                    disabled: E,
                    name: 'y-input',
                    mode: void 0 !== v ? ce[v] : 'integer',
                  }),
                a &&
                  i.a.createElement(R, {
                    className: $e.input,
                    property: a,
                    min: _,
                    max: y,
                    step: w,
                    disabled: E,
                    name: 'x-input',
                    mode: void 0 !== b ? ce[b] : 'integer',
                  }),
              ),
            ),
        );
      }
      var tt = n('9gev');
      function nt(e) {
        var t = e.definition,
          n = t.id,
          a = t.properties,
          o = a.checked,
          l = a.option,
          s = a.disabled,
          u = t.title,
          d = t.options,
          p = e.offset,
          m = c({ property: o, defaultValue: !0 })[0],
          h = c({ property: s, defaultValue: !1 })[0],
          v = Object(r.useContext)(ye.b),
          g = e.disabled || !m;
        return i.a.createElement(
          E,
          { id: n, offset: p, checked: o, title: u, disabled: e.disabled || h },
          i.a.createElement(
            b,
            null,
            i.a.createElement(Ne, {
              className: f()(tt.dropdown, v[n] && tt[v[n]]),
              menuClassName: f()(tt.dropdownMenu, v[n] && tt[v[n]]),
              disabled: g,
              property: l,
              options: d,
              'data-name': 'options-dropdown',
            }),
          ),
        );
      }
      var at = n('Ialn'),
        rt = n('G7lD'),
        it = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._container = null),
              (n._pointer = null),
              (n._rafPosition = null),
              (n._rafDragStop = null),
              (n._refContainer = function (e) {
                n._container = e;
              }),
              (n._refPointer = function (e) {
                n._pointer = e;
              }),
              (n._handlePosition = function (e) {
                null !== n._rafPosition ||
                  n.props.disabled ||
                  (n._rafPosition = requestAnimationFrame(function () {
                    var t = n.props,
                      a = t.from,
                      r = t.to,
                      i = t.min,
                      o = t.max,
                      l = n._getNewPosition(e),
                      c = 1 === n._detectPointerMode(e),
                      s = c ? Object(P.clamp)(l, i, r) : a,
                      u = c ? r : Object(P.clamp)(l, a, o);
                    s <= u && n._handleChange(s, u), (n._rafPosition = null);
                  }));
              }),
              (n._handleDragStop = function () {
                null !== n._rafDragStop ||
                  n.props.disabled ||
                  (n._rafDragStop = requestAnimationFrame(function () {
                    n.setState({ pointerDragMode: 0 }),
                      (n._rafDragStop = null),
                      n.props.onCommit();
                  }));
              }),
              (n._onSliderClick = function (e) {
                u.CheckMobile.any() ||
                  (n._handlePosition(e.nativeEvent), n._dragSubscribe());
              }),
              (n._mouseUp = function (e) {
                n._dragUnsubscribe(), n._handlePosition(e), n._handleDragStop();
              }),
              (n._mouseMove = function (e) {
                n._handlePosition(e);
              }),
              (n._onTouchStart = function (e) {
                n._handlePosition(e.nativeEvent.touches[0]);
              }),
              (n._handleTouch = function (e) {
                n._handlePosition(e.nativeEvent.touches[0]);
              }),
              (n._handleTouchEnd = function () {
                n._handleDragStop();
              }),
              (n.state = { pointerDragMode: 0 }),
              n
            );
          }
          return (
            Object(a.__extends)(t, e),
            (t.prototype.componentWillUnmount = function () {
              null !== this._rafPosition &&
                (cancelAnimationFrame(this._rafPosition),
                (this._rafPosition = null)),
                null !== this._rafDragStop &&
                  (cancelAnimationFrame(this._rafDragStop),
                  (this._rafDragStop = null)),
                this._dragUnsubscribe();
            }),
            (t.prototype.render = function () {
              var e,
                t,
                n,
                a = this.props,
                i = a.className,
                o = a.disabled,
                l = a.from,
                c = a.to,
                s = a.min,
                u = a.max,
                d = 0 !== this.state.pointerDragMode,
                p = u - s,
                f = (l - s) / p,
                h = (c - s) / p,
                b = Object(at.isRtl)() ? 'right' : 'left';
              return r.createElement(
                'div',
                { className: m(i, rt.range, o && rt.disabled) },
                r.createElement(
                  'div',
                  {
                    className: rt.rangeSlider,
                    ref: this._refContainer,
                    onMouseDown: this._onSliderClick,
                    onTouchStart: this._onTouchStart,
                    onTouchMove: this._handleTouch,
                    onTouchEnd: this._handleTouchEnd,
                  },
                  r.createElement(
                    'div',
                    { className: rt.rangeSliderMiddleWrap },
                    r.createElement('div', {
                      className: m(rt.rangeSliderMiddle, d && rt.dragged),
                      style:
                        ((e = {}),
                        (e[b] = 100 * f + '%'),
                        (e.width = 100 * (h - f) + '%'),
                        e),
                    }),
                  ),
                  r.createElement(
                    'div',
                    { className: rt.rangePointerWrap },
                    r.createElement('div', {
                      className: m(rt.pointer, d && rt.dragged),
                      style: ((t = {}), (t[b] = 100 * f + '%'), t),
                      ref: this._refPointer,
                    }),
                  ),
                  r.createElement(
                    'div',
                    { className: rt.rangePointerWrap },
                    r.createElement('div', {
                      className: m(rt.pointer, d && rt.dragged),
                      style: ((n = {}), (n[b] = 100 * h + '%'), n),
                    }),
                  ),
                ),
              );
            }),
            (t.prototype._dragSubscribe = function () {
              var e = Object(k.ensureNotNull)(this._container).ownerDocument;
              e &&
                (e.addEventListener('mouseup', this._mouseUp),
                e.addEventListener('mousemove', this._mouseMove));
            }),
            (t.prototype._dragUnsubscribe = function () {
              var e = Object(k.ensureNotNull)(this._container).ownerDocument;
              e &&
                (e.removeEventListener('mousemove', this._mouseMove),
                e.removeEventListener('mouseup', this._mouseUp));
            }),
            (t.prototype._getNewPosition = function (e) {
              var t = this.props,
                n = t.min,
                a = t.max - n,
                r = Object(k.ensureNotNull)(this._container),
                i = Object(k.ensureNotNull)(this._pointer),
                o = r.getBoundingClientRect(),
                l = i.offsetWidth,
                c = e.clientX - l / 2 - o.left;
              return (
                Object(at.isRtl)() && (c = o.width - c - l),
                Object(P.clamp)(c / (o.width - l), 0, 1) * a + n
              );
            }),
            (t.prototype._detectPointerMode = function (e) {
              var t = this.props,
                n = t.from,
                a = t.to,
                r = this.state.pointerDragMode;
              if (0 !== r) return r;
              var i = this._getNewPosition(e),
                o = Math.abs(n - i),
                l = Math.abs(a - i),
                c = o === l ? (i < n ? 1 : 2) : o < l ? 1 : 2;
              return this.setState({ pointerDragMode: c }), c;
            }),
            (t.prototype._handleChange = function (e, t) {
              var n = this.props,
                a = n.from,
                r = n.to,
                i = n.onChange;
              (e === a && t === r) || i(e, t);
            }),
            t
          );
        })(r.PureComponent),
        ot = n('/KDZ'),
        lt = n('7EmB');
      function ct(e) {
        var t = e.definition,
          n = t.id,
          a = t.properties,
          r = a.checked,
          o = a.disabled,
          l = a.from,
          s = a.to,
          u = t.title,
          d = t.max,
          p = t.min,
          m = e.offset,
          f = c({ property: r, defaultValue: !0 })[0],
          h = c({ property: o, defaultValue: !1 })[0],
          v = Object(se.a)({ watchedValue: p, defaultValue: void 0 }),
          g = Object(se.a)({ watchedValue: d, defaultValue: void 0 }),
          _ = c({ property: l }),
          y = x(_[0], _[1]),
          w = y[0],
          N = y[1],
          O = y[2],
          S = c({ property: s }),
          j = x(S[0], S[1]),
          C = j[0],
          V = j[1],
          k = j[2],
          M = e.disabled || !f,
          T = { flushed: !1 };
        return i.a.createElement(
          E,
          { id: n, offset: m, checked: r, title: u, disabled: e.disabled || h },
          i.a.createElement(
            b,
            { className: lt.range },
            (function () {
              if (!v || !g) return null;
              return i.a.createElement(
                ot.a,
                { rule: 'screen and (max-width: 460px)' },
                function (e) {
                  return i.a.createElement(
                    le,
                    { breakPoint: 'Medium' },
                    i.a.createElement(
                      i.a.Fragment,
                      null,
                      i.a.createElement(
                        'span',
                        { className: lt.valueInput },
                        i.a.createElement(B, {
                          className: lt.input,
                          sharedBuffer: y,
                          min: v,
                          max: C,
                          step: 1,
                          disabled: M,
                          name: 'from-input',
                          mode: 'integer',
                        }),
                        e
                          ? i.a.createElement(
                              'span',
                              { className: lt.rangeSlider },
                              '—',
                            )
                          : i.a.createElement(it, {
                              className: lt.rangeSlider,
                              from: w,
                              to: C,
                              min: v,
                              max: g,
                              onChange: P,
                              onCommit: I,
                              disabled: M,
                            }),
                      ),
                    ),
                    i.a.createElement(
                      i.a.Fragment,
                      null,
                      i.a.createElement(
                        'span',
                        { className: lt.valueInput },
                        i.a.createElement(B, {
                          className: lt.input,
                          sharedBuffer: j,
                          min: w,
                          max: g,
                          step: 1,
                          disabled: M,
                          name: 'to-input',
                          mode: 'integer',
                        }),
                      ),
                    ),
                  );
                },
              );
            })(),
          ),
        );
        function P(e, t) {
          N(Math.round(e)), V(Math.round(t));
        }
        function I() {
          T.flushed || (O(), k(), (T.flushed = !0));
        }
      }
      var st = n('Q40t');
      function ut(e) {
        return i.a.createElement(
          s.a.Row,
          null,
          i.a.createElement(
            s.a.Cell,
            {
              className: st.titleWrap,
              placement: 'first',
              verticalAlign: 'adaptive',
              colSpan: 2,
              'data-section-name': e.name,
              checkableTitle: !0,
            },
            i.a.createElement(g, {
              title: e.title,
              name: 'is-enabled-' + e.name,
            }),
          ),
        );
      }
      var dt = n('EJl2');
      function pt(e) {
        var t = e.definitions,
          n = e.name,
          a = e.offset;
        return i.a.createElement(
          s.a.Row,
          null,
          i.a.createElement(
            s.a.Cell,
            {
              className: f()(dt.cell, dt.fragmentCell),
              offset: a,
              placement: 'first',
              verticalAlign: 'adaptive',
              colSpan: 2,
              'data-section-name': n,
              checkableTitle: !0,
            },
            t.map(function (e) {
              return i.a.createElement(
                'div',
                { className: dt.item, key: e.id, 'data-section-name': e.id },
                i.a.createElement(ft, { definition: e }),
              );
            }),
          ),
        );
      }
      function mt(e) {
        var t = e.definition,
          n = e.offset;
        return i.a.createElement(
          s.a.Row,
          null,
          i.a.createElement(
            s.a.Cell,
            {
              className: dt.cell,
              offset: n,
              placement: 'first',
              verticalAlign: 'adaptive',
              colSpan: 2,
              checkableTitle: !0,
            },
            i.a.createElement(ft, { definition: t }),
          ),
        );
      }
      function ft(e) {
        var t = e.definition,
          n = t.id,
          a = t.properties,
          r = a.disabled,
          o = a.checked,
          l = a.color,
          s = a.level,
          u = a.width,
          d = a.style,
          p = t.title,
          m = t.widthValues,
          h = t.styleValues,
          b = c({ property: o, defaultValue: !0 })[0],
          v = c({ property: r, defaultValue: !1 })[0],
          E = v || !b;
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(g, {
            name: 'is-enabled-' + n,
            className: f()(p && dt.withTitle),
            title: p && i.a.createElement('span', { className: dt.title }, p),
            property: o,
            disabled: v,
          }),
          s &&
            i.a.createElement(R, {
              className: f()(dt.input, dt.control),
              property: s,
              disabled: E,
            }),
          l &&
            i.a.createElement(Y, {
              className: dt.control,
              disabled: E,
              color: l,
              thickness: u,
              thicknessItems: m,
            }),
          d &&
            i.a.createElement(w, {
              className: dt.control,
              property: d,
              disabled: E,
              allowedLineStyles: h,
            }),
        );
      }
      var ht = n('ZcEB');
      function bt(e) {
        var t = e.definition,
          n = t.id,
          a = t.properties,
          r = a.option1,
          o = a.option2,
          l = a.checked,
          s = a.disabled,
          u = t.title,
          d = t.optionsItems1,
          p = t.optionsItems2,
          m = e.offset,
          f = c({ property: l, defaultValue: !0 })[0],
          h = c({ property: s, defaultValue: !1 })[0],
          b = e.disabled || !f;
        return i.a.createElement(
          E,
          { id: n, offset: m, checked: l, title: u, disabled: e.disabled || h },
          i.a.createElement(
            le,
            { className: ht.twoOptions },
            i.a.createElement(Ne, {
              className: ht.dropdown,
              menuClassName: ht.menu,
              property: r,
              disabled: b,
              options: d,
              'data-name': 'two-options-dropdown-1',
            }),
            i.a.createElement(Ne, {
              className: ht.dropdown,
              menuClassName: ht.menu,
              property: o,
              disabled: b,
              options: p,
              'data-name': 'two-options-dropdown-2',
            }),
          ),
        );
      }
      function vt(e) {
        var t,
          n = e.definition;
        if (
          ((function (e) {
            Object(r.useEffect)(
              function () {
                if (void 0 !== e) {
                  var t = Object(a.__assign)({}, e.properties);
                  return (
                    Object.entries(t).forEach(function (n) {
                      var a = n[0],
                        r = n[1];
                      void 0 !== r &&
                        r.subscribe(t, function () {
                          return l.a.logNormal(
                            'Property "' +
                              a +
                              '" in definition "' +
                              e.id +
                              '" was updated to value "' +
                              r.value() +
                              '"',
                          );
                        });
                    }),
                    function () {
                      Object.entries(t).forEach(function (e) {
                        var n = e[1];
                        void 0 !== n && n.unsubscribeAll(t);
                      });
                    }
                  );
                }
              },
              [e],
            );
          })(Object(o.z)(n) ? void 0 : n),
          Object(o.z)(n))
        ) {
          var c = n.definitions;
          return i.a.createElement(
            r.Fragment,
            null,
            n.title && i.a.createElement(ut, { title: n.title, name: n.id }),
            c &&
              ((t = c.value()),
              t.reduce(function (e, t) {
                if (Object(o.z)(t) || 'leveledLine' !== t.propType) e.push(t);
                else {
                  var n = e[e.length - 1];
                  Array.isArray(n) ? n.push(t) : e.push([t]);
                }
                return e;
              }, [])).map(function (t) {
                return Array.isArray(t)
                  ? i.a.createElement(pt, {
                      key: t[0].id,
                      name: n.id,
                      definitions: t,
                    })
                  : i.a.createElement(
                      vt,
                      Object(a.__assign)({ key: t.id }, e, { definition: t }),
                    );
              }),
            'general' === n.groupType &&
              i.a.createElement(s.a.GroupSeparator, { size: 1 }),
          );
        }
        switch (n.propType) {
          case 'line':
            return i.a.createElement(
              de,
              Object(a.__assign)({}, e, { definition: n }),
            );
          case 'checkable':
            return i.a.createElement(
              _,
              Object(a.__assign)({}, e, { definition: n }),
            );
          case 'color':
            return i.a.createElement(
              pe,
              Object(a.__assign)({}, e, { definition: n }),
            );
          case 'transparency':
            return i.a.createElement(
              ge,
              Object(a.__assign)({}, e, { definition: n }),
            );
          case 'twoColors':
            return i.a.createElement(
              _e,
              Object(a.__assign)({}, e, { definition: n }),
            );
          case 'number':
            return i.a.createElement(
              Se,
              Object(a.__assign)({}, e, { definition: n }),
            );
          case 'symbol':
            return i.a.createElement(
              Je,
              Object(a.__assign)({}, e, { definition: n }),
            );
          case 'text':
            return i.a.createElement(
              He,
              Object(a.__assign)({}, e, { definition: n }),
            );
          case 'checkableSet':
            return i.a.createElement(
              je,
              Object(a.__assign)({}, e, { definition: n }),
            );
          case 'options':
            return i.a.createElement(
              nt,
              Object(a.__assign)({}, e, { definition: n }),
            );
          case 'range':
            return i.a.createElement(
              ct,
              Object(a.__assign)({}, e, { definition: n }),
            );
          case 'coordinates':
            return i.a.createElement(
              et,
              Object(a.__assign)({}, e, { definition: n }),
            );
          case 'twoOptions':
            return i.a.createElement(
              bt,
              Object(a.__assign)({}, e, { definition: n }),
            );
          case 'leveledLine':
            return i.a.createElement(
              mt,
              Object(a.__assign)({}, e, { definition: n }),
            );
          default:
            return null;
        }
      }
      n.d(t, 'a', function () {
        return vt;
      });
    },
    eG6P: function (e, t, n) {
      e.exports = { wrap: 'wrap-3VxI_YR4' };
    },
    eU7S: function (e, t, n) {
      e.exports = {
        line: 'line-Xef4M09H',
        control: 'control-3967I_nS',
        valueInput: 'valueInput-1ujFKjiy',
        valueUnit: 'valueUnit-WuH55OtL',
        input: 'input-3Sw_tvuz',
      };
    },
    gla1: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      });
      var a = n('q1tI'),
        r = function () {
          return Object(a.useReducer)(function (e, t) {
            return e + 1;
          }, 0)[1];
        };
    },
    'i/MG': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return u;
      });
      var a = n('mrSG'),
        r = (n('YFKU'), n('q1tI')),
        i = n('TSYQ'),
        o = n('Iivm'),
        l = n('To8B'),
        c = n('kXJy'),
        s = { remove: window.t('Remove') };
      function u(e) {
        var t = e.className,
          n = e.isActive,
          u = e.onClick,
          d = e.title,
          p = e.hidden,
          m = e['data-name'],
          f = void 0 === m ? 'remove-button' : m,
          h = Object(a.__rest)(e, [
            'className',
            'isActive',
            'onClick',
            'title',
            'hidden',
            'data-name',
          ]);
        return r.createElement(
          o.Icon,
          Object(a.__assign)({}, h, {
            'data-name': f,
            className: i(
              c.button,
              'apply-common-tooltip',
              n && c.active,
              p && c.hidden,
              t,
            ),
            icon: l,
            onClick: u,
            title: d || s.remove,
          }),
        );
      }
    },
    jAqK: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M4.5 13.5H24m-19.5 0L8 17m-3.5-3.5L8 10"/></svg>';
    },
    jggR: function (e, t, n) {
      e.exports = {
        container: 'container-2IsTVQ49',
        focused: 'focused-1QCDvHCH',
        readonly: 'readonly-3TW7INT8',
        disabled: 'disabled-Ju2phm9i',
        'size-small': 'size-small-1qV-ZeVg',
        'size-medium': 'size-medium-2lM1uGoO',
        'size-large': 'size-large-1NHR4lnE',
        'font-size-small': 'font-size-small-3eSt8Wl7',
        'font-size-medium': 'font-size-medium-3lwViqM8',
        'font-size-large': 'font-size-large-uTIroj7p',
        'border-none': 'border-none-2LzWNqL7',
        shadow: 'shadow-AN9BmmG5',
        'border-thin': 'border-thin-2QjYg4o3',
        'border-thick': 'border-thick-3XUkSewU',
        'intent-default': 'intent-default-1A7eWGEJ',
        'intent-success': 'intent-success-1Oz2EYaq',
        'intent-warning': 'intent-warning-2CIKi-Sg',
        'intent-danger': 'intent-danger-34bo52Yx',
        'intent-primary': 'intent-primary-30cIvmgZ',
        'corner-top-left': 'corner-top-left-3jqic47X',
        'corner-top-right': 'corner-top-right-YZ3WAu2k',
        'corner-bottom-right': 'corner-bottom-right-3_DA5L_W',
        'corner-bottom-left': 'corner-bottom-left-3lFAslf6',
        textarea: 'textarea-bk9MQutx',
      };
    },
    kJwE: function (e, t, n) {
      e.exports = {
        lineWidthSelect: 'lineWidthSelect-3ziEuHcz',
        bar: 'bar-37_AfcZG',
        isActive: 'isActive-dohf9HfR',
        item: 'item-2zVrXM_1',
      };
    },
    kXJy: function (e, t, n) {
      e.exports = {
        button: 'button-1scLo53s',
        active: 'active-2T0ofIIp',
        hidden: 'hidden-2GRQzIQ1',
      };
    },
    lB1i: function (e, t, n) {
      e.exports = { wrap: 'wrap-K_N9jM1e', disabled: 'disabled-2QK47L8c' };
    },
    oWdB: function (e, t, n) {
      e.exports = {
        twoColors: 'twoColors-iyrZVlk4',
        colorPicker: 'colorPicker-3hYQ60NL',
      };
    },
    rRJX: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M14 21h-3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3c2 0 4 1 4 3 0 1 0 2-1.5 3 1.5.5 2.5 2 2.5 4 0 2.75-2.638 4-5 4zM12 9l.004 3c.39.026.82 0 1.25 0C14.908 12 16 11.743 16 10.5c0-1.1-.996-1.5-2.5-1.5-.397 0-.927-.033-1.5 0zm0 5v5h1.5c1.5 0 3.5-.5 3.5-2.5S15 14 13.5 14c-.5 0-.895-.02-1.5 0z"/></svg>';
    },
    vqb8: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      });
      var a = n('q1tI'),
        r = function (e) {
          var t = 'watchedValue' in e ? e.watchedValue : void 0,
            n = 'defaultValue' in e ? e.defaultValue : e.watchedValue.value(),
            r = Object(a.useState)(t ? t.value() : n),
            i = r[0],
            o = r[1];
          return (
            Object(a.useEffect)(
              function () {
                if (t) {
                  o(t.value());
                  var e = function (e) {
                    return o(e);
                  };
                  return (
                    t.subscribe(e),
                    function () {
                      return t.unsubscribe(e);
                    }
                  );
                }
                return function () {};
              },
              [t],
            ),
            i
          );
        };
    },
    vxCt: function (e, t, n) {
      e.exports = { checkbox: 'checkbox-1So8p7GP', title: 'title-1uAaOORo' };
    },
    ybVX: function (e, t, n) {
      'use strict';
      n.d(t, 'b', function () {
        return i;
      }),
        n.d(t, 'a', function () {
          return o;
        });
      var a = n('q1tI'),
        r = n.n(a),
        i = r.a.createContext({}),
        o = r.a.createContext({});
    },
    yqnI: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      });
      var a = n('uOxu'),
        r = Object(a.getLogger)('Platform.GUI.PropertyDefinitionTrace');
    },
  },
]);
