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
            Object(o.__extends)(t, e),
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
        u = n('DTHj'),
        l = n('X0gx'),
        d = n('8Rai');
      function f(e) {
        var t = e.controller,
          n = e.children,
          c = e.isOpened,
          f = e.closeOnClickOutside,
          v = void 0 === f || f,
          m = e.doNotCloseOn,
          p = e.onClickOutside,
          h = e.onClose,
          b = Object(o.__rest)(e, [
            'controller',
            'children',
            'isOpened',
            'closeOnClickOutside',
            'doNotCloseOn',
            'onClickOutside',
            'onClose',
          ]),
          y = Object(r.useContext)(l.a),
          g = Object(d.a)({
            handler: function (e) {
              p && p(e);
              if (!v) return;
              if (m && e.target instanceof Node) {
                var t = s.a.findDOMNode(m);
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
                  u.a,
                  Object(o.__assign)({}, b, {
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
      Object.defineProperty(t, '__esModule', { value: !0 }),
        n('mrSG').__exportStar(n('swCq'), t);
    },
    N5tr: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return d;
      }),
        n.d(t, 'b', function () {
          return m;
        });
      var o = n('mrSG'),
        r = n('q1tI'),
        i = n.n(r),
        c = n('TSYQ'),
        s = n('tWVy'),
        a = n('JWMC'),
        u = n('QpNh'),
        l = n('v1bN'),
        d = l;
      function f(e) {
        var t = e.reference,
          n = Object(o.__rest)(e, ['reference']),
          r = Object(o.__assign)(Object(o.__assign)({}, n), { ref: t });
        return i.a.createElement(e.href ? 'a' : 'div', r);
      }
      function v(e) {
        e.stopPropagation();
      }
      function m(e) {
        var t,
          n,
          d,
          m = e.className,
          p = e.title,
          h = e.labelRowClassName,
          b = e.shortcut,
          y = e.forceShowShortcuts,
          g = e.icon,
          w = e.isActive,
          O = e.isDisabled,
          _ = e.isHovered,
          E = e.appearAsDisabled,
          C = e.label,
          S = e.link,
          j = e.showToolboxOnHover,
          k = e.target,
          I = e.toolbox,
          M = e.reference,
          N = e.onMouseOut,
          q = e.onMouseOver,
          x = e.theme,
          L = void 0 === x ? l : x,
          T = Object(u.a)(e),
          D = Object(r.useRef)(null);
        return i.a.createElement(
          f,
          Object(o.__assign)({}, T, {
            className: c(
              m,
              L.item,
              g && L.withIcon,
              ((t = {}),
              (t[L.isActive] = w),
              (t[L.isDisabled] = O || E),
              (t[L.hovered] = _),
              t),
            ),
            title: p,
            href: S,
            target: k,
            reference: function (e) {
              (D.current = e), M && M(e);
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
              if (1 === t.button && S && n) {
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
              className: L.icon,
              dangerouslySetInnerHTML: { __html: g },
            }),
          i.a.createElement(
            'div',
            { className: c(L.labelRow, h) },
            i.a.createElement('div', { className: L.label }, C),
          ),
          (void 0 !== b || y) &&
            i.a.createElement(
              'div',
              { className: L.shortcut },
              (d = b) && d.split('+').join(' + '),
            ),
          void 0 !== I &&
            i.a.createElement(
              'div',
              {
                onClick: v,
                className: c(L.toolbox, ((n = {}), (n[L.showOnHover] = j), n)),
              },
              I,
            ),
        );
      }
    },
    QpNh: function (e, t, n) {
      'use strict';
      function o(e) {
        for (
          var t = {}, n = 0, o = Object.entries(e).filter(r);
          n < o.length;
          n++
        ) {
          var i = o[n],
            c = i[0],
            s = i[1];
          t[c] = s;
        }
        return t;
      }
      function r(e) {
        var t = e[0],
          n = e[1];
        return 0 === t.indexOf('data-') && 'string' == typeof n;
      }
      n.d(t, 'a', function () {
        return o;
      });
    },
    R5JZ: function (e, t, n) {
      'use strict';
      function o(e, t, n, o, r) {
        function i(r) {
          if (!(e > r.timeStamp)) {
            var i = r.target;
            void 0 !== n &&
              null !== t &&
              null !== i &&
              i.ownerDocument === o &&
              (t.contains(i) || n(r));
          }
        }
        return (
          r.click && o.addEventListener('click', i, !1),
          r.mouseDown && o.addEventListener('mousedown', i, !1),
          r.touchEnd && o.addEventListener('touchend', i, !1),
          r.touchStart && o.addEventListener('touchstart', i, !1),
          function () {
            o.removeEventListener('click', i, !1),
              o.removeEventListener('mousedown', i, !1),
              o.removeEventListener('touchend', i, !1),
              o.removeEventListener('touchstart', i, !1);
          }
        );
      }
      n.d(t, 'a', function () {
        return o;
      });
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
        u = n('5Ssy'),
        l = n('tc+8'),
        d = n.n(l),
        f = n('aIyQ'),
        v = n.n(f),
        m = n('qFKp'),
        p = n('jOdQ');
      function h(e) {
        var t = e.title,
          n = e.studyMetaInfo,
          o = e.model,
          l = e.confirmInputsType,
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
          _ = Object(r.useMemo)(function () {
            var e = new v.a();
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
          E = Object(r.useRef)(null);
        return (
          Object(r.useEffect)(
            function () {
              if (!m.CheckMobile.any() && g && 'symbol' === l && E.current) {
                var e = E.current.querySelector('input');
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
              h(O.state().inputs), S();
            },
            onCancel: f,
            onClickOutside: S,
            onClose: S,
            render: function () {
              return i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement('div', { className: p.separator }),
                i.a.createElement(
                  a.a,
                  { className: p.scrollable, onScroll: C },
                  i.a.createElement(u.a, {
                    reference: E,
                    property: O,
                    model: o,
                    study: _,
                    inputs: j(),
                  }),
                ),
              );
            },
            defaultActionOnClose: c.b.None,
            submitButtonText: window.t('Apply'),
            submitOnEnterKey: !1,
          })
        );
        function C() {
          s.a.fire();
        }
        function S() {
          w(!1), b();
        }
        function j() {
          return 'symbol' === l
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
    swCq: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.Icon = void 0);
      var o = n('mrSG'),
        r = n('q1tI');
      t.Icon = r.forwardRef(function (e, t) {
        var n = e.icon,
          i = void 0 === n ? '' : n,
          c = o.__rest(e, ['icon']);
        return r.createElement(
          'span',
          o.__assign({}, c, { ref: t, dangerouslySetInnerHTML: { __html: i } }),
        );
      });
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
                u = void 0,
                l = function (e) {
                  return i.some(function (t) {
                    return !(
                      !t.options.allowTouchMove || !t.options.allowTouchMove(e)
                    );
                  });
                },
                d = function (e) {
                  var t = e || window.event;
                  return (
                    !!l(t.target) ||
                    1 < t.touches.length ||
                    (t.preventDefault && t.preventDefault(), !1)
                  );
                },
                f = function () {
                  setTimeout(function () {
                    void 0 !== u &&
                      ((document.body.style.paddingRight = u), (u = void 0)),
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
                          !l(n.target) &&
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
                  (m = o),
                    setTimeout(function () {
                      if (void 0 === u) {
                        var e = !!m && !0 === m.reserveScrollBarGap,
                          t =
                            window.innerWidth -
                            document.documentElement.clientWidth;
                        e &&
                          0 < t &&
                          ((u = document.body.style.paddingRight),
                          (document.body.style.paddingRight = t + 'px'));
                      }
                      void 0 === a &&
                        ((a = document.body.style.overflow),
                        (document.body.style.overflow = 'hidden'));
                    });
                  var v = { targetElement: e, options: o || {} };
                  i = [].concat(t(i), [v]);
                }
                var m;
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
