(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    '6uNr': function (e, t, n) {
      e.exports = {
        menuWrap: 'menuWrap-1gEtmoET',
        isMeasuring: 'isMeasuring-FZ0EJCM2',
        scrollWrap: 'scrollWrap-1B5MfTJt',
        momentumBased: 'momentumBased-1Jq4gQt2',
        menuBox: 'menuBox-20sJGjtG',
        isHidden: 'isHidden-2vLQpR1t',
      };
    },
    DTHj: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return g;
      });
      var r = n('mrSG'),
        o = n('q1tI'),
        i = n.n(o),
        s = n('TSYQ'),
        l = n.n(s),
        a = n('Eyy1'),
        u = n('Hr11'),
        c = n('XAms'),
        p = n('+EG+'),
        d = n('tWVy'),
        h = n('jAh7'),
        f = n('lxNp'),
        m = n('dxYz'),
        _ = n('PN6A'),
        v = n('6uNr'),
        g = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._containerRef = null),
              (n._scrollWrapRef = null),
              (n._raf = null),
              (n._manager = new h.OverlapManager()),
              (n._hotkeys = null),
              (n._scroll = 0),
              (n._handleContainerRef = function (e) {
                (n._containerRef = e),
                  'function' == typeof n.props.reference &&
                    n.props.reference(e),
                  'object' == typeof n.props.reference &&
                    (n.props.reference.current = e);
              }),
              (n._handleScrollWrapRef = function (e) {
                return (n._scrollWrapRef = e);
              }),
              (n._handleMeasure = function (e) {
                if (!n.state.isMeasureValid) {
                  var t = n.props.position,
                    r = Object(a.ensureNotNull)(n._containerRef),
                    o = r.getBoundingClientRect(),
                    i = document.documentElement.clientHeight,
                    s = document.documentElement.clientWidth,
                    l = i - 0,
                    c = o.height > l;
                  if (c)
                    (Object(a.ensureNotNull)(n._scrollWrapRef).style.overflowY =
                      'scroll'),
                      (o = r.getBoundingClientRect());
                  var p = o.width,
                    d = o.height,
                    h = 'function' == typeof t ? t(p, d) : t,
                    f = s - (h.overrideWidth || p) - 0,
                    m = Object(u.clamp)(h.x, 0, Math.max(0, f)),
                    _ = i - (h.overrideHeight || d) - 0,
                    v = Object(u.clamp)(h.y, 0, Math.max(0, _));
                  h.forbidCorrectYCoord &&
                    v < h.y &&
                    ((l -= h.y - v), (v = h.y)),
                    n.setState(
                      {
                        appearingMenuHeight:
                          h.overrideHeight || (c ? l : void 0),
                        appearingMenuWidth: h.overrideWidth,
                        appearingPosition: { x: m, y: v },
                        isMeasureValid: !0,
                      },
                      function () {
                        n._restoreScrollPosition(), e && e();
                      },
                    );
                }
              }),
              (n._restoreScrollPosition = function () {
                var e = document.activeElement,
                  t = Object(a.ensureNotNull)(n._containerRef);
                if (null !== e && t.contains(e))
                  try {
                    e.scrollIntoView();
                  } catch (r) {}
                else
                  Object(a.ensureNotNull)(n._scrollWrapRef).scrollTop =
                    n._scroll;
              }),
              (n._resize = function () {
                null === n._raf &&
                  (n._raf = requestAnimationFrame(function () {
                    n.setState({
                      appearingMenuHeight: void 0,
                      appearingMenuWidth: void 0,
                      appearingPosition: void 0,
                      isMeasureValid: void 0,
                    }),
                      (n._raf = null);
                  }));
              }),
              (n._handleGlobalClose = function () {
                n.props.onClose();
              }),
              (n._handleSlot = function (e) {
                n._manager.setContainer(e);
              }),
              (n._handleScroll = function () {
                n._scroll = Object(a.ensureNotNull)(n._scrollWrapRef).scrollTop;
              }),
              (n.state = {}),
              n
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.componentWillReceiveProps = function (e) {
              this.props.isOpened &&
                !e.isOpened &&
                (this.setState({ isMeasureValid: void 0 }), (this._scroll = 0));
            }),
            (t.prototype.componentDidMount = function () {
              var e = this;
              this._handleMeasure(this.props.onOpen);
              var t = this.props.customCloseDelegate;
              (void 0 === t ? d.a : t).subscribe(this, this._handleGlobalClose),
                window.addEventListener('resize', this._resize),
                this._hotkeys ||
                  ((this._hotkeys = f.createGroup({ desc: 'Popup menu' })),
                  this._hotkeys.add({
                    desc: 'Close',
                    hotkey: 27,
                    handler: function () {
                      return e._handleGlobalClose();
                    },
                  }));
            }),
            (t.prototype.componentDidUpdate = function () {
              this._handleMeasure();
            }),
            (t.prototype.componentWillUnmount = function () {
              var e = this.props.customCloseDelegate;
              (void 0 === e ? d.a : e).unsubscribe(
                this,
                this._handleGlobalClose,
              ),
                window.removeEventListener('resize', this._resize),
                this._hotkeys &&
                  (this._hotkeys.destroy(), (this._hotkeys = null)),
                null !== this._raf &&
                  (cancelAnimationFrame(this._raf), (this._raf = null));
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.children,
                n = e.minWidth,
                r = e.theme,
                o = void 0 === r ? v : r,
                s = e.className,
                a = e.onMouseOver,
                u = e.onMouseOut,
                d = e.onKeyDown,
                h = this.state,
                f = h.appearingMenuHeight,
                g = h.appearingMenuWidth,
                y = h.appearingPosition,
                M = h.isMeasureValid;
              return i.a.createElement(
                _.a.Provider,
                { value: this },
                i.a.createElement(
                  m.b,
                  null,
                  i.a.createElement(
                    p.b.Provider,
                    { value: this._manager },
                    i.a.createElement(
                      'div',
                      {
                        className: l()(s, o.menuWrap, !M && o.isMeasuring),
                        style: {
                          height: f,
                          left: y && y.x,
                          minWidth: n,
                          position: 'fixed',
                          top: y && y.y,
                          width: g,
                        },
                        ref: this._handleContainerRef,
                        onScroll: this.props.onScroll,
                        onContextMenu: c.b,
                        tabIndex: this.props.tabIndex,
                        onMouseOver: a,
                        onMouseOut: u,
                        onKeyDown: d,
                      },
                      i.a.createElement(
                        'div',
                        {
                          className: l()(
                            o.scrollWrap,
                            !this.props.noMomentumBasedScroll &&
                              o.momentumBased,
                          ),
                          style: {
                            overflowY: void 0 !== f ? 'scroll' : 'auto',
                          },
                          onScroll: this._handleScroll,
                          ref: this._handleScrollWrapRef,
                        },
                        i.a.createElement(b, { className: o.menuBox }, t),
                      ),
                    ),
                  ),
                  i.a.createElement(p.a, { reference: this._handleSlot }),
                ),
              );
            }),
            (t.prototype.update = function () {
              this._resize();
            }),
            t
          );
        })(i.a.PureComponent);
      function b(e) {
        var t = Object(a.ensureNotNull)(Object(o.useContext)(m.a));
        return i.a.createElement(
          'div',
          {
            className: e.className,
            onMouseOver: function (e) {
              if (null === t.current || !(e.target instanceof Node)) return;
              t.isSubmenuNode(e.target) || t.setCurrent(null);
            },
            'data-name': 'menu-inner',
          },
          e.children,
        );
      }
    },
    PN6A: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      });
      var r = n('q1tI'),
        o = n.n(r).a.createContext(null);
    },
    dxYz: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      }),
        n.d(t, 'b', function () {
          return s;
        });
      var r = n('q1tI'),
        o = n.n(r),
        i = o.a.createContext(null);
      function s(e) {
        var t = Object(r.useState)(null),
          n = t[0],
          s = t[1],
          l = Object(r.useRef)(null),
          a = Object(r.useRef)(new Map());
        return (
          Object(r.useEffect)(function () {
            return function () {
              null !== l.current && clearTimeout(l.current);
            };
          }, []),
          o.a.createElement(
            i.Provider,
            {
              value: {
                current: n,
                setCurrent: function (e) {
                  null !== l.current &&
                    (clearTimeout(l.current), (l.current = null));
                  null === n
                    ? s(e)
                    : (l.current = setTimeout(function () {
                        (l.current = null), s(e);
                      }, 100));
                },
                registerSubmenu: function (e, t) {
                  return (
                    a.current.set(e, t),
                    function () {
                      a.current.delete(e);
                    }
                  );
                },
                isSubmenuNode: function (e) {
                  return Array.from(a.current.values()).some(function (t) {
                    return t(e);
                  });
                },
              },
            },
            e.children,
          )
        );
      }
    },
  },
]);
