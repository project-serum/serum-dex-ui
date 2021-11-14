(window.webpackJsonp = window.webpackJsonp || []).push([
  ['full-tooltips-popup'],
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
        a = n('i8i4'),
        c = n.n(a),
        s = (n('EsMY'), n('AiMB')),
        u = n('DTHj'),
        l = n('X0gx'),
        d = n('8Rai');
      function f(e) {
        var t = e.controller,
          n = e.children,
          a = e.isOpened,
          f = e.closeOnClickOutside,
          p = void 0 === f || f,
          v = e.doNotCloseOn,
          m = e.onClickOutside,
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
          w = Object(r.useContext)(l.a),
          g = Object(d.a)({
            handler: function (e) {
              m && m(e);
              if (!p) return;
              if (v && e.target instanceof Node) {
                var t = c.a.findDOMNode(v);
                if (t instanceof Node && t.contains(e.target)) return;
              }
              h();
            },
            mouseDown: !0,
            touchStart: !0,
          });
        return a
          ? i.a.createElement(
              s.a,
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
                    isOpened: a,
                    onClose: h,
                    onScroll: function (t) {
                      var n = e.onScroll;
                      n && n(t);
                      t.stopPropagation();
                    },
                    customCloseDelegate: w,
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
    Sn4D: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return v;
      });
      var o = n('q1tI'),
        r = n.n(o),
        i = n('Eyy1'),
        a = n('TSYQ'),
        c = n('x0D+'),
        s = n('Nkvk'),
        u = n('AiMB'),
        l = n('mkWe'),
        d = n('qFKp'),
        f = n('X0gx'),
        p = n('sHQ4');
      function v(e) {
        var t = e.position,
          n = e.onClose,
          v = e.children,
          m = e.className,
          h = Object(i.ensureNotNull)(Object(o.useContext)(l.a)),
          b = Object(o.useState)(0),
          w = b[0],
          g = b[1],
          y = Object(o.useRef)(null),
          E = Object(o.useContext)(f.a);
        return (
          Object(o.useEffect)(function () {
            var e;
            return (
              null === (e = y.current) ||
                void 0 === e ||
                e.focus({ preventScroll: !0 }),
              E.subscribe(h, n),
              Object(s.setFixedBodyState)(!0),
              d.CheckMobile.iOS() &&
                Object(c.disableBodyScroll)(Object(i.ensureNotNull)(y.current)),
              g(h.addDrawer()),
              function () {
                E.unsubscribe(h, n);
                var e = h.removeDrawer();
                d.CheckMobile.iOS() &&
                  Object(c.enableBodyScroll)(
                    Object(i.ensureNotNull)(y.current),
                  ),
                  0 === e && Object(s.setFixedBodyState)(!1);
              }
            );
          }, []),
          r.a.createElement(
            u.a,
            null,
            r.a.createElement(
              'div',
              {
                className: a(p.wrap, p['position' + t]),
              },
              w === h.currentDrawer &&
                r.a.createElement('div', { className: p.backdrop, onClick: n }),
              r.a.createElement(
                'div',
                {
                  className: a(p.drawer, p['position' + t], m),
                  ref: function (e) {
                    y.current = e;
                  },
                  tabIndex: -1,
                  onScroll: function (e) {
                    e.stopPropagation();
                  },
                },
                v,
              ),
            ),
          )
        );
      }
    },
    mkWe: function (e, t, n) {
      'use strict';
      n.d(t, 'b', function () {
        return a;
      }),
        n.d(t, 'a', function () {
          return c;
        });
      var o = n('mrSG'),
        r = n('q1tI'),
        i = n.n(r),
        a = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._addDrawer = function () {
                var e = n.state.currentDrawer + 1;
                return n.setState({ currentDrawer: e }), e;
              }),
              (n._removeDrawer = function () {
                var e = n.state.currentDrawer - 1;
                return n.setState({ currentDrawer: e }), e;
              }),
              (n.state = { currentDrawer: 0 }),
              n
            );
          }
          return (
            Object(o.__extends)(t, e),
            (t.prototype.render = function () {
              return i.a.createElement(
                c.Provider,
                {
                  value: {
                    addDrawer: this._addDrawer,
                    removeDrawer: this._removeDrawer,
                    currentDrawer: this.state.currentDrawer,
                  },
                },
                this.props.children,
              );
            }),
            t
          );
        })(i.a.PureComponent),
        c = i.a.createContext(null);
    },
    my4O: function (e, t, n) {
      e.exports = {
        'css-value-small-size': '18px',
        'css-value-border-radius-small-size': '9px',
        'css-value-large-size': '22px',
        'css-value-border-radius-large-size': '11px',
        popupWidget: 'popupWidget-2X0DYakn',
        desc: 'desc-btEANXbj',
        icon: 'icon-2jQlAvgr',
        small: 'small-3UTqSQwC',
        large: 'large-2BZlk4pO',
        title: 'title-1Yt34zFi',
        text: 'text-Md3DtcCM',
        action: 'action-6Ezy2_v3',
      };
    },
    sHQ4: function (e, t, n) {
      e.exports = {
        wrap: 'wrap-3vvdSnDX',
        backdrop: 'backdrop-1knaw_yl',
        positionBottom: 'positionBottom-3zJf6Byh',
        drawer: 'drawer-1_nJUEiM',
        positionLeft: 'positionLeft-2wxVhi9G',
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
          a = o.__rest(e, ['icon']);
        return r.createElement(
          'span',
          o.__assign({}, a, { ref: t, dangerouslySetInnerHTML: { __html: i } }),
        );
      });
    },
    'vR7+': function (e, t, n) {
      'use strict';
      n.r(t);
      var o = n('mrSG'),
        r = n('q1tI'),
        i = n.n(r),
        a = n('i8i4'),
        c = (n('YFKU'), n('9dlw')),
        s = n('/KDZ'),
        u = n('Sn4D'),
        l = n('mkWe'),
        d = n('e3/o'),
        f = n('TSYQ'),
        p = n('Iivm'),
        v = n('vqb8'),
        m = n('my4O'),
        h = new WeakMap();
      function b(e) {
        var t = Object(v.a)({ watchedValue: e.info });
        if (null === t) return null;
        var n = t.map(function (t) {
          var n = t.title,
            o = t.titleColor,
            r = t.icon,
            a = t.iconClassName,
            c = t.html,
            s = t.action,
            u = t.size;
          h.has(t) || h.set(t, Object(d.randomHash)());
          return i.a.createElement(
            'div',
            { key: h.get(t), className: m.popupWidget },
            i.a.createElement(p.Icon, {
              className: f(m.icon, a, m[u]),
              icon: r || void 0,
            }),
            i.a.createElement(
              'div',
              { className: m.desc },
              i.a.createElement(
                'span',
                { style: { color: o || void 0 }, className: f(m.title, m[u]) },
                n,
              ),
              c &&
                i.a.createElement('p', {
                  className: f(m.text, m[u]),
                  dangerouslySetInnerHTML: { __html: c.join(' ') },
                }),
              s &&
                i.a.createElement(
                  'span',
                  {
                    className: f(
                      s.tooltip && 'apply-common-tooltip',
                      m.action,
                      m[u],
                    ),
                    onClick: function () {
                      e.onClose(), null == s || s.onClick();
                    },
                    title: s.tooltip,
                  },
                  s.text,
                ),
            ),
          );
        });
        return i.a.createElement(i.a.Fragment, null, n);
      }
      var w = new WeakMap();
      function g(e) {
        var t = e.statusWidgetInfos
          .filter(function (e) {
            return e.visible.value();
          })
          .map(function (t) {
            return (
              w.has(t) || w.set(t, Object(d.randomHash)()),
              i.a.createElement(b, {
                key: w.get(t),
                info: t.model.fullInfo(),
                onClose: e.onClose,
              })
            );
          });
        return i.a.createElement(
          l.b,
          null,
          i.a.createElement(
            s.a,
            { rule: 'screen and (max-width: 419px)' },
            function (n) {
              return n
                ? i.a.createElement(
                    u.a,
                    { onClose: e.onClose, position: 'Bottom' },
                    t,
                  )
                : i.a.createElement(
                    c.a,
                    {
                      isOpened: !0,
                      onClose: e.onClose,
                      position: e.position,
                      doNotCloseOn: e.rendererButton,
                    },
                    t,
                  );
            },
          ),
        );
      }
      function y(e, t, n, i, c, s) {
        var u = {
          rendererButton: n,
          position: s,
          statusWidgetInfos: i,
          onClose: c,
        };
        e
          ? a.render(r.createElement(g, Object(o.__assign)({}, u)), t)
          : a.unmountComponentAtNode(t);
      }
      n.d(t, 'render', function () {
        return y;
      });
    },
    vqb8: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      });
      var o = n('q1tI'),
        r = function (e) {
          var t = 'watchedValue' in e ? e.watchedValue : void 0,
            n = 'defaultValue' in e ? e.defaultValue : e.watchedValue.value(),
            r = Object(o.useState)(t ? t.value() : n),
            i = r[0],
            a = r[1];
          return (
            Object(o.useEffect)(
              function () {
                if (t) {
                  a(t.value());
                  var e = function (e) {
                    return a(e);
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
                a = !1,
                c = -1,
                s = void 0,
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
                      void 0 !== s &&
                        ((document.body.style.overflow = s), (s = void 0));
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
                          (c = e.targetTouches[0].clientY);
                      }),
                      (e.ontouchmove = function (t) {
                        var n, o, r, i;
                        1 === t.targetTouches.length &&
                          ((o = e),
                          (i = (n = t).targetTouches[0].clientY - c),
                          !l(n.target) &&
                            ((o && 0 === o.scrollTop && 0 < i) ||
                            ((r = o) &&
                              r.scrollHeight - r.scrollTop <= r.clientHeight &&
                              i < 0)
                              ? d(n)
                              : n.stopPropagation()));
                      }),
                      a ||
                        (document.addEventListener(
                          'touchmove',
                          d,
                          n ? { passive: !1 } : void 0,
                        ),
                        (a = !0));
                  }
                } else {
                  (v = o),
                    setTimeout(function () {
                      if (void 0 === u) {
                        var e = !!v && !0 === v.reserveScrollBarGap,
                          t =
                            window.innerWidth -
                            document.documentElement.clientWidth;
                        e &&
                          0 < t &&
                          ((u = document.body.style.paddingRight),
                          (document.body.style.paddingRight = t + 'px'));
                      }
                      void 0 === s &&
                        ((s = document.body.style.overflow),
                        (document.body.style.overflow = 'hidden'));
                    });
                  var p = { targetElement: e, options: o || {} };
                  i = [].concat(t(i), [p]);
                }
                var v;
              }),
                (e.clearAllBodyScrollLocks = function () {
                  r
                    ? (i.forEach(function (e) {
                        (e.targetElement.ontouchstart = null),
                          (e.targetElement.ontouchmove = null);
                      }),
                      a &&
                        (document.removeEventListener(
                          'touchmove',
                          d,
                          n ? { passive: !1 } : void 0,
                        ),
                        (a = !1)),
                      (i = []),
                      (c = -1))
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
                      a &&
                        0 === i.length &&
                        (document.removeEventListener(
                          'touchmove',
                          d,
                          n ? { passive: !1 } : void 0,
                        ),
                        (a = !1));
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
