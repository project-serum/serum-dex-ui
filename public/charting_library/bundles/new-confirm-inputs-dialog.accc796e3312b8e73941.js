(window.webpackJsonp = window.webpackJsonp || []).push([
  ['new-confirm-inputs-dialog'],
  {
    '/KDZ': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      });
      var o = n('mrSG'),
        r = n('q1tI'),
        i = (function (e) {
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
            Object(o.c)(t, e),
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
    '9dlw': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return f;
      });
      var o = n('mrSG'),
        r = n('q1tI'),
        i = n.n(r),
        c = n('i8i4'),
        s = n.n(c),
        a = (n('EsMY'), n('AiMB')),
        l = n('DTHj'),
        u = n('X0gx'),
        d = n('8Rai');
      function f(e) {
        var t = e.controller,
          n = e.children,
          c = e.isOpened,
          f = e.closeOnClickOutside,
          m = void 0 === f || f,
          v = e.doNotCloseOn,
          p = e.onClickOutside,
          h = e.onClose,
          b = Object(o.e)(e, [
            'controller',
            'children',
            'isOpened',
            'closeOnClickOutside',
            'doNotCloseOn',
            'onClickOutside',
            'onClose',
          ]),
          y = Object(r.useContext)(u.a),
          g = Object(d.a)({
            handler: function (e) {
              p && p(e);
              if (!m) return;
              if (v && e.target instanceof Node) {
                var t = s.a.findDOMNode(v);
                if (t instanceof Node && t.contains(e.target)) return;
              }
              h();
            },
            mouseDown: !0,
            touchStart: !0,
          });
        return c
          ? i.a.createElement(
              a.a,
              {
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                pointerEvents: 'none',
              },
              i.a.createElement(
                'span',
                { ref: g, style: { pointerEvents: 'auto' } },
                i.a.createElement(
                  l.a,
                  Object(o.a)({}, b, {
                    isOpened: c,
                    onClose: h,
                    onScroll: function (t) {
                      var n = e.onScroll;
                      n && n(t);
                      t.stopPropagation();
                    },
                    customCloseDelegate: y,
                    ref: t,
                  }),
                  n,
                ),
              ),
            )
          : null;
      }
    },
    Iivm: function (e, t, n) {
      'use strict';
      var o = n('mrSG'),
        r = n('q1tI');
      const i = r.forwardRef((e, t) => {
        const { icon: n = '' } = e,
          i = Object(o.e)(e, ['icon']);
        return r.createElement(
          'span',
          Object.assign({}, i, {
            ref: t,
            dangerouslySetInnerHTML: { __html: n },
          }),
        );
      });
      n.d(t, 'a', function () {
        return i;
      });
    },
    N5tr: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return d;
      }),
        n.d(t, 'b', function () {
          return v;
        });
      var o = n('mrSG'),
        r = n('q1tI'),
        i = n.n(r),
        c = n('TSYQ'),
        s = n('tWVy'),
        a = n('JWMC'),
        l = n('QpNh'),
        u = n('v1bN'),
        d = u;
      function f(e) {
        var t = e.reference,
          n = Object(o.e)(e, ['reference']),
          r = Object(o.a)(Object(o.a)({}, n), { ref: t });
        return i.a.createElement(e.href ? 'a' : 'div', r);
      }
      function m(e) {
        e.stopPropagation();
      }
      function v(e) {
        var t,
          n,
          d,
          v = e.className,
          p = e.title,
          h = e.labelRowClassName,
          b = e.shortcut,
          y = e.forceShowShortcuts,
          g = e.icon,
          w = e.isActive,
          O = e.isDisabled,
          E = e.isHovered,
          C = e.appearAsDisabled,
          S = e.label,
          _ = e.link,
          j = e.showToolboxOnHover,
          I = e.target,
          k = e.toolbox,
          M = e.reference,
          N = e.onMouseOut,
          q = e.onMouseOver,
          x = e.theme,
          T = void 0 === x ? u : x,
          D = Object(l.a)(e),
          A = Object(r.useRef)(null);
        return i.a.createElement(
          f,
          Object(o.a)({}, D, {
            className: c(
              v,
              T.item,
              g && T.withIcon,
              ((t = {}),
              (t[T.isActive] = w),
              (t[T.isDisabled] = O || C),
              (t[T.hovered] = E),
              t),
            ),
            title: p,
            href: _,
            target: I,
            reference: function (e) {
              (A.current = e), M && M(e);
            },
            onClick: function (t) {
              var n = e.dontClosePopup,
                o = e.onClick,
                r = e.onClickArg,
                i = e.trackEventObject;
              if (O) return;
              i && Object(a.trackEvent)(i.category, i.event, i.label);
              o && o(r, t);
              n || Object(s.b)();
            },
            onContextMenu: function (t) {
              var n = e.trackEventObject,
                o = e.trackRightClick;
              n &&
                o &&
                Object(a.trackEvent)(
                  n.category,
                  n.event,
                  n.label + '_rightClick',
                );
            },
            onMouseUp: function (t) {
              var n = e.trackEventObject,
                o = e.trackMouseWheelClick;
              if (1 === t.button && _ && n) {
                var r = n.label;
                o && (r += '_mouseWheelClick'),
                  Object(a.trackEvent)(n.category, n.event, r);
              }
            },
            onMouseOver: q,
            onMouseOut: N,
          }),
          void 0 !== g &&
            i.a.createElement('div', {
              className: T.icon,
              dangerouslySetInnerHTML: { __html: g },
            }),
          i.a.createElement(
            'div',
            { className: c(T.labelRow, h) },
            i.a.createElement('div', { className: T.label }, S),
          ),
          (void 0 !== b || y) &&
            i.a.createElement(
              'div',
              { className: T.shortcut },
              (d = b) && d.split('+').join(' + '),
            ),
          void 0 !== k &&
            i.a.createElement(
              'div',
              {
                onClick: m,
                className: c(T.toolbox, ((n = {}), (n[T.showOnHover] = j), n)),
              },
              k,
            ),
        );
      }
    },
    iqv3: function (e, t, n) {
      'use strict';
      n.r(t);
      var o = n('i8i4'),
        r = n('q1tI'),
        i = n.n(r),
        c = (n('bSeV'), n('YFKU'), n('ycFu')),
        s = n('tWVy'),
        a = n('tmL0'),
        l = n('5Ssy'),
        u = n('tc+8'),
        d = n.n(u),
        f = n('aIyQ'),
        m = n.n(f),
        v = n('qFKp'),
        p = n('jOdQ');
      function h(e) {
        var t = e.title,
          n = e.studyMetaInfo,
          o = e.model,
          u = e.confirmInputsType,
          f = e.onCancel,
          h = e.onSubmit,
          b = e.onClose,
          y = Object(r.useState)(!0),
          g = y[0],
          w = y[1],
          O = Object(r.useMemo)(function () {
            var e = Object.assign({}, n.defaults.inputs);
            return new d.a({ inputs: e });
          }, []),
          E = Object(r.useMemo)(function () {
            var e = new m.a();
            return {
              isInputsStudy: !0,
              symbolsResolved: function () {
                return e;
              },
              resolvedSymbolInfoBySymbol: function () {
                return null;
              },
              tempProperties: O,
            };
          }, []),
          C = Object(r.useRef)(null);
        return (
          Object(r.useEffect)(
            function () {
              if (!v.CheckMobile.any() && g && 'symbol' === u && C.current) {
                var e = C.current.querySelector('input');
                e && e.focus();
              }
            },
            [g],
          ),
          i.a.createElement(c.a, {
            dataName: 'confirm-inputs-dialog',
            title: t,
            isOpened: g,
            onSubmit: function () {
              h(O.state().inputs), _();
            },
            onCancel: f,
            onClickOutside: _,
            onClose: _,
            render: function () {
              return i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement('div', { className: p.separator }),
                i.a.createElement(
                  a.a,
                  { className: p.scrollable, onScroll: S },
                  i.a.createElement(l.a, {
                    reference: C,
                    property: O,
                    model: o,
                    study: E,
                    inputs: j(),
                  }),
                ),
              );
            },
            defaultActionOnClose: 'none',
            submitButtonText: window.t('Apply'),
            submitOnEnterKey: !1,
          })
        );
        function S() {
          s.a.fire();
        }
        function _() {
          w(!1), b();
        }
        function j() {
          return 'symbol' === u
            ? n.inputs.filter(function (e) {
                return e.id === n.symbolInputId();
              })
            : n.inputs.filter(function (e) {
                return e.confirm;
              });
        }
      }
      n.d(t, 'ConfirmInputsDialogRenderer', function () {
        return b;
      });
      var b = (function () {
        function e(e, t, n, r, i, c) {
          var s = this;
          (this._container = document.createElement('div')),
            (this._handleClose = function () {
              o.unmountComponentAtNode(s._container), s._onClose();
            }),
            (this._title = e),
            (this._studyMetaInfo = t),
            (this._model = n),
            (this._confirmInputsType = r),
            (this._onSubmit = i),
            (this._onClose = c);
        }
        return (
          (e.prototype.show = function () {
            o.render(
              r.createElement(h, {
                title: this._title,
                studyMetaInfo: this._studyMetaInfo,
                model: this._model,
                confirmInputsType: this._confirmInputsType,
                onSubmit: this._onSubmit,
                onCancel: function () {},
                onClose: this._handleClose,
              }),
              this._container,
            );
          }),
          e
        );
      })();
    },
    jOdQ: function (e, t, n) {
      e.exports = {
        separator: 'separator-1fBbiGH4',
        scrollable: 'scrollable-1was6mON',
      };
    },
    v1bN: function (e, t, n) {
      e.exports = {
        'tablet-small-breakpoint': 'screen and (max-width: 419px)',
        item: 'item-2xPVYue0',
        hovered: 'hovered-1uf45E05',
        isDisabled: 'isDisabled-1wLqKupj',
        isActive: 'isActive-2j-GhQs_',
        shortcut: 'shortcut-30pveiCO',
        toolbox: 'toolbox-3ulPxfe-',
        withIcon: 'withIcon-1xBjf-oB',
        icon: 'icon-2Qm7YIcz',
        labelRow: 'labelRow-3Q0rdE8-',
        label: 'label-3Xqxy756',
        showOnHover: 'showOnHover-1q6ySzZc',
      };
    },
    'x0D+': function (e, t, n) {
      var o, r, i;
      (r = [t]),
        void 0 ===
          (i =
            'function' ==
            typeof (o = function (e) {
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
                var o = {
                  get passive() {
                    n = !0;
                  },
                };
                window.addEventListener('testPassive', null, o),
                  window.removeEventListener('testPassive', null, o);
              }
              var r =
                  'undefined' != typeof window &&
                  window.navigator &&
                  window.navigator.platform &&
                  /iP(ad|hone|od)/.test(window.navigator.platform),
                i = [],
                c = !1,
                s = -1,
                a = void 0,
                l = void 0,
                u = function (e) {
                  return i.some(function (t) {
                    return !(
                      !t.options.allowTouchMove || !t.options.allowTouchMove(e)
                    );
                  });
                },
                d = function (e) {
                  var t = e || window.event;
                  return (
                    !!u(t.target) ||
                    1 < t.touches.length ||
                    (t.preventDefault && t.preventDefault(), !1)
                  );
                },
                f = function () {
                  setTimeout(function () {
                    void 0 !== l &&
                      ((document.body.style.paddingRight = l), (l = void 0)),
                      void 0 !== a &&
                        ((document.body.style.overflow = a), (a = void 0));
                  });
                };
              (e.disableBodyScroll = function (e, o) {
                if (r) {
                  if (!e)
                    return void console.error(
                      'disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.',
                    );
                  if (
                    e &&
                    !i.some(function (t) {
                      return t.targetElement === e;
                    })
                  ) {
                    var f = { targetElement: e, options: o || {} };
                    (i = [].concat(t(i), [f])),
                      (e.ontouchstart = function (e) {
                        1 === e.targetTouches.length &&
                          (s = e.targetTouches[0].clientY);
                      }),
                      (e.ontouchmove = function (t) {
                        var n, o, r, i;
                        1 === t.targetTouches.length &&
                          ((o = e),
                          (i = (n = t).targetTouches[0].clientY - s),
                          !u(n.target) &&
                            ((o && 0 === o.scrollTop && 0 < i) ||
                            ((r = o) &&
                              r.scrollHeight - r.scrollTop <= r.clientHeight &&
                              i < 0)
                              ? d(n)
                              : n.stopPropagation()));
                      }),
                      c ||
                        (document.addEventListener(
                          'touchmove',
                          d,
                          n ? { passive: !1 } : void 0,
                        ),
                        (c = !0));
                  }
                } else {
                  (v = o),
                    setTimeout(function () {
                      if (void 0 === l) {
                        var e = !!v && !0 === v.reserveScrollBarGap,
                          t =
                            window.innerWidth -
                            document.documentElement.clientWidth;
                        e &&
                          0 < t &&
                          ((l = document.body.style.paddingRight),
                          (document.body.style.paddingRight = t + 'px'));
                      }
                      void 0 === a &&
                        ((a = document.body.style.overflow),
                        (document.body.style.overflow = 'hidden'));
                    });
                  var m = { targetElement: e, options: o || {} };
                  i = [].concat(t(i), [m]);
                }
                var v;
              }),
                (e.clearAllBodyScrollLocks = function () {
                  r
                    ? (i.forEach(function (e) {
                        (e.targetElement.ontouchstart = null),
                          (e.targetElement.ontouchmove = null);
                      }),
                      c &&
                        (document.removeEventListener(
                          'touchmove',
                          d,
                          n ? { passive: !1 } : void 0,
                        ),
                        (c = !1)),
                      (i = []),
                      (s = -1))
                    : (f(), (i = []));
                }),
                (e.enableBodyScroll = function (e) {
                  if (r) {
                    if (!e)
                      return void console.error(
                        'enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.',
                      );
                    (e.ontouchstart = null),
                      (e.ontouchmove = null),
                      (i = i.filter(function (t) {
                        return t.targetElement !== e;
                      })),
                      c &&
                        0 === i.length &&
                        (document.removeEventListener(
                          'touchmove',
                          d,
                          n ? { passive: !1 } : void 0,
                        ),
                        (c = !1));
                  } else
                    1 === i.length && i[0].targetElement === e
                      ? (f(), (i = []))
                      : (i = i.filter(function (t) {
                          return t.targetElement !== e;
                        }));
                });
            })
              ? o.apply(t, r)
              : o) || (e.exports = i);
    },
  },
]);
