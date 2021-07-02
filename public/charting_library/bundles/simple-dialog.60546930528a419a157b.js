(window.webpackJsonp = window.webpackJsonp || []).push([
  ['simple-dialog'],
  {
    '+EG+': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      }),
        n.d(t, 'b', function () {
          return i;
        });
      var a = n('mrSG'),
        r = n('q1tI'),
        o = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.c)(t, e),
            (t.prototype.shouldComponentUpdate = function () {
              return !1;
            }),
            (t.prototype.render = function () {
              return r.createElement('div', {
                style: { position: 'fixed', zIndex: 150, left: 0, top: 0 },
                ref: this.props.reference,
              });
            }),
            t
          );
        })(r.Component),
        i = r.createContext(null);
    },
    '+l/S': function (e, t, n) {},
    '/KDZ': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      });
      var a = n('mrSG'),
        r = n('q1tI'),
        o = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._handleChange = function () {
                n.forceUpdate();
              }),
              (n.state = { query: window.matchMedia(n.props.rule) }),
              n
            );
          }
          return (
            Object(a.c)(t, e),
            (t.prototype.componentDidMount = function () {
              this._subscribe(this.state.query);
            }),
            (t.prototype.componentDidUpdate = function (e, t) {
              this.state.query !== t.query &&
                (this._unsubscribe(t.query), this._subscribe(this.state.query));
            }),
            (t.prototype.componentWillUnmount = function () {
              this._unsubscribe(this.state.query);
            }),
            (t.prototype.render = function () {
              return this.props.children(this.state.query.matches);
            }),
            (t.getDerivedStateFromProps = function (e, t) {
              return e.rule !== t.query.media
                ? { query: window.matchMedia(e.rule) }
                : null;
            }),
            (t.prototype._subscribe = function (e) {
              e.addListener(this._handleChange);
            }),
            (t.prototype._unsubscribe = function (e) {
              e.removeListener(this._handleChange);
            }),
            t
          );
        })(r.PureComponent);
    },
    '0sCh': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      });
      var a = n('q1tI'),
        r = function () {
          var e = Object(a.useRef)(!1);
          return (
            Object(a.useEffect)(function () {
              return (
                (e.current = !0),
                function () {
                  e.current = !1;
                }
              );
            }, []),
            e
          );
        };
    },
    '2A9e': function (e) {
      e.exports = JSON.parse(
        '{"button":"button-1iktpaT1","content":"content-2PGssb8d","noOutline":"noOutline-d9Yp4qvi","appearance-default":"appearance-default-dMjF_2Hu","intent-primary":"intent-primary-1-IOYcbg","intent-success":"intent-success-25a4XZXM","intent-default":"intent-default-2ZbSqQDs","intent-warning":"intent-warning-24j5HMi0","intent-danger":"intent-danger-1EETHCla","appearance-stroke":"appearance-stroke-12lxiUSM","appearance-text":"appearance-text-DqKJVT3U","appearance-inverse":"appearance-inverse-r1Y2JQg_","size-s":"size-s-3mait84m","size-m":"size-m-2G7L7Qat","size-l":"size-l-2NEs9_xt","size-p":"size-p-3D4rn3v0","full-width":"full-width-1wU8ljjC","with-icon":"with-icon-yumghDr-","icon":"icon-1grlgNdV"}',
      );
    },
    '3tYt': function (e, t, n) {
      e.exports = { label: 'label-2I0GsvR7', input: 'input-VwTVT0aO' };
    },
    '6KyJ': function (e, t, n) {
      'use strict';
      var a,
        r = n('q1tI'),
        o = n('TSYQ'),
        i = n('K9GE'),
        l = n('YZ9j');
      n('O7m7');
      !(function (e) {
        (e[(e.Initial = 0)] = 'Initial'),
          (e[(e.Appear = 1)] = 'Appear'),
          (e[(e.Active = 2)] = 'Active');
      })(a || (a = {}));
      class c extends r.PureComponent {
        constructor(e) {
          super(e),
            (this._stateChangeTimeout = null),
            (this.state = { state: a.Initial });
        }
        render() {
          const { className: e, color: t = 'black' } = this.props,
            n = o(l.item, { [l[t]]: Boolean(t) });
          return r.createElement(
            'span',
            { className: o(l.loader, e, this._getStateClass()) },
            r.createElement('span', { className: n }),
            r.createElement('span', { className: n }),
            r.createElement('span', { className: n }),
          );
        }
        componentDidMount() {
          this.setState({ state: a.Appear }),
            (this._stateChangeTimeout = setTimeout(() => {
              this.setState({ state: a.Active });
            }, 2 * i.c));
        }
        componentWillUnmount() {
          this._stateChangeTimeout &&
            (clearTimeout(this._stateChangeTimeout),
            (this._stateChangeTimeout = null));
        }
        _getStateClass() {
          switch (this.state.state) {
            case a.Initial:
              return l['loader-initial'];
            case a.Appear:
              return l['loader-appear'];
            default:
              return '';
          }
        }
      }
      n.d(t, 'a', function () {
        return c;
      });
    },
    '8Rai': function (e, t, n) {
      'use strict';
      var a = n('q1tI'),
        r = function (e, t) {
          var n = void 0 === t ? {} : t,
            a = n.bubbles,
            r = void 0 !== a && a,
            o = n.cancelable,
            i = void 0 !== o && o,
            l = n.detail,
            c = void 0 === l ? null : l;
          try {
            return new window.CustomEvent(e, {
              bubbles: r,
              cancelable: i,
              detail: c,
            });
          } catch (s) {
            var u = document.createEvent('CustomEvent');
            return u.initCustomEvent(e, r, i, c), u;
          }
        },
        o = n('R5JZ');
      function i(e) {
        var t = e.click,
          n = e.mouseDown,
          i = e.touchEnd,
          l = e.touchStart,
          c = e.handler,
          u = e.reference,
          s = e.ownerDocument,
          d = void 0 === s ? document : s,
          m = Object(a.useRef)(null),
          p = Object(a.useRef)(new r('timestamp').timeStamp);
        return (
          Object(a.useLayoutEffect)(
            function () {
              var e = { click: t, mouseDown: n, touchEnd: i, touchStart: l },
                a = u ? u.current : m.current;
              return Object(o.a)(p.current, a, c, d, e);
            },
            [t, n, i, l, c],
          ),
          u || m
        );
      }
      n.d(t, 'a', function () {
        return i;
      });
    },
    ASyk: function (e, t, n) {
      e.exports = {
        'tablet-normal-breakpoint': 'screen and (max-width: 768px)',
        'small-height-breakpoint': 'screen and (max-height: 360px)',
        'tablet-small-breakpoint': 'screen and (max-width: 419px)',
      };
    },
    AiMB: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return u;
      }),
        n.d(t, 'b', function () {
          return s;
        });
      var a = n('mrSG'),
        r = n('q1tI'),
        o = n('i8i4'),
        i = n('e3/o'),
        l = n('jAh7'),
        c = n('+EG+'),
        u = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t._uuid = Object(i.guid)()), t;
          }
          return (
            Object(a.c)(t, e),
            (t.prototype.componentWillUnmount = function () {
              this._manager().removeWindow(this._uuid);
            }),
            (t.prototype.render = function () {
              var e = this._manager().ensureWindow(
                this._uuid,
                this.props.layerOptions,
              );
              return (
                (e.style.top = this.props.top || ''),
                (e.style.bottom = this.props.bottom || ''),
                (e.style.left = this.props.left || ''),
                (e.style.right = this.props.right || ''),
                (e.style.pointerEvents = this.props.pointerEvents || ''),
                o.createPortal(
                  r.createElement(
                    s.Provider,
                    { value: this },
                    this.props.children,
                  ),
                  e,
                )
              );
            }),
            (t.prototype.moveToTop = function () {
              this._manager().moveToTop(this._uuid);
            }),
            (t.prototype._manager = function () {
              return null === this.context
                ? Object(l.getRootOverlapManager)()
                : this.context;
            }),
            (t.contextType = c.b),
            t
          );
        })(r.PureComponent),
        s = r.createContext(null);
    },
    EcUf: function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n('mrSG'),
        r = n('q1tI'),
        o = n.n(r),
        i = n('YFKU'),
        l = n('TSYQ'),
        c = n('Iivm'),
        u = n('WXjp'),
        s = n('/3z9'),
        d = n('/KDZ'),
        m = n('uhCe'),
        p = n('tmL0'),
        f = n('mwqF'),
        h = n('6KyJ'),
        v = n('Eyy1'),
        b = n('0sCh'),
        g = n('+EG+'),
        y = o.a.createContext({
          isSmallTablet: !1,
          dialogCloseHandler: function () {},
        }),
        w = n('G4Ee');
      function E(e) {
        var t = e.disabled,
          n = e.name,
          a = e.title,
          i = e.appearance,
          c = e.intent,
          u = e.handler,
          s = e.reference,
          d = Object(r.useContext)(y),
          m = d.isSmallTablet,
          p = d.dialogCloseHandler,
          E = Object(v.ensureNotNull)(Object(r.useContext)(g.b)),
          O = Object(b.a)(),
          C = Object(r.useState)(!1),
          S = C[0],
          j = C[1];
        return o.a.createElement(
          f.a,
          {
            disabled: t,
            reference: s,
            className: l(w.actionButton, m && w.small),
            name: n,
            size: m ? 'l' : void 0,
            appearance: i,
            intent: c,
            onClick: function () {
              if (S) return;
              var e = u({ dialogClose: p, innerManager: E });
              e &&
                (j(!0),
                e.then(function () {
                  O.current && j(!1);
                }));
            },
          },
          o.a.createElement('span', { className: l(S && w.hiddenTitle) }, a),
          S && o.a.createElement(h.a, null),
        );
      }
      var O = n('zztK'),
        C = n('yKGJ');
      function S(e) {
        var t = e.title,
          n = e.onClose,
          i = e.actions,
          f = e.dataName,
          h = e.popupDialogClassName,
          v = e.backdrop,
          b = Object(r.useState)(!0),
          g = b[0],
          w = b[1],
          S = Object(r.useRef)(null);
        return o.a.createElement(d.a, { rule: m.a.TabletSmall }, function (r) {
          return o.a.createElement(
            y.Provider,
            { value: { isSmallTablet: r, dialogCloseHandler: n } },
            o.a.createElement(
              u.a,
              {
                className: l(C.popupDialog, h),
                isOpened: g,
                backdrop: v,
                onClickBackdrop: x,
                onClickOutside: x,
                onKeyDown: j,
                autofocus: !0,
                fixedBody: !0,
              },
              o.a.createElement(
                'div',
                { className: C.wrap, 'data-name': f },
                o.a.createElement(
                  'div',
                  { className: l(C.main, r && C.small) },
                  o.a.createElement(
                    'div',
                    { className: l(C.title, r && C.small) },
                    t,
                  ),
                  (function (t) {
                    if ('html' in e)
                      return o.a.createElement(p.a, {
                        className: l(C.content, t && C.small, C.html),
                        dangerouslySetInnerHTML: { __html: e.html },
                      });
                    if ('content' in e)
                      return o.a.createElement(
                        p.a,
                        { className: l(C.content, t && C.small) },
                        e.content,
                      );
                    return null;
                  })(r),
                  i &&
                    i.length > 0 &&
                    o.a.createElement(
                      'div',
                      { className: l(C.footer, r && C.small) },
                      i.map(function (e, t) {
                        return o.a.createElement(
                          E,
                          Object(a.a)({}, e, {
                            key: e.name,
                            reference: 0 === t ? S : void 0,
                          }),
                        );
                      }),
                    ),
                ),
                o.a.createElement(c.a, {
                  className: l(C.close, r && C.small),
                  icon: O,
                  onClick: x,
                  'data-name': 'close',
                  'data-role': 'button',
                }),
              ),
            ),
          );
        });
        function j(e) {
          switch (Object(s.hashFromEvent)(e)) {
            case 27:
              g && (e.preventDefault(), n());
              break;
            case 13:
              if (g && i && i.length) {
                e.preventDefault();
                var t = S.current;
                t && t.click();
              }
          }
        }
        function x() {
          w(!1), n();
        }
      }
      function j(e) {
        return 'html' in e ? { html: e.html } : { content: e.text };
      }
      var x = n('3G1X'),
        T = n('3tYt');
      function k(e) {
        var t = e.maxLength,
          n = e.value,
          a = e.onValueChange,
          i = e.nameInputRef,
          l = Object(r.useContext)(y).isSmallTablet,
          c = o.a.useRef(null);
        return (
          Object(r.useLayoutEffect)(function () {
            c.current && c.current.select();
          }, []),
          o.a.createElement(
            o.a.Fragment,
            null,
            (function () {
              if ('content' in e)
                return o.a.createElement(
                  'div',
                  { className: T.label },
                  e.content,
                );
              if ('html' in e)
                return o.a.createElement('div', {
                  className: T.label,
                  dangerouslySetInnerHTML: { __html: e.html },
                });
              return null;
            })(),
            o.a.createElement(x.b, {
              inputClassName: T.input,
              autoComplete: 'no',
              size: l ? 'large' : void 0,
              reference: function (e) {
                (c.current = e), i && (i.current = e);
              },
              value: n,
              maxLength: t,
              onChange: function (e) {
                a(e.currentTarget.value);
              },
            }),
          )
        );
      }
      function N(e) {
        return Boolean(e.trim());
      }
      var _ = n('i8i4'),
        I = n.n(_),
        D = new ((function () {
          function e() {
            this._storage = new Map();
          }
          return (
            (e.prototype.setAsOpened = function (e, t) {
              this._storage.set(e, t);
            }),
            (e.prototype.setAsClosed = function (e) {
              this._storage.delete(e);
            }),
            (e.prototype.isOpened = function (e) {
              return this._storage.has(e);
            }),
            (e.prototype.getDialogPayload = function (e) {
              return this._storage.get(e);
            }),
            e
          );
        })())();
      n.d(t, 'confirmModule', function () {
        return L;
      }),
        n.d(t, 'renameModule', function () {
          return q;
        }),
        n.d(t, 'warningModule', function () {
          return M;
        }),
        n.d(t, 'showSimpleDialog', function () {
          return B;
        });
      var L = function (e) {
          var t = e.title,
            n = e.onClose,
            r = void 0 === n ? function () {} : n,
            l = e.mainButtonText,
            c = e.mainButtonIntent,
            u = e.cancelButtonText,
            s = e.onConfirm,
            d = e.onCancel,
            m = j(e);
          return o.a.createElement(
            S,
            Object(a.a)({}, m, {
              title: t || Object(i.t)('Confirmation'),
              onClose: r,
              actions: [
                {
                  name: 'yes',
                  title: l || Object(i.t)('Yes'),
                  intent: c || 'success',
                  handler: s,
                },
                {
                  name: 'no',
                  title: u || Object(i.t)('No'),
                  appearance: 'stroke',
                  intent: 'default',
                  handler: function (e) {
                    d ? d(e) : e.dialogClose();
                  },
                },
              ],
              dataName: 'confirm-dialog',
            }),
          );
        },
        q = function (e) {
          var t = e.title,
            n = e.maxLength,
            l = e.initValue,
            c = e.onClose,
            u = void 0 === c ? function () {} : c,
            s = e.mainButtonText,
            d = e.mainButtonIntent,
            m = e.cancelButtonText,
            p = e.validator,
            f = void 0 === p ? N : p,
            h = e.onRename,
            v = Object(r.useRef)(null),
            b = Object(r.useState)(l || ''),
            g = b[0],
            y = b[1],
            w = Object(r.useState)(function () {
              return f(g);
            }),
            E = w[0],
            O = w[1],
            C = j(e);
          return o.a.createElement(S, {
            title: t || Object(i.t)('Rename'),
            content: o.a.createElement(
              k,
              Object(a.a)({}, C, {
                nameInputRef: v,
                maxLength: n,
                value: g,
                onValueChange: function (e) {
                  y(e), O(f(e));
                },
              }),
            ),
            onClose: u,
            actions: [
              {
                disabled: !E,
                name: 'save',
                title: s || Object(i.t)('Save'),
                intent: d || 'primary',
                handler: function (e) {
                  var t = e.dialogClose,
                    n = e.innerManager;
                  return h({
                    newValue: g,
                    focusInput: x,
                    dialogClose: t,
                    innerManager: n,
                  });
                },
              },
              {
                name: 'cancel',
                title: m || Object(i.t)('Cancel'),
                appearance: 'stroke',
                intent: 'default',
                handler: function (e) {
                  (0, e.dialogClose)();
                },
              },
            ],
            dataName: 'rename-dialog',
          });
          function x() {
            v.current && v.current.focus();
          }
        },
        M = function (e) {
          var t = e.title,
            n = e.buttonText,
            r = e.onClose,
            l = void 0 === r ? function () {} : r,
            c = j(e);
          return o.a.createElement(
            S,
            Object(a.a)({}, c, {
              title: t || Object(i.t)('Warning'),
              onClose: l,
              actions: [
                {
                  name: 'ok',
                  title: n || Object(i.t)('Ok'),
                  handler: function (e) {
                    (0, e.dialogClose)();
                  },
                },
              ],
              dataName: 'warning-dialog',
            }),
          );
        },
        B = function (e, t, n) {
          var r = e.title + '_' + ('text' in e ? e.text : e.html);
          if (D.isOpened(r))
            return Object(v.ensureDefined)(D.getDialogPayload(r)).closeHandler;
          var i = document.createElement('div'),
            l = function () {
              var t;
              null === (t = e.onClose) || void 0 === t || t.call(e),
                I.a.unmountComponentAtNode(i),
                D.setAsClosed(r);
            };
          return (
            I.a.render(
              o.a.createElement(
                g.b.Provider,
                { value: n || null },
                o.a.createElement(t, Object(a.a)({}, e, { onClose: l })),
              ),
              i,
            ),
            D.setAsOpened(r, { closeHandler: l }),
            l
          );
        };
    },
    G4Ee: function (e, t, n) {
      e.exports = {
        actionButton: 'actionButton-VR7BbSxl',
        small: 'small-enkOWPKx',
        hiddenTitle: 'hiddenTitle-3bsOHpmw',
      };
    },
    Iivm: function (e, t, n) {
      'use strict';
      var a = n('mrSG'),
        r = n('q1tI');
      const o = r.forwardRef((e, t) => {
        const { icon: n = '' } = e,
          o = Object(a.e)(e, ['icon']);
        return r.createElement(
          'span',
          Object.assign({}, o, {
            ref: t,
            dangerouslySetInnerHTML: { __html: n },
          }),
        );
      });
      n.d(t, 'a', function () {
        return o;
      });
    },
    O7m7: function (e, t, n) {},
    QpNh: function (e, t, n) {
      'use strict';
      function a(e) {
        for (
          var t = {}, n = 0, a = Object.entries(e).filter(r);
          n < a.length;
          n++
        ) {
          var o = a[n],
            i = o[0],
            l = o[1];
          t[i] = l;
        }
        return t;
      }
      function r(e) {
        var t = e[0],
          n = e[1];
        return 0 === t.indexOf('data-') && 'string' == typeof n;
      }
      n.d(t, 'a', function () {
        return a;
      });
    },
    R5JZ: function (e, t, n) {
      'use strict';
      function a(e, t, n, a, r) {
        function o(r) {
          if (!(e > r.timeStamp)) {
            var o = r.target;
            void 0 !== n &&
              null !== t &&
              null !== o &&
              o.ownerDocument === a &&
              (t.contains(o) || n(r));
          }
        }
        return (
          r.click && a.addEventListener('click', o, !1),
          r.mouseDown && a.addEventListener('mousedown', o, !1),
          r.touchEnd && a.addEventListener('touchend', o, !1),
          r.touchStart && a.addEventListener('touchstart', o, !1),
          function () {
            a.removeEventListener('click', o, !1),
              a.removeEventListener('mousedown', o, !1),
              a.removeEventListener('touchend', o, !1),
              a.removeEventListener('touchstart', o, !1);
          }
        );
      }
      n.d(t, 'a', function () {
        return a;
      });
    },
    YZ9j: function (e) {
      e.exports = JSON.parse(
        '{"loader":"loader-8x1ZxRwP","item":"item-2-89r_cd","tv-button-loader":"tv-button-loader-23vqS1uY","black":"black-20Ytsf0V","white":"white-1ucCcc2I","gray":"gray-XDhHSS-T","loader-initial":"loader-initial-1deQDeio","loader-appear":"loader-appear-2krFtMrd"}',
      );
    },
    mwqF: function (e, t, n) {
      'use strict';
      var a = n('mrSG'),
        r = n('q1tI'),
        o = n('TSYQ');
      function i(e, t) {
        const {
          intent: n = 'primary',
          size: a = 'm',
          appearance: r = 'default',
          useFullWidth: i = !1,
          tabIndex: l = 0,
          icon: c,
          className: u,
        } = t;
        return o(
          u,
          e.button,
          e['size-' + a],
          e['intent-' + n],
          e['appearance-' + r],
          i && e['full-width'],
          -1 === l && e.noOutline,
          c && 's' !== a && e['with-icon'],
        );
      }
      var l = n('2A9e');
      n('+l/S');
      function c(e) {
        const {
            className: t,
            intent: n,
            size: c,
            appearance: u,
            disabled: s,
            useFullWidth: d,
            reference: m,
            icon: p,
            children: f,
            tabIndex: h,
          } = e,
          v = Object(a.e)(e, [
            'className',
            'intent',
            'size',
            'appearance',
            'disabled',
            'useFullWidth',
            'reference',
            'icon',
            'children',
            'tabIndex',
          ]),
          b = i(l, {
            intent: n,
            size: c,
            appearance: u,
            disabled: s,
            useFullWidth: d,
            tabIndex: h,
            icon: p,
          });
        return r.createElement(
          'button',
          Object.assign(
            { className: o(b, t), disabled: s, ref: m, tabIndex: h },
            v,
          ),
          p && 's' !== c && r.createElement('span', { className: l.icon }, p),
          r.createElement('span', { className: l.content }, f),
        );
      }
      n.d(t, 'a', function () {
        return c;
      });
    },
    tmL0: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return u;
      });
      var a = n('mrSG'),
        r = n('q1tI'),
        o = n.n(r),
        i = n('x0D+'),
        l = n('Eyy1'),
        c = n('qFKp');
      function u(e) {
        var t = e.reference,
          n = e.children,
          l = Object(a.e)(e, ['reference', 'children']),
          u = Object(r.useRef)(null),
          d = Object(r.useCallback)(
            function (e) {
              t && (t.current = e),
                c.CheckMobile.iOS() &&
                  (null !== u.current && Object(i.enableBodyScroll)(u.current),
                  (u.current = e),
                  null !== u.current &&
                    Object(i.disableBodyScroll)(u.current, {
                      allowTouchMove: s(u),
                    }));
            },
            [t],
          );
        return o.a.createElement('div', Object(a.a)({ ref: d }, l), n);
      }
      function s(e) {
        return function (t) {
          var n = Object(l.ensureNotNull)(e.current),
            a = document.activeElement;
          return (
            !n.contains(t) || (null !== a && n.contains(a) && a.contains(t))
          );
        };
      }
    },
    uhCe: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      });
      var a = n('ASyk'),
        r = {
          SmallHeight: a['small-height-breakpoint'],
          TabletSmall: a['tablet-small-breakpoint'],
          TabletNormal: a['tablet-normal-breakpoint'],
        };
    },
    'x0D+': function (e, t, n) {
      var a, r, o;
      (r = [t]),
        void 0 ===
          (o =
            'function' ==
            typeof (a = function (e) {
              'use strict';
              function t(e) {
                if (Array.isArray(e)) {
                  for (var t = 0, n = Array(e.length); t < e.length; t++)
                    n[t] = e[t];
                  return n;
                }
                return Array.from(e);
              }
              Object.defineProperty(e, '__esModule', { value: !0 });
              var n = !1;
              if ('undefined' != typeof window) {
                var a = {
                  get passive() {
                    n = !0;
                  },
                };
                window.addEventListener('testPassive', null, a),
                  window.removeEventListener('testPassive', null, a);
              }
              var r =
                  'undefined' != typeof window &&
                  window.navigator &&
                  window.navigator.platform &&
                  /iP(ad|hone|od)/.test(window.navigator.platform),
                o = [],
                i = !1,
                l = -1,
                c = void 0,
                u = void 0,
                s = function (e) {
                  return o.some(function (t) {
                    return !(
                      !t.options.allowTouchMove || !t.options.allowTouchMove(e)
                    );
                  });
                },
                d = function (e) {
                  var t = e || window.event;
                  return (
                    !!s(t.target) ||
                    1 < t.touches.length ||
                    (t.preventDefault && t.preventDefault(), !1)
                  );
                },
                m = function () {
                  setTimeout(function () {
                    void 0 !== u &&
                      ((document.body.style.paddingRight = u), (u = void 0)),
                      void 0 !== c &&
                        ((document.body.style.overflow = c), (c = void 0));
                  });
                };
              (e.disableBodyScroll = function (e, a) {
                if (r) {
                  if (!e)
                    return void console.error(
                      'disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.',
                    );
                  if (
                    e &&
                    !o.some(function (t) {
                      return t.targetElement === e;
                    })
                  ) {
                    var m = { targetElement: e, options: a || {} };
                    (o = [].concat(t(o), [m])),
                      (e.ontouchstart = function (e) {
                        1 === e.targetTouches.length &&
                          (l = e.targetTouches[0].clientY);
                      }),
                      (e.ontouchmove = function (t) {
                        var n, a, r, o;
                        1 === t.targetTouches.length &&
                          ((a = e),
                          (o = (n = t).targetTouches[0].clientY - l),
                          !s(n.target) &&
                            ((a && 0 === a.scrollTop && 0 < o) ||
                            ((r = a) &&
                              r.scrollHeight - r.scrollTop <= r.clientHeight &&
                              o < 0)
                              ? d(n)
                              : n.stopPropagation()));
                      }),
                      i ||
                        (document.addEventListener(
                          'touchmove',
                          d,
                          n ? { passive: !1 } : void 0,
                        ),
                        (i = !0));
                  }
                } else {
                  (f = a),
                    setTimeout(function () {
                      if (void 0 === u) {
                        var e = !!f && !0 === f.reserveScrollBarGap,
                          t =
                            window.innerWidth -
                            document.documentElement.clientWidth;
                        e &&
                          0 < t &&
                          ((u = document.body.style.paddingRight),
                          (document.body.style.paddingRight = t + 'px'));
                      }
                      void 0 === c &&
                        ((c = document.body.style.overflow),
                        (document.body.style.overflow = 'hidden'));
                    });
                  var p = { targetElement: e, options: a || {} };
                  o = [].concat(t(o), [p]);
                }
                var f;
              }),
                (e.clearAllBodyScrollLocks = function () {
                  r
                    ? (o.forEach(function (e) {
                        (e.targetElement.ontouchstart = null),
                          (e.targetElement.ontouchmove = null);
                      }),
                      i &&
                        (document.removeEventListener(
                          'touchmove',
                          d,
                          n ? { passive: !1 } : void 0,
                        ),
                        (i = !1)),
                      (o = []),
                      (l = -1))
                    : (m(), (o = []));
                }),
                (e.enableBodyScroll = function (e) {
                  if (r) {
                    if (!e)
                      return void console.error(
                        'enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.',
                      );
                    (e.ontouchstart = null),
                      (e.ontouchmove = null),
                      (o = o.filter(function (t) {
                        return t.targetElement !== e;
                      })),
                      i &&
                        0 === o.length &&
                        (document.removeEventListener(
                          'touchmove',
                          d,
                          n ? { passive: !1 } : void 0,
                        ),
                        (i = !1));
                  } else
                    1 === o.length && o[0].targetElement === e
                      ? (m(), (o = []))
                      : (o = o.filter(function (t) {
                          return t.targetElement !== e;
                        }));
                });
            })
              ? a.apply(t, r)
              : a) || (e.exports = o);
    },
    yKGJ: function (e, t, n) {
      e.exports = {
        popupDialog: 'popupDialog-1qPgAs4g',
        wrap: 'wrap-3vxzk9d9',
        main: 'main-3Pmr874g',
        small: 'small-3PYNDndd',
        title: 'title-1F9IKiXf',
        content: 'content-3u7RsyPo',
        html: 'html-9HXzTU4P',
        footer: 'footer-1HIWDknB',
        close: 'close-3-M9sanT',
      };
    },
    zztK: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="none"><path stroke="currentColor" stroke-width="1.2" d="M1 1l15 15m0-15L1 16"/></svg>';
    },
  },
]);
