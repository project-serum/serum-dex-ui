(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    '1O6C': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return c;
      });
      var o = n('mrSG'),
        i = n('q1tI'),
        r = n('TSYQ'),
        s = n('+EG+'),
        a = n('jAh7'),
        u = n('QpNh'),
        d = n('aYmi'),
        c = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._manager = new a.OverlapManager()),
              (t._handleSlot = function (e) {
                t._manager.setContainer(e);
              }),
              t
            );
          }
          return (
            Object(o.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.rounded,
                n = void 0 === t || t,
                a = e.shadowed,
                c = void 0 === a || a,
                l = e.fullscreen,
                h = void 0 !== l && l,
                p = e.darker,
                _ = void 0 !== p && p,
                g = e.className,
                f = e.backdrop,
                m = r(
                  g,
                  d.dialog,
                  n && d.rounded,
                  c && d.shadowed,
                  h && d.fullscreen,
                  _ && d.darker,
                ),
                v = Object(u.a)(this.props);
              return i.createElement(
                i.Fragment,
                null,
                i.createElement(
                  s.b.Provider,
                  { value: this._manager },
                  f && i.createElement('div', { className: d.backdrop }),
                  i.createElement(
                    'div',
                    Object(o.__assign)({}, v, {
                      className: m,
                      style: this._createStyles(),
                      ref: this.props.reference,
                      onFocus: this.props.onFocus,
                      onMouseDown: this.props.onMouseDown,
                      onMouseUp: this.props.onMouseUp,
                      onClick: this.props.onClick,
                      onKeyDown: this.props.onKeyDown,
                      tabIndex: -1,
                    }),
                    this.props.children,
                  ),
                ),
                i.createElement(s.a, { reference: this._handleSlot }),
              );
            }),
            (t.prototype._createStyles = function () {
              var e = this.props,
                t = e.bottom,
                n = e.left,
                o = e.width;
              return {
                bottom: t,
                left: n,
                right: e.right,
                top: e.top,
                zIndex: e.zIndex,
                maxWidth: o,
                height: e.height,
              };
            }),
            t
          );
        })(i.PureComponent);
    },
    Iivm: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        n('mrSG').__exportStar(n('swCq'), t);
    },
    RgaO: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      });
      var o = n('mrSG'),
        i = n('8Rai');
      function r(e) {
        var t = e.children,
          n = Object(o.__rest)(e, ['children']);
        return t(Object(i.a)(n));
      }
    },
    WXjp: function (e, t, n) {
      'use strict';
      var o = n('mrSG'),
        i = n('q1tI'),
        r = n('TSYQ'),
        s = n('Eyy1'),
        a = n('1O6C'),
        u = n('uqKQ'),
        d = n('RgaO'),
        c = n('Hr11');
      function l(e, t, n, o) {
        return e + t > o && (e = o - t), e < n && (e = n), e;
      }
      function h(e) {
        return {
          x: Object(c.clamp)(
            e.x,
            20,
            document.documentElement.clientWidth - 20,
          ),
          y: Object(c.clamp)(e.y, 20, window.innerHeight - 20),
        };
      }
      function p(e) {
        return { x: e.clientX, y: e.clientY };
      }
      function _(e) {
        return { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
      var g = (function () {
          function e(e, t, n) {
            var o = this;
            void 0 === n && (n = { boundByScreen: !0 }),
              (this._drag = null),
              (this._canBeTouchClick = !1),
              (this._frame = null),
              (this._onMouseDragStart = function (e) {
                if (0 === e.button) {
                  e.preventDefault(),
                    document.addEventListener('mousemove', o._onMouseDragMove),
                    document.addEventListener('mouseup', o._onMouseDragEnd);
                  var t = h(p(e));
                  o._dragStart(t);
                }
              }),
              (this._onTouchDragStart = function (e) {
                (o._canBeTouchClick = !0),
                  e.preventDefault(),
                  o._header.addEventListener('touchmove', o._onTouchDragMove, {
                    passive: !1,
                  });
                var t = h(_(e));
                o._dragStart(t);
              }),
              (this._onMouseDragEnd = function (e) {
                e.target instanceof Node &&
                  o._header.contains(e.target) &&
                  e.preventDefault(),
                  document.removeEventListener('mousemove', o._onMouseDragMove),
                  document.removeEventListener('mouseup', o._onMouseDragEnd),
                  o._onDragStop();
              }),
              (this._onTouchDragEnd = function (e) {
                o._header.removeEventListener('touchmove', o._onTouchDragMove),
                  o._onDragStop(),
                  o._canBeTouchClick &&
                    ((o._canBeTouchClick = !1),
                    (function (e) {
                      if (e instanceof SVGElement) {
                        var t = document.createEvent('SVGEvents');
                        t.initEvent('click', !0, !0), e.dispatchEvent(t);
                      }
                      e instanceof HTMLElement && e.click();
                    })(e.target));
              }),
              (this._onMouseDragMove = function (e) {
                var t = h(p(e));
                o._dragMove(t);
              }),
              (this._onTouchDragMove = function (e) {
                (o._canBeTouchClick = !1), e.preventDefault();
                var t = h(_(e));
                o._dragMove(t);
              }),
              (this._onDragStop = function () {
                (o._drag = null), o._header.classList.remove('dragging');
              }),
              (this._dialog = e),
              (this._header = t),
              (this._options = n),
              this._header.addEventListener(
                'mousedown',
                this._onMouseDragStart,
              ),
              this._header.addEventListener(
                'touchstart',
                this._onTouchDragStart,
              ),
              this._header.addEventListener('touchend', this._onTouchDragEnd);
          }
          return (
            (e.prototype.destroy = function () {
              null !== this._frame && cancelAnimationFrame(this._frame),
                this._header.removeEventListener(
                  'mousedown',
                  this._onMouseDragStart,
                ),
                document.removeEventListener('mouseup', this._onMouseDragEnd),
                this._header.removeEventListener(
                  'touchstart',
                  this._onTouchDragStart,
                ),
                this._header.removeEventListener(
                  'touchend',
                  this._onTouchDragEnd,
                ),
                document.removeEventListener(
                  'mouseleave',
                  this._onMouseDragEnd,
                );
            }),
            (e.prototype.updateOptions = function (e) {
              this._options = e;
            }),
            (e.prototype._dragStart = function (e) {
              var t = this._dialog.getBoundingClientRect();
              this._drag = {
                startX: e.x,
                startY: e.y,
                finishX: e.x,
                finishY: e.y,
                dialogX: t.left,
                dialogY: t.top,
              };
              var n = Math.round(t.left),
                o = Math.round(t.top);
              (this._dialog.style.transform =
                'translate(' + n + 'px, ' + o + 'px)'),
                this._header.classList.add('dragging');
            }),
            (e.prototype._dragMove = function (e) {
              var t = this;
              if (this._drag) {
                if (
                  ((this._drag.finishX = e.x),
                  (this._drag.finishY = e.y),
                  null !== this._frame)
                )
                  return;
                this._frame = requestAnimationFrame(function () {
                  if (t._drag) {
                    var n = e.x - t._drag.startX,
                      o = e.y - t._drag.startY;
                    t._moveDialog(t._drag.dialogX + n, t._drag.dialogY + o);
                  }
                  t._frame = null;
                });
              }
            }),
            (e.prototype._moveDialog = function (e, t) {
              var n = this._dialog.getBoundingClientRect(),
                o = this._options.boundByScreen,
                i = l(
                  e,
                  n.width,
                  o ? 0 : -1 / 0,
                  o ? window.innerWidth : 1 / 0,
                ),
                r = l(
                  t,
                  n.height,
                  o ? 0 : -1 / 0,
                  o ? window.innerHeight : 1 / 0,
                );
              this._dialog.style.transform =
                'translate(' + Math.round(i) + 'px, ' + Math.round(r) + 'px)';
            }),
            e
          );
        })(),
        f = (function () {
          function e(e, t) {
            var n = this;
            void 0 === t && (t = { vertical: 0 }),
              (this._frame = null),
              (this._isFullscreen = !1),
              (this._handleResize = function () {
                null === n._frame &&
                  (n._frame = requestAnimationFrame(function () {
                    n.recalculateBounds(), (n._frame = null);
                  }));
              }),
              (this._dialog = e),
              (this._options = t),
              (this._initialHeight = e.style.height),
              window.addEventListener('resize', this._handleResize);
          }
          return (
            (e.prototype.updateOptions = function (e) {
              void 0 === e && (e = { vertical: 0 }), (this._options = e);
            }),
            (e.prototype.setFullscreen = function (e) {
              this._isFullscreen !== e &&
                ((this._isFullscreen = e), this.recalculateBounds());
            }),
            (e.prototype.centerAndFit = function () {
              var e = this._options.vertical,
                t = document.documentElement,
                n = t.clientHeight,
                o = t.clientWidth,
                i = n - 2 * e,
                r = this._dialog.getBoundingClientRect(),
                s = r.height;
              i < s && ((s = i), (this._dialog.style.height = s + 'px'));
              var a = o / 2 - r.width / 2,
                u = n / 2 - s / 2;
              (this._dialog.style.top = '0px'),
                (this._dialog.style.left = '0px'),
                (this._dialog.style.transform =
                  'translate(' +
                  Math.round(a) +
                  'px, ' +
                  Math.round(u) +
                  'px)');
            }),
            (e.prototype.recalculateBounds = function () {
              this._dialog.style.height = 'auto';
              var e = document.documentElement,
                t = e.clientHeight,
                n = e.clientWidth;
              if (this._isFullscreen)
                (this._dialog.style.top = '0px'),
                  (this._dialog.style.left = '0px'),
                  (this._dialog.style.width = n + 'px'),
                  (this._dialog.style.height = t + 'px'),
                  (this._dialog.style.transform = 'none');
              else {
                var o = this._options.vertical;
                (this._dialog.style.width = ''),
                  (this._dialog.style.height = '');
                var i = this._dialog.getBoundingClientRect(),
                  r = t - 2 * o,
                  s = l(i.left, i.width, 0, n),
                  a = l(i.top, i.height, o, t);
                (this._dialog.style.top = '0px'),
                  (this._dialog.style.left = '0px'),
                  (this._dialog.style.transform =
                    'translate(' +
                    Math.round(s) +
                    'px, ' +
                    Math.round(a) +
                    'px)'),
                  (this._dialog.style.height =
                    r < i.height ? r + 'px' : this._initialHeight);
              }
            }),
            (e.prototype.destroy = function () {
              window.removeEventListener('resize', this._handleResize),
                null !== this._frame &&
                  (cancelAnimationFrame(this._frame), (this._frame = null));
            }),
            e
          );
        })(),
        m = n('AiMB'),
        v = n('pafz'),
        y = n('qFKp'),
        E = n('ZzSk');
      n.d(t, 'a', function () {
        return x;
      });
      var M = { boundByScreen: !0 },
        w = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._dialog = null),
              (t._handleDialogRef = function (e) {
                var n = t.props.reference;
                t._dialog &&
                  y.isIE &&
                  t._dialog.removeEventListener('focusin', t._handleFocusin),
                  (t._dialog = e),
                  t._dialog &&
                    y.isIE &&
                    t._dialog.addEventListener('focusin', t._handleFocusin),
                  'function' == typeof n && n(e);
              }),
              (t._handleFocusin = function () {
                y.isIE && t._moveToTop();
              }),
              (t._handleFocus = function (e) {
                y.isIE || t._moveToTop();
              }),
              (t._handleMouseDown = function (e) {
                t._moveToTop();
              }),
              (t._handleTouchStart = function (e) {
                t._moveToTop();
              }),
              t
            );
          }
          return (
            Object(o.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this;
              return i.createElement(
                v.a.Provider,
                { value: this },
                i.createElement(
                  d.a,
                  {
                    mouseDown: !0,
                    touchStart: !0,
                    handler: this.props.onClickOutside,
                  },
                  function (t) {
                    return i.createElement(
                      'div',
                      {
                        ref: t,
                        'data-outside-boundary-for': e.props.name,
                        onFocus: e._handleFocus,
                        onMouseDown: e._handleMouseDown,
                        onTouchStart: e._handleTouchStart,
                      },
                      i.createElement(
                        a.a,
                        Object(o.__assign)({}, e.props, {
                          reference: e._handleDialogRef,
                          className: r(E.dialog, e.props.className),
                        }),
                        e.props.children,
                      ),
                    );
                  },
                ),
              );
            }),
            (t.prototype.componentDidMount = function () {
              var e = Object(s.ensureNotNull)(this._dialog),
                t = e.querySelector('[data-dragg-area]');
              t &&
                t instanceof HTMLElement &&
                (this._drag = new g(e, t, {
                  boundByScreen: Boolean(this.props.boundByScreen),
                })),
                (this._resize = new f(e, this.props.guard)),
                this._resize.centerAndFit(),
                this._resize.setFullscreen(Boolean(this.props.fullscreen)),
                this.props.shouldForceFocus && e.focus();
            }),
            (t.prototype.componentDidUpdate = function () {
              this._resize &&
                (this._resize.updateOptions(this.props.guard),
                this._resize.setFullscreen(Boolean(this.props.fullscreen))),
                this._drag &&
                  this._drag.updateOptions({
                    boundByScreen: Boolean(this.props.boundByScreen),
                  });
            }),
            (t.prototype.componentWillUnmount = function () {
              this._drag && this._drag.destroy(),
                this._resize && this._resize.destroy();
            }),
            (t.prototype.centerAndFit = function () {
              this._resize && this._resize.centerAndFit();
            }),
            (t.prototype.recalculateBounds = function () {
              this._resize && this._resize.recalculateBounds();
            }),
            (t.prototype._moveToTop = function () {
              null !== this.context && this.context.moveToTop();
            }),
            (t.contextType = m.b),
            (t.defaultProps = M),
            t
          );
        })(i.PureComponent),
        x = Object(u.a)(w);
    },
    ZzSk: function (e, t, n) {
      e.exports = { dialog: 'dialog-34XTwGTT', dragging: 'dragging-33JfMDO6' };
    },
    aYmi: function (e, t, n) {
      e.exports = {
        dialog: 'dialog-2APwxL3O',
        rounded: 'rounded-tXI9mwGE',
        shadowed: 'shadowed-2M13-xZa',
        fullscreen: 'fullscreen-2RqU2pqU',
        darker: 'darker-2nhdv2oS',
        backdrop: 'backdrop-1tKdKmN_',
      };
    },
    pafz: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      });
      var o = n('q1tI'),
        i = o.createContext(null);
    },
    swCq: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o = n('mrSG'),
        i = n('q1tI');
      t.Icon = i.forwardRef(function (e, t) {
        var n = e.icon,
          r = void 0 === n ? '' : n,
          s = o.__rest(e, ['icon']);
        return i.createElement(
          'span',
          o.__assign({}, s, { ref: t, dangerouslySetInnerHTML: { __html: r } }),
        );
      });
    },
    uqKQ: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return s;
      });
      var o = n('mrSG'),
        i = n('q1tI'),
        r = n('AiMB');
      function s(e) {
        return (function (t) {
          function n() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(o.__extends)(n, t),
            (n.prototype.render = function () {
              var t = this.props,
                n = t.isOpened,
                s = t.root;
              if (!n) return null;
              var a = i.createElement(
                e,
                Object(o.__assign)({}, this.props, { zIndex: 150 }),
              );
              return 'parent' === s ? a : i.createElement(r.a, null, a);
            }),
            n
          );
        })(i.PureComponent);
      }
    },
  },
]);
